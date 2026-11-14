---
title: "Queues"
sidebar:
  order: 5
---

This article provides examples of using RTOS Queues.

#### Why RTOS Queues

There are standard queues, or <vector> in C++, but RTOS queues should almost always be used in your application because they are thread-safe (no race conditions with multiple tasks), and they co-operate with your RTOS to schedule the tasks.  For instance, your task could optionally sleep while receiving data if the queue is empty, or it can sleep while sending the data if the queue is full.

#### Queues vs. Binary Semaphore for "Signal"

Binary Semaphores may be used to "signal" between two contexts (tasks or interrupts), but they do not contain any payload. For example, for an application that captures a keystroke inside of an interrupt, it could "signal" the data processing task to awake upon the semaphore, however, there is no payload associated with it to identify what keystroke was input.  With an RTOS queue, the data processing task can wake up on a payload and process a particular keystroke.

The data-gathering tasks can simply send the key-press detected to the queue, and the processing task can receive items from the queue, and perform the corresponding action. Moreover, if there are no items in the queue, the consumer task (the processing one) can sleep until data becomes available. You can see how this scheme lends itself well to having multiple ISRs queue up data for a task (or multiple tasks) to handle.

---

#### Examples

##### Simple

After looking through the sample code below, you should then [watch this video](http://www.youtube.com/watch?v=8lIpI30Tj-g).

Let us study an example of two tasks communicating to each other over a queue.

```cpp
QueueHandle_t handle_of_int_queue;

void producer(void *p) {
  int x = 0;
  
  while (1) {
    vTaskDelay(100);
    ++x;
    if (xQueueSend(handle_of_int_queue, &x, 0)) {
    }
  }
}

void consumer(void *p) {
  while (1) {
    // We do not need vTaskDelay() because this task will sleep for up to 100 ticks until there is an item in the queue
    if (xQueueReceive(handle_of_int_queue, &x, 100)) {
      printf("Received %i\n", x);
    } else {
      puts("Timeout --> No data received");
    }
  }
}

void main(void) {
  // Queue handle is not valid until you create it
  handle_of_int_queue = xQueueCreate(10, sizeof(int));
}

```

##### Queue usage with Interrupts

When an item is sent from within an interrupt (or received), the main difference in the API is that there is no way to "sleep". For example, we cannot sleep while waiting to write an item to the queue if the queue is full. FreeRTOS API has dedicated API to be used from within ISRs, and other RTOSs simply state that you can use the same API, but the sleep time has to be zero if you are inside of an interrupt.

With the FreeRTOS `FromISR` API, in place of the sleep time is a pointer to a variable that informs us if an RTOS scheduling yield is required, and FreeRTOS asks us to yield in our application code.

```cpp
static QueueHandle_t uart_rx_queue;

// Queue API is special if you are inside an ISR
void uart_rx_isr(void) {
  BaseType_t yield_required = 0;
  if (!xQueueSendFromISR(uart_rx_queue, &x, &yield_required)) {
    // TODO: Queue was full, handle this case
  }
  
  portYIELD_FROM_ISR(yield_required);
}

void queue_rx_task(void *p) {
  int x = 0;
  // Receive is the usual receive because we are not inside an ISR
  while (1) {
    if(xQueueReceive(uart_rx_queue, &x, portMAX_DELAY)) {
    }
  }
}

void main(void) {
   uart_rx_queue = xQueueCreate(10, sizeof(char));
}
```

---

#### Advanced Examples

##### Multiple Producers and Consumers

There are multiple ways to create multiple producers and consumers. The easiest way to do so at the expense of a potentially excessive number of tasks is to have multiple tasks for each producer, and for each consumer.

```c
static QueueHandle_t light_sensor_queue;
static QueueHandle_t temperature_sensor_queue;

void light_sensor_task(void *p) {
  while (1) {
    const int sensor_value = rand(); // Some random value
    if(xQueueSend(light_sensor_queue, &sensor_value, portMAX_DELAY)) {
    }
    vTaskDelay(1000);
  }
}
void temperature_sensor_task(void *p) {
  while (1) {
    const int temperature_value = rand(); // Some random value
    if(xQueueSend(temperature_sensor_queue, &temperature_value, portMAX_DELAY)) {
    }
    vTaskDelay(1000);
  }
}

void consumer_of_light_sensor(void *p) {
  int light_sensor_value = 0;
  while(1) {
    xQueueReceive(light_sensor_queue, &light_sensor_value, portMAX_DELAY);
    printf("Light sensor value: %i\n", light_sensor_value);
  }
}
void consumer_of_temperature_sensor(void *p) {
  int temperature_sensor_value = 0;
  while(1) {
    xQueueReceive(temperature_sensor_queue, &temperature_sensor_value, portMAX_DELAY);
    printf("Temperature sensor value: %i\n", temperature_sensor_value);
  }
}

void main(void) {
   light_sensor_queue = xQueueCreate(3, sizeof(int));
   temperature_sensor_queue = xQueueCreate(3, sizeof(int));
  
   xTaskCreate(light_sensor_task, ...);
   xTaskCreate(temperature_sensor_task, ...);
 
   xTaskCreate(consumer_of_light_sensor, ...);
   xTaskCreate(consumer_of_temperature_sensor, ...);
}
```

##### Multiple Producers, 1 Consumer

In order to create multiple producers sending different sensor values, we can "multiplex" the data values. The producer would send a value, and also send an enumeration of what type of data it has sent. The consumer would block on a single queue that all the producers are writing, and then it can use a switch/case statement to handle data from multiple producers sending different kinds of values.

```c
static QueueHandle_t sensor_queue;

typedef enum {
  light,
  temperature,
} sensor_type_e;

typedef struct {
  sensor_type_e sensor_type;
  int value;
} sensor_value_s;

void light_sensor_task(void *p) {
  while (1) {
    const sensor_value_s sensor_value = {light, rand()}; // Some random value
    if(xQueueSend(sensor_queue, &sensor_value, portMAX_DELAY)) {
    }
    vTaskDelay(1000);
  }
}
void temperature_sensor_task(void *p) {
  while (1) {
    const sensor_value_s sensor_value = {temperature, rand()}; // Some random value
    if(xQueueSend(sensor_queue, &temperature_value, portMAX_DELAY)) {
    }
    vTaskDelay(1000);
  }
}

void consumer_of_light_sensor(void *p) {
  sensor_value_s sensor;
  while(1) {
    xQueueReceive(sensor_queue, &sensor, portMAX_DELAY);

    switch (sensor.sensor_type) {
      case light:          printf("Light sensor value: %i\n", sensor.value);
        break;
      case temperature:    printf("Temperature sensor value: %i\n", sensor.value);
        break;
    }
  }
}

void main(void) {
   sensor_queue = xQueueCreate(3, sizeof(sensor_value_s));
  
   xTaskCreate(light_sensor_task, ...);
   xTaskCreate(temperature_sensor_task, ...);
 
   xTaskCreate(consumer_of_sensor_values, ...);
}
```

##### Multiple Producers, 1 Consumer using QueueSet API

Before you explore this API, be sure to read [FreeRTOS documentation](https://freertos.org/Pend-on-multiple-rtos-objects.html) about "Alternatives to Using Queue Sets". In general, this should be the "last resort", and you should avoid the QueueSet API if possible due to its complexity. 

**QueueSets** is the most efficient way of blocking on multiple queues/semaphores. The `semaphore_task` is one of the producer tasks that give the semaphore at 1Hz, Queue1, and Queue2 handler in the light sensor and temperature task which randomly generates the data of light and temperature sensor. The idea of using queue sets in the consumer task is to wait on either the semaphore task or queues data.

```c
static QueueHandle_t q_light_sensor, q_temperature_sensor;
static QueueSetHandle_t xQueueSet;
static SemaphoreHandle_t xSemaphore;

int generate_random_sensor_values(int lower, int upper) {
  int sensor_value = (rand() % (upper - lower + 1)) + lower;
  return sensor_value;
}

// runing @1Hz
void semaphore_task(void *p) {
  while (1) {
    vTaskDelay(1000);
    xSemaphoreGive(xSemaphore);
  }
}

// When u don't want to wait for queue/semaphore forever block on multiple queues
// Add data of light sensor to Queue1
void light_sensor_task(void *p) {
  while (1) {
    const int sensor_value = generate_random_sensor_values(10, 99);
    xQueueSend(q_light_sensor, &sensor_value, 0);
    vTaskDelay(500);
  }
}

//Add data of Temperature Sensor to Queue2
void temperature_sensor_task(void *p) {
  while (1) {
    const int sensor_value = generate_random_sensor_values(25, 85);
    xQueueSend(q_temperature_sensor, &sensor_value, 0);
    vTaskDelay(500);
  }
}

// Unblocks the task when any of the queues receives some data
void consumer(void *p) {
  int count = 0;
  int sensor_value = 0;

  while (1) {
    //xQueueSelectFromSet returns the handle of the Queue, or Semaphore that unblocked us
    QueueSetMemberHandle_t xUnBlockedMember = xQueueSelectFromSet(xQueueSet, 2000);
    
    if (xBlockedMember == q_light_sensor) {
      // Use zero timeout during xQueueReceive() because xQueueSelectFromSet() has
      // already informed us that there is an event on this q_light_sensor
      if (xQueueReceive(xUnBlockedMember, &sensor_value, 0)) {
        printf("Light sensor value: %i\n", sensor_value);
      }
    } else if (xBlockedMember == q_temperature_sensor) {
      if (xQueueReceive(xUnBlockedMember, &sensor_value, 0)) {
        printf("Temperature sensor value: %i\n", sensor_value);
      }
    } else if (xUnBlockedMember == xSemaphore) {
      // TODO: Do something at 1Hz, such as averaging sensor values
      if (xSemaphoreTake(xUnBlockedMember, 0)) {
        puts("-----------------------------------");
        puts("1Hz signal");
      }
    } else {
      puts("Invalid Case");
    }
  }
}

int main(void) {
  srand(time(0));

  // Create an empty semaphores and the queues to add the data of queues and semaphores to the queueSet
  xSemaphore = xSemaphoreCreateBinary();
  q_light_sensor = xQueueCreate(10, sizeof(sensor_value_s));
  q_temperature_sensor = xQueueCreate(10, sizeof(sensor_value_s));

  // Make sure before creating a queue set Queues and the semaphore we want to add to the queue sets are empty.
  // Length of the queue set is important -> Q1:10 | Q2:10 | Semaphore:1
  xQueueSet = xQueueCreateSet((10 + 10 + 1) * sizeof(int));

  // Associate the queues and the semaphore to the queue set
  xQueueAddToSet(xSemaphore, xQueueSet);
  xQueueAddToSet(q_light_sensor, xQueueSet);
  xQueueAddToSet(q_temperature_sensor, xQueueSet);

  xTaskCreate(semaphore_task, "semaphore task", 2048/(sizeof(void*)), NULL, 1, NULL);
  xTaskCreate(light_sensor_task, "light", 2048, NULL, 1, NULL);
  xTaskCreate(temperature_sensor_task, "temperature", 2048, NULL, 1, NULL);
  xTaskCreate(consumer, "single consumer", 4096, NULL, 2, NULL);
  vTaskStartScheduler();
}
```

---

#### Additional Information

- [Queue Management (Amazon Docs)](https://docs.aws.amazon.com/freertos-kernel/latest/dg/queue-management.html) 
- [Queue API (FreeRTOS Docs)](https://www.freertos.org/a00018.html)
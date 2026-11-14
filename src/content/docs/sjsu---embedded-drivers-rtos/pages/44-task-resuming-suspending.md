---
title: "Task Resuming & Suspending"
sidebar:
  order: 35
---

A freeRTOS task that is currently running can be suspended by another task or by its own task. A suspended task will not get any processing time from the micro-controller. Once suspended, it can only be resumed by another task.

API which can suspend a single task is:

`void vTaskSuspend( TaskHandle_t xTaskToSuspend );`   

Refer this link to explore more details on the API. **https://www.freertos.org/a00130.html**

API to suspend the scheduler is:

`void vTaskSuspendAll( void );`   

Refer this link to explore more details on the API. **https://www.freertos.org/a00134.html**

API to resume a single task:   `void vTaskResume( TaskHandle_t xTaskToResume );```   

Refer this link to explore more details. **https://www.freertos.org/a00131.html**

API to resume the scheduler:   `BaseType_t xTaskResumeAll( void );`   

Refer this link to explore more details. **https://www.freertos.org/a00135.html **
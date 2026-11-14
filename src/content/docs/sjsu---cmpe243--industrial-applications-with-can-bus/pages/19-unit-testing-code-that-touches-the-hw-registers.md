---
title: "Unit Testing code that touches the HW registers"
sidebar:
  order: 15
---

 This article guides you on how to unit-test code that reads or writes hardware registers of your SJ development board.

 

```c
// Typical code
int get_ultrasonic_pulse_width(void) {
  // Send a pulse width
  LPC_GPIO1->CLR = (1 << 2);
  delay_us(10);
  LPC_GPIO1->SET = (1 << 2);
  
  const uint32_t previous = time_now();
  while (LPC_GPIO1->PIN & (1 << 3)) {
   ;
  }
  
  return time_delta(previous);
}
```

Before we solve the problem, let us write better code that is self expressive and does not require comments to understand its intent.

```c
static void send_pulse_to_ultrasonic(void) {
  const uint32_t ultrasonic_pulse_pin = (1 << 2);

  LPC_GPIO1->CLR = ultrasonic_pulse_pin;
  delay_us(10);
  LPC_GPIO1->SET = ultrasonic_pulse_pin;
}

static void wait_for_ultrasonic_pulse_to_bounce_back() {
  while (LPC_GPIO1->PIN & (1 << 3)) {
   ;
  }
}

// Notice the clarity of this function compared to the previous code snippet
int get_ultrasonic_pulse_width(void) {
  send_pulse_to_ultrasonic();
  
  const uint32_t previous = time_now();
  wait_for_ultrasonic_pulse_to_bounce_back();
  return time_delta(previous);
}
```

And the next level:

```c
// Separate header file to abstract the hardware, such that we can mock out this API
// file: ultrasonic_pins.h
void ultrasonic_pins__set_pulse(bool true_for_logic_high);
bool ultrasonic_pins__get_input_pin_value(void);
```

```c
#include "ultrasonic_pins.h"

static void send_pulse_to_ultrasonic(void) {
  // This can now move to ultrasonic_pins.c
  // const uint32_t ultrasonic_pulse_pin = (1 << 2);

  ultrasonic_pins__set_pulse(true);
  delay_us(10);
  ultrasonic_pins__set_pulse(false);
}

static void wait_for_ultrasonic_pulse_to_bounce_back() {
  while (ultrasonic_pins__get_input_pin_value()) {
   ;
  }
}

int get_ultrasonic_pulse_width(void) {
  send_pulse_to_ultrasonic();
  
  const uint32_t previous = time_now();
  wait_for_ultrasonic_pulse_to_bounce_back();
  return time_delta(previous);
}
```
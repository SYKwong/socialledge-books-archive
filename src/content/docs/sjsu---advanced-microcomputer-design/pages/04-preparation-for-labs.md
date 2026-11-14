---
title: "Preparation for Labs"
sidebar:
  order: 2
---

C programming basics

- Functions 
- Structures 
- Pointers 

- [Bit Masking Tutorial](/sjsu---embedded-drivers-rtos/pages/15-bitmasking/) 
- Basic parts and toolkit 
  - Look for any basic starter kit on amazon - mostly Breadboard, Jumper cables, LEDs, Potentiometer, Buttons, Resistors 
  - [Something like this](https://www.amazon.com/EL-CK-002-Electronic-Breadboard-Capacitor-Potentiometer/dp/B01ERP6WL4/ref=pd_sbs_147_2/132-6936347-2117569?_encoding=UTF8&pd_rd_i=B01ERP6WL4&pd_rd_r=6a783095-ec87-42ae-9f01-a5ebc9a44607&pd_rd_w=V2aU6&pd_rd_wg=11h1i&pf_rd_p=d66372fe-68a6-48a3-90ec-41d7f64212be&pf_rd_r=368WNKXFBBQY2FJQ4119&psc=1&refRID=368WNKXFBBQY2FJQ4119) 

 

---

#### Part 0: Compile the sample project

In this part, the objective is simply to compile your project, and to make sure you can load the compiled image onto your board.

- Erase the contents of your existing main.c and use the code given below 
- Use the Google Chrome based serial terminal to confirm the output 

```c
// file: main.c
#include <stdio.h>

// Separate include files for Clang to sort separately
#include "delay.h"

void main(void) {
  unsigned counter = 0;
  
  while (1) {
    printf("Running: %u\n", counter); 
    ++counter;

    delay__ms(1000U);
  }
}

```

 

---

##### Part 1: Get familiar with GPIO Blinky API

The objectives of this part is:

- Learn how to use existing API to blink LEDs 
- Get familiar with how to develop clean C APIs 
- Explore the code of the existing APIs to assess how it works 

```c
#include <stdio.h>

#include "board_io.h"
#include "delay.h"
#include "gpio.h"

/* This is just a sample
 * Cross-reference the schematic, and browse through the header files included above
 * to go above and beyond, and in general play with existing APIs
 */
int main(void) {
  gpio_s led0 = board_io__get_led0();

  while (1) {
    gpio__toggle(led0);
    delay__ms(500U);
  }

  return 0;
}

```

 

---

#### Conclusion

This exercise was mostly to get familiar with the board, and be excited about how your software can control hardware. In the following weeks, you will be developing your own code by directly manipulating the microcontroller's memory to achieve your objectives.
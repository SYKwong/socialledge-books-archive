---
title: "Use single periodic callback if possible"
sidebar:
  order: 16
---

The problem with multiple callbacks is that the higher rate can interrupt a lower rate callback.

```c
int number = 0;

void periodic_callback_10hz(uint32_t count) {
  number++;
}

// This can interrupt the 10hz in the middle of its operations
void periodic_callback_100hz(uint32_t count) {
  number++;
}

```

Use this instead:

```c
int number = 0;

void periodic_callback_10hz(uint32_t count) {
  //number++;
}

// This can interrupt the 10hz in the middle of its operations
void periodic_callback_100hz(uint32_t count) {
  if (0 == (count % 10)) {
    number++;
  }

  number++;
}

```
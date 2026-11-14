---
title: "EventGroups"
sidebar:
  order: 36
---

Event group APIs can be used to monitor a set of tasks. A software watchdog in an embedded system can make use of event groups for a group of tasks and notify/alert the user if any of the task misbehaves.

Each task uses an event bit. After every successful iteration of the task, the bit can be set by the task to mark completion. The event bits are then checked in the watchdog task to see if all the tasks are running successfully. If any of the bits are not set, then watchdog task can alert about the task to the user.

Below are the APIs that can be used. Refer to each of the API to understand how to use them in your application.

- [xEventGroupCreate](https://www.freertos.org/xEventGroupCreate.html) 
- [xEventGroupCreateStatic](https://www.freertos.org/xEventGroupCreateStatic.html) 
- [xEventGroupWaitBits](https://www.freertos.org/xEventGroupWaitBits.html) 
- [xEventGroupSetBits](https://www.freertos.org/xEventGroupSetBits.html) 
- [xEventGroupSetBitsFromISR](https://www.freertos.org/xEventGroupSetBitsFromISR.html) 
- [xEventGroupClearBits](https://www.freertos.org/xEventGroupClearBits.html) 
- [xEventGroupClearBitsFromISR](https://www.freertos.org/xEventGroupClearBitsFromISR.html) 
- [xEventGroupGetBits](https://www.freertos.org/xEventGroupGetBits.html) 
- [xEventGroupGetBitsFromISR](https://www.freertos.org/xEventGroupGetBitsFromISR.html) 
- [xEventGroupSync](https://www.freertos.org/xEventGroupSync.html) 
- [vEventGroupDelete](https://www.freertos.org/vEventGroupDelete.html)
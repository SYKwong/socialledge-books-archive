---
title: "I2C communication on the same board"
sidebar:
  order: 33
---

An alternative to test the I2C Leader-member (master-slave) communication on the same board is to make one of the i2c port(I2C2) as Leader(Master) and any of the available ports (I2C0/I2C1) as member (Slave).

Steps:

- Create `i2c_slave_init.h and i2c_slave_init.c` files. Define a function `i2c_slave_init(...)` which assigns slave address and slave configuration for a given i2c port. (Refer i2c__initialize function in i2c.c) 
- Also refer `peripherals_init.c` to get more info on how I2C2 is initialized. 
- Call the `i2c_slave_init(...)` function in your main.c 
- Connect the SDA and SCL pins of I2C2 with the respective SDA and SCL pins of I2C0/1 
- Flash the code and try issuing `i2c detect` command to see if you see a response from member device 

You will still need to check a couple of things (`CLK, IOPIN` registers) before the driver becomes fully functional.
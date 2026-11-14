import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://socialledge.kyle-kwong.com',
  integrations: [
    starlight({
      title: 'SocialLedge Books',
      description: 'Archived SJSU CmpE & Embedded Systems course books from books.socialledge.com',
      sidebar: [
      {
            "label": "SJSU: Embedded Drivers & RTOS",
            "collapsed": true,
            "items": [
                  {
                        "label": "Overview",
                        "slug": "sjsu---embedded-drivers-rtos"
                  },
                  {
                        "label": "Project: MP3 Player (CmpE146)",
                        "collapsed": true,
                        "items": [
                              {
                                    "label": "MP3 Project",
                                    "slug": "sjsu---embedded-drivers-rtos/pages/02-mp3-project"
                              },
                              {
                                    "label": "Song list code module",
                                    "slug": "sjsu---embedded-drivers-rtos/pages/03-song-list-code-module"
                              }
                        ]
                  },
                  {
                        "label": "Project: Video Game (CmpE244)",
                        "collapsed": true,
                        "items": [
                              {
                                    "label": "LED Matrix Driver",
                                    "slug": "sjsu---embedded-drivers-rtos/pages/05-led-matrix-driver"
                              }
                        ]
                  },
                  {
                        "label": "SJ2 Board and Software",
                        "collapsed": true,
                        "items": [
                              {
                                    "label": "SJ2 Development Environment",
                                    "slug": "sjsu---embedded-drivers-rtos/pages/07-sj2-development-environment"
                              },
                              {
                                    "label": "SJ2 Board",
                                    "slug": "sjsu---embedded-drivers-rtos/pages/08-sj2-board"
                              },
                              {
                                    "label": "RTOS Trace",
                                    "slug": "sjsu---embedded-drivers-rtos/pages/09-rtos-trace"
                              },
                              {
                                    "label": "Standart Output",
                                    "slug": "sjsu---embedded-drivers-rtos/pages/10-standart-output"
                              }
                        ]
                  },
                  {
                        "label": "Lesson FreeRTOS + LPC40xx",
                        "collapsed": true,
                        "items": [
                              {
                                    "label": "LPC40xx MCU Memory Map",
                                    "slug": "sjsu---embedded-drivers-rtos/pages/11-lpc40xx-mcu-memory-map"
                              },
                              {
                                    "label": "FreeRTOS & Tasks",
                                    "slug": "sjsu---embedded-drivers-rtos/pages/12-freertos-tasks"
                              },
                              {
                                    "label": "Lab: FreeRTOS Tasks",
                                    "slug": "sjsu---embedded-drivers-rtos/pages/13-lab-freertos-tasks"
                              }
                        ]
                  },
                  {
                        "label": "Lesson GPIO",
                        "collapsed": true,
                        "items": [
                              {
                                    "label": "Bitmasking",
                                    "slug": "sjsu---embedded-drivers-rtos/pages/15-bitmasking"
                              },
                              {
                                    "label": "GPIO",
                                    "slug": "sjsu---embedded-drivers-rtos/pages/16-gpio"
                              },
                              {
                                    "label": "Lab: GPIO",
                                    "slug": "sjsu---embedded-drivers-rtos/pages/17-lab-gpio"
                              }
                        ]
                  },
                  {
                        "label": "Lesson Interrupts",
                        "collapsed": true,
                        "items": [
                              {
                                    "label": "Lookup Tables",
                                    "slug": "sjsu---embedded-drivers-rtos/pages/18-lookup-tables"
                              },
                              {
                                    "label": "Binary Semaphores",
                                    "slug": "sjsu---embedded-drivers-rtos/pages/19-binary-semaphores"
                              },
                              {
                                    "label": "Nested Vector Interrupt Controller (NVIC)",
                                    "slug": "sjsu---embedded-drivers-rtos/pages/20-nested-vector-interrupt-controller-nvic"
                              },
                              {
                                    "label": "Lab: Interrupts and Binary Semaphores",
                                    "slug": "sjsu---embedded-drivers-rtos/pages/21-lab-interrupts-and-binary-semaphores"
                              }
                        ]
                  },
                  {
                        "label": "Lesson ADC + PWM",
                        "collapsed": true,
                        "items": [
                              {
                                    "label": "Pin Selection and Pin Mode",
                                    "slug": "sjsu---embedded-drivers-rtos/pages/23-pin-selection-and-pin-mode"
                              },
                              {
                                    "label": "ADC (Analog to Digital Converter)",
                                    "slug": "sjsu---embedded-drivers-rtos/pages/24-adc-analog-to-digital-converter"
                              },
                              {
                                    "label": "PWM (Pulse Width Modulation)",
                                    "slug": "sjsu---embedded-drivers-rtos/pages/25-pwm-pulse-width-modulation"
                              },
                              {
                                    "label": "Lab: ADC + PWM",
                                    "slug": "sjsu---embedded-drivers-rtos/pages/26-lab-adc-pwm"
                              }
                        ]
                  },
                  {
                        "label": "Lesson SPI",
                        "collapsed": true,
                        "items": [
                              {
                                    "label": "SPI (Serial & Peripheral Interface)",
                                    "slug": "sjsu---embedded-drivers-rtos/pages/28-spi-serial-peripheral-interface"
                              },
                              {
                                    "label": "Mutexes",
                                    "slug": "sjsu---embedded-drivers-rtos/pages/29-mutexes"
                              },
                              {
                                    "label": "Structured Bit-fields Register Mapping",
                                    "slug": "sjsu---embedded-drivers-rtos/pages/30-structured-bit-fields-register-mapping"
                              },
                              {
                                    "label": "Lab: SPI Flash Interface",
                                    "slug": "sjsu---embedded-drivers-rtos/pages/31-lab-spi-flash-interface"
                              },
                              {
                                    "label": "Lab: SPI bus contention with SD Card",
                                    "slug": "sjsu---embedded-drivers-rtos/pages/32-lab-spi-bus-contention-with-sd-card"
                              }
                        ]
                  },
                  {
                        "label": "Lesson UART",
                        "collapsed": true,
                        "items": [
                              {
                                    "label": "Clock Systems and Timing",
                                    "slug": "sjsu---embedded-drivers-rtos/pages/34-clock-systems-and-timing"
                              },
                              {
                                    "label": "UART",
                                    "slug": "sjsu---embedded-drivers-rtos/pages/35-uart"
                              },
                              {
                                    "label": "Queues",
                                    "slug": "sjsu---embedded-drivers-rtos/pages/36-queues"
                              },
                              {
                                    "label": "Lab: UART",
                                    "slug": "sjsu---embedded-drivers-rtos/pages/37-lab-uart"
                              }
                        ]
                  },
                  {
                        "label": "Lesson I2C",
                        "collapsed": true,
                        "items": [
                              {
                                    "label": "I2C",
                                    "slug": "sjsu---embedded-drivers-rtos/pages/39-i2c"
                              },
                              {
                                    "label": "Lab: I2C Slave",
                                    "slug": "sjsu---embedded-drivers-rtos/pages/40-lab-i2c-slave"
                              },
                              {
                                    "label": "I2C communication on the same board",
                                    "slug": "sjsu---embedded-drivers-rtos/pages/41-i2c-communication-on-the-same-board"
                              }
                        ]
                  },
                  {
                        "label": "Lesson Watch Dogs",
                        "collapsed": true,
                        "items": [
                              {
                                    "label": "Watchdogs",
                                    "slug": "sjsu---embedded-drivers-rtos/pages/43-watchdogs"
                              },
                              {
                                    "label": "Task Resuming & Suspending",
                                    "slug": "sjsu---embedded-drivers-rtos/pages/44-task-resuming-suspending"
                              },
                              {
                                    "label": "EventGroups",
                                    "slug": "sjsu---embedded-drivers-rtos/pages/45-eventgroups"
                              },
                              {
                                    "label": "Lab Assignment: Watchdogs",
                                    "slug": "sjsu---embedded-drivers-rtos/pages/46-lab-assignment-watchdogs"
                              }
                        ]
                  },
                  {
                        "label": "Lesson X",
                        "collapsed": true,
                        "items": [
                              {
                                    "label": "Executable Format and Boot Loader",
                                    "slug": "sjsu---embedded-drivers-rtos/pages/48-executable-format-and-boot-loader"
                              },
                              {
                                    "label": "JTAG",
                                    "slug": "sjsu---embedded-drivers-rtos/pages/49-jtag"
                              },
                              {
                                    "label": "C vs. C++",
                                    "slug": "sjsu---embedded-drivers-rtos/pages/50-c-vs-c"
                              },
                              {
                                    "label": "Volatile Variable",
                                    "slug": "sjsu---embedded-drivers-rtos/pages/51-volatile-variable"
                              },
                              {
                                    "label": "Random Topics",
                                    "slug": "sjsu---embedded-drivers-rtos/pages/52-random-topics"
                              }
                        ]
                  },
                  {
                        "label": "FreeRTOS X",
                        "collapsed": true,
                        "items": [
                              {
                                    "label": "Critical Section",
                                    "slug": "sjsu---embedded-drivers-rtos/pages/54-critical-section"
                              },
                              {
                                    "label": "FreeRTOS Producer Consumer Tasks",
                                    "slug": "sjsu---embedded-drivers-rtos/pages/55-freertos-producer-consumer-tasks"
                              }
                        ]
                  }
            ]
      },
      {
            "label": "SJSU - CmpE243 - Industrial Applications with CAN Bus",
            "collapsed": true,
            "items": [
                  {
                        "label": "Overview",
                        "slug": "sjsu---cmpe243--industrial-applications-with-can-bus"
                  },
                  {
                        "label": "CmpE243 - What is it about?",
                        "slug": "sjsu---cmpe243--industrial-applications-with-can-bus/pages/02-cmpe243-what-is-it-about"
                  },
                  {
                        "label": "Advise for the Class",
                        "slug": "sjsu---cmpe243--industrial-applications-with-can-bus/pages/03-advise-for-the-class"
                  },
                  {
                        "label": "Introductory Labs",
                        "collapsed": true,
                        "items": [
                              {
                                    "label": "LAB: Periodic Scheduler",
                                    "slug": "sjsu---cmpe243--industrial-applications-with-can-bus/pages/05-lab-periodic-scheduler"
                              },
                              {
                                    "label": "LAB: Git",
                                    "slug": "sjsu---cmpe243--industrial-applications-with-can-bus/pages/06-lab-git"
                              },
                              {
                                    "label": "Git Basics",
                                    "slug": "sjsu---cmpe243--industrial-applications-with-can-bus/pages/07-git-basics"
                              }
                        ]
                  },
                  {
                        "label": "LABS",
                        "collapsed": true,
                        "items": [
                              {
                                    "label": "Lab: Queue",
                                    "slug": "sjsu---cmpe243--industrial-applications-with-can-bus/pages/09-lab-queue"
                              },
                              {
                                    "label": "LAB: Unit testing with mocks",
                                    "slug": "sjsu---cmpe243--industrial-applications-with-can-bus/pages/10-lab-unit-testing-with-mocks"
                              },
                              {
                                    "label": "LAB: GPS and UART",
                                    "slug": "sjsu---cmpe243--industrial-applications-with-can-bus/pages/11-lab-gps-and-uart"
                              },
                              {
                                    "label": "LAB: CAN bus",
                                    "slug": "sjsu---cmpe243--industrial-applications-with-can-bus/pages/12-lab-can-bus"
                              },
                              {
                                    "label": "LAB: CAN bus with DBC",
                                    "slug": "sjsu---cmpe243--industrial-applications-with-can-bus/pages/13-lab-can-bus-with-dbc"
                              },
                              {
                                    "label": "LAB: RC Car Infrastructure",
                                    "slug": "sjsu---cmpe243--industrial-applications-with-can-bus/pages/14-lab-rc-car-infrastructure"
                              },
                              {
                                    "label": "LAB: Geo Controller",
                                    "slug": "sjsu---cmpe243--industrial-applications-with-can-bus/pages/15-lab-geo-controller"
                              }
                        ]
                  },
                  {
                        "label": "Class Project and Useful Articles",
                        "collapsed": true,
                        "items": [
                              {
                                    "label": "Project Introduction and Guidelines",
                                    "slug": "sjsu---cmpe243--industrial-applications-with-can-bus/pages/17-project-introduction-and-guidelines"
                              },
                              {
                                    "label": "Project Hints",
                                    "slug": "sjsu---cmpe243--industrial-applications-with-can-bus/pages/18-project-hints"
                              },
                              {
                                    "label": "Unit Testing code that touches the HW registers",
                                    "slug": "sjsu---cmpe243--industrial-applications-with-can-bus/pages/19-unit-testing-code-that-touches-the-hw-registers"
                              },
                              {
                                    "label": "Use single periodic callback if possible",
                                    "slug": "sjsu---cmpe243--industrial-applications-with-can-bus/pages/20-use-single-periodic-callback-if-possible"
                              },
                              {
                                    "label": "CANTools",
                                    "slug": "sjsu---cmpe243--industrial-applications-with-can-bus/pages/21-cantools"
                              },
                              {
                                    "label": "Exploring DBC Autogenerated API",
                                    "slug": "sjsu---cmpe243--industrial-applications-with-can-bus/pages/22-exploring-dbc-autogenerated-api"
                              }
                        ]
                  },
                  {
                        "label": "Additional Topics",
                        "collapsed": true,
                        "items": [
                              {
                                    "label": "Unit-Test Basics and Mocks",
                                    "slug": "sjsu---cmpe243--industrial-applications-with-can-bus/pages/23-unit-test-basics-and-mocks"
                              },
                              {
                                    "label": "Navigating a Processor's Reference Manual",
                                    "slug": "sjsu---cmpe243--industrial-applications-with-can-bus/pages/24-navigating-a-processor-s-reference-manual"
                              }
                        ]
                  }
            ]
      },
      {
            "label": "SJSU - Advanced Microcomputer Design",
            "collapsed": true,
            "items": [
                  {
                        "label": "Overview",
                        "slug": "sjsu---advanced-microcomputer-design"
                  },
                  {
                        "label": "Syllabus",
                        "slug": "sjsu---advanced-microcomputer-design/pages/02-syllabus"
                  },
                  {
                        "label": "Lab Assignments",
                        "collapsed": true,
                        "items": [
                              {
                                    "label": "Preparation for Labs",
                                    "slug": "sjsu---advanced-microcomputer-design/pages/04-preparation-for-labs"
                              },
                              {
                                    "label": "GPIO - LED and Switch Interface",
                                    "slug": "sjsu---advanced-microcomputer-design/pages/05-gpio-led-and-switch-interface"
                              },
                              {
                                    "label": "Flash Accelerator Module",
                                    "slug": "sjsu---advanced-microcomputer-design/pages/06-flash-accelerator-module"
                              },
                              {
                                    "label": "DMA - Memory to Memory transfer",
                                    "slug": "sjsu---advanced-microcomputer-design/pages/07-dma-memory-to-memory-transfer"
                              },
                              {
                                    "label": "Clock Configuration",
                                    "slug": "sjsu---advanced-microcomputer-design/pages/08-clock-configuration"
                              },
                              {
                                    "label": "Hardware Timer",
                                    "slug": "sjsu---advanced-microcomputer-design/pages/09-hardware-timer"
                              },
                              {
                                    "label": "DMA and Timer Integration",
                                    "slug": "sjsu---advanced-microcomputer-design/pages/10-dma-and-timer-integration"
                              },
                              {
                                    "label": "UART using GPIO",
                                    "slug": "sjsu---advanced-microcomputer-design/pages/11-uart-using-gpio"
                              },
                              {
                                    "label": "EEPROM Driver",
                                    "slug": "sjsu---advanced-microcomputer-design/pages/12-eeprom-driver"
                              }
                        ]
                  },
                  {
                        "label": "Project",
                        "collapsed": true,
                        "items": [
                              {
                                    "label": "Project - LapKart",
                                    "slug": "sjsu---advanced-microcomputer-design/pages/13-project-lapkart"
                              }
                        ]
                  }
            ]
      },
      {
            "label": "RTOS",
            "collapsed": true,
            "items": [
                  {
                        "label": "Overview",
                        "slug": "rtos"
                  },
                  {
                        "label": "Development Environment",
                        "collapsed": true,
                        "items": [
                              {
                                    "label": "Setup Development Environment",
                                    "slug": "rtos/pages/03-setup-development-environment"
                              }
                        ]
                  },
                  {
                        "label": "Core Concepts",
                        "collapsed": true,
                        "items": [
                              {
                                    "label": "Stack Memory",
                                    "slug": "rtos/pages/04-stack-memory"
                              },
                              {
                                    "label": "Tasks",
                                    "slug": "rtos/pages/05-tasks"
                              },
                              {
                                    "label": "vTaskDelay",
                                    "slug": "rtos/pages/06-vtaskdelay"
                              },
                              {
                                    "label": "Queues",
                                    "slug": "rtos/pages/07-queues"
                              },
                              {
                                    "label": "Semaphores",
                                    "slug": "rtos/pages/08-semaphores"
                              }
                        ]
                  },
                  {
                        "label": "Applications",
                        "collapsed": true,
                        "items": [
                              {
                                    "label": "Handle multiple Queues",
                                    "slug": "rtos/pages/10-handle-multiple-queues"
                              },
                              {
                                    "label": "APIs to avoid",
                                    "slug": "rtos/pages/11-apis-to-avoid"
                              }
                        ]
                  },
                  {
                        "label": "Assignments",
                        "collapsed": true,
                        "items": [
                              {
                                    "label": "Multitasking: Hands-on",
                                    "slug": "rtos/pages/13-multitasking-hands-on"
                              },
                              {
                                    "label": "Thread Stack",
                                    "slug": "rtos/pages/14-thread-stack"
                              },
                              {
                                    "label": "FreeRTOS port",
                                    "slug": "rtos/pages/15-freertos-port"
                              },
                              {
                                    "label": "Queues",
                                    "slug": "rtos/pages/16-queues"
                              }
                        ]
                  }
            ]
      },
      {
            "label": "FreeRTOS",
            "collapsed": true,
            "items": [
                  {
                        "label": "Overview",
                        "slug": "freertos"
                  },
                  {
                        "label": "Queues",
                        "slug": "freertos/pages/02-queues"
                  },
                  {
                        "label": "Semaphores",
                        "slug": "freertos/pages/03-semaphores"
                  },
                  {
                        "label": "Tasks",
                        "slug": "freertos/pages/04-tasks"
                  },
                  {
                        "label": "APIs to avoid",
                        "slug": "freertos/pages/07-apis-to-avoid"
                  },
                  {
                        "label": "vTaskDelay",
                        "slug": "freertos/pages/08-vtaskdelay"
                  },
                  {
                        "label": "Applications",
                        "collapsed": true,
                        "items": [
                              {
                                    "label": "Handle multiple Queues",
                                    "slug": "freertos/pages/06-handle-multiple-queues"
                              }
                        ]
                  }
            ]
      },
      {
            "label": "Useful Knowledge",
            "collapsed": true,
            "items": [
                  {
                        "label": "Overview",
                        "slug": "useful-knowledge"
                  },
                  {
                        "label": "Basics of C",
                        "collapsed": true,
                        "items": [
                              {
                                    "label": "Struct Address",
                                    "slug": "useful-knowledge/pages/03-struct-address"
                              },
                              {
                                    "label": "Design a code module",
                                    "slug": "useful-knowledge/pages/04-design-a-code-module"
                              },
                              {
                                    "label": "Function Pointer",
                                    "slug": "useful-knowledge/pages/05-function-pointer"
                              }
                        ]
                  },
                  {
                        "label": "Miscellaneous",
                        "collapsed": true,
                        "items": [
                              {
                                    "label": "Switch / Case Statements",
                                    "slug": "useful-knowledge/pages/07-switch-case-statements"
                              }
                        ]
                  },
                  {
                        "label": "Design",
                        "collapsed": true,
                        "items": [
                              {
                                    "label": "Code Modularity",
                                    "slug": "useful-knowledge/pages/09-code-modularity"
                              }
                        ]
                  },
                  {
                        "label": "Embedded",
                        "collapsed": true,
                        "items": [
                              {
                                    "label": "System Calls",
                                    "slug": "useful-knowledge/pages/11-system-calls"
                              },
                              {
                                    "label": "Startup",
                                    "slug": "useful-knowledge/pages/12-startup"
                              }
                        ]
                  }
            ]
      }
],
    }),
  ],
});

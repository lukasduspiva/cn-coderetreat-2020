# CN Coderetreat 2020 - ONLINE

## Requirements

Base requirements for participating are:

- 💻 Notebook/PC
- ⚡ Stable internet connection
- 🎥 Webcam and microphone (preferably a quite place)
- ✍️ Have prepared project where you can write tests rightaway

### Tools

Any participant should prepare for pairing with a developer of any platform. Therefore a couple of extra tools should be ready for use. Here is the categorized list:

**Worst-Case Scenario Tools**

- `git` (as back-up solution)

**REPL and Online Tools**

Does not require any installation on your local device, but be sure you have a valid account.

- [codesandbox.io](https://codesandbox.io/) 
    - Remote real time collaboration is described at [Collaboration with Live](https://codesandbox.io/docs/live)
    - Presets available for fork:
        - [Vanilla JS preset](https://codesandbox.io/s/cn-coderetreat-2020-js-preset-ximvi)
        - [TypeScript preset](https://codesandbox.io/s/cn-coderetreat-2020-typescript-preset-6us6t)
        - [JS + React preset](https://codesandbox.io/s/cn-coderetreat-2020-react-preset-ons5d)
- [repl.it](https://repl.it/)
    - Presets available for fork:
        - [Java + JUnit/Spock preset](https://repl.it/@mullema4/Spock#Main.java)

**IDE Built-In Tools**

| IDE | Host Participant Requirement | Guest Participant Requirements |
|:---:|:----:|:-----:|
|IntelliJ IDEA (Java/Kotlin) | Installation + [Code with Me Plugin](https://plugins.jetbrains.com/plugin/14896-code-with-me) | - |
| App Code (Swift) | Installation + [Code with Me Plugin](https://plugins.jetbrains.com/plugin/14896-code-with-me) | - |
| VS Code (JS) | Installation + [Live Share Plugin](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare) | Installation + [Live Share Plugin](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare) |


## Agenda

| Time          | What is happening? 🤔 | 
|:--------------|:----------------------|
| before 09:00  | Participants arriving to meeting |
| 09:00 - 09:30 | Welcome, introduction and overview of what is going to happen |
| 09:30 - 10:30 | **Session # 1** (_Pair Programming_ and _Game of Life_ explained) |
| 10:30 - 10:45 | Retrospective + short break |
| 10:45 - 11:45 | **Session # 2** (_Test Driven Development_ explained)|
| 11:45 - 12:00 | Retrospective |
| 12:00 - 13:15 | Lunch + socializing (big break) 🍕 |
| 13:15 - 14:15 | **Session # 3** (_4 Rules of Simple Design_ explained) |
| 14:15 - 14:30 | Retrospective + short break |
| 14:30 - 15:30 | **Session # 4** |
| 15:30 - 15:45 | Retrospective + short break |
| 15:45 - 16:45 | **Session # 5** |
| 16:45 - 17:00 | Closing circle retrospective |

## Sessions

### Session # 1

| Participant A | Participant B | Pair Space |
| :-----------: |:-------------:| :---------:|
|Mária | Lucia | [meeting room](https://meet.jit.si/CN-CODERETREAT-2020-1-0-1604046254321) + [paper](https://onthesamepage.online/CN-CODERETREAT-2020-1-0-1604046254321) |
|Vojtěch | Lukáš | [meeting room](https://meet.jit.si/CN-CODERETREAT-2020-1-1-1604046254321) + [paper](https://onthesamepage.online/CN-CODERETREAT-2020-1-1-1604046254321) |
|Jozef | Adam | [meeting room](https://meet.jit.si/CN-CODERETREAT-2020-1-2-1604046254321) + [paper](https://onthesamepage.online/CN-CODERETREAT-2020-1-2-1604046254321) |
|Viktor | Daniel | [meeting room](https://meet.jit.si/CN-CODERETREAT-2020-1-3-1604046254321) + [paper](https://onthesamepage.online/CN-CODERETREAT-2020-1-3-1604046254321) |
|Tomáš | Michal | [meeting room](https://meet.jit.si/CN-CODERETREAT-2020-1-4-1604046254321) + [paper](https://onthesamepage.online/CN-CODERETREAT-2020-1-4-1604046254321) |


## Game of Life

For more information visit the [Conway's Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life) page at Wikipedia.

### Rule # 1

Any live cell with fewer than two live neighbors dies, as if by underpopulation.

`generation x` `(n < 2)`
| ⬜ | ⬜ | ⬜ |
|:---:|:---:|:---:|
| ⬜ | 🦠 | ⬜ |
| ⬜ | ⬜ | 🦠 |

`generation x + 1`
| ❔ | ❔ | ❔ |
|:---:|:---:|:---:|
| ❔ | ⬜ | ❔ |
| ❔ | ❔ | ❔ |

### Rule # 2

Any live cell with two or three live neighbors lives on to the next generation.

`generation x` `(n = 2,3)`
| ⬜ | ⬜ | ⬜ |
|:---:|:---:|:---:|
| 🦠 | 🦠 | ⬜ |
| ⬜ | 🦠 | 🦠 |

`generation x + 1`
| ❔ | ❔ | ❔ |
|:---:|:---:|:---:|
| ❔ | 🦠 | ❔ |
| ❔ | ❔ | ❔ |

### Rule # 3

Any live cell with more than three live neighbors dies, as if by overpopulation.

`generation x` `(n > 3)`
| 🦠 | 🦠 | 🦠 |
|:---:|:---:|:---:|
| 🦠 | 🦠 | 🦠 |
| 🦠 | 🦠 | 🦠 |

`generation x + 1`
| ❔ | ❔ | ❔ |
|:---:|:---:|:---:|
| ❔ | ⬜ | ❔ |
| ❔ | ❔ | ❔ |


### Rule # 4

Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.

`generation x` `(n = 3)`
| ⬜ | ⬜ | ⬜ |
|:---:|:---:|:---:|
| 🦠 | ⬜ | ⬜ |
| ⬜ | 🦠 | 🦠 |

`generation x + 1`
| ❔ | ❔ | ❔ |
|:---:|:---:|:---:|
| ❔ | 🦠 | ❔ |
| ❔ | ❔ | ❔ |

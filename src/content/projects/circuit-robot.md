---
title: Circuit Robot
order: 2
year: "2025"
tag: Hugging Face LeRobot Worldwide Hackathon Winner
summary: "Robot arm that assembles live electrical circuits on its own."
role:
  - "Built the perception side: component recognition and pose estimation from the arm-mounted camera."
  - Worked the vision-to-manipulation handoff so detected components became reachable grasp targets.
  - Contributed to the task sequencing that takes the arm from power cell to closed circuit to activated load.
stack: ["SO-ARM101", "LeRobot", "Python", "OpenCV", "Object detection", "Manipulation control", "3D printing"]
cover: ../../assets/projects/circuit-robot.png
coverAlt: SO-ARM101 robotic arm positioned over an electrical circuit assembly bench
gallery:
  - src: ../../assets/projects/circuit-robot-step1.png
    alt: Step one, the arm identifies and picks up the power cell
  - src: ../../assets/projects/circuit-robot-step2.png
    alt: Step two, the arm positions the cell to connect the circuit
  - src: ../../assets/projects/circuit-robot-step3.png
    alt: Step three, the circuit closes and the load activates
diagram: circuit-robot-diagram.svg
diagramAlt: System diagram of the Circuit Robot perception and control loop
links: []
---

Connecting live electrical circuits is routine work that regularly injures people. Circuit Robot is an open-hardware answer: an SO-ARM101 arm that sees a workbench, recognises the components on it, and assembles a working circuit without a hand in the loop.

The pipeline is vision-first. A camera feeds a detector that localises components and reports their pose; those detections become grasp targets; the controller sequences the pick, place and connect actions that bring the circuit to life. The arm picks up a power cell, connects the circuit and activates the load.

Built with Team Electrify-141 and awarded a winning place in the Hugging Face LeRobot Worldwide Hackathon, 2025.

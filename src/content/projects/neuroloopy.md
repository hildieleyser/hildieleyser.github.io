---
title: Neuroloopy
order: 4
year: "2025"
tag: Open-source Python package
summary: A Python package for real-time closed-loop neurofeedback from EEG and multimodal physiology, built to be reused across studies.
role:
  - Designed the package API around a streaming source, a processing chain and a feedback sink, so new studies swap components rather than rewrite the loop.
  - Implemented the real-time processing primitives for EEG and physiological signals.
  - Maintain it as open source.
stack: ["Python", "EEG", "LSL", "Real-time DSP", "Closed-loop control", "Open source"]
diagram: neuroloopy-diagram.svg
diagramAlt: Neuroloopy architecture, from streaming input through processing to closed-loop feedback
links:
  - label: GitHub
    url: https://github.com/hildieleyser/neuroloopy
---

Every neurofeedback study rebuilds the same loop: pull a stream, filter it, extract a feature, decide, and push something back to the participant fast enough to matter. Neuroloopy is that loop as a reusable package.

The design separates the streaming source, the processing chain and the feedback sink, so moving from one paradigm to another means swapping a component instead of rewriting the plumbing. It handles EEG and other multimodal physiological data, and it is open source.

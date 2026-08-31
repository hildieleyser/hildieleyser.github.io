---
title: Wavelink
order: 3
year: "2024"
tag: natHACKS 2024 · Neurosphere Award
summary: "Dual-EEG rig measuring synchrony between two brains, live."
role:
  - Built the real-time signal processing chain from raw dual-stream EEG to a synchrony estimate.
  - Worked on the custom sensor hardware and the acquisition path feeding the two streams.
  - Designed the neurofeedback loop that returns synchrony to both participants live.
stack: ["EEG", "Hyperscanning", "Python", "Real-time DSP", "Custom sensor hardware", "Neurofeedback"]
cover: ../../assets/projects/wavelink.png
coverAlt: Wavelink dual-EEG hyperscanning setup with two connected participants
diagram: wavelink-diagram.svg
diagramAlt: Signal flow from two EEG headsets through synchrony estimation to shared feedback
links:
  - label: Devpost
    url: https://devpost.com/software/wavelink
  - label: GitHub
    url: https://github.com/ZijingWu381/WaveLink
---

Most EEG measures one brain at a time. Social cognition happens between brains. Wavelink records two people at once and computes how coupled their neural activity is while they interact, then hands that number straight back to them as feedback.

The hard part is latency. Two independent acquisition streams have to be aligned, filtered, and reduced to a synchrony estimate fast enough that the feedback still refers to the moment the participants are in. The build combined custom sensor hardware with a Python processing chain to keep that loop tight.

Awarded the Neurosphere Award at natHACKS 2024.

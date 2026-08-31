---
title: Inkling
order: 5
year: "2024"
tag: SSVEP brain-computer interface
summary: "SSVEP speller: typing by looking."
role:
  - Built the SSVEP stimulus presentation and the frequency-tagged interface layout.
  - Implemented the decoding that maps steady-state visual evoked responses to character selections.
stack: ["EEG", "SSVEP", "Python", "Signal processing", "BCI", "Assistive technology"]
diagram: inkling-diagram.svg
diagramAlt: Inkling SSVEP speller pipeline from flickering stimulus to decoded character
links:
  - label: GitHub
    url: https://github.com/hildieleyser/Inkling
---

When speech and hand control go, gaze often remains. An SSVEP speller exploits that: each character on screen flickers at its own frequency, and the visual cortex reproduces the frequency of whichever character the user attends to. Decode the dominant frequency, recover the intended letter.

Inkling implements that path end to end, from frequency-tagged stimulus presentation to character decoding, oriented toward accessible communication and Parkinson's-related applications.

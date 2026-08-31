---
title: Auracle
order: 1
year: "2026"
tag: Project Motherboard Hackathon Winner
summary: Closed-loop wearable that senses airborne volatile organic compounds, scores exposure in real time and filters what you breathe.
role:
  - Led the sensing concept and the mapping from raw gas-sensor response to an interpretable exposure score.
  - Specified the classification approach for distinguishing volatile organic compound signatures.
  - Drove the companion app design and the closed loop from detection to filtration.
stack: ["Gas sensor array", "Embedded firmware", "Python", "Classification models", "Companion app", "Wearable prototyping"]
cover: ../../assets/projects/auracle-1.png
coverAlt: Auracle wearable air-sensing device concept render
gallery:
  - src: ../../assets/projects/auracle-2.png
    alt: Auracle exposure dashboard showing a real-time air quality score
  - src: ../../assets/projects/auracle-3.png
    alt: Auracle device architecture and sensing module layout
  - src: ../../assets/projects/auracle-4.png
    alt: Auracle companion app screens for exposure history
  - src: ../../assets/projects/auracle-5.png
    alt: Auracle product positioning and respiratory health use case
links:
  - label: GitHub
    url: https://github.com/hildieleyser/auracle
---

Air quality is measured at the scale of a city, but it is experienced at the scale of a face. Auracle closes that gap: a wearable that samples the air actually entering the wearer's airway, classifies the volatile organic compounds present, and drives filtration in response.

The system runs a continuous loop. A gas-sensor array reports on the local air, a classifier maps the response profile onto compound signatures, an exposure score accumulates over time, and filtration engages when the score crosses threshold. The companion app turns that history into something a person, or an occupational health team, can act on.

It won Project Motherboard 2026, and became the starting point for continuing work on neuroprotective nasal filtration.

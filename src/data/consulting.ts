/**
 * Consulting page content. Every claim here maps to work on the CV; keep it
 * that way when editing, because clients will ask about any of it on a call.
 */
export const consulting = {
  intro:
    'I help neurotechnology teams design studies that can show whether a device works, and I advise investors and producers on the neuroscience behind what they are backing.',
  availability: 'Taking on projects and expert calls from October 2026. Based in London, working remotely or on site.',

  services: [
    {
      title: 'Neurotechnology study design review',
      body: 'An independent review of a planned EEG, fNIRS or wearable study before data collection begins. The review assesses the experimental design, control conditions, outcome measures, statistical power and analysis plan against current methodological standards. It identifies threats to validity and sets out the specific revisions needed.',
      format: 'Written report with a review call · 1 to 2 weeks',
    },
    {
      title: 'Sham-controlled pilot protocol',
      body: 'A complete protocol for a pilot or feasibility trial of a neurostimulation or wearable device, prepared for research ethics committee submission. It specifies the sham condition and blinding procedure, randomisation, sample size justification, primary and secondary endpoints, and the statistical analysis plan. Protocols follow the SPIRIT 2013 statement and include participant information and consent documents.',
      format: 'Protocol and participant documentation · 3 to 5 weeks',
    },
    {
      title: 'Evidence review for product claims',
      body: 'A structured review of the peer-reviewed literature behind a device, application or feature claim. Key studies are appraised for design, effect size and risk of bias, and each claim is rated by the strength of its supporting evidence. The briefing states which claims the evidence supports and where further validation would be required.',
      format: 'Referenced briefing · 1 to 2 weeks',
    },
    {
      title: 'Scientific advice for factual television and podcasts',
      body: 'Scientific consultancy for factual programmes on the brain, behaviour, the senses and emerging technology. This covers background research, accuracy review of treatments and scripts, and the design of on-screen experiments grounded in established paradigms. I can also identify and approach suitable academic contributors.',
      format: 'Day rate or project fee',
    },
    {
      title: 'Expert consultations',
      body: 'One-hour consultations for investors, strategy teams and research groups on consumer neurotechnology, EEG and fNIRS instrumentation, the evidence base for neurostimulation, behavioural data and olfaction.',
      format: 'Direct or through expert networks',
    },
  ],

  work: [
    {
      client: 'NeuroZen',
      what: 'Consumer neurostimulation headset',
      body: 'Reviewed the coil design and stimulation physics against the neural targets the team wanted to reach, and set out which design changes would matter. Designed and analysed a controlled EEG study, then wrote a sham-controlled confirmation protocol to the SPIRIT 2013 standard, together with participant materials for ethics submission.',
    },
    {
      client: 'Netholabs',
      what: 'Neurotechnology startup, London',
      body: 'As Head of Research, built a human research programme from first study questions to participant operations. Designed synchronised acquisition across Kernel Flow 2 fNIRS, EEG, eye tracking and motion capture, with data governance and quality control for every session.',
    },
    {
      client: 'Voltage TV',
      what: 'Factual television development',
      body: 'Translated research on adolescent brain development into material for a factual series in development, including on-screen experiments built on published paradigms.',
    },
  ],

  background:
    'MSc in Applied Neuroscience (Distinction) from Royal Holloway. Graduate research at McGill and the RIKEN Center for Brain Science on decision-making in primates, using hierarchical Bayesian models, inverse reinforcement learning and awake 7T fMRI. Hands-on training in histology and immunohistochemistry. Cambridge NeuroWorks What If Fellow, funded by ARIA.',

  process: [
    { step: 'A 20-minute call', body: 'Free. You tell me what you are trying to show and by when.' },
    { step: 'A written scope', body: 'What I will deliver, when, and a fixed fee agreed up front.' },
    { step: 'Delivery', body: 'Work in the open, with a check-in partway through so nothing arrives as a surprise.' },
  ],
};

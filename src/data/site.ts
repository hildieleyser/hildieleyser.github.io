export const site = {
  name: 'Hildelith Leyser',
  shortName: 'Hildie Leyser',
  role: 'Neuroscientist & Neurotechnologist',
  title: 'Head of Research, Netholabs',
  tagline:
    'I build the sensing systems and analysis pipelines that turn human and animal behaviour into data you can model.',
  summary:
    'Neuroscientist and neurotechnologist working where hardware, signal processing and machine learning meet. I lead human neuroscience research at Netholabs, designing multimodal capture rigs across EEG, fNIRS, eye tracking, motion capture, IMUs and EMG, and building the pipelines that make the resulting data usable.',
  location: 'London, United Kingdom',
  email: 'hildie@netholabs.com',
  linkedin: 'https://www.linkedin.com/in/hildelith-leyser-382564206',
  github: 'https://github.com/hildieleyser',
  cv: '/Hildelith_Leyser_CV.pdf',
  url: 'https://hildieleyser.github.io',
};

/** Short credibility strip under the hero. */
export const currently = [
  { label: 'Head of Research', org: 'Netholabs, London', since: '2026' },
  { label: 'What If Fellow', org: 'Cambridge NeuroWorks (ARIA)', since: '2026' },
  { label: 'EEG Consultant', org: 'NeuroZen', since: '2026' },
];

/** What a hiring reader scans for: the stack, grouped and concrete. */
export const capabilities = [
  {
    area: 'Neurotechnology & biosignals',
    items: ['EEG', 'fNIRS', 'EMG', 'eye tracking', 'HRV', 'LSL / XDF sync', 'closed-loop neurofeedback', 'BCI design'],
  },
  {
    area: 'Machine learning',
    items: ['PyTorch', 'scikit-learn', 'TensorFlow', 'inverse RL', 'Bayesian hierarchical models', 'time-series modelling', 'explainability'],
  },
  {
    area: 'Computer vision & pose',
    items: ['DeepLabCut', 'SLEAP', 'YOLO', 'OpenCV', '2D/3D pose estimation', 'multi-camera calibration', 'triangulation'],
  },
  {
    area: 'Hardware & robotics',
    items: ['SO-ARM101', 'Unitree G1', 'sensor integration', 'wearable prototyping', '3D printing', 'EMG-controlled systems'],
  },
  {
    area: 'Engineering',
    items: ['Python', 'MATLAB', 'R', 'JavaScript / React', 'Git', 'scientific computing', 'pipeline and dashboard development'],
  },
  {
    area: 'Simulation & study design',
    items: ['Unity 3D', 'Unreal Engine', 'Blender', 'MuJoCo', 'VR task design', 'sham-controlled protocols', 'awake fMRI paradigms'],
  },
];

export const researchAreas = [
  {
    title: 'Embodied social decision-making',
    body: 'A 3D social foraging task (two-armed bandit) in macaques across solo, dyadic and triadic conditions, measuring how social context reshapes exploration, exploitation, dominance and reward valuation.',
    meta: 'McGill · RIKEN Center for Brain Science',
  },
  {
    title: 'Movement as cognition',
    body: 'Treating movement patterns as cognitive nodes. Pose-estimation and kinematic pipelines link behaviour to decision-making across species.',
    meta: 'DeepLabCut · SLEAP · YOLO',
  },
  {
    title: 'Multisensory social alignment',
    body: 'Sensory and metabolic negotiation as the basis of social alignment, combining awake neuroimaging, multimodal physiology and computational models of behaviour.',
    meta: 'Awake fMRI · EEG · fNIRS',
  },
  {
    title: 'Human and robot distinction',
    body: 'A multisensory account of how we tell humans and robots apart, bridging social cognition, perception and embodied interaction.',
    meta: 'with K. Cooper',
  },
];

export const writing = [
  {
    title: 'Invisible Orchestras',
    status: 'In preparation',
    body: 'Sensory and metabolic negotiation as the basis of social alignment: a framework for how bodies tune to one another beneath conscious awareness.',
  },
  {
    title: 'Humans and Robots',
    status: 'In revision · with K. Cooper',
    body: 'How do we differentiate between humans and robots? A multisensory perspective on the cues that mark something as alive, agentic and like us.',
  },
  {
    title: 'Why Mirror Neurons Matter',
    status: 'Essay competition winner · 2023',
    body: 'An argument for mirror neurons as the most important finding in psychology, and what they reveal about the social brain.',
  },
];

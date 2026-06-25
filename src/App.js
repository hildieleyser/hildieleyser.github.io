import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Mail, Linkedin, Github, Download, ExternalLink, Gamepad2, Award } from 'lucide-react';

const researchAreas = [
  {
    title: 'Embodied Social Decision-Making',
    body: 'A 3D social foraging task (two-armed bandit) in macaques across solo, dyadic, and triadic conditions, measuring how social context reshapes exploration, exploitation, dominance, and reward valuation.',
    meta: 'McGill · RIKEN Center for Brain Science'
  },
  {
    title: 'Movement as Cognition',
    body: 'Treating movement patterns as cognitive nodes. Pose-estimation and kinematic pipelines (DeepLabCut, SLEAP, YOLO) link behaviour to decision-making across species.',
    meta: 'Embodied cross-species approach'
  },
  {
    title: 'Multisensory Social Alignment',
    body: 'Sensory and metabolic negotiation as the basis of social alignment, combining awake neuroimaging, multimodal physiology, and computational models of behaviour.',
    meta: 'Awake fMRI · EEG · fNIRS'
  },
  {
    title: 'Human–Robot Distinction',
    body: 'A multisensory account of how we tell humans and robots apart, bridging social cognition, perception, and embodied interaction.',
    meta: 'with K. Cooper'
  }
];

const projects = [
  {
    title: 'Wavelink',
    slug: 'wavelink',
    tag: 'NatHACKS 2024 · Neurosphere Award',
    body: 'Real-time dual-EEG hyperscanning platform with custom sensor hardware and Python signal processing to measure inter-brain synchrony during human interaction and neurofeedback.',
    images: ['/projects/wavelink.png', '/projects/wavelink-diagram.svg'],
    links: [
      { label: 'Devpost', url: 'https://devpost.com/software/wavelink' },
      { label: 'GitHub', url: 'https://github.com/ZijingWu381/WaveLink' }
    ]
  },
  {
    title: 'Circuit Robot',
    slug: 'circuit-robot',
    tag: 'Hugging Face LeRobot Hackathon Winner · Team Electrify-141 · 2025',
    body: 'Open-hardware robotic manipulation platform on the SO-ARM101 arm for electrical circuit assembly, with real-time computer vision, component recognition, and manipulation control. The arm picks up a power cell, connects the circuit, and activates the load — automating work that is hazardous for people.',
    images: [
      '/projects/circuit-robot.png',
      '/projects/circuit-robot-step1.png',
      '/projects/circuit-robot-step2.png',
      '/projects/circuit-robot-step3.png',
      '/projects/circuit-robot-diagram.svg'
    ]
  },
  {
    title: 'Auracle',
    slug: 'auracle',
    tag: 'Project Motherboard Hackathon Winner · 2026',
    body: 'Closed-loop wearable for olfactory sensing and air filtration, with a companion app, real-time exposure scoring, and AI-based volatile organic compound classification for respiratory health.',
    links: [{ label: 'GitHub', url: 'https://github.com/hildieleyser/auracle' }],
    images: [
      '/projects/auracle-1.png',
      '/projects/auracle-2.png',
      '/projects/auracle-3.png',
      '/projects/auracle-4.png',
      '/projects/auracle-5.png'
    ]
  },
  {
    title: 'Inkling',
    slug: 'inkling',
    tag: 'SSVEP Brain-Computer Interface',
    body: 'An SSVEP-based brain-computer interface speller for assistive communication, enabling text entry through visual attention — oriented toward accessible communication and Parkinson’s-related applications.',
    images: ['/projects/inkling-diagram.svg'],
    links: [{ label: 'GitHub', url: 'https://github.com/hildieleyser/Inkling' }]
  },
  {
    title: 'Parkinsync',
    slug: 'parkinsync',
    tag: 'McGill Biomechanics Society',
    body: 'EMG-driven exoskeleton concept for tremor-related motor support in Parkinson’s disease, integrating mechanical and electronic control logic across an interdisciplinary team.',
    images: ['/projects/parkinsync-diagram.svg']
  },
  {
    title: 'Tipsea Dipsea',
    slug: 'tipsea-dipsea',
    tag: 'NeuroHacks 2024 · Industry Prize',
    body: 'Gamified underwater VR environment that harnesses the groove response in a Stroop-style task, using biofeedback for cognitive and emotional training.',
    images: ['/projects/tipsea-dipsea.png', '/projects/tipsea-dipsea-diagram.svg'],
    links: [
      { label: 'GitHub', url: 'https://github.com/SzmiSmi/TipseaDipsea_2' }
    ]
  },
  {
    title: 'Scream Machine',
    slug: 'scream-machine',
    tag: 'Craziest Idea Prize · IC FemHack',
    body: 'A playful neurotech hackathon build that took the Craziest Idea prize at IC FemHack — a hand-built, hand-painted neurofeedback device that guides players from stress reactivity toward calm.',
    images: ['/projects/scream-machine.jpeg', '/projects/scream-machine-team.jpeg', '/projects/scream-machine-diagram.svg']
  },
  {
    title: 'Monkey Sea Monkey Doom',
    slug: 'monkey-sea-monkey-doom',
    tag: 'Scientific Game Jam · Neurofeedback Game',
    body: 'An immersive neurofeedback video game that trains the shift from fight-or-flight to adaptive decision-making, helping players move from stress reactivity to calm.',
    images: ['/projects/monkey-sea-monkey-doom.png', '/projects/monkey-sea-monkey-doom-diagram.svg'],
    links: [
      { label: 'Itch.io', url: 'https://monkeyseamonkeydoom.itch.io/monkey-sea-monkey-doom' },
      { label: 'GitHub', url: 'https://github.com/klimkam/Scientific-Game-Jam' }
    ]
  },
  {
    title: 'Real-Time Neurofeedback',
    slug: 'real-time-neurofeedback',
    tag: 'Neuroloopy · Open-source',
    body: 'Neuroloopy — a flexible Python package for real-time signal processing and closed-loop neurofeedback from EEG and multimodal physiological data.',
    images: ['/projects/neuroloopy-diagram.svg'],
    links: [{ label: 'GitHub', url: 'https://github.com/hildieleyser/neuroloopy' }]
  }
];

const ideas = [
  {
    title: 'Invisible Orchestras',
    status: 'In preparation',
    body: 'Sensory and metabolic negotiation as the basis of social alignment — a framework for how bodies tune to one another beneath conscious awareness.'
  },
  {
    title: 'Humans and Robots',
    status: 'In revision · with K. Cooper',
    body: 'How do we differentiate between humans and robots? A multisensory perspective on the cues that mark something as alive, agentic, and like us.'
  },
  {
    title: 'Why Mirror Neurons Matter',
    status: 'Essay competition winner · 2023',
    body: 'An argument for mirror neurons as the most important finding in psychology, and what they reveal about the social brain.'
  }
];

const cv = {
  education: [
    { when: '2023–2028', what: 'PhD in Neuroscience', where: 'McGill University — Integrated Program in Neuroscience', note: 'Research across McGill and RIKEN on social decision-making, embodied cognition, neurotechnology, and computational models of behaviour.' },
    { when: '2022–2023', what: 'MSc Applied Neuroscience, Distinction', where: 'Royal Holloway, University of London', note: 'Dissertation using VR and eye-tracking for real-time behavioural analysis.' },
    { when: '2018–2021', what: 'BA in History', where: 'University of Oxford, Hertford College', note: 'Research training in historical analysis and the history of medicine and mental healing.' }
  ],
  fellowships: [
    { when: '2026', what: 'Cambridge NeuroWorks What If Fellowship', where: 'ARIA-funded programme, Cambridge' },
    { when: '2025', what: 'Neurohackademy', where: 'University of Washington eScience Institute, Seattle' },
    { when: '2025', what: 'Women in Science Japan ML Summer School', where: 'Tokyo' },
    { when: '2024–2025', what: 'RIKEN Brain Science Training Program', where: 'Tokyo' },
    { when: '2024', what: 'ICPBR Primate Brain Research Summer School', where: 'Shanghai' },
    { when: '2023', what: 'RIKEN Learning and Imagination Summer Program', where: 'Tokyo' },
    { when: '2022', what: 'RISD Video Game Design & Interactive Systems', where: 'Rhode Island School of Design (Remote)' },
    { when: '2022', what: 'Methods and Statistics in Social Sciences, Grade A', where: 'University of Amsterdam (Remote)' }
  ],
  experience: [
    { when: '2026–Present', what: 'Head of Research', where: 'Netholabs Ltd, London', note: 'Lead human neuroscience research across multimodal capture, protocol design, and device integration. Built workflows combining EEG, fNIRS, eye tracking, motion capture, IMUs, EMG, and LSL/XDF synchronisation.' },
    { when: '2024–2025', what: 'International Program Associate', where: 'RIKEN Center for Brain Science, Tokyo', note: 'Designed and ran a 3D social foraging task in macaques. Built behavioural analysis pipelines and applied DeepLabCut, SLEAP, and YOLO for pose estimation.' },
    { when: '2023–Present', what: 'PhD Researcher', where: 'McGill Social and Sensory Brain Mechanisms Lab', note: 'Social cognition, sensory processing, awake fMRI paradigms, movement kinematics, and computational social reward valuation.' },
    { when: '2026–Present', what: 'Neuroscience & EEG Consultant', where: 'NeuroZen (Remote)', note: 'EEG study design, neural targeting, and sham-controlled validation planning for a non-invasive neurostimulation device.' },
    { when: '2026', what: 'Neuroscience Communication Consultant', where: 'Voltage TV, London', note: 'Scientific framing and accuracy for public communication on adolescent brain development.' }
  ],
  skills: [
    { area: 'Programming', items: 'Python, MATLAB, R, JavaScript, React, Git, scientific computing' },
    { area: 'Machine Learning', items: 'PyTorch, scikit-learn, TensorFlow, inverse RL, Bayesian hierarchical modelling, explainability' },
    { area: 'Neurotechnology', items: 'EEG, fNIRS, EMG, eye tracking, LSL/XDF, neurofeedback, BCI design, wearables' },
    { area: 'Computer Vision', items: 'DeepLabCut, SLEAP, YOLO, OpenCV, 2D/3D pose estimation, multi-camera tracking' },
    { area: 'Robotics & Hardware', items: 'SO-ARM101, Unitree G1, EMG-controlled systems, 3D printing, sensor integration' },
    { area: 'Simulation & Design', items: 'Unity 3D, Unreal Engine, Blender, SketchUp, ANSYS HFSS, VR task design' },
    { area: 'Data Analysis', items: 'Time-series analysis, HRV, signal processing, Bayesian and mixed models, neuroimaging workflows, dashboard development' }
  ],
  writing: [
    'Leyser, H. et al. Social context reshapes exploration and reward valuation in a 3D macaque foraging task (in prep).',
    'Leyser, H. et al. Invisible Orchestras: sensory and metabolic negotiation as the basis of social alignment (in prep).',
    'Leyser, H.F. & Cooper, K. How do we differentiate between humans and robots? A multisensory perspective (in revision).',
    'Why Mirror Neurons are the most important finding in psychology — postgraduate essay competition winner, 2023.'
  ],
  talks: [
    '2026 — British Neuroscience Association AI Symposium: neurotechnology and social cognition.',
    '2025 — Co-Creation International Conference, Tokyo: InterAction — neural mechanisms of social behaviour.',
    '2024 — Japanese Neuroscience Society, Fukuoka: embodied decision-making and 3D foraging.',
    '2024 — COSYNE, Lisbon: unveiling movement patterns as cognitive nodes.',
    '2024 — ICPBR Summer School, Shanghai: sociability, hierarchy, and reward.',
    '2024 — QBIN Scientific Day, Montreal: integrating movement and decision-making, an embodied cross-species approach.',
    '2024 — British Neuroscience Association, Online: embodied foraging, explore versus exploit social decision-making.',
    '2024 — Canadian Biomedical Engineering Conference: Parkinsync design, McGill Biomechanics Society.'
  ],
  invited: [
    '2024 — Zatorre Lab Journal Club, Montreal: rhythm and syncopation, movement as social communication.',
    '2024 — Integrate and Fire Seminar Series, McGill: Untangling Sex and Gender in Neuroscience (host and chair).',
    '2024 — Non-Human Primates Journal Club, McGill: behavioural acquisition and deep learning of explore/exploit paradigms.',
    '2025–Present — Python tutor for neuroscience, machine learning, data analysis, and creative BCI projects.'
  ],
  awards: [
    '2026 — Cambridge NeuroWorks What If Fellowship (ARIA)',
    '2026 — Project Motherboard Hackathon Winner (Auracle)',
    '2025 — Hugging Face LeRobot Worldwide Hackathon Winner (Circuit Robot)',
    '2025 — UCSF-CBS Young Investigator Exchange Travel Award',
    '2025 — Japanese Neural Network Society Travel Grant (JNNS Winter Workshop)',
    '2024–2025 — RIKEN International Program Fellowship',
    '2024–2025 — Graduate Mobility Award, McGill University',
    '2024 — Neurosphere natHACKS Award',
    '2024 — Silicio Labs Industry Partner Prize (VR)',
    '2024 — Quebec Bioimaging Travel Award',
    '2024 — International Center for Primate Brain Research Award (full internship funding)',
    '2024 — COSYNE New Attendee Travel Grant',
    '2023–2024 — McGill University IPN Recruitment Award',
    '2023–2027 — McGill University International Fee Waiver',
    '2023 — Women in Memory Research Award (Ruhr University)',
    '2023 — Postgraduate Student Essay Competition Winner'
  ],
  service: [
    '2026–Present — Head of Research, Netholabs: coordination across research, engineering, AI, and data teams',
    '2024–Present — COSYNE Diversity and Inclusion Committee (selected internationally)',
    '2024–Present — Team leader and technical contributor across neurotech, robotics, and AI hackathons',
    '2023–2024 — Senior Project Advisor, McGill Biomechanics Society',
    '2023–2024 — Vice President, McGill Care Through Tech'
  ],
  collaboration: [
    { where: 'United Kingdom', what: 'Netholabs research leadership, Cambridge NeuroWorks fellowship, Royal Holloway MSc, Oxford BA, public neuroscience consulting.' },
    { where: 'Japan', what: 'RIKEN Center for Brain Science doctoral research: primate social cognition, neuroimaging, machine learning training.' },
    { where: 'Canada', what: 'McGill PhD research, neurotechnology hackathons, biomechanics and BCI projects.' },
    { where: 'China', what: 'International Center for Primate Brain Research training in primate neuroscience and histological methods.' },
    { where: 'United States', what: 'Neurohackademy training, UCSF-CBS Young Investigator Exchange.' }
  ],
  languages: 'English (native) · French (professional) · Spanish (professional) · German (conversational) · Japanese (basic)'
};

const contact = {
  email: 'hildelith.leyser@mail.mcgill.ca',
  linkedin: 'https://www.linkedin.com/in/hildelith-leyser-382564206',
  github: 'https://github.com/Hildieleyser'
};

const card = 'bg-[#1c1c1c]/80 backdrop-blur-sm rounded-lg shadow-lg p-8 border border-[#2a2a2a]';
const heading = "font-['Syncopate'] uppercase text-3xl md:text-4xl mb-12 tracking-wide text-[#E5DCC5]";

const linkIcon = (label) =>
  label === 'GitHub' ? Github
  : label === 'Itch.io' ? Gamepad2
  : label === 'Devpost' ? Award
  : ExternalLink;

// Cover visual for a project card: first image if present, otherwise an
// on-brand gradient tile with the project's initials so cards never look broken.
const ProjectCover = ({ project, className }) => {
  const initials = project.title.split(' ').slice(0, 2).map(w => w[0]).join('');
  if (project.images && project.images.length) {
    return (
      <img
        src={project.images[0]}
        alt={project.title}
        loading="lazy"
        className={`object-cover ${className}`}
      />
    );
  }
  return (
    <div className={`flex items-center justify-center bg-gradient-to-br from-[#2a2419] to-[#161616] ${className}`}>
      <span className="font-['Syncopate'] text-3xl text-[#CDA45E]/70">{initials}</span>
    </div>
  );
};

// Superorganism-style 3D card: a perspective wrapper with a preserve-3d inner
// surface that tilts toward the cursor, lifts, and catches a gold gloss. The
// inner content is pushed forward on the Z axis for a parallax feel.
const TiltCard = ({ children, onClick, ariaLabel }) => {
  const cardRef = useRef(null);
  const glowRef = useRef(null);

  const onMove = (e) => {
    const el = cardRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    el.style.transform =
      `perspective(900px) rotateX(${(0.5 - py) * 9}deg) rotateY(${(px - 0.5) * 11}deg) scale(1.035)`;
    if (glowRef.current) {
      glowRef.current.style.opacity = '1';
      glowRef.current.style.background =
        `radial-gradient(600px circle at ${px * 100}% ${py * 100}%, rgba(205,164,94,0.16), transparent 42%)`;
    }
  };
  const onLeave = () => {
    const el = cardRef.current;
    if (el) el.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)';
    if (glowRef.current) glowRef.current.style.opacity = '0';
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onClick={onClick}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick(); } }}
      role="button"
      tabIndex={0}
      aria-label={ariaLabel}
      style={{ transition: 'transform 0.3s ease-out', transformStyle: 'preserve-3d', willChange: 'transform' }}
      className="relative cursor-pointer rounded-lg border border-[#2a2a2a] bg-[#1c1c1c]/80 backdrop-blur-sm shadow-lg overflow-hidden focus:outline-none focus:ring-1 focus:ring-[#CDA45E]/60"
    >
      <div style={{ transform: 'translateZ(40px)', transformStyle: 'preserve-3d' }}>
        {children}
      </div>
      <div
        ref={glowRef}
        className="pointer-events-none absolute inset-0"
        style={{ opacity: 0, transition: 'opacity 0.3s ease-out' }}
      />
    </div>
  );
};

// Full-detail modal opened when a project card is clicked.
const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = prev; };
  }, [onClose]);

  if (!project) return null;
  const images = project.images || [];

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-start md:items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-sm overflow-y-auto"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative w-full max-w-3xl my-8 bg-[#161616] border border-[#2a2a2a] rounded-xl shadow-2xl"
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 260, damping: 26 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-[#1c1c1c]/90 text-[#E5DCC5] hover:text-[#CDA45E] transition-colors"
        >
          <X size={20} />
        </button>

        <div className="p-7 md:p-10">
          <h3 className="font-['Syncopate'] uppercase text-2xl md:text-3xl text-[#CDA45E] mb-2">{project.title}</h3>
          <p className="text-xs uppercase tracking-wide text-[#6f6957] mb-6">{project.tag}</p>
          <p className="text-[#A69F88] font-light leading-relaxed mb-8">{project.body}</p>

          {images.length > 0 && (
            <div className="space-y-4 mb-8">
              {images.map((src, i) => (
                <img
                  key={src}
                  src={src}
                  alt={`${project.title} — view ${i + 1}`}
                  loading="lazy"
                  className="w-full rounded-lg border border-[#2a2a2a]"
                />
              ))}
            </div>
          )}

          {project.links && project.links.length > 0 && (
            <div className="flex flex-wrap gap-x-6 gap-y-3 pt-2 border-t border-[#2a2a2a] mt-2">
              {project.links.map(link => {
                const Icon = linkIcon(link.label);
                return (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 mt-5 text-sm text-[#CDA45E] hover:text-[#E5DCC5] transition-colors"
                  >
                    <Icon size={16} /> {link.label}
                  </a>
                );
              })}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

const App = () => {
  const canvasRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const neurons = Array.from({ length: 30 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 1,
      vy: (Math.random() - 0.5) * 1,
      radius: Math.random() * 3 + 2,
      pulsePhase: Math.random() * Math.PI * 2,
      connections: []
    }));

    neurons.forEach(neuron => {
      const nearestNeurons = neurons
        .filter(n => n !== neuron)
        .sort((a, b) => {
          const distA = Math.hypot(a.x - neuron.x, a.y - neuron.y);
          const distB = Math.hypot(b.x - neuron.x, b.y - neuron.y);
          return distA - distB;
        })
        .slice(0, 3);
      neuron.connections = nearestNeurons;
    });

    const animate = () => {
      ctx.fillStyle = 'rgba(20, 20, 20, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      neurons.forEach(neuron => {
        neuron.x += neuron.vx;
        neuron.y += neuron.vy;
        neuron.pulsePhase += 0.02;

        if (neuron.x < 0 || neuron.x > canvas.width) neuron.vx *= -1;
        if (neuron.y < 0 || neuron.y > canvas.height) neuron.vy *= -1;

        const pulseSize = Math.sin(neuron.pulsePhase) * 0.5 + 1;
        ctx.beginPath();
        ctx.arc(neuron.x, neuron.y, neuron.radius * pulseSize, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(205, 164, 94, 0.6)';
        ctx.fill();

        neuron.connections.forEach(other => {
          const dx = other.x - neuron.x;
          const dy = other.y - neuron.y;
          const distance = Math.hypot(dx, dy);

          if (distance < 200) {
            const signal = Math.sin(neuron.pulsePhase - distance / 50) * 0.5 + 0.5;
            ctx.beginPath();
            ctx.moveTo(neuron.x, neuron.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(205, 164, 94, ${0.15 * signal})`;
            ctx.lineWidth = signal * 0.8;
            ctx.stroke();
          }
        });
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'research', label: 'Research' },
    { id: 'projects', label: 'Projects' },
    { id: 'writings', label: 'Writings' },
    { id: 'cv', label: 'CV' }
  ];

  return (
    <div className="min-h-screen bg-[#141414] overflow-hidden relative font-['Manrope'] scroll-smooth">
      <canvas ref={canvasRef} className="fixed inset-0 z-0"/>

      <nav className="fixed top-0 right-0 h-screen z-20">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="absolute top-4 right-4 p-2 bg-[#1c1c1c]/90 backdrop-blur-sm rounded-full shadow-lg text-[#E5DCC5] hover:text-[#CDA45E] transition-colors"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: isMenuOpen ? '0%' : '100%' }}
          className="h-full w-64 bg-[#1c1c1c]/90 backdrop-blur-sm shadow-lg p-8 pt-20"
        >
          <div className="flex flex-col gap-4">
            {sections.map(section => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="font-['Syncopate'] uppercase text-sm text-[#E5DCC5] hover:text-[#CDA45E] transition-colors tracking-wide"
                onClick={() => setIsMenuOpen(false)}
              >
                {section.label}
              </a>
            ))}
            <div className="flex gap-4 mt-6 text-[#A69F88]">
              <a href={`mailto:${contact.email}`} aria-label="Email" className="hover:text-[#CDA45E] transition-colors"><Mail size={20} /></a>
              <a href={contact.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-[#CDA45E] transition-colors"><Linkedin size={20} /></a>
              <a href={contact.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-[#CDA45E] transition-colors"><Github size={20} /></a>
            </div>
          </div>
        </motion.div>
      </nav>

      <div className="relative z-10">
        <header id="home" className="h-screen flex flex-col justify-center items-center p-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-['Syncopate'] uppercase text-5xl md:text-6xl font-light tracking-wider mb-6 text-[#E5DCC5]"
          >
            Hildelith Leyser
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl text-[#A69F88] tracking-wide font-light"
          >
            Neuroscientist & Neurotechnologist
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="max-w-2xl mt-6 text-[#8c8470] font-light leading-relaxed"
          >
            PhD researcher working across social cognition, brain-computer interfaces, wearable sensing,
            robotics, and multimodal AI — from primate social decision-making to translational neurotechnology.
          </motion.p>
        </header>

        <section id="research" className="min-h-screen p-8 md:p-16 bg-[#1c1c1c]/30">
          <motion.h2 initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} className={heading}>
            Research
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {researchAreas.map(area => (
              <motion.div
                key={area.title}
                className={card}
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <h3 className="font-['Syncopate'] uppercase text-lg md:text-xl mb-4 text-[#CDA45E]">{area.title}</h3>
                <p className="text-[#A69F88] font-light leading-relaxed mb-4">{area.body}</p>
                <p className="text-xs uppercase tracking-wide text-[#6f6957]">{area.meta}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="projects" className="min-h-screen p-8 md:p-16">
          <motion.h2 initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} className={heading}>
            Projects
          </motion.h2>
          <p className="text-[#6f6957] text-sm font-light mb-10 -mt-6">Tap any card for the full story, photos, and links.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ perspective: '1200px' }}>
            {projects.map(project => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <TiltCard onClick={() => setActiveProject(project)} ariaLabel={`Open ${project.title} details`}>
                  <ProjectCover project={project} className="w-full h-44" />
                  <div className="p-7">
                    <h3 className="font-['Syncopate'] uppercase text-lg mb-2 text-[#CDA45E]">{project.title}</h3>
                    <p className="text-xs uppercase tracking-wide text-[#6f6957] mb-4">{project.tag}</p>
                    <p className="text-[#A69F88] font-light leading-relaxed line-clamp-3">{project.body}</p>
                    <span className="inline-flex items-center gap-1 mt-5 text-sm text-[#CDA45E]">
                      View details <span aria-hidden="true">→</span>
                    </span>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="writings" className="min-h-screen p-8 md:p-16 bg-[#1c1c1c]/30">
          <motion.h2 initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} className={heading}>
            Writings
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {ideas.map(idea => (
              <motion.div
                key={idea.title}
                className={card}
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <h3 className="font-['Syncopate'] uppercase text-lg mb-2 text-[#CDA45E]">{idea.title}</h3>
                <p className="text-xs uppercase tracking-wide text-[#6f6957] mb-4">{idea.status}</p>
                <p className="text-[#A69F88] font-light leading-relaxed">{idea.body}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="cv" className="min-h-screen p-8 md:p-16">
          <motion.h2 initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} className={heading}>
            CV
          </motion.h2>
          <div className="max-w-5xl mx-auto mb-10">
            <a
              href="/Hildelith_Leyser_CV.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-[#CDA45E]/50 text-[#CDA45E] hover:bg-[#CDA45E] hover:text-[#141414] transition-colors font-['Syncopate'] uppercase text-xs tracking-wide"
            >
              <Download size={16} /> Download CV
            </a>
          </div>
          <div className="max-w-5xl mx-auto space-y-8">
            <div className={card}>
              <h3 className="font-['Syncopate'] uppercase text-xl mb-6 text-[#CDA45E]">Education</h3>
              <div className="space-y-5">
                {cv.education.map(e => (
                  <div key={e.what}>
                    <p className="text-[#E5DCC5]"><span className="text-[#6f6957] text-sm mr-3">{e.when}</span>{e.what}</p>
                    <p className="text-[#A69F88] font-light text-sm">{e.where}</p>
                    <p className="text-[#8c8470] font-light text-sm mt-1">{e.note}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className={card}>
              <h3 className="font-['Syncopate'] uppercase text-xl mb-6 text-[#CDA45E]">Experience</h3>
              <div className="space-y-5">
                {cv.experience.map(e => (
                  <div key={e.what}>
                    <p className="text-[#E5DCC5]"><span className="text-[#6f6957] text-sm mr-3">{e.when}</span>{e.what}</p>
                    <p className="text-[#A69F88] font-light text-sm">{e.where}</p>
                    <p className="text-[#8c8470] font-light text-sm mt-1">{e.note}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className={card}>
                <h3 className="font-['Syncopate'] uppercase text-xl mb-6 text-[#CDA45E]">Training & Fellowships</h3>
                <div className="space-y-4">
                  {cv.fellowships.map(f => (
                    <div key={f.what}>
                      <p className="text-[#E5DCC5] text-sm"><span className="text-[#6f6957] mr-3">{f.when}</span>{f.what}</p>
                      <p className="text-[#A69F88] font-light text-sm">{f.where}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className={card}>
                <h3 className="font-['Syncopate'] uppercase text-xl mb-6 text-[#CDA45E]">Awards</h3>
                <ul className="space-y-2 text-[#A69F88] font-light text-sm">
                  {cv.awards.map(a => <li key={a}>{a}</li>)}
                </ul>
              </div>
            </div>

            <div className={card}>
              <h3 className="font-['Syncopate'] uppercase text-xl mb-6 text-[#CDA45E]">Technical Skills</h3>
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                {cv.skills.map(s => (
                  <div key={s.area}>
                    <p className="text-[#E5DCC5] text-sm mb-1">{s.area}</p>
                    <p className="text-[#A69F88] font-light text-sm">{s.items}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className={card}>
                <h3 className="font-['Syncopate'] uppercase text-xl mb-6 text-[#CDA45E]">Writing</h3>
                <ul className="space-y-3 text-[#A69F88] font-light text-sm">
                  {cv.writing.map(w => <li key={w}>{w}</li>)}
                </ul>
              </div>
              <div className={card}>
                <h3 className="font-['Syncopate'] uppercase text-xl mb-6 text-[#CDA45E]">Selected Talks</h3>
                <ul className="space-y-3 text-[#A69F88] font-light text-sm">
                  {cv.talks.map(t => <li key={t}>{t}</li>)}
                </ul>
              </div>
            </div>

            <div className={card}>
              <h3 className="font-['Syncopate'] uppercase text-xl mb-6 text-[#CDA45E]">Invited Talks & Teaching</h3>
              <ul className="space-y-3 text-[#A69F88] font-light text-sm">
                {cv.invited.map(t => <li key={t}>{t}</li>)}
              </ul>
            </div>

            <div className={card}>
              <h3 className="font-['Syncopate'] uppercase text-xl mb-6 text-[#CDA45E]">Leadership & Service</h3>
              <ul className="space-y-2 text-[#A69F88] font-light text-sm">
                {cv.service.map(s => <li key={s}>{s}</li>)}
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className={card}>
                <h3 className="font-['Syncopate'] uppercase text-xl mb-6 text-[#CDA45E]">International Collaboration</h3>
                <div className="space-y-4">
                  {cv.collaboration.map(c => (
                    <div key={c.where}>
                      <p className="text-[#E5DCC5] text-sm mb-1">{c.where}</p>
                      <p className="text-[#A69F88] font-light text-sm">{c.what}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className={card}>
                <h3 className="font-['Syncopate'] uppercase text-xl mb-6 text-[#CDA45E]">Languages</h3>
                <p className="text-[#A69F88] font-light text-sm leading-relaxed">{cv.languages}</p>
              </div>
            </div>
          </div>
        </section>

        <footer className="p-8 md:p-16 text-center border-t border-[#2a2a2a]">
          <div className="flex justify-center gap-6 mb-4 text-[#A69F88]">
            <a href={`mailto:${contact.email}`} aria-label="Email" className="hover:text-[#CDA45E] transition-colors"><Mail size={22} /></a>
            <a href={contact.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-[#CDA45E] transition-colors"><Linkedin size={22} /></a>
            <a href={contact.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-[#CDA45E] transition-colors"><Github size={22} /></a>
          </div>
          <p className="text-[#6f6957] text-sm font-light">Hildelith Leyser · Neuroscientist & Neurotechnologist</p>
        </footer>
      </div>

      <AnimatePresence>
        {activeProject && (
          <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;

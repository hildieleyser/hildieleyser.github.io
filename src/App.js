import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Mail, Linkedin, Github, Download } from 'lucide-react';

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
    tag: 'NatHACKS · Neurosphere Award',
    body: 'Real-time dual-EEG hyperscanning platform with custom sensor hardware and Python signal processing to measure inter-brain synchrony during human interaction and neurofeedback.',
    github: null
  },
  {
    title: 'Circuit Robot',
    slug: 'circuit-robot',
    tag: 'Hugging Face LeRobot Hackathon Winner · 2025',
    body: 'Open-hardware robotic manipulation platform on the SO-ARM101 arm for electrical circuit assembly, with real-time computer vision, component recognition, and manipulation control.',
    github: null
  },
  {
    title: 'Auracle',
    slug: 'auracle',
    tag: 'Project Motherboard Hackathon Winner · 2026',
    body: 'Closed-loop wearable for olfactory sensing and air filtration, with a companion app, real-time exposure scoring, and AI-based volatile organic compound classification for respiratory health.',
    github: 'https://github.com/hildieleyser/auracle'
  },
  {
    title: 'Inkling',
    slug: 'inkling',
    tag: 'SSVEP Brain-Computer Interface',
    body: 'An SSVEP-based brain-computer interface speller for assistive communication, enabling text entry through visual attention — oriented toward accessible communication and Parkinson’s-related applications.',
    github: 'https://github.com/hildieleyser/Inkling'
  },
  {
    title: 'Parkinsync',
    slug: 'parkinsync',
    tag: 'McGill Biomechanics Society',
    body: 'EMG-driven exoskeleton concept for tremor-related motor support in Parkinson’s disease, integrating mechanical and electronic control logic across an interdisciplinary team.',
    github: null
  },
  {
    title: 'Tipsea Dipsea',
    slug: 'tipsea-dipsea',
    tag: 'NeuroHack McGill · Industry Prize',
    body: 'Gamified underwater VR environment that harnesses the groove response in a Stroop-style task, using biofeedback for cognitive and emotional training.',
    github: null
  },
  {
    title: 'Scream Machine',
    slug: 'scream-machine',
    tag: 'Craziest Idea Prize · TechBros Hackathon',
    body: 'A playful neurotech hackathon build that took the Craziest Idea prize at the TechBros Hackathon.',
    github: null
  },
  {
    title: 'Monkey Sea Monkey Doom',
    slug: 'monkey-sea-monkey-doom',
    tag: 'Neurofeedback Game',
    body: 'An immersive neurofeedback video game that trains sympathetic nervous system deactivation through play.',
    github: null
  },
  {
    title: 'Real-Time Neurofeedback',
    slug: 'real-time-neurofeedback',
    tag: 'Open-source tooling',
    body: 'A Python package and dashboard for real-time neurofeedback from EEG and multimodal physiological data.',
    github: null
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
    { when: '2023', what: 'RIKEN Learning and Imagination Summer Program', where: 'Tokyo' }
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
    { area: 'Simulation & Design', items: 'Unity 3D, Unreal Engine, Blender, SketchUp, ANSYS HFSS, VR task design' }
  ],
  writing: [
    'Leyser, H. et al. Social context reshapes exploration and reward valuation in a 3D macaque foraging task (in prep).',
    'Leyser, H. et al. Invisible Orchestras: sensory and metabolic negotiation as the basis of social alignment (in prep).',
    'Leyser, H.F. & Cooper, K. How do we differentiate between humans and robots? A multisensory perspective (in revision).',
    'Why Mirror Neurons are the most important finding in psychology — postgraduate essay competition winner, 2023.'
  ],
  talks: [
    '2026 — British Neuroscience Association AI Symposium: neurotechnology and social cognition.',
    '2025 — Co-Creation International Conference, Tokyo: neural mechanisms of social behaviour.',
    '2024 — Japanese Neuroscience Society, Fukuoka: embodied decision-making and 3D foraging.',
    '2024 — COSYNE, Lisbon: movement patterns as cognitive nodes.',
    '2024 — ICPBR Summer School, Shanghai: sociability, hierarchy, and reward.'
  ],
  awards: [
    '2026 — Cambridge NeuroWorks What If Fellowship (ARIA)',
    '2026 — Project Motherboard Hackathon Winner (Auracle)',
    '2025 — Hugging Face LeRobot Worldwide Hackathon Winner (Circuit Robot)',
    '2025 — UCSF-CBS Young Investigator Exchange Travel Award',
    '2024–2025 — RIKEN International Program Fellowship',
    '2024 — Neurosphere natHACKS Award',
    '2024 — Silicio Labs Industry Partner Prize (VR)',
    '2023 — Postgraduate Student Essay Competition Winner'
  ],
  service: [
    '2024–Present — COSYNE Diversity and Inclusion Committee',
    '2023–2024 — Senior Project Advisor, McGill Biomechanics Society',
    '2023–2024 — Vice President, McGill Care Through Tech',
    '2025–Present — Python tutor for neuroscience, ML, and creative BCI projects'
  ]
};

const contact = {
  email: 'hildelith.leyser@mail.mcgill.ca',
  linkedin: 'https://www.linkedin.com/in/hildelith-leyser-382564206',
  github: 'https://github.com/Hildieleyser'
};

const card = 'bg-[#1c1c1c]/80 backdrop-blur-sm rounded-lg shadow-lg p-8 border border-[#2a2a2a]';
const heading = "font-['Syncopate'] uppercase text-3xl md:text-4xl mb-12 tracking-wide text-[#E5DCC5]";

// Shows the project image if present in /public/projects, otherwise an
// on-brand gradient tile with the project's initials so cards never look broken.
const ProjectImage = ({ slug, title }) => {
  const [failed, setFailed] = useState(false);
  const initials = title.split(' ').slice(0, 2).map(w => w[0]).join('');
  if (failed) {
    return (
      <div className="w-full h-44 rounded-md mb-5 flex items-center justify-center bg-gradient-to-br from-[#2a2419] to-[#161616] border border-[#2a2a2a]">
        <span className="font-['Syncopate'] text-2xl text-[#CDA45E]/70">{initials}</span>
      </div>
    );
  }
  return (
    <img
      src={`/projects/${slug}.jpg`}
      alt={title}
      onError={() => setFailed(true)}
      className="w-full h-44 object-cover rounded-md mb-5 border border-[#2a2a2a]"
    />
  );
};

const App = () => {
  const canvasRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map(project => (
              <motion.div
                key={project.title}
                className={`${card} flex flex-col`}
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <ProjectImage slug={project.slug} title={project.title} />
                <h3 className="font-['Syncopate'] uppercase text-lg mb-2 text-[#CDA45E]">{project.title}</h3>
                <p className="text-xs uppercase tracking-wide text-[#6f6957] mb-4">{project.tag}</p>
                <p className="text-[#A69F88] font-light leading-relaxed flex-grow">{project.body}</p>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 mt-6 text-sm text-[#CDA45E] hover:text-[#E5DCC5] transition-colors"
                  >
                    <Github size={16} /> View on GitHub
                  </a>
                )}
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
              <h3 className="font-['Syncopate'] uppercase text-xl mb-6 text-[#CDA45E]">Leadership & Service</h3>
              <ul className="space-y-2 text-[#A69F88] font-light text-sm">
                {cv.service.map(s => <li key={s}>{s}</li>)}
              </ul>
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
    </div>
  );
};

export default App;

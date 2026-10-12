/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  Code2,
  Database,
  Palette,
  GraduationCap,
  Award,
  Mail,
  Linkedin,
  Github,
  ExternalLink,
  ChevronRight,
  Copy,
  Check,
  MapPin,
  Calendar,
  Menu,
  X,
  Send,
  Terminal,
  Layers,
  ArrowUp,
  Briefcase,
  Sparkles,
  BookOpen,
  Camera,
  Compass,
  Film,
  MonitorCheck,
  FolderGit2
} from 'lucide-react';

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  detailedDescription: string;
  technologies: string[];
  highlights: string[];
  githubUrl: string;
  liveUrl?: string;
  architecture: string;
}

const PROJECTS: Project[] = [
  {
    id: 'quiz-system',
    title: 'Online Quiz System',
    category: 'Web Application & DBMS',
    description:
      'A web-based assessment platform featuring timed question sets, instant score calculation, question categorization, and persistent student records in MySQL.',
    detailedDescription:
      'The Online Quiz System is designed to streamline academic testing and self-assessment for students. It features automated timer countdowns, randomized multiple-choice question rendering, category selection, and instant performance tabulation with detailed answer reviews. The system uses a normalized MySQL database schema to securely manage question banks, student attempts, and historical scoring data.',
    technologies: ['Java', 'HTML', 'CSS', 'JavaScript', 'MySQL'],
    highlights: [
      'Interactive timed evaluation with countdown timer',
      'Dynamic question rendering across multiple categories',
      'Instant score computation and result summary generation',
      'Relational MySQL schema for user attempts and question banks'
    ],
    githubUrl: 'https://github.com/drishti-parmar/online-quiz-system',
    liveUrl: '#',
    architecture: 'Frontend (HTML/CSS/JS) ⇄ Backend Controller (Java) ⇄ MySQL Database'
  },
  {
    id: 'opencv-management',
    title: 'OpenCV Student Management',
    category: 'Computer Vision & Automation',
    description:
      'A smart student management and automated attendance system utilizing OpenCV computer vision for facial recognition and secure MySQL database record tracking.',
    detailedDescription:
      'This project modernizes manual classroom attendance by integrating real-time facial detection and recognition using Python and OpenCV. The system captures live video feeds, detects facial landmarks, matches them against registered student embeddings, and logs automated attendance timestamps into a centralized MySQL database with zero manual paperwork.',
    technologies: ['Python', 'OpenCV', 'MySQL', 'Desktop GUI'],
    highlights: [
      'Real-time webcam facial detection and feature recognition',
      'Automated attendance logging with timestamp and student ID',
      'Admin portal for registering new student faces and profiles',
      'Reduces proxy attendance and eliminates paper registers'
    ],
    githubUrl: 'https://github.com/drishti-parmar/opencv-student-management',
    liveUrl: '#',
    architecture: 'OpenCV Camera Stream ⇄ Python Detection Engine ⇄ MySQL Attendance Ledger'
  },
  {
    id: 'hostel-complaint',
    title: 'Hostel Complaint Management System',
    category: 'Campus Web System',
    description:
      'A centralized campus grievance management portal enabling hostel students to register maintenance issues, monitor ticket progress, and receive administrator resolutions.',
    detailedDescription:
      'Developed to resolve communication bottlenecks in student hostels, this system allows campus residents to log grievances across categories such as electrical, plumbing, sanitation, and civil maintenance. Students can track resolution status (Pending, In-Progress, Resolved) in real-time, while wardens and maintenance teams have an administrative view to update status notes.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'MySQL', 'Java'],
    highlights: [
      'Multi-category complaint logging (Electrical, Plumbing, Civil)',
      'Real-time ticket status tracking (Pending / In Progress / Resolved)',
      'Admin management dashboard for hostel staff and wardens',
      'MySQL database for tracking ticket histories and resolution turnaround'
    ],
    githubUrl: 'https://github.com/drishti-parmar/hostel-complaint-system',
    liveUrl: '#',
    architecture: 'Responsive UI ⇄ Service Layer ⇄ MySQL Relational Repository'
  }
];

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  // Contact Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  // Handle active navigation item on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'education', 'achievements', 'hobbies', 'contact'];
      const scrollPosition = window.scrollY + 140;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText('0808cs241114.ies@ipsacademy.org');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: 'General Inquiry',
        message: ''
      });
      setTimeout(() => setFormStatus('idle'), 6000);
    }, 900);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col font-sans selection:bg-indigo-500/30 selection:text-indigo-200">
      
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 bg-zinc-950/85 backdrop-blur-md border-b border-zinc-800/80 transition-colors">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          {/* Logo / Brand */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-md py-1"
          >
            <div className="w-8 h-8 rounded-lg bg-indigo-600/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400 font-mono font-bold text-xs group-hover:border-indigo-400 group-hover:bg-indigo-600/30 transition-all">
              &lt;DP/&gt;
            </div>
            <div>
              <span className="font-bold text-zinc-100 tracking-tight group-hover:text-white transition-colors">
                Drishti Parmar
              </span>
              <span className="hidden sm:inline-block ml-2 text-xs font-mono text-zinc-400">
                CSE · IPS Academy
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-6" aria-label="Main Navigation">
            {[
              { id: 'home', label: 'Home' },
              { id: 'about', label: 'About' },
              { id: 'skills', label: 'Skills' },
              { id: 'projects', label: 'Projects' },
              { id: 'education', label: 'Education' },
              { id: 'achievements', label: 'Achievements' },
              { id: 'hobbies', label: 'Hobbies' },
              { id: 'contact', label: 'Contact' }
            ].map(item => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`text-sm font-medium transition-colors relative py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded ${
                  activeSection === item.id
                    ? 'text-indigo-400'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-indigo-500 rounded-full" />
                )}
              </a>
            ))}
          </nav>

          {/* Action & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-indigo-600 text-white hover:bg-indigo-500 transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Get in Touch</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              className="md:hidden p-2 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-zinc-800 bg-zinc-900/95 backdrop-blur-lg px-4 pt-3 pb-5 space-y-1">
            {[
              { id: 'home', label: 'Home' },
              { id: 'about', label: 'About' },
              { id: 'skills', label: 'Skills' },
              { id: 'projects', label: 'Projects' },
              { id: 'education', label: 'Education' },
              { id: 'achievements', label: 'Achievements & Certifications' },
              { id: 'hobbies', label: 'Hobbies' },
              { id: 'contact', label: 'Contact' }
            ].map(item => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? 'bg-indigo-600/20 text-indigo-400'
                    : 'text-zinc-300 hover:bg-zinc-800 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-500 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-1">

        {/* HERO SECTION */}
        <section id="home" className="relative pt-20 pb-24 md:py-28 overflow-hidden">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[320px] bg-indigo-600/10 blur-[130px] -z-10 pointer-events-none rounded-full" />
          <div className="absolute top-1/3 right-10 w-[280px] h-[220px] bg-blue-600/10 blur-[110px] -z-10 pointer-events-none rounded-full" />

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              
              {/* Quiet student meta line (Zero-pill discipline) */}
              <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-mono text-zinc-400 mb-5">
                <span className="inline-flex items-center gap-1.5 text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-pulse" />
                  Open to Internships
                </span>
                <span className="text-zinc-600">/</span>
                <span>Indore, India</span>
                <span className="text-zinc-600">/</span>
                <span>IES, IPS Academy</span>
              </div>

              {/* Large Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-4">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-indigo-200 to-sky-300">Drishti Parmar</span>
              </h1>

              {/* Subtitle */}
              <p className="text-xl sm:text-2xl font-semibold text-indigo-300 mb-6 tracking-tight">
                B.Tech CSE Student & Aspiring Software Developer
              </p>

              {/* Short Description */}
              <p className="text-base sm:text-lg text-zinc-300 leading-relaxed mb-8">
                I am Drishti Parmar, a B.Tech Computer Science Engineering student at IPS Academy Institute of Engineering and Science. I am interested in UI/UX Design, Web Development, and Data Analytics, and I enjoy learning new technologies and developing creative solutions.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/30 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                >
                  <FolderGit2 className="w-4 h-4" />
                  <span>View Projects</span>
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-zinc-700/80 font-semibold text-sm transition-all hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400"
                >
                  <Send className="w-4 h-4" />
                  <span>Contact Me</span>
                </a>

                <button
                  onClick={copyEmailToClipboard}
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-zinc-900/60 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200 border border-zinc-800 text-sm font-medium transition-all"
                  title="Copy email address"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400 text-xs">Copied email!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span className="text-xs">Copy Email</span>
                    </>
                  )}
                </button>
              </div>

              {/* Social & Contact Row */}
              <div className="pt-6 border-t border-zinc-800/80 flex flex-wrap items-center gap-5 sm:gap-7 text-sm text-zinc-400">
                <a
                  href="https://www.linkedin.com/in/drishti-parmar-9a8658328"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-indigo-400 transition-colors group"
                >
                  <Linkedin className="w-4 h-4 text-zinc-500 group-hover:text-indigo-400 transition-colors" />
                  <span>LinkedIn Profile</span>
                  <ExternalLink className="w-3 h-3 text-zinc-600 group-hover:text-indigo-400" />
                </a>

                <a
                  href="https://github.com/drishti-parmar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-indigo-400 transition-colors group"
                >
                  <Github className="w-4 h-4 text-zinc-500 group-hover:text-indigo-400 transition-colors" />
                  <span>GitHub</span>
                  <ExternalLink className="w-3 h-3 text-zinc-600 group-hover:text-indigo-400" />
                </a>

                <a
                  href="mailto:0808cs241114.ies@ipsacademy.org"
                  className="inline-flex items-center gap-2 hover:text-indigo-400 transition-colors group"
                >
                  <Mail className="w-4 h-4 text-zinc-500 group-hover:text-indigo-400 transition-colors" />
                  <span className="font-mono text-xs">0808cs241114.ies@ipsacademy.org</span>
                </a>
              </div>

            </div>
          </div>
        </section>

        {/* ABOUT ME SECTION */}
        <section id="about" className="py-20 bg-zinc-900/40 border-y border-zinc-800/60">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="mb-12">
              <p className="text-xs font-mono font-semibold uppercase tracking-wider text-indigo-400 mb-2">
                01. Introduction
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                About Me
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              
              {/* Left narrative */}
              <div className="lg:col-span-7 space-y-4 text-zinc-300 leading-relaxed text-base sm:text-lg">
                <p>
                  I am a pre-final year <strong>B.Tech Computer Science &amp; Engineering</strong> student at{' '}
                  <span className="text-white font-medium">IPS Academy Institute of Engineering and Science, Indore</span>. My journey in tech is driven by curiosity, logical thinking, and the satisfaction of translating real-world requirements into working code.
                </p>
                <p>
                  My core interests revolve around <strong>software development</strong>, <strong>Data Structures &amp; Algorithms (DSA)</strong>, and <strong>problem solving</strong>. I believe that writing clean, maintainable code begins with solid fundamentals in object-oriented programming and algorithmic efficiency.
                </p>
                <p>
                  Alongside software engineering, I have a keen eye for <strong>UI/UX Design</strong>, <strong>Web Development</strong>, and <strong>Data Analytics</strong>. Whether designing intuitive user interfaces or modeling normalized relational databases in MySQL, I enjoy building solutions that are both functional under the hood and enjoyable to interact with.
                </p>
                <p className="text-sm text-zinc-400 pt-2 font-mono">
                  Current Focus: Deepening algorithmic problem-solving in Java &amp; C++, full-stack web architectures, and exploring computer vision applications.
                </p>
              </div>

              {/* Right fast stats cards */}
              <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                
                <div className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">Education</span>
                  </div>
                  <h3 className="font-semibold text-zinc-100 text-base">B.Tech in Computer Science</h3>
                  <p className="text-sm text-zinc-400 mt-1">IPS Academy IES, Indore (3rd Year · Class of 2027)</p>
                </div>

                <div className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                      <Award className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">Academic Record</span>
                  </div>
                  <h3 className="font-semibold text-zinc-100 text-base">8.4 CGPA</h3>
                  <p className="text-sm text-zinc-400 mt-1">Consistent academic standing with strong foundation in core CS coursework.</p>
                </div>

                <div className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">Base Location</span>
                  </div>
                  <h3 className="font-semibold text-zinc-100 text-base">Indore, India</h3>
                  <p className="text-sm text-zinc-400 mt-1">Open to on-site internships in Indore/major hubs and remote collaboration.</p>
                </div>

              </div>

            </div>

          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="mb-12">
              <p className="text-xs font-mono font-semibold uppercase tracking-wider text-indigo-400 mb-2">
                02. Technical Toolkit
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Skills &amp; Technologies
              </h2>
              <p className="text-zinc-400 mt-2 text-base max-w-2xl">
                Curated technical proficiencies acquired through coursework, practical coding projects, and hands-on laboratory exercises.
              </p>
            </div>

            {/* 4 Strict Categories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Category 1: Programming */}
              <div className="p-6 rounded-2xl bg-zinc-900/70 border border-zinc-800 hover:border-indigo-500/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                      <Code2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-white">Programming Languages</h3>
                      <p className="text-xs font-mono text-zinc-400">Core Foundations &amp; Algorithms</p>
                    </div>
                  </div>

                  <div className="space-y-3.5">
                    {[
                      { name: 'Java', role: 'Object-Oriented Programming, Data Structures, Backend Logic', level: 'Proficient' },
                      { name: 'C++', role: 'Competitive Programming, Algorithmic Problem Solving, Memory Concepts', level: 'Proficient' },
                      { name: 'Python', role: 'OpenCV Computer Vision, Automation Scripts, Data Handling', level: 'Intermediate' },
                      { name: 'C', role: 'Procedural Programming, System Fundamentals, Pointers', level: 'Academic Core' }
                    ].map(skill => (
                      <div key={skill.name} className="p-3 rounded-xl bg-zinc-950/60 border border-zinc-800/80">
                        <div className="flex justify-between items-baseline mb-1">
                          <span className="font-semibold text-zinc-200 text-sm">{skill.name}</span>
                          <span className="text-xs font-mono text-indigo-400">{skill.level}</span>
                        </div>
                        <p className="text-xs text-zinc-400">{skill.role}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Category 2: Web Development */}
              <div className="p-6 rounded-2xl bg-zinc-900/70 border border-zinc-800 hover:border-sky-500/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20">
                      <MonitorCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-white">Web Development</h3>
                      <p className="text-xs font-mono text-zinc-400">Frontend Interfaces &amp; Interactivity</p>
                    </div>
                  </div>

                  <div className="space-y-3.5">
                    {[
                      { name: 'HTML / HTML5', role: 'Semantic page structure, accessibility, forms and modern document standards', level: 'Proficient' },
                      { name: 'CSS / CSS3', role: 'Responsive layout design, Flexbox, Grid, transitions, modern dark theme styling', level: 'Proficient' },
                      { name: 'JavaScript', role: 'DOM manipulation, dynamic question rendering, event handling, async requests', level: 'Intermediate' }
                    ].map(skill => (
                      <div key={skill.name} className="p-3 rounded-xl bg-zinc-950/60 border border-zinc-800/80">
                        <div className="flex justify-between items-baseline mb-1">
                          <span className="font-semibold text-zinc-200 text-sm">{skill.name}</span>
                          <span className="text-xs font-mono text-sky-400">{skill.level}</span>
                        </div>
                        <p className="text-xs text-zinc-400">{skill.role}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Category 3: UI/UX Design */}
              <div className="p-6 rounded-2xl bg-zinc-900/70 border border-zinc-800 hover:border-purple-500/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                      <Palette className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-white">UI/UX Design</h3>
                      <p className="text-xs font-mono text-zinc-400">Human-Centric Interface Conception</p>
                    </div>
                  </div>

                  <div className="space-y-3.5">
                    {[
                      { name: 'Wireframing & Prototyping', role: 'Translating project requirements into low and high-fidelity screen mockups', level: 'Design Practice' },
                      { name: 'User Flow & Journey Mapping', role: 'Designing logical student paths for complaint tracking and quiz navigation', level: 'Applied' },
                      { name: 'Responsive Layout Systems', role: 'Ensuring seamless usability across mobile viewports, tablets, and desktop displays', level: 'Core Focus' }
                    ].map(skill => (
                      <div key={skill.name} className="p-3 rounded-xl bg-zinc-950/60 border border-zinc-800/80">
                        <div className="flex justify-between items-baseline mb-1">
                          <span className="font-semibold text-zinc-200 text-sm">{skill.name}</span>
                          <span className="text-xs font-mono text-purple-400">{skill.level}</span>
                        </div>
                        <p className="text-xs text-zinc-400">{skill.role}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Category 4: Database */}
              <div className="p-6 rounded-2xl bg-zinc-900/70 border border-zinc-800 hover:border-emerald-500/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      <Database className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-white">Database Management</h3>
                      <p className="text-xs font-mono text-zinc-400">Relational Modeling &amp; Persistence</p>
                    </div>
                  </div>

                  <div className="space-y-3.5">
                    <div className="p-3 rounded-xl bg-zinc-950/60 border border-zinc-800/80">
                      <div className="flex justify-between items-baseline mb-1">
                        <span className="font-semibold text-zinc-200 text-sm">MySQL</span>
                        <span className="text-xs font-mono text-emerald-400">Proficient</span>
                      </div>
                      <p className="text-xs text-zinc-400">
                        Relational schema design, writing complex SQL queries, JOIN operations, primary/foreign key relationships, and data normalization (1NF–3NF).
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-zinc-950/60 border border-zinc-800/80">
                      <div className="flex justify-between items-baseline mb-1">
                        <span className="font-semibold text-zinc-200 text-sm">Database System Concepts</span>
                        <span className="text-xs font-mono text-emerald-400">Academic Core</span>
                      </div>
                      <p className="text-xs text-zinc-400">
                        ACID properties, transaction management, indexing, table constraints, and student database record preservation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="py-20 bg-zinc-900/40 border-y border-zinc-800/60">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div>
                <p className="text-xs font-mono font-semibold uppercase tracking-wider text-indigo-400 mb-2">
                  03. Practical Implementation
                </p>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Featured Projects
                </h2>
                <p className="text-zinc-400 mt-2 text-base max-w-2xl">
                  Applied academic projects combining algorithms, database design, and user-facing interfaces to solve campus and computer vision challenges.
                </p>
              </div>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {PROJECTS.map((project, idx) => (
                <div
                  key={project.id}
                  className="rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all flex flex-col justify-between overflow-hidden group hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40"
                >
                  <div className="p-6">
                    {/* Top indicator & category */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="text-xs font-mono text-indigo-400">0{idx + 1} / Project</span>
                      <span className="text-xs text-zinc-400 font-mono">{project.category}</span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-zinc-400 text-sm leading-relaxed mb-5 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Unboxed tech tags with dot separator */}
                    <div className="flex flex-wrap items-center gap-1.5 text-xs font-mono text-zinc-300 pt-3 border-t border-zinc-800/80 mb-5">
                      {project.technologies.map((tech, i) => (
                        <React.Fragment key={tech}>
                          <span className="text-indigo-300">{tech}</span>
                          {i < project.technologies.length - 1 && <span className="text-zinc-600">·</span>}
                        </React.Fragment>
                      ))}
                    </div>

                    {/* Highlights bullets */}
                    <ul className="space-y-1.5 text-xs text-zinc-400 mb-6">
                      {project.highlights.slice(0, 2).map((highlight, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2">
                          <span className="text-indigo-400 font-bold mt-0.5">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Actions */}
                  <div className="p-4 bg-zinc-950/60 border-t border-zinc-800/80 flex items-center justify-between gap-3">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 hover:text-white transition-colors"
                    >
                      <Layers className="w-3.5 h-3.5 text-indigo-400" />
                      <span>Details &amp; Architecture</span>
                    </button>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200 border border-zinc-800 transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* EDUCATION SECTION */}
        <section id="education" className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="mb-12">
              <p className="text-xs font-mono font-semibold uppercase tracking-wider text-indigo-400 mb-2">
                04. Academic Background
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Education
              </h2>
            </div>

            <div className="max-w-4xl">
              <div className="relative pl-8 sm:pl-10 border-l-2 border-indigo-500/30 space-y-8">
                
                {/* Timeline Node */}
                <div className="relative">
                  <div className="absolute -left-[41px] sm:-left-[49px] top-1.5 w-6 h-6 rounded-full bg-zinc-950 border-2 border-indigo-500 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-indigo-400" />
                  </div>

                  <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900/80 border border-zinc-800 shadow-sm">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <span className="text-xs font-mono text-indigo-400 font-semibold uppercase tracking-wider">
                        Undergraduate Degree · 2023 – 2027 (Pre-Final Year)
                      </span>
                      <span className="text-xs font-mono text-emerald-400 px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 inline-block w-fit">
                        CGPA: 8.4 / 10
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                      B.Tech in Computer Science &amp; Engineering
                    </h3>

                    <p className="text-zinc-300 font-medium text-base mb-4">
                      IPS Academy Institute of Engineering and Science, Indore
                    </p>

                    <div className="flex items-center gap-2 text-xs text-zinc-400 font-mono mb-5">
                      <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                      <span>Indore, Madhya Pradesh, India</span>
                      <span className="text-zinc-600">·</span>
                      <span>Affiliated with RGPV Bhopal</span>
                    </div>

                    <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                      Pursuing undergraduate engineering with an emphasis on foundational computing, data structures, algorithm design, relational database systems, and object-oriented software engineering. Consistently maintained high academic discipline with an 8.4 CGPA.
                    </p>

                    <div className="pt-4 border-t border-zinc-800/80">
                      <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400 mb-3">
                        Key Coursework Completed:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-300">
                        <div className="flex items-center gap-2">
                          <span className="text-indigo-400 font-bold">›</span>
                          <span>Data Structures &amp; Algorithms (DSA)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-indigo-400 font-bold">›</span>
                          <span>Object Oriented Programming (OOP in Java/C++)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-indigo-400 font-bold">›</span>
                          <span>Database Management Systems (DBMS &amp; MySQL)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-indigo-400 font-bold">›</span>
                          <span>Operating Systems &amp; System Concepts</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-indigo-400 font-bold">›</span>
                          <span>Computer Networks &amp; Data Communication</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-indigo-400 font-bold">›</span>
                          <span>Software Engineering &amp; Design Principles</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* ACHIEVEMENTS & CERTIFICATIONS SECTION */}
        <section id="achievements" className="py-20 bg-zinc-900/40 border-y border-zinc-800/60">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="mb-12">
              <p className="text-xs font-mono font-semibold uppercase tracking-wider text-indigo-400 mb-2">
                05. Milestones &amp; Credentials
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Achievements &amp; Certifications
              </h2>
              <p className="text-zinc-400 mt-2 text-base max-w-2xl">
                Recognitions earned through academic merit, technical certifications, and college hackathon competitions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Card 1: Technical Certifications */}
              <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-white">Technical Certifications</h3>
                      <p className="text-xs font-mono text-zinc-400">Verified Course Completions</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="p-3.5 rounded-xl bg-zinc-950/60 border border-zinc-800/80">
                      <div className="flex justify-between items-baseline mb-1">
                        <span className="font-semibold text-zinc-100 text-sm">Java &amp; Data Structures Certificate</span>
                        <span className="text-xs font-mono text-indigo-400">Certified</span>
                      </div>
                      <p className="text-xs text-zinc-400">
                        Completed comprehensive training on Object-Oriented Programming, collections framework, and algorithmic fundamentals in Java.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-zinc-950/60 border border-zinc-800/80">
                      <div className="flex justify-between items-baseline mb-1">
                        <span className="font-semibold text-zinc-100 text-sm">Database Management &amp; SQL Mastery</span>
                        <span className="text-xs font-mono text-indigo-400">Certified</span>
                      </div>
                      <p className="text-xs text-zinc-400">
                        Demonstrated proficiency in relational database architecture, relational algebra, SQL DDL/DML, and schema normalization in MySQL.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-zinc-950/60 border border-zinc-800/80">
                      <div className="flex justify-between items-baseline mb-1">
                        <span className="font-semibold text-zinc-100 text-sm">Web Development Fundamentals</span>
                        <span className="text-xs font-mono text-indigo-400">Certified</span>
                      </div>
                      <p className="text-xs text-zinc-400">
                        Hands-on mastery of semantic HTML5, modern CSS3 layout paradigms, and vanilla JavaScript DOM programming.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2: Hackathons & Competitions */}
              <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-white">Hackathons &amp; Events</h3>
                      <p className="text-xs font-mono text-zinc-400">Collaborative Coding &amp; Recognition</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="p-3.5 rounded-xl bg-zinc-950/60 border border-zinc-800/80">
                      <div className="flex justify-between items-baseline mb-1">
                        <span className="font-semibold text-zinc-100 text-sm">IPS Academy Technical Hackathon</span>
                        <span className="text-xs font-mono text-amber-400">Participant</span>
                      </div>
                      <p className="text-xs text-zinc-400">
                        Collaborated in a time-constrained team environment to build automated campus grievance and student workflow prototypes using web technologies and MySQL.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-zinc-950/60 border border-zinc-800/80">
                      <div className="flex justify-between items-baseline mb-1">
                        <span className="font-semibold text-zinc-100 text-sm">Department Coding &amp; DSA Contests</span>
                        <span className="text-xs font-mono text-amber-400">Active Solver</span>
                      </div>
                      <p className="text-xs text-zinc-400">
                        Regular participant in college algorithmic challenges testing speed, time complexity optimization, and debugging under pressure.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-zinc-950/60 border border-zinc-800/80">
                      <div className="flex justify-between items-baseline mb-1">
                        <span className="font-semibold text-zinc-100 text-sm">Academic Merit Recognition</span>
                        <span className="text-xs font-mono text-amber-400">8.4 CGPA</span>
                      </div>
                      <p className="text-xs text-zinc-400">
                        Maintained consistent top-tier academic performance across 5 consecutive semesters in Computer Science &amp; Engineering.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* HOBBIES SECTION */}
        <section id="hobbies" className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="mb-12">
              <p className="text-xs font-mono font-semibold uppercase tracking-wider text-indigo-400 mb-2">
                06. Personal Interests
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Hobbies &amp; Creative Pursuits
              </h2>
              <p className="text-zinc-400 mt-2 text-base max-w-2xl">
                Beyond terminal windows and compilers, here are the creative outlets and interests that shape my perspective and keep me curious.
              </p>
            </div>

            {/* 5 Specific Hobbies */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              
              {/* Hobby 1: Artist */}
              <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-pink-500/40 hover:-translate-y-1 transition-all text-center flex flex-col items-center">
                <div className="text-3xl mb-3">🎨</div>
                <h3 className="font-bold text-base text-zinc-100 mb-1">Artist</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Creative sketching, digital illustration, and visual art. Exploring how color, shape, and balance evoke emotional clarity.
                </p>
              </div>

              {/* Hobby 2: Traveler */}
              <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-sky-500/40 hover:-translate-y-1 transition-all text-center flex flex-col items-center">
                <div className="text-3xl mb-3">✈️</div>
                <h3 className="font-bold text-base text-zinc-100 mb-1">Traveler</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Exploring diverse cultures, historical architecture, and scenic landscapes across regions to gain fresh viewpoints and adaptability.
                </p>
              </div>

              {/* Hobby 3: Photography */}
              <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-amber-500/40 hover:-translate-y-1 transition-all text-center flex flex-col items-center">
                <div className="text-3xl mb-3">📸</div>
                <h3 className="font-bold text-base text-zinc-100 mb-1">Photography</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Capturing fleeting moments, natural lighting, symmetry, and campus life through intentional framing and composition.
                </p>
              </div>

              {/* Hobby 4: Entertainment */}
              <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-indigo-500/40 hover:-translate-y-1 transition-all text-center flex flex-col items-center">
                <div className="text-3xl mb-3">🎬</div>
                <h3 className="font-bold text-base text-zinc-100 mb-1">Entertainment</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Appreciating cinema, screenwriting narratives, background music scores, and compelling storytelling across world media.
                </p>
              </div>

              {/* Hobby 5: Technology Enthusiast */}
              <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-emerald-500/40 hover:-translate-y-1 transition-all text-center flex flex-col items-center sm:col-span-2 lg:col-span-1">
                <div className="text-3xl mb-3">💻</div>
                <h3 className="font-bold text-base text-zinc-100 mb-1">Tech Enthusiast</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Keeping up with modern developer tools, open-source innovations, design systems, and emerging software paradigms.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-20 bg-zinc-900/40 border-t border-zinc-800/60">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="mb-12">
              <p className="text-xs font-mono font-semibold uppercase tracking-wider text-indigo-400 mb-2">
                07. Connection
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Get In Touch
              </h2>
              <p className="text-zinc-400 mt-2 text-base max-w-2xl">
                Whether you have an internship opportunity, project collaboration, or would simply like to connect with a passionate CSE student, feel free to reach out!
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              
              {/* Contact Information & Channels */}
              <div className="lg:col-span-5 space-y-6">
                
                <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-6">
                  
                  {/* Email block */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block mb-1">
                        Academic Email
                      </span>
                      <a
                        href="mailto:0808cs241114.ies@ipsacademy.org"
                        className="text-sm sm:text-base font-semibold text-zinc-100 hover:text-indigo-400 break-all transition-colors block"
                      >
                        0808cs241114.ies@ipsacademy.org
                      </a>
                      <button
                        onClick={copyEmailToClipboard}
                        className="mt-2 inline-flex items-center gap-1.5 text-xs text-indigo-400 hover:text-indigo-300 font-mono"
                      >
                        {copiedEmail ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedEmail ? 'Copied to clipboard' : 'Click to copy email'}</span>
                      </button>
                    </div>
                  </div>

                  {/* LinkedIn block */}
                  <div className="flex items-start gap-4 pt-4 border-t border-zinc-800">
                    <div className="p-3 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20 shrink-0">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block mb-1">
                        LinkedIn
                      </span>
                      <a
                        href="https://www.linkedin.com/in/drishti-parmar-9a8658328"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-zinc-100 hover:text-sky-400 transition-colors inline-flex items-center gap-1.5"
                      >
                        <span>Drishti Parmar on LinkedIn</span>
                        <ExternalLink className="w-3.5 h-3.5 text-zinc-500" />
                      </a>
                      <p className="text-xs text-zinc-400 mt-1">
                        Open for networking and professional updates.
                      </p>
                    </div>
                  </div>

                  {/* Location & Institute block */}
                  <div className="flex items-start gap-4 pt-4 border-t border-zinc-800">
                    <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block mb-1">
                        Campus &amp; Location
                      </span>
                      <p className="text-sm font-semibold text-zinc-100">
                        IES, IPS Academy Indore
                      </p>
                      <p className="text-xs text-zinc-400 mt-0.5">
                        Indore, Madhya Pradesh, India
                      </p>
                    </div>
                  </div>

                </div>

                {/* Quick note on availability */}
                <div className="p-5 rounded-2xl bg-indigo-950/30 border border-indigo-500/30">
                  <div className="flex items-center gap-2 text-indigo-400 text-sm font-semibold mb-1">
                    <Sparkles className="w-4 h-4" />
                    <span>Internship Availability</span>
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    Currently in 3rd Year B.Tech CSE. Actively seeking Summer 2025/2026 internships and software development roles. Quick learner with high dedication.
                  </p>
                </div>

              </div>

              {/* Working Contact Form */}
              <div className="lg:col-span-7">
                <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900 border border-zinc-800">
                  <h3 className="text-xl font-bold text-white mb-1">
                    Send a Direct Message
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 mb-6">
                    Fill out the form below to initiate communication.
                  </p>

                  {formStatus === 'success' ? (
                    <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                      <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                        <Check className="w-6 h-6" />
                      </div>
                      <h4 className="font-bold text-white text-base">Message Sent Successfully!</h4>
                      <p className="text-sm text-zinc-300 max-w-md mx-auto">
                        Thank you for reaching out, your message has been drafted. You can also send directly to{' '}
                        <span className="font-mono text-emerald-300">0808cs241114.ies@ipsacademy.org</span>.
                      </p>
                      <div className="pt-2">
                        <a
                          href={`mailto:0808cs241114.ies@ipsacademy.org?subject=Portfolio%20Inquiry`}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-500 transition-colors"
                        >
                          <Mail className="w-3.5 h-3.5" />
                          <span>Open in Default Mail Client</span>
                        </a>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleFormSubmit} className="space-y-4">
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="contact-name" className="block text-xs font-medium text-zinc-300 mb-1.5">
                            Your Name <span className="text-indigo-400">*</span>
                          </label>
                          <input
                            id="contact-name"
                            type="text"
                            required
                            placeholder="e.g. Rahul Sharma"
                            value={formData.name}
                            onChange={e => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-zinc-100 placeholder:text-zinc-600 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                          />
                        </div>

                        <div>
                          <label htmlFor="contact-email" className="block text-xs font-medium text-zinc-300 mb-1.5">
                            Your Email <span className="text-indigo-400">*</span>
                          </label>
                          <input
                            id="contact-email"
                            type="email"
                            required
                            placeholder="name@example.com"
                            value={formData.email}
                            onChange={e => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-zinc-100 placeholder:text-zinc-600 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="contact-subject" className="block text-xs font-medium text-zinc-300 mb-1.5">
                          Inquiry Subject
                        </label>
                        <select
                          id="contact-subject"
                          value={formData.subject}
                          onChange={e => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-zinc-100 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                        >
                          <option value="Internship Opportunity">Internship Opportunity</option>
                          <option value="Project Collaboration">Project Collaboration</option>
                          <option value="Academic Discussion">Academic Discussion</option>
                          <option value="General Inquiry">General Inquiry</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="contact-message" className="block text-xs font-medium text-zinc-300 mb-1.5">
                          Message <span className="text-indigo-400">*</span>
                        </label>
                        <textarea
                          id="contact-message"
                          required
                          rows={4}
                          placeholder="Write your message here..."
                          value={formData.message}
                          onChange={e => setFormData({ ...formData, message: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-zinc-100 placeholder:text-zinc-600 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors resize-y"
                        />
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
                        <button
                          type="submit"
                          disabled={formStatus === 'submitting'}
                          className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all shadow-md shadow-indigo-600/20 disabled:opacity-50"
                        >
                          {formStatus === 'submitting' ? (
                            <>
                              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                              <span>Sending...</span>
                            </>
                          ) : (
                            <>
                              <Send className="w-4 h-4" />
                              <span>Send Message</span>
                            </>
                          )}
                        </button>

                        <a
                          href={`mailto:0808cs241114.ies@ipsacademy.org?subject=${encodeURIComponent(
                            formData.subject
                          )}&body=${encodeURIComponent(
                            `Hi Drishti,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
                          )}`}
                          className="text-xs text-zinc-400 hover:text-indigo-300 transition-colors flex items-center gap-1"
                        >
                          <span>Prefer mail app? Click here</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>

                    </form>
                  )}

                </div>
              </div>

            </div>

          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-zinc-800/80 bg-zinc-950 py-12 text-sm text-zinc-400">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-zinc-800/60">
            
            {/* Branding & Tagline */}
            <div className="text-center md:text-left">
              <a href="#home" className="inline-flex items-center gap-2 text-base font-bold text-white mb-1">
                <span className="text-indigo-400 font-mono text-sm">&lt;DP/&gt;</span>
                <span>Drishti Parmar</span>
              </a>
              <p className="text-xs text-zinc-400 max-w-md">
                B.Tech CSE Student · Aspiring Software Developer · Dedicated to crafting thoughtful, responsive digital experiences.
              </p>
            </div>

            {/* Quick Navigation & Social */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono">
              <a
                href="https://www.linkedin.com/in/drishti-parmar-9a8658328"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-400 transition-colors inline-flex items-center gap-1.5"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>

              <a
                href="https://github.com/drishti-parmar"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-400 transition-colors inline-flex items-center gap-1.5"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>

              <a
                href="mailto:0808cs241114.ies@ipsacademy.org"
                className="hover:text-indigo-400 transition-colors inline-flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email</span>
              </a>

              <a
                href="#home"
                className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 transition-colors"
                title="Scroll back to top"
              >
                <ArrowUp className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-400">
            <p>© 2026 Drishti Parmar. All rights reserved.</p>
            <p className="font-mono">
              IPS Academy Institute of Engineering and Science, Indore
            </p>
          </div>

        </div>
      </footer>

      {/* PROJECT DETAILS & ARCHITECTURE MODAL */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative">
            
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
              aria-label="Close project modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-4">
              <span className="text-xs font-mono text-indigo-400 uppercase tracking-wider block mb-1">
                {selectedProject.category}
              </span>
              <h3 className="text-2xl font-bold text-white">
                {selectedProject.title}
              </h3>
            </div>

            <p className="text-sm text-zinc-300 leading-relaxed mb-6">
              {selectedProject.detailedDescription}
            </p>

            {/* Architecture snippet */}
            <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800/80 mb-6 font-mono text-xs">
              <span className="text-zinc-400 block mb-1 uppercase tracking-wider">System Architecture:</span>
              <span className="text-indigo-300 font-semibold">{selectedProject.architecture}</span>
            </div>

            {/* Technologies list */}
            <div className="mb-6">
              <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                Technologies Used:
              </h4>
              <div className="flex flex-wrap items-center gap-2">
                {selectedProject.technologies.map(tech => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-3 py-1 rounded-md bg-zinc-800 text-zinc-200 border border-zinc-700/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Implementation Highlights */}
            <div className="mb-8">
              <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400 mb-3">
                Key Features &amp; Implementation Details:
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-zinc-300">
                {selectedProject.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Modal Actions */}
            <div className="flex flex-wrap items-center justify-end gap-3 pt-4 border-t border-zinc-800">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold transition-colors"
              >
                Close
              </button>
              
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>View on GitHub</span>
              </a>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}

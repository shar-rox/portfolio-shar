import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Terminal, Code, Database, Brain, Github, Mail, ExternalLink, ChevronRight, Sparkles, Cpu, Instagram, Award, Music, BookOpen, TrendingUp } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('');
  const [displayText, setDisplayText] = useState('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');
  const fullText = "AI/ML Engineer // Python Developer // Building Intelligent Solutions";
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const projects = [
    {
      title: "AI Therapist Kai",
      tech: "TypeScript • AI/ML • NLP • Mental Health",
      description: "Intelligent AI-powered mental health assistant providing emotional support and therapeutic conversations using advanced natural language processing",
      link: "https://github.com/shar-rox/AI-therapist-kai",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "MediConnect AI",
      tech: "Python • Healthcare AI • Machine Learning",
      description: "AI-driven healthcare platform connecting patients with personalized medical insights and recommendations",
      link: "https://github.com/shar-rox/mediconnect-ai",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      title: "Roxy Voice AI Agent",
      tech: "Python • Voice Recognition • Conversational AI",
      description: "Advanced voice-activated AI agent with natural language understanding and intelligent response generation",
      link: "https://github.com/shar-rox/roxy-voice-ai-agent",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Call Log Recorder",
      tech: "Python • Data Processing • Automation",
      description: "Automated call log recording and analysis system for tracking and managing communication data",
      link: "https://github.com/shar-rox/call-log-recorder",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const certificates = [
    {
      title: "Python Essentials 1",
      issuer: "Cisco Networking Academy",
      date: "May 2025",
      icon: Award
    },
    {
      title: "Programming in C",
      issuer: "Wingspan (onwingspan.com)",
      date: "January 2025",
      icon: Award
    },
    {
      title: "Basics of Electronics & Programming",
      issuer: "Wingspan (onwingspan.com)",
      date: "January 2025",
      icon: Award
    },
    {
      title: "Introduction to Cyber Security",
      issuer: "Infosys Springboard",
      date: "December 2024",
      icon: Award
    },
    {
      title: "High-Performance Leadership: Lessons from Formula 1®",
      issuer: "Online Course",
      date: "August 2025",
      icon: Award
    },
    {
      title: "AI-Powered Shopping Ads Certification",
      issuer: "Google (Shopping Ads Certified)",
      date: "August 2025",
      icon: Award
    }
  ];

  const currentlyDoing = [
    { icon: Music, label: "Vibing to", value: "Lo-fi beats & Indie" },
    { icon: BookOpen, label: "Learning", value: "Advanced NLP & Transformers" },
    { icon: TrendingUp, label: "Working on", value: "Healthcare AI Projects" },
    { icon: Code, label: "Experimenting with", value: "Voice AI & RAG systems" }
  ];

  const skills = {
    languages: ["Python", "C", "C++", "Java", "R", "HTML/CSS", "Bash", "PowerShell"],
    ai_ml: ["NumPy", "Pandas", "NLP", "Machine Learning", "Data Science", "Model Training"],
    frameworks: ["FastAPI", "Flask", "Express.js", "Node.js", "Flutter", "TailwindCSS", "Socket.io"],
    databases: ["MongoDB", "MySQL", "PostgreSQL", "SQLite", "Supabase", "Firebase"],
    tools: ["Git", "GitHub", "GitHub Actions", "Render", "Figma", "Canva", "Notion", "Testing Library"]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const floatVariants = {
    initial: { y: 0 },
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const cursorVariants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 28
      }
    },
    hover: {
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
      scale: 2,
      backgroundColor: "rgba(147, 51, 234, 0.5)",
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 28
      }
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll('section[id]').forEach(section => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;700&display=swap');
        
        * {
          font-family: 'Space Grotesk', sans-serif;
          cursor: none;
        }
        
        code, .font-mono {
          font-family: 'JetBrains Mono', monospace;
        }
        
        @keyframes grain {
          0%, 100% { transform: translate(0, 0); }
          10% { transform: translate(-5%, -10%); }
          30% { transform: translate(3%, -15%); }
          50% { transform: translate(12%, 9%); }
          70% { transform: translate(9%, 4%); }
          90% { transform: translate(-1%, 7%); }
        }
        
        .grain {
          animation: grain 8s steps(10) infinite;
        }
        
        .glow {
          box-shadow: 0 0 20px rgba(147, 51, 234, 0.5),
                      0 0 40px rgba(147, 51, 234, 0.3),
                      0 0 60px rgba(147, 51, 234, 0.1);
        }
        
        .text-glow {
          text-shadow: 0 0 20px rgba(147, 51, 234, 0.8),
                       0 0 40px rgba(147, 51, 234, 0.5);
        }
        
        .gradient-text {
          background: linear-gradient(to right, #a78bfa, #ec4899, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .cursor-blur {
          pointer-events: none;
          position: fixed;
          width: 400px;
          height: 400px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(147, 51, 234, 0.15) 0%, transparent 70%);
          transform: translate(-50%, -50%);
          z-index: 9999;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        .float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>

      {/* Custom cursor */}
      <motion.div
        className="fixed w-8 h-8 border-2 border-purple-500 rounded-full pointer-events-none z-[10000] mix-blend-difference"
        variants={cursorVariants}
        animate={cursorVariant}
      />
      
      {/* Cursor blur effect */}
      <div 
        className="cursor-blur"
        style={{
          left: mousePosition.x,
          top: mousePosition.y
        }}
      />

      {/* Grain texture overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.15]">
        <div 
          className="grain w-[200%] h-[200%]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
          }}
        />
      </div>

      {/* Animated gradient orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-[120px]"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ top: '10%', left: '10%' }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] bg-pink-500/20 rounded-full blur-[100px]"
          animate={{
            x: [0, -150, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ bottom: '20%', right: '10%' }}
        />
        <motion.div
          className="absolute w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[130px]"
          animate={{
            x: [0, 50, 0],
            y: [0, 150, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ top: '50%', left: '50%' }}
        />
      </div>

      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <motion.nav 
        className="fixed top-0 left-0 right-0 bg-slate-950/50 backdrop-blur-xl border-b border-purple-500/20 z-40"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div 
            className="flex items-center gap-2 text-sm"
            whileHover={{ scale: 1.05 }}
            onHoverStart={() => setCursorVariant('hover')}
            onHoverEnd={() => setCursorVariant('default')}
          >
            <Terminal size={20} className="text-purple-400" />
            <span className="font-bold gradient-text">~/portfolio</span>
          </motion.div>
          <div className="flex gap-6 text-sm">
            {['about', 'projects', 'skills', 'certificates', 'contact'].map((section, index) => (
              <motion.a
                key={section}
                href={`#${section}`}
                className="relative hover:text-purple-400 transition-colors"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                onHoverStart={() => setCursorVariant('hover')}
                onHoverEnd={() => setCursorVariant('default')}
              >
                <span>{section}</span>
                {activeSection === section && (
                  <motion.span
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"
                    layoutId="activeSection"
                  />
                )}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative pt-20">
        <motion.div 
          className="max-w-5xl mx-auto px-6 text-center relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="mb-6 text-purple-400/60 text-sm font-mono"
            variants={itemVariants}
          >
            <span className="inline-block">{">"} initializing_portfolio.exe</span>
          </motion.div>
          
          <motion.h1 
            className="text-7xl md:text-9xl font-bold mb-8 relative"
            variants={itemVariants}
          >
            <motion.span
              className="gradient-text inline-block"
              initial={{ rotateX: -90, opacity: 0 }}
              animate={{ rotateX: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: 0.2
              }}
            >
              Sharanya
            </motion.span>
            <motion.div
              className="absolute -top-10 -right-10"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <Sparkles className="text-purple-400/30" size={60} />
            </motion.div>
          </motion.h1>
          
          <motion.div 
            className="text-2xl md:text-3xl mb-12 h-10 font-mono text-purple-300"
            variants={itemVariants}
          >
            {displayText}
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="inline-block w-0.5 h-8 bg-purple-400 ml-1"
            />
          </motion.div>
          
          <motion.p 
            className="text-lg text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed"
            variants={itemVariants}
          >
            AI/ML enthusiast passionate about building intelligent solutions for real-world problems.
            From mental health support systems to healthcare AI, I love creating technology that makes a difference.
            Currently diving deep into machine learning fundamentals and exploring NLP applications.
          </motion.p>
          
          <motion.div 
            className="flex gap-6 justify-center flex-wrap"
            variants={itemVariants}
          >
            <motion.a 
              href="#projects"
              className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => setCursorVariant('hover')}
              onHoverEnd={() => setCursorVariant('default')}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.5 }}
              />
              <span className="relative z-10 flex items-center gap-2">
                <span>Explore Projects</span>
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.a>
            
            <motion.a 
              href="#contact"
              className="px-8 py-4 border-2 border-purple-500 rounded-full font-semibold hover:bg-purple-500/10 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => setCursorVariant('hover')}
              onHoverEnd={() => setCursorVariant('default')}
            >
              Get in Touch
            </motion.a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            animate={{
              y: [0, 10, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="w-6 h-10 border-2 border-purple-400/50 rounded-full flex items-start justify-center p-2">
              <motion.div
                className="w-1 h-2 bg-purple-400 rounded-full"
                animate={{
                  y: [0, 12, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>
        </motion.div>
        
        {/* Floating icons */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
          <motion.div
            className="absolute top-20 left-10"
            variants={floatVariants}
            initial="initial"
            animate="animate"
          >
            <Code size={50} className="text-purple-400" />
          </motion.div>
          <motion.div
            className="absolute top-40 right-20"
            variants={floatVariants}
            initial="initial"
            animate="animate"
            style={{ animationDelay: '1s' }}
          >
            <Database size={45} className="text-pink-400" />
          </motion.div>
          <motion.div
            className="absolute bottom-32 left-20"
            variants={floatVariants}
            initial="initial"
            animate="animate"
            style={{ animationDelay: '2s' }}
          >
            <Brain size={55} className="text-purple-400" />
          </motion.div>
          <motion.div
            className="absolute bottom-20 right-10"
            variants={floatVariants}
            initial="initial"
            animate="animate"
            style={{ animationDelay: '1.5s' }}
          >
            <Cpu size={48} className="text-pink-400" />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <motion.span 
                className="text-5xl font-bold gradient-text"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              >
                01.
              </motion.span>
              <h2 className="text-5xl font-bold">About Me</h2>
              <motion.div 
                className="flex-1 h-px bg-gradient-to-r from-purple-500 to-transparent"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
              />
            </div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div 
              className="space-y-6 text-gray-300 leading-relaxed text-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p>
                I'm currently working on academic and personal projects in AI/ML, with a focus on
                creating meaningful applications that solve real-world problems.
              </p>
              <p>
                My journey in tech combines a strong foundation in programming (Python, C++, Java)
                with a growing expertise in machine learning, NLP, and AI-powered solutions.
                I'm particularly interested in healthcare AI and mental health technologies.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new ML frameworks, contributing to
                open source projects, or vibing to music (it's what keeps me going! 🎵).
              </p>
            </motion.div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.div 
                className="border border-purple-500/30 p-8 bg-gradient-to-br from-slate-900/90 to-purple-900/20 backdrop-blur-sm rounded-2xl relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                onHoverStart={() => setCursorVariant('hover')}
                onHoverEnd={() => setCursorVariant('default')}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10"
                  animate={{
                    opacity: [0.3, 0.5, 0.3]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                <div className="relative z-10">
                  <div className="text-sm font-mono text-purple-400/60 mb-6">// quick_stats.json</div>
                  <div className="space-y-4">
                    {[
                      { label: 'projects_completed', value: '10+' },
                      { label: 'github_repos', value: '10' },
                      { label: 'coffee_consumed', value: '∞' },
                      { label: 'current_status', value: 'learning & building', special: true }
                    ].map((stat, index) => (
                      <motion.div 
                        key={stat.label}
                        className="flex justify-between items-center"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                      >
                        <span className="text-gray-400 font-mono">{stat.label}:</span>
                        <motion.span 
                          className={`font-bold ${stat.special ? 'gradient-text' : 'text-white'}`}
                          animate={stat.special ? { scale: [1, 1.1, 1] } : {}}
                          transition={stat.special ? { duration: 2, repeat: Infinity } : {}}
                        >
                          {stat.value}
                        </motion.span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
              
              {/* Floating particles */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-purple-400/30 rounded-full"
                  animate={{
                    y: [0, -100, 0],
                    x: [0, Math.random() * 50 - 25, 0],
                    opacity: [0, 1, 0]
                  }}
                  transition={{
                    duration: 3 + i,
                    repeat: Infinity,
                    delay: i * 0.5
                  }}
                  style={{
                    left: `${20 + i * 15}%`,
                    bottom: 0
                  }}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Currently Section */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-2">
              <span className="gradient-text">Currently</span>
            </h3>
            <p className="text-gray-400 text-sm">What I'm up to right now</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentlyDoing.map((item, index) => (
              <motion.div
                key={item.label}
                className="border border-purple-500/30 p-6 bg-gradient-to-br from-slate-900/90 to-purple-900/20 backdrop-blur-sm rounded-2xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                onHoverStart={() => setCursorVariant('hover')}
                onHoverEnd={() => setCursorVariant('default')}
              >
                <motion.div
                  className="mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <item.icon className="text-purple-400" size={32} />
                </motion.div>
                <h4 className="text-sm text-gray-400 mb-2">{item.label}</h4>
                <p className="font-semibold">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 relative">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <motion.span 
                className="text-5xl font-bold gradient-text"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              >
                02.
              </motion.span>
              <h2 className="text-5xl font-bold">Featured Projects</h2>
              <motion.div 
                className="flex-1 h-px bg-gradient-to-r from-purple-500 to-transparent"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
              />
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                onHoverStart={() => setCursorVariant('hover')}
                onHoverEnd={() => setCursorVariant('default')}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 rounded-2xl blur-xl transition-opacity duration-500"
                  style={{
                    backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-from), var(--tw-gradient-to))`,
                  }}
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                />
                
                <div className="relative border border-purple-500/30 p-8 bg-gradient-to-br from-slate-900/90 to-purple-900/20 backdrop-blur-sm rounded-2xl overflow-hidden h-full transition-all duration-500 group-hover:border-purple-500/60">
                  <motion.div
                    className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${project.gradient} opacity-20 blur-3xl`}
                    animate={{
                      scale: [1, 1.5, 1],
                      rotate: [0, 90, 0],
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <motion.h3 
                        className="text-2xl font-bold text-white group-hover:gradient-text transition-all duration-300"
                        initial={{ x: -20 }}
                        whileInView={{ x: 0 }}
                        viewport={{ once: true }}
                      >
                        {project.title}
                      </motion.h3>
                      <motion.div
                        className="text-purple-400/60 group-hover:text-purple-400 transition-colors p-2"
                        whileHover={{ scale: 1.2, rotate: 45 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink size={24} />
                      </motion.div>
                    </div>
                    
                    <motion.div 
                      className="text-purple-400/80 text-sm mb-4 font-mono"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                    >
                      {project.tech}
                    </motion.div>
                    
                    <motion.p 
                      className="text-gray-300 leading-relaxed"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                    >
                      {project.description}
                    </motion.p>
                    
                    <motion.div
                      className={`mt-6 h-1 bg-gradient-to-r ${project.gradient} rounded-full`}
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.4 }}
                    />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 relative">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <motion.span 
                className="text-5xl font-bold gradient-text"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              >
                03.
              </motion.span>
              <h2 className="text-5xl font-bold">Tech Stack</h2>
              <motion.div 
                className="flex-1 h-px bg-gradient-to-r from-purple-500 to-transparent"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
              />
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Languages', icon: Code, skills: skills.languages, color: 'purple' },
              { title: 'AI / ML', icon: Brain, skills: skills.ai_ml, color: 'pink' },
              { title: 'Frameworks', icon: Terminal, skills: skills.frameworks, color: 'cyan' }
            ].map((category, catIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: catIndex * 0.2 }}
              >
                <motion.div
                  className="border border-purple-500/30 p-6 bg-gradient-to-br from-slate-900/90 to-purple-900/20 backdrop-blur-sm rounded-2xl h-full"
                  whileHover={{ scale: 1.02 }}
                  onHoverStart={() => setCursorVariant('hover')}
                  onHoverEnd={() => setCursorVariant('default')}
                >
                  <motion.div 
                    className="flex items-center gap-3 mb-6"
                    initial={{ x: -20 }}
                    whileInView={{ x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: catIndex * 0.2 + 0.2 }}
                  >
                    <motion.div
                      className={`p-3 bg-${category.color}-500/10 border border-${category.color}-500/30 rounded-lg`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <category.icon size={24} className={`text-${category.color}-400`} />
                    </motion.div>
                    <h3 className="text-xl font-bold gradient-text">{category.title}</h3>
                  </motion.div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        className="border border-purple-500/40 px-4 py-2 text-sm bg-slate-900/50 rounded-lg text-gray-300 cursor-pointer"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ 
                          delay: catIndex * 0.2 + skillIndex * 0.05,
                          type: "spring",
                          stiffness: 200
                        }}
                        whileHover={{ 
                          scale: 1.1,
                          backgroundColor: "rgba(147, 51, 234, 0.2)",
                          borderColor: "rgba(147, 51, 234, 0.8)",
                          color: "#fff"
                        }}
                        whileTap={{ scale: 0.95 }}
                        onHoverStart={() => setCursorVariant('hover')}
                        onHoverEnd={() => setCursorVariant('default')}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Second row */}
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            {[
              { title: 'Databases', icon: Database, skills: skills.databases, color: 'blue' },
              { title: 'Tools & Design', icon: Terminal, skills: skills.tools, color: 'green' }
            ].map((category, catIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: catIndex * 0.2 }}
              >
                <motion.div
                  className="border border-purple-500/30 p-6 bg-gradient-to-br from-slate-900/90 to-purple-900/20 backdrop-blur-sm rounded-2xl h-full"
                  whileHover={{ scale: 1.02 }}
                  onHoverStart={() => setCursorVariant('hover')}
                  onHoverEnd={() => setCursorVariant('default')}
                >
                  <motion.div 
                    className="flex items-center gap-3 mb-6"
                    initial={{ x: -20 }}
                    whileInView={{ x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: catIndex * 0.2 + 0.2 }}
                  >
                    <motion.div
                      className={`p-3 bg-${category.color}-500/10 border border-${category.color}-500/30 rounded-lg`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <category.icon size={24} className={`text-${category.color}-400`} />
                    </motion.div>
                    <h3 className="text-xl font-bold gradient-text">{category.title}</h3>
                  </motion.div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        className="border border-purple-500/40 px-4 py-2 text-sm bg-slate-900/50 rounded-lg text-gray-300 cursor-pointer"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ 
                          delay: catIndex * 0.2 + skillIndex * 0.05,
                          type: "spring",
                          stiffness: 200
                        }}
                        whileHover={{ 
                          scale: 1.1,
                          backgroundColor: "rgba(147, 51, 234, 0.2)",
                          borderColor: "rgba(147, 51, 234, 0.8)",
                          color: "#fff"
                        }}
                        whileTap={{ scale: 0.95 }}
                        onHoverStart={() => setCursorVariant('hover')}
                        onHoverEnd={() => setCursorVariant('default')}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-32 relative">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <motion.span 
                className="text-5xl font-bold gradient-text"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              >
                04.
              </motion.span>
              <h2 className="text-5xl font-bold">Certificates & Achievements</h2>
              <motion.div 
                className="flex-1 h-px bg-gradient-to-r from-purple-500 to-transparent"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
              />
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                className="border border-purple-500/30 p-6 bg-gradient-to-br from-slate-900/90 to-purple-900/20 backdrop-blur-sm rounded-2xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                onHoverStart={() => setCursorVariant('hover')}
                onHoverEnd={() => setCursorVariant('default')}
              >
                <motion.div
                  className="mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Award className="text-purple-400" size={40} />
                </motion.div>
                <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                <p className="text-sm text-gray-400 mb-1">
                  {cert.issuer}
                </p>
                <p className="text-xs text-purple-400/60">
                  {cert.date}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-8 justify-center">
              <motion.span 
                className="text-5xl font-bold gradient-text"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              >
                05.
              </motion.span>
              <h2 className="text-5xl font-bold">Get in Touch</h2>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
              I'm always open to collaborating on interesting AI/ML projects, especially in healthcare
              and mental health tech. Whether you want to build something together, discuss ML concepts,
              or just chat about music and tech, let's connect!
            </p>

            <div className="flex gap-6 justify-center mb-12 flex-wrap">
              {[
                { icon: Mail, label: 'Email', href: 'mailto:sharuadithya6587@gmail.com' },
                { icon: Github, label: 'GitHub', href: 'https://github.com/shar-rox' },
                { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/sharanya_sdrafts' }
              ].map((social, index) => (
                <motion.a 
                  key={social.label}
                  href={social.href}
                  target={social.label !== 'Email' ? '_blank' : undefined}
                  rel={social.label !== 'Email' ? 'noopener noreferrer' : undefined}
                  className="group relative border border-purple-500/30 px-8 py-4 bg-gradient-to-br from-slate-900/90 to-purple-900/20 backdrop-blur-sm rounded-xl overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  onHoverStart={() => setCursorVariant('hover')}
                  onHoverEnd={() => setCursorVariant('default')}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/20 to-purple-500/0"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="relative z-10 flex items-center gap-3">
                    <social.icon size={20} className="text-purple-400 group-hover:text-white transition-colors" />
                    <span className="font-semibold group-hover:text-white transition-colors">{social.label}</span>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <motion.a
                href="mailto:sharuadithya6587@gmail.com"
                className="inline-block px-12 py-5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-bold text-lg shadow-lg shadow-purple-500/50"
                whileHover={{ scale: 1.1, boxShadow: "0 0 40px rgba(147, 51, 234, 0.6)" }}
                whileTap={{ scale: 0.95 }}
                onHoverStart={() => setCursorVariant('hover')}
                onHoverEnd={() => setCursorVariant('default')}
              >
                <span className="flex items-center gap-2">
                  <Mail size={24} />
                  <span>Say Hello</span>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-purple-500/20 py-12 relative">
        <motion.div 
          className="max-w-6xl mx-auto px-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <motion.div 
              className="text-gray-400 text-sm"
              initial={{ x: -20 }}
              whileInView={{ x: 0 }}
              viewport={{ once: true }}
            >
              <p className="font-mono">Built with React, Framer Motion & Tailwind CSS</p>
              <motion.p 
                className="mt-2 gradient-text font-semibold"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {">"} Designed with ♥ for aesthetics
              </motion.p>
            </motion.div>
            
            <motion.div
              className="flex gap-6"
              initial={{ x: 20 }}
              whileInView={{ x: 0 }}
              viewport={{ once: true }}
            >
              {[
                { Icon: Github, href: 'https://github.com/shar-rox' },
                { Icon: Instagram, href: 'https://www.instagram.com/sharanya_sdrafts' },
                { Icon: Mail, href: 'mailto:sharuadithya6587@gmail.com' }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target={social.Icon !== Mail ? '_blank' : undefined}
                  rel={social.Icon !== Mail ? 'noopener noreferrer' : undefined}
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  onHoverStart={() => setCursorVariant('hover')}
                  onHoverEnd={() => setCursorVariant('default')}
                >
                  <social.Icon size={24} />
                </motion.a>
              ))}
            </motion.div>
          </div>
          
          <motion.div 
            className="mt-8 text-center text-gray-500 text-xs font-mono"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <motion.p
              animate={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              © {new Date().getFullYear()} • All rights reserved
            </motion.p>
          </motion.div>
        </motion.div>
      </footer>
    </div>
  );
}

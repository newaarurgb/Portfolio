import { motion } from "motion/react";
import {
  ArrowDown,
  ArrowUpRight,
  Brain,
  Code2,
  Database,
  Sparkles,
} from "lucide-react";

function Hero() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section id="home" className="hero">

      <div className="hero-container">

        {/* =========================
            LEFT CONTENT
        ========================= */}

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >

          <motion.div
            className="hero-eyebrow"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="status-dot" />
            SEEKING FOR OPPORTUNITIES
          </motion.div>

          <motion.p
            className="hero-intro"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            HELLO, I'M
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            ARAVIND
            <span>PADMANABHAN</span>
          </motion.h1>

          <motion.div
            className="hero-role"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <span>FULL STACK</span>
            <strong>PYTHON DEVELOPER</strong>
          </motion.div>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            I build modern web applications with{" "}
            <span>Python, Django & React</span> — while exploring{" "}
            <span>Artificial Intelligence, Machine Learning & Deep Learning.</span>
          </motion.p>

          {/* CTA BUTTONS */}

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <button
              className="primary-button"
              onClick={() => scrollToSection("projects")}
            >
              View My Work
              <ArrowUpRight size={18} />
            </button>

            <button
              className="secondary-button"
              onClick={() => scrollToSection("contact")}
            >
              Let's Connect
            </button>
          </motion.div>

          {/* TECH STACK */}

          <motion.div
            className="hero-stack"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <span>BUILDING WITH</span>

            <div className="stack-icons">
              <div title="Python">
                <Code2 size={17} />
              </div>

              <div title="React">
                <Sparkles size={17} />
              </div>

              <div title="Database">
                <Database size={17} />
              </div>

              <div title="Artificial Intelligence">
                <Brain size={17} />
              </div>
            </div>
          </motion.div>

        </motion.div>

        {/* =========================
            RIGHT VISUAL
        ========================= */}

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.4,
            duration: 1,
            ease: "easeOut",
          }}
        >

          <div className="visual-glow" />

          {/* ORBIT */}

          <motion.div
            className="orbit orbit-one"
            animate={{ rotate: 360 }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <motion.div
            className="orbit orbit-two"
            animate={{ rotate: -360 }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* CENTER */}

          <motion.div
            className="developer-core"
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >

            <div className="core-icon">
              <Code2 size={42} strokeWidth={1.5} />
            </div>

            <div className="core-text">
              <span>BUILD</span>
              <strong>CREATE</strong>
              <span>EXPLORE</span>
            </div>

          </motion.div>

          {/* FLOATING BADGES */}

          <motion.div
            className="floating-badge badge-python"
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Code2 size={16} />
            Python
          </motion.div>

          <motion.div
            className="floating-badge badge-react"
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Sparkles size={16} />
            React
          </motion.div>

          <motion.div
            className="floating-badge badge-ai"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Brain size={16} />
            AI
          </motion.div>

          <motion.div
            className="floating-badge badge-django"
            animate={{
              y: [0, 14, 0],
            }}
            transition={{
              duration: 3.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Database size={16} />
            Django
          </motion.div>

        </motion.div>

      </div>

      {/* SCROLL INDICATOR */}

      <motion.button
        className="scroll-indicator"
        onClick={() => scrollToSection("about")}
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <span>SCROLL TO EXPLORE</span>
        <ArrowDown size={16} />
      </motion.button>

    </section>
  );
}

export default Hero;
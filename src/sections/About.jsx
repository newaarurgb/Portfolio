import { motion } from "motion/react";
import {
  GraduationCap,
  Brain,
  Code2,
  ArrowUpRight,
} from "lucide-react";

function About() {
  return (
    <section id="about" className="about-section">

      <div className="section-container">

        {/* SECTION HEADING */}

        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">01 / ABOUT</span>

          <h2>
            A developer who loves to
            <span> build & explore.</span>
          </h2>
        </motion.div>

        {/* CONTENT */}

        <div className="about-grid">

          {/* ABOUT TEXT */}

          <motion.div
            className="about-content"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8 }}
          >

            <p className="about-intro">
              I'm a <strong>Full Stack Python Developer</strong>{" "}
              passionate about building practical, modern web
              applications and exploring intelligent technologies.
            </p>

            <p>
              My development journey has taken me through Python,
              Django, React, databases and full-stack application
              development. I enjoy turning ideas into functional
              digital experiences while continuously improving my
              technical skills.
            </p>

            <p>
              I'm currently expanding my knowledge in{" "}
              <strong>Artificial Intelligence, Machine Learning
              and Deep Learning</strong>, with a growing interest
              in understanding how intelligent systems work and
              how they can be applied to real-world problems.
            </p>

            {/* CURRENTLY EXPLORING */}

            <motion.div
              className="exploring-card"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.25 }}
            >
              <div className="exploring-icon">
                <Brain size={21} />
              </div>

              <div>
                <span>CURRENTLY EXPLORING</span>

                <p>
                  AI • Machine Learning • Deep Learning •
                  Generative AI
                </p>
              </div>
            </motion.div>

          </motion.div>

          {/* EDUCATION */}

          <motion.div
            className="education-card"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >

            <div className="education-top">

              <div className="education-icon">
                <GraduationCap size={25} />
              </div>

              <span>EDUCATION</span>

            </div>

            <div className="education-content">

              <span className="education-degree">
                B.Tech
              </span>

              <h3>
                Computer Science &
                <br />
                Engineering
                <span> (Artificial Intelligence)</span>
              </h3>

              <p className="education-institute">
                Indian Institute of Information Technology
                Design and Manufacturing, Kancheepuram
              </p>

              <div className="education-divider" />

              <div className="education-footer">

                <div>
                  <span>FIELD</span>
                  <strong>CS & AI</strong>
                </div>

                <div>
                  <span>DEGREE</span>
                  <strong>B.Tech</strong>
                </div>

              </div>

            </div>

          </motion.div>

        </div>

        {/* SMALL HIGHLIGHTS */}

        <motion.div
          className="about-highlights"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >

          <div className="highlight-item">
            <Code2 size={18} />
            <div>
              <strong>Full Stack</strong>
              <span>Web Development</span>
            </div>
          </div>

          <div className="highlight-item">
            <Brain size={18} />
            <div>
              <strong>AI Enthusiast</strong>
              <span>Learning & Research</span>
            </div>
          </div>

          <div className="highlight-item">
            <ArrowUpRight size={18} />
            <div>
              <strong>Always Learning</strong>
              <span>Building & Exploring</span>
            </div>
          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default About;
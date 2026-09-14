import { motion } from "motion/react";
import {
  Mail,
  ArrowUpRight,
  MapPin,
  Code2,
} from "lucide-react";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="section-container">

        {/* Heading */}
        <motion.div
          className="contact-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-label">07 / CONTACT</span>

          <h2>
            Let's build something
            <span> meaningful.</span>
          </h2>

          <p>
            Have an idea, opportunity, or just want to connect?
            I'd love to hear from you.
          </p>
        </motion.div>

        {/* Main Contact Card */}
        <motion.div
          className="contact-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <div className="contact-card-content">

            <span className="contact-small-label">
              GET IN TOUCH
            </span>

            <h3>
              Let's talk about your
              <span> next project.</span>
            </h3>

            <a
              href="newaaru2025@gmail.com"
              className="contact-email"
            >
              <Mail size={20} />
              Gmail
              <ArrowUpRight size={18} />
            </a>

          </div>

          <div className="contact-glow" />
        </motion.div>

        {/* Contact Links */}
        <div className="contact-links">

          <motion.a
            href="https://www.linkedin.com/in/aravind-padmanabhan-2b8a7b419/"
            target="_blank"
            rel="noreferrer"
            className="contact-link"
            whileHover={{ y: -5 }}
          >
            <div>
              <Code2 size={20} />
              <span>LinkedIn</span>
            </div>

            <ArrowUpRight size={18} />
          </motion.a>

          <motion.a
            href="https://github.com/newaarurgb/newaarurgb"
            target="_blank"
            rel="noreferrer"
            className="contact-link"
            whileHover={{ y: -5 }}
          >
            <div>
              <Code2 size={20} />
              <span>GitHub</span>
            </div>

            <ArrowUpRight size={18} />
          </motion.a>

          <motion.div
            className="contact-link"
            whileHover={{ y: -5 }}
          >
            <div>
              <MapPin size={20} />
              <span>Chennai, India</span>
            </div>
          </motion.div>

        </div>

        {/* Footer */}
        <motion.div
          className="contact-footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span>
            ARAVIND<span>.</span>
          </span>

          <p>
            © {new Date().getFullYear()} Aravind Padmanabhan.
            Built with React.
          </p>
        </motion.div>

      </div>
    </section>
  );
}

export default Contact;
import { motion } from "motion/react";
import { BadgeCheck } from "lucide-react";
import certifications from "../data/certifications";
import CertificationCard from "../components/CertificationCard";

function Certifications() {
  return (
    <section
      id="certifications"
      className="certifications-section"
    >
      <div className="section-container">

        {/* Heading */}
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">
            04 / CERTIFICATIONS
          </span>

          <h2>
            Learning that turns into <span>skills.</span>
          </h2>

          <p className="skills-intro">
            Certifications and courses that represent my
            continuous learning across development, programming
            and artificial intelligence.
          </p>
        </motion.div>

        {/* Certification Grid */}
        <div className="certifications-grid">
          {certifications.map((certification, index) => (
            <CertificationCard
              key={certification.id}
              certification={certification}
              index={index}
            />
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          className="certification-note"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <BadgeCheck size={17} />
          <span>
            Always learning. Always building.
          </span>
        </motion.div>

      </div>
    </section>
  );
}

export default Certifications;
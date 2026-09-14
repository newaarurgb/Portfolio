import { motion } from "motion/react";
import {
  Award,
  ArrowUpRight,
  ExternalLink,
} from "lucide-react";

function CertificationCard({ certification, index }) {
  return (
    <motion.article
      className="certification-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.65,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      whileHover={{ y: -7 }}
    >
      <div className="certification-top">
        <div className="certification-icon">
          <Award size={21} />
        </div>

        <span className="certification-number">
          0{index + 1}
        </span>
      </div>

      <div className="certification-category">
        {certification.category}
      </div>

      <h3>{certification.title}</h3>

      <div className="certification-meta">
        <span>{certification.issuer}</span>
        <span>{certification.year}</span>
      </div>

      <a
        href={certification.link}
        target="_blank"
        rel="noreferrer"
        className="certificate-link"
      >
        View Certificate
        <motion.span
          whileHover={{ x: 3, y: -3 }}
        >
          <ArrowUpRight size={16} />
        </motion.span>
      </a>

      <div className="certificate-glow" />
    </motion.article>
  );
}

export default CertificationCard;
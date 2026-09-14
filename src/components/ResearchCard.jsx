import { motion } from "motion/react";
import { ArrowUpRight, Brain } from "lucide-react";

function ResearchCard({ topic, index }) {
  // Safety check
  if (!topic) {
    return null;
  }

  return (
    <motion.article
      className="research-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
      }}
      whileHover={{ y: -7 }}
    >
      <div className="research-card-top">
        <div className="research-icon">
          <Brain size={20} />
        </div>

        <span>{topic.number}</span>
      </div>

      <h3>{topic.title}</h3>

      <p>{topic.description}</p>

      <div className="research-tags">
        {topic.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>

      <motion.div
        className="research-arrow"
        whileHover={{ x: 4, y: -4 }}
      >
        <ArrowUpRight size={18} />
      </motion.div>
    </motion.article>
  );
}

export default ResearchCard;
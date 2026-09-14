import { motion } from "motion/react";
import {
  Brain,
  BookOpen,
  ExternalLink,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const researchTopics = [
  {
    id: 1,
    number: "01",
    title: "Machine Learning",
    description:
      "Exploring how machine learning algorithms learn patterns from data and how they can be applied to real-world problems.",
    tags: ["ML", "Algorithms", "Data"],
  },
  {
    id: 2,
    number: "02",
    title: "Deep Learning",
    description:
      "Learning about neural networks, representation learning and the foundations behind modern deep learning systems.",
    tags: ["Neural Networks", "Deep Learning"],
  },
  {
    id: 3,
    number: "03",
    title: "Generative AI",
    description:
      "Exploring generative models and modern AI systems that can create, understand and transform information.",
    tags: ["LLMs", "Generative AI"],
  },
];

function Research() {
  return (
    <section id="research" className="research-section">
      <div className="section-container">

        {/* Heading */}
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">
            06 / AI & RESEARCH
          </span>

          <h2>
            Exploring what's <span>next.</span>
          </h2>

          <p className="skills-intro">
            Beyond web development, I'm exploring Artificial
            Intelligence and the ideas shaping the future of
            intelligent systems.
          </p>
        </motion.div>

        {/* Main AI Card */}
        <motion.div
          className="research-intro-card"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="research-intro-icon">
            <Brain size={28} />
          </div>

          <div>
            <span>CURRENTLY EXPLORING</span>

            <h3>Artificial Intelligence</h3>

            <p>
              I'm building my understanding of AI from the
              foundations of machine learning to deep learning,
              generative AI and modern intelligent systems.
            </p>
          </div>

          <motion.div
            className="research-orb"
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Research Topics */}
        <div className="research-grid">

          {researchTopics.map((topic, index) => (
            <motion.article
              key={topic.id}
              className="research-card"
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -7,
              }}
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
                  <span key={tag}>
                    {tag}
                  </span>
                ))}
              </div>

              <div className="research-arrow">
                <ArrowUpRight size={18} />
              </div>

            </motion.article>
          ))}

        </div>

        {/* Learning Resources */}
        <motion.div
          className="research-resources"
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
        >

          <div className="resources-heading">
            <BookOpen size={19} />

            <div>
              <span>LEARNING RESOURCES</span>
              <h3>
                Things I'm reading & exploring
              </h3>
            </div>
          </div>

          <div className="resource-links">

            <a
              href="https://arxiv.org/"
              target="_blank"
              rel="noreferrer"
            >
              <span>
                <Sparkles size={16} />
                arXiv
              </span>

              <ExternalLink size={15} />
            </a>

            <a
              href="https://paperswithcode.com/"
              target="_blank"
              rel="noreferrer"
            >
              <span>
                <Brain size={16} />
                Papers with Code
              </span>

              <ExternalLink size={15} />
            </a>

            <a
              href="https://huggingface.co/papers"
              target="_blank"
              rel="noreferrer"
            >
              <span>
                <BookOpen size={16} />
                Hugging Face Papers
              </span>

              <ExternalLink size={15} />
            </a>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default Research;
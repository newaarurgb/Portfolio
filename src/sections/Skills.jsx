import { motion } from "motion/react";
import {
  Code2,
  Database,
  Brain,
  Wrench,
  Globe,
  Server,
} from "lucide-react";

const skillGroups = [
  {
    title: "Programming",
    icon: Code2,
    skills: ["Python", "JavaScript", "SQL", "Java", "C", "C++"],
  },
  {
    title: "Frontend",
    icon: Globe,
    skills: ["Javascript", React.js", "HTML5", "CSS3", "Vite"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Django", "REST APIs", "Node.JS", "MongoDB"],
  },
  {
    title: "Database",
    icon: Database,
    skills: ["MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Git", "GitHub", "VS Code", "Vercel"],
  },
];

const aiSkills = [
  "Artificial Intelligence",
  "Machine Learning",
  "Deep Learning",
  "Generative AI",
  "Neural Networks",
];

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="section-container">

        {/* HEADING */}

        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">02 / SKILLS</span>

          <h2>
            Technologies I use to
            <span> build things.</span>
          </h2>

          <p className="skills-intro">
            A growing toolkit built through projects, learning,
            experimentation and continuous development.
          </p>
        </motion.div>

        {/* SKILL CARDS */}

        <div className="skills-grid">

          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.div
                className="skill-card"
                key={group.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -7,
                }}
              >

                <div className="skill-card-top">

                  <div className="skill-icon">
                    <Icon size={20} />
                  </div>

                  <span>0{index + 1}</span>

                </div>

                <h3>{group.title}</h3>

                <div className="skill-tags">
                  {group.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>

              </motion.div>
            );
          })}

        </div>

        {/* AI SECTION */}

        <motion.div
          className="ai-skills-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8 }}
        >

          <div className="ai-content">

            <div className="ai-heading">

              <div className="ai-icon">
                <Brain size={24} />
              </div>

              <div>
                <span>EXPANDING MY KNOWLEDGE</span>
                <h3>Artificial Intelligence</h3>
              </div>

            </div>

            <p>
              I'm currently exploring AI beyond the basics,
              with a growing interest in Machine Learning,
              Deep Learning and Generative AI.
            </p>

          </div>

          <div className="ai-tags">

            {aiSkills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.2 + index * 0.08,
                  duration: 0.4,
                }}
                whileHover={{
                  scale: 1.05,
                }}
              >
                {skill}
              </motion.span>
            ))}

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default Skills;

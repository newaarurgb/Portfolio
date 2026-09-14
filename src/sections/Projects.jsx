import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import projects from "../data/Projects";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="section-container">

        {/* Section Heading */}
        <motion.div
          className="section-heading projects-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">03 / PROJECTS</span>

          <h2>
            Things I've <span>built.</span>
          </h2>

          <p className="projects-intro">
            A selection of projects I've built while learning,
            experimenting, and turning ideas into working applications.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="projects-footer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span>More projects coming as I keep building.</span>

          <motion.div
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <ArrowUpRight size={18} />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}

export default Projects;
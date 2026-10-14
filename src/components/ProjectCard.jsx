import { motion } from "motion/react";
import {
  ArrowUpRight,
  ExternalLink,
  Layers,
  Code2,
} from "lucide-react";

function ProjectCard({ project, index = 0 }) {
  // Prevent crashes if project data is missing or incomplete
  if (!project || typeof project !== "object") {
    return null;
  }

  const technologies = Array.isArray(project.tech)
    ? project.tech
    : [];

  return (
    <motion.article
      className="project-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.7,
        delay: index * 0.12,
        ease: "easeOut",
      }}
      whileHover={{ y: -8 }}
    >
      {/* Project Preview */}
      <div className="project-preview">
        <div className="preview-grid" />

        <motion.div
          className="preview-window"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.4 }}
        >
          <div className="window-top">
            <span />
            <span />
            <span />
          </div>

          <div className="window-content">
            <div className="window-line large" />
            <div className="window-line medium" />
            <div className="window-line small" />

            <div className="window-boxes">
              <div />
              <div />
              <div />
            </div>
          </div>
        </motion.div>

        <div className="project-number">
          {String(index + 1).padStart(2, "0")}
        </div>

        <div className="project-category">
          {project.category || "PROJECT"}
        </div>
      </div>

      {/* Project Information */}
      <div className="project-info">
        <div className="project-title-row">
          <h3>{project.title || "Untitled Project"}</h3>

          <motion.div
            className="project-arrow"
            whileHover={{ rotate: 45 }}
          >
            <ArrowUpRight size={20} />
          </motion.div>
        </div>

        <p>
          {typeof project.description === "string"
            ? project.description
            : ""}
        </p>

        {/* Technologies */}
        <div className="project-tech">
          {technologies.map((tech, techIndex) => (
            <span key={`${tech}-${techIndex}`}>
              <Layers size={13} />
              {tech}
            </span>
          ))}
        </div>

        {/* Project Links */}
        <div className="project-links">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Code2 size={16} />
              GitHub
            </a>
          )}

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default ProjectCard;
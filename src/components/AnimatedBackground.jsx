import { motion } from "motion/react";

const stackNodes = [
  {
    name: "REACT",
    type: "FRONTEND",
    position: "node-react",
  },
  {
    name: "REST API",
    type: "API",
    position: "node-api",
  },
  {
    name: "DJANGO / PYTHON",
    type: "BACKEND",
    position: "node-backend",
  },
  {
    name: "MYSQL",
    type: "DATABASE",
    position: "node-database",
  },
];

function AnimatedBackground() {
  return (
    <div className="background-wrapper">

      {/* Existing ambient glows */}

      <motion.div
        className="glow glow-one"
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -60, 40, 0],
          scale: [1, 1.15, 0.9, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="glow glow-two"
        animate={{
          x: [0, -70, 50, 0],
          y: [0, 50, -30, 0],
          scale: [1, 0.9, 1.2, 1],
        }}
        transition={{
          duration: 17,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Grid */}

      <div className="grid-background" />

      {/* Full Stack Visual */}

      <div className="stack-animation">

        {/* Connection line */}

        <div className="stack-line" />

        {/* Nodes */}

        {stackNodes.map((node, index) => (
          <motion.div
            key={node.name}
            className={`stack-node ${node.position}`}
            initial={{
              opacity: 0,
              x: 30,
            }}
            animate={{
              opacity: [0.35, 0.65, 0.35],
              x: 0,
            }}
            transition={{
              opacity: {
                duration: 5,
                repeat: Infinity,
                delay: index * 0.8,
                ease: "easeInOut",
              },
              x: {
                duration: 1,
                delay: index * 0.2,
              },
            }}
          >
            <span className="stack-node-type">
              {node.type}
            </span>

            <span className="stack-node-name">
              {node.name}
            </span>

            <span className="stack-node-dot" />
          </motion.div>
        ))}

        {/* Data packets */}

        {[0, 1, 2].map((packet) => (
          <motion.span
            key={packet}
            className="data-packet"
            animate={{
              top: ["18%", "82%"],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              delay: packet * 1.7,
              ease: "linear",
            }}
          />
        ))}

      </div>
    </div>
  );
}

export default AnimatedBackground;
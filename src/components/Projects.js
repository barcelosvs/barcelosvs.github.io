import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const Section = styled(motion.section)`
  padding: 4rem 0;
`;

const ProjectCard = styled(motion.div)`
  background: #1e1e1e;
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  &:hover {
    transform: scale(1.05);
    transition: transform 0.3s ease;
  }
`;

const pageVariants = {
  initial: { opacity: 0, x: "-100vw" },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: "100vw" },
};

const pageTransition = {
  type: "tween",
  duration: 0.5,
};

const Projects = () => {
  return (
    <Section
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
    >
      <h2>Projetos</h2>
      <ProjectCard>
        <h3>Projeto 1</h3>
        <p>Descrição breve do projeto.</p>
        <a href="#" style={{ color: "#00b4d8" }}>
          Ver mais
        </a>
      </ProjectCard>
    </Section>
  );
};

export default Projects;

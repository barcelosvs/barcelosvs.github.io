import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const Section = styled(motion.section)`
  padding: 4rem 0;
  text-align: center;
`;

const SkillList = styled.ul`
  list-style: none;
  display: flex;
  gap: 1rem;
  justify-content: center;
  padding: 0;
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

const Skills = () => {
  return (
    <Section
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
    >
      <h2>Habilidades</h2>
      <SkillList>
        {["React", "JavaScript", "CSS"].map((skill, index) => (
          <motion.li
            key={skill}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            {skill}
          </motion.li>
        ))}
      </SkillList>
    </Section>
  );
};

export default Skills;

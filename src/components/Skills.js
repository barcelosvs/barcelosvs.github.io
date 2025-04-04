import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import {
  FaReact,
  FaJs,
  FaPython,
  FaCloud,
  FaGitAlt,
  FaDatabase,
} from "react-icons/fa";

// Estilização
const Section = styled(motion.section)`
  padding: 4rem 0;
  text-align: center;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  min-height: 100vh;
  color: #e0e0e0;
  border-radius: 20px;
  overflow: hidden;
  margin: 1rem;
`;

const SkillCategory = styled.div`
  margin-bottom: 2.5rem;
  padding: 1rem;
  background: rgba(40, 40, 60, 0.9);
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(147, 112, 219, 0.2);
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const CategoryTitle = styled.h3`
  font-size: 1.5rem;
  color: #9370db;
  margin-bottom: 1rem;
`;

const SkillList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  padding: 0;
  justify-items: center;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SkillItem = styled(motion.li)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background: #2a2a40;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(147, 112, 219 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  width: 100%;
  max-width: 250px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 16px rgba(147, 112, 219, 0.4);
  }
`;

const SkillName = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.1rem;
  font-weight: 500;
  color: #d8bfd8; /* Roxo claro */
  margin-bottom: 0.5rem;
`;

const ProgressBarWrapper = styled.div`
  width: 100%;
  height: 8px;
  background: #3a3a50;
  border-radius: 4px;
  overflow: hidden;
`;

const ProgressBar = styled(motion.div)`
  height: 100%;
  background: linear-gradient(
    90deg,
    #8a2be2,
    #ba55d3
  ); /* Roxo escuro a roxo médio */
  border-radius: 4px;
`;

// Variantes de animação
const pageVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
};

const pageTransition = {
  type: "spring",
  stiffness: 100,
  damping: 20,
};

const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: <FaReact />, progress: 80 },
      { name: "JavaScript", icon: <FaJs />, progress: 85 },
    ],
  },
  {
    category: "Backend",
    skills: [{ name: "SQL", icon: <FaDatabase />, progress: 90 }],
  },
  {
    category: "Ferramentas",
    skills: [
      { name: "Azure", icon: <FaCloud />, progress: 75 },
      { name: "Git", icon: <FaGitAlt />, progress: 90 },
    ],
  },
  {
    category: "Linguagens",
    skills: [{ name: "Python", icon: <FaPython />, progress: 95 }],
  },
];

// Componente Skills
const Skills = () => {
  return (
    <Section
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
      role="region"
      aria-label="Minhas Habilidades"
    >
      <h2>Habilidades</h2>
      {skillsData.map((categoryData, categoryIndex) => (
        <SkillCategory key={categoryData.category}>
          <CategoryTitle>{categoryData.category}</CategoryTitle>
          <SkillList>
            {categoryData.skills.map((skill, skillIndex) => (
              <SkillItem
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: categoryIndex * 0.4 + skillIndex * 0.2,
                  type: "spring",
                  stiffness: 120,
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                role="progressbar"
                aria-label={`${skill.name} - Nível ${skill.progress}%`}
              >
                <SkillName>
                  {skill.icon}
                  {skill.name}
                </SkillName>
                <ProgressBarWrapper>
                  <ProgressBar
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.progress}%` }}
                    transition={{
                      duration: 1,
                      ease: "easeOut",
                      delay: categoryIndex * 0.4 + skillIndex * 0.2,
                    }}
                  />
                </ProgressBarWrapper>
              </SkillItem>
            ))}
          </SkillList>
        </SkillCategory>
      ))}
    </Section>
  );
};

export default Skills;

import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Section = styled(motion.section)`
  padding: 4rem 0;
  text-align: center;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  min-height: 100vh;
  color: #e0e0e0;
  border-radius: 20px;
  overflow: hidden;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Avatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 2rem;
  border: 3px solid #9370db;
  box-shadow: 0 0 15px rgba(147, 112, 219, 0.5);
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #ffffff;
  margin: 0;
  text-shadow: 0 2px 4px rgba(147, 112, 219, 0.3);
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  color: #9370db;
  margin: 0.5rem 0 1rem;
  font-weight: 400;
`;

const Info = styled.p`
  font-size: 1.1rem;
  color: #d8bfd8;
  max-width: 600px;
  margin: 1rem auto;
  line-height: 1.6;
`;

const SkillsList = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 1.5rem 0;
  flex-wrap: wrap;
`;

const Skill = styled(motion.span)`
  background: #2a2a40;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  color: #d8bfd8;
  font-size: 0.9rem;
  box-shadow: 0 2px 6px rgba(147, 112, 219, 0.2);
`;

const Button = styled(Link)`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(90deg, #8a2be2, #ba55d3);
  color: #fff;
  text-decoration: none;
  border-radius: 8px;
  margin: 0.5rem;
  font-weight: 500;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 10px rgba(147, 112, 219, 0.3);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 14px rgba(147, 112, 219, 0.5);
    background: linear-gradient(90deg, #6a0dad, #9b30ff);
  }
`;

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

// Componente About
const About = () => {
  return (
    <Section
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
      role="region"
      aria-label="Sobre Mim"
    >
      <Avatar src="/avatar.png" alt="Victor Barcelos" />
      <Title>Victor Barcelos Santos</Title>
      <Subtitle>Software Engineer | Data Engineer</Subtitle>
      <Info>
        Entusiasta em tecnologia, Graduado em Engenharia de Software, me
        especializo em Engenharia de Dados trazendo dashboards e soluções
        escaláveis utilizando ferramentas como Python, Databricks, SQL, Apache
        Spark, Azure e Power BI.
      </Info>
      <SkillsList>
        {["React", "Azure", "Python"].map((skill, index) => (
          <Skill
            key={skill}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2, type: "spring", stiffness: 120 }}
            whileHover={{ scale: 1.1 }}
          >
            {skill}
          </Skill>
        ))}
      </SkillsList>
      <Button to="/projects">Veja Meus Projetos</Button>
      <Button to="/contact">Entre em Contato</Button>
    </Section>
  );
};

export default About;

import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Section = styled(motion.section)`
  padding: 4rem 0;
  text-align: center;
  background: linear-gradient(135deg, #1a1a1a 0%, #121212 100%);
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  max-width: 800px;
  margin: 0 auto;
`;

const Avatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 2rem;
  border: 2px solid #40345f;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #ffffff;
  margin: 0;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  color: rgb(54, 31, 107);
  margin: 0.5rem 0 1rem;
  font-weight: 400;
`;

const Info = styled.p`
  font-size: 1.1rem;
  color: #e0e0e0;
  max-width: 600px;
  margin: 1rem auto;
`;

const SkillsList = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 1rem 0;
`;

const Skill = styled.span`
  background: #1e1e1e;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  color: #e0e0e0;
  font-size: 0.9rem;
`;

const Button = styled(Link)`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background: rgb(114, 98, 150);
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
  margin: 0.5rem;
  transition: background 0.3s ease;
  &:hover {
    background: rgb(114, 98, 150);
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

const About = () => {
  return (
    <Section
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
    >
      <Avatar src="/avatar.png" alt="Victor Barcelos" />
      <Title>Victor Barcelos Santos</Title>
      <Subtitle>Software Engineer | Data Engineer</Subtitle>
      <Info>
        Entusiasta em tecnologia, Graduado em engenharia de Software, me
        especializo em Engenharia de Dados trazendo, dashboards e soluções
        escaláveis utilizando ferramentas como Python, DataBricks, SQL, Apache
        Spark ,Azure e Power BI
      </Info>
      <SkillsList>
        <Skill>Python</Skill>
        <Skill>Azure</Skill>
        <Skill>Power BI</Skill>
        <Skill>React</Skill>
      </SkillsList>
      <Button to="/projects">Veja Meus Projetos</Button>
      <Button to="/contact">Entre em Contato</Button>
    </Section>
  );
};

export default About;

import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const Section = styled(motion.section)`
  padding: 4rem 0;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #ffffff;
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
      <Title>Olá, eu sou [Seu Nome]</Title>
      <p>Desenvolvedor apaixonado por criar soluções simples e elegantes.</p>
    </Section>
  );
};

export default About;

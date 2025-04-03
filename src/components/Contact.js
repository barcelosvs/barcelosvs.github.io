import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import styled from "styled-components";

const Section = styled(motion.section)`
  padding: 4rem 0;
  text-align: center;
`;

const Form = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 400px;
  margin: 0 auto;
  input,
  textarea {
    background: #1e1e1e;
    border: 1px solid #333;
    color: #e0e0e0;
    padding: 0.5rem;
    border-radius: 4px;
  }
  button {
    background: rgb(4, 124, 148);
    color: #fff;
    border: none;
    padding: 0.75rem;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
      background: rgb(0, 86, 105);
    }
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

const Contact = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Section
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
    >
      <h2>Contato</h2>
      <Form
        action="https://formspree.io/f/mjkyakop"
        method="POST"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input {...register("nome")} placeholder="Seu Nome" required />
        <input
          {...register("email")}
          type="email"
          placeholder="Seu Email"
          required
        />
        <textarea
          {...register("mensagem")}
          placeholder="Sua Mensagem"
          required
        />
        <button type="submit">Enviar</button>
      </Form>
    </Section>
  );
};

export default Contact;

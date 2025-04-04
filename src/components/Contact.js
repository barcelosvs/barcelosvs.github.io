import React, { useState } from "react";
import { motion } from "framer-motion";
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

const Title = styled.h1`
  font-size: 2.5rem;
  color: #ffffff;
  text-shadow: 0 2px 4px rgba(147, 112, 219, 0.3);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 500px;
  margin: 2rem auto;
`;

const Input = styled(motion.input)`
  padding: 0.75rem;
  border-radius: 8px;
  border: 1px solid #9370db;
  background: #2a2a40;
  color: #d8bfd8;
  font-size: 1rem;
  outline: none;
  box-shadow: 0 2px 6px rgba(147, 112, 219, 0.1);
`;

const Textarea = styled(motion.textarea)`
  padding: 0.75rem;
  border-radius: 8px;
  border: 1px solid #9370db;
  background: #2a2a40;
  color: #d8bfd8;
  font-size: 1rem;
  resize: vertical;
  outline: none;
  box-shadow: 0 2px 6px rgba(147, 112, 219, 0.1);
`;

const Button = styled(motion.button)`
  padding: 0.75rem;
  background: linear-gradient(90deg, #8a2be2, #ba55d3);
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
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

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        "form-name": "contact",
        ...formData,
      }).toString(),
    })
      .then(() => {
        alert("Mensagem enviada com sucesso!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => alert("Erro ao enviar: " + error));
  };

  return (
    <Section
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
      role="region"
      aria-label="Contato"
    >
      <Title>Entre em Contato</Title>
      <Form
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            <input name="bot-field" />
          </label>
        </p>
        <Input
          type="text"
          name="name"
          placeholder="Seu Nome"
          value={formData.name}
          onChange={handleChange}
          required
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, type: "spring", stiffness: 120 }}
        />
        <Input
          type="email"
          name="email"
          placeholder="Seu E-mail"
          value={formData.email}
          onChange={handleChange}
          required
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
        />
        <Textarea
          name="message"
          placeholder="Sua Mensagem"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          required
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 120 }}
        />
        <Button
          type="submit"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, type: "spring", stiffness: 120 }}
        >
          Enviar Mensagem
        </Button>
      </Form>
    </Section>
  );
};

export default Contact;

import React, { useState } from "react";
import { motion } from "framer-motion";
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

const Title = styled.h1`
  font-size: 2.5rem;
  color: #ffffff;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 500px;
  margin: 2rem auto;
`;

const Input = styled.input`
  padding: 0.75rem;
  border-radius: 4px;
  border: 1px solid #00b4d8;
  background: #1e1e1e;
  color: #e0e0e0;
`;

const Textarea = styled.textarea`
  padding: 0.75rem;
  border-radius: 4px;
  border: 1px solid #00b4d8;
  background: #1e1e1e;
  color: #e0e0e0;
  resize: vertical;
`;

const Button = styled.button`
  padding: 0.75rem;
  background: #00b4d8;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s ease;
  &:hover {
    background: #0096b7;
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
        setFormData({ name: "", email: "", message: "" }); // Limpa o formulário
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
            Não preencha isso se for humano: <input name="bot-field" />
          </label>
        </p>
        <Input
          type="text"
          name="name"
          placeholder="Seu Nome"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <Input
          type="email"
          name="email"
          placeholder="Seu E-mail"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <Textarea
          name="message"
          placeholder="Sua Mensagem"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          required
        />
        <Button type="submit">Enviar Mensagem</Button>
      </Form>
    </Section>
  );
};

export default Contact;

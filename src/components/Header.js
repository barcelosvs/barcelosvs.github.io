import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  padding: 1rem 0;
  box-shadow: 0 2px 12px rgba(147, 112, 219, 0.2);
  z-index: 1000;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: 0;
  padding: 0;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;

const NavItem = styled(motion.li)`
  a {
    color: #d8bfd8;
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: 500;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    transition: color 0.3s ease, background 0.3s ease;
    display: block;
    &:hover {
      color: #ffffff;
      background: linear-gradient(90deg, #8a2be2, #ba55d3);
    }
  }
`;

const navItemVariants = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
};

const Header = () => {
  return (
    <Nav>
      <NavList>
        <NavItem
          variants={navItemVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.1 }}
        >
          <Link to="/">Sobre</Link>
        </NavItem>
        <NavItem
          variants={navItemVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.2 }}
        >
          <Link to="/projects">Projetos</Link>
        </NavItem>
        <NavItem
          variants={navItemVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.3 }}
        >
          <Link to="/skills">Habilidades</Link>
        </NavItem>
        <NavItem
          variants={navItemVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.4 }}
        >
          <Link to="/contact">Contato</Link>
        </NavItem>
      </NavList>
    </Nav>
  );
};

export default Header;

import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background: rgb(39, 39, 39);
  padding: 1rem 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  a {
    color: rgb(216, 216, 216);
    text-decoration: none;
    font-size: 1.2rem;
    transition: color 0.3s ease;
    &:hover {
      color: #621587;
    }
  }
`;

const Header = () => {
  return (
    <Nav>
      <NavList>
        <NavItem>
          <Link to="/">Sobre</Link>
        </NavItem>
        <NavItem>
          <Link to="/projects">Projetos</Link>
        </NavItem>
        <NavItem>
          <Link to="/skills">Habilidades</Link>
        </NavItem>
        <NavItem>
          <Link to="/contact">Contato</Link>
        </NavItem>
      </NavList>
    </Nav>
  );
};

export default Header;

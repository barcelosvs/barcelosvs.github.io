import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth; 
  body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
    background: #121212;
    color: #e0e0e0;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 5rem 2rem 2rem;
`;

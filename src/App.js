import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import { GlobalStyle, Container } from "./styles/GlobalStyles";
import { AnimatePresence } from "framer-motion"; // Para transições

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Container>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </Container>
    </Router>
  );
}

export default App;

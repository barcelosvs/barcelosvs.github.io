import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import { GlobalStyle, Container } from "./styles/GlobalStyles";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Container>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Skills" element={<Skills />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </Container>
    </Router>
  );
}

export default App;

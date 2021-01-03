import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Tools from "./components/Tools";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./scss/style.scss";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Tools />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

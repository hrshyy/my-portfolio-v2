import React from "react";
import Hero from "./menu/Hero";
import About from "./menu/About";
import Education from './menu/Education';
import Skills from "./menu/Skills";
import Projects from "./menu/Projects";
import Contact from "./menu/Contact";
import Header from "./menu/Header";
<section 
  id="about" 
  className="bg-gradient-to-b from-pink-50 to-pink-100 text-gray-900 body-font py-24 px-6 mt-16">
</section>


function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Education/>
      <Skills />
      <Projects />
      <Contact />
      
    </>
  );
}

export default App;

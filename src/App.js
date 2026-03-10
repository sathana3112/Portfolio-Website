import React from "react";
import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/skills";
import MySkills from "./components/MySkills/MySkills";
import Projects from "./components/Projects/Projects";
import Certificates from "./components/Certificates/Certificates";
import Contact from "./components/Contact/Contact";

function App() {
return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <MySkills />
      <Projects />
      <Certificates />
      <Contact />
    </div>
  );
}

export default App;

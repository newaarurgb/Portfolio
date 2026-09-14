import Navbar from "./components/Navbar";
import AnimatedBackground from "./components/AnimatedBackground";
import Hero from "./components/Hero";

import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Certifications from "./sections/Certifications";
import Research from "./sections/Research";
import Contact from "./sections/Contact";
import CustomCursor from "./components/CustomCursor";


function App() {
  return (
    <div className="app">
      <AnimatedBackground />
       <CustomCursor />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Research />
        <Contact />
      </main>
    </div>
  );
}

export default App;
import GradientBackground from "./components/GradientBackground";
import AmbientParticles from "./components/AmbientParticles";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Research from "./components/Research";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SectionDivider from "./components/SectionDivider";
import ScrollProgress from "./components/ScrollProgress";



function App() {
  return (
    <>
      <GradientBackground />
      <AmbientParticles />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Education />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Research />
      <SectionDivider />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
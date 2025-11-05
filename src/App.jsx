import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Contact from './components/Contact';
import Project from './components/Project';
import About from './components/About';
import Skill from './components/Skill';
import Certificates from './components/Certificates';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skill />
      <Project />
      <Certificates />
      <Contact />
    </div>
  );
}

export default App;


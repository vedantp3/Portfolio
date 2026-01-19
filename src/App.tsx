import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Activities from './components/Activities';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-darker min-h-screen text-white">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Activities />
      <Certifications />
      <Contact />

      <footer className="py-8 text-center text-gray-500 text-sm bg-dark">
        <p>© {new Date().getFullYear()} Vedant Patil. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

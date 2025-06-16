import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Education from '../components/Education';
import Experience from '../components/Experience';


export default function Home() {
  return (
    <main>
      <Hero />
      <Skills />
      <Projects />
      <Education/>
      <Experience/>
      <Contact />
      <Footer />
    </main>
  );
}

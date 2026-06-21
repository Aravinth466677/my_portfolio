import { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const dotRef = useRef();
  const ringRef = useRef();

  useEffect(() => {
    const move = (e) => {
      if (dotRef.current) { dotRef.current.style.left = e.clientX + 'px'; dotRef.current.style.top = e.clientY + 'px'; }
      if (ringRef.current) { ringRef.current.style.left = e.clientX + 'px'; ringRef.current.style.top = e.clientY + 'px'; }
    };
    const over = () => { if (ringRef.current) { ringRef.current.style.width = '60px'; ringRef.current.style.height = '60px'; ringRef.current.style.borderColor = 'rgba(0,255,179,0.7)'; } };
    const out = () => { if (ringRef.current) { ringRef.current.style.width = '40px'; ringRef.current.style.height = '40px'; ringRef.current.style.borderColor = 'rgba(0,255,179,0.4)'; } };
    window.addEventListener('mousemove', move);
    document.querySelectorAll('a,button').forEach(el => { el.addEventListener('mouseenter', over); el.addEventListener('mouseleave', out); });
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <>
      <div className="noise" />
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

import React, { useState, useEffect } from 'react';
import './styles/App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Certifications from './components/Certification/Certifications';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';
import GameDev from './components/GameDev/GameDev';
const App = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('theme') !== 'light'
  );

  useEffect(() => {
    document.body.className = darkMode ? '' : 'light';
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('revealed');
          observer.unobserve(e.target);
        }
      }),
      { threshold: 0.08 }
    );
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div className="app">
      <Header darkMode={darkMode} toggleTheme={toggleTheme} />
      <Navigation />
      <About />
      <Skills />
      <Certifications />
      <Experience />
      <GameDev />
      <Contact />
    </div>
  );
};

export default App;
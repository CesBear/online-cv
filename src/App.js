import React, { useState, useEffect } from 'react';
import './styles/App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Certifications from './components/Certification/Certifications';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';

const App = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('theme') === 'dark'
  );

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : '';
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div className="app">
      <Header darkMode={darkMode} toggleTheme={toggleTheme} />
      <Navigation />
      <About />
      <Skills />
      <Certifications />
      <Experience />
      <Contact />
    </div>
  );
};

export default App;
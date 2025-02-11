import React, { useState, useEffect } from 'react';
import './App.css';

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

      <header className="header-container">
        <title>SDET Cesar Ramirez</title>
        <img src="/icons/profile.png" alt="César Ramírez" className="profile-image" />
        <div className="header-text">
          <h1>César Ramírez</h1>
          <h2>Software Development Engineer in Test (SDET)</h2>
          <p>📍 I'm based in the beautiful México 🇲🇽</p>
        </div>
        <div>
          <button className="theme-toggle" onClick={toggleTheme}>{darkMode ? 'Light Mode' : 'Dark Mode'}</button>
        </div>
      </header>

      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#certifications">Certifications</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

      </nav>

      <section id="about" className="card">
        <h2>About Me</h2>
        <p>
          I am a highly experienced <strong>Software Development Engineer in Test (SDET)</strong> with over 14 years in IT, specializing in <strong>test automation, performance testing, and full-stack development (MERN)</strong>. 
          My expertise spans across mobile and web automation, CI/CD integration, and quality engineering best practices.
        </p>
        <p>
          I have a strong background in designing robust <strong>test automation frameworks</strong> using cutting-edge technologies like <strong>Appium, Espresso, Playwright, Selenium, and Cypress</strong>. 
          Additionally, I excel in backend testing with <strong>Postman, Supertest, and K6</strong> for performance validation.
        </p>
        <p>
          Passionate about <strong>efficiency, scalability, and innovation</strong>, I thrive in dynamic environments, working closely with developers, QA teams, and DevOps to build high-quality software. 
          My goal is to drive test automation strategies that <strong>enhance software reliability and accelerate delivery cycles</strong>.
        </p>
      </section>

      <section id="skills" className="card">
        <h2>Skills</h2>
        <div className="skills-icons">
          <img src="/icons/typescript.svg" alt="TypeScript" title="TypeScript" />
          <img src="/icons/javascript.svg" alt="JavaScript" title="JavaScript" />
          <img src="/icons/react.svg" alt="React" title="React" />
          <img src="/icons/html-5.svg" alt="HTML5" title="HTML5" />
          <img src="/icons/css.svg" alt="CSS3" title="CSS3" />
          <img src="/icons/sass.svg" alt="SASS" title="SASS" />
          <img src="/icons/redux.svg" alt="Redux" title="Redux" />
          <img src="/icons/nodejs.svg" alt="Node.js" title="Node.js" />
          <img src="/icons/mongodb.svg" alt="MongoDB" title="MongoDB" />
          <img src="/icons/cucumber.svg" alt="Cucumber" title="Cucumber" />
          <img src="/icons/postman.svg" alt="Postman" title="Postman" />
          <img src="/icons/docker.svg" alt="Docker" title="Docker" />
          <img src="/icons/azure.svg" alt="Azure" title="Azure" />
          <img src="/icons/linux.svg" alt="Linux" title="Linux" />
          <img src="/icons/automationMobile.svg" alt="Automation Mobile" title="Automation Mobile" />
          <img src="/icons/espresso.svg" alt="Espresso" title="Espresso" />
          <img src="/icons/kotlin.svg" alt="Kotlin" title="Kotlin" />
          <img src="/icons/appium.svg" alt="Appium" title="Appium" />
          <img src="/icons/playwright.svg" alt="Playwright" title="Playwright" />
          <img src="/icons/testing.svg" alt="Testing" title="Testing" />
          <img src="/icons/selenium.svg" alt="Selenium" title="Selenium" />
          <img src="/icons/defecthunting.svg" alt="Defect Hunting" title="Defect Hunting" />
        </div>
      </section>

      <section id="certifications" className="card">
        <h2>Certifications</h2>
        <ul>
          <li>ISTQB Foundation Level</li>
          <li>CIW JavaScript Specialist</li>
          <li>QA Automation (Wizeline & Tec de Monterrey)</li>
          <li>FullStack Web Development (HTML, CSS, React, Node.js, MongoDB)</li>
        </ul>
      </section>

      <section id="experience" className="card">
        <h2>Experience</h2>
        <div className="experience-container">
          <div className="company-icons">
            <img src="/icons/altimetrik.svg" alt="Altimetrik" className="company-icon" title="Altimetrik" />
            <img src="/icons/epam.png" alt="Epam" className="company-icon" title="Epam" />
            <img src="/icons/globant.png" alt="Globant" className="company-icon" title="Globant" />
            <img src="/icons/apexsystems.jpg" alt="Apex Systems" className="company-icon" title="Apex Systems" />
            <img src="/icons/zipco.svg" alt="Zip.CO" className="company-icon" title="Zip.CO" />
            <img src="/icons/paysafe.png" alt="PaySafe" className="company-icon" title="PaySafe" />
            <img src="/icons/salesforce.svg" alt="Salesforce" className="company-icon" title="Salesforce" />
            <img src="/icons/thomsonreuters.png" alt="Thomson Reuters" className="company-icon" title="Thomson Reuters" />
            <img src="/icons/johnsoncontrols.svg" alt="Johnson Controls" className="company-icon" title="Johnson Controls" />
            <img src="/icons/citi.svg" alt="Citi" className="company-icon" title="Citi" />
            <img src="/icons/ibm.svg" alt="IBM" className="company-icon" title="IBM" />
          </div>
          <div className="experience-item">
            <h3>Zip.CO - Sr. Software Development Engineer in Test</h3>
            <span className="date">(Aug 2022 - Dec 2025)</span>
            <p>Led API test automation with TypeScript and Cucumber.js, reduced execution time from 1 hour to 3 minutes, and implemented performance/load testing strategies.</p>
          </div>
          <div className="experience-item">
            <h3>PaySafe - Sr. Software Development Engineer in Test</h3>
            <span className="date">(Sep 2025 - Dec 2025)</span>
            <p>Developed automation frameworks for Android (Espresso) and iOS (XCUITest), conducted manual and automated testing, and improved test efficiency.</p>
          </div>
          <div className="experience-item">
            <h3>Salesforce - Sr. Software Development Engineer in Test</h3>
            <span className="date">(Jun 2021 - Au 2022)</span>
            <p>Automated E2E scenarios, developed API test tooling, implemented contract testing, and optimized CI/CD pipelines.</p>
          </div>
          <div className="experience-item">
            <h3>Epam - Competency Lead & Sr. SDET</h3>
            <span className="date">(Jun 2020 - Jun 2021)</span>
            <p>Led a JavaScript competency program, managed a team of 10 engineers, and created API/UI test automation frameworks.</p>
          </div>
          <div className="experience-item">
            <h3>Globant - Test Automation Engineer (JS) IoT Project</h3>
            <span className="date">(Dec 2019 - May 2020)</span>
            <p>Built API automation frameworks with Mocha/Chai, managed test suites, and led QA coordination efforts.</p>
          </div>
          <div className="experience-item">
            <h3>Apex Systems - Front-End Developer / Sr. SDET</h3>
            <span className="date">(Oct 2018 - Dec 2019)</span>
            <p>Developed a Unit Testing framework with Jest, created API testing frameworks, and contributed to frontend development using React.</p>
          </div>
          <div className="experience-item">
            <h3>EPAM Systems - Functional Competency Lead / Sr. Functional Test Engineer</h3>
            <span className="date">(Oct 2016 - Oct 2018)</span>
            <p>Led functional and automation testing, created automation test scripts, and participated in Agile development.</p>
          </div>
          <div className="experience-item">
            <h3>IBM - PM / QA Lead / QA Manual</h3>
            <span className="date">(Jan 2011 - Oct 2016)</span>
            <p>Managed QA processes, test lifecycle, automation pilots in Selenium, and coordinated inter-application testing.</p>
          </div>
        </div>
      </section>


      <section id="contact" className="card contact-section">
        <h2>Contact</h2>
        <ul className="contact-details">
          <li>
            📧 Email:
            <a href="mailto:carr@cesbear.com"> send me an email</a>
          </li>
          <li>
            <img src="/icons/linkedin.svg" alt="LinkedIn" className="contact-icon" />
            <a href="https://www.linkedin.com/in/cesar-alejandro-ramirez/"
              target="_blank" rel="noopener noreferrer">
              César Alejandro Ramírez
            </a>
          </li>
          <li>
            <img src="/icons/github.svg" alt="GitHub" className="contact-icon" />
            <a href="https://github.com/CesBear"
              target="_blank" rel="noopener noreferrer">
              CesBear
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default App;

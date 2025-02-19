import React from 'react';

const Experience = () => {
  return (
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
  );
};

export default Experience;
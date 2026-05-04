import React from 'react';

const EXPERIENCE = [
  {
    company: 'Zip.CO',
    logo: '/icons/zipco.svg',
    role: 'Sr. Software Development Engineer in Test',
    dates: 'Aug 2022 - Present',
    current: true,
    description: 'Led API test automation with TypeScript and Cucumber.js, reduced execution time from 1 hour to 3 minutes, and implemented performance/load testing strategies.'
  },
  {
    company: 'PaySafe',
    logo: '/icons/paysafe.png',
    role: 'Sr. Software Development Engineer in Test',
    dates: 'Sep 2025 - Dec 2025',
    description: 'Developed automation frameworks for Android (Espresso) and iOS (XCUITest), conducted manual and automated testing, and improved test efficiency.'
  },
  {
    company: 'Salesforce',
    logo: '/icons/salesforce.svg',
    role: 'Sr. Software Development Engineer in Test',
    dates: 'Jun 2021 - Aug 2022',
    description: 'Automated E2E scenarios, developed API test tooling, implemented contract testing, and optimized CI/CD pipelines.'
  },
  {
    company: 'Epam',
    logo: '/icons/epam.png',
    role: 'Competency Lead & Sr. SDET',
    dates: 'Jun 2020 - Jun 2021',
    description: 'Led a JavaScript competency program, managed a team of 10 engineers, and created API/UI test automation frameworks.'
  },
  {
    company: 'Globant',
    logo: '/icons/globant.png',
    role: 'Test Automation Engineer (JS) — IoT Project',
    dates: 'Dec 2019 - May 2020',
    description: 'Built API automation frameworks with Mocha/Chai, managed test suites, and led QA coordination efforts.'
  },
  {
    company: 'Apex Systems',
    logo: '/icons/apexsystems.jpg',
    role: 'Front-End Developer / Sr. SDET',
    dates: 'Oct 2018 - Dec 2019',
    description: 'Developed a Unit Testing framework with Jest, created API testing frameworks, and contributed to frontend development using React.'
  },
  {
    company: 'EPAM Systems',
    logo: '/icons/epam.png',
    role: 'Functional Competency Lead / Sr. Functional Test Engineer',
    dates: 'Oct 2016 - Oct 2018',
    description: 'Led functional and automation testing, created automation test scripts, and participated in Agile development.'
  },
  {
    company: 'IBM',
    logo: '/icons/ibm.svg',
    role: 'PM / QA Lead / QA Manual',
    dates: 'Jan 2011 - Oct 2016',
    description: 'Managed QA processes, test lifecycle, automation pilots in Selenium, and coordinated inter-application testing.'
  }
];

const Experience = () => {
  return (
    <section id="experience" className="reveal">
      <div className="section-container">
        <h2 className="section-title">
          <span className="title-gradient"># Experience</span>
        </h2>
        <div className="timeline">
          {EXPERIENCE.map((item) => (
            <div key={`${item.company}-${item.dates}`} className={`timeline-item${item.current ? ' current' : ''}`}>
              <div className="timeline-dot" />
              <div className="timeline-card">
                <div className="timeline-logo-wrap">
                  <img src={item.logo} alt={item.company} />
                </div>
                <div className="timeline-body">
                  <div className="timeline-header">
                    <h3>{item.company} — {item.role}</h3>
                    <span className={`timeline-date${item.current ? ' current' : ''}`}>
                      {item.dates}
                    </span>
                  </div>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

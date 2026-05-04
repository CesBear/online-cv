import React from 'react';

const HIGHLIGHTS = [
  '14+ Years in IT', 'Test Automation', 'AI-Driven Testing',
  'Performance Engineering', 'MERN Stack', 'CI/CD',
  'Mobile Automation', 'Agent Development', 'TypeScript'
];

const About = () => {
  return (
    <section id="about" className="reveal">
      <div className="section-container">
        <h2 className="section-title">
          <span className="title-gradient"># About Me</span>
        </h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I am a highly experienced <strong>Software Development Engineer in Test (SDET)</strong> with
              over 14 years in IT, specializing in <strong>test automation, performance testing, and
              full-stack development (MERN)</strong>. My expertise spans mobile and web automation,
              CI/CD integration, and quality engineering best practices.
            </p>
            <p>
              I design robust <strong>test automation frameworks</strong> using <strong>Appium, Espresso,
              Playwright, Selenium, and Cypress</strong>, and excel in backend testing with <strong>Postman,
              Supertest, and K6</strong> for performance validation.
            </p>
            <p>
              Currently evolving at the intersection of <strong>AI and quality engineering</strong> —
              leveraging tools like <strong>Claude, GitHub Copilot, and Codex</strong> to build AI-driven
              testing strategies and autonomous agents that enhance coverage, reduce manual effort, and
              accelerate delivery cycles.
            </p>
            <div className="highlight-tags">
              {HIGHLIGHTS.map(tag => (
                <span key={tag} className="highlight-tag">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

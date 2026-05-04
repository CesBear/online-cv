import React from 'react';

const AI_SKILLS = [
  'AI-Driven Testing', 'Claude (Anthropic)', 'GitHub Copilot',
  'OpenAI Codex', 'Agent Development', 'Skills Implementation', 'Prompt Engineering'
];

const CATEGORIES = [
  {
    title: 'Test Automation',
    icons: [
      { file: 'playwright.svg', label: 'Playwright' },
      { file: 'selenium.svg', label: 'Selenium' },
      { file: 'appium.svg', label: 'Appium' },
      { file: 'espresso.svg', label: 'Espresso' },
      { file: 'cucumber.svg', label: 'Cucumber' },
      { file: 'testing.svg', label: 'Testing' },
      { file: 'defecthunting.svg', label: 'Defect Hunt' },
      { file: 'AutomationMobile.svg', label: 'Mobile Auto' },
    ]
  },
  {
    title: 'Languages & Frontend',
    icons: [
      { file: 'typescript.svg', label: 'TypeScript' },
      { file: 'javascript.svg', label: 'JavaScript' },
      { file: 'kotlin.svg', label: 'Kotlin' },
      { file: 'react.svg', label: 'React' },
      { file: 'redux.svg', label: 'Redux' },
      { file: 'nodejs.svg', label: 'Node.js' },
      { file: 'html-5.svg', label: 'HTML5' },
      { file: 'css.svg', label: 'CSS3' },
      { file: 'sass.svg', label: 'SASS' },
    ]
  },
  {
    title: 'API, Performance & QA',
    icons: [
      { file: 'postman.svg', label: 'Postman' },
      { file: 'mongodb.svg', label: 'MongoDB' },
    ]
  },
  {
    title: 'DevOps & Cloud',
    icons: [
      { file: 'docker.svg', label: 'Docker' },
      { file: 'azure.svg', label: 'Azure' },
      { file: 'linux.svg', label: 'Linux' },
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="reveal">
      <div className="section-container">
        <h2 className="section-title">
          <span className="title-gradient"># Skills</span>
        </h2>
        <div className="skills-wrapper">
          <div className="ai-banner">
            <div className="ai-banner-title">
              <span>⚡</span> AI &amp; Automation — New Frontier
            </div>
            <div className="ai-tags">
              {AI_SKILLS.map(skill => (
                <span key={skill} className="ai-tag">{skill}</span>
              ))}
            </div>
          </div>

          {CATEGORIES.map(cat => (
            <div key={cat.title}>
              <p className="skill-category-title">{cat.title}</p>
              <div className="skill-icons-grid">
                {cat.icons.map((icon, i) => (
                  <div
                    key={icon.label}
                    className="skill-icon-card"
                    style={{ transitionDelay: `${i * 0.04}s` }}
                  >
                    <img src={`/icons/${icon.file}`} alt={icon.label} />
                    <span>{icon.label}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

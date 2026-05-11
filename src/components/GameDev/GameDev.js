import React from 'react';

const PLATFORMS = [
  {
    title: '2D Game Development',
    icon: '🎮',
    tags: ['Game Design', 'Level Design', 'Physics', '2D Graphics', 'Game Logic', 'Collision Systems'],
    status: 'Private — In Development',
    desc: 'Designing and building original 2D game experiences from scratch. Focused on game mechanics, player experience, and performance optimization.',
  },
  {
    title: 'Roblox Development',
    icon: '🟥',
    tags: ['Lua', 'Roblox Studio', 'Game Mechanics', 'Scripting', 'UI/UX', 'Multiplayer Logic'],
    status: 'Private — In Development',
    desc: 'Building multiplayer game experiences on the Roblox platform using Lua scripting and Roblox Studio. Focused on engaging mechanics and scalable systems.',
  },
];

const GameDev = () => {
  return (
    <section id="gamedev" className="reveal">
      <div className="section-container">
        <h2 className="section-title">
          <span className="title-gradient"># Game Development</span>
        </h2>
        <p className="gamedev-intro">
          Beyond testing and automation, I explore <strong>game development</strong> as a creative outlet —
          applying engineering discipline to interactive experiences.
        </p>

        <div className="gamedev-grid">
          {PLATFORMS.map(p => (
            <div key={p.title} className="gamedev-card">
              <div className="gamedev-card-top">
                <span className="gamedev-icon">{p.icon}</span>
                <div>
                  <h3 className="gamedev-title">{p.title}</h3>
                  <span className="gamedev-status">
                    <span className="gamedev-status-dot" />
                    {p.status}
                  </span>
                </div>
              </div>

              <p className="gamedev-desc">{p.desc}</p>

              <div className="gamedev-tags">
                {p.tags.map(t => (
                  <span key={t} className="gamedev-tag">{t}</span>
                ))}
              </div>

              <div className="gamedev-confidential">
                <span className="gamedev-lock">🔒</span>
                Game concepts & details are confidential
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameDev;

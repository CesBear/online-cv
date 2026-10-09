import React from 'react';

const ICON_PROPS = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
};

const GamepadIcon = () => (
  <svg {...ICON_PROPS}>
    <path d="M6 11h4M8 9v4M15 12h.01M18 10h.01" />
    <path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z" />
  </svg>
);

const CubeIcon = () => (
  <svg {...ICON_PROPS}>
    <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
    <path d="m3.3 7 8.7 5 8.7-5M12 22V12" />
  </svg>
);

const WaveIcon = () => (
  <svg {...ICON_PROPS}>
    <path d="M2 10v3M6 6v11M10 3v18M14 8v7M18 5v13M22 10v3" />
  </svg>
);

const PROJECTS = [
  {
    title: 'MaestroMusic',
    Icon: WaveIcon,
    tags: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS', 'NextAuth', 'Upstash Redis', 'AlphaTab', 'Web Audio API', 'Vitest', 'Playwright'],
    status: 'Live — Learning Project',
    desc: 'Music practice web app I built while learning guitar: tuner, scales, fretboard, staff and spectrum tools. Invite-only auth and a full test suite (unit, audio and e2e).',
    links: [
      { label: 'Visit', href: 'https://musicappgit.vercel.app' },
      { label: 'Source', href: 'https://github.com/CesBear/musicApp' },
    ],
  },
  {
    title: '2D Game Development',
    Icon: GamepadIcon,
    tags: ['Game Design', 'Level Design', 'Physics', '2D Graphics', 'Game Logic', 'Collision Systems'],
    status: 'Private — In Development',
    desc: 'Designing and building original 2D game experiences from scratch. Focused on game mechanics, player experience, and performance optimization.',
  },
  {
    title: 'Roblox Development',
    Icon: CubeIcon,
    tags: ['Lua', 'Roblox Studio', 'Game Mechanics', 'Scripting', 'UI/UX', 'Multiplayer Logic'],
    status: 'Private — In Development',
    desc: 'Building multiplayer game experiences on the Roblox platform using Lua scripting and Roblox Studio. Focused on engaging mechanics and scalable systems.',
  },
];

const GameDev = () => {
  return (
    <section id="projects" className="reveal">
      <div className="section-container">
        <h2 className="section-title">
          <span className="title-gradient"># Side Projects</span>
        </h2>
        <p className="gamedev-intro">
          Beyond testing and automation, I build <strong>side projects</strong> as a creative outlet —
          from a music practice app to <strong>game development</strong> — applying engineering
          discipline to interactive experiences.
        </p>

        <div className="gamedev-grid">
          {PROJECTS.map(({ title, Icon, tags, status, desc, links }) => (
            <div key={title} className="gamedev-card">
              <div className="gamedev-card-top">
                <span className="gamedev-icon"><Icon /></span>
                <div>
                  <h3 className="gamedev-title">{title}</h3>
                  <span className="gamedev-status">
                    <span className="gamedev-status-dot" />
                    {status}
                  </span>
                </div>
              </div>

              <p className="gamedev-desc">{desc}</p>

              <div className="gamedev-tags">
                {tags.map(t => (
                  <span key={t} className="gamedev-tag">{t}</span>
                ))}
              </div>

              {links ? (
                <div className="gamedev-links">
                  {links.map(l => (
                    <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="gamedev-link">
                      {l.label} <span aria-hidden="true">→</span>
                    </a>
                  ))}
                </div>
              ) : (
                <div className="gamedev-confidential">
                  <span className="gamedev-lock" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="4" y="11" width="16" height="10" rx="2" />
                      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
                    </svg>
                  </span>
                  Game concepts & details are confidential
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameDev;

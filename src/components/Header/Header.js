import React, { useState, useEffect, useRef } from 'react';

const SUBTITLE = 'Software Development Engineer in Test';
const BADGES = ['14+ Years IT', 'SDET', 'AI-Driven Testing', 'MERN Stack', 'Mobile & Web'];

const MODES = [
  {
    name: 'Pentagon',
    freq: '440 Hz',
    note: 'La',
    sources: 5,
    desc: 'Concert pitch — the universal tuning reference',
    K: 24,
    color: [0, 212, 255],
    orbits: Array.from({ length: 5 }, (_, i) => ({
      r: 0.30, sx: 0.075, sy: 0.055, phase: (i / 5) * Math.PI * 2,
    })),
  },
  {
    name: 'Hexagon',
    freq: '528 Hz',
    note: 'Mi',
    sources: 6,
    desc: 'Transformation tone — associated with DNA repair',
    K: 34,
    color: [57, 211, 83],
    orbits: Array.from({ length: 6 }, (_, i) => ({
      r: 0.28, sx: 0.058, sy: 0.058, phase: (i / 6) * Math.PI * 2,
    })),
  },
  {
    name: 'Dense',
    freq: '741 Hz',
    note: 'Sol',
    sources: 9,
    desc: 'Intuition frequency — expression & problem solving',
    K: 44,
    color: [163, 113, 247],
    orbits: Array.from({ length: 9 }, (_, i) => ({
      r: 0.18 + (i % 3) * 0.08,
      sx: 0.068 + (i % 4) * 0.018,
      sy: 0.052 + (i % 3) * 0.016,
      phase: (i / 9) * Math.PI * 2,
    })),
  },
  {
    name: 'Spiral',
    freq: '396 Hz',
    note: 'Ut',
    sources: 6,
    desc: 'Liberation tone — releasing fear & guilt',
    K: 18,
    color: [255, 160, 50],
    orbits: [
      { r: 0.10, sx: 0.17, sy: 0.11, phase: 0 },
      { r: 0.18, sx: 0.13, sy: 0.09, phase: Math.PI * 0.5 },
      { r: 0.26, sx: 0.10, sy: 0.07, phase: Math.PI * 1.0 },
      { r: 0.34, sx: 0.08, sy: 0.055, phase: Math.PI * 1.5 },
      { r: 0.22, sx: 0.14, sy: 0.10, phase: Math.PI * 0.25 },
      { r: 0.14, sx: 0.20, sy: 0.13, phase: Math.PI * 1.75 },
    ],
  },
  {
    name: 'Star',
    freq: '963 Hz',
    note: 'Si',
    sources: 7,
    desc: 'Divine consciousness — pineal gland activation',
    K: 38,
    color: [0, 230, 200],
    orbits: [
      ...Array.from({ length: 3 }, (_, i) => ({
        r: 0.32, sx: 0.062, sy: 0.048, phase: (i / 3) * Math.PI * 2,
      })),
      ...Array.from({ length: 3 }, (_, i) => ({
        r: 0.18, sx: 0.095, sy: 0.075, phase: (i / 3) * Math.PI * 2 + Math.PI / 3,
      })),
      { r: 0.08, sx: 0.12, sy: 0.09, phase: 0 },
    ],
  },
  {
    name: 'Noise',
    freq: '174 Hz',
    note: 'Fa',
    sources: 11,
    desc: 'Foundation frequency — the lowest Solfeggio tone',
    K: 14,
    color: [200, 80, 255],
    orbits: Array.from({ length: 11 }, (_, i) => ({
      r: 0.10 + (i % 5) * 0.045,
      sx: 0.04 + (i % 7) * 0.015,
      sy: 0.03 + (i % 6) * 0.014,
      phase: (i * 1.618) % (Math.PI * 2),
    })),
  },
];

const MODE_DURATION = 9;
const TRANSITION    = 2.5;
const lerp3 = (a, b, t) => a.map((v, i) => v + (b[i] - v) * t);

const Header = ({ darkMode, toggleTheme }) => {
  const [displayText, setDisplayText] = useState('');
  const [modeIndex, setModeIndex]     = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const canvasRef  = useRef(null);
  const modeIdxRef = useRef(0);

  // Typing
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setDisplayText(SUBTITLE.slice(0, i + 1));
      i++;
      if (i === SUBTITLE.length) clearInterval(timer);
    }, 50);
    return () => clearInterval(timer);
  }, []);

  // Cymatics canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let W = 0, H = 0, animId;
    let time = 0, modeTime = 0;

    const off = document.createElement('canvas');
    const offCtx = off.getContext('2d');
    const SCALE = 4;

    const resize = () => {
      W = canvas.offsetWidth;
      H = canvas.offsetHeight;
      canvas.width = W;
      canvas.height = H;
    };
    resize();
    window.addEventListener('resize', resize);

    const getSources = (mode, t) =>
      mode.orbits.map(o => ({
        x: 0.5 + Math.cos(o.phase + t * o.sx) * o.r,
        y: 0.5 + Math.sin(o.phase + t * o.sy) * o.r,
      }));

    const getAmp = (x, y, sources, K, aspect) => {
      let amp = 0;
      for (let s = 0; s < sources.length; s++) {
        const dx = (x - sources[s].x) * aspect;
        const dy = y - sources[s].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        amp += Math.sin(K * dist - time * 1.8) * Math.exp(-dist * 2.2);
      }
      return amp / sources.length;
    };

    const draw = () => {
      const dt = 0.012;
      time     += dt;
      modeTime += dt;

      const cyclePos   = modeTime % MODE_DURATION;
      const blend      = Math.min(1, Math.max(0, cyclePos - (MODE_DURATION - TRANSITION)) / TRANSITION);

      if (modeTime >= MODE_DURATION) {
        modeIdxRef.current = (modeIdxRef.current + 1) % MODES.length;
        setModeIndex(modeIdxRef.current);
        modeTime = 0;
      }

      // Signal transition state for CSS animation
      setTransitioning(blend > 0.05 && blend < 0.95);

      const modeA = MODES[modeIdxRef.current];
      const modeB = MODES[(modeIdxRef.current + 1) % MODES.length];

      const sw = Math.max(1, Math.ceil(W / SCALE));
      const sh = Math.max(1, Math.ceil(H / SCALE));
      if (off.width !== sw || off.height !== sh) {
        off.width = sw; off.height = sh;
      }

      const imageData = offCtx.createImageData(sw, sh);
      const data = imageData.data;
      const aspect = W / H;

      const srcA = getSources(modeA, time);
      const srcB = getSources(modeB, time);
      const col  = blend > 0 ? lerp3(modeA.color, modeB.color, blend) : modeA.color;
      const [cr, cg, cb] = col;
      const isDark = !document.body.classList.contains('light');

      for (let py = 0; py < sh; py++) {
        for (let px = 0; px < sw; px++) {
          const x = px / sw;
          const y = py / sh;

          const ampA = getAmp(x, y, srcA, modeA.K, aspect);
          const ampB = blend > 0 ? getAmp(x, y, srcB, modeB.K, aspect) : ampA;
          const amp  = ampA * (1 - blend) + ampB * blend;

          const nodal  = Math.max(0, 1 - Math.abs(amp) * 3.8);
          const bright = nodal * nodal * nodal * nodal;

          const idx = (py * sw + px) * 4;
          if (isDark) {
            data[idx]     = Math.floor(bright * cr * 0.12);
            data[idx + 1] = Math.floor(bright * cg * 0.95);
            data[idx + 2] = Math.floor(bright * cb);
            data[idx + 3] = Math.floor(bright * 185 + 4);
          } else {
            data[idx]     = Math.floor(bright * cr * 0.25);
            data[idx + 1] = Math.floor(bright * cg * 0.40);
            data[idx + 2] = Math.floor(bright * cb * 0.95);
            data[idx + 3] = Math.floor(bright * 140 + 4);
          }
        }
      }

      offCtx.putImageData(imageData, 0, 0);
      ctx.clearRect(0, 0, W, H);
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
      ctx.drawImage(off, 0, 0, W, H);

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  const mode = MODES[modeIndex];
  const [r, g, b] = mode.color;
  const accentColor = `rgb(${r},${g},${b})`;

  return (
    <section className="hero-section">
      <canvas ref={canvasRef} className="hero-canvas" aria-hidden="true" />

      {/* Mode info pill — bottom of hero, above canvas */}
      <div className={`cymatics-info${transitioning ? ' transitioning' : ''}`}>
        <span className="cymatics-dot" style={{ background: accentColor, boxShadow: `0 0 8px ${accentColor}` }} />
        <span className="cymatics-name" style={{ color: accentColor }}>{mode.name}</span>
        <span className="cymatics-sep">·</span>
        <span className="cymatics-freq">{mode.freq}</span>
        <span className="cymatics-note">({mode.note})</span>
        <span className="cymatics-sep">·</span>
        <span className="cymatics-sources">{mode.sources} sources</span>
        <span className="cymatics-sep cymatics-sep-lg">—</span>
        <span className="cymatics-desc">{mode.desc}</span>
      </div>

      <div className="hero-inner">
        <div className="profile-wrapper">
          <img src="/icons/profile.png" alt="Cesar Ramirez" className="profile-image" />
        </div>
        <div className="hero-text">
          <h1>Cesar Ramirez</h1>
          <p className="hero-subtitle">
            {displayText}<span className="cursor" />
          </p>
          <p className="hero-location">📍 México 🇲🇽</p>
          <div className="hero-badges">
            {BADGES.map(ba => <span key={ba} className="hero-badge">{ba}</span>)}
          </div>
          <button className="theme-toggle" onClick={toggleTheme}>
            {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;

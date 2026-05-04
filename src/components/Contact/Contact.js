import React from 'react';

const CONTACTS = [
  {
    icon: '✉',
    label: 'Email',
    value: 'carr@cesbear.com',
    href: 'mailto:carr@cesbear.com',
    color: '#00d4ff',
  },
  {
    img: '/icons/linkedin.svg',
    label: 'LinkedIn',
    value: 'cesar-alejandro-ramirez',
    href: 'https://www.linkedin.com/in/cesar-alejandro-ramirez/',
    color: '#0a66c2',
  },
  {
    img: '/icons/github.svg',
    label: 'GitHub',
    value: 'CesBear',
    href: 'https://github.com/CesBear',
    color: '#e6edf3',
  },
];

const Contact = () => {
  return (
    <section id="contact" className="reveal">
      <div className="section-container">
        <h2 className="section-title">
          <span className="title-gradient"># Contact</span>
        </h2>
        <p className="contact-intro">
          Open to new opportunities, collaborations, and AI-driven quality engineering challenges.
        </p>
        <div className="contact-cards-row">
          {CONTACTS.map(c => (
            <a
              key={c.label}
              href={c.href}
              className="contact-card-v2"
              target={c.href.startsWith('mailto') ? undefined : '_blank'}
              rel={c.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              style={{ '--card-accent': c.color }}
            >
              <div className="contact-card-icon-v2">
                {c.img
                  ? <img src={c.img} alt={c.label} />
                  : <span>{c.icon}</span>
                }
              </div>
              <div className="contact-card-label">{c.label}</div>
              <div className="contact-card-value">{c.value}</div>
              <div className="contact-card-arrow">→</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;

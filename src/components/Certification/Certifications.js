import React from 'react';

const CERTS = [
  {
    name: 'ISTQB Foundation Level',
    issuer: 'ISTQB',
    url: 'https://www.istqb.org/certifications/certified-tester-foundation-level'
  },
  {
    name: 'CIW JavaScript Specialist',
    issuer: 'CIW',
    url: 'https://www.ciwcertified.com/ciw-certifications/web-development-series/javascript-specialist'
  },
  {
    name: 'QA Automation',
    issuer: 'Wizeline & Tec de Monterrey',
    url: 'https://www.credly.com/users/cesar-alejandro-ramirez'
  },
  {
    name: 'FullStack Web Development',
    issuer: 'HTML, CSS, React, Node.js, MongoDB',
    url: null
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="reveal">
      <div className="section-container">
        <h2 className="section-title">
          <span className="title-gradient"># Certifications</span>
        </h2>
        <div className="certs-grid">
          {CERTS.map((cert) => (
            <div key={cert.name} className="cert-card">
              {cert.url ? (
                <a href={cert.url} target="_blank" rel="noopener noreferrer">{cert.name}</a>
              ) : (
                <span className="cert-name">{cert.name}</span>
              )}
              <p className="cert-issuer">{cert.issuer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

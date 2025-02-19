import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="card contact-section">
      <h2>Contact</h2>
      <ul className="contact-details">
        <li>
          📧 Email: <a href="mailto:carr@cesbear.com"> Send me an email</a>
        </li>
        <li>
          <img src="/icons/linkedin.svg" alt="LinkedIn" className="contact-icon" />
          <a href="https://www.linkedin.com/in/cesar-alejandro-ramirez/" target="_blank" rel="noopener noreferrer">
            Cesar Ramirez
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Contact;
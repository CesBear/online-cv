import React from 'react';

const Header = ({ darkMode, toggleTheme }) => {
  return (
    <header className="header-container">
      <title>SDET Cesar Ramirez</title>
      <img src="/icons/profile.png" alt="Cesar Ramirez" className="profile-image" />
      <div className="header-text">
        <h1>Cesar Ramirez</h1>
        <h2>Software Development Engineer in Test (SDET)</h2>
        <p>📍 I'm based in the beautiful México 🇲🇽</p>
      </div>
      <button className="theme-toggle" onClick={toggleTheme}>{darkMode ? 'Light Mode' : 'Dark Mode'}</button>
    </header>
  );
};

export default Header;

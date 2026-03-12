import React, { useState } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <header className="navbar-header">
      <div className="navbar-topbar">
        <span>📧 mail@arvigroup.in</span>
        <span>📞 +91 9349594488</span>
      </div>
      <nav className="navbar">
        <div className="navbar-logo">
          <h2 className="logo-name">Arvi Investment</h2>
          <span className="logo-tag">AMFI Registered Mutual Fund Distributor</span>
        </div>
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span><span></span><span></span>
        </div>
        <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <li><button onClick={() => scrollTo('hero')}>Home</button></li>
          <li><button onClick={() => scrollTo('about')}>About Us</button></li>
          <li><button onClick={() => scrollTo('services')}>Services</button></li>
          <li><button onClick={() => scrollTo('contact')}>Contact Us</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
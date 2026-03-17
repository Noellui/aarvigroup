import React, { useState } from 'react';
import '../styles/Navbar.css';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <header className="navbar-header">
      <nav className="navbar">
        <div className="navbar-brand" onClick={() => scrollTo('hero')}>
          <img
            src="/images/logo and Amfi registration.png"
            alt="Aarvi Data Analytics Services – AMFI Registered Mutual Fund Distributor"
            className="logo-img"
          />
        </div>

        <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <li><button onClick={() => scrollTo('hero')}>Home</button></li>
          <li><button onClick={() => scrollTo('about')}>About Us</button></li>
          <li><button onClick={() => scrollTo('leadership')}>Leadership</button></li>
          <li><button onClick={() => scrollTo('services')}>Services</button></li>
          <li><button onClick={() => scrollTo('contact')}>Contact Us</button></li>
        </ul>

        <div className="navbar-actions">
          <ThemeToggle />
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span></span><span></span><span></span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
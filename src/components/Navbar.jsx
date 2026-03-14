import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';
import logoImg from '../imgs/Logo and Name.png';
import amfiImg from '../imgs/AMFI Registered Mutual Fund Distributor.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-topbar">
        <span>📧 mail@arvigroup.in</span>
        <span>📞 +91 9349594488</span>
      </div>
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={logoImg} alt="Arvi Investment" className="logo-img" />
          <div className="logo-divider" />
          <img src={amfiImg} alt="AMFI Registered Mutual Fund Distributor" className="amfi-img" />
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
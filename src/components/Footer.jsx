import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="footer-logo">Arvi Investment</div>
          <p className="footer-tagline">Stewardship · Clarity · Discipline</p>
          <p className="footer-desc">
            AMFI Registered Mutual Fund Distributor<br />
            ARN: 4195 · Since 2000
          </p>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><button onClick={() => document.getElementById('hero').scrollIntoView({ behavior: 'smooth' })}>Home</button></li>
            <li><button onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>About Us</button></li>
            <li><button onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}>Services</button></li>
            <li><button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>Contact</button></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4>Contact</h4>
          <p>📧 mail@arvigroup.in</p>
          <p>📞 +91 9349594488</p>
          <p>🕐 Mon – Sat: 9AM – 6PM</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 Arvi Investment Services · All Rights Reserved · Regulatory Disclosures Apply</p>
      </div>
    </footer>
  );
};

export default Footer;
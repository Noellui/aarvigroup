import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="footer-logo">Arvi Investment</div>
          <span className="footer-logo-tag">AMFI Registered Mutual Fund Distributor</span>
          <div className="footer-rule" />
          <p>
            Providing disciplined capital distribution and tailored wealth management
            for our clients since 2000. Built on a decade of proven integrity and quiet discipline.
          </p>
        </div>

        <div className="footer-col">
          <h4>Navigate</h4>
          <ul>
            <li onClick={() => scrollTo('hero')}>Home</li>
            <li onClick={() => scrollTo('about')}>About Us</li>
            <li onClick={() => scrollTo('services')}>Services</li>
            <li onClick={() => scrollTo('contact')}>Contact</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li>Mutual Funds & SIP</li>
            <li>NRI Services</li>
            <li>Insurance</li>
            <li>Tax Planning</li>
            <li>Fixed Income</li>
            <li>Portfolio Review</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li>mail@arvigroup.in</li>
            <li>+91 9349594488</li>
            <li>Cochin, Kerala</li>
            <li>Mon–Sat: 9AM–6PM</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span className="footer-copy">
          © 2025 Arvi Investment Services. All rights reserved.
        </span>
        <span className="footer-arn">
          ARN: 4195 · AMFI Registered · Regulatory Disclosures Apply
        </span>
      </div>
    </footer>
  );
};

export default Footer;
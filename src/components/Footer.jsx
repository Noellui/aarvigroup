import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">

      {/* ── Top three-column section ── */}
      <div className="footer-top">

        {/* Col 1 – About */}
        <div className="footer-about">
          <h4 className="footer-col-title">About Us</h4>
          <p className="footer-about-text">
            Aarvi Data Analytics Services Pvt Ltd was established in 2015 with the vision to create
            a milestone in financial distribution. We serve 700+ families and individuals through
            data-driven precision and traditional wealth stewardship.
          </p>
        </div>

        {/* Col 2 – Nav */}
        <div className="footer-col">
          <h4 className="footer-col-title">Footer Menu</h4>
          <ul>
            <li onClick={() => scrollTo('hero')}><span className="footer-arrow">›</span> Home</li>
            <li onClick={() => scrollTo('about')}><span className="footer-arrow">›</span> About Us</li>
            <li onClick={() => scrollTo('services')}><span className="footer-arrow">›</span> Services</li>
            <li onClick={() => scrollTo('contact')}><span className="footer-arrow">›</span> Contact Us</li>
          </ul>
        </div>

        {/* Col 3 – Contact */}
        <div className="footer-col footer-contact-col">
          <h4 className="footer-col-title">Contact Info</h4>
          <div className="footer-contact-item">
            <div className="footer-contact-icon">📍</div>
            <p>
              408, Times Square Arcade-1, Near Ravija Plaza,<br />
              Opposite Rambag, Thaltej, Shilaj,<br />
              Ahmedabad, Gujarat – 380059
            </p>
          </div>
          <div className="footer-contact-item">
            <div className="footer-contact-icon">✉️</div>
            <p>Aarvi_ms@yahoo.co.in</p>
          </div>
          <div className="footer-contact-item">
            <div className="footer-contact-icon">📞</div>
            <p>+91 9825279602 (Mansi Shah)</p>
          </div>
        </div>
      </div>

      {/* ── Divider ── */}
      <div className="footer-divider" />

      {/* ── Full-width Disclosure block ── */}
      <div className="footer-disclosure">
        <p className="footer-disclosure-title">Disclosure</p>
        <p className="footer-disclosure-body">
          Risk Factors – Investments in Mutual Funds are subject to Market Risks. Read all
          scheme-related documents carefully before investing. Mutual Fund Schemes do not assure or
          guarantee any returns. Past performances of any Mutual Fund Scheme may or may not be
          sustained in the future. There is no guarantee that the investment objective of any
          suggested scheme shall be achieved. All existing and prospective investors are advised to
          check and evaluate the Exit loads and other cost structures (TER) applicable at the time of
          making the investment before finalizing any investment decision for Mutual Funds schemes. We
          deal in Regular Plans only for Mutual Fund Schemes and earn a Trailing Commission on client
          investments. Disclosure of commission earnings is made to clients at the time of investments.
        </p>
        <p className="footer-disclosure-body footer-arn-line">
          AMFI Registered Mutual Fund Distributor &nbsp;|&nbsp; ARN – 106777 &nbsp;|&nbsp;
          Date of initial Registration: October 20, 2015 &nbsp;|&nbsp;
          Validity of ARN-106777 extends to October 19, 2027
        </p>
        <p className="footer-disclosure-body">
          <a
            href="https://www.sebi.gov.in/filings/mutual-funds.html"
            target="_blank"
            rel="noreferrer"
            className="footer-sid-link"
          >
            SID / SAI / KIM
          </a>
        </p>
        <p className="footer-disclosure-body">
          Grievance Officer: Mansi Shah &nbsp;|&nbsp; Aarvi_ms@yahoo.co.in &nbsp;|&nbsp; +91 9825279602
        </p>
        <p className="footer-disclosure-body footer-copy">
          © 2025 Aarvi Data Analytics Services Pvt. Ltd. All rights reserved.
        </p>
      </div>

    </footer>
  );
};

export default Footer;
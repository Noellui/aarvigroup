import React, { useEffect, useRef } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import '../styles/Contact.css';

const Contact = () => {
  const itemsRef = useRef([]);
  const [state, handleSubmit] = useForm("xeerkovr");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.15 }
    );
    itemsRef.current.forEach((el) => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="contact-section">
      <div className="contact-tag fade-up" ref={(el) => (itemsRef.current[0] = el)}>
        Inquire
      </div>

      <h2 className="contact-heading fade-up" ref={(el) => (itemsRef.current[1] = el)}>
        Begin a Conversation
      </h2>

      <div className="contact-rule fade-up" ref={(el) => (itemsRef.current[2] = el)} />

      <p className="contact-intro fade-up" ref={(el) => (itemsRef.current[3] = el)}>
        Request a private consultation. We'd love to understand your goals and show you how we can help.
      </p>

      <div className="contact-wrapper">

        {/* Info Side */}
        <div className="contact-info fade-left" ref={(el) => (itemsRef.current[4] = el)}>
          <div className="contact-info-item">
            <div className="contact-info-icon">📍</div>
            <div>
              <h4>Address</h4>
              <p>53/333 E, Arden Ivy Court, Off Subhash Chandra Bose Road,
                Opposite Reliance Fresh, Vyttila P.O., Cochin, Kerala – 682019</p>
            </div>
          </div>
          <div className="contact-info-item">
            <div className="contact-info-icon">📞</div>
            <div>
              <h4>Phone</h4>
              <p>+91 9349594488</p>
            </div>
          </div>
          <div className="contact-info-item">
            <div className="contact-info-icon">📧</div>
            <div>
              <h4>Email</h4>
              <p>mail@arvigroup.in</p>
            </div>
          </div>
          <div className="contact-info-item">
            <div className="contact-info-icon">🕐</div>
            <div>
              <h4>Working Hours</h4>
              <p>Mon – Sat: 9:00 AM – 6:00 PM</p>
            </div>
          </div>
        </div>

        {/* Form Side */}
        <div className="contact-form-wrapper fade-right" ref={(el) => (itemsRef.current[5] = el)}>
          {state.succeeded ? (
            <div className="form-success-box">
              <div className="form-success-icon">✅</div>
              <h3>Message Received</h3>
              <p>Thank you for reaching out. We'll be in touch with you shortly.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input id="name" type="text" name="name" placeholder="Your name" required />
                  <ValidationError prefix="Name" field="name" errors={state.errors} />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input id="phone" type="tel" name="phone" placeholder="+91 XXXXXXXXXX" required />
                  <ValidationError prefix="Phone" field="phone" errors={state.errors} />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input id="email" type="email" name="email" placeholder="your@email.com" required />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Area of Interest</label>
                <select id="subject" name="subject" required>
                  <option value="">Select a subject</option>
                  <option value="Mutual Fund & SIP">Mutual Fund & SIP</option>
                  <option value="NRI Services">NRI Services</option>
                  <option value="Insurance">Insurance</option>
                  <option value="Tax Planning">Tax Planning</option>
                  <option value="Portfolio Review">Portfolio Review</option>
                  <option value="Other">Other</option>
                </select>
                <ValidationError prefix="Subject" field="subject" errors={state.errors} />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" placeholder="Write your message here..." required />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>

              <button type="submit" className="contact-submit" disabled={state.submitting}>
                {state.submitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
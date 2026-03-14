import React, { useEffect, useRef } from 'react';
import '../styles/About.css';

const About = () => {
  const itemsRef = useRef([]);

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
    <section id="about" className="about-section">
      <div className="about-tag fade-up" ref={(el) => (itemsRef.current[0] = el)}>
        About Us
      </div>

      <h2 className="about-heading fade-up" ref={(el) => (itemsRef.current[1] = el)}>
        The Mandate of Clarity
      </h2>

      <div className="about-rule fade-up" ref={(el) => (itemsRef.current[2] = el)} />

      <p className="about-intro fade-up" ref={(el) => (itemsRef.current[3] = el)}>
        We at Arvi Investment Services believe in being the best wealth management
        guide for your financial freedom. We understand wealth management needs
        extensive research, regular monitoring, and a time-to-time review of
        investments. We are focused on providing our clients with unparalleled
        service in achieving their financial goals.
      </p>

      {/* Mission & Vision */}
      <div className="about-cards">
        <div className="about-card fade-left" ref={(el) => (itemsRef.current[4] = el)}>
          <div className="about-card-icon">🎯</div>
          <h3>Our Mission</h3>
          <p>
            To serve as the definitive partner in our clients' financial journeys.
            Built on a foundation of unwavering transparency and tailored
            distribution strategies, we ensure every decision made today
            strengthens your financial foundation for years to come.
          </p>
        </div>

        <div className="about-card fade-right" ref={(el) => (itemsRef.current[5] = el)}>
          <div className="about-card-icon">🔭</div>
          <h3>Our Vision</h3>
          <p>
            To create a future where every client moves forward with total
            financial clarity, supported by a foundation so strong it turns every
            life goal into an achievable reality while providing the enduring
            stability to navigate a changing world.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="about-stats">
        {[
          { value: '25+', label: 'Years of Experience' },
          { value: '1000+', label: 'Private Clients' },
          { value: 'ARN: 4195', label: 'AMFI Registered' },
          { value: 'Since 2000', label: 'Trusted Since' },
        ].map((stat, i) => (
          <div
            key={i}
            className="stat-item fade-up"
            ref={(el) => (itemsRef.current[6 + i] = el)}
          >
            <h3>{stat.value}</h3>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
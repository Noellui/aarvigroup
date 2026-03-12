import React, { useEffect, useRef } from 'react';
import '../styles/About.css';

const About = () => {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    itemsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      <div
        className="about-tag fade-up"
        ref={(el) => (itemsRef.current[0] = el)}
      >
        Who We Are
      </div>

      <h2
        className="about-heading fade-up"
        ref={(el) => (itemsRef.current[1] = el)}
      >
        About Arvi Investment Services
      </h2>

      <p
        className="about-intro fade-up"
        ref={(el) => (itemsRef.current[2] = el)}
      >
        We at Arvi Investment Services believe in being the best wealth management
        guide for your financial freedom. We understand wealth management needs
        extensive research, regular monitoring, and a time-to-time review of
        investments. We are focused on providing our clients with unparalleled
        service in achieving their financial goals.
      </p>

      {/* Mission & Vision */}
      <div className="about-cards">
        <div
          className="about-card fade-left"
          ref={(el) => (itemsRef.current[3] = el)}
        >
          <div className="about-card-icon">🎯</div>
          <h3>Our Mission</h3>
          <p>
            To serve as the definitive partner in our clients' financial journeys.
            Built on a foundation of unwavering transparency and tailored
            distribution strategies, we ensure every decision made today
            strengthens your financial foundation for years to come.
          </p>
        </div>

        <div
          className="about-card fade-right"
          ref={(el) => (itemsRef.current[4] = el)}
        >
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
        <div
          className="stat-item fade-up"
          ref={(el) => (itemsRef.current[5] = el)}
        >
          <h3>25+</h3>
          <p>Years of Experience</p>
        </div>
        <div
          className="stat-item fade-up"
          ref={(el) => (itemsRef.current[6] = el)}
        >
          <h3>1000+</h3>
          <p>Happy Clients</p>
        </div>
        <div
          className="stat-item fade-up"
          ref={(el) => (itemsRef.current[7] = el)}
        >
          <h3>ARN: 4195</h3>
          <p>AMFI Registered</p>
        </div>
        <div
          className="stat-item fade-up"
          ref={(el) => (itemsRef.current[8] = el)}
        >
          <h3>Since 2000</h3>
          <p>Trusted Since</p>
        </div>
      </div>
    </section>
  );
};

export default About;
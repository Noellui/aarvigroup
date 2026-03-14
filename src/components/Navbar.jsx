import React, { useEffect, useRef } from 'react';
import '../styles/Services.css';

const services = [
  {
    icon: '📈',
    title: 'Market Securities',
    description:
      'Tailored Mutual Fund distribution and SIP planning with a focus on long-term, systematic wealth compounding.',
  },
  {
    icon: '🌍',
    title: 'NRI Services',
    description:
      'Specialized investment solutions for Non-Resident Indians looking to invest and manage wealth back home with ease.',
  },
  {
    icon: '🛡️',
    title: 'Risk Mitigation',
    description:
      'Comprehensive Life and Health insurance strategies to ensure your legacy and your family remain protected.',
  },
  {
    icon: '🧾',
    title: 'Tax Planning',
    description:
      'Smart tax planning strategies to maximize your savings and invest in the most tax-efficient manner.',
  },
  {
    icon: '🏦',
    title: 'Fixed Income',
    description:
      'Capital preservation through G-Secs, PSU Bonds, and high-grade corporate deposits tailored to your risk profile.',
  },
  {
    icon: '📊',
    title: 'Portfolio Insights',
    description:
      'Objective, data-led reviews to optimize risk-return balance and ensure alignment with your financial goals.',
  },
];

const Services = () => {
  const itemsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    itemsRef.current.forEach((el) => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="services-section">
      <div className="services-tag fade-up" ref={(el) => (itemsRef.current[0] = el)}>
        Our Expertise
      </div>

      <h2 className="services-heading fade-up" ref={(el) => (itemsRef.current[1] = el)}>
        Core Services
      </h2>

      <div className="services-rule fade-up" ref={(el) => (itemsRef.current[2] = el)} />

      <p className="services-intro fade-up" ref={(el) => (itemsRef.current[3] = el)}>
        Our investment planning process integrates all aspects of your financial
        life into a single comprehensive plan that addresses your unique wealth
        management requirements.
      </p>

      <div className="services-grid">
        {services.map((service, i) => (
          <div
            key={i}
            className="service-card fade-up"
            ref={(el) => (itemsRef.current[4 + i] = el)}
          >
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>

      {/* How We Work */}
      <div className="how-we-work fade-up" ref={(el) => (itemsRef.current[11] = el)}>
        <h2 className="hww-heading">How We Work With You</h2>
        <p className="hww-sub">
          We assess your needs, resources, and financial goals — then build a plan around you.
        </p>
        <div className="hww-steps">
          {[
            { step: '01', label: 'Schedule a Meeting' },
            { step: '02', label: 'Understand Your Needs' },
            { step: '03', label: 'Financial Planning' },
            { step: '04', label: 'Invest' },
            { step: '05', label: 'Periodic Review' },
          ].map((item, i) => (
            <div key={i} className="hww-step">
              <div className="hww-step-number">{item.step}</div>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
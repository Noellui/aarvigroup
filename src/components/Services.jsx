import React, { useEffect, useRef } from 'react';
import '../styles/Services.css';

const services = [
  {
    icon: '📈',
    title: 'Mutual Fund & SIP',
    description:
      'A professionally-managed investment scheme to help you grow wealth systematically through one-time or monthly SIP investments.',
  },
  {
    icon: '🌍',
    title: 'NRI Services',
    description:
      'Specialized investment solutions for Non-Resident Indians looking to invest and manage wealth back home with ease.',
  },
  {
    icon: '🛡️',
    title: 'Insurance',
    description:
      'Life and health insurance solutions to protect you and your family against unforeseen financial risks.',
  },
  {
    icon: '🧾',
    title: 'Tax Planning',
    description:
      'Smart tax planning strategies to maximize your savings and ensure your portfolio is invested in the most tax-efficient manner.',
  },
  {
    icon: '🏦',
    title: 'Fixed Income',
    description:
      'Stable and predictable returns through bonds, FDs, and other fixed income instruments tailored to your risk profile.',
  },
  {
    icon: '📊',
    title: 'Portfolio Review',
    description:
      'Periodic monitoring and review of your investment portfolio to ensure it stays aligned with your financial goals.',
  },
];

const Services = () => {
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
    <section id="services" className="services-section">
      <div
        className="services-tag fade-up"
        ref={(el) => (itemsRef.current[0] = el)}
      >
        What We Offer
      </div>

      <h2
        className="services-heading fade-up"
        ref={(el) => (itemsRef.current[1] = el)}
      >
        Our Services
      </h2>

      <p
        className="services-intro fade-up"
        ref={(el) => (itemsRef.current[2] = el)}
      >
        Our investment planning process integrates all aspects of your financial
        life into a single comprehensive plan that addresses your unique wealth
        management requirements.
      </p>

      <div className="services-grid">
        {services.map((service, i) => (
          <div
            key={i}
            className="service-card fade-up"
            ref={(el) => (itemsRef.current[3 + i] = el)}
          >
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>

      {/* How We Work */}
      <div
        className="how-we-work fade-up"
        ref={(el) => (itemsRef.current[10] = el)}
      >
        <h2 className="hww-heading">How We Work With You</h2>
        <p className="hww-sub">
          We assess your needs, limitations, resources, and financial goals —
          then build a plan around you.
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
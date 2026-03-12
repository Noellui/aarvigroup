import React, { useState, useEffect } from 'react';
import '../styles/Hero.css';

const slides = [
  {
    title: "Your Trusted Wealth Management Partner",
    subtitle: "Building your financial future with clarity, trust & expertise.",
    bg: "#1a3c6e",
  },
  {
    title: "Invest Smart. Live Free.",
    subtitle: "Mutual Funds, SIP, Insurance & Tax Planning — all under one roof.",
    bg: "#0f2a4e",
  },
  {
    title: "Your Goals. Our Mission.",
    subtitle: "Personalized financial strategies tailored just for you.",
    bg: "#14345c",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero" style={{ backgroundColor: slides[current].bg }}>
      <div className="hero-content">
        <h1 className="hero-title">{slides[current].title}</h1>
        <p className="hero-subtitle">{slides[current].subtitle}</p>
        <div className="hero-buttons">
          <a href="/contact" className="btn-primary">Schedule a Meeting</a>
          <a href="/about" className="btn-secondary">Learn More</a>
        </div>
      </div>

      {/* Dots */}
      <div className="hero-dots">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === current ? 'active' : ''}`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
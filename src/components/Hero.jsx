import React, { useState, useEffect } from 'react';
import '../styles/Hero.css';

const slides = [
  {
    title: "A Steady Hand in Every Market.",
    subtitle: "Building your financial future with clarity, trust & expertise.",
    image: "/images/slide1.jpg",
  },
  {
    title: "Invest Smart. Live Free.",
    subtitle: "Mutual Funds, SIP, Insurance & Tax Planning — all under one roof.",
    image: "/images/slide2.jpg",
  },
  {
    title: "Your Goals. Our Mission.",
    subtitle: "Personalized financial strategies tailored just for you.",
    image: "/images/slide3.jpg",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="hero">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`hero-bg ${i === current ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        />
      ))}
      <div className="hero-overlay" />
      <div className="hero-content">
        <span className="hero-tag">Stewardship · Clarity · Discipline</span>
        <h1 className="hero-title">{slides[current].title}</h1>
        <p className="hero-subtitle">{slides[current].subtitle}</p>
        <div className="hero-buttons">
          <button className="btn-primary" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
            Schedule a Meeting
          </button>
          <button className="btn-secondary" onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>
            Learn More
          </button>
        </div>
      </div>
      <div className="hero-dots">
        {slides.map((_, i) => (
          <span key={i} className={`dot ${i === current ? 'active' : ''}`} onClick={() => setCurrent(i)} />
        ))}
      </div>
    </section>
  );
};

export default Hero;
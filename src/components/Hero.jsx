import React, { useState, useEffect } from 'react';
import '../styles/Hero.css';

const slides = [
  {
    eyebrow: "Stewardship · Clarity · Discipline",
    title: "A Steady Hand in\nEvery Market.",
    subtitle: "Building your financial future with clarity, trust, and 25 years of proven expertise.",
    image: "/images/slide1.jpg",
  },
  {
    eyebrow: "Mutual Funds · SIP · Insurance",
    title: "Invest Smart.\nLive Free.",
    subtitle: "Comprehensive wealth management solutions — all under one trusted roof.",
    image: "/images/slide2.jpg",
  },
  {
    eyebrow: "Personalized Financial Strategy",
    title: "Your Goals.\nOur Mission.",
    subtitle: "Tailored investment strategies crafted around your unique life and aspirations.",
    image: "/images/slide3.jpg",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <section id="hero" className="hero">

      {/* Background Images */}
      {slides.map((s, i) => (
        <div
          key={i}
          className={`hero-bg ${i === current ? 'active' : ''}`}
          style={{ backgroundImage: `url(${s.image})` }}
        />
      ))}

      {/* Overlays */}
      <div className="hero-overlay" />
      <div className="hero-lines" />

      {/* Content */}
      <div className="hero-content" key={current}>
        <span className="hero-eyebrow">{slide.eyebrow}</span>
        <div className="hero-rule" />
        <h1 className="hero-title">
          {slide.title.split('\n').map((line, i) => (
            <span key={i}>{i > 0 && <br />}{line}</span>
          ))}
        </h1>
        <p className="hero-subtitle">{slide.subtitle}</p>
        <div className="hero-buttons">
          <button
            className="btn-primary"
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          >
            Begin a Conversation
          </button>
          <button
            className="btn-secondary"
            onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
          >
            Our Approach
          </button>
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
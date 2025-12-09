// src/pages/About.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="about-page">
      <style>{`
        .about-page {
          font-family: 'Poppins', sans-serif;
          color: #222;
          background-color: #fafafa;
          line-height: 1.6;
        }

        .hero {
          background: url('/assets/gallery/gallery2.jpg') center/cover no-repeat;
          color: white;
          text-align: center;
          padding: 160px 20px;
          position: relative;
        }
        .hero::after {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.6);
        }
        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 800px;
          margin: 0 auto;
        }
        .hero h1 {
          font-size: 48px;
          margin-bottom: 16px;
          text-transform: uppercase;
          letter-spacing: 2px;
        }
        .hero p {
          font-size: 18px;
          opacity: 0.9;
        }

        .section {
          padding: 80px 20px;
          max-width: 1100px;
          margin: 0 auto;
          text-align: center;
        }
        .section h2 {
          font-size: 36px;
          margin-bottom: 20px;
          color: #111;
        }
        .section p {
          font-size: 17px;
          color: #555;
          margin-bottom: 40px;
        }

        /* STORY SECTION */
        .story {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 40px;
          text-align: left;
        }
        .story img {
          flex: 1 1 400px;
          width: 100%;
          border-radius: 10px;
          box-shadow: 0 6px 16px rgba(0,0,0,0.1);
        }
        .story-text {
          flex: 1 1 400px;
        }

        /* SERVICES GRID */
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 30px;
          margin-top: 40px;
        }
        .service-card {
          background: white;
          border-radius: 10px;
          padding: 30px 20px;
          box-shadow: 0 6px 14px rgba(0,0,0,0.08);
          transition: all 0.3s ease;
        }
        .service-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.12);
        }
        .service-card h3 {
          color: #111;
          margin-bottom: 10px;
          font-size: 20px;
        }

        /* TEAM PREVIEW */
        .team-preview {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 30px;
          margin-top: 40px;
        }
        .team-member {
          text-align: center;
        }
        .team-member img {
          width: 160px;
          height: 160px;
          object-fit: cover;
          border-radius: 50%;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
          margin-bottom: 10px;
        }

        /* CTA SECTION */
        .cta {
          background: #111;
          color: white;
          padding: 100px 20px;
          text-align: center;
        }
        .cta h2 {
          font-size: 34px;
          margin-bottom: 20px;
        }
        .cta a {
          text-decoration: none;
        }
        .cta button {
          padding: 12px 28px;
          font-size: 16px;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          background: #f8b400;
          color: #111;
          font-weight: bold;
          transition: background 0.3s;
        }
        .cta button:hover {
          background: #ffcc33;
        }

        @media (max-width: 768px) {
          .hero h1 { font-size: 36px; }
          .story { flex-direction: column; }
        }
      `}</style>

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <h1>About Bollo Media</h1>
          <p>
            Telling stories that move people — through film, photography, and creative production.
          </p>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="section">
        <h2>Our Story</h2>
        <div className="story">
          <div className="story-text">
            <p>
              Bollo Media was founded with a single vision — to turn moments into motion.
              What began as a passion project among young storytellers has evolved into a full-service
              production company, crafting narratives that inspire, educate, and connect.
            </p>
            <p>
              From local communities to commercial clients, we capture authenticity — because every frame,
              every sound, and every detail matters.
            </p>
          </div>
          <img src="/assets/gallery/gallery1.jpg" alt="Our Story" />
        </div>
      </section>

      {/* SERVICES */}
      <section className="section">
        <h2>What We Do</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>Film Production</h3>
            <p>From script to screen — we bring stories to life through cinematic visuals and emotion-driven direction.</p>
          </div>
          <div className="service-card">
            <h3>Photography</h3>
            <p>We capture moments, products, and people with authenticity and artistic precision.</p>
          </div>
          <div className="service-card">
            <h3>Audio Production</h3>
            <p>Sound design, scoring, and voiceovers that elevate storytelling and brand impact.</p>
          </div>
          <div className="service-card">
            <h3>Creative Direction</h3>
            <p>From concept development to execution — we guide every project with vision and style.</p>
          </div>
        </div>
      </section>

      {/* TEAM PREVIEW */}
      <section className="section">
        <h2>Meet The Team</h2>
        <div className="team-preview">
          <div className="team-member">
            <img src="/assets/team/team1.jpg" alt="Team Member 1" />
            <h4>Bongani — Director</h4>
          </div>
          <div className="team-member">
            <img src="/assets/team/team2.jpg" alt="Team Member 2" />
            <h4>Lerato — Cinematographer</h4>
          </div>
          <div className="team-member">
            <img src="/assets/team/team3.jpg" alt="Team Member 3" />
            <h4>Thabo — Editor</h4>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="section">
        <h2>Our Philosophy</h2>
        <p>
          We believe creativity builds bridges — between people, cultures, and generations.
          Every project is more than a production; it’s a chance to inspire and reflect
          the spirit of our communities.
        </p>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Ready to bring your story to life?</h2>
        <Link to="/contact">
          <button>Contact Us</button>
        </Link>
      </section>
    </div>
  );
}

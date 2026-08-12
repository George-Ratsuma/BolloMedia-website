// src/pages/About.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="about-page">
      <style>{`
        .about-page {
          font-family: "Inter", system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
          color: var(--text);
          background: #ffffff;
          line-height: 1.6;
        }

        .about-page h1,
        .about-page h2,
        .about-page h3 {
          font-family: "Playfair Display", serif;
        }

        /* =========================
           HERO
        ========================= */

        .about-hero {
          background: url('/assets/gallery/gallery2.jpg') center/cover no-repeat;
          color: white;
          text-align: center;
          padding: 160px 20px;
          position: relative;
        }

        .about-hero::after {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.58);
        }

        .about-hero-content {
          position: relative;
          z-index: 2;
          max-width: 800px;
          margin: 0 auto;
        }

        .about-hero h1 {
          font-size: 48px;
          margin: 0 0 16px;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .about-hero p {
          font-size: 18px;
          opacity: 0.92;
          margin: 0;
        }

        /* =========================
           GENERAL SECTIONS
        ========================= */

        .about-section {
          max-width: 1100px;
          margin: 0 auto;
          padding: 100px 24px;
        }

        .section-label {
          color: var(--accent);
          letter-spacing: 3px;
          text-transform: uppercase;
          font-size: 13px;
          font-weight: 600;
          margin-bottom: 12px;
        }

        .section-heading {
          font-size: 42px;
          line-height: 1.15;
          margin: 0 0 28px;
        }

        /* =========================
           OUR STORY
        ========================= */

        .story-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 70px;
          align-items: center;
        }

        .story-image {
          width: 100%;
          height: 560px;
          object-fit: cover;
          border-radius: 14px;
          box-shadow: 0 20px 45px rgba(0, 0, 0, 0.12);
        }

        .story-text {
          text-align: left;
        }

        .story-text p {
          color: var(--muted);
          font-size: 17px;
          line-height: 1.9;
          margin-bottom: 24px;
        }

        /* =========================
           WHAT WE DO
        ========================= */

        .services-section {
          background: var(--soft);
          max-width: none;
        }

        .services-inner {
          max-width: 1100px;
          margin: 0 auto;
          padding: 100px 24px;
        }

        .services-heading {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 55px;
        }

        .services-heading p {
          color: var(--muted);
          font-size: 17px;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 25px;
        }

        .service-card {
          background: #ffffff;
          border: 1px solid #eeeeee;
          border-radius: 14px;
          padding: 35px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .service-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
        }

        .service-number {
          color: var(--accent);
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 2px;
        }

        .service-card h3 {
          font-size: 23px;
          margin: 15px 0 12px;
        }

        .service-card p {
          color: var(--muted);
          margin: 0;
          line-height: 1.8;
        }

        /* =========================
           PHILOSOPHY
        ========================= */

        .philosophy-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 70px;
          align-items: center;
        }

        .philosophy-image {
          width: 100%;
          height: 470px;
          object-fit: cover;
          border-radius: 14px;
          box-shadow: 0 20px 45px rgba(0, 0, 0, 0.12);
        }

        .philosophy-text {
          text-align: left;
        }

        .philosophy-quote {
          font-family: "Playfair Display", serif;
          font-size: 30px;
          line-height: 1.35;
          margin: 0 0 30px;
          color: var(--text);
        }

        .philosophy-text p {
          color: var(--muted);
          font-size: 16px;
          line-height: 1.85;
          margin-bottom: 20px;
        }

        /* =========================
           MISSION
        ========================= */

        .mission-section {
          background: var(--soft);
          text-align: center;
          max-width: none;
        }

        .mission-inner {
          max-width: 850px;
          margin: 0 auto;
          padding: 110px 24px;
        }

        .mission-inner h2 {
          font-size: 44px;
          margin: 0 0 30px;
        }

        .mission-main {
          font-family: "Playfair Display", serif;
          font-size: 25px;
          line-height: 1.6;
          color: var(--text);
          margin-bottom: 25px;
        }

        .mission-support {
          color: var(--muted);
          font-size: 17px;
          line-height: 1.9;
        }

        /* =========================
           CTA
        ========================= */

        .cta {
          padding: 110px 24px;
          text-align: center;
          background: #ffffff;
        }

        .cta h2 {
          font-size: 38px;
          margin: 0 0 25px;
        }

        .cta p {
          color: var(--muted);
          margin-bottom: 30px;
        }

        .cta a {
          text-decoration: none;
        }

        /* =========================
           MOBILE
        ========================= */

        @media (max-width: 768px) {

          .about-hero {
            padding: 120px 20px;
          }

          .about-hero h1 {
            font-size: 36px;
          }

          .about-hero p {
            font-size: 16px;
          }

          .about-section {
            padding: 70px 20px;
          }

          .section-heading {
            font-size: 34px;
          }

          .story-layout,
          .philosophy-section {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .story-image {
            height: 400px;
          }

          .philosophy-image {
            height: 350px;
          }

          .services-inner {
            padding: 70px 20px;
          }

          .services-grid {
            grid-template-columns: 1fr;
          }

          .mission-inner {
            padding: 80px 20px;
          }

          .mission-inner h2 {
            font-size: 36px;
          }

          .mission-main {
            font-size: 21px;
          }

          .cta {
            padding: 80px 20px;
          }

          .cta h2 {
            font-size: 32px;
          }
        }
      `}</style>

      {/* HERO */}

      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About Bollo Media</h1>

          <p>
            Telling bold, authentic African stories through film,
            documentaries and digital media.
          </p>
        </div>
      </section>

      {/* OUR STORY */}

      <section className="about-section">
        <div className="story-layout">

          <img
            className="story-image"
            src="/assets/gallery/gallery1.jpg"
            alt="Bollo Media production"
          />

          <div className="story-text">

            <p className="section-label">
              Our Story
            </p>

            <h2 className="section-heading">
              Stories rooted in culture, people and experience.
            </h2>

            <p>
              Bollo Media is a South African film and media production
              company focused on creating bold, authentic African stories
              that entertain, inspire and spark meaningful conversations.
            </p>

            <p>
              We believe that some of the most powerful stories come from
              the people, cultures and communities around us. Our work
              reflects African culture and lived experiences, bringing
              stories to audiences through film, documentary, commercial
              and digital content.
            </p>

            <p>
              Founded by Debora Ratsuma, Bollo Media is committed to
              developing meaningful and engaging work while creating space
              for authentic African voices and emerging talent.
            </p>

          </div>

        </div>
      </section>

      {/* WHAT WE DO */}

      <section className="services-section">
        <div className="services-inner">

          <div className="services-heading">

            <p className="section-label">
              What We Do
            </p>

            <h2 className="section-heading">
              From an idea to a story worth telling.
            </h2>

            <p>
              We work across film, documentary, commercial and digital
              production to develop stories that connect with audiences.
            </p>

          </div>

          <div className="services-grid">

            <div className="service-card">
              <span className="service-number">01</span>

              <h3>Film & TV Production</h3>

              <p>
                From development through post-production, we bring stories
                to life through thoughtful production, strong visual
                storytelling and authentic creative direction.
              </p>
            </div>

            <div className="service-card">
              <span className="service-number">02</span>

              <h3>Script Development</h3>

              <p>
                We develop and refine stories from early concepts to
                screen-ready scripts, helping shape narratives that connect
                with audiences.
              </p>
            </div>

            <div className="service-card">
              <span className="service-number">03</span>

              <h3>Documentary Production</h3>

              <p>
                We create documentaries that explore real people,
                communities, cultures and experiences, giving authentic
                stories a platform.
              </p>
            </div>

            <div className="service-card">
              <span className="service-number">04</span>

              <h3>Commercial & Branded Content</h3>

              <p>
                We create engaging visual content for brands and
                organisations, combining storytelling with creative
                production to communicate ideas effectively.
              </p>
            </div>

            <div className="service-card">
              <span className="service-number">05</span>

              <h3>Creative Storytelling</h3>

              <p>
                We develop stories and creative concepts that reflect
                culture, identity and lived experiences while connecting
                with audiences in meaningful ways.
              </p>
            </div>

            <div className="service-card">
              <span className="service-number">06</span>

              <h3>Digital Media Production</h3>

              <p>
                We produce engaging digital content designed for today's
                audiences, helping stories and ideas reach people across
                modern media platforms.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* OUR PHILOSOPHY */}

      <section className="about-section">
        <div className="philosophy-section">

          <div className="philosophy-text">

            <p className="section-label">
              Our Philosophy
            </p>

            <h2 className="section-heading">
              Every story carries something worth sharing.
            </h2>

            <p className="philosophy-quote">
              We believe storytelling has the power to connect people,
              preserve culture and create meaningful conversations.
            </p>

            <p>
              Every story carries something worth sharing. Whether it comes
              from an individual, a community, a brand or a lived experience,
              we aim to tell it with authenticity, creativity and purpose.
            </p>

            <p>
              Our work is rooted in the belief that African stories deserve
              to be told from authentic perspectives and shared with audiences
              both locally and beyond.
            </p>

          </div>

          <img
            className="philosophy-image"
            src="/assets/gallery/gallery2.jpg"
            alt="Bollo Media storytelling"
          />

        </div>
      </section>

      {/* OUR MISSION */}

      <section className="mission-section">
        <div className="mission-inner">

          <p className="section-label">
            Our Mission
          </p>

          <h2>
            Stories that matter. Voices that deserve to be heard.
          </h2>

          <p className="mission-main">
            Our mission is to tell impactful stories, nurture emerging
            talent, and contribute to the growth of the South African
            film industry.
          </p>

          <p className="mission-support">
            We aim to create opportunities for new voices while producing
            work that reflects the diversity, creativity and experiences
            of South African communities.
          </p>

        </div>
      </section>

      {/* CTA */}

      <section className="cta">

        <h2>
          Ready to bring your story to life?
        </h2>

        <p>
          Let's create something meaningful together.
        </p>

        <Link to="/contact">
          <button className="btn-accent">
            Contact Us
          </button>
        </Link>

      </section>

    </div>
  );
}
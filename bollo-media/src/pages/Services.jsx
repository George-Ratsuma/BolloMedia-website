// src/pages/Services.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <div className="services-page">
      <style>{`
        .services-page {
          font-family: "Inter", system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
          color: var(--text);
          background: #ffffff;
          line-height: 1.6;
        }

        .services-page h1,
        .services-page h2,
        .services-page h3 {
          font-family: "Playfair Display", serif;
        }

        /* =========================
           HERO
        ========================= */

        .services-hero {
          background: url('/assets/gallery/gallery2.jpg') center/cover no-repeat;
          color: white;
          text-align: center;
          padding: 150px 20px;
          position: relative;
        }

        .services-hero::after {
          content: "";
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.58);
        }

        .services-hero-content {
          position: relative;
          z-index: 2;
          max-width: 800px;
          margin: 0 auto;
        }

        .services-hero h1 {
          font-size: 52px;
          margin: 0 0 18px;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .services-hero p {
          font-size: 19px;
          opacity: 0.92;
          margin: 0;
        }

        /* =========================
           INTRO
        ========================= */

        .services-intro {
          max-width: 850px;
          margin: 0 auto;
          padding: 100px 24px 70px;
          text-align: center;
        }

        .section-label {
          color: var(--accent);
          letter-spacing: 3px;
          text-transform: uppercase;
          font-size: 13px;
          font-weight: 600;
          margin-bottom: 14px;
        }

        .services-intro h2 {
          font-size: 42px;
          line-height: 1.2;
          margin: 0 0 25px;
        }

        .services-intro p {
          color: var(--muted);
          font-size: 17px;
          line-height: 1.9;
          margin: 0;
        }

        /* =========================
           SERVICES
        ========================= */

        .services-list {
          max-width: 1100px;
          margin: 0 auto;
          padding: 30px 24px 100px;
        }

        .service-item {
          display: grid;
          grid-template-columns: 90px 1fr;
          gap: 35px;
          padding: 55px 0;
          border-top: 1px solid #e8e8e8;
        }

        .service-number {
          color: var(--accent);
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 2px;
          padding-top: 8px;
        }

        .service-content h2 {
          font-size: 32px;
          margin: 0 0 15px;
        }

        .service-content > p {
          color: var(--muted);
          font-size: 17px;
          line-height: 1.85;
          max-width: 800px;
          margin: 0 0 25px;
        }

        .service-details {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .service-detail {
          border: 1px solid #e5e5e5;
          border-radius: 30px;
          padding: 8px 15px;
          font-size: 13px;
          color: #555;
          background: #fafafa;
        }

        /* =========================
           PROCESS
        ========================= */

        .process-section {
          background: var(--soft);
          padding: 100px 24px;
        }

        .process-inner {
          max-width: 1100px;
          margin: 0 auto;
        }

        .process-heading {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 60px;
        }

        .process-heading h2 {
          font-size: 42px;
          margin: 0 0 20px;
        }

        .process-heading p {
          color: var(--muted);
          font-size: 17px;
        }

        .process-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 25px;
        }

        .process-card {
          background: #ffffff;
          border-radius: 14px;
          padding: 30px 25px;
          border: 1px solid #eeeeee;
        }

        .process-card span {
          color: var(--accent);
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 2px;
        }

        .process-card h3 {
          font-size: 21px;
          margin: 15px 0 10px;
        }

        .process-card p {
          color: var(--muted);
          font-size: 14px;
          line-height: 1.7;
          margin: 0;
        }

        /* =========================
           CTA
        ========================= */

        .services-cta {
          padding: 110px 24px;
          text-align: center;
        }

        .services-cta h2 {
          font-size: 40px;
          margin: 0 0 20px;
        }

        .services-cta p {
          color: var(--muted);
          margin: 0 auto 30px;
          max-width: 600px;
        }

        .services-cta a {
          text-decoration: none;
        }

        /* =========================
           MOBILE
        ========================= */

        @media (max-width: 800px) {
          .process-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .services-hero {
            padding: 110px 20px;
          }

          .services-hero h1 {
            font-size: 38px;
          }

          .services-hero p {
            font-size: 16px;
          }

          .services-intro {
            padding: 70px 20px 50px;
          }

          .services-intro h2 {
            font-size: 34px;
          }

          .services-list {
            padding: 20px 20px 70px;
          }

          .service-item {
            grid-template-columns: 1fr;
            gap: 10px;
            padding: 45px 0;
          }

          .service-number {
            padding: 0;
          }

          .service-content h2 {
            font-size: 28px;
          }

          .process-section {
            padding: 70px 20px;
          }

          .process-heading h2 {
            font-size: 34px;
          }

          .process-grid {
            grid-template-columns: 1fr;
          }

          .services-cta {
            padding: 80px 20px;
          }

          .services-cta h2 {
            font-size: 32px;
          }
        }
      `}</style>

      {/* HERO */}

      <section className="services-hero">
        <div className="services-hero-content">
          <h1>Our Services</h1>

          <p>
            Turning ideas into stories that connect, inspire and leave an impact.
          </p>
        </div>
      </section>

      {/* INTRO */}

      <section className="services-intro">

        <p className="section-label">
          What We Do
        </p>

        <h2>
          From concept to final frame.
        </h2>

        <p>
          Bollo Media works across film, documentary, commercial and
          digital production to develop and deliver stories for audiences,
          brands and organisations. From the first idea to the finished
          production, we bring together creative storytelling and
          thoughtful production.
        </p>

      </section>

      {/* SERVICES LIST */}

      <section className="services-list">

        {/* 01 */}

        <div className="service-item">

          <div className="service-number">
            01
          </div>

          <div className="service-content">

            <h2>Film & TV Production</h2>

            <p>
              From development to post-production, we bring stories to
              life through strong visual storytelling and thoughtful
              production. We work across the production process to turn
              ideas and scripts into compelling screen experiences.
            </p>

            <div className="service-details">
              <span className="service-detail">
                Development
              </span>

              <span className="service-detail">
                Producing
              </span>

              <span className="service-detail">
                Production Management
              </span>

              <span className="service-detail">
                Post-Production
              </span>
            </div>

          </div>

        </div>

        {/* 02 */}

        <div className="service-item">

          <div className="service-number">
            02
          </div>

          <div className="service-content">

            <h2>Script Development</h2>

            <p>
              Great productions begin with strong stories. We help develop
              and refine ideas into compelling narratives through
              scriptwriting, story development and story consulting.
            </p>

            <div className="service-details">
              <span className="service-detail">
                Scriptwriting
              </span>

              <span className="service-detail">
                Story Development
              </span>

              <span className="service-detail">
                Story Consulting
              </span>
            </div>

          </div>

        </div>

        {/* 03 */}

        <div className="service-item">

          <div className="service-number">
            03
          </div>

          <div className="service-content">

            <h2>Documentary Production</h2>

            <p>
              We create documentaries that explore real people, cultures,
              communities and lived experiences. Our approach focuses on
              authentic storytelling that informs, preserves and connects.
            </p>

            <div className="service-details">
              <span className="service-detail">
                Research
              </span>

              <span className="service-detail">
                Production
              </span>

              <span className="service-detail">
                Interviews
              </span>

              <span className="service-detail">
                Post-Production
              </span>
            </div>

          </div>

        </div>

        {/* 04 */}

        <div className="service-item">

          <div className="service-number">
            04
          </div>

          <div className="service-content">

            <h2>Commercial & Branded Content</h2>

            <p>
              We create visual content for brands and organisations that
              combines creative storytelling with clear communication.
              Our productions help businesses communicate their identity,
              products and ideas through engaging content.
            </p>

            <div className="service-details">
              <span className="service-detail">
                Brand Films
              </span>

              <span className="service-detail">
                Commercials
              </span>

              <span className="service-detail">
                Campaign Content
              </span>

              <span className="service-detail">
                Promotional Content
              </span>
            </div>

          </div>

        </div>

        {/* 05 */}

        <div className="service-item">

          <div className="service-number">
            05
          </div>

          <div className="service-content">

            <h2>Creative Storytelling</h2>

            <p>
              We develop creative concepts and stories that reflect
              culture, identity and lived experiences. Our goal is to
              create work that feels authentic while connecting with
              audiences in meaningful ways.
            </p>

            <div className="service-details">
              <span className="service-detail">
                Creative Development
              </span>

              <span className="service-detail">
                Concept Development
              </span>

              <span className="service-detail">
                Content Development
              </span>
            </div>

          </div>

        </div>

        {/* 06 */}

        <div className="service-item">

          <div className="service-number">
            06
          </div>

          <div className="service-content">

            <h2>Digital Media Production</h2>

            <p>
              We produce engaging digital content for modern audiences,
              brands and organisations. From social media content to
              digital campaigns, we help ideas reach audiences across
              today's media platforms.
            </p>

            <div className="service-details">
              <span className="service-detail">
                Digital Content
              </span>

              <span className="service-detail">
                Social Media Content
              </span>

              <span className="service-detail">
                Photography
              </span>

              <span className="service-detail">
                Behind-the-Scenes Coverage
              </span>
            </div>

          </div>

        </div>

      </section>

      {/* PRODUCTION PROCESS */}

      <section className="process-section">

        <div className="process-inner">

          <div className="process-heading">

            <p className="section-label">
              Our Approach
            </p>

            <h2>
              From idea to screen.
            </h2>

            <p>
              Every production is different, but our process is built around
              understanding the story, planning the production and delivering
              work with purpose.
            </p>

          </div>

          <div className="process-grid">

            <div className="process-card">
              <span>01</span>

              <h3>Discover</h3>

              <p>
                We understand the idea, audience, goals and story behind
                every project.
              </p>
            </div>

            <div className="process-card">
              <span>02</span>

              <h3>Develop</h3>

              <p>
                We shape concepts, scripts and creative direction into
                a clear production vision.
              </p>
            </div>

            <div className="process-card">
              <span>03</span>

              <h3>Produce</h3>

              <p>
                We manage the production process and bring the creative
                vision to life.
              </p>
            </div>

            <div className="process-card">
              <span>04</span>

              <h3>Deliver</h3>

              <p>
                We refine the final work through post-production and
                prepare it for its intended audience.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="services-cta">

        <h2>
          Have a story in mind?
        </h2>

        <p>
          Whether you're developing a film, building a brand or looking
          for creative production support, we'd love to hear about it.
        </p>

        <Link to="/contact">
          <button className="btn-accent">
            Let's Talk
          </button>
        </Link>

      </section>

    </div>
  );
}
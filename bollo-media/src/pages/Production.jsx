// src/pages/Production.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Production() {
  return (
    <div className="production-page">
      <style>{`
        .production-page {
          font-family: "Inter", system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
          color: var(--text);
          background: #ffffff;
          line-height: 1.6;
        }

        .production-page h1,
        .production-page h2,
        .production-page h3 {
          font-family: "Playfair Display", serif;
        }

        /* =========================
           HERO
        ========================= */

        .production-hero {
          height: 78vh;
          min-height: 560px;
          background: url('/assets/gallery/feat1.jpg') center/cover no-repeat;
          position: relative;
          display: flex;
          align-items: flex-end;
        }

        .production-hero::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.78),
            rgba(0, 0, 0, 0.08) 70%
          );
        }

        .production-hero-content {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 1100px;
          margin: 0 auto;
          padding: 70px 24px;
          color: white;
        }

        .production-label {
          color: #d4aa69;
          letter-spacing: 4px;
          text-transform: uppercase;
          font-size: 13px;
          font-weight: 600;
          margin-bottom: 14px;
        }

        .production-hero h1 {
          font-size: clamp(48px, 7vw, 88px);
          line-height: 0.95;
          margin: 0 0 18px;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .production-hero p {
          margin: 0;
          font-size: 18px;
          opacity: 0.9;
        }

        /* =========================
           FILM DETAILS
        ========================= */

        .film-details {
          max-width: 1100px;
          margin: 0 auto;
          padding: 100px 24px;
          display: grid;
          grid-template-columns: 1.3fr 0.7fr;
          gap: 80px;
          align-items: start;
        }

        .film-intro h2 {
          font-size: 42px;
          margin: 0 0 25px;
          line-height: 1.15;
        }

        .film-intro p {
          color: var(--muted);
          font-size: 18px;
          line-height: 1.9;
          max-width: 680px;
          margin: 0;
        }

        .film-meta {
          border-left: 1px solid #dddddd;
          padding-left: 40px;
        }

        .meta-item {
          padding: 18px 0;
          border-bottom: 1px solid #eeeeee;
        }

        .meta-item:first-child {
          padding-top: 0;
        }

        .meta-label {
          display: block;
          color: var(--accent);
          text-transform: uppercase;
          letter-spacing: 2px;
          font-size: 11px;
          font-weight: 700;
          margin-bottom: 5px;
        }

        .meta-value {
          font-size: 18px;
          font-weight: 500;
        }

        /* =========================
           STORY
        ========================= */

        .story-section {
          background: var(--soft);
          padding: 110px 24px;
        }

        .story-inner {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: 90px;
          align-items: start;
        }

        .story-heading {
          position: sticky;
          top: 100px;
        }

        .story-heading span {
          color: var(--accent);
          text-transform: uppercase;
          letter-spacing: 3px;
          font-size: 13px;
          font-weight: 600;
        }

        .story-heading h2 {
          font-size: 52px;
          line-height: 1;
          margin: 15px 0 0;
        }

        .story-copy p {
          color: var(--muted);
          font-size: 18px;
          line-height: 1.9;
          margin: 0 0 28px;
        }

        /* =========================
           BEHIND THE PRODUCTION
        ========================= */

        .bts-section {
          max-width: 1100px;
          margin: 0 auto;
          padding: 110px 24px;
        }

        .bts-heading {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 30px;
          margin-bottom: 50px;
        }

        .bts-heading h2 {
          font-size: 46px;
          margin: 0;
          line-height: 1;
        }

        .bts-heading p {
          color: var(--muted);
          max-width: 420px;
          margin: 0;
        }

        .bts-grid {
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: 20px;
        }

        .bts-column {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .bts-image {
          width: 100%;
          display: block;
          object-fit: cover;
          border-radius: 10px;
        }

        .bts-large {
          height: 620px;
        }

        .bts-small {
          height: 290px;
        }

        /* =========================
           CLOSING
        ========================= */

        .production-closing {
          background: #111111;
          color: white;
          padding: 110px 24px;
        }

        .closing-inner {
          max-width: 900px;
          margin: 0 auto;
          text-align: center;
        }

        .closing-inner p {
          color: #cccccc;
          font-family: "Playfair Display", serif;
          font-size: clamp(24px, 3vw, 38px);
          line-height: 1.45;
          margin: 0 0 40px;
        }

        .closing-inner a {
          text-decoration: none;
        }

        .closing-button {
          display: inline-block;
          background: var(--accent);
          color: white;
          padding: 13px 25px;
          border-radius: 6px;
          font-weight: 600;
          text-decoration: none;
          transition: transform 0.2s ease, opacity 0.2s ease;
        }

        .closing-button:hover {
          transform: translateY(-2px);
          opacity: 0.9;
        }

        /* =========================
           MOBILE
        ========================= */

        @media (max-width: 800px) {
          .production-hero {
            height: 65vh;
            min-height: 480px;
          }

          .film-details {
            grid-template-columns: 1fr;
            gap: 50px;
            padding: 75px 20px;
          }

          .film-meta {
            border-left: none;
            border-top: 1px solid #dddddd;
            padding-left: 0;
            padding-top: 20px;
          }

          .story-section {
            padding: 75px 20px;
          }

          .story-inner {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .story-heading {
            position: static;
          }

          .story-heading h2 {
            font-size: 42px;
          }

          .bts-section {
            padding: 75px 20px;
          }

          .bts-heading {
            display: block;
          }

          .bts-heading h2 {
            margin-bottom: 20px;
          }

          .bts-grid {
            grid-template-columns: 1fr;
          }

          .bts-large {
            height: 450px;
          }

          .bts-small {
            height: 300px;
          }

          .production-closing {
            padding: 80px 20px;
          }
        }

        @media (max-width: 500px) {
          .production-hero-content {
            padding: 45px 20px;
          }

          .production-hero h1 {
            font-size: 48px;
          }

          .film-intro h2 {
            font-size: 34px;
          }

          .story-heading h2 {
            font-size: 36px;
          }

          .bts-heading h2 {
            font-size: 38px;
          }
        }
      `}</style>

      {/* =========================
          HERO
      ========================= */}

      <section className="production-hero">
        <div className="production-hero-content">

          <div className="production-label">
            A Bollo Media Production
          </div>

          <h1>
            The Keyholder
          </h1>

          <p>
            A short film exploring culture, identity and lived experience.
          </p>

        </div>
      </section>

      {/* =========================
          FILM DETAILS
      ========================= */}

      <section className="film-details">

        <div className="film-intro">

          <h2>
            A story rooted in culture.
          </h2>

          <p>
            The Keyholder is a heartfelt short film exploring the beautiful
            culture of the Limpopo Pedi Tribe. Through its story and visual
            language, the film highlights the importance of culture,
            identity and the experiences that connect generations.
          </p>

        </div>

        <div className="film-meta">

          <div className="meta-item">
            <span className="meta-label">
              Released
            </span>

            <span className="meta-value">
              2025
            </span>
          </div>

          <div className="meta-item">
            <span className="meta-label">
              Genre
            </span>

            <span className="meta-value">
              Drama
            </span>
          </div>

          <div className="meta-item">
            <span className="meta-label">
              Duration
            </span>

            <span className="meta-value">
              40 Minutes
            </span>
          </div>

          <div className="meta-item">
            <span className="meta-label">
              Production
            </span>

            <span className="meta-value">
              Bollo Media
            </span>
          </div>

        </div>

      </section>

      {/* =========================
          STORY
      ========================= */}

      <section className="story-section">

        <div className="story-inner">

          <div className="story-heading">

            <span>
              The Story
            </span>

            <h2>
              More than a film.
            </h2>

          </div>

          <div className="story-copy">

            <p>
              The Keyholder explores the beauty of the Limpopo Pedi Tribe
              and the cultural experiences that shape identity and
              community.
            </p>

            <p>
              The film is rooted in the belief that culture is not simply
              something we inherit. It is something we experience, preserve
              and pass forward.
            </p>

            <p>
              Through this production, Bollo Media aims to tell an authentic
              story while celebrating the people, traditions and experiences
              that make African communities unique.
            </p>

          </div>

        </div>

      </section>

      {/* =========================
          BEHIND THE PRODUCTION
      ========================= */}

      <section className="bts-section">

        <div className="bts-heading">

          <div>
            <p className="production-label">
              Behind The Production
            </p>

            <h2>
              Behind the scenes.
            </h2>
          </div>

          <p>
            A look at the people, moments and work behind The Keyholder.
          </p>

        </div>

        <div className="bts-grid">

          <div className="bts-column">

            <img
              className="bts-image bts-large"
              src="/assets/bts/bts1.JPG"
              alt="Behind the scenes of The Keyholder"
            />

          </div>

          <div className="bts-column">

            <img
              className="bts-image bts-small"
              src="/assets/gallery/gallery2.jpg"
              alt="The Keyholder production"
            />

            <img
              className="bts-image bts-small"
              src="/assets/gallery/gallery1.jpg"
              alt="Bollo Media production"
            />

          </div>

        </div>

      </section>

      {/* =========================
          CLOSING
      ========================= */}

      <section className="production-closing">

        <div className="closing-inner">

          <p>
            The Keyholder is the beginning of Bollo Media's journey to tell
            stories rooted in African culture, identity and experience.
          </p>

          <Link to="/contact" className="closing-button">
            Work With Bollo Media
          </Link>

        </div>

      </section>

    </div>
  );
}
// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container-max">

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.5fr 1fr 1fr",
            gap: "50px",
            padding: "50px 0 40px",
          }}
        >

          {/* BRAND */}

          <div>
            <h2
              className="font-display"
              style={{
                margin: "0 0 15px",
                fontSize: "28px",
              }}
            >
              BOLLO MEDIA
            </h2>

            <p
              style={{
                color: "var(--muted)",
                maxWidth: "400px",
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              A South African film and media production company
              creating bold, authentic African stories that entertain,
              inspire and spark meaningful conversations.
            </p>
          </div>

          {/* NAVIGATION */}

          <div>
            <p
              style={{
                color: "var(--accent)",
                textTransform: "uppercase",
                letterSpacing: "2px",
                fontSize: "11px",
                fontWeight: "700",
                marginBottom: "18px",
              }}
            >
              Explore
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/services">Services</Link>
              <Link to="/production">Production</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>

          {/* CONTACT */}

          <div>
            <p
              style={{
                color: "var(--accent)",
                textTransform: "uppercase",
                letterSpacing: "2px",
                fontSize: "11px",
                fontWeight: "700",
                marginBottom: "18px",
              }}
            >
              Contact
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <a href="mailto:mediabollo@gmail.com">
                mediabollo@gmail.com
              </a>

              <a href="tel:0711335187">
                071 133 5187
              </a>
            </div>
          </div>

        </div>

        {/* BOTTOM */}

        <div
          style={{
            borderTop: "1px solid #e6e6e6",
            padding: "22px 0",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "15px",
            fontSize: "13px",
            color: "var(--muted)",
          }}
        >

          <div>
            © {new Date().getFullYear()} Bollo Media. All rights reserved.
          </div>

          <div
            style={{
              display: "flex",
              gap: "18px",
            }}
          >
            <a href="#" aria-label="Instagram">
              Instagram
            </a>

            <a href="#" aria-label="YouTube">
              YouTube
            </a>

            <a href="#" aria-label="LinkedIn">
              LinkedIn
            </a>
          </div>

        </div>

      </div>

      {/* MOBILE */}

      <style>{`
        .footer a {
          color: var(--text);
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .footer a:hover {
          color: var(--accent);
        }

        @media (max-width: 700px) {
          .footer .container-max > div:first-child {
            grid-template-columns: 1fr !important;
            gap: 35px !important;
          }

          .footer .container-max > div:last-child {
            flex-direction: column;
            align-items: flex-start !important;
          }
        }
      `}</style>

    </footer>
  );
}
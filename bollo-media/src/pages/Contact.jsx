// src/pages/Contact.jsx
import React from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const [state, handleSubmit] = useForm("xeajkqqj");

  if (state.succeeded) {
    return (
      <div className="contact-page">
        <style>{`
          .contact-success {
            min-height: 70vh;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding: 60px 20px;
          }

          .contact-success-content {
            max-width: 650px;
          }

          .contact-success h1 {
            font-family: "Playfair Display", serif;
            font-size: clamp(42px, 6vw, 68px);
            margin: 0 0 20px;
          }

          .contact-success p {
            color: var(--muted);
            font-size: 18px;
            line-height: 1.8;
            margin: 0;
          }
        `}</style>

        <section className="contact-success">
          <div className="contact-success-content">
            <div className="contact-label">Message Sent</div>
            <h1>Thank You.</h1>
            <p>
              Your message has been sent successfully. The Bollo Media team
              will get back to you soon.
            </p>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="contact-page">
      <style>{`
        .contact-page {
          font-family: "Inter", system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
          color: var(--text);
          background: #ffffff;
          line-height: 1.6;
        }

        .contact-page h1,
        .contact-page h2 {
          font-family: "Playfair Display", serif;
        }

        /* =========================
           HERO
        ========================= */

        .contact-hero {
          min-height: 55vh;
          background: url('/assets/gallery/gallery2.jpg') center/cover no-repeat;
          position: relative;
          display: flex;
          align-items: flex-end;
        }

        .contact-hero::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.75),
            rgba(0, 0, 0, 0.12)
          );
        }

        .contact-hero-content {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 1100px;
          margin: 0 auto;
          padding: 70px 24px;
          color: white;
        }

        .contact-label {
          color: #d4aa69;
          letter-spacing: 4px;
          text-transform: uppercase;
          font-size: 13px;
          font-weight: 600;
          margin-bottom: 14px;
        }

        .contact-hero h1 {
          font-size: clamp(50px, 7vw, 82px);
          line-height: 0.95;
          margin: 0 0 20px;
        }

        .contact-hero p {
          max-width: 600px;
          font-size: 18px;
          opacity: 0.9;
          margin: 0;
        }

        /* =========================
           CONTACT CONTENT
        ========================= */

        .contact-content {
          max-width: 1100px;
          margin: 0 auto;
          padding: 100px 24px;
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: 90px;
          align-items: start;
        }

        /* =========================
           CONTACT INFO
        ========================= */

        .contact-info {
          position: sticky;
          top: 100px;
        }

        .contact-info h2 {
          font-size: 42px;
          line-height: 1.1;
          margin: 0 0 25px;
        }

        .contact-info > p {
          color: var(--muted);
          font-size: 16px;
          line-height: 1.8;
          margin: 0 0 40px;
        }

        .contact-detail {
          padding: 20px 0;
          border-top: 1px solid #e5e5e5;
        }

        .contact-detail:last-child {
          border-bottom: 1px solid #e5e5e5;
        }

        .contact-detail-label {
          display: block;
          color: var(--accent);
          text-transform: uppercase;
          letter-spacing: 2px;
          font-size: 11px;
          font-weight: 700;
          margin-bottom: 5px;
        }

        .contact-detail a {
          color: var(--text);
          text-decoration: none;
          font-size: 17px;
        }

        .contact-detail a:hover {
          color: var(--accent);
        }

        /* =========================
           FORM
        ========================= */

        .contact-form-wrapper {
          background: var(--soft);
          padding: 45px;
          border-radius: 14px;
        }

        .contact-form-wrapper h2 {
          font-size: 32px;
          margin: 0 0 8px;
        }

        .form-intro {
          color: var(--muted);
          margin: 0 0 35px;
        }

        .form-group {
          margin-bottom: 22px;
        }

        .form-group label {
          display: block;
          font-size: 13px;
          font-weight: 600;
          margin-bottom: 8px;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 13px 14px;
          border: 1px solid #dddddd;
          border-radius: 6px;
          background: #ffffff;
          color: var(--text);
          font-family: inherit;
          font-size: 15px;
          outline: none;
          transition: border-color 0.2s ease;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          border-color: var(--accent);
        }

        .form-group textarea {
          min-height: 150px;
          resize: vertical;
        }

        .submit-button {
          border: none;
          background: var(--accent);
          color: white;
          padding: 13px 25px;
          border-radius: 6px;
          font-family: inherit;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: transform 0.2s ease, opacity 0.2s ease;
        }

        .submit-button:hover {
          transform: translateY(-2px);
          opacity: 0.9;
        }

        /* =========================
           FOOTER MESSAGE
        ========================= */

        .contact-bottom {
          border-top: 1px solid #eeeeee;
          padding: 70px 24px;
          text-align: center;
        }

        .contact-bottom p {
          font-family: "Playfair Display", serif;
          font-size: 28px;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.4;
        }

        /* =========================
           MOBILE
        ========================= */

        @media (max-width: 800px) {
          .contact-hero {
            min-height: 50vh;
          }

          .contact-content {
            grid-template-columns: 1fr;
            gap: 60px;
            padding: 75px 20px;
          }

          .contact-info {
            position: static;
          }

          .contact-info h2 {
            font-size: 36px;
          }

          .contact-form-wrapper {
            padding: 30px 25px;
          }

          .contact-bottom {
            padding: 60px 20px;
          }
        }

        @media (max-width: 500px) {
          .contact-hero-content {
            padding: 50px 20px;
          }

          .contact-hero h1 {
            font-size: 48px;
          }

          .contact-form-wrapper {
            padding: 25px 20px;
          }

          .contact-bottom p {
            font-size: 24px;
          }
        }
      `}</style>

      {/* HERO */}

      <section className="contact-hero">
        <div className="contact-hero-content">

          <div className="contact-label">
            Let's Create
          </div>

          <h1>
            Get In Touch
          </h1>

          <p>
            Have a story, idea or project in mind? Let's talk about how
            Bollo Media can help bring it to life.
          </p>

        </div>
      </section>

      {/* CONTACT CONTENT */}

      <section className="contact-content">

        {/* CONTACT INFORMATION */}

        <div className="contact-info">

          <h2>
            Let's start a conversation.
          </h2>

          <p>
            Whether you're developing a film, looking for production
            support, creating content for your organisation or simply
            want to discuss an idea, we'd love to hear from you.
          </p>

          <div className="contact-detail">

            <span className="contact-detail-label">
              Email
            </span>

            <a href="mailto:mediabollo@gmail.com">
              mediabollo@gmail.com
            </a>

          </div>

          <div className="contact-detail">

            <span className="contact-detail-label">
              Phone
            </span>

            <a href="tel:0711335187">
              071 133 5187
            </a>

          </div>

          <div className="contact-detail">

            <span className="contact-detail-label">
              Social
            </span>

            <span>
              Follow Bollo Media for updates and
              behind-the-scenes content.
            </span>

          </div>

        </div>

        {/* FORM */}

        <div className="contact-form-wrapper">

          <h2>
            Tell us about your project.
          </h2>

          <p className="form-intro">
            Send us a message and we'll get back to you.
          </p>

          <form onSubmit={handleSubmit}>

            <div className="form-group">

              <label htmlFor="name">
                Full Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                required
              />

            </div>

            <div className="form-group">

              <label htmlFor="email">
                Email Address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="Your email"
                required
              />

            </div>

            <div className="form-group">

              <label htmlFor="phone">
                Phone
              </label>

              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Your phone number"
              />

            </div>

            <div className="form-group">

              <label htmlFor="message">
                Tell us about your project
              </label>

              <textarea
                id="message"
                name="message"
                placeholder="Tell us a little about your idea, project or enquiry..."
                required
              />

            </div>

            {state.errors && (
              <p style={{ color: "#b00020", marginBottom: "20px" }}>
                Something went wrong. Please check your details and try again.
              </p>
            )}

            <button
              type="submit"
              className="submit-button"
              disabled={state.submitting}
            >
              {state.submitting ? "Sending..." : "Send Message"}
            </button>

          </form>

        </div>

      </section>

      {/* CLOSING */}

      <section className="contact-bottom">

        <p>
          Every great story starts with an idea.
          Let's see where yours can go.
        </p>

      </section>

    </div>
  );
}
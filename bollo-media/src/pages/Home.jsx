// src/pages/Home.jsx
import React from 'react'
import { motion } from 'framer-motion'
import Hero from '../components/Hero'

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0 }
}

export default function Home() {

  return (
    <div>

      {/* =========================
          HERO
      ========================= */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Hero />
      </motion.div>


      <main>

        {/* =========================
            LATEST PRODUCTION
        ========================= */}

        <section
          style={{
            padding: "100px 0",
            background: "#fafafa"
          }}
        >

          <div className="container-max">

            <div
              style={{
                marginBottom: "50px"
              }}
            >

              <p
                style={{
                  letterSpacing: "4px",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                  fontWeight: "600",
                  fontSize: "13px",
                  marginBottom: "12px"
                }}
              >
                Our Latest Production
              </p>

              <h2
                className="font-display"
                style={{
                  fontSize: "clamp(2.5rem, 5vw, 4rem)",
                  margin: 0,
                  lineHeight: 1
                }}
              >
                The Keyholder
              </h2>

            </div>


            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              style={{
                display: "grid",
                gridTemplateColumns: "1.15fr 0.85fr",
                gap: "60px",
                alignItems: "center"
              }}
            >

              {/* FILM IMAGE */}

              <div>

                <img
                  src="/assets/gallery/feat1.jpg"
                  alt="The Keyholder"
                  style={{
                    width: "100%",
                    display: "block",
                    borderRadius: "4px"
                  }}
                />

              </div>


              {/* FILM INFORMATION */}

              <div>

                <p
                  className="text-muted"
                  style={{
                    fontSize: "17px",
                    lineHeight: 1.8,
                    marginBottom: "30px"
                  }}
                >
                  A heartfelt short film exploring the beautiful
                  culture of the Limpopo Pedi Tribe.
                </p>


                <div
                  style={{
                    borderTop: "1px solid #ddd",
                    borderBottom: "1px solid #ddd",
                    padding: "20px 0",
                    marginBottom: "30px"
                  }}
                >

                  <p style={{ margin: "7px 0" }}>
                    <strong>Released:</strong> 2025
                  </p>

                  <p style={{ margin: "7px 0" }}>
                    <strong>Genre:</strong> Drama
                  </p>

                  <p style={{ margin: "7px 0" }}>
                    <strong>Duration:</strong> 40 Minutes
                  </p>

                </div>


                <div
                  style={{
                    display: "flex",
                    gap: "14px",
                    flexWrap: "wrap"
                  }}
                >

                  <button className="btn-accent">
                    Watch Trailer
                  </button>

                  <button className="btn-accent btn-outline">
                    Behind The Scenes
                  </button>

                </div>

              </div>

            </motion.div>

          </div>

        </section>


        {/* =========================
            ABOUT BOLLO
        ========================= */}

        <section
          style={{
            padding: "120px 0"
          }}
        >

          <div
            className="container-max"
            style={{
              display: "grid",
              gridTemplateColumns: "0.9fr 1.1fr",
              gap: "100px",
              alignItems: "center"
            }}
          >

            {/* HEADING */}

            <div>

              <p
                style={{
                  color: "var(--accent)",
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  fontWeight: "600",
                  fontSize: "13px"
                }}
              >
                About Bollo Media
              </p>

              <h2
                className="font-display"
                style={{
                  fontSize: "clamp(2.8rem, 5vw, 4.5rem)",
                  lineHeight: 1.05,
                  margin: "18px 0 0"
                }}
              >
                Bold Stories.
                <br />
                Authentic African
                <br />
                Voices.
              </h2>

            </div>


            {/* DESCRIPTION */}

            <div>

              <p
                style={{
                  fontSize: "20px",
                  lineHeight: 1.8,
                  marginTop: 0
                }}
              >
                Bollo Media is a South African film and media
                production company dedicated to creating bold,
                authentic African stories.
              </p>

              <p
                className="text-muted"
                style={{
                  fontSize: "16px",
                  lineHeight: 1.9
                }}
              >
                We develop and produce films, documentaries and
                digital content that reflects our culture,
                communities and lived experiences.
              </p>

              <p
                className="text-muted"
                style={{
                  fontSize: "16px",
                  lineHeight: 1.9
                }}
              >
                Our work aims to entertain, inspire and spark
                meaningful conversations while contributing to the
                growth of the South African film industry.
              </p>

            </div>

          </div>

        </section>


        {/* =========================
            WHAT WE DO
        ========================= */}

        <section
          style={{
            padding: "100px 0",
            background: "#fafafa"
          }}
        >

          <div className="container-max">

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
                gap: "30px",
                marginBottom: "60px"
              }}
            >

              <div>

                <p
                  style={{
                    color: "var(--accent)",
                    letterSpacing: "3px",
                    textTransform: "uppercase",
                    fontWeight: "600",
                    fontSize: "13px"
                  }}
                >
                  What We Do
                </p>

                <h2
                  className="font-display"
                  style={{
                    fontSize: "clamp(2.5rem, 5vw, 4rem)",
                    margin: "15px 0 0",
                    lineHeight: 1
                  }}
                >
                  From Idea
                  <br />
                  To Screen.
                </h2>

              </div>

              <p
                className="text-muted"
                style={{
                  maxWidth: "420px",
                  margin: 0,
                  lineHeight: 1.8
                }}
              >
                From developing the first idea to bringing a
                finished production to audiences, we help turn
                stories into meaningful visual experiences.
              </p>

            </div>


            {/* SERVICES */}

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                borderTop: "1px solid #ddd"
              }}
            >

              <div
                style={{
                  padding: "35px 30px 35px 0",
                  borderBottom: "1px solid #ddd"
                }}
              >

                <h3 className="font-display">
                  01. Film & TV Production
                </h3>

                <p className="text-muted">
                  From development through to post-production,
                  we bring stories to life through film and
                  television.
                </p>

              </div>


              <div
                style={{
                  padding: "35px 0 35px 30px",
                  borderBottom: "1px solid #ddd",
                  borderLeft: "1px solid #ddd"
                }}
              >

                <h3 className="font-display">
                  02. Script Development
                </h3>

                <p className="text-muted">
                  Developing compelling stories and working
                  with creators to shape ideas into strong
                  narratives.
                </p>

              </div>


              <div
                style={{
                  padding: "35px 30px 35px 0"
                }}
              >

                <h3 className="font-display">
                  03. Documentary Production
                </h3>

                <p className="text-muted">
                  Capturing real stories, people and experiences
                  that educate, inspire and preserve our communities.
                </p>

              </div>


              <div
                style={{
                  padding: "35px 0 35px 30px",
                  borderLeft: "1px solid #ddd"
                }}
              >

                <h3 className="font-display">
                  04. Digital Media
                </h3>

                <p className="text-muted">
                  Creating engaging digital content for brands,
                  organisations and audiences across modern
                  platforms.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* =========================
            CLOSING STATEMENT
        ========================= */}

        <section
          style={{
            padding: "120px 24px",
            textAlign: "center"
          }}
        >

          <p
            style={{
              color: "var(--accent)",
              letterSpacing: "3px",
              textTransform: "uppercase",
              fontWeight: "600",
              fontSize: "12px"
            }}
          >
            Bollo Media
          </p>

          <h2
            className="font-display"
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              maxWidth: "800px",
              margin: "20px auto",
              lineHeight: 1.1
            }}
          >
            Stories that reflect
            <br />
            who we are.
          </h2>

        </section>

      </main>

    </div>
  )
}
// src/pages/Home.jsx
import React from 'react'
import { motion } from 'framer-motion'
import Hero from '../components/Hero'

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export default function Home() {
  const featuredWork = [
    {
      img: '/assets/gallery/feat1.jpg',
      title: 'Short Film - "The KeyHolder"',
      desc: 'A short narrative about culture.'
    },
    // {
    //   img: '/assets/gallery/feat2.jpg',
    //   title: 'Short Film - "The KeyHolder"',
    //   desc: 'A short narrative about culture.'
    // },
    // {
    //   img: '/assets/gallery/gallery3.jpg',
    //   title: 'Music Video — "Skyline"',
    //   desc: 'Cinematic music video with sweeping visuals.'
    // }
  ]

  return (
    <div>
      {/* Animate Hero */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Hero />
      </motion.div>

      <main style={{ padding: '48px 0' }}>
        <div className="container-max">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
  <p
    style={{
      letterSpacing: "4px",
      textTransform: "uppercase",
      color: "#b88a44",
      fontWeight: "600",
      marginBottom: "12px",
    }}
  >
    Our Latest Production
  </p>

  <h2 className="h2 font-display">
    THE KEYHOLDER
  </h2>

  <p
    className="text-muted"
    style={{
      maxWidth: "700px",
      margin: "12px auto 0",
    }}
  >
    A heartfelt short film exploring the beautiful culture of the Limpopo Pedi Tribe.
  </p>
</div>

         <motion.div
  variants={cardVariants}
  initial="hidden"
  animate="visible"
  transition={{ duration: 0.7 }}
>
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "40px",
      alignItems: "center",
      marginTop: "40px",
      background: "#fff",
      borderRadius: "20px",
      border: "2px",
      borderColor: "#d5b410" ,
      padding: "30px",
      boxShadow: "0 20px 40px rgba(0,0,0,0.08)"
    }}
  >
    {/* Left Side */}
    <img
      src="/assets/gallery/feat1.jpg"
      alt="Daylight"
      style={{
        width: "100%",
        borderRadius: "16px",
        objectFit: "cover"
      }}
    />

    {/* Right Side */}
    <div>

      <h2 className="font-display">
        THE KEYHOLDER
      </h2>

      <p
        className="text-muted"
        style={{ marginTop: "20px", lineHeight: 1.8 }}
      >
           A heartfelt short film exploring the beautiful culture of the Limpopo Pedi Tribe.
 
      </p>

      <div style={{ marginTop: "30px" }}>

        <p><strong>Released:</strong> 2025</p>

        <p><strong>Genre:</strong> Drama</p>

        <p><strong>Duration:</strong> 40 Minutes</p>

      </div>

      <div
        style={{
          display: "flex",
          gap: "16px",
          marginTop: "35px"
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

  </div>
</motion.div>

<section
  style={{
    padding: "100px 0",
    textAlign: "center",
    maxWidth: "850px",
    margin: "0 auto"
  }}
>

  <p
    style={{
      color: "var(--accent)",
      letterSpacing: "3px",
      textTransform: "uppercase",
      fontWeight: 600
    }}
  >
    About Bollo Media
  </p>

  <h2
    className="font-display"
    style={{
      fontSize: "3rem",
      marginTop: "15px",
      marginBottom: "30px"
    }}
  >
    Bold Stories.<br />
    Authentic African Voices.
  </h2>

  <p
    className="text-muted"
    style={{
      lineHeight: 1.9,
      fontSize: "1.1rem"
    }}
  >
    Bollo Media is a South African film and media production company
    dedicated to creating stories that reflect our culture,
    communities and lived experiences.

    <br /><br />

    Through film, documentaries and digital media, we produce
    work that entertains, inspires and sparks meaningful
    conversations.
  </p>

</section>

<section
  style={{
    paddingBottom: "100px"
  }}
>

  <div
    style={{
      textAlign: "center",
      marginBottom: "60px"
    }}
  >

    <p
      style={{
        color: "var(--accent)",
        letterSpacing: "3px",
        textTransform: "uppercase",
        fontWeight: 600
      }}
    >
      Our Expertise
    </p>

    <h2
      className="font-display"
      style={{
        fontSize: "2.8rem",
        marginTop: "15px"
      }}
    >
      How We Bring Stories To Life
    </h2>

  </div>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(2,1fr)",
      gap: "30px"
    }}
  >

    <div className="card" style={{ padding: "35px", boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}>
      <h3> Film & TV Production</h3>

      <p className="text-muted">
        From development to post-production, we transform ideas into cinematic experiences.
      </p>
    </div>

    <div className="card" style={{ padding: "35px", boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}>
      <h3> Script Development</h3>

      <p className="text-muted">
        Crafting compelling stories that connect with audiences through authentic storytelling.
      </p>
    </div>

    <div className="card" style={{ padding: "35px" , boxShadow: "0 20px 40px rgba(0,0,0,0.08)"}}>
      <h3> Documentary Production</h3>

      <p className="text-muted">
        Capturing real stories that educate, inspire and preserve lived experiences.
      </p>
    </div>

    <div className="card" style={{ padding: "35px" , boxShadow: "0 20px 40px rgba(0,0,0,0.08)"}}>
      <h3> Digital Media</h3>

      <p className="text-muted">
        Creating engaging content for brands, organisations and digital platforms.
      </p>
    </div>

  </div>

</section>
        </div>
      </main>
    </div>
  )
}




















// // src/pages/Home.jsx
// import React from 'react'
// import Hero from '../components/Hero'

// export default function Home(){
//   return (
//     <div>
//       <Hero />
//       <main style={{padding:'48px 0'}}>
//         <div className="container-max">
//           <h2 className="h2 font-display">Featured Work</h2>
//           <p className="text-muted" style={{marginTop:8}}>Recent projects from Bollo Media.</p>

//           <div className="grid-3" style={{marginTop:20}}>
//             <div className="card">
//               <img className="responsive" src="/assets/gallery/gallery1.jpg" alt="project 1" />
//               <div style={{padding:16}}>
//                 <h3 style={{margin:0}}>Short Film — "Daylight"</h3>
//                 <p className="text-muted" style={{marginTop:8}}>A short narrative about memory.</p>
//               </div>
//             </div>

//             <div className="card">
//               <img className="responsive" src="/assets/gallery/gallery2.jpg" alt="project 2" />
//               <div style={{padding:16}}>
//                 <h3 style={{margin:0}}>Commercial — "LuxTea"</h3>
//                 <p className="text-muted" style={{marginTop:8}}>Lifestyle commercial for a premium tea brand.</p>
//               </div>
//             </div>

//             <div className="card">
//               <img className="responsive" src="/assets/gallery/gallery3.jpg" alt="project 3" />
//               <div style={{padding:16}}>
//                 <h3 style={{margin:0}}>Music Video — "Skyline"</h3>
//                 <p className="text-muted" style={{marginTop:8}}>Cinematic music video with sweeping visuals.</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   )
// }

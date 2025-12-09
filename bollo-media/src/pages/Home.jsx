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
      img: '/assets/gallery/gallery1.jpg',
      title: 'Short Film — "Daylight"',
      desc: 'A short narrative about memory.'
    },
    {
      img: '/assets/gallery/gallery2.jpg',
      title: 'Commercial — "LuxTea"',
      desc: 'Lifestyle commercial for a premium tea brand.'
    },
    {
      img: '/assets/gallery/gallery3.jpg',
      title: 'Music Video — "Skyline"',
      desc: 'Cinematic music video with sweeping visuals.'
    }
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
          <h2 className="h2 font-display">Featured Work</h2>
          <p className="text-muted" style={{ marginTop: 8 }}>
            Recent projects from Bollo Media.
          </p>

          <div className="grid-3" style={{ marginTop: 20 }}>
            {featuredWork.map((work, idx) => (
              <motion.div
                className="card"
                key={idx}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.2 * idx, duration: 0.6 }}
              >
                <img className="responsive" src={work.img} alt={work.title} />
                <div style={{ padding: 16 }}>
                  <h3 style={{ margin: 0 }}>{work.title}</h3>
                  <p className="text-muted" style={{ marginTop: 8 }}>
                    {work.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
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

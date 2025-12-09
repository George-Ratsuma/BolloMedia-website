// src/pages/Gallery.jsx
import React, { useState } from "react";

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState(null);

  const sections = [
    {
      title: "Hero Section (Intro)",
      images: [
        "/assets/gallery/gallery2.jpg",
        "/assets/gallery/deb1.jpg",
        "/assets/gallery/deb2.jpg",
        "/assets/gallery/deb3.jpg",
      ],
    },
    {
      title: "Featured Projects",
      images: [
        "/assets/gallery/feat1.jpg",
        "/assets/gallery/feat2.jpg",
        "/assets/gallery/feat3.jpg",
        "/assets/gallery/feat4.jpg",
      ],
    },
    {
      title: "Meet The Team",
      images: [
        "/assets/team/team1.jpg",
        "/assets/team/team2.jpg",
        "/assets/team/team3.jpg",
        "/assets/team/team4.jpg",
      ],
    },
    {
      title: "Behind The Scenes",
      images: [
        "/assets/bts/bts1.jpg",
        "/assets/bts/bts2.jpg",
        "/assets/bts/bts3.jpg",
        "/assets/bts/bts4.jpg",
      ],
    },
    {
      title: "We Bring Communities Together",
      images: [
        "/assets/community/comm1.jpg",
        "/assets/community/comm2.jpg",
        "/assets/community/comm3.jpg",
        "/assets/community/comm4.jpg",
      ],
    },
  ];

  return (
    <div className="gallery-page">
      <h1 className="gallery-title">Our Gallery</h1>

      {sections.map((section, i) => (
        <section key={i} className="gallery-section">
          <h2 className="gallery-subtitle">{section.title}</h2>

          <div className="gallery-grid-container">
            <div className="gallery-grid">
              {section.images.map((img, index) => (
                <div
                  key={index}
                  className="gallery-item"
                  onClick={() => setSelectedImg(img)}
                >
                  <img src={img} alt={`Gallery ${index}`} />
                  <div className="overlay">Click to Enlarge</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {selectedImg && (
        <div className="modal" onClick={() => setSelectedImg(null)}>
          <img src={selectedImg} alt="enlarged view" className="modal-image" />
          <button className="close-btn" onClick={() => setSelectedImg(null)}>
            ✕
          </button>
        </div>
      )}

      {/* Inline CSS */}
      <style>{`
        .gallery-page {
          min-height: 100vh;
          background: #f8f9fb;
          text-align: center;
          padding: 50px 0;
          font-family: 'Poppins', sans-serif;
        }

        .gallery-title {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 60px;
          color: #222;
        }

        .gallery-section {
          margin-bottom: 80px;
        }

        .gallery-subtitle {
          font-size: 1.8rem;
          margin-bottom: 25px;
          color: #444;
        }

        .gallery-grid-container {
          max-width: 1200px;
          margin: 0 auto;
          background: rgba(255, 255, 255, 0.9);
          border-radius: 20px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          transition: all 0.4s ease;
          padding: 25px;
        }

        .gallery-grid-container:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 15px;
        }

        .gallery-item {
          position: relative;
          overflow: hidden;
          border-radius: 12px;
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .gallery-item img {
          width: 100%;
          height: 180px;
          object-fit: cover;
          border-radius: 12px;
          transition: transform 0.4s ease;
        }

        .gallery-item:hover img {
          transform: scale(1.1);
        }

        .gallery-item:hover {
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }

        .overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.45);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          font-size: 14px;
          font-weight: 500;
          transition: opacity 0.3s ease;
        }

        .gallery-item:hover .overlay {
          opacity: 1;
        }

        .modal {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }

        .modal-image {
          max-width: 90%;
          max-height: 90%;
          border-radius: 12px;
          box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
        }

        .close-btn {
          position: absolute;
          top: 30px;
          right: 50px;
          font-size: 2rem;
          background: none;
          border: none;
          color: #fff;
          cursor: pointer;
          font-weight: bold;
        }

        .close-btn:hover {
          color: #ddd;
        }
      `}</style>
    </div>
  );
}















































// // src/pages/Gallery.jsx
// import React, { useState } from "react";

// export default function Gallery() {
//   const [selectedImg, setSelectedImg] = useState(null);

//   // Example image sets (replace these with your real assets)
//   const sections = [
//     {
//       title: "🎬 Hero Section (Intro)",
//       images: [
//         "/assets/gallery/gallery2.jpg",
//         "/assets/gallery/deb1.jpg",
//         "/assets/gallery/deb3.jpg",
//         "/assets/gallery/deb2.jpg",
//       ],
//     },
//     {
//       title: "🌟 Featured Projects",
//       images: [
//         "/assets/gallery/feat1.jpg",
//         "/assets/gallery/feat2.jpg",
//         "/assets/gallery/feat3.jpg",
//         "/assets/gallery/feat4.jpg",
//       ],
//     },
//     {
//       title: "👥 Meet The Team",
//       images: [
//         "/assets/team/team1.jpg",
//         "/assets/team/team2.jpg",
//         "/assets/team/team3.jpg",
//         "/assets/team/team4.jpg",
//       ],
//     },
//     {
//       title: "🎥 Behind The Scenes",
//       images: [
//         "/assets/bts/bts1.jpg",
//         "/assets/bts/bts2.jpg",
//         "/assets/bts/bts3.jpg",
//         "/assets/bts/bts4.jpg",
//       ],
//     },
//     {
//       title: "💛 We Bring Communities Together",
//       images: [
//         "/assets/community/comm1.jpg",
//         "/assets/community/comm2.jpg",
//         "/assets/community/comm3.jpg",
//         "/assets/community/comm4.jpg",
//       ],
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50 text-center">
//       <h1 className="text-5xl font-bold py-16">Our Gallery</h1>

//       {sections.map((section, i) => (
//         <section key={i} className="py-16">
//           <h2 className="text-3xl font-semibold mb-8">{section.title}</h2>

//           {/* Image grid */}
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
//             {section.images.map((img, index) => (
//               <div
//                 key={index}
//                 onClick={() => setSelectedImg(img)}
//                 className="relative cursor-pointer group overflow-hidden rounded-lg shadow-md hover:shadow-2xl transition-all duration-300"
//               >
//                 <img
//                   src={img}
//                   alt={`Gallery ${index}`}
//                   className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-500"
//                 />
//                 <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center text-white font-semibold">
//                   Click to Enlarge
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>
//       ))}

//       {/* Enlarged Image Modal */}
//       {selectedImg && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
//           onClick={() => setSelectedImg(null)}
//         >
//           <img
//             src={selectedImg}
//             alt="enlarged view"
//             className="max-w-[90%] max-h-[90%] rounded-lg shadow-2xl transition-all duration-300"
//           />
//           <button
//             onClick={() => setSelectedImg(null)}
//             className="absolute top-10 right-10 text-white text-3xl font-bold hover:text-gray-300"
//           >
//             ✕
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }
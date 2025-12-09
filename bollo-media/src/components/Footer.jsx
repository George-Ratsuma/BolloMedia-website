// src/components/Footer.jsx
import React from 'react';

export default function Footer(){
  return (
    <footer className="footer">
      <div className="container-max" style={{display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:12}}>
        <div>© {new Date().getFullYear()} Bollo Media — All rights reserved.</div>
        <div style={{display:'flex',gap:12}}>
          <a href="#">Instagram</a>
          <a href="#">YouTube</a>
          <a href="#">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}

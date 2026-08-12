// src/components/Hero.jsx
import React from 'react';

export default function Hero(){
  return (
    <section className="hero" style={{backgroundImage: "url('/assets/hero.jpg')"}}>
      <div className="hero-overlay" />
      <div className="container-max hero-inner" style={{paddingTop:40}}>
        <h1 className="font-display h1" style={{color:'white'}}>Capturing Moments. Creating Stories.</h1>
        <p style={{color:'rgba(255,255,255,0.9)', marginTop:12, maxWidth:520}}>A South African film and media production company creating bold, authentic African stories that entertain, inspire and spark meaningful conversations. 
        </p>
        <div style={{marginTop:18}}>
          <a href="/production" className="btn-accent">Explore Our Work</a>
        </div>
      </div>
    </section>
  )
}

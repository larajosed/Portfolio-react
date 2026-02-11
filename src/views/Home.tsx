import React, { useEffect } from 'react';
import { initHeroAnimations } from '../../src/utils/animations';
import '../css/Home.css';
import Navbar from './Navbar';

const Home = () => {
useEffect(() => {
  const cleanup = initHeroAnimations();
  return cleanup; 
}, []);

  return (
    <section className="hero-container">
        <Navbar />
      <div className="hero-text">
        <h1 className="fade-in">José Daniel Lara Meza</h1>
        <h2 className="fade-in">&nbsp;JDLM&nbsp;&nbsp;Web&nbsp;&nbsp;Development</h2>
        <p className="fade-in delay-1">
          Creando experiencias digitales, elegantes y funcionales
        </p>
      
        
    <div className="button-group fade-in delay-2">
          <button className="btn-primary">Ver mi Trabajo</button>
          <button className="btn-secondary">Contáctame</button>
        </div>
      </div>


      <div className="bg-shapes">
        <div className="bg-grid"></div>
        <div className="diamond d1"></div>
        <div className="diamond d2"></div>
        <div className="diamond d3"></div>
        <div className="diamond d4"></div>
      

        <svg className="bg-lines-container" viewBox="0 0 1000 1000" preserveAspectRatio="none">
    <path className="line-path lp1" d="M0,200 Q250,100 500,200 T1000,200" />
    <path className="line-path lp2" d="M-100,500 L1100,500" />
    <path className="line-path lp3" d="M300,0 L700,1000" />
  </svg>
  <svg className="bg-lines-container" viewBox="0 0 1000 1000">
    {/* Grupo Esquina Superior Izquierda */}
    <polyline className="line-path lp-corner" points="0,100 150,100 200,50" />
    <line className="line-path lp-subtle" x1="50" y1="0" x2="300" y2="250" />
    
    {/* Grupo Esquina Superior Derecha */}
    <polyline className="line-path lp-corner" points="850,50 950,150 1000,150" />
    <line className="line-path lp-subtle" x1="700" y1="0" x2="1000" y2="300" />

    {/* Grupo Inferior (Debajo de los botones) */}
    <line className="line-path lp-horizontal" x1="100" y1="850" x2="900" y2="850" />
    <polyline className="line-path lp-corner" points="200,1000 300,900 400,900" />
    <polyline className="line-path lp-corner" points="600,900 700,900 800,1000" />
  </svg>

  <svg className="bg-lines-container" viewBox="0 0 1000 1000">
    {/* Líneas largas diagonales */}
    <line className="line-path lp1" x1="0" y1="0" x2="1000" y2="1000" />
    <line className="line-path lp2" x1="1000" y1="0" x2="0" y2="1000" />
    
    {/* Polilíneas fragmentadas (estilo el Marco 3 original) */}
    <polyline className="line-path lp3" points="100,200 150,250 150,350 250,450 400,450" />
    <polyline className="line-path lp4" points="800,100 850,150 750,250 900,400" />
    <polyline className="line-path lp5" points="100,900 300,700 400,750 600,600" />
  </svg>
      </div>
    </section>
  );
};

export default Home;
import React, { useState, useEffect } from "react";
import mainImage from "./img/main.webp";

import { ChevronDown } from "lucide-react";

const BarberHero = () => {
  const [offset, setOffset] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleScroll = () => setOffset(window.pageYOffset);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-black" style={{ overflow: 'hidden' }}>
      {/* 1. Image de fond */}
      <div className="absolute inset-0 w-full h-full z-0" style={{ overflow: 'hidden' }}>
        <img
          src={mainImage}
          alt="Fond Barbier"
          className="w-full h-full object-cover grayscale"
          style={{
            opacity: 0.5,
            objectPosition: 'center',
            transform: isMobile ? 'translateY(0px)' : `translateY(${offset * 0.3}px)`,
            willChange: 'transform',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
      </div>

      {/* 2. Contenu avec fondu au défilement */}
      <div
        className="relative z-10 container mx-auto px-6 text-center"
        style={{
          opacity: Math.max(0, 1 - offset / 500),
          transform: `translateY(${offset * 0.5}px)`,
        }}
      >
        {/* Ligne d'accentuation subtile */}
        <div className="flex justify-center mb-6">
          <div className="flex gap-1">
            <div className="w-10 h-[2px] bg-red-600"></div>
            <div className="w-4 h-[2px] bg-blue-700"></div>
          </div>
        </div>

        {/* Titre principal */}
        <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-4 uppercase italic tracking-tighter">
          COUPES <span className="text-red-600">PRÉCISES</span>.{" "}
          <br className="hidden md:block" />
          STYLE <span className="text-blue-700">IMPECCABLE</span>.
        </h1>

        {/* Description courte */}
        <p className="text-gray-400 text-xs md:text-sm font-bold uppercase tracking-[0.4em] max-w-md mx-auto leading-relaxed">
          Soins Premium pour le <br />
          Gentleman Moderne à <span className="text-white">Meknès</span>
        </p>

        {/* Icône de défilement flottante */}
        <div className="mt-20 flex justify-center opacity-30">
          <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent animate-pulse"></div>
        </div>
      </div>

      {/* 3. Bordure inférieure minimale */}
      <div className="absolute bottom-0 left-0 w-full h-[3px] flex z-10">
        <div className="w-1/3 bg-red-600"></div>
        <div className="w-1/3 bg-white"></div>
        <div className="w-1/3 bg-blue-700"></div>
      </div>
    </div>
  );
};

export default BarberHero;
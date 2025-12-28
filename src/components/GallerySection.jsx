import React, { useState, useRef } from 'react';
import { Camera, ChevronLeft, ChevronRight } from 'lucide-react';

const ComparisonCard = ({ item }) => {
  const [isRevealed, setIsRevealed] = useState(false);
  const containerRef = useRef(null);
  const touchStartRef = useRef(0);

  const handleTouchStart = (e) => {
    touchStartRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStartRef.current - touchEnd;

    // Swipe à gauche (montrer l'après)
    if (diff > 50) {
      setIsRevealed(true);
    }
    // Swipe à droite (montrer l'avant)
    if (diff < -50) {
      setIsRevealed(false);
    }
  };

  const handleMouseWheel = (e) => {
    e.preventDefault();
    
    if (e.deltaY > 0 || e.deltaX > 0) {
      setIsRevealed(true);
    } else {
      setIsRevealed(false);
    }
  };

  return (
    <div className="flex flex-col group">
      <div 
        ref={containerRef}
        className="relative w-full aspect-[4/5] overflow-hidden select-none bg-zinc-900 border border-white/10"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onWheel={handleMouseWheel}
      >
        {/* Image Avant (Défaut) */}
        <img 
          src={item.before} 
          alt="Avant" 
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            isRevealed ? 'opacity-0' : 'opacity-100'
          }`}
        />

        {/* Image Après (Révélée au défilement) */}
        <img 
          src={item.after} 
          alt="Après" 
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            isRevealed ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Étiquette Avant */}
        <div className={`absolute top-4 left-4 bg-black/80 text-[9px] font-black px-2 py-1 uppercase tracking-widest border border-white/20 transition-opacity duration-500 ${
          isRevealed ? 'opacity-0' : 'opacity-100'
        }`}>
          Avant
        </div>

        {/* Étiquette Après */}
        <div className={`absolute top-4 right-4 bg-red-600 text-[9px] font-black px-2 py-1 uppercase tracking-widest transition-opacity duration-500 ${
          isRevealed ? 'opacity-100' : 'opacity-0'
        }`}>
          Après
        </div>

        {/* Indication de défilement */}
        <div className="absolute right-4 bottom-4 flex items-center gap-2 text-white/40 group-hover:text-white transition-colors">
          <span className="text-[9px] font-bold uppercase tracking-widest">
            {isRevealed ? 'Défiler à Gauche' : 'Défiler à Droite'}
          </span>
          {isRevealed ? (
            <ChevronLeft size={16} className="animate-bounce" />
          ) : (
            <ChevronRight size={16} className="animate-bounce" />
          )}
        </div>
      </div>

      {/* Barre d'infos */}
      <div className="py-4 px-2 border-b border-white/10 flex justify-between items-end">
        <div>
          <h4 className="font-black uppercase italic tracking-tighter text-xl text-white leading-none mb-1">
            {item.title}
          </h4>
          <span className="text-blue-600 text-[10px] font-black uppercase tracking-[0.3em]">{item.tag}</span>
        </div>
      </div>
    </div>
  );
};

const GallerySection = () => {
  const transformations = [
    {
      id: 1,
      title: "Pompadour Classique",
      before: "https://images.pexels.com/photos/3538021/pexels-photo-3538021.jpeg?auto=compress&cs=tinysrgb&w=500&h=625&fit=crop",
      after: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=500&h=625&fit=crop",
      tag: "Coupe Master"
    },
    {
      id: 2,
      title: "Sculpture de Barbe",
      before: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=500&h=625&fit=crop",
      after: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=500&h=625&fit=crop",
      tag: "Rasage Précis"
    },
    {
      id: 3,
      title: "Dégradé Moderne",
      before: "https://images.pexels.com/photos/3998421/pexels-photo-3998421.jpeg?auto=compress&cs=tinysrgb&w=500&h=625&fit=crop",
      after: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=500&h=625&fit=crop",
      tag: "Skin Fade"
    }
  ];

  return (
    <section id="gallery" className="py-24 bg-black text-white">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* En-tête */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-2">
            <div className="h-1 w-10 bg-red-600"></div>
            <span className="text-blue-600 font-black uppercase tracking-[0.4em] text-[10px]">Transformations</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-none">
            RÉVÉLER LE <span className="text-red-600">STYLE</span>
          </h2>
        </div>

        {/* Grille de Galerie */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {transformations.map((item) => (
            <ComparisonCard key={item.id} item={item} />
          ))}
        </div>

        {/* Infos Bas de Page */}
        <div className="mt-20 flex flex-col items-center opacity-40">
           <Camera size={24} className="mb-4" />
           <p className="text-[10px] font-bold uppercase tracking-[0.5em]">Faites défiler à gauche ou à droite pour révéler la transformation</p>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
import React from 'react';
import { Scissors, User, Sparkles } from 'lucide-react';

const PricingSection = () => {
  const categories = [
    {
      title: "Services Cheveux",
      icon: <Scissors className="text-red-600" size={24} />,
      services: [
        { name: "Coupe Classique", price: "30" },
        { name: "Coupe + Barbe", price: "50" },
        { name: "Coupe Pro Max", price: "120" },
        { name: "Brushing", price: "20" },
        { name: "Boucles / Curling", price: "20" },
        { name: "Lissage", price: "20" },
        { name: "Shampooing", price: "20" },
      ]
    },
    {
      title: "Barbe & Combos",
      icon: <User className="text-blue-700" size={24} />,
      services: [
        { name: "Taille de Barbe", price: "20" },
        { name: "Coupe + Barbe + Gommage", price: "60" },
        { name: "Coupe + Barbe + Gommage Vapeur", price: "80" },
        { name: "Coloration Barbe", price: "30" },
        { name: "Coupe Enfant", price: "20", special: true },
      ]
    },
    {
      title: "Visage & Spécialisés",
      icon: <Sparkles className="text-red-600" size={24} />,
      services: [
        { name: "Soin de Visage", price: "70" },
        { name: "Gommage Spécial", price: "50" },
        { name: "Soin Protéine", price: "200+" },
        { name: "Soin Kératine", price: "250+" },
        { name: "Masque Noir", price: "20" },
        { name: "Gommage Simple", price: "20" },
        { name: "Épilation Cire", price: "20" },
      ]
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* En-tête de section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-black uppercase tracking-tighter italic mb-4">
            Nos <span className="text-red-600">Tarifs</span>
          </h2>
          <div className="flex justify-center items-center gap-3">
            <div className="h-1 w-12 bg-blue-700"></div>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-sm">
              À partir de 20 MAD
            </p>
            <div className="h-1 w-12 bg-red-600"></div>
          </div>
        </div>

        {/* Grille des tarifs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {categories.map((cat, idx) => (
            <div key={idx} className="flex flex-col">
              {/* Titre de catégorie */}
              <div className="flex items-center gap-3 mb-8 border-b-2 border-black pb-4">
                {cat.icon}
                <h3 className="text-xl font-black uppercase tracking-tight">{cat.title}</h3>
              </div>

              {/* Liste des services */}
              <div className="space-y-6">
                {cat.services.map((service, sIdx) => (
                  <div key={sIdx} className="group flex items-end justify-between">
                    <div className="flex flex-col">
                      <span className="text-gray-900 font-bold uppercase tracking-wide group-hover:text-red-600 transition-colors">
                        {service.name}
                      </span>
                      {service.special && (
                        <span className="text-[10px] text-blue-700 font-bold uppercase">Catégorie Spéciale</span>
                      )}
                    </div>
                    
                    {/* Ligne de séparation pointillée */}
                    <div className="flex-1 border-b border-dotted border-gray-300 mx-2 mb-1.5"></div>
                    
                    <div className="text-right">
                      <span className="text-lg font-black text-black italic">
                        {service.price} <span className="text-xs not-italic text-gray-400">MAD</span>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Note de bas de page */}
        <div className="mt-20 p-8 bg-zinc-900 text-center rounded-sm">
          <p className="text-white font-bold uppercase tracking-widest text-sm flex flex-col md:flex-row items-center justify-center gap-4">
            <span className="text-red-600 italic">Qualité Premium</span>
            <span className="hidden md:block w-2 h-2 rounded-full bg-blue-600"></span>
            <span className="text-white">Barbiers Experts</span>
            <span className="hidden md:block w-2 h-2 rounded-full bg-red-600"></span>
            <span className="text-blue-600 italic">Style Moderne</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
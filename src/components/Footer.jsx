import React from 'react';
import { Instagram, MessageCircle, MapPin, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black text-white py-20 border-t border-white/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          {/* Marque */}
          <div>
            <h2 className="text-xl md:text-2xl font-black uppercase italic tracking-tighter mb-2">
              OUSAMA<span className="text-red-600"> BARBERSHOP</span>
            </h2>
            <p className="text-[10px] text-gray-500 font-bold tracking-[0.4em] uppercase">
              Rasage de Précision
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-600 mb-6">Navigation</p>
            <div className="space-y-3 flex flex-col">
              <a href="#" className="group flex items-center gap-2 text-sm hover:text-red-600 transition-colors">
                Accueil <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a 
                href="#gallery" 
                onClick={(e) => handleScroll(e, 'gallery')}
                className="group flex items-center gap-2 text-sm hover:text-red-600 transition-colors"
              >
                Galerie <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a 
                href="#pricing" 
                onClick={(e) => handleScroll(e, 'pricing')}
                className="group flex items-center gap-2 text-sm hover:text-red-600 transition-colors"
              >
                Tarifs <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a 
                href="#contact" 
                onClick={(e) => handleScroll(e, 'contact')}
                className="group flex items-center gap-2 text-sm hover:text-red-600 transition-colors"
              >
                Contact <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-600 mb-6">Nous Suivre</p>
            <div className="space-y-3">
              <a 
                href="https://www.instagram.com/ba.rberoo/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-3 hover:text-red-600 transition-colors"
              >
                <Instagram size={18} className="text-gray-500 group-hover:text-red-600" />
                <span className="text-sm">Instagram</span>
              </a>
              <a 
                href="https://wa.me/212657335157" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-3 hover:text-red-600 transition-colors"
              >
                <MessageCircle size={18} className="text-gray-500 group-hover:text-red-600" />
                <span className="text-sm">WhatsApp</span>
              </a>
              <div className="flex items-center gap-3 text-gray-500">
                <MapPin size={18} className="text-red-600" />
                <span className="text-sm">Meknès, Maroc</span>
              </div>
            </div>
          </div>

          {/* Info Studio */}
          <div>
            <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-600 mb-6">Expertise</p>
            <p className="text-sm text-gray-400 leading-relaxed">
              Le meilleur service de coiffure pour hommes à Meknès. 
              Précision, style et tradition.
            </p>
          </div>
        </div>

        {/* Séparateur */}
        <div className="h-px bg-white/5 mb-8"></div>

        {/* Section Bas de page - Ton Crédit au Milieu */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[9px] text-gray-600 font-bold tracking-[0.4em] uppercase order-2 md:order-1">
            © 2025 OUSAMA BARBERSHOP
          </p>
          
          {/* Crédit Développeur - Centre */}
          <div className="flex items-center gap-2 order-1 md:order-2">
            <span className="text-[9px] text-gray-600 font-bold tracking-[0.4em] uppercase">Développé par</span>
            <a 
              href="https://zakariaealliouate.vercel.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[10px] text-white font-black uppercase tracking-[0.2em] hover:text-red-600 transition-colors border-b border-white/20 hover:border-red-600"
            >
              Zakariae
            </a>
          </div>

          <p className="text-[9px] text-gray-600 font-bold tracking-[0.4em] uppercase order-3">
            MEKNÈS, MAROC
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
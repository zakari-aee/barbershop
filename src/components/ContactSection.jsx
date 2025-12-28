import React from 'react';
import { Instagram, MessageCircle, MapPin, Clock } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* 1. Côté Informations */}
          <div className="lg:w-2/5 flex flex-col justify-center">
            <div className="mb-12">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-red-600">Nous Trouver</span>
              <h2 className="text-5xl md:text-6xl font-black uppercase italic tracking-tighter mt-2 leading-none">
                VISITEZ LE <br />
                <span className="text-blue-700">SALON</span>
              </h2>
            </div>

            <div className="space-y-10">
              {/* Emplacement Physique */}
              <div className="flex items-start gap-4">
                <MapPin size={22} className="text-black shrink-0" />
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-1">Adresse</h4>
                  <p className="text-lg font-bold text-black leading-snug">
                    123 Avenue Mohamed V,<br />Meknès, Maroc
                  </p>
                </div>
              </div>

              {/* Liens Réseaux Sociaux & WhatsApp */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
                
                {/* Lien Instagram */}
                <div className="flex flex-col gap-2">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Réseaux</span>
                  <a 
                    href="https://www.instagram.com/ba.rberoo/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 w-fit"
                  >
                    <Instagram size={20} className="text-black group-hover:text-[#E1306C] transition-colors" />
                    <span className="text-sm font-bold uppercase tracking-widest border-b-2 border-transparent group-hover:border-[#E1306C] transition-all">
                      Instagram
                    </span>
                  </a>
                </div>

                {/* Lien WhatsApp */}
                <div className="flex flex-col gap-2">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Réservation</span>
                  <a 
                    href="https://wa.me/212657335157" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 w-fit"
                  >
                    <MessageCircle size={20} className="text-black group-hover:text-[#25D366] transition-colors" />
                    <span className="text-sm font-bold uppercase tracking-widest border-b-2 border-transparent group-hover:border-[#25D366] transition-all">
                      WhatsApp
                    </span>
                  </a>
                </div>

              </div>

              {/* Horaires */}
              <div className="flex items-start gap-4 pt-6 border-t border-gray-100">
                <Clock size={22} className="text-black shrink-0" />
                <div className="flex flex-col sm:flex-row sm:gap-12">
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-1">Mar - Sam</h4>
                    <p className="font-bold">11:00 — 22:00</p>
                  </div>
                  <div className="mt-4 sm:mt-0">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-red-600 mb-1">Lundi</h4>
                    <p className="font-bold">FERMÉ</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Côté Carte */}
          <div className="lg:w-3/5 h-[400px] lg:h-auto min-h-[500px] bg-gray-100 relative group">
            {/* Cadre Décoratif en arrière-plan */}
            <div className="absolute inset-0 border-2 border-black translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
            
            <iframe 
              title="Emplacement Salon de Coiffure"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106037.1678252244!2d-5.59473215!3d33.89311215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd9ff4f6a9463203%3A0x9336d354676536e!2sMeknes!5e0!3m2!1sen!2sma!4v1700000000000!5m2!1sen!2sma" 
              className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700 border-2 border-black"
              style={{ border: 0 }}
              allowFullScreen="" 
              loading="lazy" 
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
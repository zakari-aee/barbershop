import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-scroll to hash on page load
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '#' },
    { name: 'Galerie', href: '#gallery' },
    { name: 'Tarifs', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white py-4 shadow-sm' 
          : 'bg-transparent py-8'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* 1. Logo OUSSAMA BARBERSHOP */}
        <a href="#" className="flex flex-col group" onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}>
          <span className={`text-xl md:text-2xl font-black uppercase italic tracking-tighter leading-none transition-colors duration-300 ${
            isScrolled ? 'text-black' : 'text-white'
          }`}>
            OUSSAMA<span className="text-red-600"> BARBERSHOP</span>
          </span>
          <span className={`text-[9px] font-bold tracking-[0.5em] uppercase transition-colors duration-300 ${
            isScrolled ? 'text-blue-700' : 'text-blue-400'
          }`}>
            Meknès
          </span>
        </a>

        {/* 2. Liens Desktop */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                if (link.href.startsWith('#')) {
                  e.preventDefault();
                  
                  // Special handling for "#" (Accueil) - scroll to top
                  if (link.href === '#') {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  } else {
                    const element = document.querySelector(link.href);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }
                }
              }}
              className={`text-[11px] font-black uppercase tracking-[0.25em] transition-all duration-300 relative group overflow-hidden ${
                isScrolled ? 'text-black' : 'text-white'
              }`}
            >
              {link.name}
              <span className={`absolute bottom-0 left-0 w-full h-[1px] transition-transform duration-300 -translate-x-[101%] group-hover:translate-x-0 ${
                isScrolled ? 'bg-red-600' : 'bg-blue-500'
              }`}></span>
            </a>
          ))}
        </div>

        {/* 3. Toggle Mobile */}
        <button
          className={`md:hidden transition-colors ${isScrolled ? 'text-black' : 'text-white'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* 4. Menu Mobile Overlay */}
      <div className={`md:hidden absolute top-0 left-0 w-full h-screen bg-black transition-all duration-500 ease-in-out ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-8 right-6 text-white"
          >
            <X size={32} />
          </button>
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => {
                if (link.href.startsWith('#')) {
                  e.preventDefault();
                  
                  // Special handling for "#" (Accueil) - scroll to top
                  if (link.href === '#') {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  } else {
                    const element = document.querySelector(link.href);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }
                }
                setIsMobileMenuOpen(false);
              }}
              className="text-white text-3xl font-black uppercase italic tracking-tighter hover:text-red-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="flex gap-2 pt-8">
            <div className="w-8 h-1 bg-red-600"></div>
            <div className="w-8 h-1 bg-white"></div>
            <div className="w-8 h-1 bg-blue-700"></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Diamond } from 'lucide-react';

interface Props {
  onNavigateTreatments: () => void;
  onNavigateHome: () => void;
  onNavigateIA: () => void;
  onNavigateResults: () => void;
  onNavigateContact: () => void;
  onNavigateBooking: () => void;
}

const Navbar: React.FC<Props> = ({ 
  onNavigateTreatments, 
  onNavigateHome, 
  onNavigateIA,
  onNavigateResults,
  onNavigateContact,
  onNavigateBooking
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Tratamentos', action: onNavigateTreatments },
    { name: 'IA Advisor', action: onNavigateIA },
    { name: 'Resultados', action: onNavigateResults },
    { name: 'Contato', action: onNavigateContact },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-700 ${scrolled ? 'bg-luxury-dark/90 backdrop-blur-xl py-4 shadow-2xl' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center relative min-h-[40px] md:min-h-0">
          
          <div 
            onClick={onNavigateHome}
            className="flex items-center space-x-3 group cursor-pointer absolute left-1/2 -translate-x-1/2 md:static md:left-auto md:translate-x-0 z-10"
          >
            <div className="relative">
               <Diamond className="h-6 w-6 text-accent-bronze group-hover:rotate-[120deg] transition-transform duration-700" />
            </div>
            <span className="font-serif text-2xl tracking-[0.3em] uppercase text-white font-light group-hover:text-accent-bronze transition-colors">L'Éclat</span>
          </div>

          <div className="hidden md:flex items-center space-x-12 ml-auto">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={link.action}
                className="text-white/50 hover:text-accent-bronze transition-all active:scale-95 text-[10px] font-bold uppercase tracking-[0.3em]"
              >
                {link.name}
              </button>
            ))}
            <button 
              onClick={onNavigateBooking}
              className="bg-accent-bronze text-luxury-dark px-10 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all btn-luxury btn-glow"
            >
              Agendar VIP
            </button>
          </div>

          <div className="md:hidden ml-auto z-20">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2 focus:outline-none transition-transform active:rotate-90">
              {isOpen ? <X strokeWidth={1.5} /> : <Menu strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-luxury-dark flex flex-col items-center justify-center space-y-10 animate-in fade-in zoom-in duration-300">
          <button onClick={() => setIsOpen(false)} className="absolute top-8 right-6 text-white active:scale-75 transition-transform"><X size={32} /></button>
          <div className="flex items-center space-x-3 mb-8 opacity-50">
            <Diamond className="h-8 w-8 text-accent-bronze" />
            <span className="font-serif text-3xl tracking-[0.3em] uppercase text-white font-light">L'Éclat</span>
          </div>
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => {
                link.action();
                setIsOpen(false);
              }}
              className="text-white hover:text-accent-bronze text-4xl font-serif italic transition-all active:scale-90"
            >
              {link.name}
            </button>
          ))}
          <button 
            onClick={() => {
              onNavigateBooking();
              setIsOpen(false);
            }}
            className="bg-accent-bronze text-luxury-dark px-12 py-5 rounded-full text-xs font-bold uppercase tracking-widest btn-luxury"
          >
            Reservar Agora
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

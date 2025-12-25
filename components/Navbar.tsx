
import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Diamond } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Tratamentos', href: '#tratamentos' },
    { name: 'A Clínica', href: '#clinica' },
    { name: 'Depoimentos', href: '#feedback' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-700 ${scrolled ? 'bg-luxury-dark/90 backdrop-blur-xl py-4 shadow-2xl' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative">
               <Diamond className="h-6 w-6 text-accent-bronze group-hover:rotate-[120deg] transition-transform duration-700" />
            </div>
            <span className="font-serif text-2xl tracking-[0.3em] uppercase text-white font-light">L'Éclat</span>
          </div>

          <div className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white/50 hover:text-accent-bronze transition-colors text-[10px] font-bold uppercase tracking-[0.3em]"
              >
                {link.name}
              </a>
            ))}
            <button className="bg-accent-bronze text-luxury-dark px-10 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-white transition-all transform hover:-translate-y-1 shadow-lg">
              Agendar VIP
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
              {isOpen ? <X strokeWidth={1.5} /> : <Menu strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-luxury-dark flex flex-col items-center justify-center space-y-10 animate-in fade-in zoom-in duration-300">
          <button onClick={() => setIsOpen(false)} className="absolute top-8 right-6 text-white"><X size={32} /></button>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-accent-bronze text-4xl font-serif italic"
            >
              {link.name}
            </a>
          ))}
          <button className="bg-accent-bronze text-luxury-dark px-12 py-5 rounded-full text-xs font-bold uppercase tracking-widest">
            Solicitar Convite
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

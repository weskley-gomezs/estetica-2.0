
import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

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
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/80 backdrop-blur-lg py-3 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative">
               <Sparkles className="h-6 w-6 text-rose-400 group-hover:rotate-12 transition-transform duration-500" />
               <div className="absolute inset-0 blur-md bg-rose-200/50 scale-150 rounded-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <span className="font-serif text-2xl tracking-[0.2em] uppercase text-stone-800 font-light">L'Éclat</span>
          </div>

          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-stone-500 hover:text-rose-400 transition-colors text-xs font-medium uppercase tracking-[0.2em]"
              >
                {link.name}
              </a>
            ))}
            <button className="bg-rose-400 text-white px-8 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-rose-800 transition-all transform hover:scale-105 soft-glow">
              Agendar
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-stone-800 p-2">
              {isOpen ? <X strokeWidth={1.5} /> : <Menu strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-rose-100 p-8 space-y-6 animate-in slide-in-from-top-5 duration-500">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-stone-600 hover:text-rose-400 text-center py-2 text-2xl font-serif"
            >
              {link.name}
            </a>
          ))}
          <button className="w-full bg-rose-400 text-white px-6 py-4 rounded-full text-xs font-bold uppercase tracking-widest">
            Agendar Agora
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

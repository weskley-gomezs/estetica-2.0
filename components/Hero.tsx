
import React from 'react';
import { ArrowRight, Star, ChevronDown, Diamond } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#fdfaf9]">
      {/* Background Image with Ken Burns Effect */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1519415387722-a1c3bbef716c?auto=format&fit=crop&q=80&w=2070" 
          alt="L'Éclat Experience" 
          className="w-full h-full object-cover opacity-80 animate-[slow-zoom_30s_ease-in-out_infinite]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/20 to-[#fdfaf9]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <div className="inline-flex items-center gap-2 mb-10 px-6 py-2 rounded-full glass animate-in fade-in slide-in-from-top-4 duration-1000">
          <Diamond className="w-3 h-3 text-rose-400" />
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-stone-800">The Art of Skin Perfection</span>
        </div>

        <h1 className="text-7xl md:text-9xl font-serif text-stone-900 leading-none mb-10 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
          Sinta a sua <br />
          <span className="italic font-light text-rose-400">essência radiar.</span>
        </h1>
        
        <p className="text-stone-600 text-lg md:text-xl mb-14 max-w-2xl mx-auto font-light leading-relaxed animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-500">
          Clínica boutique especializada em procedimentos de alta performance com resultados que respeitam sua identidade.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-700">
          <button className="bg-stone-900 text-white px-14 py-6 rounded-full font-bold text-[10px] uppercase tracking-widest flex items-center gap-3 hover:bg-rose-400 transition-all shadow-2xl hover:-translate-y-1">
            Solicitar Convite VIP
            <ArrowRight className="w-4 h-4" />
          </button>
          <a href="#ia" className="text-stone-800 font-bold text-[10px] uppercase tracking-[0.3em] border-b border-stone-200 pb-2 hover:border-rose-400 transition-all">
            Inicar Consultoria Online
          </a>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-float">
         <div className="flex flex-col items-center gap-4">
            <span className="text-[8px] uppercase tracking-[0.5em] text-stone-400">Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-stone-200 to-transparent"></div>
         </div>
      </div>
    </section>
  );
};

export default Hero;

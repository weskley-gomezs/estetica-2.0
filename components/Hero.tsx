
import React from 'react';
import { ArrowRight, Star, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[100dvh] flex items-center overflow-hidden bg-luxury">
      {/* Background with softer overlay and better imagery */}
      <div className="absolute inset-0 z-0 scale-105 animate-[slow-zoom_20s_ease-in-out_infinite]">
        <img 
          src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=2070" 
          alt="Beauty Essence" 
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-rose-50/95 via-rose-50/60 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-3 mb-8 px-5 py-2 rounded-full bg-white/40 backdrop-blur-md border border-white/60 animate-in fade-in slide-in-from-left-4 duration-700">
            <span className="flex">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-rose-400 text-rose-400" />)}
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-rose-800">Estética de Luxo & Alta Performance</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-serif text-stone-800 leading-[1] mb-10 animate-in fade-in slide-in-from-bottom-6 duration-1000">
            A arte de <br />
            <span className="italic font-light text-rose-400">harmonizar.</span>
          </h1>
          
          <p className="text-stone-600 text-lg md:text-xl mb-12 max-w-lg font-light leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000">
            Ciência avançada e olhar artístico para revelar a elegância que já habita em você. Resultados naturais, personalizados e exclusivos.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 animate-in fade-in slide-in-from-bottom-10 duration-1000">
            <button 
              className="bg-stone-800 text-white px-12 py-5 rounded-full font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-stone-700 transition-all group shadow-2xl active:scale-95"
            >
              Agendar Avaliação VIP
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <a 
              href="#tratamentos" 
              className="bg-white/20 backdrop-blur-xl border border-rose-200/50 text-rose-800 px-12 py-5 rounded-full font-bold text-xs uppercase tracking-widest text-center hover:bg-white/50 transition-all"
            >
              Explorar Menu
            </a>
          </div>
        </div>
      </div>

      {/* Decorative floral element or soft circle */}
      <div className="absolute -top-24 -right-24 w-[30rem] h-[30rem] bg-rose-200/20 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-24 right-24 w-80 h-80 bg-rose-100/30 rounded-full blur-[80px]"></div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
         <ChevronDown className="text-rose-300 w-6 h-6" />
      </div>
    </section>
  );
};

export default Hero;

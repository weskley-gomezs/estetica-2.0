
import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-luxury">
      {/* Background with softer overlay and better imagery */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=2070" 
          alt="Beauty Essence" 
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-rose-50/90 via-rose-50/40 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-rose-100/50 backdrop-blur-sm border border-rose-200 animate-in fade-in slide-in-from-left-4 duration-700">
            <span className="flex">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-rose-400 text-rose-400" />)}
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-rose-800">Referência em Estética de Luxo</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-serif text-stone-800 leading-[1.1] mb-8 animate-in fade-in slide-in-from-bottom-6 duration-1000">
            Revele sua <br />
            <span className="italic font-light text-rose-400">melhor versão.</span>
          </h1>
          
          <p className="text-stone-600 text-lg md:text-xl mb-12 max-w-lg font-light leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000">
            Onde a alta tecnologia encontra o toque humano para criar resultados naturais, elegantes e exclusivos.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 animate-in fade-in slide-in-from-bottom-10 duration-1000">
            <button 
              className="bg-stone-800 text-white px-10 py-5 rounded-full font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-stone-700 transition-all group soft-glow"
            >
              Agendar Avaliação VIP
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <a 
              href="#tratamentos" 
              className="bg-white/50 backdrop-blur-md border border-rose-200 text-rose-800 px-10 py-5 rounded-full font-bold text-xs uppercase tracking-widest text-center hover:bg-rose-100 transition-all"
            >
              Ver Procedimentos
            </a>
          </div>
        </div>
      </div>

      {/* Decorative floral element or soft circle */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-rose-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-24 right-24 w-64 h-64 bg-rose-100/30 rounded-full blur-2xl"></div>
    </section>
  );
};

export default Hero;

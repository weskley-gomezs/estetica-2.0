
import React from 'react';
import { ArrowRight, Diamond } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-luxury-dark">
      {/* Background with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=2000" 
          alt="L'Éclat Luxury" 
          className="w-full h-full object-cover opacity-40 animate-[slow-zoom_30s_ease-in-out_infinite]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-dark/40 via-luxury-dark/80 to-luxury-dark"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <div className="inline-flex items-center gap-2 mb-12 px-6 py-2 rounded-full glass border border-white/10 animate-in fade-in slide-in-from-top-4 duration-1000">
          <Diamond className="w-3 h-3 text-accent-bronze" />
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-white/80">Onde a Arte encontra a Ciência</span>
        </div>

        <h1 className="text-7xl md:text-[10rem] font-serif text-white leading-none mb-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
          Revelando a sua <br />
          <span className="italic font-light text-accent-bronze">melhor versão.</span>
        </h1>
        
        <p className="text-white/50 text-xl md:text-2xl mb-16 max-w-3xl mx-auto font-light leading-relaxed animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-500">
          Protocolos exclusivos de rejuvenescimento e harmonização para quem não aceita nada menos que a perfeição absoluta.
        </p>

        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-700">
          <button className="bg-white text-luxury-dark px-16 py-6 rounded-full font-bold text-[10px] uppercase tracking-[0.2em] flex items-center gap-3 hover:bg-accent-bronze transition-all shadow-2xl hover:-translate-y-1">
            Agendar Consulta VIP
            <ArrowRight className="w-4 h-4" />
          </button>
          <a href="#ia" className="text-white font-bold text-[10px] uppercase tracking-[0.4em] border-b border-white/20 pb-2 hover:border-accent-bronze transition-all">
            Consultoria IA Privada
          </a>
        </div>
      </div>

      {/* Decorative Lines */}
      <div className="absolute bottom-20 left-0 w-full flex justify-between px-12 items-end">
        <div className="hidden lg:block space-y-4 text-left">
           <p className="text-[8px] uppercase tracking-[0.5em] text-white/20">Localização</p>
           <p className="text-[10px] uppercase tracking-[0.2em] text-white/60">São Paulo, Jardins</p>
        </div>
        <div className="animate-float flex flex-col items-center gap-4">
            <span className="text-[8px] uppercase tracking-[0.5em] text-white/20 rotate-90 origin-left translate-x-1">Scroll</span>
            <div className="w-px h-24 bg-gradient-to-b from-accent-bronze to-transparent"></div>
        </div>
        <div className="hidden lg:block space-y-4 text-right">
           <p className="text-[8px] uppercase tracking-[0.5em] text-white/20">Social</p>
           <p className="text-[10px] uppercase tracking-[0.2em] text-white/60">@leclat.aesthetics</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

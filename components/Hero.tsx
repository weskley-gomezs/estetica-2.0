
import React from 'react';
import { ArrowRight, Sparkles, TrendingUp } from 'lucide-react';

interface Props {
  onExploreTreatments?: () => void;
  onBooking?: () => void;
}

const Hero: React.FC<Props> = ({ onExploreTreatments, onBooking }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-luxury-dark">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2070&auto=format&fit=crop" 
          alt="L'Éclat Luxury Clinic Interior" 
          className="w-full h-full object-cover opacity-30 scale-105 animate-[slow-zoom_20s_infinite]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-dark/60 via-luxury-dark to-luxury-dark"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center py-24">
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full glass border border-accent-bronze/30">
          <Sparkles className="w-3 h-3 text-accent-bronze" />
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent-bronze">Beleza Baseada em Ciência</span>
        </div>

        <h1 className="text-5xl md:text-8xl font-serif text-white leading-[1.1] mb-8 max-w-5xl mx-auto">
          Sua melhor versão com <br />
          <span className="italic text-accent-bronze font-light">Alta Performance.</span>
        </h1>
        
        <p className="text-white/60 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">
          Onde a tecnologia avançada encontra resultados naturais. <br className="hidden md:block" />
          Descubra o protocolo ideal para realçar sua beleza única.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button 
            onClick={onBooking}
            className="bg-accent-bronze text-luxury-dark border border-accent-bronze px-14 py-6 rounded-full font-bold text-xs uppercase tracking-[0.2em] flex items-center gap-3 transition-all btn-luxury btn-glow"
          >
            Agendar Avaliação
            <ArrowRight className="w-4 h-4" />
          </button>
          <button 
            onClick={onExploreTreatments}
            className="text-white font-bold text-xs uppercase tracking-[0.2em] flex items-center gap-2 hover:text-accent-bronze transition-all hover:translate-x-1 active:scale-95 group"
          >
            Nossos Protocolos
            <TrendingUp className="w-4 h-4 opacity-50 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="mt-20 flex flex-wrap justify-center items-center gap-12 opacity-30 text-[10px] font-bold uppercase tracking-widest text-white">
           <span className="border-r border-white/20 pr-12">Tecnologia de Ponta</span>
           <span className="border-r border-white/20 pr-12">Naturalidade</span>
           <span>Exclusividade</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;

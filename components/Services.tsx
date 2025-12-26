
import React from 'react';
import { Service } from '../types';
import { ChevronRight } from 'lucide-react';

const services: Service[] = [
  {
    id: '1',
    title: 'Harmonização Sutil',
    category: 'Injetáveis',
    description: 'Preenchimento com ácido hialurônico focado em realçar pontos estratégicos sem mudar sua essência.',
    imageUrl: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?q=80&w=1600&auto=format&fit=crop'
  },
  {
    id: '2',
    title: 'Bioestimuladores',
    category: 'Sustentação',
    description: 'Estimule a produção natural de colágeno, garantindo firmeza e viço por até 2 anos.',
    imageUrl: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=1600&auto=format&fit=crop'
  },
  {
    id: '3',
    title: 'Ultraformer MPT',
    category: 'Tecnologia',
    description: 'O lifting não invasivo queridinho das celebridades. Efeito imediato de contorno e firmeza.',
    imageUrl: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1600&auto=format&fit=crop'
  },
  {
    id: '4',
    title: 'Limpeza Premium',
    category: 'Facial',
    description: 'Protocolo de 8 etapas para desintoxicação profunda, hidratação e brilho instantâneo.',
    imageUrl: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=1600&auto=format&fit=crop'
  }
];

interface Props {
  onShowMore: () => void;
  onBook: (serviceId: string) => void;
}

const Services: React.FC<Props> = ({ onShowMore, onBook }) => {
  return (
    <section id="tratamentos" className="py-32 bg-luxury-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-accent-bronze text-[10px] font-bold uppercase tracking-[0.5em] mb-4 block">Cardápio de Beleza</span>
            <h2 className="text-5xl font-serif text-white mb-6">Tratamentos <span className="italic">Result Oriented</span></h2>
            <p className="text-white/40 font-light text-lg">Escolha o seu objetivo e deixe nossa equipe de elite cuidar do resto.</p>
          </div>
          <button 
            onClick={onShowMore}
            className="bg-white/5 text-white border border-white/10 px-8 py-4 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-accent-bronze hover:text-luxury-dark transition-all"
          >
            Ver Todos os Protocolos
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.id} className="group bg-luxury-charcoal rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-accent-bronze/30 transition-all">
              <div className="relative h-64 overflow-hidden">
                <img src={service.imageUrl} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute top-4 left-4 bg-luxury-dark/60 backdrop-blur-md px-4 py-1 rounded-full border border-white/10">
                  <span className="text-[8px] font-bold uppercase tracking-widest text-accent-bronze">{service.category}</span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-serif text-white mb-4">{service.title}</h3>
                <p className="text-white/40 text-xs font-light leading-relaxed mb-6 h-12 line-clamp-3">
                  {service.description}
                </p>
                <div className="flex items-center justify-between pt-6 border-t border-white/5">
                  <span className="text-white/20 text-[10px] uppercase font-bold tracking-widest">A partir de R$ 290</span>
                  <button 
                    onClick={() => onBook(service.id)}
                    className="text-accent-bronze text-[10px] font-bold uppercase tracking-widest flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    Agendar <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

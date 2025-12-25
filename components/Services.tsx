
import React from 'react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: '1',
    title: 'Harmonização Sutil',
    category: 'Injetáveis',
    description: 'Realce estrutural focado em naturalidade absoluta e elegância.',
    imageUrl: 'https://images.unsplash.com/photo-1598444440389-d804a22ae902?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '2',
    title: 'Bioestimuladores',
    category: 'Facial',
    description: 'Protocolos de sustentação que estimulam sua própria juventude celular.',
    imageUrl: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '3',
    title: 'Ultraformer MPT',
    category: 'Facial',
    description: 'O padrão ouro em lifting não invasivo e contorno facial imediato.',
    imageUrl: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '4',
    title: 'Body Sculpt',
    category: 'Corporal',
    description: 'Tecnologias combinadas para definição muscular e redução de medidas.',
    imageUrl: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=1000'
  }
];

const Services: React.FC = () => {
  return (
    <section id="tratamentos" className="py-40 bg-luxury-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-32">
          <span className="text-accent-bronze text-[10px] font-bold uppercase tracking-[0.5em] mb-6 block">Curadoria de Procedimentos</span>
          <h2 className="text-6xl font-serif text-white mb-8">Protocolos de Elite</h2>
          <p className="text-white/40 font-light leading-relaxed text-lg">
            Combinamos inteligência clínica com as tecnologias mais desejadas do mundo para entregar resultados que superam expectativas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.id} className="group relative">
              <div className="relative h-[550px] overflow-hidden rounded-[3rem] transition-all duration-700 border border-white/5 group-hover:border-accent-bronze/30">
                <img 
                  src={service.imageUrl} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110 opacity-60 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark via-luxury-dark/20 to-transparent opacity-90 transition-opacity group-hover:opacity-70"></div>
                
                <div className="absolute bottom-10 left-10 right-10 transition-transform duration-500 group-hover:-translate-y-4">
                  <span className="text-accent-bronze text-[10px] font-bold uppercase tracking-widest mb-3 block">{service.category}</span>
                  <h3 className="text-3xl font-serif text-white mb-4 leading-tight">{service.title}</h3>
                  <p className="text-white/50 text-xs font-light leading-relaxed h-0 overflow-hidden group-hover:h-auto group-hover:mt-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-32 text-center">
          <button className="bg-luxury-charcoal text-white border border-white/10 px-12 py-5 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-accent-bronze hover:text-luxury-dark transition-all">
            Explorar todos os protocolos
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;

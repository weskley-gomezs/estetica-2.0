
import React from 'react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: '1',
    title: 'Harmonização Facial',
    category: 'Injetáveis',
    description: 'Realce seus traços com naturalidade e elegância.',
    imageUrl: 'https://images.unsplash.com/photo-1598444440389-d804a22ae902?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '2',
    title: 'Bioestimuladores',
    category: 'Facial',
    description: 'O segredo da juventude eterna através do seu próprio colágeno.',
    imageUrl: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=1000'
  },
  {
    /* Fix: Type '"Estética"' was not assignable to category union type. Changed to 'Facial'. */
    id: '3',
    title: 'Protocolos Glow',
    category: 'Facial',
    description: 'Luminosidade e hidratação para uma pele sempre radiante.',
    imageUrl: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '4',
    title: 'Contorno Corporal',
    category: 'Corporal',
    description: 'Tecnologia avançada para esculpir suas curvas com precisão.',
    imageUrl: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=1000'
  }
];

const Services: React.FC = () => {
  return (
    <section id="tratamentos" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-rose-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block">Alta Performance</span>
          <h2 className="text-5xl font-serif text-stone-800 mb-6">Tratamentos Exclusivos</h2>
          <p className="text-stone-500 font-light leading-relaxed">
            Cada protocolo é desenhado individualmente, respeitando a anatomia e os desejos de cada paciente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service) => (
            <div key={service.id} className="group cursor-pointer">
              <div className="relative h-[450px] overflow-hidden rounded-[2.5rem] mb-6 shadow-sm transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-2">
                <img 
                  src={service.imageUrl} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <span className="text-white/70 text-[10px] font-bold uppercase tracking-widest mb-2 block">{service.category}</span>
                  <h3 className="text-2xl font-serif text-white">{service.title}</h3>
                </div>
              </div>
              <p className="text-stone-500 text-sm font-light leading-relaxed px-2 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <button className="text-rose-400 font-bold uppercase tracking-[0.2em] text-[10px] border-b-2 border-rose-100 pb-2 hover:border-rose-400 transition-all">
            Descobrir todos os procedimentos
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;


import React, { useState, useMemo } from 'react';
import { ChevronRight, Clock, ShieldCheck, Zap, Sparkles, ArrowLeft } from 'lucide-react';
import { Service } from '../types';

const allTreatments: Service[] = [
  {
    id: '1',
    title: 'Harmonização Sutil',
    category: 'Injetáveis',
    description: 'Técnica exclusiva MD Codes para sustentação facial e realce de contornos sem perda da naturalidade.',
    imageUrl: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?q=80&w=1600&auto=format&fit=crop'
  },
  {
    id: '2',
    title: 'Bioestimuladores',
    category: 'Sustentação',
    description: 'Protocolo com Sculptra ou Radiesse para reestruturação dérmica e produção intensa de colágeno.',
    imageUrl: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=1600&auto=format&fit=crop'
  },
  {
    id: '3',
    title: 'Ultraformer MPT',
    category: 'Tecnologia',
    description: 'A evolução do ultrassom micro e macrofocado para lifting facial e queima de gordura localizada.',
    imageUrl: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1600&auto=format&fit=crop'
  },
  {
    id: '4',
    title: 'Lavieen BB Laser',
    category: 'Tecnologia',
    description: 'Laser de Thulium que proporciona efeito de "BB Cream" na pele, tratando poros e manchas.',
    imageUrl: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=1600&auto=format&fit=crop'
  },
  {
    id: '5',
    title: 'Botox Full Face',
    category: 'Injetáveis',
    description: 'Prevenção e tratamento de rugas dinâmicas com foco em um olhar descansado e jovial.',
    imageUrl: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=1600&auto=format&fit=crop'
  },
  {
    id: '6',
    title: 'Lipo sem Cortes',
    category: 'Corporal',
    description: 'Associação de tecnologias para redução de gordura localizada e melhora da silhueta.',
    imageUrl: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1600&auto=format&fit=crop'
  },
  {
    id: '7',
    title: 'Drenagem Método L\'Éclat',
    category: 'Bem-estar',
    description: 'Técnica manual exclusiva para desintoxicação e redução imediata de inchaço.',
    imageUrl: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1600&auto=format&fit=crop'
  },
  {
    id: '8',
    title: 'Protocolo Red Carpet',
    category: 'Facial',
    description: 'Tratamento de brilho imediato para eventos, unindo esfoliação química e hidratação profunda.',
    imageUrl: 'https://images.unsplash.com/photo-1519415387722-a1c3bbef716c?q=80&w=1600&auto=format&fit=crop'
  }
];

interface Props {
  onBack: () => void;
}

const TreatmentsPage: React.FC<Props> = ({ onBack }) => {
  const [activeCategory, setActiveCategory] = useState<string>('Todos');
  const categories = ['Todos', 'Injetáveis', 'Tecnologia', 'Facial', 'Corporal', 'Sustentação'];

  const filteredServices = useMemo(() => {
    if (activeCategory === 'Todos') return allTreatments;
    return allTreatments.filter(s => s.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-luxury-dark pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header da Página */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="space-y-4">
            <button 
              onClick={onBack}
              className="flex items-center gap-2 text-accent-bronze text-[10px] font-bold uppercase tracking-widest hover:text-white transition-colors mb-6"
            >
              <ArrowLeft className="w-3 h-3" /> Voltar para o Início
            </button>
            <h1 className="text-6xl md:text-8xl font-serif text-white leading-tight">
              Curadoria de <br />
              <span className="italic text-accent-bronze">Beleza Avançada</span>
            </h1>
            <p className="text-white/40 max-w-xl font-light text-lg">
              Explore nossa seleção exclusiva de protocolos desenvolvidos com tecnologia de ponta e rigor científico.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all border ${
                  activeCategory === cat 
                    ? 'bg-accent-bronze border-accent-bronze text-luxury-dark' 
                    : 'bg-white/5 border-white/10 text-white/40 hover:border-accent-bronze/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid de Tratamentos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {filteredServices.map((service, index) => (
            <div 
              key={service.id} 
              className="group relative flex flex-col md:flex-row gap-8 p-8 rounded-[3rem] bg-luxury-charcoal/50 border border-white/5 hover:border-accent-bronze/20 transition-all hover:shadow-2xl hover:shadow-accent-bronze/5 animate-in fade-in slide-in-from-bottom-8 duration-700"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-full md:w-2/5 aspect-square md:aspect-auto overflow-hidden rounded-[2rem]">
                <img 
                  src={service.imageUrl} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
              </div>
              
              <div className="flex flex-col justify-between flex-1 py-4">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-accent-bronze">{service.category}</span>
                    <Sparkles className="w-4 h-4 text-accent-bronze/30" />
                  </div>
                  <h3 className="text-3xl font-serif text-white mb-4 group-hover:text-accent-bronze transition-colors">{service.title}</h3>
                  <p className="text-white/40 text-sm font-light leading-relaxed mb-8">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 text-white/30">
                      <Clock className="w-4 h-4 text-accent-bronze/50" />
                      <span className="text-[10px] font-bold uppercase tracking-widest">30-60 min</span>
                    </div>
                    <div className="flex items-center gap-3 text-white/30">
                      <Zap className="w-4 h-4 text-accent-bronze/50" />
                      <span className="text-[10px] font-bold uppercase tracking-widest">Imediato</span>
                    </div>
                  </div>

                  <button className="w-full bg-white/5 border border-white/10 text-white py-4 rounded-2xl text-[10px] font-bold uppercase tracking-widest flex items-center justify-center gap-2 group-hover:bg-accent-bronze group-hover:text-luxury-dark transition-all">
                    Explorar Protocolo <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Footer */}
        <div className="mt-32 p-12 md:p-20 rounded-[4rem] bg-gradient-to-br from-accent-bronze/20 to-transparent border border-accent-bronze/20 text-center">
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-8 italic">Pronta para sua melhor versão?</h2>
          <p className="text-white/50 max-w-2xl mx-auto mb-12 text-lg font-light">
            Nossos especialistas estão prontos para criar um plano personalizado baseado na ciência e na sua beleza única.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-accent-bronze text-luxury-dark px-16 py-6 rounded-full font-bold text-xs uppercase tracking-[0.2em] btn-glow hover:scale-105 transition-all">
              Agendar Avaliação
            </button>
            <button className="border border-white/20 text-white px-16 py-6 rounded-full font-bold text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-luxury-dark transition-all">
              Falar com Advisor
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TreatmentsPage;

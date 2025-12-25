
import React, { useState } from 'react';
import { ArrowLeft, Star, Quote, ChevronRight, Award, CheckCircle2, Camera } from 'lucide-react';

interface ResultItem {
  id: string;
  category: string;
  title: string;
  description: string;
  imageUrl: string;
  patientName: string;
  testimonial: string;
}

const resultsData: ResultItem[] = [
  {
    id: '1',
    category: 'Facial',
    title: 'Harmonização de Terço Médio',
    description: 'Restauração de volume nas maçãs do rosto e suavização do sulco nasogeniano (bigode chinês).',
    imageUrl: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?q=80&w=1600&auto=format&fit=crop',
    patientName: 'Mariana S.',
    testimonial: 'O que mais me encantou foi que ninguém percebeu que "fiz algo", apenas dizem que estou com o semblante mais descansado.'
  },
  {
    id: '2',
    category: 'Rejuvenescimento',
    title: 'Protocolo Full Face Botox',
    description: 'Tratamento de rugas dinâmicas e prevenção de linhas de expressão com foco em naturalidade.',
    imageUrl: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=1600&auto=format&fit=crop',
    patientName: 'Carla M.',
    testimonial: 'Minha testa está lisa, mas minhas sobrancelhas ainda se movem. É exatamente o que eu queria.'
  },
  {
    id: '3',
    category: 'Corporal',
    title: 'Lipo de Alta Definição',
    description: 'Protocolo não invasivo para redução de gordura localizada e tonificação muscular.',
    imageUrl: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=1600&auto=format&fit=crop',
    patientName: 'Beatriz L.',
    testimonial: 'Perdi medidas que a academia não conseguia resolver. O contorno ficou perfeito.'
  },
  {
    id: '4',
    category: 'Facial',
    title: 'Rinomodelação Estruturada',
    description: 'Refinamento da ponta nasal e correção do dorso sem intervenção cirúrgica.',
    imageUrl: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1600&auto=format&fit=crop',
    patientName: 'Juliana R.',
    testimonial: 'Mudou meu perfil completamente. Recuperei minha segurança para tirar fotos.'
  }
];

interface Props {
  onBack: () => void;
}

const ResultsPage: React.FC<Props> = ({ onBack }) => {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const categories = ['Todos', 'Facial', 'Corporal', 'Rejuvenescimento'];

  const filteredResults = activeCategory === 'Todos' 
    ? resultsData 
    : resultsData.filter(r => r.category === activeCategory);

  return (
    <div className="min-h-screen bg-luxury-dark pt-32 pb-24 selection:bg-accent-bronze/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header Section */}
        <div className="mb-20 space-y-6">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-accent-bronze text-[10px] font-bold uppercase tracking-[0.3em] hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-3 h-3" /> Voltar ao Início
          </button>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
            <div className="max-w-3xl">
              <h1 className="text-6xl md:text-8xl font-serif text-white leading-tight mb-8">
                A Arte da <br />
                <span className="italic text-accent-bronze">Transformação.</span>
              </h1>
              <p className="text-white/40 text-lg font-light leading-relaxed">
                Cada rosto conta uma história. Na L'Éclat, honramos sua essência enquanto revelamos sua versão mais radiante através de protocolos baseados na ciência da beleza.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all border ${
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
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32">
          {filteredResults.map((result, index) => (
            <div 
              key={result.id} 
              className="group space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative aspect-[4/5] rounded-[3.5rem] overflow-hidden border border-white/5">
                <img 
                  src={result.imageUrl} 
                  alt={result.title} 
                  className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark via-transparent to-transparent opacity-60"></div>
                <div className="absolute top-8 left-8">
                  <span className="bg-accent-bronze/20 backdrop-blur-md border border-accent-bronze/30 text-accent-bronze px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                    {result.category}
                  </span>
                </div>
                <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end">
                  <div className="space-y-2">
                    <h3 className="text-3xl font-serif text-white">{result.title}</h3>
                    <p className="text-white/60 text-sm font-light italic">{result.patientName}</p>
                  </div>
                  <Camera className="w-6 h-6 text-white/20" />
                </div>
              </div>

              <div className="px-6 space-y-6">
                <div className="flex gap-4">
                  <Quote className="w-8 h-8 text-accent-bronze/20 shrink-0" />
                  <p className="text-white/50 text-lg font-light leading-relaxed italic">
                    {result.testimonial}
                  </p>
                </div>
                <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                   <p className="text-[10px] uppercase font-bold tracking-widest text-white/20">Protocolo L'Éclat Signature</p>
                   <button className="text-accent-bronze text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 hover:text-white transition-colors">
                      Ver Detalhes <ChevronRight className="w-3 h-3" />
                   </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-20 border-y border-white/5 mb-32">
          {[
            { label: 'Procedimentos Realizados', value: '+12.000', icon: CheckCircle2 },
            { label: 'Nível de Satisfação', value: '99.8%', icon: Star },
            { label: 'Pacientes Recorrentes', value: '85%', icon: Award },
            { label: 'Prêmios de Excelência', value: '14', icon: Diamond }
          ].map((stat, i) => (
            <div key={i} className="text-center space-y-3">
              <stat.icon className="w-5 h-5 text-accent-bronze mx-auto mb-4 opacity-50" />
              <p className="text-4xl font-serif text-white">{stat.value}</p>
              <p className="text-[10px] uppercase font-bold tracking-widest text-white/30">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="relative p-12 md:p-24 rounded-[4rem] bg-luxury-charcoal border border-white/5 overflow-hidden text-center">
           <div className="absolute -top-24 -left-24 w-64 h-64 bg-accent-bronze/5 blur-[100px] rounded-full"></div>
           <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-accent-bronze/5 blur-[100px] rounded-full"></div>
           
           <div className="relative z-10 max-w-3xl mx-auto space-y-8">
             <h2 className="text-5xl md:text-6xl font-serif text-white italic">Seu resultado começa aqui.</h2>
             <p className="text-white/40 text-lg font-light leading-relaxed">
               Agende uma consulta de avaliação e permita que nossos especialistas desenhem o protocolo perfeito para sua transformação.
             </p>
             <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
               <button className="bg-accent-bronze text-luxury-dark px-14 py-6 rounded-full font-bold text-xs uppercase tracking-[0.2em] btn-glow hover:scale-105 transition-all">
                 Agendar minha avaliação
               </button>
               <button className="border border-white/10 text-white px-14 py-6 rounded-full font-bold text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-luxury-dark transition-all">
                 Falar com Advisor
               </button>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};

const Diamond = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M6 3h12l4 6-10 12L2 9z" />
    <path d="M11 3L8 9l3 12 3-12-3-6z" />
    <path d="M2 9h20" />
  </svg>
);

export default ResultsPage;

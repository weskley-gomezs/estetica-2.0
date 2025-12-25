
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      
      {/* About Section - Luxury Boutique Style */}
      <section id="clinica" className="py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row items-center gap-20">
            <div className="flex-1 relative">
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1527275393322-8ddae8bd5de9?auto=format&fit=crop&q=80&w=1000" 
                  alt="L'Éclat Concept" 
                  className="w-full h-auto"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-rose-100 rounded-[2rem] -z-0"></div>
              <div className="absolute top-1/2 -right-8 w-24 h-24 bg-champagne rounded-full mix-blend-multiply filter blur-xl opacity-70 -z-0"></div>
            </div>
            
            <div className="flex-1 space-y-8">
              <span className="text-rose-400 text-[10px] font-bold uppercase tracking-[0.3em] block">Nossa Essência</span>
              <h2 className="text-5xl font-serif text-stone-800 leading-tight">Ciência, Arte e <br /><span className="italic text-rose-400">Sensibilidade.</span></h2>
              <p className="text-stone-500 font-light leading-relaxed text-lg">
                A L'Éclat nasceu do desejo de unir a precisão clínica à delicadeza artística. Acreditamos que a verdadeira beleza não reside na perfeição, mas na harmonia entre quem você é e como você se sente.
              </p>
              <p className="text-stone-500 font-light leading-relaxed text-lg">
                Nosso espaço foi projetado para ser um refúgio de serenidade, onde cada detalhe — da iluminação ao aroma — contribui para uma experiência de bem-estar absoluto.
              </p>
              <div className="pt-8">
                <button className="bg-stone-800 text-white px-10 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-rose-400 transition-all soft-glow">
                  Conheça nossa clínica
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Services />

      {/* Testimonials - Elegant Cards */}
      <section id="feedback" className="py-32 bg-luxury">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-serif text-stone-800">Experiências Reais</h2>
            <div className="w-16 h-0.5 bg-rose-200 mx-auto mt-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { name: 'Juliana S.', role: 'Empresária', text: 'Encontrei na L\'Éclat a sutilidade que sempre busquei. O atendimento é verdadeiramente VIP.' },
              { name: 'Carla F.', role: 'Arquiteta', text: 'O atendimento superou minhas expectativas. A clínica é impecável e os resultados são incríveis.' },
              { name: 'Fernanda M.', role: 'Médica', text: 'Rigidez técnica aliada a um ambiente acolhedor. Me sinto em casa a cada visita.' },
            ].map((t, idx) => (
              <div key={idx} className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-500 border border-rose-50 flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-rose-50 rounded-full flex items-center justify-center mb-6">
                  <span className="text-rose-400 font-serif italic text-2xl">"</span>
                </div>
                <p className="text-stone-500 italic mb-8 font-light leading-relaxed">"{t.text}"</p>
                <div>
                  <p className="font-bold text-stone-800 text-sm tracking-wide">{t.name}</p>
                  <p className="text-rose-300 text-[10px] font-bold uppercase tracking-widest mt-1">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default App;

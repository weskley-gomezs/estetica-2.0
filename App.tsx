
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import SmartConsultation from './components/SmartConsultation';
import Footer from './components/Footer';
import { Camera, Map, Star, UserCheck } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-rose-100 selection:text-rose-800">
      <Navbar />
      <Hero />
      
      {/* About Section - Luxury Boutique Style */}
      <section id="clinica" className="py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row items-center gap-20">
            <div className="flex-1 relative">
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl group">
                <img 
                  src="https://images.unsplash.com/photo-1527275393322-8ddae8bd5de9?auto=format&fit=crop&q=80&w=1000" 
                  alt="L'Éclat Concept" 
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-rose-100 rounded-[2rem] -z-0"></div>
              <div className="absolute top-1/2 -right-8 w-24 h-24 bg-champagne rounded-full mix-blend-multiply filter blur-xl opacity-70 -z-0"></div>
            </div>
            
            <div className="flex-1 space-y-8">
              <span className="text-rose-400 text-[10px] font-bold uppercase tracking-[0.3em] block">Nossa Essência</span>
              <h2 className="text-5xl font-serif text-stone-800 leading-tight">Ciência, Arte e <br /><span className="italic text-rose-400">Sensibilidade.</span></h2>
              <p className="text-stone-500 font-light leading-relaxed text-lg">
                A L'Éclat nasceu do desejo de unir a precisão clínica à delicadeza artística. Acreditamos que a verdadeira beleza não reside na perfeição, mas na harmonia entre quem você é e como você se sente.
              </p>
              <div className="grid grid-cols-2 gap-8 py-4">
                <div className="flex flex-col gap-2">
                  <UserCheck className="w-5 h-5 text-rose-400" />
                  <h4 className="font-serif text-lg text-stone-800">Atendimento VIP</h4>
                  <p className="text-stone-500 text-xs font-light">Privacidade e exclusividade em cada sessão.</p>
                </div>
                <div className="flex flex-col gap-2">
                  <Star className="w-5 h-5 text-rose-400" />
                  <h4 className="font-serif text-lg text-stone-800">Tecnologia</h4>
                  <p className="text-stone-500 text-xs font-light">Equipamentos de última geração mundial.</p>
                </div>
              </div>
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

      {/* Bento Gallery Section */}
      <section className="py-32 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
             <h2 className="text-4xl font-serif text-stone-800 mb-4">O Refúgio L'Éclat</h2>
             <p className="text-stone-500 font-light max-w-xl mx-auto">Explore cada detalhe do nosso santuário de beleza e os resultados que transformam vidas.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[800px]">
            <div className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-3xl shadow-lg group">
              <img src="https://images.unsplash.com/photo-1519415387722-a1c3bbef716c?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Clinic Interior" />
              <div className="absolute bottom-6 left-6 text-white z-10">
                <p className="text-[10px] font-bold uppercase tracking-widest mb-1">Ambiente</p>
                <h3 className="text-2xl font-serif italic">Serenidade & Luxo</h3>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            </div>
            <div className="md:col-span-1 md:row-span-1 relative overflow-hidden rounded-3xl shadow-lg group">
              <img src="https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Treatment" />
              <div className="absolute inset-0 bg-rose-400/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                 <Camera className="text-white w-8 h-8" />
              </div>
            </div>
            <div className="md:col-span-1 md:row-span-1 bg-white p-8 rounded-3xl shadow-lg flex flex-col justify-center border border-rose-100">
               <Star className="text-rose-400 mb-4" />
               <h4 className="text-xl font-serif mb-2 text-stone-800">Referência</h4>
               <p className="text-stone-500 text-xs font-light leading-relaxed">Eleita pela terceira vez a melhor clínica boutique de estética avançada.</p>
            </div>
            <div className="md:col-span-2 md:row-span-1 relative overflow-hidden rounded-3xl shadow-lg group">
              <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Tech" />
              <div className="absolute top-6 left-6 bg-white/80 backdrop-blur-md px-4 py-1.5 rounded-full">
                <span className="text-stone-800 text-[10px] font-bold uppercase tracking-widest">Tecnologia Laser</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SmartConsultation />

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
              <div key={idx} className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-500 border border-rose-50 flex flex-col items-center text-center group">
                <div className="w-12 h-12 bg-rose-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-rose-100 transition-colors">
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
      
      {/* Floating Appointment Button */}
      <div className="fixed bottom-8 right-8 z-40">
        <button className="bg-stone-800 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:bg-rose-400 transition-all hover:scale-110 group">
          <Map className="w-6 h-6 group-hover:hidden" />
          <span className="hidden group-hover:block text-[10px] font-bold uppercase tracking-tighter">Loc</span>
        </button>
      </div>
    </div>
  );
};

export default App;

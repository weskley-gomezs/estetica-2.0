
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import SmartConsultation from './components/SmartConsultation';
import Footer from './components/Footer';
import { Camera, Map, Star, UserCheck, Diamond, Quote } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-accent-bronze/30 selection:text-white">
      <Navbar />
      <Hero />
      
      {/* Manifesto Section */}
      <section id="clinica" className="py-40 bg-luxury-dark relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative group">
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/5">
                <img 
                  src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=1000" 
                  alt="L'Éclat Concept" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 glass p-8 rounded-3xl hidden md:block border border-white/10 animate-float">
                <p className="font-serif text-3xl text-accent-bronze">15+</p>
                <p className="text-[10px] uppercase tracking-widest text-white/50">Anos de Excelência</p>
              </div>
            </div>
            
            <div className="space-y-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-accent-bronze text-[10px] font-bold uppercase tracking-[0.3em]">
                <Diamond className="w-3 h-3" /> Nossa Filosofia
              </div>
              
              <h2 className="text-6xl md:text-7xl font-serif text-white leading-tight">
                Beleza é uma <br />
                <span className="italic font-light text-accent-bronze">declaração de amor.</span>
              </h2>
              
              <p className="text-white/60 font-light leading-relaxed text-xl max-w-xl">
                Na L'Éclat, não seguimos padrões; nós os criamos. Cada rosto é uma tela, cada procedimento é uma pincelada de precisão cirúrgica e sensibilidade artística.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 pt-4">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-full bg-accent-bronze/10 flex items-center justify-center text-accent-bronze">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif text-xl text-white">Privacidade Absoluta</h4>
                  <p className="text-white/40 text-xs font-light leading-relaxed">Fluxo de atendimento desenhado para garantir total discrição aos nossos pacientes.</p>
                </div>
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-full bg-accent-bronze/10 flex items-center justify-center text-accent-bronze">
                    <Star className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif text-xl text-white">Curadoria Científica</h4>
                  <p className="text-white/40 text-xs font-light leading-relaxed">Apenas tecnologias padrão ouro mundial, com comprovação de resultados reais.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Services />

      {/* Gallery - Dark Bento Style */}
      <section className="py-40 bg-luxury-charcoal relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-xl">
              <h2 className="text-5xl font-serif text-white mb-6">O Santuário</h2>
              <p className="text-white/40 font-light">Ambientes pensados para o seu bem-estar sensorial, onde o tempo parece parar.</p>
            </div>
            <button className="text-accent-bronze font-bold text-[10px] uppercase tracking-widest border-b border-accent-bronze/30 pb-2 hover:border-accent-bronze transition-all">
              Ver Galeria Completa
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-[800px] md:h-[600px]">
            <div className="md:col-span-8 relative overflow-hidden rounded-[2rem] group border border-white/5">
              <img src="https://images.unsplash.com/photo-1519415387722-a1c3bbef716c?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Clinic Interior" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
              <div className="absolute bottom-10 left-10 text-white">
                <span className="text-[10px] font-bold uppercase tracking-widest text-accent-bronze">Main Lounge</span>
                <h3 className="text-3xl font-serif italic mt-2">Conforto & Sofisticação</h3>
              </div>
            </div>
            <div className="md:col-span-4 relative overflow-hidden rounded-[2rem] group border border-white/5">
              <img src="https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all" alt="Treatment" />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                 <Camera className="text-white/20 w-12 h-12 group-hover:scale-125 transition-transform" />
              </div>
            </div>
            <div className="md:col-span-4 relative overflow-hidden rounded-[2rem] glass p-10 flex flex-col justify-between group hover:bg-accent-bronze/5 transition-colors">
               <Diamond className="text-accent-bronze w-8 h-8" />
               <div className="space-y-4">
                 <h4 className="text-2xl font-serif text-white">Exclusividade</h4>
                 <p className="text-white/40 text-xs font-light leading-relaxed">Nossa agenda é limitada para garantir que cada paciente receba atenção integral e sem pressa.</p>
               </div>
            </div>
            <div className="md:col-span-8 relative overflow-hidden rounded-[2rem] group border border-white/5">
              <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Tech" />
              <div className="absolute top-10 right-10 bg-black/40 backdrop-blur-md px-6 py-2 rounded-full border border-white/10">
                <span className="text-white text-[10px] font-bold uppercase tracking-widest">Tecnologia Laser</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SmartConsultation />

      {/* Testimonials - Noir Edition */}
      <section id="feedback" className="py-40 bg-luxury-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-serif text-white">Vozes da L'Éclat</h2>
            <div className="w-12 h-px bg-accent-bronze/30 mx-auto mt-8"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { name: 'Juliana S.', role: 'Empresária', text: 'Finalmente encontrei um lugar que entende que o "menos é mais". Minha harmonização ficou imperceptível e elegante.' },
              { name: 'Carla F.', role: 'Arquiteta', text: 'O atendimento é impecável. Desde o café de boas-vindas até o pós-procedimento. Realmente diferenciado.' },
              { name: 'Fernanda M.', role: 'Médica', text: 'Como médica, sou exigente com técnica e biossegurança. A L\'Éclat é referência absoluta em ambos.' },
            ].map((t, idx) => (
              <div key={idx} className="relative group p-10 bg-white/[0.02] border border-white/5 rounded-[3rem] transition-all hover:bg-white/[0.05]">
                <Quote className="w-10 h-10 text-accent-bronze/20 absolute top-8 right-8" />
                <p className="text-white/50 italic mb-10 font-light leading-relaxed relative z-10 text-lg">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent-bronze/20 flex items-center justify-center font-serif text-accent-bronze">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-bold text-white text-sm tracking-wide">{t.name}</p>
                    <p className="text-accent-bronze text-[10px] font-bold uppercase tracking-widest mt-1">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      
      {/* WhatsApp Button */}
      <div className="fixed bottom-10 right-10 z-50">
        <a 
          href="https://wa.me/5511999999999" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-accent-bronze text-luxury-dark w-16 h-16 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(212,163,115,0.4)] hover:scale-110 transition-all group"
        >
          <Map className="w-6 h-6 group-hover:rotate-12 transition-transform" />
          <div className="absolute right-full mr-4 bg-white text-luxury-dark py-2 px-4 rounded-xl text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl">
            Fale Conosco
          </div>
        </a>
      </div>
    </div>
  );
};

export default App;

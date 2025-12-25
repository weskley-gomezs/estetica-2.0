
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import SmartConsultation from './components/SmartConsultation';
import Footer from './components/Footer';
import TreatmentsPage from './components/TreatmentsPage';
import IAAdvisorPage from './components/IAAdvisorPage';
import ResultsPage from './components/ResultsPage';
import ContactPage from './components/ContactPage';
import BookingPage from './components/BookingPage';
import { 
  CheckCircle2, 
  Star, 
  MessageCircle, 
  ShieldCheck, 
  Clock, 
  TrendingUp, 
  Award, 
  Users,
  ChevronRight,
  Sparkles
} from 'lucide-react';

type ViewState = 'home' | 'treatments' | 'ia' | 'results' | 'contact' | 'booking';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('home');

  // Scroll top on view change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  const navigateToTreatments = () => setView('treatments');
  const navigateToIA = () => setView('ia');
  const navigateToHome = () => setView('home');
  const navigateToResults = () => setView('results');
  const navigateToContact = () => setView('contact');
  const navigateToBooking = () => setView('booking');

  // Helper para renderizar a view atual
  const renderView = () => {
    switch(view) {
      case 'treatments':
        return <TreatmentsPage onBack={navigateToHome} />;
      case 'ia':
        return <IAAdvisorPage onBack={navigateToHome} />;
      case 'results':
        return <ResultsPage onBack={navigateToHome} />;
      case 'contact':
        return <ContactPage onBack={navigateToHome} />;
      case 'booking':
        return <BookingPage onBack={navigateToHome} />;
      default:
        return (
          <>
            <Hero onExploreTreatments={navigateToTreatments} onBooking={navigateToBooking} />
            
            {/* Trust Badges */}
            <section className="bg-luxury-charcoal py-8 border-y border-white/5">
              <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-wrap justify-around items-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all">
                  <div className="flex items-center gap-2"><Award className="w-4 h-4 text-accent-bronze" /><span className="text-[9px] uppercase tracking-widest font-bold">Protocolos Premiados</span></div>
                  <div className="flex items-center gap-2"><Users className="w-4 h-4 text-accent-bronze" /><span className="text-[9px] uppercase tracking-widest font-bold">+5k Pacientes Felizes</span></div>
                  <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-accent-bronze" /><span className="text-[9px] uppercase tracking-widest font-bold">Biossegurança Master</span></div>
                  <div className="flex items-center gap-2"><Star className="w-4 h-4 text-accent-bronze" /><span className="text-[9px] uppercase tracking-widest font-bold">Nota Máxima Google</span></div>
                </div>
              </div>
            </section>

            {/* Social Proof Section (Snippet na Home) */}
            <section id="resultados" className="py-32 bg-luxury-dark overflow-hidden">
              <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                  <div className="max-w-xl">
                     <span className="text-accent-bronze text-[10px] font-bold uppercase tracking-[0.5em] mb-4 block">Transformações Reais</span>
                     <h2 className="text-5xl font-serif text-white mb-6">Excelência em <span className="italic">Resultados.</span></h2>
                     <p className="text-white/30 font-light">A beleza que você deseja, com a naturalidade que você merece.</p>
                  </div>
                  <button 
                    onClick={navigateToResults}
                    className="text-accent-bronze text-[10px] font-bold uppercase tracking-widest hover:text-white transition-all active:scale-95 border-b border-accent-bronze/30 pb-2"
                  >
                    Ver Galeria de Casos Completa
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    { 
                      label: 'Rejuvenescimento', 
                      time: '2 sessões',
                      img: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?q=80&w=1200&auto=format&fit=crop'
                    },
                    { 
                      label: 'Harmonização', 
                      time: 'Imediato',
                      img: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=1200&auto=format&fit=crop'
                    },
                    { 
                      label: 'Contorno Corporal', 
                      time: '4 sessões',
                      img: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=1200&auto=format&fit=crop'
                    }
                  ].map((item, i) => (
                    <div key={i} className="group relative aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-white/5 cursor-pointer">
                      <img src={item.img} alt={item.label} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark via-transparent to-transparent opacity-90"></div>
                      <div className="absolute bottom-8 left-8">
                        <span className="text-accent-bronze text-[8px] font-bold uppercase tracking-widest mb-2 block">{item.time}</span>
                        <h3 className="text-white font-serif text-2xl group-hover:text-accent-bronze transition-colors">{item.label}</h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <Services onShowMore={navigateToTreatments} />

            {/* IA Section CTA */}
            <section className="py-32 bg-luxury-charcoal">
               <div className="max-w-7xl mx-auto px-6">
                  <div className="grid lg:grid-cols-2 gap-20 items-center">
                     <div className="space-y-8">
                        <span className="text-accent-bronze text-[10px] font-bold uppercase tracking-[0.5em] block">Tecnologia L'Éclat</span>
                        <h2 className="text-5xl md:text-6xl font-serif text-white">Sua Pele, <br /><span className="italic">Decodificada.</span></h2>
                        <p className="text-white/40 text-lg font-light leading-relaxed">
                          Não escolha às cegas. Nossa Inteligência Artificial analisa seus objetivos para sugerir os protocolos mais eficazes.
                        </p>
                        <button 
                          onClick={navigateToIA}
                          className="bg-accent-bronze text-luxury-dark px-12 py-5 rounded-full font-bold uppercase text-[10px] tracking-widest transition-all btn-luxury btn-glow"
                        >
                          Abrir Advisor Grátis
                        </button>
                     </div>
                     <div className="relative">
                        <div className="absolute -inset-4 bg-accent-bronze/10 blur-3xl rounded-full"></div>
                        <div className="glass p-12 rounded-[4rem] border-accent-bronze/20 text-center relative z-10 hover:border-accent-bronze/40 transition-colors group">
                          <Sparkles className="w-12 h-12 text-accent-bronze mx-auto mb-8 animate-pulse group-hover:scale-110 transition-transform" />
                          <p className="text-white/60 font-serif italic text-xl">"A ferramenta mais precisa que já utilizei para entender as necessidades da minha pele."</p>
                          <div className="mt-8 flex justify-center gap-1">
                            {[1,2,3,4,5].map(s => <Star key={s} className="w-3 h-3 text-accent-bronze fill-accent-bronze" />)}
                          </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen selection:bg-accent-bronze/30 selection:text-white font-sans bg-luxury-dark">
      <Navbar 
        onNavigateTreatments={navigateToTreatments} 
        onNavigateHome={navigateToHome} 
        onNavigateIA={navigateToIA} 
        onNavigateResults={navigateToResults}
        onNavigateContact={navigateToContact}
        onNavigateBooking={navigateToBooking}
      />
      {renderView()}
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

const WhatsAppButton = () => (
  <div className="fixed bottom-8 right-8 z-50">
    <a 
      href="https://wa.me/5561981535040?text=Olá! Gostaria de agendar uma avaliação na L'Éclat." 
      target="_blank" 
      rel="noopener noreferrer"
      className="bg-[#25D366] text-white w-16 h-16 rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(37,211,102,0.4)] hover:scale-110 active:scale-90 transition-all group relative"
    >
      <MessageCircle className="w-8 h-8" />
      <span className="absolute right-full mr-4 bg-white text-black py-2 px-4 rounded-xl text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl">
         Falar com Especialista Agora
      </span>
      <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-[10px] font-bold animate-bounce">1</span>
    </a>
  </div>
);

export default App;

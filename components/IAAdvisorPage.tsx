
import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Loader2, 
  Send, 
  RefreshCw, 
  ShieldCheck, 
  Diamond, 
  ChevronRight, 
  ArrowLeft,
  User,
  Activity,
  Zap,
  CheckCircle2
} from 'lucide-react';
import { getSkinConsultation } from '../services/geminiService';
import { ConsultationResponse } from '../types';

interface Props {
  onBack: () => void;
}

const IAAdvisorPage: React.FC<Props> = ({ onBack }) => {
  const [step, setStep] = useState<'intro' | 'form' | 'loading' | 'result'>('intro');
  const [concerns, setConcerns] = useState('');
  const [skinType, setSkinType] = useState('');
  const [result, setResult] = useState<ConsultationResponse | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!concerns || !skinType) return;
    
    setStep('loading');
    
    // Pequeno delay artificial para aumentar a percepção de processamento complexo (Luxury UX)
    const [response] = await Promise.all([
      getSkinConsultation(concerns, skinType),
      new Promise(resolve => setTimeout(resolve, 2500))
    ]);
    
    setResult(response);
    setStep('result');
  };

  const handleFinalLead = () => {
    const message = `Olá! Acabei de gerar meu Diagnóstico VIP por IA. Pele: ${skinType}. Preocupações: ${concerns}. Gostaria de validar com um especialista.`;
    window.open(`https://wa.me/5561981535040?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-luxury-dark text-white selection:bg-accent-bronze/30">
      {/* Background Decorativo Imersivo */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-accent-bronze/5 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent-bronze/5 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-24 min-h-screen flex flex-col">
        {/* Navigation */}
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-accent-bronze text-[10px] font-bold uppercase tracking-[0.3em] hover:text-white transition-colors mb-12 w-fit"
        >
          <ArrowLeft className="w-3 h-3" /> Voltar ao Início
        </button>

        <div className="flex-1 flex flex-col">
          {step === 'intro' && (
            <div className="flex-1 flex flex-col justify-center items-center text-center space-y-8 animate-in fade-in zoom-in duration-700">
              <div className="p-4 bg-accent-bronze/10 rounded-full border border-accent-bronze/20 mb-4">
                <Diamond className="w-10 h-10 text-accent-bronze" />
              </div>
              <h1 className="text-5xl md:text-7xl font-serif leading-tight">
                Seu Futuro Estético, <br />
                <span className="italic text-accent-bronze">Desenhado por IA.</span>
              </h1>
              <p className="text-white/40 max-w-xl text-lg font-light leading-relaxed">
                Bem-vinda ao seu Studio Privado de Diagnóstico. Nossa tecnologia neural analisa suas necessidades para criar um protocolo de ultra-luxo exclusivo para você.
              </p>
              <button 
                onClick={() => setStep('form')}
                className="bg-accent-bronze text-luxury-dark px-16 py-6 rounded-full font-bold text-xs uppercase tracking-[0.3em] btn-glow hover:scale-105 transition-all mt-8"
              >
                Iniciar Consulta Digital
              </button>
              <div className="flex gap-8 pt-12 opacity-20 text-[8px] font-bold uppercase tracking-widest">
                <span className="flex items-center gap-2"><ShieldCheck className="w-3 h-3" /> 100% Privado</span>
                <span className="flex items-center gap-2"><Activity className="w-3 h-3" /> Base Científica</span>
                <span className="flex items-center gap-2"><User className="w-3 h-3" /> Curadoria Humana</span>
              </div>
            </div>
          )}

          {step === 'form' && (
            <div className="flex-1 flex flex-col justify-center animate-in fade-in slide-in-from-bottom-8 duration-700">
              <div className="grid lg:grid-cols-2 gap-16 items-start">
                <div className="space-y-6">
                  <span className="text-accent-bronze text-[10px] font-bold uppercase tracking-[0.5em] block">Etapa 01 / Identificação</span>
                  <h2 className="text-4xl md:text-5xl font-serif">Como você <br />descreve sua pele?</h2>
                  <p className="text-white/40 font-light">Selecione a textura predominante para que a IA ajuste a precisão dos tratamentos.</p>
                </div>

                <div className="glass p-8 md:p-12 rounded-[3rem] border-accent-bronze/10">
                  <form onSubmit={handleSubmit} className="space-y-10">
                    <div className="grid grid-cols-2 gap-4">
                      {['Seca', 'Oleosa', 'Mista', 'Sensível'].map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setSkinType(t)}
                          className={`py-5 rounded-2xl text-[10px] font-bold uppercase tracking-widest transition-all border ${
                            skinType === t 
                              ? 'bg-accent-bronze border-accent-bronze text-luxury-dark shadow-xl shadow-accent-bronze/20' 
                              : 'bg-white/5 border-white/10 text-white/40 hover:border-accent-bronze/30'
                          }`}
                        >
                          Pele {t}
                        </button>
                      ))}
                    </div>

                    <div className="space-y-4">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-white/30 ml-2">Preocupações & Objetivos</label>
                      <textarea 
                        placeholder="Ex: Gostaria de melhorar a firmeza do rosto, tratar manchas de sol e dar mais viço à pele..."
                        value={concerns}
                        onChange={(e) => setConcerns(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-[2rem] p-8 h-48 focus:ring-1 focus:ring-accent-bronze/30 outline-none transition-all text-sm font-light leading-relaxed text-white placeholder:text-white/10 resize-none"
                      />
                    </div>

                    <button 
                      disabled={!skinType || !concerns}
                      className="w-full bg-white text-luxury-dark py-6 rounded-full font-bold uppercase tracking-[0.2em] text-[10px] flex items-center justify-center gap-3 hover:bg-accent-bronze transition-all disabled:opacity-20 group"
                    >
                      Processar Diagnóstico VIP
                      <Zap className="w-3 h-3 fill-current group-hover:animate-pulse" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          )}

          {step === 'loading' && (
            <div className="flex-1 flex flex-col justify-center items-center text-center space-y-12">
              <div className="relative">
                <div className="w-32 h-32 border-2 border-accent-bronze/20 rounded-full animate-spin border-t-accent-bronze"></div>
                <Diamond className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-accent-bronze animate-pulse" />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-serif italic text-accent-bronze">Analisando Perfil Dermatológico...</h3>
                <div className="flex flex-col gap-2 items-center">
                   <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-white/20">Acessando Base L'Éclat de Ciência</p>
                   <div className="w-48 h-[2px] bg-white/5 overflow-hidden">
                      <div className="w-full h-full bg-accent-bronze animate-[loading_2s_infinite]"></div>
                   </div>
                </div>
              </div>
            </div>
          )}

          {step === 'result' && result && (
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
              <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                <div>
                  <span className="text-accent-bronze text-[10px] font-bold uppercase tracking-[0.5em] block mb-4">Seu Beauty Report Final</span>
                  <h2 className="text-5xl font-serif">A Jornada da sua <br /><span className="italic text-accent-bronze">Nova Versão</span></h2>
                </div>
                <button 
                  onClick={() => setStep('form')}
                  className="flex items-center gap-2 text-white/30 text-[10px] font-bold uppercase tracking-widest hover:text-white transition-colors border-b border-white/10 pb-2"
                >
                  <RefreshCw className="w-3 h-3" /> Novo Diagnóstico
                </button>
              </div>

              <div className="grid lg:grid-cols-3 gap-8 mb-16">
                <div className="lg:col-span-2 space-y-8">
                  <div className="glass p-10 md:p-14 rounded-[3.5rem] border-accent-bronze/10 relative overflow-hidden">
                    <Sparkles className="absolute top-8 right-8 w-6 h-6 text-accent-bronze/20" />
                    <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent-bronze mb-8 flex items-center gap-2">
                       <CheckCircle2 className="w-3 h-3" /> Análise do Advisor
                    </h3>
                    <p className="text-2xl md:text-3xl font-serif text-white/80 leading-relaxed italic">
                      "{result.recommendations}"
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="glass p-10 rounded-[2.5rem] space-y-6">
                      <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent-bronze">Protocolos em Cabine</h4>
                      <div className="space-y-4">
                        {result.suggestedTreatments.map((t, i) => (
                          <div key={i} className="flex items-center gap-4 text-white/60 group">
                            <div className="w-8 h-[1px] bg-accent-bronze/30 group-hover:w-12 transition-all"></div>
                            <span className="text-xs font-light tracking-wide">{t}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="glass p-10 rounded-[2.5rem] space-y-6">
                      <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent-bronze">Ritual Home Care</h4>
                      <p className="text-white/40 text-sm font-light leading-relaxed">
                        {result.careRoutine}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="bg-accent-bronze p-12 rounded-[3.5rem] text-luxury-dark space-y-8 h-full flex flex-col justify-between">
                    <div>
                      <Diamond className="w-8 h-8 mb-8" />
                      <h3 className="text-3xl font-serif mb-4">Pronta para o Próximo Nível?</h3>
                      <p className="text-sm font-medium leading-relaxed opacity-70">
                        Este diagnóstico é o ponto de partida. Nossos especialistas estão prontos para validar cada detalhe presencialmente.
                      </p>
                    </div>
                    
                    <div className="space-y-4">
                      <button 
                        onClick={handleFinalLead}
                        className="w-full bg-luxury-dark text-white py-6 rounded-full font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-white hover:text-black transition-all flex items-center justify-center gap-3"
                      >
                        Agendar com Advisor <ChevronRight className="w-4 h-4" />
                      </button>
                      <p className="text-[9px] uppercase font-bold text-center tracking-widest opacity-40">Horários Exclusivos Disponíveis</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <style>{`
        @keyframes loading {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

export default IAAdvisorPage;

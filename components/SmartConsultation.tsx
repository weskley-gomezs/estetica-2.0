
import React, { useState } from 'react';
// Added ChevronRight to the lucide-react import list
import { Sparkles, Loader2, Send, RefreshCw, CheckCircle2, ShieldCheck, Diamond, ChevronRight } from 'lucide-react';
import { getSkinConsultation } from '../services/geminiService';
import { ConsultationResponse } from '../types';

const SmartConsultation: React.FC = () => {
  const [concerns, setConcerns] = useState('');
  const [skinType, setSkinType] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ConsultationResponse | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!concerns || !skinType) return;
    setLoading(true);
    const response = await getSkinConsultation(concerns, skinType);
    setResult(response);
    setLoading(false);
  };

  const handleFinalLead = () => {
    const message = `Olá! Realizei o diagnóstico via IA no site. Minha pele é ${skinType} e minhas preocupações são: ${concerns}. Gostaria de agendar uma consulta presencial.`;
    window.open(`https://wa.me/5561981535040?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="ia" className="py-32 relative bg-luxury-dark overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-bronze/5 blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          
          <div className="lg:w-5/12 space-y-8">
            <span className="text-accent-bronze text-[10px] font-bold uppercase tracking-[0.5em] block">Inovação L'Éclat</span>
            <h2 className="text-5xl md:text-7xl font-serif text-white leading-tight">
              Sua Pele Analisada por <br />
              <span className="italic text-accent-bronze">Inteligência Artificial.</span>
            </h2>
            <p className="text-white/50 text-lg font-light leading-relaxed">
              Não sabe qual o melhor tratamento para você? Nosso Advisor Inteligente analisa seu perfil e sugere o protocolo ideal em segundos.
            </p>

            <ul className="space-y-4 pt-4">
              {[
                'Análise imediata de preocupações clínicas',
                'Sugestão personalizada de home-care',
                'Indicação de protocolos de cabine',
                'Direcionamento para equipe médica'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white/40 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-accent-bronze/50" /> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:w-7/12 w-full">
            <div className="glass p-8 md:p-12 rounded-[3rem] shadow-2xl relative">
              {!result ? (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-2 gap-4">
                    {['Seca', 'Oleosa', 'Mista', 'Sensível'].map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setSkinType(t)}
                        className={`py-4 rounded-2xl text-[10px] font-bold uppercase tracking-widest transition-all border ${
                          skinType === t 
                            ? 'bg-accent-bronze border-accent-bronze text-luxury-dark shadow-lg shadow-accent-bronze/20' 
                            : 'bg-white/5 border-white/10 text-white/50 hover:border-accent-bronze/30'
                        }`}
                      >
                        Pele {t}
                      </button>
                    ))}
                  </div>

                  <textarea 
                    placeholder="Conte-nos o que você gostaria de melhorar (ex: manchas, rugas finas, flacidez)..."
                    value={concerns}
                    onChange={(e) => setConcerns(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 h-40 focus:ring-2 focus:ring-accent-bronze/30 outline-none transition-all text-sm font-light leading-relaxed text-white placeholder:text-white/20"
                  />

                  <button 
                    disabled={loading || !skinType || !concerns}
                    className="w-full bg-accent-bronze text-luxury-dark py-6 rounded-2xl font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-white transition-all disabled:opacity-30 btn-glow"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Gerando seu Diagnóstico VIP...
                      </>
                    ) : (
                      <>
                        Gerar Diagnóstico Personalizado
                        <span className="sr-only">Botão para iniciar a análise por IA</span>
                        <Send className="w-3 h-3" />
                      </>
                    )}
                  </button>
                  <p className="text-center text-[8px] uppercase tracking-widest text-white/20 flex items-center justify-center gap-2">
                    <ShieldCheck className="w-3 h-3" /> Seus dados estão seguros e protegidos
                  </p>
                </form>
              ) : (
                <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="flex justify-between items-center pb-6 border-b border-white/10">
                    <h3 className="text-2xl font-serif text-white italic">Seu Protocolo Recomendado</h3>
                    <button onClick={() => setResult(null)} className="text-white/20 hover:text-accent-bronze transition-colors">
                      <RefreshCw className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="space-y-8">
                    <div className="p-6 bg-accent-bronze/5 border border-accent-bronze/10 rounded-2xl">
                      <p className="text-white/70 font-light italic text-sm leading-relaxed">
                        "{result.recommendations}"
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-accent-bronze">Protocolos Sugeridos</p>
                        <div className="flex flex-wrap gap-2">
                          {result.suggestedTreatments.map((t, i) => (
                            <span key={i} className="bg-white/5 border border-white/10 text-white/60 px-4 py-2 rounded-full text-[10px] font-bold">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-4">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-accent-bronze">Cuidado em Casa</p>
                        <p className="text-white/40 text-xs leading-relaxed font-light">
                          {result.careRoutine}
                        </p>
                      </div>
                    </div>

                    <div className="pt-6">
                      <button 
                        onClick={handleFinalLead}
                        className="w-full bg-white text-luxury-dark py-6 rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-accent-bronze transition-all shadow-xl flex items-center justify-center gap-3 group"
                      >
                        Agendar Avaliação e Validar Diagnóstico
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                      <p className="text-center mt-4 text-[10px] text-white/30 uppercase tracking-[0.2em]">Restam apenas 3 horários para esta semana</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartConsultation;

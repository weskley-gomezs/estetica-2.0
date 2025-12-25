
import React, { useState } from 'react';
import { Sparkles, Loader2, Heart, RefreshCw, Send, ShieldCheck, Diamond } from 'lucide-react';
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

  return (
    <section id="ia" className="py-32 relative bg-luxury-charcoal">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          
          <div className="lg:w-1/2 space-y-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent-bronze/20 bg-white/5 text-accent-bronze text-[10px] font-bold uppercase tracking-widest">
              <Diamond className="w-3 h-3" /> Exclusividade Tecnológica
            </div>
            
            <h2 className="text-5xl md:text-7xl font-serif leading-tight text-white">
              Seu Diagnóstico <br />
              <span className="italic font-light text-accent-bronze">Silencioso & Preciso.</span>
            </h2>
            
            <p className="text-white/40 text-lg font-light leading-relaxed max-w-lg">
              Utilizamos inteligência de última geração para mapear as necessidades da sua pele. Uma consultoria privada, disponível agora no conforto do seu ambiente.
            </p>

            <div className="grid grid-cols-2 gap-8 pt-6">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-accent-bronze">
                  <Heart className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-lg text-white">Cuidado Ético</h4>
                <p className="text-xs text-white/30 font-light">Análises pautadas na saúde e longevidade celular.</p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-accent-bronze">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-lg text-white">Dados Seguros</h4>
                <p className="text-xs text-white/30 font-light">Privacidade absoluta para sua jornada de beleza.</p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="glass p-1 rounded-[3rem] shadow-2xl relative overflow-hidden group">
              <div className="bg-luxury-dark p-10 md:p-14 rounded-[2.8rem] transition-all">
                {!result ? (
                  <form onSubmit={handleSubmit} className="space-y-10">
                    <div className="text-center">
                      <h3 className="font-serif text-3xl text-white mb-2 italic">Private Advisor</h3>
                      <div className="w-8 h-px bg-accent-bronze/30 mx-auto"></div>
                    </div>

                    <div className="space-y-6">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-white/30 text-center">Identidade da sua Pele</p>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {['Seca', 'Oleosa', 'Mista', 'Sensível'].map((t) => (
                          <button
                            key={t}
                            type="button"
                            onClick={() => setSkinType(t)}
                            className={`py-3 px-2 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all border ${
                              skinType === t 
                                ? 'bg-accent-bronze border-accent-bronze text-luxury-dark' 
                                : 'bg-white/5 border-white/10 text-white/50 hover:border-accent-bronze/50'
                            }`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-white/30 text-center">Desejos & Preocupações</p>
                      <textarea 
                        placeholder="Ex: Gostaria de melhorar o contorno mandibular e reduzir o cansaço do olhar..."
                        value={concerns}
                        onChange={(e) => setConcerns(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 h-32 focus:ring-1 focus:ring-accent-bronze/30 focus:bg-white/10 outline-none transition-all text-sm font-light italic leading-relaxed text-white placeholder:text-white/20"
                      />
                    </div>

                    <button 
                      disabled={loading || !skinType || !concerns}
                      className="w-full bg-accent-bronze text-luxury-dark py-6 rounded-2xl font-bold uppercase tracking-widest text-[10px] flex items-center justify-center gap-3 hover:bg-white transition-all disabled:opacity-30 shadow-lg active:scale-95"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Consultando Inteligência...
                        </>
                      ) : (
                        <>
                          Iniciar Consultoria VIP
                          <Send className="w-3 h-3" />
                        </>
                      )}
                    </button>
                  </form>
                ) : (
                  <div className="space-y-8 animate-in fade-in zoom-in-95 duration-500">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-accent-bronze"></div>
                        <h3 className="text-2xl font-serif text-white italic">Sua Jornada Sugerida</h3>
                      </div>
                      <button onClick={() => setResult(null)} className="text-white/20 hover:text-accent-bronze transition-colors">
                        <RefreshCw className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="space-y-8">
                      <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
                        <p className="text-white/60 font-light italic text-sm leading-relaxed">
                          "{result.recommendations}"
                        </p>
                      </div>

                      <div className="space-y-4">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-white/30">Protocolos de Cabine</p>
                        <div className="flex flex-wrap gap-2">
                          {result.suggestedTreatments.map((t, i) => (
                            <span key={i} className="bg-accent-bronze/10 border border-accent-bronze/20 text-accent-bronze px-4 py-2 rounded-full text-[10px] font-bold">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="pt-6 border-t border-white/10">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-4">Ritual Home Care</p>
                        <p className="text-white/40 text-xs leading-relaxed font-light">
                          {result.careRoutine}
                        </p>
                      </div>

                      <button className="w-full bg-white text-luxury-dark py-5 rounded-2xl font-bold uppercase tracking-widest text-[10px] hover:bg-accent-bronze transition-all shadow-xl group">
                        Agendar com um Especialista
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartConsultation;


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
    <section id="ia" className="py-32 relative bg-[#fdfaf9]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          
          <div className="lg:w-1/2 space-y-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-rose-200 bg-white/50 text-rose-400 text-[10px] font-bold uppercase tracking-widest">
              <Diamond className="w-3 h-3" /> Exclusividade Tecnológica
            </div>
            
            <h2 className="text-5xl md:text-7xl font-serif leading-tight text-stone-900">
              Seu Diagnóstico <br />
              <span className="italic font-light text-rose-400">Silencioso & Preciso.</span>
            </h2>
            
            <p className="text-stone-500 text-lg font-light leading-relaxed max-w-lg">
              Utilizamos inteligência de última geração para mapear as necessidades da sua pele antes mesmo do seu primeiro café em nossa clínica. Uma consultoria privada, disponível agora.
            </p>

            <div className="grid grid-cols-2 gap-8 pt-6">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-rose-400 border border-rose-50">
                  <Heart className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-lg">Cuidado Ético</h4>
                <p className="text-xs text-stone-400 font-light">Análises pautadas na saúde e longevidade celular.</p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-rose-400 border border-rose-50">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-lg">Dados Seguros</h4>
                <p className="text-xs text-stone-400 font-light">Privacidade absoluta para sua jornada de beleza.</p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="glass p-1 rounded-[3rem] shadow-2xl relative overflow-hidden group">
              <div className="bg-white p-10 md:p-14 rounded-[2.8rem] transition-all">
                {!result ? (
                  <form onSubmit={handleSubmit} className="space-y-10">
                    <div className="text-center">
                      <h3 className="font-serif text-3xl text-stone-800 mb-2">Private Advisor</h3>
                      <div className="w-8 h-px bg-rose-200 mx-auto"></div>
                    </div>

                    <div className="space-y-6">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-stone-400 text-center">Identidade da sua Pele</p>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {['Seca', 'Oleosa', 'Mista', 'Sensível'].map((t) => (
                          <button
                            key={t}
                            type="button"
                            onClick={() => setSkinType(t)}
                            className={`py-3 px-2 rounded-xl text-xs font-medium transition-all border ${
                              skinType === t 
                                ? 'bg-stone-900 border-stone-900 text-white' 
                                : 'bg-stone-50 border-stone-100 text-stone-500 hover:border-rose-200'
                            }`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-stone-400 text-center">Desejos & Preocupações</p>
                      <textarea 
                        placeholder="Ex: Gostaria de melhorar o contorno mandibular e reduzir o cansaço do olhar..."
                        value={concerns}
                        onChange={(e) => setConcerns(e.target.value)}
                        className="w-full bg-stone-50 border border-stone-100 rounded-2xl p-6 h-32 focus:ring-1 focus:ring-rose-200 focus:bg-white outline-none transition-all text-sm font-light italic leading-relaxed"
                      />
                    </div>

                    <button 
                      disabled={loading || !skinType || !concerns}
                      className="w-full bg-rose-400 text-white py-6 rounded-2xl font-bold uppercase tracking-widest text-[10px] flex items-center justify-center gap-3 hover:bg-stone-900 transition-all disabled:opacity-30 shadow-lg active:scale-95"
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
                        <div className="w-2 h-2 rounded-full bg-rose-400"></div>
                        <h3 className="text-2xl font-serif text-stone-800 italic">Sua Jornada Sugerida</h3>
                      </div>
                      <button onClick={() => setResult(null)} className="text-stone-300 hover:text-rose-400 transition-colors">
                        <RefreshCw className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="space-y-8">
                      <div className="bg-stone-50 p-8 rounded-3xl border border-rose-50/50">
                        <p className="text-stone-600 font-light italic text-sm leading-relaxed">
                          "{result.recommendations}"
                        </p>
                      </div>

                      <div className="space-y-4">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-stone-400">Protocolos de Cabine</p>
                        <div className="flex flex-wrap gap-2">
                          {result.suggestedTreatments.map((t, i) => (
                            <span key={i} className="bg-white border border-rose-100 text-rose-800 px-4 py-2 rounded-full text-[10px] font-bold shadow-sm">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="pt-6 border-t border-rose-50">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-4">Ritual Home Care</p>
                        <p className="text-stone-500 text-xs leading-relaxed font-light">
                          {result.careRoutine}
                        </p>
                      </div>

                      <button className="w-full bg-stone-900 text-white py-5 rounded-2xl font-bold uppercase tracking-widest text-[10px] hover:bg-rose-400 transition-all shadow-xl group">
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
      
      {/* Decorative Blur Elements */}
      <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-rose-100/30 rounded-full blur-[120px] -z-0"></div>
    </section>
  );
};

export default SmartConsultation;

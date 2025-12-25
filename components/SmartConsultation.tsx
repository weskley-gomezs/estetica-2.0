
import React, { useState } from 'react';
import { Sparkles, Loader2, Send, CheckCircle2, Heart, RefreshCw } from 'lucide-react';
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
    <section id="ia" className="py-24 bg-rose-50/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-10">
            <div className="inline-flex items-center gap-3 bg-white px-5 py-2.5 rounded-full text-rose-400 text-xs font-bold uppercase tracking-[0.2em] shadow-sm border border-rose-100">
              <Sparkles className="w-4 h-4" />
              L'ÉCLAT AI Concierge
            </div>
            
            <h2 className="text-5xl md:text-6xl font-serif text-stone-800 leading-tight">
              Uma análise única <br /> para uma <span className="italic text-rose-400">beleza única.</span>
            </h2>
            
            <p className="text-stone-500 text-lg font-light leading-relaxed">
              Inicie sua jornada de autocuidado com nosso concierge inteligente. Desenvolvido para sugerir protocolos exclusivos antes mesmo de sua primeira visita física.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: 'Personalização Extrema', icon: Heart },
                { title: 'Algoritmos de Beleza', icon: Sparkles },
                { title: 'Segurança de Dados', icon: CheckCircle2 },
                { title: 'Protocolos VIP', icon: Send }
              ].map((item) => (
                <div key={item.title} className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-rose-50 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center text-rose-400">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span className="text-stone-700 font-medium text-sm tracking-wide">{item.title}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 w-full max-w-xl">
            <div className="bg-white p-10 rounded-[3rem] shadow-[0_20px_50px_rgba(226,149,120,0.1)] border border-rose-100 relative">
              {!result ? (
                <form onSubmit={handleSubmit} className="space-y-8 animate-in fade-in duration-700">
                  <div className="text-center mb-8">
                    <p className="font-serif text-2xl text-stone-800 italic">Como podemos te cuidar hoje?</p>
                  </div>

                  <div>
                    <label className="block text-stone-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-4 text-center">Qual o seu tipo de pele?</label>
                    <div className="grid grid-cols-2 gap-3">
                      {['Seca', 'Oleosa', 'Mista', 'Sensível'].map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setSkinType(type)}
                          className={`py-4 px-4 rounded-2xl text-sm font-medium transition-all border ${
                            skinType === type 
                              ? 'bg-rose-400 border-rose-400 text-white shadow-lg scale-[1.02]' 
                              : 'bg-stone-50 border-stone-100 text-stone-500 hover:border-rose-200'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-stone-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-4 text-center">Fale sobre suas preocupações estéticas</label>
                    <textarea 
                      placeholder="Ex: Gostaria de tratar as linhas ao redor dos olhos e melhorar o brilho da pele para um evento em duas semanas."
                      value={concerns}
                      onChange={(e) => setConcerns(e.target.value)}
                      rows={4}
                      className="w-full bg-stone-50 border border-stone-100 rounded-3xl p-6 focus:ring-2 focus:ring-rose-200 focus:bg-white outline-none transition-all placeholder:text-stone-300 text-stone-600 italic leading-relaxed"
                    ></textarea>
                  </div>

                  <button 
                    disabled={loading || !skinType || !concerns}
                    className="w-full bg-stone-800 text-white py-6 rounded-3xl font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-rose-400 transition-all disabled:opacity-30 disabled:cursor-not-allowed shadow-xl active:scale-95"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Analizando Simetria...
                      </>
                    ) : (
                      <>
                        Gerar Meu Protocolo L'Éclat
                        <Sparkles className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <div className="animate-in slide-in-from-bottom-8 duration-700">
                  <div className="flex justify-between items-center mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-rose-400 animate-ping"></div>
                      <h3 className="text-2xl font-serif text-stone-800 italic">Seu Diagnóstico IA</h3>
                    </div>
                    <button 
                      onClick={() => setResult(null)}
                      className="text-stone-400 hover:text-rose-400 transition-colors p-2"
                      title="Nova Análise"
                    >
                      <RefreshCw className="w-4 h-4" />
                    </button>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-stone-50 p-6 rounded-[2rem] border border-rose-50">
                      <p className="text-stone-600 italic leading-relaxed text-sm">
                        "{result.recommendations}"
                      </p>
                    </div>

                    <div className="space-y-4">
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400">Protocolos Sugeridos</p>
                      <div className="flex flex-wrap gap-2">
                        {result.suggestedTreatments.map((t, idx) => (
                          <span key={idx} className="bg-rose-50 text-rose-800 px-5 py-2.5 rounded-full text-[11px] font-bold border border-rose-100 animate-in fade-in slide-in-from-left-2 duration-300" style={{ animationDelay: `${idx * 150}ms` }}>
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 border-t border-rose-50">
                       <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400 mb-3">Ritual Domiciliar Recomendado</p>
                       <p className="text-stone-500 text-sm leading-relaxed font-light">
                        {result.careRoutine}
                       </p>
                    </div>
                  </div>

                  <button className="w-full mt-10 bg-rose-400 text-white py-5 rounded-[2rem] font-bold uppercase tracking-widest text-xs hover:bg-rose-500 transition-all shadow-xl hover:-translate-y-1">
                    Agendar Avaliação Médica
                  </button>
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

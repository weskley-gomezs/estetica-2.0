
import React, { useState } from 'react';
import { Sparkles, Loader2, Send, CheckCircle2, Heart } from 'lucide-react';
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
              Inicie sua jornada de autocuidado com nosso guia inteligente. Desenvolvido para entender suas necessidades antes mesmo de nos conhecermos pessoalmente.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: 'Personalização', icon: Heart },
                { title: 'Ciência de Dados', icon: Sparkles },
                { title: 'Privacidade', icon: CheckCircle2 },
                { title: 'Agilidade', icon: Send }
              ].map((item) => (
                <div key={item.title} className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-rose-50 shadow-sm">
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
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="text-center mb-8">
                    <p className="font-serif text-2xl text-stone-800 italic">Como podemos te cuidar hoje?</p>
                  </div>

                  <div>
                    <label className="block text-stone-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-4">Seu tipo de pele</label>
                    <div className="grid grid-cols-2 gap-3">
                      {['Seca', 'Oleosa', 'Mista', 'Sensível'].map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setSkinType(type)}
                          className={`py-3 px-4 rounded-2xl text-sm font-medium transition-all border ${
                            skinType === type 
                              ? 'bg-rose-400 border-rose-400 text-white shadow-md' 
                              : 'bg-stone-50 border-stone-100 text-stone-500 hover:border-rose-200'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-stone-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-4">Sua principal preocupação</label>
                    <textarea 
                      placeholder="Ex: Gostaria de tratar as linhas ao redor dos olhos e melhorar o brilho da pele."
                      value={concerns}
                      onChange={(e) => setConcerns(e.target.value)}
                      rows={3}
                      className="w-full bg-stone-50 border border-stone-100 rounded-2xl p-5 focus:ring-2 focus:ring-rose-200 focus:bg-white outline-none transition-all placeholder:text-stone-300 text-stone-600 italic"
                    ></textarea>
                  </div>

                  <button 
                    disabled={loading || !skinType || !concerns}
                    className="w-full bg-rose-400 text-white py-5 rounded-2xl font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-rose-800 transition-all disabled:opacity-30 disabled:cursor-not-allowed soft-glow"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Criando seu plano...
                      </>
                    ) : (
                      <>
                        Iniciar Análise IA
                        <Sparkles className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <div className="animate-in zoom-in-95 duration-500">
                  <div className="flex justify-between items-center mb-10">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-rose-400 animate-pulse"></div>
                      <h3 className="text-xl font-serif text-stone-800 italic">Resultado da Análise</h3>
                    </div>
                    <button 
                      onClick={() => setResult(null)}
                      className="text-rose-400 text-[10px] font-bold uppercase tracking-widest border-b border-rose-200"
                    >
                      Nova Consulta
                    </button>
                  </div>
                  
                  <div className="space-y-8">
                    <div className="bg-rose-50/50 p-6 rounded-3xl border border-rose-100">
                      <p className="text-stone-700 italic leading-relaxed text-sm">
                        "{result.recommendations}"
                      </p>
                    </div>

                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400 mb-4">Sugestão de Protocolos</p>
                      <div className="flex flex-wrap gap-2">
                        {result.suggestedTreatments.map((t, idx) => (
                          <span key={idx} className="bg-white border border-rose-100 text-rose-800 px-4 py-2 rounded-xl text-xs font-semibold">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-rose-50">
                       <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400 mb-2">Cuidados em casa</p>
                       <p className="text-stone-500 text-sm leading-relaxed font-light">
                        {result.careRoutine}
                       </p>
                    </div>
                  </div>

                  <button className="w-full mt-10 bg-stone-800 text-white py-5 rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-stone-700 transition-all soft-glow">
                    Agendar Avaliação VIP
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

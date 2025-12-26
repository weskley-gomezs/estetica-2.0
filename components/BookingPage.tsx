
import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  Calendar as CalendarIcon, 
  Clock, 
  User, 
  ChevronRight, 
  CheckCircle2, 
  Sparkles,
  ShieldCheck,
  Diamond,
  Loader2,
  MessageCircle
} from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

interface Props {
  onBack: () => void;
  initialService?: string;
}

type BookingStep = 'service' | 'datetime' | 'details' | 'success';

const services = [
  { id: 'facial', name: 'Harmonização Sutil', duration: '60 min' },
  { id: '1', name: 'Harmonização Sutil', duration: '60 min' }, // ID from treatments page
  { id: 'bio', name: 'Bioestimuladores', duration: '45 min' },
  { id: '2', name: 'Bioestimuladores', duration: '45 min' }, // ID from treatments page
  { id: 'ultra', name: 'Ultraformer MPT', duration: '40 min' },
  { id: '3', name: 'Ultraformer MPT', duration: '40 min' }, // ID from treatments page
  { id: 'lavieen', name: 'Lavieen BB Laser', duration: '30 min' },
  { id: '4', name: 'Lavieen BB Laser', duration: '30 min' }, // ID from treatments page
  { id: 'corpo', name: 'Lipo de Alta Definição', duration: '90 min' },
];

const timeSlots = ['09:00', '10:30', '13:00', '14:30', '16:00', '17:30', '19:00'];

const BookingPage: React.FC<Props> = ({ onBack, initialService }) => {
  // If we have an initial service, start at 'datetime' step
  const [step, setStep] = useState<BookingStep>(initialService ? 'datetime' : 'service');
  const [selectedService, setSelectedService] = useState(initialService || '');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState('');
  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [prepGuide, setPrepGuide] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  // Sync state if initialService changes
  useEffect(() => {
    if (initialService) {
      setSelectedService(initialService);
      setStep('datetime');
    }
  }, [initialService]);

  // Generate next 7 days
  const availableDates = Array.from({ length: 7 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i + 1);
    return {
      full: d.toLocaleDateString('pt-BR'),
      day: d.toLocaleDateString('pt-BR', { weekday: 'short' }).replace('.', ''),
      num: d.getDate(),
      month: d.toLocaleDateString('pt-BR', { month: 'short' }).replace('.', '')
    };
  });

  const generatePrepGuide = async (serviceName: string) => {
    setIsGenerating(true);
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Gere um guia curto e luxuoso de preparação pré-procedimento para the tratamento: ${serviceName}. Inclua 3 pontos cruciais de cuidados 24h antes. Tom sofisticado.`,
        config: {
          systemInstruction: "Você é o Concierge Digital da L'Éclat Aesthetics. Suas orientações devem ser curtas, diretas e extremamente elegantes."
        }
      });
      setPrepGuide(response.text || '');
    } catch (e) {
      console.error(e);
      setPrepGuide('Evite exposição solar intensa e uso de ácidos 24h antes do seu procedimento. Hidrate-se bem.');
    }
    setIsGenerating(false);
  };

  const handleComplete = async () => {
    setStep('success');
    const serviceName = services.find(s => s.id === selectedService)?.name || 'Tratamento Estético';
    await generatePrepGuide(serviceName);
  };

  const sendToWhatsApp = () => {
    const serviceName = services.find(s => s.id === selectedService)?.name || 'Tratamento Estético';
    const message = `*NOVO AGENDAMENTO L'ÉCLAT*\n\n` +
                    `*Cliente:* ${userName}\n` +
                    `*WhatsApp:* ${userPhone}\n` +
                    `*Serviço:* ${serviceName}\n` +
                    `*Data:* ${selectedDate}\n` +
                    `*Horário:* ${selectedTime}\n\n` +
                    `_Enviado via Portal de Agendamento VIP_`;
    
    window.open(`https://wa.me/5561981535040?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-luxury-dark pt-32 pb-24 selection:bg-accent-bronze/30">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        {/* Header Control */}
        <div className="flex items-center justify-between mb-16">
          <button 
            onClick={step === 'service' ? onBack : () => {
              if (initialService && step === 'datetime') {
                onBack();
              } else {
                setStep(prev => prev === 'datetime' ? 'service' : 'datetime');
              }
            }}
            className="flex items-center gap-2 text-accent-bronze text-[10px] font-bold uppercase tracking-[0.3em] hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3 h-3" /> {step === 'service' || (initialService && step === 'datetime') ? 'Voltar ao Início' : 'Etapa Anterior'}
          </button>
          
          <div className="flex gap-2">
            {(['service', 'datetime', 'details'] as BookingStep[]).map((s, i) => (
              <div 
                key={s} 
                className={`h-1 w-8 rounded-full transition-all duration-500 ${
                  step === s ? 'bg-accent-bronze w-12' : i < (['service', 'datetime', 'details'].indexOf(step)) ? 'bg-accent-bronze/40' : 'bg-white/10'
                }`} 
              />
            ))}
          </div>
        </div>

        {/* Dynamic Steps */}
        <div className="min-h-[60vh]">
          {step === 'service' && (
            <div className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
              <div className="space-y-4">
                <span className="text-accent-bronze text-[10px] font-bold uppercase tracking-[0.5em] block">Passo 01</span>
                <h1 className="text-5xl font-serif text-white">Escolha seu <br /><span className="italic text-accent-bronze">Protocolo.</span></h1>
              </div>

              <div className="grid gap-4">
                {services.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => { setSelectedService(s.id); setStep('datetime'); }}
                    className={`group flex items-center justify-between p-8 rounded-3xl border transition-all text-left ${
                      selectedService === s.id ? 'bg-accent-bronze border-accent-bronze text-luxury-dark' : 'bg-white/5 border-white/10 text-white/60 hover:border-accent-bronze/30'
                    }`}
                  >
                    <div className="space-y-1">
                      <p className="font-serif text-2xl">{s.name}</p>
                      <p className="text-[10px] uppercase font-bold tracking-widest opacity-60 flex items-center gap-2">
                        <Clock className="w-3 h-3" /> Duração estimada: {s.duration}
                      </p>
                    </div>
                    <ChevronRight className={`w-5 h-5 transition-transform group-hover:translate-x-2 ${selectedService === s.id ? 'text-luxury-dark' : 'text-accent-bronze'}`} />
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 'datetime' && (
            <div className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
              <div className="space-y-4">
                <span className="text-accent-bronze text-[10px] font-bold uppercase tracking-[0.5em] block">Passo 02</span>
                <h1 className="text-5xl font-serif text-white">Momento de <br /><span className="italic text-accent-bronze">Cuidado.</span></h1>
                {selectedService && (
                   <p className="text-accent-bronze text-[10px] font-bold uppercase tracking-widest">Protocolo Selecionado: {services.find(s => s.id === selectedService)?.name}</p>
                )}
              </div>

              <div className="space-y-8">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-6">Dias Disponíveis</p>
                  <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
                    {availableDates.map((date) => (
                      <button
                        key={date.full}
                        onClick={() => setSelectedDate(date.full)}
                        className={`shrink-0 w-24 h-32 rounded-3xl flex flex-col items-center justify-center gap-2 border transition-all ${
                          selectedDate === date.full ? 'bg-accent-bronze border-accent-bronze text-luxury-dark shadow-xl shadow-accent-bronze/20' : 'bg-white/5 border-white/10 text-white/40'
                        }`}
                      >
                        <span className="text-[10px] uppercase font-bold tracking-widest">{date.day}</span>
                        <span className="text-3xl font-serif">{date.num}</span>
                        <span className="text-[10px] uppercase font-bold tracking-widest">{date.month}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {selectedDate && (
                  <div className="animate-in fade-in duration-500">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-6">Horários Disponíveis</p>
                    <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          onClick={() => { setSelectedTime(time); setStep('details'); }}
                          className={`py-4 rounded-2xl text-xs font-bold transition-all border ${
                            selectedTime === time ? 'bg-accent-bronze border-accent-bronze text-luxury-dark' : 'bg-white/5 border-white/10 text-white/60 hover:border-accent-bronze/30'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {step === 'details' && (
            <div className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
              <div className="space-y-4">
                <span className="text-accent-bronze text-[10px] font-bold uppercase tracking-[0.5em] block">Passo 03</span>
                <h1 className="text-5xl font-serif text-white">Confirme sua <br /><span className="italic text-accent-bronze">Presença.</span></h1>
              </div>

              <div className="glass p-10 rounded-[3rem] border-accent-bronze/10 space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/30 ml-2">Nome Completo</label>
                    <input 
                      type="text" 
                      placeholder="Como prefere ser chamada?" 
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white outline-none focus:ring-1 focus:ring-accent-bronze/30 text-sm font-light" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/30 ml-2">WhatsApp para Lembrete</label>
                    <input 
                      type="tel" 
                      placeholder="(61) 98153-5040" 
                      value={userPhone}
                      onChange={(e) => setUserPhone(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white outline-none focus:ring-1 focus:ring-accent-bronze/30 text-sm font-light" 
                    />
                  </div>
                </div>

                <div className="p-8 bg-white/5 rounded-3xl border border-white/10 space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/40 uppercase tracking-widest text-[10px] font-bold">Resumo da Reserva</span>
                    <Diamond className="w-4 h-4 text-accent-bronze opacity-30" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-2xl font-serif text-white">{services.find(s => s.id === selectedService)?.name}</p>
                    <p className="text-accent-bronze font-light text-sm flex items-center gap-2">
                      <CalendarIcon className="w-4 h-4" /> {selectedDate} às {selectedTime}
                    </p>
                  </div>
                </div>

                <button 
                  onClick={handleComplete}
                  disabled={!userName || !userPhone}
                  className="w-full bg-accent-bronze text-luxury-dark py-6 rounded-full font-bold uppercase tracking-[0.2em] text-[10px] btn-luxury btn-glow disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  Finalizar Agendamento VIP
                </button>
              </div>
            </div>
          )}

          {step === 'success' && (
            <div className="flex-1 flex flex-col items-center justify-center text-center space-y-12 animate-in fade-in zoom-in duration-1000">
              <div className="w-24 h-24 bg-accent-bronze/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-accent-bronze/20">
                <CheckCircle2 className="w-12 h-12 text-accent-bronze" />
              </div>
              
              <div className="space-y-6">
                <h2 className="text-5xl font-serif text-white italic">Agendamento Realizado.</h2>
                <p className="text-white/40 text-lg font-light max-w-lg mx-auto leading-relaxed">
                  Sua solicitação foi processada. Para garantir sua vaga, envie agora o comprovante de reserva para nosso WhatsApp.
                </p>
                <button 
                  onClick={sendToWhatsApp}
                  className="bg-[#25D366] text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-3 mx-auto hover:scale-105 transition-all shadow-xl shadow-[#25D366]/20"
                >
                  <MessageCircle className="w-5 h-5" /> Enviar para o WhatsApp
                </button>
              </div>

              {/* AI Preparation Guide */}
              <div className="w-full glass p-10 rounded-[3.5rem] border-accent-bronze/20 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Sparkles className="w-12 h-12 text-accent-bronze" />
                </div>
                
                <h3 className="text-[10px] font-bold uppercase tracking-[0.5em] text-accent-bronze mb-6 flex items-center justify-center gap-2">
                  <Sparkles className="w-3 h-3" /> Guia de Preparação IA
                </h3>
                
                {isGenerating ? (
                  <div className="py-8 flex flex-col items-center gap-4">
                    <Loader2 className="w-6 h-6 text-accent-bronze animate-spin" />
                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/20">Gerando recomendações personalizadas...</p>
                  </div>
                ) : (
                  <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                    <p className="text-white/70 font-serif text-xl italic leading-relaxed">
                      {prepGuide || "Carregando orientações exclusivas..."}
                    </p>
                    <div className="pt-6 border-t border-white/5 flex items-center justify-center gap-8">
                       <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-accent-bronze/40" /><span className="text-[8px] font-bold uppercase tracking-widest text-white/30">Protocolo Seguro</span></div>
                       <div className="flex items-center gap-2"><Diamond className="w-4 h-4 text-accent-bronze/40" /><span className="text-[8px] font-bold uppercase tracking-widest text-white/30">Experiência VIP</span></div>
                    </div>
                  </div>
                )}
              </div>

              <button 
                onClick={onBack}
                className="text-white/30 hover:text-accent-bronze text-[10px] font-bold uppercase tracking-widest border-b border-white/5 pb-2 transition-all"
              >
                Retornar ao Portal
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingPage;

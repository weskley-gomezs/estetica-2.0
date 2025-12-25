
import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  ArrowLeft, 
  Instagram, 
  Facebook, 
  Diamond,
  CheckCircle2,
  ShieldCheck
} from 'lucide-react';

interface Props {
  onBack: () => void;
}

const ContactPage: React.FC<Props> = ({ onBack }) => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    // Simulação de envio de formulário de luxo
    setTimeout(() => setFormState('success'), 2000);
  };

  const handleOpenMaps = () => {
    const address = encodeURIComponent("Av. Brigadeiro Faria Lima, 4500 - Itaim Bibi, São Paulo - SP");
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${address}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-luxury-dark pt-32 pb-24 selection:bg-accent-bronze/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Navigation back */}
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-accent-bronze text-[10px] font-bold uppercase tracking-[0.3em] hover:text-white transition-colors mb-12"
        >
          <ArrowLeft className="w-3 h-3" /> Voltar ao Início
        </button>

        <div className="grid lg:grid-cols-2 gap-20">
          {/* Coluna de Informações */}
          <div className="space-y-12">
            <div>
              <span className="text-accent-bronze text-[10px] font-bold uppercase tracking-[0.5em] block mb-4">Atendimento Exclusivo</span>
              <h1 className="text-6xl md:text-8xl font-serif text-white leading-tight mb-8">
                Inicie sua <br />
                <span className="italic text-accent-bronze">Jornada VIP.</span>
              </h1>
              <p className="text-white/40 text-lg font-light leading-relaxed max-w-lg">
                Nossa equipe de concierge está à disposição para agendar sua consulta e personalizar sua experiência na L'Éclat.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              <div className="glass p-8 rounded-[2.5rem] border-white/5 space-y-4">
                <MapPin className="w-5 h-5 text-accent-bronze" />
                <h4 className="text-white font-serif text-xl">Localização</h4>
                <p className="text-white/40 text-xs font-light leading-relaxed">
                  Av. Brigadeiro Faria Lima, 4500<br />
                  Itaim Bibi, São Paulo - SP<br />
                  CEP: 04538-132
                </p>
              </div>

              <div className="glass p-8 rounded-[2.5rem] border-white/5 space-y-4">
                <Phone className="w-5 h-5 text-accent-bronze" />
                <h4 className="text-white font-serif text-xl">Fale Conosco</h4>
                <p className="text-white/40 text-xs font-light leading-relaxed">
                  (61) 98153-5040<br />
                  (61) 98153-5040<br />
                  contato@leclat.com.br
                </p>
              </div>

              <div className="glass p-8 rounded-[2.5rem] border-white/5 space-y-4">
                <Clock className="w-5 h-5 text-accent-bronze" />
                <h4 className="text-white font-serif text-xl">Horários</h4>
                <p className="text-white/40 text-xs font-light leading-relaxed">
                  Segunda a Sexta: 08h - 20h<br />
                  Sábados: 09h - 14h<br />
                  Domingos: Fechado
                </p>
              </div>

              <div className="glass p-8 rounded-[2.5rem] border-white/5 space-y-4">
                <Diamond className="w-5 h-5 text-accent-bronze" />
                <h4 className="text-white font-serif text-xl">Social</h4>
                <div className="flex gap-4">
                  <a href="#" className="text-white/20 hover:text-accent-bronze transition-colors"><Instagram className="w-5 h-5" /></a>
                  <a href="#" className="text-white/20 hover:text-accent-bronze transition-colors"><Facebook className="w-5 h-5" /></a>
                  <a href="#" className="text-white/20 hover:text-accent-bronze transition-colors"><Mail className="w-5 h-5" /></a>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna do Formulário */}
          <div className="relative">
            <div className="absolute -inset-10 bg-accent-bronze/5 blur-[100px] rounded-full pointer-events-none"></div>
            
            <div className="glass p-10 md:p-16 rounded-[4rem] border-accent-bronze/10 relative z-10">
              {formState !== 'success' ? (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-white/30 ml-2">Nome Completo</label>
                      <input 
                        required
                        type="text" 
                        placeholder="Ex: Maria Augusta Silva"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white outline-none focus:ring-1 focus:ring-accent-bronze/30 transition-all placeholder:text-white/10 text-sm font-light"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-white/30 ml-2">WhatsApp</label>
                        <input 
                          required
                          type="tel" 
                          placeholder="(61) 98153-5040"
                          className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white outline-none focus:ring-1 focus:ring-accent-bronze/30 transition-all placeholder:text-white/10 text-sm font-light"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-white/30 ml-2">E-mail</label>
                        <input 
                          required
                          type="email" 
                          placeholder="seu@email.com"
                          className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white outline-none focus:ring-1 focus:ring-accent-bronze/30 transition-all placeholder:text-white/10 text-sm font-light"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-white/30 ml-2">Interesse Principal</label>
                      <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white outline-none focus:ring-1 focus:ring-accent-bronze/30 transition-all text-sm font-light appearance-none cursor-pointer">
                        <option value="harmonizacao">Harmonização Facial</option>
                        <option value="bioestimuladores">Bioestimuladores de Colágeno</option>
                        <option value="tecnologias">Tecnologias (Ultraformer/Lavieen)</option>
                        <option value="corporal">Protocolos Corporais</option>
                        <option value="outro">Outros Assuntos</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-white/30 ml-2">Mensagem (Opcional)</label>
                      <textarea 
                        placeholder="Como podemos ajudar você hoje?"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white h-32 outline-none focus:ring-1 focus:ring-accent-bronze/30 transition-all placeholder:text-white/10 text-sm font-light resize-none"
                      />
                    </div>
                  </div>

                  <button 
                    disabled={formState === 'submitting'}
                    className="w-full bg-accent-bronze text-luxury-dark py-6 rounded-full font-bold uppercase tracking-[0.2em] text-[10px] flex items-center justify-center gap-3 transition-all btn-glow hover:scale-105 disabled:opacity-50"
                  >
                    {formState === 'submitting' ? 'Enviando Solicitação...' : 'Solicitar Atendimento Concierge'}
                    <Send className="w-3 h-3" />
                  </button>

                  <div className="flex items-center justify-center gap-4 pt-4 opacity-20">
                    <div className="flex items-center gap-2"><ShieldCheck className="w-3 h-3" /><span className="text-[8px] font-bold uppercase tracking-widest">LGPD Compliance</span></div>
                    <div className="flex items-center gap-2 font-bold text-[8px] uppercase tracking-widest">Private Network</div>
                  </div>
                </form>
              ) : (
                <div className="text-center space-y-8 animate-in fade-in zoom-in duration-700">
                  <div className="w-20 h-20 bg-accent-bronze/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-accent-bronze" />
                  </div>
                  <h3 className="text-3xl font-serif text-white">Solicitação Recebida</h3>
                  <p className="text-white/40 text-sm font-light leading-relaxed max-w-xs mx-auto">
                    Nossa equipe de concierge entrará em contato em breve para confirmar os detalhes do seu atendimento.
                  </p>
                  <button 
                    onClick={() => setFormState('idle')}
                    className="text-accent-bronze text-[10px] font-bold uppercase tracking-widest hover:text-white transition-colors border-b border-accent-bronze/20 pb-1"
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Map Section - Interactive Google Maps */}
        <div className="mt-32 rounded-[4rem] h-[500px] bg-luxury-charcoal relative overflow-hidden border border-white/5 group shadow-2xl">
           <iframe 
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.745428448937!2d-46.684128!3d-23.585573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5742617781b1%3A0x6b499119747d7c6b!2sAv.%20Brig.%20Faria%20Lima%2C%204500%20-%20Itaim%20Bibi%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004538-132!5e0!3m2!1spt-BR!2sbr!4v1710000000000!5m2!1spt-BR!2sbr" 
             width="100%" 
             height="100%" 
             style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(1.2) opacity(0.6)' }} 
             allowFullScreen={true} 
             loading="lazy" 
             referrerPolicy="no-referrer-when-downgrade"
             className="grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:opacity-100"
           />
           <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
              <div className="glass p-8 rounded-3xl border-accent-bronze/20 text-center space-y-4 shadow-2xl pointer-events-auto backdrop-blur-md">
                 <MapPin className="w-10 h-10 text-accent-bronze mx-auto" />
                 <h4 className="text-white font-serif text-2xl italic">Venha nos visitar</h4>
                 <button 
                   onClick={handleOpenMaps}
                   className="bg-accent-bronze text-luxury-dark px-10 py-4 rounded-full text-[10px] font-bold uppercase tracking-widest hover:scale-105 active:scale-95 transition-all btn-luxury"
                 >
                    Como Chegar (Google Maps)
                 </button>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

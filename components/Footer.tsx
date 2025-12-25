
import React from 'react';
import { Instagram, Facebook, Mail, Phone, MapPin, Diamond, ShieldCheck } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contato" className="bg-luxury-charcoal text-white/40 py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <div className="flex items-center space-x-3 text-white">
              <Diamond className="h-6 w-6 text-accent-bronze" />
              <span className="font-serif text-2xl tracking-[0.3em] uppercase">L'Éclat</span>
            </div>
            <p className="text-sm leading-relaxed font-light">
              Especialistas em realçar sua melhor versão através da estética de alta performance e protocolos exclusivos.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-accent-bronze transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-accent-bronze transition-colors"><Facebook className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-serif text-lg mb-8 uppercase tracking-widest">Tratamentos</h4>
            <ul className="space-y-4 text-[11px] uppercase tracking-widest font-bold">
              <li><a href="#" className="hover:text-accent-bronze transition-colors">Harmonização Facial</a></li>
              <li><a href="#" className="hover:text-accent-bronze transition-colors">Bioestimuladores</a></li>
              <li><a href="#" className="hover:text-accent-bronze transition-colors">Ultraformer MPT</a></li>
              <li><a href="#" className="hover:text-accent-bronze transition-colors">Protocolos VIP</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif text-lg mb-8 uppercase tracking-widest">A Clínica</h4>
            <ul className="space-y-4 text-[11px] uppercase tracking-widest font-bold">
              <li><a href="#" className="hover:text-accent-bronze transition-colors">Sobre Nós</a></li>
              <li><a href="#resultados" className="hover:text-accent-bronze transition-colors">Resultados</a></li>
              <li><a href="#" className="hover:text-accent-bronze transition-colors">Blog & Ciência</a></li>
              <li><a href="#" className="hover:text-accent-bronze transition-colors">Termos & Privacidade</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif text-lg mb-8 uppercase tracking-widest">Localização</h4>
            <ul className="space-y-6 text-xs font-light">
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-accent-bronze shrink-0" />
                <span>Av. Brigadeiro Faria Lima, 4500 <br />Itaim Bibi, São Paulo - SP</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-accent-bronze" />
                (61) 98153-5040
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-accent-bronze" />
                agendamento@leclat.com.br
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-6 opacity-30">
            <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4" /><span className="text-[10px] font-bold uppercase tracking-widest">Ambiente 100% Seguro</span></div>
            <div className="flex items-center gap-2 font-bold text-[10px] uppercase tracking-widest">SSL Secure</div>
          </div>
          <div className="text-center md:text-right space-y-2">
            <p className="text-[10px] uppercase tracking-widest">&copy; 2025 L'Éclat Aesthetics. CNPJ: 00.000.000/0001-00</p>
            <p className="text-[9px] uppercase tracking-[0.3em] font-bold text-accent-bronze/60">
              Feito por <a href="https://weskleygomes.site" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">COMPANY NX</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

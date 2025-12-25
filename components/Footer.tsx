
import React from 'react';
import { Instagram, Facebook, Mail, Phone, MapPin, Sparkles } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contato" className="bg-stone-900 text-stone-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <div className="flex items-center space-x-2 text-white">
              <Sparkles className="h-8 w-8 text-rose-400" />
              <span className="font-serif text-2xl tracking-widest uppercase">L'Éclat</span>
            </div>
            <p className="text-sm leading-relaxed">
              Onde a sofisticação encontra os resultados. Especialistas em realçar sua melhor versão através da estética avançada.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-rose-400 transition-colors"><Instagram /></a>
              <a href="#" className="hover:text-rose-400 transition-colors"><Facebook /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-serif text-xl mb-6">Links Rápidos</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#clinica" className="hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#tratamentos" className="hover:text-white transition-colors">Nossos Tratamentos</a></li>
              <li><a href="#feedback" className="hover:text-white transition-colors">Depoimentos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif text-xl mb-6">Tratamentos</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Harmonização Facial</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Preenchimentos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Toxina Botulínica</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Laser & LEDs</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif text-xl mb-6">Contato</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-rose-400 shrink-0" />
                Av. Paulista, 1000, 15º Andar - São Paulo, SP
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-rose-400" />
                (11) 99999-9999
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-rose-400" />
                contato@leclatestetica.com.br
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-8 flex flex-col md:row justify-between items-center gap-4 text-xs tracking-widest uppercase">
          <p>&copy; 2024 L'Éclat Aesthetics & Wellness. Todos os direitos reservados.</p>
          <p>Desenvolvido com sofisticação</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

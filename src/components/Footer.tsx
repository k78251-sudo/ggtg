import React from 'react';
import { Phone, Mail, MapPin, Clock, ArrowUpRight } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface FooterProps {
  onScheduleClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onScheduleClick }) => {
  return (
    <footer className="bg-[#0F0F0F] text-neutral-400 font-sans border-t border-white/10 pt-12 pb-24 sm:pb-12 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 pb-8 sm:pb-12 border-b border-white/10">
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <BrandLogo size="md" showSubtitle={true} />
            <p className="text-xs sm:text-sm text-neutral-400 max-w-sm leading-relaxed pt-1 sm:pt-2">
              Centro de treinamento focado em força, potência neuromuscular, condicionamento cardiovascular e artes marciais.
            </p>
            <div className="pt-2">
              <button
                onClick={onScheduleClick}
                className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-black bg-[#C8F031] hover:bg-[#d8ff43] active:bg-[#d8ff43] px-5 py-2.5 rounded-xl transition-all cursor-pointer active:scale-95 shadow-md"
              >
                <span>Agendar Aula Gratuita</span>
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#modalidades" className="hover:text-white transition-colors">
                  Modalidades de Treino
                </a>
              </li>
              <li>
                <a href="#planos" className="hover:text-white transition-colors">
                  Comparativo de Planos
                </a>
              </li>
              <li>
                <a href="#horarios" className="hover:text-white transition-colors">
                  Grade Horária Semanal
                </a>
              </li>
              <li>
                <a href="#treinadores" className="hover:text-white transition-colors">
                  Corpo Técnico de Professores
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Dúvidas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Contact and Fictional Placeholders */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Atendimento & Localização
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C8F031] shrink-0" />
                <span>Telefone / WhatsApp: (00) 00000-0000</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C8F031] shrink-0" />
                <span>E-mail: contato@verticect.exemplo</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C8F031] shrink-0 mt-0.5" />
                <span>Av. Central Fictícia, 1000 — Bairro Modelo, SP</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#C8F031] shrink-0 mt-0.5" />
                <div>
                  <p>Segunda a Sexta: 06h às 22h</p>
                  <p>Sábados: 08h às 14h | Domingos: 09h às 13h</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with Clear Demonstration Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>© {new Date().getFullYear()} Vértice Centro de Treinamento. Todos os direitos reservados.</p>
          <p className="text-[11px] text-neutral-400 bg-white/5 px-3 py-1 rounded border border-white/10">
            Projeto demonstrativo fictício para apresentação de interface. Marca e personagens simulados.
          </p>
        </div>

        {/* Developer Signature Bar */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-neutral-500 text-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C8F031]" />
            <span>Design sob medida, alta velocidade e experiência responsiva</span>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 border border-white/15 hover:border-[#C8F031]/40 transition-colors">
            <span className="text-xs text-neutral-300">
              Site desenvolvido por <strong className="font-bold text-[#C8F031] tracking-wide">Nova</strong>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

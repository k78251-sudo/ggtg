import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Phone, Clock, ChevronRight } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface NavbarProps {
  onScheduleClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onScheduleClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Modalidades', href: '#modalidades' },
    { label: 'Planos', href: '#planos' },
    { label: 'Horários', href: '#horarios' },
    { label: 'Treinadores', href: '#treinadores' },
    { label: 'Dúvidas', href: '#faq' },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 bg-[#141414]/95 backdrop-blur-md border-b border-white/10 transition-colors w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-20 gap-3">
            {/* Zone 1: Brand Wordmark */}
            <a
              href="#"
              className="flex items-center gap-2 whitespace-nowrap shrink-0 group focus:outline-none"
              aria-label="Vértice Centro de Treinamento - Início"
            >
              <BrandLogo size="md" showSubtitle={true} />
            </a>

            {/* Zone 2: Desktop Nav Links */}
            <nav className="hidden md:flex items-center gap-7 lg:gap-8 text-sm font-medium text-neutral-300">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-white transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#C8F031] hover:after:w-full after:transition-all whitespace-nowrap shrink-0"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Zone 3: Primary Action (Desktop) & Hamburger (Mobile) */}
            <div className="flex items-center gap-2 sm:gap-4 shrink-0">
              {/* Desktop CTA Button */}
              <button
                onClick={onScheduleClick}
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-black bg-[#C8F031] hover:bg-[#d8ff43] transition-all duration-150 rounded-lg shadow-[0_0_20px_rgba(200,240,49,0.15)] hover:shadow-[0_0_25px_rgba(200,240,49,0.3)] whitespace-nowrap shrink-0 cursor-pointer active:scale-95"
              >
                <span>Aula Grátis</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </button>

              {/* Mobile Menu Hamburger Button - min 44x44px touch target, perfectly spaced */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden w-11 h-11 flex items-center justify-center rounded-xl text-neutral-200 hover:text-white bg-white/5 active:bg-white/15 border border-white/10 transition-colors focus:outline-none shrink-0"
                aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex flex-col justify-between bg-[#141414] animate-fadeIn">
          {/* Drawer Header */}
          <div className="px-4 py-3 flex items-center justify-between border-b border-white/10 bg-[#161616]">
            <BrandLogo size="sm" showSubtitle={true} />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="w-11 h-11 flex items-center justify-center rounded-xl text-white bg-white/5 active:bg-white/15 border border-white/10 transition-colors"
              aria-label="Fechar menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Links with Generous 52px+ Touch Height */}
          <div className="flex-1 overflow-y-auto px-4 py-6 space-y-2">
            <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 block px-3 mb-2">
              Navegação
            </span>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between min-h-[52px] px-4 rounded-xl text-base font-bold text-neutral-200 hover:text-white hover:bg-white/5 active:bg-white/10 transition-colors"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-neutral-400" />
              </a>
            ))}

            <div className="pt-6 mt-6 border-t border-white/10 space-y-3 px-3">
              <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 block">
                Atendimento Rápido
              </span>
              <div className="flex items-center gap-2.5 text-xs text-neutral-300">
                <Phone className="w-4 h-4 text-[#C8F031] shrink-0" />
                <span>WhatsApp: (00) 00000-0000</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-neutral-300">
                <Clock className="w-4 h-4 text-[#C8F031] shrink-0" />
                <span>Seg a Sex: 06h às 22h | Sáb: 08h às 14h</span>
              </div>
            </div>
          </div>

          {/* Drawer Bottom CTA Pinned to Thumb Zone */}
          <div className="p-4 border-t border-white/10 bg-[#171717] pb-safe">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onScheduleClick();
              }}
              className="w-full min-h-[50px] flex items-center justify-center gap-2 px-4 py-3 text-sm font-black uppercase tracking-wider text-black bg-[#C8F031] hover:bg-[#d8ff43] active:scale-[0.98] rounded-xl shadow-[0_0_20px_rgba(200,240,49,0.25)] transition-all"
            >
              <span>Agendar Minha Aula Gratuita</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

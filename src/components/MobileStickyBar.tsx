import React, { useState, useEffect } from 'react';
import { ArrowRight, Flame } from 'lucide-react';

interface MobileStickyBarProps {
  onScheduleClick: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onScheduleClick }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isInsideForm, setIsInsideForm] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroThreshold = 350;

      // Check if scrolled past hero
      if (scrollY > heroThreshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Check if user is currently inside the booking section
      const formEl = document.getElementById('agendamento');
      if (formEl) {
        const rect = formEl.getBoundingClientRect();
        const isInViewport =
          rect.top <= window.innerHeight * 0.7 && rect.bottom >= window.innerHeight * 0.2;
        setIsInsideForm(isInViewport);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible || isInsideForm) {
    return null;
  }

  return (
    <aside
      aria-label="Ação rápida de agendamento mobile"
      className="fixed bottom-0 inset-x-0 z-40 sm:hidden bg-[#141414]/95 backdrop-blur-lg border-t border-white/10 p-3 pb-safe shadow-[0_-10px_25px_rgba(0,0,0,0.5)] transition-all animate-slideUp"
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex flex-col pl-1">
          <div className="flex items-center gap-1.5">
            <Flame className="w-3.5 h-3.5 text-[#C8F031]" />
            <span className="text-[11px] font-black uppercase tracking-wider text-white">
              Vértice CT
            </span>
          </div>
          <span className="text-[10px] text-neutral-400 font-medium">
            1ª aula 100% por nossa conta
          </span>
        </div>

        <button
          onClick={onScheduleClick}
          className="min-h-[44px] px-5 py-2.5 flex items-center gap-2 rounded-xl text-xs font-black uppercase tracking-wider text-black bg-[#C8F031] active:bg-[#d8ff43] active:scale-95 shadow-[0_0_15px_rgba(200,240,49,0.3)] transition-all cursor-pointer whitespace-nowrap shrink-0"
        >
          <span>Agendar Grátis</span>
          <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
        </button>
      </div>
    </aside>
  );
};

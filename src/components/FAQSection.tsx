import React, { useState } from 'react';
import { FAQS } from '../data/gymData';
import { ChevronDown } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-14 sm:py-20 lg:py-28 bg-[#141414] border-b border-white/10 w-full">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-14 space-y-2.5 sm:space-y-3">
          <span className="text-xs font-semibold tracking-widest text-[#C8F031] uppercase">
            Transparência e Respeito
          </span>
          <h2 className="text-2xl min-[360px]:text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold uppercase text-white tracking-tight leading-[1.08]">
            PERGUNTAS FREQUENTES
          </h2>
          <p className="text-sm sm:text-base text-neutral-300 font-sans leading-relaxed max-w-2xl mx-auto">
            Respostas diretas para as dúvidas mais comuns sobre o agendamento da aula experimental, funcionamento dos planos e rotina do centro de treinamento.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                className="rounded-2xl border border-white/10 bg-[#1B1B1B] overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full min-h-[52px] py-4 px-4 sm:py-5 sm:px-6 flex items-center justify-between text-left gap-3 sm:gap-4 hover:bg-white/[0.02] active:bg-white/[0.04] transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm min-[360px]:text-base sm:text-lg font-bold text-white font-sans pr-1">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#C8F031] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 sm:px-6 sm:pb-6 pt-1 text-xs sm:text-sm text-neutral-300 font-sans leading-relaxed border-t border-white/5">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

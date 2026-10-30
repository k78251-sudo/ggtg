import React from 'react';
import { TESTIMONIALS } from '../data/gymData';
import { Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 lg:py-28 bg-[#141414] border-b border-white/10 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-14">
          <div className="space-y-2 sm:space-y-3">
            <span className="text-xs font-semibold tracking-widest text-[#C8F031] uppercase">
              Experiência Real
            </span>
            <h2 className="text-2xl min-[360px]:text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold uppercase text-white tracking-tight leading-[1.08]">
              QUEM TREINA NO VÉRTICE
            </h2>
          </div>
          <p className="text-sm sm:text-base text-neutral-300 max-w-md font-sans leading-relaxed">
            Relatos de alunos que construíram regularidade e sentiram a diferença de treinar com metodologia clara e equipe sempre presente.
          </p>
        </div>

        {/* Asymmetric Testimonial Cards Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
          {/* Card 1: Wide featured card */}
          <div className="lg:col-span-7 rounded-2xl border border-white/15 bg-[#1B1B1B] p-5 min-[360px]:p-6 sm:p-10 flex flex-col justify-between hover:border-white/30 transition-all shadow-lg">
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center justify-between">
                <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-[#C8F031] opacity-70" />
                <span className="text-[11px] sm:text-xs font-mono font-bold text-black bg-[#C8F031] px-2.5 py-1 rounded">
                  {TESTIMONIALS[0].metric}
                </span>
              </div>

              <p className="text-base sm:text-xl text-neutral-200 font-sans leading-relaxed">
                "{TESTIMONIALS[0].quote}"
              </p>
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between">
              <div>
                <h4 className="text-lg font-display font-bold uppercase text-white">
                  {TESTIMONIALS[0].author}, {TESTIMONIALS[0].age} anos
                </h4>
                <span className="text-xs text-neutral-400">
                  {TESTIMONIALS[0].modality} · {TESTIMONIALS[0].period}
                </span>
              </div>
              <span className="text-xs font-mono text-neutral-400">Aluno verificado</span>
            </div>
          </div>

          {/* Cards 2 & 3: Stacked in 5 columns */}
          <div className="lg:col-span-5 flex flex-col gap-4 sm:gap-6 justify-between">
            <div className="rounded-2xl border border-white/15 bg-[#1B1B1B] p-5 min-[360px]:p-6 sm:p-7 flex flex-col justify-between hover:border-white/30 transition-all shadow-md">
              <div className="space-y-2.5 sm:space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#C8F031]">
                    {TESTIMONIALS[1].metric}
                  </span>
                  <span className="text-[11px] font-mono text-neutral-400">
                    {TESTIMONIALS[1].period}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-neutral-300 font-sans leading-relaxed">
                  "{TESTIMONIALS[1].quote}"
                </p>
              </div>

              <div className="pt-3 mt-3 sm:pt-4 sm:mt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="text-sm sm:text-base font-display font-bold uppercase text-white">
                    {TESTIMONIALS[1].author}, {TESTIMONIALS[1].age} anos
                  </h4>
                  <span className="text-[11px] text-neutral-400">
                    {TESTIMONIALS[1].modality}
                  </span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/15 bg-[#1B1B1B] p-5 min-[360px]:p-6 sm:p-7 flex flex-col justify-between hover:border-white/30 transition-all shadow-md">
              <div className="space-y-2.5 sm:space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#C8F031]">
                    {TESTIMONIALS[2].metric}
                  </span>
                  <span className="text-[11px] font-mono text-neutral-400">
                    {TESTIMONIALS[2].period}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-neutral-300 font-sans leading-relaxed">
                  "{TESTIMONIALS[2].quote}"
                </p>
              </div>

              <div className="pt-3 mt-3 sm:pt-4 sm:mt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="text-sm sm:text-base font-display font-bold uppercase text-white">
                    {TESTIMONIALS[2].author}, {TESTIMONIALS[2].age} anos
                  </h4>
                  <span className="text-[11px] text-neutral-400">
                    {TESTIMONIALS[2].modality}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

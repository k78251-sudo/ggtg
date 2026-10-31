import React, { useState } from 'react';
import { ArrowRight, Flame, Dumbbell, ShieldCheck, CalendarCheck } from 'lucide-react';
import { BrandLogo, BrandBadge } from './BrandLogo';

interface HeroSectionProps {
  onScheduleClick: () => void;
  onExploreSchedule: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onScheduleClick,
  onExploreSchedule,
}) => {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="relative overflow-hidden bg-[#141414] pt-5 pb-12 sm:pt-12 sm:pb-16 lg:pt-16 lg:pb-24 border-b border-white/10 w-full">
      {/* Background ambient lighting */}
      <div
        className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#C8F031]/5 blur-[140px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* Left Column: High-impact copy and primary action */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-5 sm:space-y-7 z-10">
            {/* Tag / Kicker */}
            <div className="inline-flex items-center gap-2 self-start bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
              <span className="h-2 w-2 rounded-full bg-[#C8F031] animate-pulse" />
              <span className="text-[11px] sm:text-xs font-semibold tracking-wider text-neutral-200 uppercase font-sans">
                Centro de Treinamento Especializado
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-2xl min-[360px]:text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black uppercase tracking-tight text-white leading-[1.08] sm:leading-[1.05]">
                Sua primeira <br />
                <span className="text-white">aula é por </span>
                <span className="text-[#C8F031] underline decoration-[#C8F031]/40 decoration-4 underline-offset-4 sm:underline-offset-8">
                  nossa conta
                </span>
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-neutral-300 font-normal leading-relaxed max-w-2xl pt-1">
                Musculação com pesos livres de verdade, treinamento funcional com progressão, ciclismo indoor e artes marciais.
                Sem disputa de aparelho, sem filas e com professores que realmente acompanham sua série no salão.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
              <button
                onClick={onScheduleClick}
                className="inline-flex items-center justify-center gap-3 w-full sm:w-auto min-h-[48px] px-7 py-3.5 sm:py-4 text-sm sm:text-base font-extrabold uppercase tracking-wider text-black bg-[#C8F031] hover:bg-[#d8ff43] transition-all duration-150 rounded-xl shadow-[0_0_25px_rgba(200,240,49,0.25)] hover:shadow-[0_0_35px_rgba(200,240,49,0.4)] cursor-pointer active:scale-95 group"
              >
                <span>Agendar Aula Gratuita</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform stroke-[2.5]" />
              </button>

              <button
                onClick={onExploreSchedule}
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto min-h-[48px] px-6 py-3.5 sm:py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/15 hover:border-white/30 transition-all rounded-xl cursor-pointer active:scale-95"
              >
                <CalendarCheck className="w-4 h-4 text-[#C8F031]" />
                <span>Ver Grade Semanal</span>
              </button>
            </div>

            {/* Micro proof metrics */}
            <div className="pt-4 sm:pt-6 border-t border-white/10 grid grid-cols-3 gap-2 sm:gap-4 text-neutral-400">
              <div className="flex flex-col">
                <span className="text-xl min-[360px]:text-2xl sm:text-3xl font-display font-extrabold text-white tabular-nums">
                  0 R$
                </span>
                <span className="text-[10px] min-[360px]:text-xs uppercase tracking-wider text-neutral-400 pt-0.5 leading-tight">
                  1ª aula sem custo
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl min-[360px]:text-2xl sm:text-3xl font-display font-extrabold text-white tabular-nums">
                  450m²
                </span>
                <span className="text-[10px] min-[360px]:text-xs uppercase tracking-wider text-neutral-400 pt-0.5 leading-tight">
                  Área de pesos
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl min-[360px]:text-2xl sm:text-3xl font-display font-extrabold text-white tabular-nums">
                  4
                </span>
                <span className="text-[10px] min-[360px]:text-xs uppercase tracking-wider text-neutral-400 pt-0.5 leading-tight">
                  Modalidades
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero High-Impact Cropped Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-neutral-900 shadow-2xl">
              {/* Image with fallback */}
              {imageError ? (
                <div className="w-full h-56 min-[360px]:h-64 sm:h-80 lg:h-[600px] bg-gradient-to-br from-neutral-800 to-neutral-950 flex flex-col items-center justify-center p-6 text-center">
                  <BrandBadge size={52} className="mb-3" />
                  <span className="text-base font-bold uppercase tracking-wider text-white">
                    Vértice Centro de Treinamento
                  </span>
                  <span className="text-xs text-neutral-400 mt-1">
                    Área de Musculação & Força
                  </span>
                </div>
              ) : (
                <img
                  src="/demo-sample.png"
                  alt="Imagem meramente ilustrativa para amostra do produto"
                  className="w-full h-56 min-[360px]:h-64 sm:h-80 lg:h-[600px] object-contain bg-black p-4 transition-all duration-500"
                  referrerPolicy="no-referrer"
                  loading="eager"
                  onError={() => setImageError(true)}
                />
              )}

              {/* Gradient scrim for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-black/30 pointer-events-none" />

              {/* Official Brand Badge on photo */}
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-black/90 backdrop-blur-md px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-lg border border-white/20 shadow-xl">
                <BrandLogo size="sm" showSubtitle={true} />
              </div>

              {/* Live overlay tag */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6 p-3 sm:p-4 rounded-xl bg-[#141414]/90 backdrop-blur-md border border-white/15">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <Flame className="w-4 h-4 sm:w-5 sm:h-5 text-[#C8F031] shrink-0" />
                    <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-white truncate">
                      Treino com acompanhamento
                    </span>
                  </div>
                  <span className="text-[9px] min-[360px]:text-[10px] font-mono text-[#C8F031] font-semibold bg-[#C8F031]/10 px-1.5 py-0.5 rounded border border-[#C8F031]/30 shrink-0">
                    HOJE
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs text-neutral-300 mt-1 leading-snug">
                  Professor dedicado para te acompanhar do aquecimento ao encerramento da sua primeira aula.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

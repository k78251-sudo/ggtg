import React, { useState } from 'react';
import { MODALITIES } from '../data/gymData';
import { ArrowUpRight, CheckCircle2, Dumbbell, Activity, Bike, Shield } from 'lucide-react';
import { BrandBadge } from './BrandLogo';

interface ModalitiesSectionProps {
  onSelectModality: (modalityName: string) => void;
}

export const ModalitiesSection: React.FC<ModalitiesSectionProps> = ({
  onSelectModality,
}) => {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  const getModalityIcon = (id: string) => {
    switch (id) {
      case 'musculacao':
        return <Dumbbell className="w-5 h-5 text-[#C8F031]" />;
      case 'funcional':
        return <Activity className="w-5 h-5 text-[#C8F031]" />;
      case 'spinning':
        return <Bike className="w-5 h-5 text-[#C8F031]" />;
      case 'lutas':
        return <Shield className="w-5 h-5 text-[#C8F031]" />;
      default:
        return <Dumbbell className="w-5 h-5 text-[#C8F031]" />;
    }
  };

  return (
    <section id="modalidades" className="py-14 sm:py-20 lg:py-28 bg-[#141414] border-b border-white/10 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-14">
          <div className="space-y-2 sm:space-y-3">
            <span className="text-xs font-semibold tracking-widest text-[#C8F031] uppercase">
              Método e Infraestrutura
            </span>
            <h2 className="text-2xl min-[360px]:text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold uppercase text-white tracking-tight leading-[1.08]">
              MODALIDADES DE TREINO
            </h2>
          </div>
          <p className="text-sm sm:text-base text-neutral-300 max-w-md font-sans leading-relaxed">
            Quatro modalidades integradas com foco em rendimento, técnica segura e intensidade compatível com o seu momento.
          </p>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
          {/* Card 1: Musculação - Spans 7 columns */}
          <div className="lg:col-span-7 group relative rounded-2xl overflow-hidden border border-white/15 bg-[#1B1B1B] hover:border-white/30 transition-all duration-300 flex flex-col justify-between">
            <div className="relative h-44 min-[360px]:h-48 sm:h-64 lg:h-72 overflow-hidden bg-neutral-900">
              {imageErrors[MODALITIES[0].id] ? (
                <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-neutral-800 to-neutral-950">
                  <BrandBadge size={44} className="mb-2" />
                  <span className="text-base font-bold text-white uppercase">{MODALITIES[0].name}</span>
                  <span className="text-xs text-neutral-400">Área de Pesos Livres · 450m²</span>
                </div>
              ) : (
                <img
                  src={MODALITIES[0].image}
                  alt={MODALITIES[0].name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  referrerPolicy="no-referrer"
                  onError={() => handleImageError(MODALITIES[0].id)}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B1B1B] via-[#1B1B1B]/40 to-transparent" />
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-black/85 backdrop-blur-md px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-white border border-white/10 flex items-center gap-2">
                {getModalityIcon(MODALITIES[0].id)}
                <span>Área de Força · 450m²</span>
              </div>
            </div>

            <div className="p-4 sm:p-6 lg:p-8 space-y-3.5 sm:space-y-4">
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-xl min-[360px]:text-2xl sm:text-3xl font-display font-extrabold uppercase text-white tracking-tight">
                  {MODALITIES[0].name}
                </h3>
                <span className="text-[11px] sm:text-xs font-mono font-bold text-[#C8F031] px-2 py-0.5 sm:px-2.5 sm:py-1 rounded bg-[#C8F031]/10 border border-[#C8F031]/20 shrink-0">
                  Intensidade {MODALITIES[0].intensity}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-neutral-300 font-sans leading-relaxed">
                {MODALITIES[0].fullDesc}
              </p>

              <div className="space-y-1.5 sm:space-y-2 pt-1">
                {MODALITIES[0].specs.map((spec) => (
                  <div key={spec} className="flex items-center gap-2 text-xs sm:text-sm text-neutral-300">
                    <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C8F031] shrink-0" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3 sm:pt-4 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <span className="text-[11px] sm:text-xs text-neutral-400">
                  Horário livre em todos os turnos
                </span>
                <button
                  onClick={() => onSelectModality(MODALITIES[0].name)}
                  className="min-h-[44px] inline-flex items-center justify-center gap-2 px-3 py-2 text-xs sm:text-sm font-bold uppercase tracking-wide text-black sm:text-[#C8F031] bg-[#C8F031] sm:bg-transparent hover:bg-[#d8ff43] sm:hover:bg-transparent sm:hover:text-white rounded-lg transition-all cursor-pointer group/btn active:scale-95"
                >
                  <span>Agendar Aula de Musculação</span>
                  <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Card 2: Funcional - Spans 5 columns */}
          <div className="lg:col-span-5 group relative rounded-2xl overflow-hidden border border-white/15 bg-[#1B1B1B] hover:border-white/30 transition-all duration-300 flex flex-col justify-between">
            <div className="relative h-44 min-[360px]:h-48 sm:h-64 lg:h-72 overflow-hidden bg-neutral-900">
              {imageErrors[MODALITIES[1].id] ? (
                <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-neutral-800 to-neutral-950">
                  <BrandBadge size={44} className="mb-2" />
                  <span className="text-base font-bold text-white uppercase">{MODALITIES[1].name}</span>
                  <span className="text-xs text-neutral-400">Arena Funcional</span>
                </div>
              ) : (
                <img
                  src={MODALITIES[1].image}
                  alt={MODALITIES[1].name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  referrerPolicy="no-referrer"
                  onError={() => handleImageError(MODALITIES[1].id)}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B1B1B] via-[#1B1B1B]/40 to-transparent" />
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-black/85 backdrop-blur-md px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-white border border-white/10 flex items-center gap-2">
                {getModalityIcon(MODALITIES[1].id)}
                <span>Arena Funcional</span>
              </div>
            </div>

            <div className="p-4 sm:p-6 lg:p-8 space-y-3.5 sm:space-y-4">
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-xl min-[360px]:text-2xl font-display font-extrabold uppercase text-white tracking-tight">
                  {MODALITIES[1].name}
                </h3>
                <span className="text-[11px] sm:text-xs font-mono font-bold text-[#C8F031] px-2 py-0.5 sm:px-2.5 sm:py-1 rounded bg-[#C8F031]/10 border border-[#C8F031]/20 shrink-0">
                  {MODALITIES[1].intensity}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-neutral-300 font-sans leading-relaxed">
                {MODALITIES[1].fullDesc}
              </p>

              <div className="space-y-1.5 pt-1">
                {MODALITIES[1].specs.map((spec) => (
                  <div key={spec} className="flex items-center gap-2 text-xs text-neutral-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C8F031] shrink-0" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-end">
                <button
                  onClick={() => onSelectModality(MODALITIES[1].name)}
                  className="min-h-[44px] w-full sm:w-auto inline-flex items-center justify-center gap-2 px-3 py-2 text-xs font-bold uppercase tracking-wide text-black sm:text-[#C8F031] bg-[#C8F031] sm:bg-transparent hover:bg-[#d8ff43] sm:hover:bg-transparent sm:hover:text-white rounded-lg transition-all cursor-pointer group/btn active:scale-95"
                >
                  <span>Agendar Aula de Funcional</span>
                  <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Card 3: Spinning - Spans 5 columns */}
          <div className="lg:col-span-5 group relative rounded-2xl overflow-hidden border border-white/15 bg-[#1B1B1B] hover:border-white/30 transition-all duration-300 flex flex-col justify-between">
            <div className="relative h-44 min-[360px]:h-48 sm:h-64 lg:h-72 overflow-hidden bg-neutral-900">
              {imageErrors[MODALITIES[2].id] ? (
                <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-neutral-800 to-neutral-950">
                  <BrandBadge size={44} className="mb-2" />
                  <span className="text-base font-bold text-white uppercase">{MODALITIES[2].name}</span>
                  <span className="text-xs text-neutral-400">Estúdio Ciclo Indoor</span>
                </div>
              ) : (
                <img
                  src={MODALITIES[2].image}
                  alt={MODALITIES[2].name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  referrerPolicy="no-referrer"
                  onError={() => handleImageError(MODALITIES[2].id)}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B1B1B] via-[#1B1B1B]/40 to-transparent" />
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-black/85 backdrop-blur-md px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-white border border-white/10 flex items-center gap-2">
                {getModalityIcon(MODALITIES[2].id)}
                <span>Estúdio Ciclo Indoor</span>
              </div>
            </div>

            <div className="p-4 sm:p-6 lg:p-8 space-y-3.5 sm:space-y-4">
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-xl min-[360px]:text-2xl font-display font-extrabold uppercase text-white tracking-tight">
                  {MODALITIES[2].name}
                </h3>
                <span className="text-[11px] sm:text-xs font-mono font-bold text-[#C8F031] px-2 py-0.5 sm:px-2.5 sm:py-1 rounded bg-[#C8F031]/10 border border-[#C8F031]/20 shrink-0">
                  {MODALITIES[2].intensity}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-neutral-300 font-sans leading-relaxed">
                {MODALITIES[2].fullDesc}
              </p>

              <div className="space-y-1.5 pt-1">
                {MODALITIES[2].specs.map((spec) => (
                  <div key={spec} className="flex items-center gap-2 text-xs text-neutral-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C8F031] shrink-0" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-end">
                <button
                  onClick={() => onSelectModality(MODALITIES[2].name)}
                  className="min-h-[44px] w-full sm:w-auto inline-flex items-center justify-center gap-2 px-3 py-2 text-xs font-bold uppercase tracking-wide text-black sm:text-[#C8F031] bg-[#C8F031] sm:bg-transparent hover:bg-[#d8ff43] sm:hover:bg-transparent sm:hover:text-white rounded-lg transition-all cursor-pointer group/btn active:scale-95"
                >
                  <span>Agendar Aula de Spinning</span>
                  <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Card 4: Lutas - Spans 7 columns */}
          <div className="lg:col-span-7 group relative rounded-2xl overflow-hidden border border-white/15 bg-[#1B1B1B] hover:border-white/30 transition-all duration-300 flex flex-col justify-between">
            <div className="relative h-44 min-[360px]:h-48 sm:h-64 lg:h-72 overflow-hidden bg-neutral-900">
              {imageErrors[MODALITIES[3].id] ? (
                <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-neutral-800 to-neutral-950">
                  <BrandBadge size={44} className="mb-2" />
                  <span className="text-base font-bold text-white uppercase">{MODALITIES[3].name}</span>
                  <span className="text-xs text-neutral-400">Arena de Luta</span>
                </div>
              ) : (
                <img
                  src={MODALITIES[3].image}
                  alt={MODALITIES[3].name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  referrerPolicy="no-referrer"
                  onError={() => handleImageError(MODALITIES[3].id)}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B1B1B] via-[#1B1B1B]/40 to-transparent" />
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-black/85 backdrop-blur-md px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-white border border-white/10 flex items-center gap-2">
                {getModalityIcon(MODALITIES[3].id)}
                <span>Arena de Combate · Tatame & Ringue</span>
              </div>
            </div>

            <div className="p-4 sm:p-6 lg:p-8 space-y-3.5 sm:space-y-4">
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-xl min-[360px]:text-2xl sm:text-3xl font-display font-extrabold uppercase text-white tracking-tight">
                  {MODALITIES[3].name}
                </h3>
                <span className="text-[11px] sm:text-xs font-mono font-bold text-[#C8F031] px-2 py-0.5 sm:px-2.5 sm:py-1 rounded bg-[#C8F031]/10 border border-[#C8F031]/20 shrink-0">
                  Intensidade {MODALITIES[3].intensity}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-neutral-300 font-sans leading-relaxed">
                {MODALITIES[3].fullDesc}
              </p>

              <div className="space-y-1.5 sm:space-y-2 pt-1">
                {MODALITIES[3].specs.map((spec) => (
                  <div key={spec} className="flex items-center gap-2 text-xs sm:text-sm text-neutral-300">
                    <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C8F031] shrink-0" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3 sm:pt-4 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <span className="text-[11px] sm:text-xs text-neutral-400">
                  Boxe Tradicional & Muay Thai
                </span>
                <button
                  onClick={() => onSelectModality(MODALITIES[3].name)}
                  className="min-h-[44px] inline-flex items-center justify-center gap-2 px-3 py-2 text-xs sm:text-sm font-bold uppercase tracking-wide text-black sm:text-[#C8F031] bg-[#C8F031] sm:bg-transparent hover:bg-[#d8ff43] sm:hover:bg-transparent sm:hover:text-white rounded-lg transition-all cursor-pointer group/btn active:scale-95"
                >
                  <span>Agendar Aula de Lutas</span>
                  <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

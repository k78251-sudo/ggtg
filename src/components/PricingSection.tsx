import React, { useState } from 'react';
import { PLANS, Plan } from '../data/gymData';
import { Check, Zap, ArrowRight, Sparkles } from 'lucide-react';

interface PricingSectionProps {
  onScheduleClick: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onScheduleClick }) => {
  const [mobileTab, setMobileTab] = useState<'trimestral' | 'mensal' | 'anual' | 'todos'>('trimestral');

  return (
    <section id="planos" className="py-14 sm:py-20 lg:py-28 bg-[#141414] border-b border-white/10 relative w-full">
      {/* Background glow behind featured card */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#C8F031]/5 blur-[160px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-16 space-y-2.5 sm:space-y-4">
          <span className="text-xs font-semibold tracking-widest text-[#C8F031] uppercase">
            Investimento Transparente
          </span>
          <h2 className="text-2xl min-[360px]:text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold uppercase text-white tracking-tight leading-[1.08]">
            PLANOS SEM TAXAS OCULTAS
          </h2>
          <p className="text-sm sm:text-base text-neutral-300 font-sans leading-relaxed">
            Sem taxa de matrícula, sem anuidade de manutenção e sem letras miúdas. Agende sua aula experimental gratuita agora e decida o plano com calma depois.
          </p>
        </div>

        {/* Mobile Tab Switcher (Visible only on small screens) */}
        <div className="lg:hidden flex items-center justify-between p-1 rounded-xl bg-[#1B1B1B] border border-white/10 mb-6 max-w-md mx-auto w-full gap-1">
          <button
            onClick={() => setMobileTab('trimestral')}
            className={`flex-1 min-h-[44px] px-2 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-1 active:scale-95 ${
              mobileTab === 'trimestral'
                ? 'bg-[#C8F031] text-black shadow-md'
                : 'text-neutral-300 hover:text-white'
            }`}
          >
            <Zap className="w-3.5 h-3.5 fill-current shrink-0" />
            <span className="truncate">Trimestral</span>
          </button>
          <button
            onClick={() => setMobileTab('mensal')}
            className={`flex-1 min-h-[44px] px-2 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer active:scale-95 ${
              mobileTab === 'mensal'
                ? 'bg-white text-black shadow-md'
                : 'text-neutral-300 hover:text-white'
            }`}
          >
            <span className="truncate">Mensal</span>
          </button>
          <button
            onClick={() => setMobileTab('anual')}
            className={`flex-1 min-h-[44px] px-2 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer active:scale-95 ${
              mobileTab === 'anual'
                ? 'bg-white text-black shadow-md'
                : 'text-neutral-300 hover:text-white'
            }`}
          >
            <span className="truncate">Anual</span>
          </button>
          <button
            onClick={() => setMobileTab('todos')}
            className={`min-h-[44px] px-2.5 py-1.5 rounded-lg text-[11px] font-bold uppercase tracking-wider transition-all cursor-pointer active:scale-95 ${
              mobileTab === 'todos'
                ? 'bg-neutral-800 text-white'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <span>Todos</span>
          </button>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-8 items-center">
          {/* Plano Mensal */}
          <div
            className={`rounded-2xl border border-white/10 bg-[#1B1B1B] p-5 min-[360px]:p-6 sm:p-8 flex flex-col justify-between hover:border-white/25 transition-all duration-200 ${
              mobileTab !== 'todos' && mobileTab !== 'mensal' ? 'hidden lg:flex' : 'flex'
            }`}
          >
            <div className="space-y-5 sm:space-y-6">
              <div className="space-y-1.5 sm:space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                  Sem Contrato Longo
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-extrabold uppercase text-white">
                  {PLANS[0].name}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed pt-0.5 sm:pt-1">
                  {PLANS[0].description}
                </p>
              </div>

              <div className="pt-3 border-t border-white/10">
                <div className="flex items-baseline gap-1">
                  <span className="text-sm font-semibold text-neutral-400">R$</span>
                  <span className="text-4xl sm:text-5xl font-display font-black text-white tabular-nums">
                    {PLANS[0].monthlyEquivalent}
                  </span>
                  <span className="text-sm text-neutral-400">/mês</span>
                </div>
                <span className="text-xs text-neutral-400 block mt-1">
                  {PLANS[0].billingPeriod}
                </span>
              </div>

              <div className="space-y-2.5 sm:space-y-3 pt-4 border-t border-white/10">
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-300 block">
                  O que está incluso:
                </span>
                {PLANS[0].benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300">
                    <Check className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 sm:pt-8">
              <button
                onClick={onScheduleClick}
                className="w-full min-h-[48px] py-3.5 px-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-white/5 hover:bg-white/15 border border-white/15 hover:border-white/30 rounded-xl transition-all cursor-pointer active:scale-95"
              >
                Fazer Aula & Optar pelo Mensal
              </button>
            </div>
          </div>

          {/* Plano Trimestral - VISIBLY LARGER, NEON BORDER & BADGE */}
          <div
            className={`relative rounded-2xl border-2 border-[#C8F031] bg-[#1E1E1E] p-5 min-[360px]:p-6 sm:p-10 flex flex-col justify-between shadow-[0_0_40px_rgba(200,240,49,0.15)] lg:-translate-y-4 lg:py-12 z-20 ${
              mobileTab !== 'todos' && mobileTab !== 'trimestral' ? 'hidden lg:flex' : 'flex'
            }`}
          >
            {/* Top Badge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#C8F031] text-black font-sans text-xs font-black uppercase tracking-widest px-3.5 py-1 rounded-full shadow-lg flex items-center gap-1.5 whitespace-nowrap">
              <Zap className="w-3.5 h-3.5 fill-black stroke-black shrink-0" />
              <span>{PLANS[1].badge}</span>
            </div>

            <div className="space-y-6">
              <div className="space-y-2 pt-1 sm:pt-0">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#C8F031] font-bold">
                    Recomendado pela Equipe
                  </span>
                  <span className="text-[11px] font-mono font-bold text-black bg-[#C8F031] px-2 py-0.5 rounded">
                    Economia de R$ 120
                  </span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-display font-black uppercase text-white pt-1">
                  {PLANS[1].name}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed pt-1">
                  {PLANS[1].description}
                </p>
              </div>

              <div className="pt-3 border-t border-white/15">
                <div className="flex items-baseline gap-1">
                  <span className="text-base font-bold text-[#C8F031]">R$</span>
                  <span className="text-5xl sm:text-6xl font-display font-black text-white tabular-nums tracking-tight">
                    {PLANS[1].monthlyEquivalent}
                  </span>
                  <span className="text-base text-neutral-300 font-medium">/mês</span>
                </div>
                <span className="text-xs text-neutral-400 block mt-1">
                  {PLANS[1].billingPeriod}
                </span>
              </div>

              <div className="space-y-3.5 pt-5 border-t border-white/15">
                <span className="text-xs font-bold uppercase tracking-wider text-[#C8F031] block">
                  Benefícios Completos:
                </span>
                {PLANS[1].benefits.map((benefit, idx) => (
                  <div key={benefit} className="flex items-start gap-2.5 text-xs sm:text-sm text-white font-medium">
                    <Check className="w-4 h-4 text-[#C8F031] shrink-0 mt-0.5 stroke-[2.5]" />
                    <span className={idx === 0 ? 'text-white font-bold' : 'text-neutral-200'}>
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8">
              <button
                onClick={onScheduleClick}
                className="w-full min-h-[50px] flex items-center justify-center gap-2 py-4 px-6 text-sm sm:text-base font-black uppercase tracking-wider text-black bg-[#C8F031] hover:bg-[#d8ff43] rounded-xl transition-all duration-150 shadow-[0_0_25px_rgba(200,240,49,0.3)] hover:shadow-[0_0_35px_rgba(200,240,49,0.5)] cursor-pointer active:scale-95 group"
              >
                <span>Agendar Aula & Garantir Trimestral</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform stroke-[2.5]" />
              </button>
            </div>
          </div>

          {/* Plano Anual */}
          <div
            className={`rounded-2xl border border-white/10 bg-[#1B1B1B] p-5 min-[360px]:p-6 sm:p-8 flex flex-col justify-between hover:border-white/25 transition-all duration-200 ${
              mobileTab !== 'todos' && mobileTab !== 'anual' ? 'hidden lg:flex' : 'flex'
            }`}
          >
            <div className="space-y-5 sm:space-y-6">
              <div className="space-y-1.5 sm:space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                  Melhor Custo Mensal
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-extrabold uppercase text-white">
                  {PLANS[2].name}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed pt-0.5 sm:pt-1">
                  {PLANS[2].description}
                </p>
              </div>

              <div className="pt-3 border-t border-white/10">
                <div className="flex items-baseline gap-1">
                  <span className="text-sm font-semibold text-neutral-400">R$</span>
                  <span className="text-4xl sm:text-5xl font-display font-black text-white tabular-nums">
                    {PLANS[2].monthlyEquivalent}
                  </span>
                  <span className="text-sm text-neutral-400">/mês</span>
                </div>
                <span className="text-xs text-neutral-400 block mt-1">
                  {PLANS[2].billingPeriod}
                </span>
              </div>

              <div className="space-y-2.5 sm:space-y-3 pt-4 border-t border-white/10">
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-300 block">
                  O que está incluso:
                </span>
                {PLANS[2].benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300">
                    <Check className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 sm:pt-8">
              <button
                onClick={onScheduleClick}
                className="w-full min-h-[48px] py-3.5 px-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-white/5 hover:bg-white/15 border border-white/15 hover:border-white/30 rounded-xl transition-all cursor-pointer active:scale-95"
              >
                Fazer Aula & Optar pelo Anual
              </button>
            </div>
          </div>
        </div>

        {/* Reassurance banner below pricing */}
        <div className="mt-10 sm:mt-12 text-center px-4">
          <p className="text-xs sm:text-sm text-neutral-400 max-w-xl mx-auto leading-relaxed">
            Prefere conhecer antes de bater o martelo? Faça a <span className="text-[#C8F031] font-semibold">aula experimental gratuita</span>.
            Você avalia o ambiente, os aparelhos e o atendimento dos professores pessoalmente.
          </p>
        </div>
      </div>
    </section>
  );
};

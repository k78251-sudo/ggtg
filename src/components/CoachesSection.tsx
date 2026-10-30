import React from 'react';
import { COACHES } from '../data/gymData';
import { Award, ShieldCheck } from 'lucide-react';

export const CoachesSection: React.FC = () => {
  return (
    <section id="treinadores" className="py-14 sm:py-20 lg:py-28 bg-[#141414] border-b border-white/10 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-14">
          <div className="space-y-2 sm:space-y-3">
            <span className="text-xs font-semibold tracking-widest text-[#C8F031] uppercase">
              Acompanhamento Presencial
            </span>
            <h2 className="text-2xl min-[360px]:text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold uppercase text-white tracking-tight leading-[1.08]">
              EQUIPE DE TREINADORES
            </h2>
          </div>
          <p className="text-sm sm:text-base text-neutral-300 max-w-md font-sans leading-relaxed">
            Profissionais dedicados que circulam ativamente pelo salão para orientar cada movimento, prevenir sobrecargas e tirar dúvidas durante todo o treino.
          </p>
        </div>

        {/* Coaches Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {COACHES.map((coach) => (
            <div
              key={coach.id}
              className="rounded-xl border border-white/15 bg-[#1B1B1B] p-6 flex flex-col justify-between hover:border-white/30 transition-all duration-200 group"
            >
              <div className="space-y-4">
                {/* Visual Avatar / Icon Box with brutalist gym theme */}
                <div className="w-16 h-16 rounded-lg bg-black border border-white/15 flex items-center justify-center text-white font-display font-extrabold text-2xl group-hover:border-[#C8F031] group-hover:text-[#C8F031] transition-colors">
                  {coach.name.slice(0, 2).toUpperCase()}
                </div>

                <div className="space-y-1">
                  <span className="text-[11px] font-mono text-[#C8F031] font-semibold uppercase tracking-wider block">
                    {coach.experience}
                  </span>
                  <h3 className="text-2xl font-display font-bold uppercase text-white tracking-tight">
                    {coach.name}
                  </h3>
                  <p className="text-xs font-semibold text-neutral-300">
                    {coach.role}
                  </p>
                </div>

                <div className="pt-2 border-t border-white/10 space-y-2">
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {coach.bio}
                  </p>
                  <p className="text-[11px] text-neutral-300 font-medium">
                    <span className="text-[#C8F031]">Especialidade:</span> {coach.specialty}
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-neutral-400">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-neutral-400" />
                  {coach.cref}
                </span>
                <span className="text-neutral-400">Ativo</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import React, { useState, useMemo } from 'react';
import { SCHEDULE } from '../data/gymData';
import { Clock, Filter, ArrowUpRight, Flame } from 'lucide-react';

interface ScheduleSectionProps {
  onSelectSlot: (modality: string, time: string, day: string) => void;
}

export const ScheduleSection: React.FC<ScheduleSectionProps> = ({ onSelectSlot }) => {
  const [selectedModality, setSelectedModality] = useState<string>('Todas');
  const [selectedShift, setSelectedShift] = useState<string>('Todos');

  const modalitiesList = ['Todas', 'Musculação', 'Funcional', 'Spinning', 'Lutas'];
  const shiftsList = ['Todos', 'Manhã', 'Tarde', 'Noite'];

  const filteredSchedule = useMemo(() => {
    return SCHEDULE.filter((item) => {
      const matchModality =
        selectedModality === 'Todas' || item.modality === selectedModality;
      const matchShift =
        selectedShift === 'Todos' || item.shift === selectedShift;
      return matchModality && matchShift;
    });
  }, [selectedModality, selectedShift]);

  return (
    <section id="horarios" className="py-14 sm:py-20 lg:py-28 bg-[#141414] border-b border-white/10 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-6 sm:mb-10">
          <div className="space-y-2 sm:space-y-3">
            <span className="text-xs font-semibold tracking-widest text-[#C8F031] uppercase">
              Programação Semanal
            </span>
            <h2 className="text-2xl min-[360px]:text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold uppercase text-white tracking-tight leading-[1.08]">
              GRADE DE HORÁRIOS
            </h2>
          </div>
          <p className="text-sm sm:text-base text-neutral-300 max-w-md font-sans leading-relaxed">
            Aulas de segunda a sábado planejadas para manter sua constância. Escolha uma modalidade ou turno e reserve sua vaga para a aula experimental.
          </p>
        </div>

        {/* Filter Controls (Touch-Friendly Horizontal Scrollable Bar on Mobile) */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3.5 p-3 sm:p-4 rounded-2xl bg-[#1B1B1B] border border-white/10 mb-6 sm:mb-8">
          {/* Modality Filter */}
          <div className="flex items-center overflow-x-auto scrollbar-none pb-1 sm:pb-0 gap-1.5 -mx-1 px-1 sm:mx-0 sm:px-0">
            <span className="text-xs font-mono uppercase text-neutral-400 mr-1 flex items-center gap-1 shrink-0">
              <Filter className="w-3.5 h-3.5 text-[#C8F031]" />
              Modalidade:
            </span>
            {modalitiesList.map((mod) => (
              <button
                key={mod}
                onClick={() => setSelectedModality(mod)}
                className={`min-h-[42px] px-3.5 py-2 text-xs font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer whitespace-nowrap shrink-0 active:scale-95 ${
                  selectedModality === mod
                    ? 'bg-[#C8F031] text-black shadow-sm'
                    : 'bg-white/5 text-neutral-300 hover:text-white hover:bg-white/10 active:bg-white/15'
                }`}
              >
                {mod}
              </button>
            ))}
          </div>

          {/* Shift Filter */}
          <div className="flex items-center overflow-x-auto scrollbar-none pt-2 sm:pt-0 sm:border-t-0 border-t border-white/10 gap-1.5 -mx-1 px-1 sm:mx-0 sm:px-0">
            <span className="text-xs font-mono uppercase text-neutral-400 mr-1 flex items-center gap-1 shrink-0">
              <Clock className="w-3.5 h-3.5 text-[#C8F031]" />
              Turno:
            </span>
            {shiftsList.map((shift) => (
              <button
                key={shift}
                onClick={() => setSelectedShift(shift)}
                className={`min-h-[42px] px-3.5 py-2 text-xs font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer whitespace-nowrap shrink-0 active:scale-95 ${
                  selectedShift === shift
                    ? 'bg-white text-black shadow-sm'
                    : 'bg-white/5 text-neutral-300 hover:text-white hover:bg-white/10 active:bg-white/15'
                }`}
              >
                {shift}
              </button>
            ))}
          </div>
        </div>

        {/* Schedule Table (Desktop & Tablet) */}
        <div className="hidden sm:block overflow-hidden rounded-2xl border border-white/10 bg-[#1B1B1B]">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 bg-black/40 text-[11px] font-mono uppercase tracking-wider text-neutral-400">
                <th className="py-4 px-6">Horário</th>
                <th className="py-4 px-6">Modalidade</th>
                <th className="py-4 px-6">Treino / Foco</th>
                <th className="py-4 px-6">Dias</th>
                <th className="py-4 px-6">Treinador</th>
                <th className="py-4 px-6">Espaço</th>
                <th className="py-4 px-6 text-right">Ação</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-sm">
              {filteredSchedule.length === 0 ? (
                <tr>
                  <td colSpan={7} className="py-12 text-center text-neutral-400">
                    Nenhum treino encontrado para os filtros selecionados.
                  </td>
                </tr>
              ) : (
                filteredSchedule.map((slot) => (
                  <tr
                    key={slot.id}
                    className="hover:bg-white/[0.03] transition-colors group"
                  >
                    <td className="py-4 px-6 font-mono font-bold text-white tabular-nums">
                      {slot.time}
                    </td>
                    <td className="py-4 px-6">
                      <span className="font-semibold text-neutral-200">
                        {slot.modality}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex flex-col">
                        <span className="text-white font-medium">{slot.name}</span>
                        <span className="text-xs text-neutral-400 font-mono">
                          Intensidade: {slot.intensity}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-1 font-mono text-xs">
                        {slot.days.map((d) => (
                          <span
                            key={d}
                            className="px-1.5 py-0.5 rounded bg-white/10 text-neutral-300 font-medium"
                          >
                            {d}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="py-4 px-6 text-neutral-300 font-sans text-xs">
                      {slot.instructor}
                    </td>
                    <td className="py-4 px-6 text-neutral-400 font-sans text-xs">
                      {slot.room}
                    </td>
                    <td className="py-4 px-6 text-right">
                      <button
                        onClick={() =>
                          onSelectSlot(
                            slot.modality,
                            slot.time,
                            slot.days[0] === 'Seg' ? 'Segunda-feira' : `${slot.days[0]}`
                          )
                        }
                        className="inline-flex items-center gap-1 px-3.5 py-2 text-xs font-bold uppercase tracking-wider text-black bg-[#C8F031] hover:bg-[#d8ff43] rounded transition-all cursor-pointer whitespace-nowrap shadow-sm active:scale-95"
                      >
                        <span>Reservar</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Mobile View: High-Density Ergonomic Touch Cards */}
        <div className="sm:hidden space-y-3.5">
          {filteredSchedule.length === 0 ? (
            <div className="p-8 text-center text-neutral-400 bg-[#1B1B1B] rounded-2xl border border-white/10">
              Nenhum treino encontrado com os filtros atuais.
            </div>
          ) : (
            filteredSchedule.map((slot) => (
              <div
                key={slot.id}
                className="p-4 sm:p-5 rounded-2xl bg-[#1B1B1B] border border-white/15 space-y-3 shadow-md"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-mono font-black text-[#C8F031] tabular-nums">
                      {slot.time}
                    </span>
                    <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">
                      {slot.shift}
                    </span>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-white px-2.5 py-1 rounded-md bg-white/10 border border-white/10">
                    {slot.modality}
                  </span>
                </div>

                <div>
                  <h4 className="text-base font-bold text-white">{slot.name}</h4>
                  <p className="text-xs text-neutral-400 pt-0.5">
                    {slot.instructor} · <span className="text-neutral-300">{slot.room}</span>
                  </p>
                </div>

                {/* Day chips */}
                <div className="flex items-center gap-1.5 font-mono text-xs pt-0.5">
                  <span className="text-[11px] text-neutral-500 mr-1">Dias:</span>
                  {slot.days.map((d) => (
                    <span
                      key={d}
                      className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-neutral-200 font-semibold"
                    >
                      {d}
                    </span>
                  ))}
                </div>

                {/* Card Action with 44px+ Touch Hitbox */}
                <div className="pt-3 border-t border-white/10 flex flex-col min-[360px]:flex-row min-[360px]:items-center justify-between gap-2.5">
                  <span className="text-[11px] font-mono text-neutral-400">
                    Intensidade: <strong className="text-white">{slot.intensity}</strong>
                  </span>
                  <button
                    onClick={() =>
                      onSelectSlot(
                        slot.modality,
                        slot.time,
                        slot.days[0] === 'Seg' ? 'Segunda-feira' : `${slot.days[0]}`
                      )
                    }
                    className="w-full min-[360px]:w-auto min-h-[44px] px-4 py-2.5 inline-flex items-center justify-center gap-1.5 text-xs font-black uppercase tracking-wider text-black bg-[#C8F031] active:bg-[#d8ff43] rounded-xl active:scale-95 transition-all shadow-md shrink-0"
                  >
                    <span>Reservar Horário</span>
                    <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

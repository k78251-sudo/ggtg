import React, { useState, useEffect } from 'react';
import { Send, Copy, Check, MessageSquare, AlertCircle, Sparkles, Calendar, Clock, User, Phone } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface BookingFormSectionProps {
  initialModality?: string;
  initialTime?: string;
  initialDay?: string;
}

export const BookingFormSection: React.FC<BookingFormSectionProps> = ({
  initialModality,
  initialTime,
  initialDay,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [modality, setModality] = useState(initialModality || 'Musculação');
  const [day, setDay] = useState(initialDay || 'Segunda-feira');
  const [time, setTime] = useState(initialTime || '19:00');
  const [notes, setNotes] = useState('');

  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Update if props change from external clicks
  useEffect(() => {
    if (initialModality) setModality(initialModality);
  }, [initialModality]);

  useEffect(() => {
    if (initialTime) setTime(initialTime);
  }, [initialTime]);

  useEffect(() => {
    if (initialDay) setDay(initialDay);
  }, [initialDay]);

  // Format Brazilian phone mask (XX) XXXXX-XXXX
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/\D/g, '');
    let formatted = raw;

    if (raw.length > 11) {
      formatted = raw.slice(0, 11);
    }

    if (formatted.length > 6) {
      formatted = `(${formatted.slice(0, 2)}) ${formatted.slice(2, 7)}-${formatted.slice(7)}`;
    } else if (formatted.length > 2) {
      formatted = `(${formatted.slice(0, 2)}) ${formatted.slice(2)}`;
    }

    setPhone(formatted);
    if (errorMsg) setErrorMsg('');
  };

  // Build the message
  const generatedMessage = `Olá! Quero confirmar meu agendamento de aula experimental gratuita no Vértice Centro de Treinamento.

• Aluno(a): ${name.trim() || '[Seu Nome]'}
• Modalidade: ${modality}
• Dia: ${day}
• Horário: ${time}
${notes.trim() ? `• Observações: ${notes.trim()}\n` : ''}
Estou enviando este resumo para meu próprio WhatsApp para salvar na minha agenda e apresentar na recepção!`;

  // Submit: open WhatsApp directed to visitor's OWN phone number
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      setErrorMsg('Por favor, informe seu nome completo.');
      return;
    }

    const digitsOnly = phone.replace(/\D/g, '');
    if (digitsOnly.length < 10) {
      setErrorMsg('Por favor, digite seu número de WhatsApp completo com DDD.');
      return;
    }

    setErrorMsg('');

    // Ensure Brazilian country code 55
    const targetNumber = digitsOnly.startsWith('55') && digitsOnly.length >= 12
      ? digitsOnly
      : `55${digitsOnly}`;

    const encodedText = encodeURIComponent(generatedMessage);
    const whatsappUrl = `https://wa.me/${targetNumber}?text=${encodedText}`;

    setSubmitted(true);
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  // Copy summary alternative
  const handleCopySummary = async () => {
    try {
      await navigator.clipboard.writeText(generatedMessage);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      // Fallback
      const textArea = document.createElement('textarea');
      textArea.value = generatedMessage;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  const daysList = [
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado',
  ];

  const timesList = [
    '06:30',
    '07:00',
    '08:00',
    '09:00',
    '12:15',
    '13:00',
    '17:30',
    '18:30',
    '19:00',
    '19:30',
    '20:15',
  ];

  return (
    <section id="agendamento" className="py-14 sm:py-20 lg:py-28 bg-[#141414] border-b border-white/10 relative w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14 space-y-2.5 sm:space-y-4">
          <span className="text-xs font-semibold tracking-widest text-[#C8F031] uppercase">
            Sem Custo · Sem Compromisso
          </span>
          <h2 className="text-2xl min-[360px]:text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold uppercase text-white tracking-tight leading-[1.08]">
            RESERVE SUA AULA EXPERIMENTAL
          </h2>
          <p className="text-sm sm:text-base text-neutral-300 font-sans leading-relaxed">
            Preencha seus dados em menos de 1 minuto. Nós geramos o resumo formatado e enviamos diretamente para o{' '}
            <strong className="text-white font-semibold">seu próprio WhatsApp</strong> para você salvar a confirmação na sua conversa e apresentar na recepção.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* Booking Form (Left 7 Columns) */}
          <div className="lg:col-span-7 rounded-2xl border border-white/15 bg-[#1B1B1B] p-4 min-[360px]:p-6 sm:p-10 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              {errorMsg && (
                <div className="p-3.5 sm:p-4 rounded-xl bg-red-950/60 border border-red-500/40 text-red-200 text-xs sm:text-sm flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Name field */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-neutral-300 flex items-center gap-2">
                  <User className="w-4 h-4 text-[#C8F031]" />
                  Seu Nome Completo
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Carlos Silva"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (errorMsg) setErrorMsg('');
                  }}
                  className="w-full min-h-[48px] px-4 py-3 rounded-xl bg-black/60 border border-white/15 text-white placeholder-neutral-500 focus:outline-none focus:border-[#C8F031] focus:ring-1 focus:ring-[#C8F031] transition-all text-base sm:text-sm"
                />
              </div>

              {/* Visitor's own WhatsApp number */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold uppercase tracking-wider text-neutral-300 flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#C8F031]" />
                    Seu Número de WhatsApp
                  </label>
                  <span className="text-[11px] text-neutral-400">
                    O resumo será enviado para este número
                  </span>
                </div>
                <input
                  type="tel"
                  required
                  placeholder="(00) 00000-0000"
                  value={phone}
                  onChange={handlePhoneChange}
                  className="w-full min-h-[48px] px-4 py-3 rounded-xl bg-black/60 border border-white/15 text-white placeholder-neutral-500 focus:outline-none focus:border-[#C8F031] focus:ring-1 focus:ring-[#C8F031] transition-all text-base sm:text-sm font-mono"
                />
              </div>

              {/* Modality Selector */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-neutral-300 block">
                  Modalidade Desejada
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {['Musculação', 'Funcional', 'Spinning', 'Lutas'].map((mod) => (
                    <button
                      type="button"
                      key={mod}
                      onClick={() => setModality(mod)}
                      className={`min-h-[46px] py-2.5 px-3 rounded-xl text-xs font-bold uppercase tracking-wider border transition-all cursor-pointer active:scale-95 flex items-center justify-center text-center ${
                        modality === mod
                          ? 'bg-[#C8F031] text-black border-[#C8F031] shadow-[0_0_15px_rgba(200,240,49,0.2)]'
                          : 'bg-black/40 text-neutral-300 border-white/10 hover:border-white/30'
                      }`}
                    >
                      {mod}
                    </button>
                  ))}
                </div>
              </div>

              {/* Day and Time grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Day selector */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-neutral-300 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#C8F031]" />
                    Dia Preferido
                  </label>
                  <select
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                    className="w-full min-h-[48px] px-4 py-3 rounded-xl bg-black/60 border border-white/15 text-white focus:outline-none focus:border-[#C8F031] transition-all text-base sm:text-sm cursor-pointer"
                  >
                    {daysList.map((d) => (
                      <option key={d} value={d} className="bg-neutral-900 text-white">
                        {d}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Time selector */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-neutral-300 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#C8F031]" />
                    Horário Pretendido
                  </label>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full min-h-[48px] px-4 py-3 rounded-xl bg-black/60 border border-white/15 text-white focus:outline-none focus:border-[#C8F031] transition-all text-base sm:text-sm font-mono cursor-pointer"
                  >
                    {timesList.map((t) => (
                      <option key={t} value={t} className="bg-neutral-900 text-white">
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Optional Notes */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-neutral-300 block">
                  Observações de Treino (Opcional)
                </label>
                <input
                  type="text"
                  placeholder="Ex: Já treino há 1 ano / Tenho restrição no ombro"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full min-h-[46px] px-4 py-3 rounded-xl bg-black/60 border border-white/15 text-white placeholder-neutral-500 focus:outline-none focus:border-[#C8F031] transition-all text-base sm:text-sm"
                />
              </div>

              {/* Form Actions */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="min-h-[50px] flex-1 flex items-center justify-center gap-2 py-4 px-6 text-sm sm:text-base font-black uppercase tracking-wider text-black bg-[#C8F031] hover:bg-[#d8ff43] active:scale-95 rounded-xl transition-all shadow-[0_0_20px_rgba(200,240,49,0.25)] hover:shadow-[0_0_30px_rgba(200,240,49,0.4)] cursor-pointer"
                >
                  <Send className="w-4 h-4 stroke-[2.5]" />
                  <span>Enviar para meu WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={handleCopySummary}
                  className="min-h-[50px] inline-flex items-center justify-center gap-2 py-4 px-5 text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-300 hover:text-white bg-white/5 hover:bg-white/10 active:bg-white/15 border border-white/20 hover:border-white/40 active:scale-95 rounded-xl transition-all cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-[#C8F031] stroke-[2.5]" />
                      <span className="text-[#C8F031]">Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copiar Resumo</span>
                    </>
                  )}
                </button>
              </div>

              {submitted && (
                <div className="p-3 rounded bg-emerald-950/40 border border-[#C8F031]/40 text-xs text-[#C8F031] flex items-center gap-2">
                  <Check className="w-4 h-4 shrink-0" />
                  <span>
                    WhatsApp aberto com sucesso no seu número! Verifique a mensagem e apresente-a na recepção da Vértice.
                  </span>
                </div>
              )}
            </form>
          </div>

          {/* WhatsApp Preview Card (Right 5 Columns) */}
          <div className="lg:col-span-5 rounded-2xl border border-white/15 bg-[#1B1B1B] p-4 min-[360px]:p-5 sm:p-8 flex flex-col justify-between space-y-6 shadow-xl">
            <div>
              <div className="flex items-center justify-between pb-3.5 sm:pb-4 border-b border-white/10">
                <BrandLogo size="sm" showSubtitle={true} />
                <span className="text-[10px] min-[360px]:text-[11px] font-mono text-[#C8F031] font-semibold bg-[#C8F031]/10 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded border border-[#C8F031]/20">
                  PASSE EXPERIMENTAL
                </span>
              </div>

              {/* Simulated WhatsApp Chat Bubble */}
              <div className="mt-4 sm:mt-6 rounded-xl bg-neutral-900 border border-white/10 p-3.5 sm:p-5 space-y-2.5 sm:space-y-3 font-sans">
                <div className="flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-neutral-500 border-b border-white/5 pb-2">
                  <span className="truncate pr-2">Destinatário: {phone || '(Seu WhatsApp)'}</span>
                  <span className="shrink-0">Agora</span>
                </div>

                <div className="text-xs sm:text-sm text-neutral-200 whitespace-pre-line leading-relaxed font-sans">
                  {generatedMessage}
                </div>

                <div className="pt-2 flex justify-end">
                  <span className="text-[10px] font-mono text-[#C8F031]">
                    ✓✓ Enviado para você
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-4 border-t border-white/10">
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-300">
                O que acontece a seguir?
              </h4>
              <ul className="text-xs text-neutral-400 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C8F031] mt-1.5 shrink-0" />
                  <span>Traga roupas confortáveis, tênis esportivo e sua garrafa de água.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C8F031] mt-1.5 shrink-0" />
                  <span>Apresente a mensagem na recepção ao chegar para ter seu instrutor designado.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C8F031] mt-1.5 shrink-0" />
                  <span>Nenhum cartão ou dado bancário será solicitado para a aula experimental.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

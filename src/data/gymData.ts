export interface Modality {
  id: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  specs: string[];
  intensity: 'Alta' | 'Média-Alta' | 'Máxima';
}

export interface Plan {
  id: string;
  name: string;
  billingPeriod: string;
  monthlyEquivalent: number;
  totalPrice?: number;
  featured: boolean;
  badge?: string;
  description: string;
  benefits: string[];
  ctaLabel: string;
}

export interface ScheduleItem {
  id: string;
  time: string;
  modality: 'Musculação' | 'Funcional' | 'Spinning' | 'Lutas';
  name: string;
  days: ('Seg' | 'Ter' | 'Qua' | 'Qui' | 'Sex' | 'Sáb')[];
  shift: 'Manhã' | 'Tarde' | 'Noite';
  instructor: string;
  intensity: string;
  room: string;
}

export interface Coach {
  id: string;
  name: string;
  role: string;
  specialty: string;
  cref: string;
  bio: string;
  experience: string;
}

export interface Testimonial {
  id: string;
  author: string;
  age: number;
  modality: string;
  quote: string;
  period: string;
  metric: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const MODALITIES: Modality[] = [
  {
    id: 'musculacao',
    name: 'Musculação',
    shortDesc: 'Equipamentos robustos, pesos livres organizados e professores presentes no salão.',
    fullDesc: 'Mais de 450m² planejados para o treino render. Gaiolas olímpicas reforçadas, barras retas e w, halteres maciços de 2 a 50 kg e maquinário articulado com movimento biomecânico fluido, sem folga em cabos ou disputa de aparelho.',
    image: '/demo-sample.png',
    specs: [
      'Gaiolas de agachamento com anilhas calibradas',
      'Halteres organizados e bancos com ajuste angular firme',
      'Orientação ativa de postura e correção de carga',
    ],
    intensity: 'Alta',
  },
  {
    id: 'funcional',
    name: 'Treinamento Funcional',
    shortDesc: 'Movimentos naturais, força aplicável e condicionamento físico para o dia a dia.',
    fullDesc: 'Treinos dinâmicos em turmas reduzidas. Trabalhamos mobilidade articular, potência e resistência muscular com kettlebells, caixas de salto, trenós de empurrão e cordas navais. Cada aula tem uma meta clara e um ritmo guiado pelo treinador.',
    image: '/demo-sample.png',
    specs: [
      'Turmas com no máximo 14 alunos para atenção próxima',
      'Piso emborrachado com alta absorção de impacto',
      'Progressão de carga adaptada para iniciantes e avançados',
    ],
    intensity: 'Máxima',
  },
  {
    id: 'spinning',
    name: 'Spinning / Ciclismo Indoor',
    shortDesc: 'Pedal intervalado de alto gasto calórico com métricas de cadência e potência no painel.',
    fullDesc: 'Estúdio dedicado com acústica tratada e climatização a 19°C. Bicicletas profissionais com regulagens precisas de guidão e selim, além de monitor individual de RPM, watts e batimento cardíaco para você controlar o ritmo exato de cada tiro.',
    image: '/demo-sample.png',
    specs: [
      'Bikes com leitura de cadência e potência individual',
      'Sala refrigerada para manter o rendimento do início ao fim',
      'Treinos intervalados desenhados para queima e fôlego',
    ],
    intensity: 'Alta',
  },
  {
    id: 'lutas',
    name: 'Lutas (Boxe & Muay Thai)',
    shortDesc: 'Técnica de combate limpa, trabalho intenso de pernas e descarrego de estresse nas manoplas.',
    fullDesc: 'Treinamento focado em postura, esquiva, jogo de pernas e precisão de golpes. Sem enrolação e sem risco desnecessário: você aprende fundamentos reais de boxe e muay thai com rounds cronometrados em sacos de couro e treino de manoplas com os professores.',
    image: '/demo-sample.png',
    specs: [
      'Tatame higienizado diariamente com textura antiderrapante',
      'Equipamentos de proteção e luvas de empréstimo para a aula experimental',
      'Ambiente respeitoso com foco em evolução técnica mútua',
    ],
    intensity: 'Máxima',
  },
];

export const PLANS: Plan[] = [
  {
    id: 'mensal',
    name: 'Plano Mensal',
    billingPeriod: 'Cobrança mensal no cartão · Sem fidelidade',
    monthlyEquivalent: 189,
    featured: false,
    description: 'Ideal para quem prefere flexibilidade e não quer ficar preso a contratos longos.',
    benefits: [
      'Acesso livre ao salão de musculação',
      'Vestiários completos com chuveiros aquecidos e armários rotativos',
      'Ficha de treino inicial montada pelo professor',
      'Cancele quando quiser com aviso prévio de 15 dias',
    ],
    ctaLabel: 'Escolher Mensal',
  },
  {
    id: 'trimestral',
    name: 'Plano Trimestral',
    billingPeriod: '3 parcelas de R$ 149 (ou R$ 447 à vista)',
    monthlyEquivalent: 149,
    totalPrice: 447,
    featured: true,
    badge: 'MAIS ESCOLHIDO',
    description: 'O período recomendado pelos nossos treinadores para consolidar ritmo, corrigir postura e sentir resultados expressivos no espelho e na rotina.',
    benefits: [
      'Acesso ILIMITADO a todas as modalidades (Musculação, Funcional, Spinning e Lutas)',
      'Avaliação física completa e bioimpedância incluídas a cada 45 dias',
      'Livre acesso em qualquer dia e horário de funcionamento do CT',
      '1 sessão individual com o professor para planejamento de metas',
      'Economia de R$ 120 em comparação à mensalidade padrão',
    ],
    ctaLabel: 'Quero o Plano Trimestral',
  },
  {
    id: 'anual',
    name: 'Plano Anual',
    billingPeriod: '12 parcelas de R$ 129 (ou R$ 1.548 à vista)',
    monthlyEquivalent: 129,
    totalPrice: 1548,
    featured: false,
    description: 'Para quem já tem o hábito consolidado e busca o melhor custo-benefício para treinar o ano inteiro.',
    benefits: [
      'Acesso completo a todas as áreas e aulas do centro de treinamento',
      'Bioimpedância trimestral para acompanhar ganhos de massa e queima',
      'Direito a 30 dias de trancamento por ano para viagens e férias',
      '2 cortesias de treino para amigos ou familiares por mês',
    ],
    ctaLabel: 'Escolher Anual',
  },
];

export const SCHEDULE: ScheduleItem[] = [
  {
    id: 'sch-1',
    time: '06:30',
    modality: 'Spinning',
    name: 'Spinning Intervalado Matinal',
    days: ['Seg', 'Qua', 'Sex'],
    shift: 'Manhã',
    instructor: 'Treinadora Bia',
    intensity: 'Alta',
    room: 'Estúdio Ciclo 01',
  },
  {
    id: 'sch-2',
    time: '07:00',
    modality: 'Funcional',
    name: 'Funcional: Força e Mobilidade',
    days: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex'],
    shift: 'Manhã',
    instructor: 'Treinadora Camila',
    intensity: 'Máxima',
    room: 'Arena Funcional',
  },
  {
    id: 'sch-3',
    time: '08:00',
    modality: 'Musculação',
    name: 'Supervisão Ativa de Levantamentos',
    days: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
    shift: 'Manhã',
    instructor: 'Treinador Rafael',
    intensity: 'Alta',
    room: 'Salão de Pesos',
  },
  {
    id: 'sch-4',
    time: '09:00',
    modality: 'Lutas',
    name: 'Boxe Técnico: Postura e Golpes',
    days: ['Ter', 'Qui', 'Sáb'],
    shift: 'Manhã',
    instructor: 'Treinador Marcelo',
    intensity: 'Alta',
    room: 'Arena de Luta',
  },
  {
    id: 'sch-5',
    time: '12:15',
    modality: 'Spinning',
    name: 'Sprint Express (45 min)',
    days: ['Seg', 'Qua', 'Sex'],
    shift: 'Tarde',
    instructor: 'Treinadora Bia',
    intensity: 'Máxima',
    room: 'Estúdio Ciclo 01',
  },
  {
    id: 'sch-6',
    time: '13:00',
    modality: 'Funcional',
    name: 'Circuito Kettlebell e Fortalecimento',
    days: ['Ter', 'Qui'],
    shift: 'Tarde',
    instructor: 'Treinadora Camila',
    intensity: 'Média-Alta',
    room: 'Arena Funcional',
  },
  {
    id: 'sch-7',
    time: '17:30',
    modality: 'Lutas',
    name: 'Muay Thai: Clinch e Condicionamento',
    days: ['Seg', 'Qua', 'Sex'],
    shift: 'Tarde',
    instructor: 'Treinador Marcelo',
    intensity: 'Máxima',
    room: 'Arena de Luta',
  },
  {
    id: 'sch-8',
    time: '18:30',
    modality: 'Spinning',
    name: 'Endurance Rítmico Noturno',
    days: ['Seg', 'Ter', 'Qua', 'Qui'],
    shift: 'Noite',
    instructor: 'Treinadora Bia',
    intensity: 'Alta',
    room: 'Estúdio Ciclo 01',
  },
  {
    id: 'sch-9',
    time: '19:00',
    modality: 'Funcional',
    name: 'Metabólico Noturno Avançado',
    days: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex'],
    shift: 'Noite',
    instructor: 'Treinadora Camila',
    intensity: 'Máxima',
    room: 'Arena Funcional',
  },
  {
    id: 'sch-10',
    time: '19:30',
    modality: 'Musculação',
    name: 'Plantão Técnico de Força',
    days: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex'],
    shift: 'Noite',
    instructor: 'Treinador Rafael',
    intensity: 'Alta',
    room: 'Salão de Pesos',
  },
  {
    id: 'sch-11',
    time: '20:15',
    modality: 'Lutas',
    name: 'Boxe: Manoplas e Defesa Pessoal',
    days: ['Ter', 'Qui'],
    shift: 'Noite',
    instructor: 'Treinador Marcelo',
    intensity: 'Máxima',
    room: 'Arena de Luta',
  },
];

export const COACHES: Coach[] = [
  {
    id: 'rafael',
    name: 'Rafael Santos',
    role: 'Coordenador de Musculação & Biomecânica',
    specialty: 'Treinamento de força com barras livres e hipertrofia',
    cref: 'CREF 000000-G/SP',
    bio: 'Mais de 9 anos de atuação no salão de treino. Especialista em ensinar a mecânica segura de agachamento, supino e levantamento terra para alunos de todas as idades.',
    experience: '9 anos de salão',
  },
  {
    id: 'camila',
    name: 'Camila Duarte',
    role: 'Responsável pelo Treinamento Funcional',
    specialty: 'Condicionamento físico integrado e mobilidade',
    cref: 'CREF 000000-G/SP',
    bio: 'Fisiologista do exercício focada em construir força útil sem sobrecarregar coluna e ombros. Suas aulas combinam dinamismo com correções individuais rigorosas.',
    experience: '7 anos de prática',
  },
  {
    id: 'marcelo',
    name: 'Marcelo Rossi',
    role: 'Instrutor de Boxe & Muay Thai',
    specialty: 'Fundamentos de combate, esquiva e condicionamento marcial',
    cref: 'CREF 000000-G/SP',
    bio: 'Ex-atleta com 11 anos de experiência nos ringues. Ministra aulas focadas na técnica limpa e no respeito mútuo, acolhendo desde iniciantes absolutos até praticantes experientes.',
    experience: '11 anos de tatame',
  },
  {
    id: 'bia',
    name: 'Beatriz Castro',
    role: 'Treinadora de Ciclismo Indoor',
    specialty: 'Capacidade aeróbica e treinos por zona de potência',
    cref: 'CREF 000000-G/SP',
    bio: 'Apaixonada por ciclismo de estrada. Suas sessões combinam músicas enérgicas com monitoramento preciso de cadência para fazer o tempo voar enquanto você queima energia.',
    experience: '6 anos de aulas',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    author: 'Rodrigo Medeiros',
    age: 34,
    modality: 'Musculação',
    period: 'Aluno há 8 meses',
    metric: '+35 kg no levantamento terra com técnica limpa',
    quote: 'Treinava em academia de rede onde os instrutores passavam o tempo todo no balcão. No Vértice, logo no primeiro mês o Rafael corrigiu minha saída de barra e as dores na lombar sumiram. O salão tem espaço, equipamento bom e gente focada.',
  },
  {
    id: 'test-2',
    author: 'Fernanda Lacerda',
    age: 29,
    modality: 'Spinning & Funcional',
    period: 'Aluna há 5 meses',
    metric: 'Melhoria de 6 minutos no tempo dos 10 km de corrida',
    quote: 'O spinning daqui não tem aquelas dancinhas sem nexo que machucam o joelho. É treino sério de potência e cadência, exatamente o que eu precisava para ganhar fôlego na corrida de rua. As bikes são muito bem cuidadas.',
  },
  {
    id: 'test-3',
    author: 'Tiago Silveira',
    age: 42,
    modality: 'Lutas & Musculação',
    period: 'Aluno há 1 ano',
    metric: 'Redução de 7% no percentual de gordura',
    quote: 'Fiz a aula experimental de boxe achando que iam tentar me empurrar plano na saída. O Marcelo passou 45 minutos me ensinando base e guarda com total paciência. A seriedade da equipe me fez fechar o plano no mesmo dia.',
  },
];

export const FAQS: FAQItem[] = [
  {
    question: 'Como funciona a aula experimental gratuita?',
    answer: 'Você escolhe o dia, o horário e a modalidade que quer experimentar no formulário desta página. Ao chegar no centro de treinamento, nossa recepção te apresenta o espaço e um treinador fica responsável por orientar seu aquecimento, adaptar os exercícios ao seu nível e te acompanhar durante toda a sessão. Sem custo e sem enrolação.',
  },
  {
    question: 'Preciso levar materiais ou luvas próprias para a aula de lutas?',
    answer: 'Não se preocupe: para a primeira aula nós fornecemos luvas higienizadas e todo o equipamento de treino necessário. Basta vir com roupas leves esportivas, tênis confortável e uma garrafa d’água.',
  },
  {
    question: 'Existe taxa de adesão, taxa anual ou anuidade escondida?',
    answer: 'Não cobramos taxas de manutenção, taxa de adesão ou qualquer taxa surpresa. O valor anunciado em cada plano é exatamente o que você paga pelo período contratado, com total clareza.',
  },
  {
    question: 'Posso trancar a matrícula em caso de viagem ou férias?',
    answer: 'Sim! No plano Anual, você tem direito a até 30 dias corridos de trancamento por ano para usar quando tirar férias ou precisar viajar a trabalho, sem perder nenhum dia do seu plano.',
  },
  {
    question: 'O centro de treinamento possui estacionamento e vestiários?',
    answer: 'Sim. Nossos vestiários são amplos, contam com chuveiros aquecidos a gás de alta vazão, secadores e armários rotativos. Além disso, temos convênio com estacionamento coberto no quarteirão com 2 horas de cortesia para nossos alunos.',
  },
  {
    question: 'Como faço para cancelar meu plano caso precise?',
    answer: 'No plano mensal não há fidelidade: basta solicitar o cancelamento na recepção ou via WhatsApp com 15 dias de antecedência da próxima cobrança. Sem taxas abusivas ou processos burocráticos.',
  },
];

# Vértice Centro de Treinamento — Identidade Autoral e Exclusiva

Plano de reformulação profunda da marca para criar uma **identidade visual proprietária, forte e criada do zero** para o **Vértice Centro de Treinamento**, eliminando qualquer sufixo genérico ("fit") ou imitação de redes comerciais existentes. A marca ganha um símbolo geométrico exclusivo em vetor inspirado no conceito literal de **vértice** (ponto mais alto, ápice angular de convergência de forças), integrado harmoniosamente à tipografia e aplicado em toda a landing page.

---

### Decisões do Usuário & Confirmações Críticas

> [!IMPORTANT]
> As preferências do usuário para esta revisão foram rigorosamente consolidadas:

- **Nome & Assinatura Oficial**: **VÉRTICE** com o descritivo complementar **Centro de Treinamento** (ou CT), sem o termo "fit".
- **Identidade & Símbolo Exclusivo**: Símbolo geométrico proprietário de ápice angular (o vértice), desenhado com precisão poligonal: linhas vetoriais cortadas em ângulos acentuados (formando uma montanha/triângulo de força e vetor ascendente com detalhes vazados em `#C8F031` e `#FFFFFF`), simbolizando superação de limites, suporte de carga e pico de rendimento.
- **Diferenciação Absoluta**: Nenhuma semelhança com marcas comerciais conhecidas. Identidade autêntica de centro de treinamento de elite (brutalista, atlético e imponente).

---

## 1. Conceito da Nova Marca: O Vértice Geométrico

Na geometria e na física mecânica, o **vértice** é o ponto de encontro de dois segmentos onde toda a tensão e direção convergem; no treinamento desportivo, é o **ápice do condicionamento**.

A nova marca estruturará:
1. **O Símbolo (Ápice Angular)**:
   - Um monograma geométrico ascendente composto por planos diagonais chanfrados que convergem para o ponto superior mais alto (o vértice).
   - O corpo do símbolo combina faces em branco absoluto e o ápice de impacto em verde-limão `#C8F031`.
2. **O Wordmark**:
   - Tipografia display potente em caixa-alta: **VÉRTICE**.
   - Sub-assinatura em tracking expandido: **CENTRO DE TREINAMENTO**.
3. **Versatilidade de Aplicação**:
   - Versão horizontal (Símbolo + Nome) para o Top Bar e Rodapé.
   - Versão selo/insígnia (Símbolo dentro de polígono de alta resistência) para a foto do Hero e o passe de aula no agendamento.

---

## 2. Experiência Visual & Ajustes na Interface

- **Navbar**: Substituição completa pelo novo logotipo autoral com o símbolo geométrico e o nome oficial *VÉRTICE Centro de Treinamento*.
- **Hero Section**:
   - Selo do ápice angular aplicado com precisão sobre a imagem principal.
   - Reforço do posicionamento de Centro de Treinamento focado em rendimento.
- **Formulário de Agendamento & WhatsApp**:
   - A mensagem pré-formatada e o passe oficial passam a emitir: *"Vértice Centro de Treinamento"*.
   - O passe de aula exibe a insígnia oficial proprietária.
- **Rodapé**:
   - Exibição completa do logotipo autoral em grande escala com o manifesto de força e os dados de contato fictícios padronizados `(00) 00000-0000`.

---

## 3. Arquitetura Técnica do Novo Componente de Marca

```
┌──────────────────────────────────────────────────────────────────┐
│                 BrandIdentity (Componente Vetorial)              │
├──────────────────────────────────────────────────────────────────┤
│ ┌──────────────────────┐  ┌────────────────────────────────────┐ │
│ │  Ápice Angular SVG   │  │  Tipografia Proprietária           │ │
│ │  (Polígono Vértice)  │  │  V É R T I C E                     │ │
│ │  Faces Branco / Lima │  │  CENTRO DE TREINAMENTO             │ │
│ └──────────────────────┘  └────────────────────────────────────┘ │
└──────────────────────────────────────────────────────────────────┘
```

- Implementado via vetores SVG puros, garantindo renderização ultra-nítida em telas Retina sem qualquer dependência de imagens externas ou fontes frágeis.
- Props flexíveis: tamanhos `sm`, `md`, `lg` e modos `compact` ou `expanded`.

---

## 4. Próximos Passos na Execução
- Recriar o componente `BrandLogo.tsx` com o símbolo geométrico do ápice angular autoral.
- Atualizar `Navbar.tsx`, `HeroSection.tsx`, `BookingFormSection.tsx` e `Footer.tsx`.
- Validar conformidade de build com `compile_applet` e `lint_applet`.

import React, { useState } from "react";

const withBase = (path) => `${import.meta.env.BASE_URL}${path}`;

const learnCards = [
  {
    title: "Como organizar a tela para ler o mercado com mais clareza",
    description:
      "Entenda quais elementos realmente importam para acompanhar o mercado sem poluição visual e sem distração.",
  },
  {
    title: "Como interpretar o book com mais critério",
    description:
      "Aprenda a observar intenção, posicionamento e comportamento dos players com uma leitura mais madura do que simplesmente olhar o gráfico depois do movimento.",
  },
  {
    title: "Como estruturar risco antes de operar",
    description:
      "Saiba como pensar proteção, exposição e sobrevivência operacional de forma prática, especialmente em dias de maior volatilidade.",
  },
  {
    title: "Como usar opções com racional",
    description:
      "Veja como opções entram dentro de uma lógica de operação e proteção, sem improviso e sem operar por tentativa e erro.",
  },
  {
    title: "Como pensar a operação ao vivo",
    description:
      "Acompanhe o raciocínio por trás da leitura, da adaptação de cenário e da tomada de decisão em tempo real.",
  },
  {
    title: "Como reduzir ruído e ganhar clareza",
    description:
      "O objetivo não é sair do workshop decorando termos. É sair entendendo melhor o que observar, o que evitar e como construir uma base mais sólida.",
  },
];

const workshopConcepts = [
  "leitura de cenário",
  "organização da tela",
  "interpretação de intenção",
  "decisão com base em contexto",
  "controle de risco antes da entrada",
];

const faqs = [
  {
    q: "Preciso ter experiência prévia?",
    a: "Não precisa ser avançado, mas o workshop tende a ser melhor aproveitado por quem já teve algum contato com o mercado e quer organizar melhor sua leitura.",
  },
  { q: "O workshop é ao vivo?", a: "Sim. A proposta é justamente acompanhar a leitura e o raciocínio em tempo real." },
  { q: "Vou ter acesso à gravação?", a: "Sim. O acesso à gravação está incluído." },
  {
    q: "Esse workshop serve para quem já apanhou no mini índice?",
    a: "Sim. Inclusive, faz muito sentido para quem já operou sem estrutura e quer construir uma lógica mais sólida.",
  },
  {
    q: "Vou aprender setup pronto?",
    a: "O foco principal não é setup isolado. O foco é leitura, contexto, risco e tomada de decisão.",
  },
  {
    q: "Qual é o objetivo do workshop?",
    a: "Dar mais clareza sobre como o mercado pode ser lido com método, para que a operação deixe de ser baseada em sensação, impulso ou repetição cega.",
  },
  { q: "Existe garantia?", a: "Sim. Você tem 7 dias de garantia incondicional." },
];

const proofQuotes = [
  "Eu já tinha feito outros cursos, mas só aqui comecei a entender que o problema não era falta de esforço. Era falta de estrutura.",
  "Pela primeira vez, senti que alguém estava mostrando o mercado com lógica, e não tentando me vender facilidade.",
  "Não é sobre setup. É sobre aprender a pensar a operação de forma mais completa.",
];

const proofCharts = [
  {
    name: "Ronaldo",
    context: "evolução de leitura e execução",
    src: withBase("graphics/grafico-performance-aluno-ronaldo.svg"),
    alt: "Gráfico de performance do aluno Ronaldo",
  },
  {
    name: "Jocinei",
    context: "ganho de consistência operacional",
    src: withBase("graphics/grafico-performance-aluno-jocinei.svg"),
    alt: "Gráfico de performance do aluno Jocinei",
  },
  {
    name: "Kelsanny",
    context: "organização de risco e decisão",
    src: withBase("graphics/grafico-performance-aluno-Kelsanny.svg"),
    alt: "Gráfico de performance do aluno Kelsanny",
  },
  {
    name: "Sandro",
    context: "disciplina e leitura de contexto",
    src: withBase("graphics/grafico-performance-aluno-sandro.svg"),
    alt: "Gráfico de performance do aluno Sandro",
  },
];

const pieProof = {
  src: withBase("graphics/grafico-performance-prova-social-aluna.svg"),
  alt: "Gráfico de prova social de aluna",
};

function SectionHeader({ eyebrow, title, centered = false }) {
  return (
    <header className={centered ? "text-center" : ""}>
      <p className="mb-4 text-2xl font-semibold uppercase leading-none tracking-[0.14em] text-emerald-300 [text-shadow:0_0_18px_rgba(16,185,129,0.4)] md:text-3xl">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold leading-[1.06] text-white md:text-5xl">{title}</h2>
    </header>
  );
}

export default function WorkshopVcoLandingPage() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="bg-zinc-950 text-zinc-100 antialiased">
      <style>{`
        @keyframes warmFlicker {
          0%, 100% { opacity: 0.46; filter: blur(18px); }
          25% { opacity: 0.56; filter: blur(22px); }
          50% { opacity: 0.4; filter: blur(19px); }
          75% { opacity: 0.62; filter: blur(24px); }
        }
        .warm-flicker {
          animation: warmFlicker 3.8s ease-in-out infinite;
        }
      `}</style>

      <section className="relative overflow-hidden border-b border-zinc-800/80">
        <img
          src={withBase("images/denden-boxing-hero-bg.png")}
          alt="Background do hero"
          className="absolute inset-0 h-full w-full object-cover object-right opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/85 via-zinc-950/64 to-zinc-950/40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(163,230,53,0.26),transparent_36%)]" />
        <div className="warm-flicker absolute right-[6%] top-[6%] h-[460px] w-[460px] rounded-full bg-yellow-300/42" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="relative z-20">
            <p className="mb-5 text-3xl font-semibold uppercase tracking-[0.14em] text-lime-300 [text-shadow:0_0_24px_rgba(163,230,53,0.45)] md:text-5xl">
              WORKSHOP VCO
            </p>
            <h1 className="max-w-2xl text-4xl font-semibold leading-[0.98] text-white md:text-7xl">O mapa da consistência na prática</h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-zinc-200">
              Pare de operar no escuro. Aprenda a ler o mercado com mais clareza, contexto e controle de risco.
            </p>
            <p className="mt-4 max-w-2xl leading-relaxed text-zinc-300">
              Um workshop ao vivo para quem já cansou de promessas vazias, setups soltos e operações sem lógica.
              Entenda, na prática, como organizar a leitura do mercado e tomar decisões com mais critério.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <span className="rounded-full border border-zinc-600/70 bg-zinc-900/60 px-4 py-2 text-sm text-zinc-100 backdrop-blur">Sábado, 02 de maio de 2026</span>
              <span className="rounded-full border border-zinc-600/70 bg-zinc-900/60 px-4 py-2 text-sm text-zinc-100 backdrop-blur">Transmissão ao vivo em 4K</span>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-5">
              <p className="text-2xl font-semibold tracking-tight text-emerald-300">12x de R$ 4,90 ou R$ 49,00 à vista</p>
              <button className="rounded-md bg-emerald-500 px-8 py-3.5 font-semibold text-zinc-950 shadow-[0_14px_36px_rgba(16,185,129,0.35)] transition hover:bg-emerald-400">
                Quero garantir minha vaga
              </button>
            </div>

            <ul className="mt-10 grid gap-3 text-sm text-zinc-200 sm:grid-cols-3">
              <li className="rounded-lg border border-zinc-700/60 bg-zinc-900/45 px-4 py-3 backdrop-blur">Mais de 20 anos de mercado</li>
              <li className="rounded-lg border border-zinc-700/60 bg-zinc-900/45 px-4 py-3 backdrop-blur">Mais de 5 mil alunos</li>
              <li className="rounded-lg border border-zinc-700/60 bg-zinc-900/45 px-4 py-3 backdrop-blur">Método com foco em leitura, contexto e risco</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <SectionHeader eyebrow="O PROBLEMA NÃO É ESFORÇO" title="Talvez seja falta de estrutura" />
        <p className="mt-6 max-w-4xl text-zinc-300">
          Muita gente passa meses, às vezes anos, tentando operar e repetindo sempre o mesmo ciclo: entra sem contexto,
          reage atrasado, assume risco demais e termina o dia sem entender exatamente por que ganhou ou perdeu. No
          começo, parece que falta coragem. Depois, parece que falta emocional. Mas, na maioria dos casos, o que falta
          é método.
        </p>
        <ul className="mt-8 grid gap-3 text-zinc-200 md:grid-cols-2">
          <li className="rounded-xl border border-zinc-800/70 bg-zinc-900/55 p-4 backdrop-blur">já operou mini índice, dólar, ações ou opções e sente que falta consistência</li>
          <li className="rounded-xl border border-zinc-800/70 bg-zinc-900/55 p-4 backdrop-blur">já fez cursos, viu conteúdo, testou setups, mas continua sem leitura clara</li>
          <li className="rounded-xl border border-zinc-800/70 bg-zinc-900/55 p-4 backdrop-blur">quer parar de depender de achismo e começar a operar com mais estrutura</li>
          <li className="rounded-xl border border-zinc-800/70 bg-zinc-900/55 p-4 backdrop-blur">entendeu que sobreviver no mercado exige muito mais do que acertar entrada</li>
        </ul>
      </section>

      <section className="relative border-y border-zinc-800/80 bg-zinc-900/45">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.08),transparent_42%)]" />
        <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-20">
          <SectionHeader eyebrow="O QUE É" title="O Workshop VCO" />
          <p className="mt-6 max-w-4xl text-zinc-300">
            O Workshop VCO é uma imersão ao vivo desenhada para mostrar, de forma objetiva e aplicada, como o mercado
            deve ser lido por quem busca consistência de verdade. Aqui, o foco não é vender fantasia. O foco é ensinar
            como enxergar contexto, fluxo, book e risco de forma integrada.
          </p>

          <div className="mt-10 grid grid-cols-6 gap-4">
            {workshopConcepts.slice(0, 3).map((item) => (
              <article key={item} className="col-span-6 rounded-2xl border border-zinc-700/70 bg-gradient-to-b from-zinc-800/55 to-zinc-900/70 p-5 backdrop-blur md:col-span-2">
                <div className="mb-3 h-1.5 w-12 rounded-full bg-emerald-300/70" />
                <p className="text-zinc-100">{item}</p>
              </article>
            ))}

            {workshopConcepts.slice(3).map((item, idx) => (
              <article
                key={item}
                className={`col-span-6 rounded-2xl border border-zinc-700/70 bg-gradient-to-b from-zinc-800/55 to-zinc-900/70 p-5 backdrop-blur sm:col-span-3 md:col-span-2 ${
                  idx === 0 ? "md:col-start-2" : "md:col-start-4"
                }`}
              >
                <div className="mb-3 h-1.5 w-12 rounded-full bg-emerald-300/70" />
                <p className="text-zinc-100">{item}</p>
              </article>
            ))}
          </div>

          <p className="mt-6 text-zinc-400">
            É isso que separa quem apenas clica de quem começa a construir uma lógica operacional.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <SectionHeader eyebrow="O QUE VOCÊ VAI APRENDER" title="Os pilares da leitura operacional" />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {learnCards.map((card, idx) => (
            <article
              key={card.title}
              className="group relative overflow-hidden rounded-2xl border border-emerald-300/18 bg-[linear-gradient(165deg,rgba(34,197,94,0.14),rgba(17,24,39,0.78)_38%,rgba(9,9,11,0.9)_100%)] p-6 shadow-[0_14px_30px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur"
            >
              <div className="absolute -top-12 right-0 h-24 w-24 rounded-full bg-emerald-400/10 blur-2xl" />
              <p className="mb-3 text-xs uppercase tracking-[0.16em] text-zinc-500">Pilar {String(idx + 1).padStart(2, "0")}</p>
              <h3 className="text-lg font-semibold text-white">{card.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-300">{card.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-zinc-800/80">
        <img
          src={withBase("images/denden-boxing-landscape-04.png")}
          alt="Leitura de mercado em ambiente profissional"
          className="absolute inset-0 h-full w-full object-cover object-center opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/86 via-zinc-950/84 to-zinc-950/76" />
        <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-20">
          <SectionHeader eyebrow="POR QUE AO VIVO" title="Muda o jogo" />
          <p className="mt-6 max-w-4xl text-zinc-300">
            Ao vivo, você acompanha o que realmente importa: o raciocínio. Você vê como a leitura é construída, como o
            cenário muda, como o risco é avaliado e como a decisão precisa se adaptar quando o mercado não entrega o
            que parecia prometer segundos antes.
          </p>
          <ul className="mt-8 grid gap-3 text-zinc-200 md:grid-cols-2 xl:grid-cols-4">
            <li className="rounded-2xl border border-emerald-300/25 bg-gradient-to-b from-zinc-800/75 to-zinc-900/82 p-4 backdrop-blur">leitura em tempo real</li>
            <li className="rounded-2xl border border-emerald-300/25 bg-gradient-to-b from-zinc-800/75 to-zinc-900/82 p-4 backdrop-blur">análise adaptativa</li>
            <li className="rounded-2xl border border-emerald-300/25 bg-gradient-to-b from-zinc-800/75 to-zinc-900/82 p-4 backdrop-blur">risco + contexto</li>
            <li className="rounded-2xl border border-emerald-300/25 bg-gradient-to-b from-zinc-800/75 to-zinc-900/82 p-4 backdrop-blur">pensamento pré-clique</li>
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-center">
          <div>
            <SectionHeader eyebrow="QUEM CONDUZ" title="Felipe Denden" />
            <p className="mt-6 text-zinc-300">
              Felipe Denden atua há mais de duas décadas no mercado financeiro e construiu sua reputação em torno de
              um ponto que hoje está cada vez mais raro: seriedade. Seu trabalho não gira em torno de promessas
              fáceis. Gira em torno de leitura, processo, gestão de risco e prática real.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-zinc-700/70 bg-zinc-900/70 p-4 backdrop-blur">
                <p className="text-2xl font-semibold text-emerald-300">20+</p>
                <p className="mt-1 text-sm text-zinc-300">anos de mercado</p>
              </div>
              <div className="rounded-xl border border-zinc-700/70 bg-zinc-900/70 p-4 backdrop-blur">
                <p className="text-2xl font-semibold text-emerald-300">180+</p>
                <p className="mt-1 text-sm text-zinc-300">DARFs positivas consecutivas</p>
              </div>
              <div className="rounded-xl border border-zinc-700/70 bg-zinc-900/70 p-4 backdrop-blur">
                <p className="text-2xl font-semibold text-emerald-300">5 mil+</p>
                <p className="mt-1 text-sm text-zinc-300">alunos impactados</p>
              </div>
            </div>
            <p className="mt-5 text-sm text-zinc-400">
              O ponto central aqui não é impressionar com números. É mostrar que existe um histórico, um método e uma
              lógica por trás daquilo que será ensinado.
            </p>
          </div>

          <div className="relative h-[470px]">
            <div className="absolute left-0 top-10 h-64 w-64 rounded-full bg-emerald-400/15 blur-3xl" />
            <img
              src={withBase("images/denden-portrait-02-pointing-up-sem-background.png")}
              alt="Retrato de Felipe Denden"
              className="absolute bottom-0 right-0 h-full w-auto max-w-none object-contain object-bottom"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-zinc-800/80 bg-zinc-900/35">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-16 md:grid-cols-2 md:py-20">
          <article className="rounded-2xl border border-emerald-300/30 bg-gradient-to-b from-emerald-500/14 via-zinc-900/80 to-zinc-900/92 p-7 shadow-[0_20px_48px_rgba(16,185,129,0.15)] backdrop-blur">
            <h3 className="text-xl font-semibold text-white">Para quem é</h3>
            <ul className="mt-4 space-y-3 text-zinc-300">
              <li className="flex gap-3"><span className="font-bold text-emerald-300 [text-shadow:0_0_12px_rgba(16,185,129,0.65)]">✓</span><span>para quem já teve contato com o mercado e quer finalmente entender melhor o que está fazendo</span></li>
              <li className="flex gap-3"><span className="font-bold text-emerald-300 [text-shadow:0_0_12px_rgba(16,185,129,0.65)]">✓</span><span>para quem já se frustrou com cursos superficiais, promessas irreais e abordagens que não se sustentam na prática</span></li>
              <li className="flex gap-3"><span className="font-bold text-emerald-300 [text-shadow:0_0_12px_rgba(16,185,129,0.65)]">✓</span><span>para quem valoriza clareza, estrutura, processo e leitura</span></li>
              <li className="flex gap-3"><span className="font-bold text-emerald-300 [text-shadow:0_0_12px_rgba(16,185,129,0.65)]">✓</span><span>para quem deseja evoluir com mais seriedade</span></li>
            </ul>
          </article>
          <article className="rounded-2xl border border-rose-400/28 bg-gradient-to-b from-rose-500/12 via-zinc-900/82 to-zinc-900/92 p-7 shadow-[0_20px_48px_rgba(244,63,94,0.13)] backdrop-blur">
            <h3 className="text-xl font-semibold text-white">Para quem não é</h3>
            <ul className="mt-4 space-y-3 text-zinc-300">
              <li className="flex gap-3"><span className="font-bold text-rose-300 [text-shadow:0_0_12px_rgba(244,63,94,0.65)]">✕</span><span>não é para quem procura atalho</span></li>
              <li className="flex gap-3"><span className="font-bold text-rose-300 [text-shadow:0_0_12px_rgba(244,63,94,0.65)]">✕</span><span>não é para quem quer enriquecimento rápido</span></li>
              <li className="flex gap-3"><span className="font-bold text-rose-300 [text-shadow:0_0_12px_rgba(244,63,94,0.65)]">✕</span><span>não é para quem espera sinal pronto sem entender racional</span></li>
              <li className="flex gap-3"><span className="font-bold text-rose-300 [text-shadow:0_0_12px_rgba(244,63,94,0.65)]">✕</span><span>não é para quem não quer estudar, observar e amadurecer a própria leitura</span></li>
            </ul>
          </article>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_50%_0%,rgba(30,58,138,0.28),transparent_55%)]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <SectionHeader eyebrow="O QUE O MERCADO ENSINA TARDE DEMAIS" title="Consistência não vem de pressa" />
        <p className="mt-6 max-w-3xl text-zinc-300">
          O mercado não recompensa pressa. O mercado recompensa leitura, controle e consistência.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            {proofQuotes.map((quote, i) => (
              <article key={quote} className="rounded-2xl border border-zinc-700/70 bg-gradient-to-b from-zinc-800/65 to-zinc-900/82 p-6 backdrop-blur">
                <p className="text-2xl leading-relaxed text-zinc-100 md:text-[1.7rem]">“{quote}”</p>
              </article>
            ))}
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            {proofCharts.map((chart) => (
              <div key={chart.src} className="relative">
                <div className="mb-3 px-2">
                  <p className="text-sm font-medium text-zinc-100">Aluno {chart.name}</p>
                  <p className="text-xs text-zinc-400">{chart.context}</p>
                </div>
                <img src={chart.src} alt={chart.alt} className="h-72 w-full rounded-xl object-contain bg-zinc-950/20 p-2 drop-shadow-[0_16px_24px_rgba(0,0,0,0.45)]" />
              </div>
            ))}
          </div>
        </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-zinc-700/80 bg-zinc-900">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.16),transparent_52%)]" />
        <div className="relative mx-auto max-w-5xl px-6 py-16 text-center md:py-24">
          <p className="text-2xl font-semibold uppercase tracking-[0.14em] text-emerald-300 [text-shadow:0_0_16px_rgba(16,185,129,0.35)] md:text-3xl">GARANTA SUA VAGA</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-white md:text-6xl">Workshop VCO</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-zinc-300">
            Um encontro ao vivo para quem quer ganhar clareza operacional e começar a enxergar o mercado com mais
            método.
          </p>

          <div className="relative mx-auto mt-8 max-w-4xl">
            <div className="rounded-2xl border border-emerald-300/24 bg-gradient-to-r from-zinc-900/84 to-zinc-800/52 p-6 text-left text-zinc-200 backdrop-blur">
              <ul className="space-y-3">
                <li>• acesso ao workshop ao vivo</li>
                <li>• acesso à gravação</li>
                <li>• sessão de dúvidas</li>
                <li>• garantia de 7 dias</li>
              </ul>
            </div>

            <div className="relative z-10 mt-8 rounded-3xl border border-emerald-300/35 bg-zinc-950/92 p-7 shadow-[0_24px_56px_rgba(0,0,0,0.58),inset_0_1px_0_rgba(255,255,255,0.08)]">
              <p className="text-5xl font-semibold tracking-tight text-yellow-300 [text-shadow:0_0_22px_rgba(250,204,21,0.45)] md:text-6xl">12x de R$ 4,90</p>
              <p className="mt-2 text-lg text-zinc-300">ou R$ 49,00 à vista</p>
            </div>

            <img
              src={pieProof.src}
              alt={pieProof.alt}
              className="pointer-events-none absolute -right-20 top-16 hidden h-80 w-80 object-contain opacity-75 drop-shadow-[0_18px_36px_rgba(0,0,0,0.45)] md:block -z-10"
            />
          </div>

          <button className="mt-9 rounded-md bg-emerald-500 px-10 py-3.5 font-semibold text-zinc-950 shadow-[0_16px_42px_rgba(16,185,129,0.35)] transition hover:bg-emerald-400">
            Garantir minha vaga agora
          </button>
          <ul className="mt-6 space-y-1 text-sm text-zinc-400">
            <li>Pagamento seguro</li>
            <li>Checkout criptografado</li>
            <li>Garantia incondicional de 7 dias</li>
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 text-center md:py-20">
        <SectionHeader eyebrow="AINDA EM DÚVIDA?" title="Será que isso serve para mim?" centered />
        <p className="mx-auto mt-6 max-w-4xl text-lg leading-relaxed text-zinc-200">
          Se a dúvida é essa, a resposta mais honesta é: serve principalmente para quem já percebeu que continuar
          <span className="font-semibold text-emerald-300"> fazendo do mesmo jeito não vai levar a um resultado diferente.</span>
          {" "}Não importa se houve experiência com mini índice, dólar, ações ou opções. Não importa se já houve curso anterior. Não importa se existiu frustração.
          <span className="font-semibold text-emerald-300"> O que importa é estar disposto a substituir ruído por clareza e improviso por método.</span>
        </p>
        <p className="mx-auto mt-5 max-w-3xl rounded-2xl border border-zinc-700/70 bg-zinc-900/65 p-5 text-sm text-zinc-300 backdrop-blur">
          O workshop não promete transformar ninguém da noite para o dia. Mas pode ser o ponto de virada para quem
          precisava, antes de tudo, aprender a olhar o mercado da forma certa.
        </p>
      </section>

      <section className="border-y border-zinc-800/80 bg-zinc-900/50">
        <div className="mx-auto max-w-4xl px-6 py-16 md:py-20">
          <SectionHeader eyebrow="FAQ" title="Perguntas frequentes" />
          <div className="mt-8 space-y-3">
            {faqs.map((faq, index) => {
              const open = openFaq === index;
              return (
                <article key={faq.q} className="overflow-hidden rounded-2xl border border-emerald-300/26 bg-[linear-gradient(175deg,rgba(16,185,129,0.14),rgba(24,24,27,0.84)_40%,rgba(9,9,11,0.93)_100%)] shadow-[0_16px_30px_rgba(0,0,0,0.38),inset_0_1px_0_rgba(255,255,255,0.07)] backdrop-blur">
                  <button
                    className="flex w-full items-center justify-between px-5 py-4 text-left"
                    onClick={() => setOpenFaq(open ? -1 : index)}
                    type="button"
                  >
                    <span className="font-medium text-white">{faq.q}</span>
                    <span className="text-zinc-400">{open ? "−" : "+"}</span>
                  </button>
                  {open && <p className="border-t border-zinc-700/70 px-5 py-4 text-zinc-300">{faq.a}</p>}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 to-zinc-950" />
        <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-24">
          <SectionHeader eyebrow="A DECISÃO É SIMPLES" title="Continuar no improviso ou entrar com método" centered />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl border border-rose-400/28 bg-gradient-to-b from-rose-500/11 to-zinc-900/90 p-7 backdrop-blur">
              <h3 className="text-xl font-semibold text-white">Continuar como está</h3>
              <ul className="mt-4 space-y-3 text-zinc-300">
                <li>operar por sensação</li>
                <li>entrar sem contexto</li>
                <li>assumir risco sem estrutura</li>
                <li>ganhar e perder sem entender o motivo</li>
                <li>passar mais meses tentando juntar peças soltas</li>
              </ul>
            </article>
            <article className="rounded-2xl border border-emerald-400/40 bg-gradient-to-b from-emerald-500/14 to-zinc-900/90 p-7 shadow-[0_20px_44px_rgba(0,0,0,0.5)]">
              <h3 className="text-xl font-semibold text-white">Entrar no Workshop VCO</h3>
              <ul className="mt-4 space-y-3 text-zinc-200">
                <li>aprender a organizar a leitura</li>
                <li>entender melhor o papel do contexto</li>
                <li>ver o raciocínio ao vivo</li>
                <li>pensar risco antes da entrada</li>
                <li>dar um passo mais sério em direção à consistência</li>
              </ul>
            </article>
          </div>
          <p className="mt-8 text-center text-2xl font-semibold text-emerald-300">12x de R$ 4,90 ou R$ 49,00 à vista</p>
          <div className="mt-6 text-center">
            <button className="rounded-md bg-emerald-500 px-9 py-3.5 font-semibold text-zinc-950 shadow-[0_14px_32px_rgba(16,185,129,0.3)] transition hover:bg-emerald-400">
              Eu escolho entrar no Workshop VCO
            </button>
          </div>
        </div>
      </section>

      <footer className="border-t border-zinc-800 px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 text-sm text-zinc-400 md:flex-row md:items-center">
          <div>
            <p className="font-semibold text-zinc-100">Workshop VCO</p>
            <p>O mapa da consistência na prática</p>
          </div>
          <nav className="flex gap-6">
            <a className="hover:text-zinc-200" href="#">
              Termos
            </a>
            <a className="hover:text-zinc-200" href="#">
              Privacidade
            </a>
            <a className="hover:text-zinc-200" href="#">
              Suporte
            </a>
          </nav>
        </div>
      </footer>
    </main>
  );
}

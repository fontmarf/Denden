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
  { src: withBase("graphics/grafico-performance-aluno-ronaldo.svg"), alt: "Gráfico de performance do aluno Ronaldo" },
  { src: withBase("graphics/grafico-performance-aluno-jocinei.svg"), alt: "Gráfico de performance do aluno Jocinei" },
  { src: withBase("graphics/grafico-performance-aluno-Kelsanny.svg"), alt: "Gráfico de performance do aluno Kelsanny" },
  { src: withBase("graphics/grafico-performance-aluno-sandro.svg"), alt: "Gráfico de performance do aluno Sandro" },
  { src: withBase("graphics/grafico-performance-prova-social-aluna.svg"), alt: "Gráfico de prova social de aluna" },
];

function SectionHeader({ eyebrow, title, centered = false }) {
  return (
    <header className={centered ? "text-center" : ""}>
      <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-300/80">{eyebrow}</p>
      <h2 className="text-3xl font-semibold leading-[1.15] text-white md:text-4xl">{title}</h2>
    </header>
  );
}

export default function WorkshopVcoLandingPage() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="bg-zinc-950 text-zinc-100 antialiased">
      <section className="relative overflow-hidden border-b border-zinc-800/80">
        <div className="pointer-events-none absolute -left-44 top-[-140px] h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-36 bottom-[-120px] h-80 w-80 rounded-full bg-emerald-300/10 blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-zinc-950 to-zinc-950" />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
          <div>
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-300">WORKSHOP VCO</p>
            <h1 className="max-w-xl text-4xl font-semibold leading-[1.08] text-white md:text-[3.65rem]">
              O mapa da consistência na prática
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-zinc-200">
              Pare de operar no escuro. Aprenda a ler o mercado com mais clareza, contexto e controle de risco.
            </p>
            <p className="mt-4 max-w-2xl leading-relaxed text-zinc-300">
              Um workshop ao vivo para quem já cansou de promessas vazias, setups soltos e operações sem lógica.
              Entenda, na prática, como organizar a leitura do mercado e tomar decisões com mais critério.
            </p>
            <ul className="mt-9 grid gap-3 text-sm text-zinc-200 sm:grid-cols-2">
              <li className="rounded-md border border-zinc-700/80 bg-zinc-900/80 px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">Sábado, 02 de maio de 2026</li>
              <li className="rounded-md border border-zinc-700/80 bg-zinc-900/80 px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">Transmissão ao vivo em 4K</li>
            </ul>
            <p className="mt-8 text-2xl font-semibold tracking-tight text-emerald-300">12x de R$ 4,90 ou R$ 49,00 à vista</p>
            <button className="mt-6 rounded-md bg-emerald-500 px-8 py-3.5 font-semibold text-zinc-950 shadow-[0_8px_24px_rgba(16,185,129,0.25)] transition hover:bg-emerald-400">
              Quero garantir minha vaga
            </button>
            <ul className="mt-9 grid gap-3 text-sm text-zinc-300 sm:grid-cols-3">
              <li className="rounded border border-zinc-800/80 px-3 py-2">Mais de 20 anos de mercado</li>
              <li className="rounded border border-zinc-800/80 px-3 py-2">Mais de 5 mil alunos</li>
              <li className="rounded border border-zinc-800/80 px-3 py-2">Método com foco em leitura, contexto e risco</li>
            </ul>
          </div>

          <div className="relative hidden overflow-hidden rounded-2xl border border-zinc-700/70 bg-zinc-900/60 p-2 shadow-[0_20px_60px_rgba(0,0,0,0.45)] md:block">
            <img src={withBase("images/denden-portrait-03.png")} alt="Felipe Denden em ambiente profissional" className="h-full w-full object-cover" />
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
          <li className="rounded-lg border border-zinc-800 bg-zinc-900/70 p-4">já operou mini índice, dólar, ações ou opções e sente que falta consistência</li>
          <li className="rounded-lg border border-zinc-800 bg-zinc-900/70 p-4">já fez cursos, viu conteúdo, testou setups, mas continua sem leitura clara</li>
          <li className="rounded-lg border border-zinc-800 bg-zinc-900/70 p-4">quer parar de depender de achismo e começar a operar com mais estrutura</li>
          <li className="rounded-lg border border-zinc-800 bg-zinc-900/70 p-4">entendeu que sobreviver no mercado exige muito mais do que acertar entrada</li>
        </ul>
      </section>

      <section className="border-y border-zinc-800/80 bg-zinc-900/45">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <SectionHeader eyebrow="O QUE É" title="O Workshop VCO" />
          <p className="mt-6 max-w-4xl text-zinc-300">
            O Workshop VCO é uma imersão ao vivo desenhada para mostrar, de forma objetiva e aplicada, como o mercado
            deve ser lido por quem busca consistência de verdade. Aqui, o foco não é vender fantasia. O foco é ensinar
            como enxergar contexto, fluxo, book e risco de forma integrada.
          </p>
          <ul className="mt-8 grid gap-3 text-zinc-200 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "leitura de cenário",
              "organização da tela",
              "interpretação de intenção",
              "decisão com base em contexto",
              "controle de risco antes da entrada",
            ].map((item) => (
              <li key={item} className="rounded-lg border border-zinc-700/70 bg-zinc-900 p-4">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-zinc-400">
            É isso que separa quem apenas clica de quem começa a construir uma lógica operacional.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <SectionHeader eyebrow="O QUE VOCÊ VAI APRENDER" title="Os pilares da leitura operacional" />
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {learnCards.map((card) => (
            <article key={card.title} className="rounded-xl border border-zinc-800 bg-zinc-900/80 p-6">
              <h3 className="text-lg font-semibold text-white">{card.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-300">{card.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-zinc-800/80">
        <img src={withBase("images/denden-boxing-landscape-02.png")} alt="Leitura de mercado em ambiente profissional" className="absolute inset-0 h-full w-full object-cover opacity-10" />
        <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-20">
          <SectionHeader eyebrow="POR QUE AO VIVO" title="Muda o jogo" />
          <p className="mt-6 max-w-4xl text-zinc-300">
            Vídeo gravado mostra o que já aconteceu. Ao vivo, você acompanha o que realmente importa: o raciocínio.
            Você vê como a leitura é construída, como o cenário muda, como o risco é avaliado e como a decisão precisa
            se adaptar quando o mercado não entrega o que parecia prometer segundos antes.
          </p>
          <ul className="mt-8 grid gap-3 text-zinc-200 md:grid-cols-2">
            <li className="rounded-lg border border-zinc-800 bg-zinc-900/75 p-4">como o mercado é lido em tempo real</li>
            <li className="rounded-lg border border-zinc-800 bg-zinc-900/75 p-4">como a análise muda quando o cenário muda</li>
            <li className="rounded-lg border border-zinc-800 bg-zinc-900/75 p-4">como risco e contexto andam juntos</li>
            <li className="rounded-lg border border-zinc-800 bg-zinc-900/75 p-4">como um operador experiente pensa antes de clicar</li>
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-[1.1fr_1fr] md:items-center">
          <div>
            <SectionHeader eyebrow="QUEM CONDUZ" title="Felipe Denden" />
            <p className="mt-6 text-zinc-300">
              Felipe Denden atua há mais de duas décadas no mercado financeiro e construiu sua reputação em torno de
              um ponto que hoje está cada vez mais raro: seriedade. Seu trabalho não gira em torno de promessas
              fáceis. Gira em torno de leitura, processo, gestão de risco e prática real.
            </p>
            <ul className="mt-6 space-y-2 text-zinc-200">
              <li>Mais de 20 anos de mercado</li>
              <li>Mais de 180 DARFs positivas consecutivas</li>
              <li>Mais de 5 mil alunos impactados</li>
            </ul>
            <p className="mt-5 text-sm text-zinc-400">
              O ponto central aqui não é impressionar com números. É mostrar que existe um histórico, um método e uma
              lógica por trás daquilo que será ensinado.
            </p>
          </div>
          <div className="space-y-4">
            <img src={withBase("images/denden-portrait-02.png")} alt="Retrato de Felipe Denden" className="h-72 w-full rounded-xl border border-zinc-800 object-cover" />
          </div>
        </div>
      </section>

      <section className="border-y border-zinc-800/80 bg-zinc-900/40">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-16 md:grid-cols-2 md:py-20">
          <article className="rounded-xl border border-zinc-800 bg-zinc-900/80 p-6">
            <h3 className="text-xl font-semibold text-white">Para quem é</h3>
            <ul className="mt-4 space-y-3 text-zinc-300">
              <li>para quem já teve contato com o mercado e quer finalmente entender melhor o que está fazendo</li>
              <li>para quem já se frustrou com cursos superficiais, promessas irreais e abordagens que não se sustentam na prática</li>
              <li>para quem valoriza clareza, estrutura, processo e leitura</li>
              <li>para quem deseja evoluir com mais seriedade</li>
            </ul>
          </article>
          <article className="rounded-xl border border-zinc-800 bg-zinc-900/80 p-6">
            <h3 className="text-xl font-semibold text-white">Para quem não é</h3>
            <ul className="mt-4 space-y-3 text-zinc-300">
              <li>não é para quem procura atalho</li>
              <li>não é para quem quer enriquecimento rápido</li>
              <li>não é para quem espera sinal pronto sem entender racional</li>
              <li>não é para quem não quer estudar, observar e amadurecer a própria leitura</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <SectionHeader eyebrow="O QUE O MERCADO ENSINA TARDE DEMAIS" title="Consistência não vem de pressa" />
        <p className="mt-6 max-w-3xl text-zinc-300">
          O mercado não recompensa pressa. O mercado recompensa leitura, controle e consistência.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {proofQuotes.map((quote) => (
            <article key={quote} className="rounded-xl border border-zinc-800 bg-zinc-900 p-5">
              <p className="text-sm leading-relaxed text-zinc-300">“{quote}”</p>
            </article>
          ))}
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {proofCharts.map((chart) => (
            <img key={chart.src} src={chart.src} alt={chart.alt} className="rounded-lg border border-zinc-800 bg-zinc-900 p-3" />
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-zinc-700/80 bg-zinc-900">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-300/60 to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.14),transparent_48%)]" />
        <div className="relative mx-auto max-w-4xl px-6 py-16 text-center md:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-300/80">GARANTA SUA VAGA</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-5xl">Workshop VCO</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-zinc-300">
            Um encontro ao vivo para quem quer ganhar clareza operacional e começar a enxergar o mercado com mais
            método.
          </p>
          <ul className="mx-auto mt-9 grid max-w-2xl gap-3 text-left text-zinc-200 sm:grid-cols-2">
            <li className="rounded-lg border border-zinc-700/80 bg-zinc-950/70 p-4">acesso ao workshop ao vivo</li>
            <li className="rounded-lg border border-zinc-700/80 bg-zinc-950/70 p-4">acesso à gravação</li>
            <li className="rounded-lg border border-zinc-700/80 bg-zinc-950/70 p-4">sessão de dúvidas</li>
            <li className="rounded-lg border border-zinc-700/80 bg-zinc-950/70 p-4">garantia de 7 dias</li>
          </ul>
          <div className="mx-auto mt-10 max-w-md rounded-xl border border-emerald-300/35 bg-zinc-950/80 px-6 py-6 shadow-[0_14px_40px_rgba(0,0,0,0.45)]">
            <p className="text-4xl font-semibold tracking-tight text-emerald-300">12x de R$ 4,90</p>
            <p className="mt-1 text-zinc-300">ou R$ 49,00 à vista</p>
          </div>
          <button className="mt-8 rounded-md bg-emerald-500 px-10 py-3.5 font-semibold text-zinc-950 shadow-[0_12px_28px_rgba(16,185,129,0.3)] transition hover:bg-emerald-400">
            Garantir minha vaga agora
          </button>
          <ul className="mt-7 space-y-1 text-sm text-zinc-400">
            <li>Pagamento seguro</li>
            <li>Checkout criptografado</li>
            <li>Garantia incondicional de 7 dias</li>
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 text-center md:py-20">
        <SectionHeader eyebrow="AINDA EM DÚVIDA?" title="Será que isso serve para mim?" centered />
        <p className="mx-auto mt-6 max-w-4xl text-zinc-300">
          Se a dúvida é essa, a resposta mais honesta é: serve principalmente para quem já percebeu que continuar
          fazendo do mesmo jeito não vai levar a um resultado diferente. Não importa se houve experiência com mini
          índice, dólar, ações ou opções. Não importa se já houve curso anterior. Não importa se existiu frustração. O
          que importa é estar disposto a substituir ruído por clareza e improviso por método.
        </p>
        <p className="mx-auto mt-4 max-w-3xl text-sm text-zinc-400">
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
                <article key={faq.q} className="overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900">
                  <button
                    className="flex w-full items-center justify-between px-5 py-4 text-left"
                    onClick={() => setOpenFaq(open ? -1 : index)}
                    type="button"
                  >
                    <span className="font-medium text-white">{faq.q}</span>
                    <span className="text-zinc-400">{open ? "−" : "+"}</span>
                  </button>
                  {open && <p className="border-t border-zinc-800 px-5 py-4 text-zinc-300">{faq.a}</p>}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <img src={withBase("images/denden-boxing-landscape-04.png")} alt="Imagem decorativa de fechamento da página" className="absolute inset-0 h-full w-full object-cover opacity-10" />
        <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-20">
          <SectionHeader eyebrow="A DECISÃO É SIMPLES" title="Continuar no improviso ou entrar com método" centered />
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <article className="rounded-xl border border-zinc-800 bg-zinc-900/80 p-6">
              <h3 className="text-xl font-semibold text-white">Continuar como está</h3>
              <ul className="mt-4 space-y-3 text-zinc-300">
                <li>operar por sensação</li>
                <li>entrar sem contexto</li>
                <li>assumir risco sem estrutura</li>
                <li>ganhar e perder sem entender o motivo</li>
                <li>passar mais meses tentando juntar peças soltas</li>
              </ul>
            </article>
            <article className="rounded-xl border border-emerald-400/35 bg-zinc-900/80 p-6">
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
            <button className="rounded-md bg-emerald-500 px-8 py-3 font-semibold text-zinc-950 transition hover:bg-emerald-400">
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
            <a className="hover:text-zinc-200" href="#">Termos</a>
            <a className="hover:text-zinc-200" href="#">Privacidade</a>
            <a className="hover:text-zinc-200" href="#">Suporte</a>
          </nav>
        </div>
      </footer>
    </main>
  );
}

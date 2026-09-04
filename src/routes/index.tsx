import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  BookOpen,
  GraduationCap,
  Headphones,
  Instagram,
  MessageCircle,
  Music2,
  Sparkles,
} from "lucide-react";

const links = {
  instagram: "https://www.instagram.com/teach.mari/",
  flexge: "https://teachers.flexge.com/teacher-mari",
  placement: "https://student.flexge.com/v2/placement/teachermari",
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Teacher Mari | Inglês de verdade, sem decoreba" },
      {
        name: "description",
        content:
          "Aulas particulares online com a Teacher Mari. Inglês prático, speaking, música, expressões do dia a dia e zero julgamento.",
      },
      { property: "og:title", content: "Teacher Mari | Fluência não é dom. É método." },
      {
        property: "og:description",
        content:
          "Inglês prático, funcional e com personalidade. Aulas online, speaking e prática real — sem fórmula mágica e sem decoreba.",
      },
    ],
  }),
  component: Index,
});

const actionLinks = [
  {
    eyebrow: "Vagas abertas",
    title: "Quero começar minhas aulas",
    description: "Fale comigo pelo Instagram e descubra o formato ideal para você.",
    href: links.instagram,
    icon: MessageCircle,
    featured: true,
  },
  {
    eyebrow: "Grátis",
    title: "Descubra seu nível de inglês",
    description: "Faça o teste de nivelamento e descubra de onde começar.",
    href: links.placement,
    icon: GraduationCap,
  },
  {
    eyebrow: "Aulas online",
    title: "Como funcionam as aulas",
    description: "Conheça minha metodologia, a plataforma e a experiência de estudo.",
    href: links.flexge,
    icon: BookOpen,
  },
];

const pillars = [
  {
    icon: MessageCircle,
    title: "Speaking de verdade",
    text: "Para quem entende inglês, mas trava quando precisa falar.",
  },
  {
    icon: Headphones,
    title: "Música + cotidiano",
    text: "Expressões, gírias, cultura e o inglês que as pessoas realmente usam.",
  },
  {
    icon: Sparkles,
    title: "Zero julgamento",
    text: "Aula leve, prática e personalizada. Errar faz parte do processo.",
  },
];

function Index() {
  return (
    <main className="bio-shell min-h-screen bg-background text-foreground">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=UnifrakturCook:wght@700&display=swap"
      />

      <div className="noise" aria-hidden />
      <div className="wine-glow wine-glow-one" aria-hidden />
      <div className="wine-glow wine-glow-two" aria-hidden />

      <div className="relative mx-auto flex w-full max-w-[620px] flex-col px-5 pb-10 pt-8 sm:px-7 sm:pt-10">
        <header className="text-center">
          <div className="relative mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-full border border-wine/60 bg-card shadow-gothic sm:h-28 sm:w-28">
            <span className="gothic text-[2.15rem] leading-none text-cream sm:text-[2.55rem]">TM</span>
            <span
              className="absolute -bottom-1 -right-1 flex h-8 w-8 items-center justify-center rounded-full border border-wine/70 bg-wine text-sm shadow-lg"
              aria-hidden
            >
              🐈‍⬛
            </span>
          </div>

          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-wine-light">
            Teacher Mari · @teach.mari
          </p>

          <h1 className="mt-3 text-balance text-[2.4rem] font-bold leading-[0.98] tracking-[-0.055em] text-cream sm:text-[3.15rem]">
            Fluência não é dom.
            <span className="block text-wine-light">É método.</span>
          </h1>

          <p className="mx-auto mt-4 max-w-lg text-pretty text-[15px] leading-6 text-muted-foreground sm:text-base">
            Inglês prático, funcional e com personalidade — para você destravar a fala sem decoreba, sem fórmula mágica e sem medo de errar.
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
            <span className="bio-pill">Aulas online</span>
            <span className="bio-pill">Speaking</span>
            <span className="bio-pill">Dark vibes included</span>
          </div>

          <a
            href={links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-cream/80 transition hover:text-wine-light"
          >
            <Instagram className="h-4 w-4" />
            Instagram @teach.mari
          </a>
        </header>

        <section className="mt-8" aria-label="Links principais">
          <div className="flex flex-col gap-3">
            {actionLinks.map(({ eyebrow, title, description, href, icon: Icon, featured }) => (
              <a
                key={title}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`link-card group ${featured ? "link-card-featured" : ""}`}
              >
                <span className="link-icon">
                  <Icon className="h-5 w-5" />
                </span>

                <span className="min-w-0 flex-1 text-left">
                  <span className="mb-1 block text-[10px] font-bold uppercase tracking-[0.23em] text-wine-light">
                    {eyebrow}
                  </span>
                  <span className="block text-[15px] font-semibold leading-tight text-cream sm:text-base">
                    {title}
                  </span>
                  <span className="mt-1 block text-xs leading-5 text-muted-foreground sm:text-[13px]">
                    {description}
                  </span>
                </span>

                <ArrowUpRight className="h-5 w-5 shrink-0 text-cream/45 transition duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-wine-light" />
              </a>
            ))}
          </div>
        </section>

        <section className="mt-9 rounded-[1.6rem] border border-border/80 bg-card/70 p-5 shadow-gothic backdrop-blur-sm sm:p-6">
          <div className="mb-5 flex items-center gap-3">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-wine/55" />
            <p className="gothic text-xl text-cream">English, but make it real.</p>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-wine/55" />
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {pillars.map(({ icon: Icon, title, text }) => (
              <div key={title} className="pillar-card">
                <Icon className="mb-3 h-5 w-5 text-wine-light" />
                <h2 className="text-sm font-semibold text-cream">{title}</h2>
                <p className="mt-1.5 text-xs leading-5 text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-7 overflow-hidden rounded-[1.6rem] border border-wine/30 bg-gradient-to-br from-wine/20 via-card to-card p-5 sm:p-6">
          <div className="flex items-center gap-2 text-wine-light">
            <Music2 className="h-4 w-4" />
            <span className="text-[10px] font-bold uppercase tracking-[0.24em]">O que dizem meus alunos</span>
          </div>

          <blockquote className="mt-4 text-pretty text-lg font-medium leading-7 text-cream sm:text-xl sm:leading-8">
            “A melhor teacher que eu já tive! Ela normalizou o inglês no meu dia a dia e me ajudou demais a conseguir o emprego que eu queria no exterior.”
          </blockquote>
          <p className="mt-3 text-sm text-muted-foreground">— Cathiussa</p>
        </section>

        <section className="mt-7 rounded-[1.6rem] border border-border/80 bg-card/55 p-5 sm:p-6">
          <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-wine-light">Hi! It&apos;s your Teacher Mari 🖤</p>
          <h2 className="mt-2 text-xl font-semibold tracking-tight text-cream">Inglês vivo, com prática de verdade.</h2>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            Sou Marina Zanini, professora de inglês de Belo Horizonte, formada em Letras — Inglês e Português — pela UEMG e pós-graduanda em Metodologia do Ensino da Língua Inglesa. Dou aulas particulares online e ensino do jeito que acredito: com música, conversa, rotina e curiosidade.
          </p>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            Dark vibes, tattoos &amp; sarcasm fazem parte do pacote. O inglês de verdade também.
          </p>
        </section>

        <section className="mt-7 text-center">
          <p className="gothic text-[1.65rem] leading-tight text-cream sm:text-[1.9rem]">
            Fale inglês, mesmo se sua voz tremer.
          </p>
          <a
            href={links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="primary-cta mt-5"
          >
            <Instagram className="h-4 w-4" />
            Me chama no direct
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </section>

        <footer className="mt-10 border-t border-border/70 pt-6 text-center">
          <p className="text-[11px] uppercase tracking-[0.18em] text-cream/45">
            Teacher Mari · Belo Horizonte · aulas online
          </p>
          <p className="mt-2 text-xs text-cream/30">Dark vibes + English practice = perfect combo. 🖤</p>
        </footer>
      </div>
    </main>
  );
}

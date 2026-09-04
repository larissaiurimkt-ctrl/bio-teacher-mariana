import { createFileRoute } from "@tanstack/react-router";
import {
  BookOpen,
  GraduationCap,
  Headphones,
  Instagram,
  MessageCircle,
  Music2,
  Plane,
  Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Teacher Mari | Fluência não é dom. É método." },
      {
        name: "description",
        content:
          "Aulas particulares online com a Teacher Mari. Inglês prático, speaking, música, expressões do dia a dia e zero julgamento.",
      },
      {
        property: "og:title",
        content: "Teacher Mari | Inglês de verdade, sem decoreba",
      },
      {
        property: "og:description",
        content:
          "Inglês prático, funcional e com personalidade. Aulas online, speaking e prática real — sem fórmula mágica e sem decoreba.",
      },
    ],
  }),
  component: Index,
});

const whatsappMessage = encodeURIComponent(
  "Oi, Teacher Mari! Vim pelo seu link da bio e quero saber mais sobre as suas aulas de inglês. Pode me contar como funcionam e me passar as opções de horários? 🖤",
);

const profile = {
  instagram: "https://www.instagram.com/teach.mari/",
  flexge: "https://teachers.flexge.com/teacher-mari",
  placement: "https://student.flexge.com/v2/placement/teachermari",
  whatsapp: `https://wa.me/553191569925?text=${whatsappMessage}`,
};

type LinkItem = {
  label: string;
  description?: string;
  href?: string;
  icon: React.ReactNode;
  disabled?: boolean;
};

type Section = {
  title: string;
  links: LinkItem[];
};

const sections: Section[] = [
  {
    title: "Comece por aqui",
    links: [
      {
        label: "Quero começar minhas aulas",
        description:
          "Vagas abertas para aulas particulares online. Me chama no WhatsApp e conversamos sobre o melhor formato para você.",
        href: profile.whatsapp,
        icon: <MessageCircle className="h-5 w-5" />,
      },
    ],
  },
  {
    title: "Descubra seu nível",
    links: [
      {
        label: "Teste de nivelamento gratuito",
        description:
          "Faça o teste online e descubra seu nível antes de começar. É rápido, gratuito e baseado no CEFR.",
        href: profile.placement,
        icon: <GraduationCap className="h-5 w-5" />,
      },
    ],
  },
  {
    title: "Como funcionam as aulas",
    links: [
      {
        label: "Aulas online + plataforma de estudo",
        description:
          "Aulas personalizadas, individuais ou em grupos pequenos, com prática real e apoio da plataforma Flexge.",
        href: profile.flexge,
        icon: <BookOpen className="h-5 w-5" />,
      },
    ],
  },
  {
    title: "Inglês do mundo real",
    links: [
      {
        label: "Speaking, música e cotidiano",
        description:
          "Expressões, gírias, pronúncia e conversação para quem entende inglês, mas ainda trava na hora de falar.",
        icon: <Headphones className="h-5 w-5" />,
        disabled: true,
      },
    ],
  },
];

const areas = [
  { sigla: "SPK", label: "Speaking", icon: MessageCircle, href: profile.instagram },
  { sigla: "MUS", label: "Inglês com música", icon: Music2, href: profile.instagram },
  { sigla: "DAY", label: "Inglês do dia a dia", icon: Sparkles, href: profile.instagram },
  { sigla: "A1", label: "Iniciantes", icon: GraduationCap, href: profile.flexge },
  { sigla: "TRV", label: "Inglês para viagens", icon: Plane, href: profile.instagram },
];

function Index() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=UnifrakturCook:wght@700&family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600&display=swap"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.09]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(201,135,150,.9) 0.8px, transparent 0.8px)",
          backgroundSize: "4px 4px",
        }}
      />

      <div className="relative h-56 w-full overflow-hidden sm:h-72 md:h-80">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(122,27,45,.72),transparent_35%),radial-gradient(circle_at_72%_35%,rgba(77,19,32,.7),transparent_30%),linear-gradient(135deg,#08070a_0%,#190a0f_45%,#09080b_100%)]" />
        <div className="absolute inset-0 opacity-30 [background-image:repeating-linear-gradient(125deg,transparent_0,transparent_18px,rgba(255,255,255,.04)_19px,transparent_20px)]" />
        <div className="absolute left-[12%] top-10 text-6xl text-accent/20 sm:text-8xl">✦</div>
        <div className="absolute right-[10%] top-16 font-gothic text-6xl text-accent/15 sm:text-8xl">M</div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] uppercase tracking-[0.38em] text-white/45">
          dark vibes · tattoos · sarcasm · english
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      </div>

      <div className="relative mx-auto flex w-full max-w-xl flex-col px-6 pb-16">
        <header className="flex flex-col items-center text-center">
          <div
            className="relative -mt-20 mb-6 flex h-36 w-36 items-center justify-center overflow-hidden rounded-full bg-card ring-4 ring-background sm:h-40 sm:w-40"
            style={{
              boxShadow:
                "0 0 0 1px rgba(201,135,150,.35), 0 0 0 6px rgba(107,23,37,.28), 0 22px 55px -12px rgba(107,23,37,.65)",
            }}
          >
            <div className="absolute inset-2 rounded-full border border-accent/25" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(107,23,37,.45),transparent_55%)]" />
            <span className="relative font-gothic text-5xl text-accent sm:text-6xl">TM</span>
          </div>

          <p className="font-gothic text-2xl leading-none text-accent sm:text-3xl">
            Teacher Mari
          </p>
          <p className="mt-2 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            Professora de Inglês · Aulas particulares online
          </p>

          <h1 className="mt-4 flex min-h-20 items-center justify-center px-2 font-serif text-3xl italic leading-tight text-foreground sm:min-h-24 sm:text-4xl">
            Fluência não é dom. É método.
          </h1>

          <div className="mt-2 flex w-full max-w-xs items-center gap-3" aria-hidden>
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-accent/60" />
            <span className="text-lg text-accent">✦</span>
            <span className="font-gothic text-2xl text-accent/80">M</span>
            <span className="text-lg text-accent">✦</span>
            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-accent/60" />
          </div>

          <p className="mt-5 max-w-md text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
            Inglês prático, funcional e sem decoreba. Aulas online para quem quer
            destravar a fala, entender o inglês que as pessoas realmente usam e
            aprender com prática, música, expressões e zero julgamento.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-[10px] uppercase tracking-widest">
            <span className="rounded-full border border-accent/45 bg-secondary px-3 py-1 text-accent">
              Speaking
            </span>
            <span className="rounded-full border border-accent/45 bg-secondary px-3 py-1 text-accent">
              Música + cotidiano
            </span>
            <span className="rounded-full border border-primary/50 bg-muted px-3 py-1 text-primary">
              Online · Belo Horizonte/MG
            </span>
          </div>

          <div className="mt-4 flex items-center justify-center gap-3 text-xs">
            <a
              href={profile.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da Teacher Mari"
              className="inline-flex items-center gap-1.5 rounded-full border border-primary/60 bg-card px-3 py-1 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <Instagram className="h-3.5 w-3.5" /> @teach.mari
            </a>
            <a
              href={profile.flexge}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Página da Teacher Mari na Flexge"
              className="inline-flex items-center gap-1.5 rounded-full border border-primary/60 bg-card px-3 py-1 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <BookOpen className="h-3.5 w-3.5" /> Aulas
            </a>
          </div>
        </header>

        <div className="mt-10 flex flex-col gap-10">
          {sections.map((section) => (
            <section key={section.title}>
              <div className="mb-4 flex items-center gap-4">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-neon-deep/40" />
                <h2 className="font-serif text-xl italic text-neon-deep sm:text-2xl">
                  {section.title}
                </h2>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-neon-deep/40" />
              </div>
              <nav className="flex flex-col gap-3">
                {section.links.map(({ label, description, href, icon, disabled }, idx) => {
                  const alternate = idx % 2 === 1;
                  const cardBg = alternate ? "bg-primary" : "bg-accent";
                  const cardContent = (
                    <>
                      <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-white/10 text-white ring-1 ring-white/25">
                        {icon}
                      </span>
                      <span className="flex flex-1 flex-col text-left">
                        <span className="font-medium leading-tight text-white">{label}</span>
                        {description && (
                          <span className="mt-0.5 text-xs leading-relaxed text-white/75">
                            {description}
                          </span>
                        )}
                      </span>
                      {!disabled && (
                        <span className="font-serif text-xl text-white/70 transition-transform group-hover:translate-x-0.5 group-hover:text-white">
                          →
                        </span>
                      )}
                    </>
                  );

                  if (disabled) {
                    return (
                      <div
                        key={label}
                        className={`relative flex items-center gap-4 rounded-xl ${cardBg} px-5 py-4 text-white shadow-paper`}
                      >
                        {cardContent}
                      </div>
                    );
                  }

                  return (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group relative flex items-center gap-4 rounded-xl ${cardBg} px-5 py-4 text-white shadow-paper transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-14px_var(--neon-glow)]`}
                    >
                      {cardContent}
                    </a>
                  );
                })}
              </nav>
            </section>
          ))}
        </div>

        <section className="mt-14">
          <div className="mb-4 flex items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-neon-deep/40" />
            <h2 className="font-serif text-xl italic text-neon-deep sm:text-2xl">
              O inglês que a gente pratica aqui
            </h2>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-neon-deep/40" />
          </div>
          <p className="mb-6 text-center text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Prática real, personalidade e zero fórmula mágica.
          </p>

          <div className="relative -mx-6 overflow-x-auto overflow-y-hidden sm:overflow-hidden [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-16 bg-gradient-to-r from-background to-transparent sm:block" />
            <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-16 bg-gradient-to-l from-background to-transparent sm:block" />
            <div className="marquee-track flex w-max snap-x snap-mandatory gap-3 px-6 py-2 sm:px-0">
              {[...areas, ...areas].map((area, i) => {
                const Icon = area.icon;
                return (
                  <a
                    key={`${area.sigla}-${i}`}
                    href={area.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="snap-start"
                  >
                    <figure className="relative flex h-48 w-40 flex-shrink-0 flex-col items-center justify-center overflow-hidden rounded-xl border border-border bg-secondary shadow-paper transition-transform duration-200 hover:-translate-y-0.5 sm:h-52 sm:w-44">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(201,135,150,.16),transparent_40%),linear-gradient(150deg,rgba(107,23,37,.92),rgba(20,10,14,.98))]" />
                      <div className="absolute inset-3 rounded-lg border border-white/10" />
                      <Icon className="relative mb-3 h-7 w-7 text-accent" />
                      <span className="relative font-gothic text-3xl text-white sm:text-4xl">
                        {area.sigla}
                      </span>
                      <figcaption className="relative mt-3 px-3 text-center font-serif text-[13px] italic leading-snug text-white/85">
                        {area.label}
                      </figcaption>
                    </figure>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        <section className="mt-14 rounded-2xl border border-border bg-card/70 px-6 py-7 text-center shadow-paper">
          <p className="font-gothic text-xl text-accent">Teacher Mari</p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Marina Zanini · formada em Letras — Inglês e Português — pela UEMG e
            pós-graduanda em Metodologia do Ensino da Língua Inglesa. Professora da
            rede estadual e de aulas particulares online.
          </p>
          <p className="mt-4 font-serif text-lg italic text-foreground">
            “Dark vibes, tattoos & sarcasm.”
          </p>
        </section>

        <footer className="mt-14 text-center">
          <p className="font-serif text-lg italic text-foreground sm:text-xl">
            “Fale inglês, mesmo se sua voz tremer.”
          </p>
          <p className="mt-4 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            © 2026 Teacher Mari · Todos os direitos reservados
          </p>
          <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            Belo Horizonte/MG · @teach.mari
          </p>
        </footer>
      </div>

      <a
        href={profile.instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com a Teacher Mari no Instagram"
        className="social-pulse fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_10px_30px_-8px_rgba(107,23,37,.8)] transition-transform hover:scale-110"
      >
        <Instagram className="h-7 w-7" />
      </a>
    </main>
  );
}

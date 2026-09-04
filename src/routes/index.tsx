import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Instagram, Globe } from "lucide-react";
const marianaPhoto = "/mariana-junqueira.png";
const consultorioPhoto = "/fotos-reais/capa-consultorio-rosa.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dra. Mariana Junqueira Ramos | Você merece sorrir sem medo" },
      {
        name: "description",
        content:
          "Cirurgiã-dentista em Belo Horizonte, dedicada a implantes, periodontia e estética facial.",
      },
      { property: "og:title", content: "Dra. Mariana Junqueira Ramos | Você merece sorrir sem medo" },
      {
        property: "og:description",
        content:
          "Cirurgiã-dentista em Belo Horizonte, dedicada a implantes, periodontia e estética facial.",
      },
      { property: "og:image", content: marianaPhoto },
    ],
  }),
  component: Index,
});

const profile = {
  whatsappNumber: "5531992223009",
  instagram: "https://wa.me/5531992223009",
  whatsapp: "https://wa.me/5531992223009",
  maps: "https://wa.me/5531992223009",
};

function whatsappWith(message: string): string {
  return `https://wa.me/${profile.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

type LinkItem = {
  label: string;
  description?: string;
  href: string;
  icon: React.ReactNode;
};

const TextBadge = ({ children }: { children: React.ReactNode }) => (
  <span className="font-serif text-base font-semibold leading-none tracking-tight">
    {children}
  </span>
);

type Section = {
  title: string;
  links: LinkItem[];
};

const sections: Section[] = [
  {
    title: "Agende sua consulta",
    links: [
      {
        label: "Agendamento particular",
        description:
          "Marque sua avaliação direto no WhatsApp. Atendimento humanizado, com escuta e planejamento personalizado do seu tratamento.",
        href: profile.whatsapp,
        icon: <TextBadge>AG</TextBadge>,
      },
    ],
  },
  {
    title: "Tratamentos da Dra. Mariana",
    links: [
      {
        label: "Implantes dentários",
        description:
          "Reabilitação do seu sorriso com implantes: recupere a função e a confiança de mastigar e sorrir sem medo.",
        href: profile.whatsapp,
        icon: <TextBadge>IMP</TextBadge>,
      },
    ],
  },
  {
    title: "Saúde bucal",
    links: [
      {
        label: "Periodontia",
        description:
          "Tratamento da gengiva e das estruturas de suporte dos dentes, com cuidado para prevenir e reverter a doença periodontal.",
        href: profile.whatsapp,
        icon: <TextBadge>PER</TextBadge>,
      },
    ],
  },
  {
    title: "Estética facial",
    links: [
      {
        label: "Toxina botulínica (Botox)",
        description:
          "Aplicação com finalidade estética e funcional, com resultado natural e acompanhamento próximo de cada etapa.",
        href: profile.whatsapp,
        icon: <TextBadge>BTX</TextBadge>,
      },
    ],
  },
  {
    title: "Onde te atendo",
    links: [
      {
        label: "Consultório · Belo Horizonte/MG",
        description:
          "Avenida Raja Gabáglia, 2000 · Torre 2 · Sala 701 · Edifício Parque Avenida · Belo Horizonte/MG.",
        href: profile.whatsapp,
        icon: <MapPin className="h-5 w-5" />,
      },
    ],
  },
];

const areas: { sigla: string; label: string; image: string; href: string }[] = [
  { sigla: "IMP", label: "Implantes", image: "/fotos-reais/implantes-real.jpg", href: profile.whatsapp },
  { sigla: "PER", label: "Periodontia", image: "/fotos-reais/periodontia-estetica.jpg", href: profile.whatsapp },
  { sigla: "BTX", label: "Botox", image: "/fotos-reais/botox-natural.jpg", href: profile.whatsapp },
  { sigla: "EST", label: "Estética facial", image: "/fotos-reais/estetica-facial.jpg", href: profile.whatsapp },
  { sigla: "CL", label: "Clareamento", image: "/fotos-reais/clareamento-sorriso.jpg", href: profile.whatsapp },
];


function Index() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600&display=swap"
      />
      <style>{`
        @keyframes tooth-dance {
          0%, 100% { transform: translateY(0) rotate(0deg) scale(1); }
          12% { transform: translateY(-5px) rotate(-8deg) scale(1.06); }
          24% { transform: translateY(0) rotate(7deg) scale(0.98); }
          36% { transform: translateY(-3px) rotate(-5deg) scale(1.04); }
          50% { transform: translateY(0) rotate(0deg) scale(1); }
        }
        @keyframes sparkle-pop {
          0%, 55%, 100% { opacity: 0.35; transform: scale(0.75) rotate(0deg); }
          68% { opacity: 1; transform: scale(1.25) rotate(20deg); }
          82% { opacity: 0.65; transform: scale(0.95) rotate(-10deg); }
        }
        .tooth-dance {
          transform-box: fill-box;
          transform-origin: center;
          animation: tooth-dance 2.8s ease-in-out infinite;
        }
        .sparkle-pop {
          transform-box: fill-box;
          transform-origin: center;
          animation: sparkle-pop 2.8s ease-in-out infinite;
        }
        .sparkle-pop path:nth-child(2) { animation-delay: 0.18s; }
        @media (prefers-reduced-motion: reduce) {
          .tooth-dance, .sparkle-pop { animation: none; }
        }
      `}</style>

      {/* paper texture / subtle grain */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(#B85C86 1px, transparent 1px)",
          backgroundSize: "3px 3px",
        }}
      />

      {/* Full-width cover image (spans the viewport) */}
      <div className="relative h-56 w-full overflow-hidden sm:h-72 md:h-80">
        <img
          src={consultorioPhoto}
          alt="Consultório da Dra. Mariana Junqueira Ramos em Belo Horizonte."
          className="h-full w-full object-cover"
          style={{ objectPosition: "50% 50%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-background" />
      </div>

      <div className="relative mx-auto flex w-full max-w-xl flex-col px-6 pb-16">
        {/* Header */}
        <header className="flex flex-col items-center text-center">
          <div
            className="relative -mt-20 mb-6 h-36 w-36 overflow-hidden rounded-full ring-4 ring-background sm:h-40 sm:w-40"
            style={{
              boxShadow:
                "0 0 0 1px rgba(184,92,134,0.30), 0 0 0 6px rgba(29,78,76,0.18), 0 22px 55px -12px rgba(184,92,134,0.35), 0 10px 35px -8px rgba(29,78,76,0.35)",
            }}
          >
            <img
              src={marianaPhoto}
              alt="Dra. Mariana Junqueira Ramos."
              className="h-full w-full object-cover"
              style={{ objectPosition: "30% 25%" }}
            />
          </div>


          <p className="text-xs uppercase tracking-[0.25em] text-accent">
            Dra. Mariana Junqueira Ramos
          </p>
          <p className="mt-1 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            Implantes · Periodontia · Estética facial
          </p>
          <h1 className="mt-3 flex h-20 items-center justify-center px-2 font-serif text-2xl italic leading-tight text-foreground sm:h-24 sm:text-3xl">
            Você merece sorrir sem medo.
          </h1>

          {/* Minimal dental and periodontal motif */}
          <div className="mt-4 w-full max-w-xs" aria-hidden>
            <svg
              viewBox="0 0 300 40"
              className="h-10 w-full"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line
                x1="0"
                y1="20"
                x2="300"
                y2="20"
                strokeWidth="1"
                className="text-accent/15"
              />

              {/* Gum line */}
              <path
                d="M42 23 C76 13 108 27 140 20 C172 13 204 27 238 18"
                strokeWidth="1.4"
                className="text-accent/55"
              />

              {/* Tooth crown and roots */}
              <g transform="translate(132 3)" className="text-neon-deep">
                <g className="tooth-dance">
                <path
                  d="M18 3 C11 -1 3 3 2 11 C1 18 6 23 8 30 C9 34 11 36 13 31 L17 23 C18 21 20 21 21 23 L25 31 C27 36 29 34 30 30 C32 23 37 18 36 11 C35 3 27 -1 20 3 C19 4 19 4 18 3 Z"
                  strokeWidth="1.8"
                  fill="var(--background)"
                />
                <path
                  d="M7 10 C14 13 23 13 31 10"
                  strokeWidth="1.2"
                  className="text-accent/70"
                />
                </g>
              </g>

              {/* Gentle sparkle */}
              <g className="sparkle-pop text-accent">
                <path d="M247 8 V18 M242 13 H252" strokeWidth="1.7" />
                <path d="M263 20 V27 M259.5 23.5 H266.5" strokeWidth="1.3" />
              </g>

              {/* Small smile curve */}
              <path
                d="M72 15 Q82 23 92 15"
                strokeWidth="1.5"
                className="text-neon-deep/70"
              />
            </svg>
          </div>

          <p className="mt-5 max-w-md text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
            Cirurgiã-dentista em Belo Horizonte, dedicada a implantes, periodontia
            e estética facial. Cuido do seu sorriso
            com acolhimento em cada etapa: você entende cada procedimento e se sente
            segura do começo ao fim.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-[11px] uppercase tracking-widest">
            <span className="rounded-full border border-accent/50 bg-secondary px-3 py-1 text-accent">
              Implantes · Periodontia
            </span>
            <span className="rounded-full border border-accent/50 bg-secondary px-3 py-1 text-accent">
              Estética facial
            </span>
            <span className="rounded-full border border-primary/50 bg-muted px-3 py-1 text-primary">
              Atendimento em Belo Horizonte/MG
            </span>
          </div>

          {/* Social links */}
          <div className="mt-4 flex items-center justify-center gap-3 text-xs">
            <a
              href={profile.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da Dra. Mariana Junqueira Ramos"
              className="inline-flex items-center gap-1.5 rounded-full border border-primary/60 bg-card px-3 py-1 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <Instagram className="h-3.5 w-3.5" /> Instagram
            </a>
            <a
              href={profile.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp da Dra. Mariana Junqueira Ramos"
              className="inline-flex items-center gap-1.5 rounded-full border border-primary/60 bg-card px-3 py-1 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <Globe className="h-3.5 w-3.5" /> WhatsApp
            </a>
          </div>
        </header>



        {/* Sections */}
        <div className="flex flex-col gap-10">
          {sections.map((section) => (
            <section key={section.title}>
              <div className="mb-4 flex items-center gap-4">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-neon-deep/30" />
                <h2 className="font-serif text-xl italic text-neon-deep sm:text-2xl">
                  {section.title}
                </h2>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-neon-deep/30" />
              </div>
              <nav className="flex flex-col gap-3">
                {section.links.map(({ label, description, href, icon }, idx) => {
                  const isBlue = idx % 2 === 1;
                  const cardBg = isBlue ? "bg-primary" : "bg-accent";
                  return (
                    <a
                      key={label}
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className={`group relative flex items-center gap-4 rounded-xl ${cardBg} px-5 py-4 text-white shadow-paper transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-14px_var(--neon-glow)]`}
                    >
                      <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-white/15 text-white ring-1 ring-white/30 transition-colors group-hover:bg-white group-hover:text-foreground">
                        {icon}
                      </span>
                      <span className="flex flex-1 flex-col">
                        <span className="font-medium leading-tight text-white">{label}</span>
                        {description && (
                          <span className="mt-0.5 text-xs text-white/80">
                            {description}
                          </span>
                        )}
                      </span>
                      <span className="font-serif text-xl text-white/70 transition-transform group-hover:translate-x-0.5 group-hover:text-white">
                        →
                      </span>
                    </a>
                  );
                })}
              </nav>
            </section>
          ))}
        </div>


        {/* Áreas de atuação marquee */}
        <section className="mt-14">
          <div className="mb-4 flex items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-neon-deep/30" />
            <h2 className="font-serif text-xl italic text-neon-deep sm:text-2xl">
              Áreas de atuação
            </h2>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-neon-deep/30" />
          </div>
          <p className="mb-6 text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Saúde bucal, estética e cuidado em cada sorriso.
          </p>

          <div className="relative -mx-6 overflow-x-auto overflow-y-hidden sm:overflow-hidden [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-16 bg-gradient-to-r from-background to-transparent sm:block"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-16 bg-gradient-to-l from-background to-transparent sm:block"
            />
            <div className="marquee-track flex w-max snap-x snap-mandatory gap-3 px-6 py-2 sm:px-0">
              {[...areas, ...areas].map((area, i) => (
                <a
                  key={`${area.sigla}-${i}`}
                  href={area.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="snap-start"
                >
                  <figure
                    className="relative flex h-48 w-40 flex-shrink-0 flex-col items-center justify-center overflow-hidden rounded-xl border border-border bg-secondary shadow-paper transition-transform duration-200 hover:-translate-y-0.5 sm:h-52 sm:w-44"
                  >
                    <img
                      src={area.image}
                      alt=""
                      aria-hidden
                      className="absolute inset-0 h-full w-full object-cover"
                      loading="lazy"
                    />
                    <div
                      aria-hidden
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(160deg, rgba(184,92,134,0.62) 0%, rgba(29,78,76,0.58) 100%)",
                      }}
                    />
                    <span className="relative font-serif text-4xl italic text-white drop-shadow-md sm:text-5xl">
                      {area.sigla}
                    </span>
                    <figcaption className="relative mt-3 px-2 text-center font-serif text-[13px] italic leading-snug text-white drop-shadow">
                      {area.label}
                    </figcaption>
                  </figure>
                </a>
              ))}
            </div>
          </div>

        </section>




        {/* Footer */}
        <footer className="mt-14 text-center">
          <p className="font-serif text-base italic text-foreground sm:text-lg">
            “Você merece sorrir sem medo.”
          </p>
          <p className="mt-4 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            © 2026 Dra. Mariana Junqueira Ramos · Todos os direitos reservados
          </p>
          <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            Belo Horizonte/MG · @dra_marianajunqueira
          </p>
        </footer>
      </div>

      {/* Floating WhatsApp button */}
      <a
        href={profile.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp com a Dra. Mariana Junqueira Ramos"
        className="wa-pulse fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#287A52] text-white shadow-[0_10px_30px_-8px_rgba(40,122,82,0.6)] transition-transform hover:scale-110"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </a>
    </main>
  );
}

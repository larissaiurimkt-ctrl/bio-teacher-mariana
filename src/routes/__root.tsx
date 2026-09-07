import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

const siteUrl = "https://bioteachermari.lovable.app";
const shareImage = `${siteUrl}/teacher-mari-share.jpg?v=3`;

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Página não encontrada</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Essa página não existe ou foi movida.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Voltar para a bio
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          A página não carregou
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Algo deu errado. Você pode tentar novamente ou voltar para a bio.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Tentar novamente
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Voltar para a bio
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Teacher Mari | Inglês de verdade, sem decoreba" },
      {
        name: "description",
        content:
          "Inglês prático, funcional e com personalidade. Aulas online, speaking, música, expressões do dia a dia e zero julgamento.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: siteUrl },
      { property: "og:site_name", content: "Teacher Mari" },
      { property: "og:title", content: "Teacher Mari | Inglês de verdade, sem decoreba" },
      {
        property: "og:description",
        content:
          "Inglês prático, funcional e com personalidade. Aulas online, speaking, música e inglês do dia a dia.",
      },
      { property: "og:image", content: shareImage },
      { property: "og:image:url", content: shareImage },
      { property: "og:image:secure_url", content: shareImage },
      { property: "og:image:type", content: "image/jpeg" },
      { property: "og:image:width", content: "400" },
      { property: "og:image:height", content: "210" },
      {
        property: "og:image:alt",
        content: "Teacher Mari — Fluência não é dom. É método.",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Teacher Mari | Inglês de verdade, sem decoreba" },
      {
        name: "twitter:description",
        content:
          "Aulas online com prática real, speaking, música e inglês do dia a dia.",
      },
      { name: "twitter:image", content: shareImage },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "icon",
        type: "image/svg+xml",
        href: "/favicon-teacher-mari.svg?v=2",
      },
      {
        rel: "shortcut icon",
        href: "/favicon-teacher-mari.svg?v=2",
      },
      {
        rel: "canonical",
        href: siteUrl,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function BioLinkBehavior() {
  useEffect(() => {
    const links = Array.from(document.querySelectorAll<HTMLAnchorElement>("a"));

    const lessonsCta = links.find((link) =>
      link.textContent?.includes("Quero começar minhas aulas"),
    );

    if (lessonsCta) {
      const message = encodeURIComponent(
        "Oi, Teacher Mari! Vim pelo seu link da bio e gostaria de saber mais sobre as aulas de inglês. Pode me explicar como funcionam e quais são os horários disponíveis? 🖤",
      );
      lessonsCta.href = `https://wa.me/553191569925?text=${message}`;
      lessonsCta.target = "_blank";
      lessonsCta.rel = "noopener noreferrer";

      const description = lessonsCta.querySelector("span span:nth-child(2)");
      if (description) {
        description.textContent =
          "Vagas abertas para aulas particulares online. Me chama no WhatsApp e conversamos sobre o melhor formato para você.";
      }
    }

    const speakingCard = links.find((link) =>
      link.textContent?.includes("Speaking, música e cotidiano"),
    );

    if (speakingCard) {
      speakingCard.removeAttribute("href");
      speakingCard.removeAttribute("target");
      speakingCard.removeAttribute("rel");
      speakingCard.setAttribute("aria-disabled", "true");
      speakingCard.style.pointerEvents = "none";
      speakingCard.style.cursor = "default";
    }
  }, []);

  return null;
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <BioLinkBehavior />
      <Outlet />
    </QueryClientProvider>
  );
}

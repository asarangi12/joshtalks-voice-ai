import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { Mission } from "@/components/landing/Mission";
import { Trust } from "@/components/landing/Trust";
import { Infrastructure } from "@/components/landing/Infrastructure";
import { Logos } from "@/components/landing/Logos";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Josh Talks AI — Infrastructure for Voice AI in India" },
      { name: "description", content: "Research-grade voice datasets and evaluations across 22 Indian languages and 700+ dialects, for top AI labs and tech companies." },
      { property: "og:title", content: "Josh Talks AI — Infrastructure for Voice AI in India" },
      { property: "og:description", content: "Research-grade voice datasets and evaluations across 22 Indian languages and 700+ dialects." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600&family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=JetBrains+Mono:wght@400;500&display=swap" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground antialiased">
      <Nav />
      <Hero />
      <Mission />
      <Trust />
      <Infrastructure />
      <Logos />
      <Footer />
    </main>
  );
}

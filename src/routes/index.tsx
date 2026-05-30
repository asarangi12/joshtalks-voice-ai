import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { Logos } from "@/components/landing/Logos";
import { Infrastructure } from "@/components/landing/Infrastructure";
import { Trust } from "@/components/landing/Trust";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Josh Talks AI — Voice Infrastructure for AI in India" },
      { name: "description", content: "Research-grade voice datasets and evaluations across 22 Indian languages for top AI labs. ASR, TTS, Voice of India, Human-1." },
      { property: "og:title", content: "Josh Talks AI — Voice Infrastructure for AI in India" },
      { property: "og:description", content: "Research-grade voice datasets and evaluations across 22 Indian languages." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;700&display=swap" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground antialiased">
      <Nav />
      <Hero />
      <Logos />
      <Infrastructure />
      <Trust />
      <Footer />
    </main>
  );
}

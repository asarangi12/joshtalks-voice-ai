import { useState } from "react";
import { Waveform } from "./Waveform";

export function Footer() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <footer className="relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 py-24 lg:py-32">
        <div className="grid grid-cols-12 gap-10 mb-20">
          <div className="col-span-12 lg:col-span-7">
            <div className="font-mono text-[11px] text-muted-foreground mb-4">[05] SUBSCRIBE</div>
            <h3 className="font-display text-4xl lg:text-6xl tracking-[-0.04em] leading-[0.95] mb-4">
              Stay updated on<br />new Voice AI datasets.
            </h3>
            <p className="text-muted-foreground max-w-md mb-10">
              Monthly drop. New languages, new benchmarks, new research. No fluff.
            </p>
            <form
              onSubmit={(e) => { e.preventDefault(); if (email) setSent(true); }}
              className="flex items-center border hairline rounded-sm bg-surface/60 backdrop-blur max-w-xl overflow-hidden focus-within:border-foreground/40 transition"
            >
              <span className="pl-4 font-mono text-xs text-muted-foreground">→</span>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="researcher@lab.ai"
                className="flex-1 bg-transparent px-3 py-4 text-sm outline-none placeholder:text-muted-foreground/60 font-mono"
              />
              <button
                type="submit"
                className="m-1.5 px-5 py-3 bg-foreground text-background font-mono text-xs rounded-sm hover:bg-foreground/90 transition whitespace-nowrap"
              >
                {sent ? "✓ subscribed" : "subscribe ↗"}
              </button>
            </form>
          </div>

          <div className="col-span-6 lg:col-span-2 lg:col-start-9">
            <div className="font-mono text-[10px] text-muted-foreground mb-4">PRODUCT</div>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-foreground text-muted-foreground transition">ASR Datasets</a></li>
              <li><a href="#" className="hover:text-foreground text-muted-foreground transition">TTS Evals</a></li>
              <li><a href="#" className="hover:text-foreground text-muted-foreground transition">Voice of India</a></li>
              <li><a href="#" className="hover:text-foreground text-muted-foreground transition">Human-1</a></li>
            </ul>
          </div>
          <div className="col-span-6 lg:col-span-2">
            <div className="font-mono text-[10px] text-muted-foreground mb-4">COMPANY</div>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-foreground text-muted-foreground transition">Research</a></li>
              <li><a href="#" className="hover:text-foreground text-muted-foreground transition">Careers</a></li>
              <li><a href="#" className="hover:text-foreground text-muted-foreground transition">Contact</a></li>
              <li><a href="#" className="hover:text-foreground text-muted-foreground transition">Press</a></li>
            </ul>
          </div>
        </div>

        {/* Big wordmark */}
        <div className="border-t hairline pt-12">
          <div className="font-display font-bold tracking-[-0.06em] text-[clamp(3rem,15vw,13rem)] leading-[0.85] text-foreground/90">
            josh.ai/voice
          </div>
          <div className="mt-10 flex items-center justify-between flex-wrap gap-4 font-mono text-[11px] text-muted-foreground">
            <div>© 2026 Josh Talks AI — Built in Gurugram, recorded across India.</div>
            <div className="flex items-center gap-4">
              <Waveform bars={12} className="h-4" />
              <span>uptime 99.99%</span>
              <a href="#" className="hover:text-foreground">privacy</a>
              <a href="#" className="hover:text-foreground">terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

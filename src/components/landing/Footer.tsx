import { useState } from "react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <footer id="contact" className="bg-background">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-24 lg:py-32">
        <div className="rounded-2xl border hairline bg-card p-10 lg:p-16 text-center max-w-3xl mx-auto">
          <div className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground uppercase mb-5">
            [ 06 ] — Newsletter
          </div>
          <h3 className="font-display text-3xl lg:text-5xl tracking-[-0.03em] leading-[1.05] text-balance">
            Stay updated on new <span className="italic text-brand">Voice AI</span> datasets.
          </h3>
          <p className="mt-5 text-muted-foreground max-w-md mx-auto">
            A monthly drop covering new languages, benchmarks, and research releases from the Josh Talks AI lab. No fluff.
          </p>
          <form
            onSubmit={(e) => { e.preventDefault(); if (email) setSent(true); }}
            className="focus-ring mt-10 flex items-center max-w-md mx-auto border hairline rounded-full bg-background overflow-hidden"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@research.org"
              className="flex-1 bg-transparent px-5 py-3.5 text-sm outline-none placeholder:text-muted-foreground"
            />
            <button
              type="submit"
              className="btn-lift m-1.5 px-5 py-2.5 bg-brand text-brand-foreground hover:bg-ember text-sm rounded-full whitespace-nowrap"
            >
              {sent ? "✓ Subscribed" : "Subscribe →"}
            </button>
          </form>

        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-10 text-sm">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5">
              <span className="size-7 rounded-md bg-brand grid place-items-center">
                <span className="text-brand-foreground font-display text-[11px] font-semibold leading-none">JT</span>
              </span>
              <span className="font-display text-base tracking-tight">
                Josh Talks <span className="text-ember">AI</span>
              </span>
            </div>
            <p className="mt-4 text-xs text-muted-foreground leading-relaxed max-w-[220px]">
              Voice infrastructure for AI in India. Built in Gurugram, recorded across the country.
            </p>
          </div>
          <div>
            <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-4">Product</div>
            <ul className="space-y-2.5 text-foreground/75">
              <li><a href="#asr" className="hover:text-brand transition">ASR Datasets</a></li>
              <li><a href="#tts" className="hover:text-brand transition">TTS Evals</a></li>
              <li><a href="#voi" className="hover:text-brand transition">Voice of India</a></li>
              <li><a href="#human1" className="hover:text-brand transition">Human-1</a></li>
            </ul>
          </div>
          <div>
            <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-4">Company</div>
            <ul className="space-y-2.5 text-foreground/75">
              <li><a href="#research" className="hover:text-brand transition">Research</a></li>
              <li><a href="#" className="hover:text-brand transition">Careers</a></li>
              <li><a href="#contact" className="hover:text-brand transition">Contact</a></li>
              <li><a href="#" className="hover:text-brand transition">Press</a></li>
            </ul>
          </div>
          <div>
            <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-4">Legal</div>
            <ul className="space-y-2.5 text-foreground/75">
              <li><a href="#" className="hover:text-brand transition">Privacy</a></li>
              <li><a href="#" className="hover:text-brand transition">Terms</a></li>
              
              <li><a href="#" className="hover:text-brand transition">Security</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t hairline flex items-center justify-between flex-wrap gap-3 font-mono text-[11px] text-muted-foreground">
          <span>© 2026 Josh Talks AI — All rights reserved.</span>
          <span className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-ember" />
            Systems operational · uptime 99.99%
          </span>
        </div>
      </div>
    </footer>
  );
}

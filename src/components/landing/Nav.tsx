const links = [
  { l: "Research", h: "#research" },
  { l: "ASR Datasets", h: "#asr" },
  { l: "TTS Evals", h: "#tts" },
  { l: "Voice of India", h: "#voi" },
  { l: "Human-1", h: "#human1" },
  { l: "Contact Us", h: "#contact" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/75 border-b hairline">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 h-16 flex items-center justify-between gap-6">
        <a href="/" className="flex items-center gap-2.5 shrink-0">
          <span className="size-7 rounded-md bg-brand grid place-items-center">
            <span className="text-brand-foreground font-display text-[11px] font-semibold leading-none">JT</span>
          </span>
          <span className="font-display text-base tracking-tight">
            Josh Talks <span className="text-ember">AI</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-7 text-[13px] text-muted-foreground">
          {links.map((n) => (
            <a key={n.l} href={n.h} className="hover:text-foreground transition relative">
              {n.l}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button className="hidden sm:inline-flex text-[13px] px-3 py-1.5 rounded-md text-muted-foreground hover:text-foreground transition">
            Sign In
          </button>
          <button className="text-[13px] px-3.5 py-1.5 rounded-md bg-brand text-brand-foreground hover:bg-foreground transition">
            Login
          </button>
        </div>
      </div>
    </header>
  );
}

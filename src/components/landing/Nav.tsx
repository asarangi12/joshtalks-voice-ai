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
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b hairline">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 h-16 flex items-center justify-between gap-6">
        <a href="/" className="flex items-center gap-2.5 shrink-0 group">
          <span className="size-7 rounded-md bg-brand grid place-items-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
            <span className="text-brand-foreground font-display text-[11px] font-semibold leading-none">JT</span>
          </span>
          <span className="font-display text-base tracking-tight transition-colors duration-300 group-hover:text-brand">
            Josh Talks <span className="text-ember">AI</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-7 text-[13px] text-muted-foreground">
          {links.map((n) => (
            <a key={n.l} href={n.h} className="nav-link hover:text-foreground transition-colors duration-300">
              {n.l}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button className="btn-lift hidden sm:inline-flex text-[13px] px-3 py-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-surface">
            Sign In
          </button>
          <button className="btn-lift text-[13px] px-3.5 py-1.5 rounded-md bg-brand text-brand-foreground hover:bg-ember">
            Login
          </button>
        </div>

      </div>
    </header>
  );
}

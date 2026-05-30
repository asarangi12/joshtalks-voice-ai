export function Nav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b hairline">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="size-6 rounded-sm bg-foreground grid place-items-center">
            <span className="text-background font-display text-[10px] font-bold">JT</span>
          </div>
          <span className="font-mono text-xs tracking-tight">josh.ai/voice</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-xs font-mono text-muted-foreground">
          <a href="#datasets" className="hover:text-foreground transition">Datasets</a>
          <a href="#infra" className="hover:text-foreground transition">Infrastructure</a>
          <a href="#trust" className="hover:text-foreground transition">Trust</a>
          <a href="#research" className="hover:text-foreground transition">Research</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="text-xs font-mono text-muted-foreground hover:text-foreground transition hidden sm:block">Sign in</button>
          <button className="text-xs font-mono px-3 py-1.5 bg-foreground text-background rounded-sm hover:bg-foreground/90 transition">
            Request access ↗
          </button>
        </div>
      </div>
    </header>
  );
}

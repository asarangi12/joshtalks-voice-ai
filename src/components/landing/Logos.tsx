const logos = ["OpenAI", "Meta", "Amazon", "WhatsApp", "Google", "Spotify", "Anthropic", "Microsoft"];

export function Logos() {
  return (
    <section className="border-b hairline py-14">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="flex items-center gap-6 mb-8 font-mono text-[11px] text-muted-foreground">
          <span>// TRUSTED BY RESEARCH TEAMS AT</span>
          <span className="flex-1 h-px bg-border" />
          <span>n = 40+ labs</span>
        </div>
        <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
          <div className="marquee flex gap-16 w-max">
            {[...logos, ...logos].map((l, i) => (
              <span
                key={i}
                className="font-display text-3xl lg:text-4xl tracking-tight text-foreground/70 hover:text-foreground transition whitespace-nowrap"
              >
                {l}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

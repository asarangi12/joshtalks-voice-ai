function MiniWave() {
  return (
    <div className="relative h-28 rounded-md border hairline bg-surface p-3 overflow-hidden">
      <div className="absolute inset-x-3 top-1/2 -translate-y-1/2 flex items-center gap-[2px] h-16">
        {Array.from({ length: 56 }).map((_, i) => (
          <span
            key={i}
            className="wave-bar flex-1 bg-brand/70 rounded-full"
            style={{
              height: `${20 + (Math.sin(i * 0.55 + 1) * 0.5 + 0.5) * 80}%`,
              animationDelay: `${(i * 50) % 1400}ms`,
            }}
          />
        ))}
      </div>
      <div className="absolute bottom-2 left-3 font-mono text-[9px] text-muted-foreground">8 kHz · mono · diversity index 0.87</div>
    </div>
  );
}

function MiniBars() {
  const items = [
    { l: "WER", v: 92, n: "4.1%" },
    { l: "CER", v: 78, n: "1.8%" },
    { l: "MOS", v: 88, n: "4.42" },
    { l: "BLEU", v: 64, n: "0.71" },
  ];
  return (
    <div className="h-28 rounded-md border hairline bg-surface p-3 flex flex-col justify-end gap-2">
      {items.map((b) => (
        <div key={b.l} className="flex items-center gap-2 font-mono text-[10px]">
          <span className="w-9 text-muted-foreground">{b.l}</span>
          <div className="flex-1 h-1.5 bg-border/70 rounded-full overflow-hidden">
            <div className="h-full bg-brand rounded-full" style={{ width: `${b.v}%` }} />
          </div>
          <span className="w-10 text-right text-foreground/80">{b.n}</span>
        </div>
      ))}
    </div>
  );
}

function MiniCode() {
  return (
    <div className="h-28 rounded-md border hairline bg-surface p-3 font-mono text-[10px] leading-relaxed overflow-hidden">
      <div className="text-muted-foreground">// consent.policy</div>
      <div><span className="text-ember">grant</span>(<span className="text-brand">speaker</span>, {`{`}</div>
      <div className="pl-3">scope: <span className="text-foreground">"research"</span>,</div>
      <div className="pl-3">revocable: <span className="text-ember">true</span>,</div>
      <div className="pl-3">pii: <span className="text-foreground">"redacted"</span>,</div>
      <div>{`}`}) <span className="cursor-blink">▍</span></div>
    </div>
  );
}

function MiniSecurity() {
  const items = [
    { l: "SOC 2 Type II", ok: true },
    { l: "ISO 27001", ok: true },
    { l: "DPDP-aligned", ok: true },
    { l: "AES-256 at rest", ok: true },
  ];
  return (
    <div className="h-28 rounded-md border hairline bg-surface p-3 flex flex-col justify-between text-[11px]">
      {items.map((it) => (
        <div key={it.l} className="flex items-center justify-between font-mono">
          <span className="text-foreground/80">{it.l}</span>
          <span className="inline-flex items-center gap-1.5 text-brand">
            <span className="size-1.5 rounded-full bg-ember" />
            <span className="text-[10px]">verified</span>
          </span>
        </div>
      ))}
    </div>
  );
}

const items = [
  { k: "01", t: "Grassroots Diversity", d: "Recorded by 9,400+ contributors across 24 Indian states — not pulled from the public web.", v: <MiniWave /> },
  { k: "02", t: "Measurable Quality", d: "Every drop benchmarked on WER, CER, MOS and BLEU before it reaches your pipeline.", v: <MiniBars /> },
  { k: "03", t: "Ethical by Design", d: "Informed, revocable consent. Paid fairly. Audit trail per utterance.", v: <MiniCode /> },
  { k: "04", t: "Enterprise-Grade Security", d: "SOC 2 Type II, ISO 27001, DPDP-aligned. Encrypted in transit and at rest.", v: <MiniSecurity /> },
];

export function Trust() {
  return (
    <section id="trust" className="border-b hairline">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-24 lg:py-32">
        <div className="grid grid-cols-12 gap-6 mb-14">
          <div className="col-span-12 lg:col-span-7">
            <div className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground mb-4 uppercase">[ 03 ] — Trust Layer</div>
            <h2 className="font-display font-medium text-[clamp(2rem,5vw,4.25rem)] leading-[1.02] tracking-[-0.03em] text-balance">
              Built on consent. <span className="italic text-brand">Measured</span> on rigor.
            </h2>
          </div>
          <p className="col-span-12 lg:col-span-4 lg:col-start-9 text-muted-foreground self-end leading-relaxed">
            Four non-negotiables behind every dataset we ship — engineered for production loops, audited for research review.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {items.map((it) => (
            <article key={it.k} className="rounded-xl border hairline bg-card p-6 hover:border-foreground/25 transition flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{it.k}</span>
                <span className="font-mono text-[10px] text-muted-foreground">view →</span>
              </div>
              <h3 className="font-display text-xl tracking-tight">{it.t}</h3>
              <p className="text-[13px] text-muted-foreground mt-2 leading-relaxed">{it.d}</p>
              <div className="mt-6">{it.v}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

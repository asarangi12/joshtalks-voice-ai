import { Waveform } from "./Waveform";

function MiniWave() {
  return (
    <div className="relative h-32 rounded-sm border hairline bg-background/40 p-3 overflow-hidden">
      <div className="absolute inset-x-3 top-1/2 -translate-y-1/2 flex items-center gap-[2px] h-20">
        {Array.from({ length: 48 }).map((_, i) => (
          <span
            key={i}
            className="wave-bar flex-1 bg-foreground/60 rounded-full"
            style={{
              height: `${20 + (Math.sin(i * 0.6 + 1) * 0.5 + 0.5) * 80}%`,
              animationDelay: `${(i * 50) % 1400}ms`,
            }}
          />
        ))}
      </div>
      <div className="absolute bottom-2 left-3 font-mono text-[9px] text-muted-foreground">8 KHZ · MONO · DIVERSITY_INDEX 0.87</div>
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
    <div className="h-32 rounded-sm border hairline bg-background/40 p-3 flex flex-col justify-end gap-1.5">
      {items.map((b) => (
        <div key={b.l} className="flex items-center gap-2 font-mono text-[9px]">
          <span className="w-8 text-muted-foreground">{b.l}</span>
          <div className="flex-1 h-1.5 bg-border rounded-full overflow-hidden">
            <div className="h-full bg-foreground rounded-full" style={{ width: `${b.v}%` }} />
          </div>
          <span className="w-10 text-right">{b.n}</span>
        </div>
      ))}
    </div>
  );
}

function MiniCode() {
  return (
    <div className="h-32 rounded-sm border hairline bg-background/40 p-3 font-mono text-[10px] leading-relaxed overflow-hidden">
      <div className="text-muted-foreground">// consent.policy</div>
      <div><span className="text-signal">grant</span>(<span className="text-foreground">speaker</span>, {`{`}</div>
      <div className="pl-3">scope: <span className="text-foreground">"research"</span>,</div>
      <div className="pl-3">revocable: <span className="text-signal">true</span>,</div>
      <div className="pl-3">pii: <span className="text-foreground">"redacted"</span>,</div>
      <div>{`}`}) <span className="cursor-blink">▍</span></div>
    </div>
  );
}

function MiniSecurity() {
  return (
    <div className="h-32 rounded-sm border hairline bg-background/40 p-3 flex flex-col justify-between">
      <div className="grid grid-cols-3 gap-1.5">
        {["SOC2", "ISO27", "GDPR", "DPDP", "HIPAA", "PCI"].map((b) => (
          <div key={b} className="border hairline rounded-sm py-1.5 text-center font-mono text-[9px]">{b}</div>
        ))}
      </div>
      <div className="font-mono text-[9px] text-muted-foreground flex items-center justify-between">
        <span>AES-256 · zero-retention</span>
        <span className="size-1.5 rounded-full bg-signal animate-pulse" />
      </div>
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
        <div className="flex items-end justify-between mb-12 flex-wrap gap-6">
          <div>
            <div className="font-mono text-[11px] text-muted-foreground mb-4">[04] TRUST_LAYER</div>
            <h2 className="font-display text-4xl lg:text-6xl tracking-[-0.04em] leading-[0.95] max-w-3xl">
              Built on consent.<br />
              <span className="text-muted-foreground">Measured on rigor.</span>
            </h2>
          </div>
          <Waveform bars={20} className="hidden lg:flex" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border rounded-md overflow-hidden">
          {items.map((it) => (
            <div key={it.k} className="bg-background p-7 lg:p-9 hover:bg-surface transition group">
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-[10px] text-muted-foreground">{it.k}</span>
                <span className="font-mono text-[10px] text-muted-foreground opacity-0 group-hover:opacity-100 transition">view ↗</span>
              </div>
              <div className="font-display text-2xl lg:text-3xl tracking-tight mb-3">{it.t}</div>
              <p className="text-sm text-muted-foreground max-w-md mb-7 leading-relaxed">{it.d}</p>
              {it.v}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

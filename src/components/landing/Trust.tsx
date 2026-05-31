import { motion } from "framer-motion";
import { Reveal, Stagger, itemVariants } from "./Reveal";

function MiniMap() {
  // Abstract India-ish node clusters
  const nodes = [
    { x: 28, y: 22, r: 2.2, d: 0 },
    { x: 42, y: 30, r: 1.8, d: 0.4 },
    { x: 58, y: 18, r: 2, d: 0.8 },
    { x: 70, y: 34, r: 2.4, d: 1.2 },
    { x: 36, y: 50, r: 2, d: 0.2 },
    { x: 52, y: 58, r: 2.6, d: 0.6 },
    { x: 66, y: 64, r: 1.8, d: 1.0 },
    { x: 44, y: 76, r: 2.2, d: 0.9 },
    { x: 60, y: 82, r: 2, d: 1.4 },
    { x: 30, y: 70, r: 1.6, d: 1.6 },
  ];
  return (
    <div className="relative h-28 rounded-md border hairline bg-surface overflow-hidden group">
      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
        {/* faint connective grid */}
        {nodes.map((n, i) =>
          nodes.slice(i + 1, i + 3).map((m, j) => (
            <line
              key={`${i}-${j}`}
              x1={n.x} y1={n.y} x2={m.x} y2={m.y}
              stroke="currentColor"
              strokeWidth="0.18"
              className="text-border"
            />
          )),
        )}
        {nodes.map((n, i) => (
          <g key={i}>
            <circle
              cx={n.x} cy={n.y} r={n.r}
              className="fill-brand opacity-80 transition-colors duration-500 group-hover:fill-ember"
            />
            <circle
              cx={n.x} cy={n.y} r={n.r}
              className="fill-none stroke-brand opacity-0 group-hover:opacity-60"
              style={{
                animation: `node-ripple 2.4s ${n.d}s ease-out infinite`,
                strokeWidth: 0.4,
              }}
            />
          </g>
        ))}
      </svg>
      <div className="absolute bottom-2 left-3 font-mono text-[9px] text-muted-foreground">24 states · 9.4k+ contributors</div>
      <style>{`@keyframes node-ripple { 0% { r: 1; opacity: 0.7; } 100% { r: 8; opacity: 0; } }`}</style>
    </div>
  );
}

function MiniPipeline() {
  const steps = ["L1", "L2", "L3", "L4", "L5"];
  return (
    <div className="relative h-28 rounded-md border hairline bg-surface p-3 overflow-hidden group">
      <div className="font-mono text-[9px] text-muted-foreground mb-3">validation pipeline · 5-level HITL</div>
      <div className="relative flex items-center justify-between">
        {steps.map((s, i) => (
          <div key={s} className="relative z-10 flex flex-col items-center gap-1.5">
            <div className="size-5 rounded-full border border-border bg-card flex items-center justify-center font-mono text-[8px] text-foreground/70 group-hover:border-brand/60 group-hover:text-brand transition-colors duration-300"
              style={{ transitionDelay: `${i * 80}ms` }}>
              {s}
            </div>
            <div className="size-1 rounded-full bg-border group-hover:bg-ember transition-colors duration-300"
              style={{ transitionDelay: `${i * 80 + 100}ms` }} />
          </div>
        ))}
        {/* base track */}
        <div className="absolute top-2.5 left-2 right-2 h-px bg-border" />
        {/* sweep bar */}
        <div className="absolute top-2.5 left-2 right-2 h-px overflow-hidden">
          <div className="h-full w-full origin-left bg-gradient-to-r from-transparent via-ember to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ animation: "pipe-sweep 1.6s ease-in-out infinite" }} />
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between font-mono text-[9px]">
        <span className="text-muted-foreground">anomaly</span>
        <span className="inline-flex items-center gap-1.5">
          <span className="size-1 rounded-full bg-ember opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <span className="text-foreground/60 group-hover:text-ember transition-colors duration-300">detected → resolved</span>
        </span>
      </div>
      <style>{`@keyframes pipe-sweep { 0% { transform: translateX(-100%); } 100% { transform: translateX(100%); } }`}</style>
    </div>
  );
}

function MiniCode() {
  return (
    <div className="relative h-28 rounded-md border hairline bg-surface p-3 font-mono text-[10px] leading-relaxed overflow-hidden group">
      <div className="text-muted-foreground">// consent.policy</div>
      <div><span className="text-ember">grant</span>(<span className="text-brand">speaker</span>, {`{`}</div>
      <div className="pl-3">
        scope: <span className="text-foreground">"research"</span>,
      </div>
      <div className="pl-3 flex items-baseline gap-1">
        <span>email:</span>
        <span className="relative inline-block">
          <span className="text-foreground/90 transition-all duration-500 blur-[3px] group-hover:blur-0">
            "ravi@josh.ai"
          </span>
        </span>
        <span className="text-muted-foreground">→</span>
        <span className="text-ember">redact()</span>
      </div>
      <div>{`}`}) <span className="cursor-blink">▍</span></div>
      {/* scanning beam */}
      <div className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 bg-gradient-to-r from-transparent via-brand/15 to-transparent opacity-0 group-hover:opacity-100"
        style={{ animation: "code-scan 1.8s ease-in-out infinite" }} />
      <style>{`@keyframes code-scan { 0% { transform: translateX(0); } 100% { transform: translateX(400%); } }`}</style>
    </div>
  );
}

function MiniLedger() {
  const rows = [
    "a93f1e…ce20",
    "7d20b4…11af",
    "f0c9e2…7b3d",
    "be5418…0a99",
  ];
  return (
    <div className="relative h-28 rounded-md border hairline bg-surface p-3 overflow-hidden group">
      <div className="flex items-center justify-between font-mono text-[9px] text-muted-foreground mb-2">
        <span>audit.ledger</span>
        <span className="inline-flex items-center gap-1">
          <span className="size-1.5 rounded-full bg-ember" />
          <span>immutable</span>
        </span>
      </div>
      <div className="relative h-[68px] overflow-hidden">
        <div className="font-mono text-[10px] leading-[1.55] text-foreground/70 group-hover:text-foreground transition-colors duration-300"
          style={{ animation: "ledger-scroll 6s linear infinite" }}>
          {[...rows, ...rows, ...rows].map((h, i) => (
            <div key={i} className="flex items-center justify-between">
              <span>#{String(i + 1).padStart(3, "0")} · {h}</span>
              <span className="text-brand opacity-70 group-hover:opacity-100 transition-opacity">✓</span>
            </div>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-x-0 top-0 h-3 bg-gradient-to-b from-surface to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-3 bg-gradient-to-t from-surface to-transparent" />
      </div>
      <style>{`@keyframes ledger-scroll { 0% { transform: translateY(0); } 100% { transform: translateY(-33.33%); } }`}</style>
    </div>
  );
}

const items = [
  {
    k: "01",
    t: "Grassroots Diversity",
    d: "Collected from real speakers across states, socioeconomic tiers, and dialect regions, exactly where your product will be used.",
    v: <MiniMap />,
  },
  {
    k: "02",
    t: "Measurable Quality",
    d: "5-level human-in-the-loop annotation with automated anomaly detection keeps label error rates exceptionally low.",
    v: <MiniPipeline />,
  },
  {
    k: "03",
    t: "Ethical by Design",
    d: "Consent workflows that meet global standards, automated PII redaction, and contributor revenue-share models.",
    v: <MiniCode />,
  },
  {
    k: "04",
    t: "Enterprise-Grade Security",
    d: "Air-gapped labs, ISO-27001-aligned cloud practices, and full per-file audit trails for compliance teams.",
    v: <MiniLedger />,
  },
];

export function Trust() {
  return (
    <section id="trust" className="border-b hairline">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-24 lg:py-32">
        <div className="grid grid-cols-12 gap-6 mb-14">
          <Reveal className="col-span-12 lg:col-span-7">
            <div className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground mb-4 uppercase">[ 03 ] — Trust Layer</div>
            <h2 className="font-display font-medium text-[clamp(2rem,5vw,4.25rem)] leading-[1.02] tracking-[-0.03em] text-balance">
              Built on consent. <span className="italic text-brand">Measured</span> on rigor.
            </h2>
          </Reveal>
          <Reveal className="col-span-12 lg:col-span-4 lg:col-start-9 self-end" delay={1}>
            <p className="text-muted-foreground leading-relaxed">
              Four non-negotiables behind every dataset we ship — engineered for production loops, audited for research review.
            </p>
          </Reveal>
        </div>

        <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3" stagger={0.1}>
          {items.map((it) => (
            <motion.article
              key={it.k}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 280, damping: 24 }}
              className="group rounded-xl border hairline bg-card p-6 hover:border-brand/50 hover:shadow-[0_30px_60px_-30px_color-mix(in_oklab,var(--brand)_45%,transparent)] transition-[border-color,box-shadow] duration-300 flex flex-col"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{it.k}</span>
                <span className="font-mono text-[10px] text-muted-foreground transition-colors group-hover:text-brand">view →</span>
              </div>
              <h3 className="font-display text-xl tracking-tight">{it.t}</h3>
              <p className="text-[13px] text-muted-foreground mt-2 leading-relaxed">{it.d}</p>
              <div className="mt-6">{it.v}</div>
            </motion.article>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

import { Waveform } from "./Waveform";

const categories = [
  { id: "01", code: "ASR.IN", name: "ASR Datasets", desc: "Channel-separated, multi-lingual", metric: "48.2k hrs", trend: "+12%" },
  { id: "02", code: "TTS.EVAL", name: "TTS Evals", desc: "Naturalness + intelligibility scoring", metric: "1.4M utt", trend: "+8%" },
  { id: "03", code: "VOI.22", name: "Voice of India", desc: "22 official languages, 700+ dialects", metric: "22 langs", trend: "live" },
  { id: "04", code: "H1.HUM", name: "Human-1", desc: "Human preference reasoning bench", metric: "92.1 acc", trend: "v2.3" },
];

export function Hero() {
  return (
    <section className="relative border-b hairline">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 pt-20 pb-24 lg:pt-28 lg:pb-32">
        {/* eyebrow */}
        <div className="flex items-center gap-3 mb-10 font-mono text-[11px] text-muted-foreground">
          <span className="size-1.5 rounded-full bg-signal animate-pulse" />
          <span>SYS_STATUS: OPERATIONAL</span>
          <span className="opacity-40">/</span>
          <span>BUILD 2026.05.30</span>
          <span className="opacity-40">/</span>
          <span>BASE_INDIA</span>
        </div>

        <h1 className="font-display font-bold text-foreground text-[clamp(2.75rem,8vw,7.5rem)] leading-[0.92] tracking-[-0.05em] text-balance">
          Voice Infrastructure<br />
          <span className="text-muted-foreground">for AI in</span> India<span className="text-signal">.</span>
        </h1>

        <div className="mt-10 grid grid-cols-12 gap-6">
          <p className="col-span-12 md:col-span-7 lg:col-span-6 text-base lg:text-lg text-muted-foreground max-w-xl leading-relaxed">
            Research-grade datasets and evaluations for top AI labs and tech
            companies across the world — built on the ground, across 22
            languages, 700+ dialects.
          </p>
          <div className="col-span-12 md:col-span-5 lg:col-span-6 flex md:justify-end items-end gap-3">
            <button className="font-mono text-xs px-5 py-3 bg-foreground text-background rounded-sm hover:bg-foreground/90 transition">
              Request dataset access ↗
            </button>
            <button className="font-mono text-xs px-5 py-3 border hairline rounded-sm hover:bg-accent transition">
              Read whitepaper
            </button>
          </div>
        </div>

        {/* Dashboard widget */}
        <div className="mt-16 lg:mt-20 rounded-md border hairline bg-surface/60 backdrop-blur-sm overflow-hidden">
          {/* terminal head */}
          <div className="flex items-center justify-between px-5 py-3 border-b hairline">
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-foreground/20" />
              <span className="size-2 rounded-full bg-foreground/20" />
              <span className="size-2 rounded-full bg-foreground/20" />
              <span className="ml-3 font-mono text-[11px] text-muted-foreground">
                ~/josh-voice <span className="text-signal">$</span> ls datasets/
              </span>
            </div>
            <div className="hidden md:flex items-center gap-4 font-mono text-[11px] text-muted-foreground">
              <span>region: IN</span>
              <span>tier: research</span>
              <Waveform bars={14} className="h-4" />
            </div>
          </div>

          {/* dashboard grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {categories.map((c, i) => (
              <button
                key={c.id}
                className={`group text-left p-6 lg:p-7 border-b md:border-b-0 hairline transition hover:bg-accent/40 ${
                  i < 3 ? "md:border-r" : ""
                } ${i === 1 ? "md:border-b lg:border-b-0" : ""} ${i === 0 ? "md:border-b lg:border-b-0" : ""}`}
              >
                <div className="flex items-center justify-between mb-8">
                  <span className="font-mono text-[10px] text-muted-foreground">{c.code}</span>
                  <span className="font-mono text-[10px] text-signal">{c.trend}</span>
                </div>
                <div className="font-display text-2xl tracking-tight mb-1">{c.name}</div>
                <div className="text-xs text-muted-foreground mb-6">{c.desc}</div>
                <div className="flex items-end justify-between">
                  <span className="font-mono text-xl">{c.metric}</span>
                  <span className="font-mono text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition">
                    explore →
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

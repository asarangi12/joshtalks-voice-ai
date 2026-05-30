const products = [
  { id: "asr", code: "01 / ASR", name: "ASR Datasets", meta: "48,200 hrs", sub: "22 languages · channel-separated" },
  { id: "tts", code: "02 / TTS", name: "TTS Evals", meta: "1.4M utterances", sub: "naturalness · intelligibility" },
  { id: "voi", code: "03 / VOI", name: "Voice of India", meta: "22 languages", sub: "700+ dialects · 24 states" },
  { id: "h1", code: "04 / H1", name: "Human-1", meta: "92.1 acc", sub: "human preference benchmark" },
];

export function Hero() {
  return (
    <section className="relative border-b hairline">
      <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none [mask-image:linear-gradient(180deg,#000_0%,#000_50%,transparent_100%)]" />
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 pt-20 pb-20 lg:pt-28 lg:pb-28">
        <div className="flex items-center gap-3 mb-10 text-[12px] text-muted-foreground">
          <span className="inline-flex items-center gap-1.5 rounded-full border hairline bg-card px-2.5 py-1">
            <span className="size-1.5 rounded-full bg-ember" />
            <span className="text-foreground/80">Now serving 40+ AI labs</span>
          </span>
          <span className="hidden sm:inline">India-first voice infrastructure · est. 2018</span>
        </div>

        <h1 className="font-display font-medium text-foreground text-[clamp(2.75rem,8.4vw,7.75rem)] leading-[0.96] tracking-[-0.035em] text-balance max-w-[18ch]">
          Infrastructure for<br className="hidden sm:block" /> Voice AI in <span className="italic text-brand">India</span><span className="text-ember">.</span>
        </h1>

        <div className="mt-10 grid grid-cols-12 gap-6 items-end">
          <p className="col-span-12 md:col-span-7 lg:col-span-6 text-base lg:text-lg text-muted-foreground max-w-xl leading-relaxed">
            Research-grade datasets and evaluations for top AI labs and tech
            companies across the world — built on the ground, across{" "}
            <span className="text-foreground">22 languages</span> and{" "}
            <span className="text-foreground">700+ dialects</span>.
          </p>
          <div className="col-span-12 md:col-span-5 lg:col-span-6 flex md:justify-end items-end gap-3 flex-wrap">
            <button className="text-sm px-5 py-2.5 rounded-md bg-brand text-brand-foreground hover:bg-foreground transition">
              Request dataset access →
            </button>
            <button className="text-sm px-5 py-2.5 rounded-md border hairline bg-card hover:border-foreground/30 transition">
              Read whitepaper
            </button>
          </div>
        </div>

        {/* product bento */}
        <div className="mt-16 lg:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {products.map((p) => (
            <a
              key={p.id}
              href={`#${p.id}`}
              className="group relative rounded-xl border hairline bg-card p-6 hover:border-foreground/25 hover:shadow-[0_30px_60px_-30px_rgba(15,23,42,0.18)] transition"
            >
              <div className="flex items-center justify-between mb-10">
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{p.code}</span>
                <span className="size-1.5 rounded-full bg-ember opacity-0 group-hover:opacity-100 transition" />
              </div>
              <div className="font-display text-2xl tracking-tight">{p.name}</div>
              <div className="mt-1 text-[13px] text-muted-foreground">{p.sub}</div>
              <div className="mt-8 flex items-end justify-between">
                <span className="font-display text-xl text-brand">{p.meta}</span>
                <span className="text-[11px] text-muted-foreground group-hover:text-foreground transition">explore →</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

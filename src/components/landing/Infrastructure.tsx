import { Waveform } from "./Waveform";

const features = [
  { k: "01", t: "Multi-lingual Datasets", v: "22 / 700+", l: "languages / dialects", d: "Hindi, Tamil, Telugu, Bengali, Marathi, Punjabi, Kannada — natively recorded, not translated." },
  { k: "02", t: "Emotion-Rich Data", v: "11", l: "emotion classes", d: "Joy, anger, fatigue, frustration, surprise — annotated frame-level by native reviewers." },
  { k: "03", t: "Channel Separation", v: "2-ch", l: "speaker-isolated", d: "Agent / customer split for clean diarization, ASR fine-tuning and RLHF pipelines." },
  { k: "04", t: "Acoustic Diversity", v: "48kHz", l: "studio + field", d: "Studio, street, vehicle, call-center, indoor and outdoor — real-world SNR distribution." },
];

export function Infrastructure() {
  return (
    <section id="infra" className="border-b hairline">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-24 lg:py-32">
        <div className="grid grid-cols-12 gap-6 mb-16">
          <div className="col-span-12 lg:col-span-5">
            <div className="font-mono text-[11px] text-muted-foreground mb-4">[03] CORE_INFRASTRUCTURE</div>
            <h2 className="font-display text-4xl lg:text-6xl tracking-[-0.04em] leading-[0.95]">
              Channel-separated<br />
              conversational<br />
              <span className="text-muted-foreground">audio datasets.</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-6 lg:col-start-7 flex items-end">
            <p className="text-muted-foreground max-w-lg">
              The substrate that powers India-ready speech models — engineered
              for production loops, not academic snapshots. Sampled, annotated
              and evaluated by linguists across 24 states.
            </p>
          </div>
        </div>

        {/* large waveform strip */}
        <div className="rounded-md border hairline bg-surface/40 p-6 mb-6 flex items-center gap-6">
          <span className="font-mono text-[10px] text-muted-foreground">SAMPLE_01.wav</span>
          <div className="flex-1 flex items-center gap-[2px] h-12">
            {Array.from({ length: 120 }).map((_, i) => (
              <span
                key={i}
                className="wave-bar flex-1 bg-foreground/60 rounded-full"
                style={{
                  height: `${15 + (Math.sin(i * 0.4) * 0.5 + 0.5) * 85}%`,
                  animationDelay: `${(i * 30) % 1400}ms`,
                }}
              />
            ))}
          </div>
          <span className="font-mono text-[10px] text-muted-foreground hidden md:block">00:24.812 / 02:11.430</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border hairline rounded-md overflow-hidden">
          {features.map((f, i) => (
            <div
              key={f.k}
              className={`p-7 bg-surface/40 hover:bg-surface transition group ${
                i < 3 ? "lg:border-r" : ""
              } ${i < 2 ? "md:border-r lg:border-r" : ""} ${
                i < 2 ? "md:border-b lg:border-b-0" : ""
              } border-b hairline last:border-b-0 md:last:border-b-0`}
            >
              <div className="flex items-center justify-between mb-10">
                <span className="font-mono text-[10px] text-muted-foreground">{f.k}</span>
                <Waveform bars={6} className="h-3 opacity-60 group-hover:opacity-100" />
              </div>
              <div className="font-display text-4xl tracking-tight">{f.v}</div>
              <div className="font-mono text-[10px] text-muted-foreground mt-1 uppercase tracking-wider">{f.l}</div>
              <div className="font-display text-lg tracking-tight mt-6">{f.t}</div>
              <div className="text-xs text-muted-foreground mt-2 leading-relaxed">{f.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

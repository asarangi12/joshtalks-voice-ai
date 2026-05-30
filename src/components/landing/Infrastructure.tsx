import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "./Reveal";

const features = [
  {
    k: "01",
    tag: "Multi-lingual",
    t: "Multi-lingual Datasets",
    d: "Natively recorded conversations across 22 Indian languages with frequent code-switching between English, Hindi and regional tongues — captured the way India actually speaks.",
    stats: [
      { l: "Languages", v: "22" },
      { l: "Code-switch", v: "37%" },
      { l: "Dialects", v: "700+" },
    ],
  },
  {
    k: "02",
    tag: "Multi-Speaker",
    t: "Multi-Speaker Datasets",
    d: "Spontaneous conversations, panel debates and multi-party meetings with clean channel separation — ideal for diarization, RLHF pipelines and agent/customer modelling.",
    stats: [
      { l: "Speakers / session", v: "2–8" },
      { l: "Avg. turns", v: "112" },
      { l: "Channel split", v: "2-ch" },
    ],
  },
  {
    k: "03",
    tag: "Emotion-Rich",
    t: "Emotion Rich Data",
    d: "Frame-level annotations across 9 distinct emotional states — including joy, anger, fatigue, frustration and surprise — labelled by native reviewers in real conversational context.",
    stats: [
      { l: "Emotion classes", v: "9" },
      { l: "Annotator agreement κ", v: "0.81" },
      { l: "Hours labelled", v: "12.4k" },
    ],
  },
  {
    k: "04",
    tag: "Specialized",
    t: "Specialized Datasets",
    d: "Privacy-preserving voice, child speech corpora, and adverse-environment recordings — street, vehicle, call-center and outdoor — built for the long-tail your model will actually meet.",
    stats: [
      { l: "Child speech (hrs)", v: "1,200" },
      { l: "Adverse SNR", v: "–5 to 25dB" },
      { l: "Privacy mode", v: "on-device" },
    ],
  },
];

export function Infrastructure() {
  const [active, setActive] = useState<string>("01");

  return (
    <section id="datasets" className="border-b hairline bg-surface/60">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-24 lg:py-32">
        <div className="grid grid-cols-12 gap-6 mb-14">
          <Reveal className="col-span-12 lg:col-span-7">
            <div className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground mb-4 uppercase">[ 04 ] — Datasets</div>
            <h2 className="font-display font-medium text-[clamp(2rem,5vw,4.25rem)] leading-[1.02] tracking-[-0.03em] text-balance">
              Channel-separated <span className="italic text-brand">conversational</span> audio.
            </h2>
          </Reveal>
          <Reveal className="col-span-12 lg:col-span-4 lg:col-start-9 self-end" delay={1}>
            <p className="text-muted-foreground leading-relaxed">
              The substrate that powers India-ready speech models — sampled, annotated
              and evaluated by linguists across 24 states.
            </p>
          </Reveal>
        </div>

        {/* Tab switcher */}
        <Reveal>
          <div className="flex flex-wrap gap-2 mb-8 border hairline bg-card rounded-full p-1.5 w-fit">
            {features.map((f) => (
              <button
                key={f.k}
                onClick={() => setActive(f.k)}
                className={`tab-underline relative text-sm px-4 py-2 rounded-full transition-colors duration-300 ${
                  active === f.k ? "text-brand-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {active === f.k && (
                  <motion.span
                    layoutId="tab-pill"
                    className="absolute inset-0 bg-brand rounded-full"
                    transition={{ type: "spring", stiffness: 320, damping: 28 }}
                  />
                )}
                <span className="relative font-mono text-[10px] tracking-[0.18em] uppercase mr-2 opacity-70">{f.k}</span>
                <span className="relative">{f.tag}</span>
              </button>

            ))}
          </div>
        </Reveal>

        {/* Active feature panel */}
        <div className="border hairline rounded-2xl bg-card overflow-hidden">
          <AnimatePresence mode="wait">
            {features.filter((f) => f.k === active).map((f) => (
              <motion.div
                key={f.k}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="grid grid-cols-12 gap-6 lg:gap-10 p-8 lg:p-12"
              >
                <div className="col-span-12 lg:col-span-5 flex flex-col">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="font-mono text-[10px] tracking-[0.18em] text-muted-foreground uppercase">{f.k}</span>
                    <span className="text-[11px] px-2 py-0.5 rounded-full border hairline bg-surface text-foreground/70">{f.tag}</span>
                  </div>
                  <h3 className="font-display text-3xl lg:text-5xl tracking-[-0.03em] leading-[1.02]">{f.t}</h3>
                  <p className="mt-5 text-[15px] text-muted-foreground leading-relaxed max-w-md">{f.d}</p>
                  <a href="#" className="mt-6 text-sm text-brand hover:text-ember transition-colors duration-300 inline-flex items-center gap-1.5 group w-fit">
                    Explore dataset
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </a>
                </div>
                <div className="col-span-12 lg:col-span-6 lg:col-start-7 grid grid-cols-3 gap-px bg-border rounded-xl overflow-hidden border hairline">
                  {f.stats.map((s, i) => {
                    const dirs = [
                      { x: -20, y: 0 },
                      { x: 0, y: 20 },
                      { x: 20, y: 0 },
                    ];
                    const d = dirs[i % dirs.length];
                    return (
                      <motion.div
                        key={s.l}
                        initial={{ opacity: 0, x: d.x, y: d.y, filter: "blur(6px)" }}
                        animate={{ opacity: 1, x: 0, y: 0, filter: "blur(0px)" }}
                        exit={{ opacity: 0, x: -d.x, y: -d.y, filter: "blur(6px)" }}
                        transition={{ duration: 0.55, delay: 0.15 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                        className="bg-card p-5 lg:p-7 flex flex-col justify-between min-h-[140px]"
                      >
                        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{s.l}</span>
                        <span className="font-display text-2xl lg:text-4xl tracking-[-0.03em] text-foreground mt-6">{s.v}</span>
                      </motion.div>
                    );
                  })}

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

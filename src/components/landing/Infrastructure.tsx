import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "./Reveal";

type Visual = "lang" | "multi" | "emotion" | "special";

type Feature = {
  k: string;
  tag: string;
  t: string;
  d: string;
  footnote?: { label: string; items: string[] };
  visual: Visual;
};

const features: Feature[] = [
  {
    k: "01",
    tag: "Multi-lingual",
    t: "Multi-lingual Datasets",
    d: "Multilingual and code-switching Voice Datasets. Low Resource, Rare Language and Dialect Voice Datasets. Accented English Speech Dataset.",
    footnote: {
      label: "Available in",
      items: [
        "English","Hindi","Tamil","Marathi","Telugu","Bangla",
        "Kannada","Malayalam","Punjabi","Oriya","Gujarati","Assamese",
      ],
    },
    visual: "lang",
  },
  {
    k: "02",
    tag: "Multi-Speaker",
    t: "Multi-Speaker Datasets",
    d: "Multiple Speaker spontaneous conversations. Diarized speaker stems for up to 16 speakers. Includes premium multi-speaker debate datasets.",
    visual: "multi",
  },
  {
    k: "03",
    tag: "Emotion-Rich",
    t: "Emotion Rich Data",
    d: "Emotionally Aware and Annotated Conversations covering 9 distinct human emotional states.",
    footnote: {
      label: "Annotated States",
      items: ["Neutral","Angry","Happy","Sad","Fear","Anxious","Surprised","Confused","Excited"],
    },
    visual: "emotion",
  },
  {
    k: "04",
    tag: "Specialized",
    t: "Specialized Datasets",
    d: "Noisy and Adverse Environment Datasets. Privacy Preserving Highly Personalized Voice Datasets. Tailored Voice Datasets for Accessibility and Child Speech Corpora.",
    visual: "special",
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
              Train your AI models using data from the grassroots of India through Josh Talks’ network of Training Data Specialists.
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
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="grid grid-cols-12 gap-6 lg:gap-10 p-8 lg:p-12"
              >
                <div className="col-span-12 lg:col-span-5 flex flex-col">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="font-mono text-[10px] tracking-[0.18em] text-muted-foreground uppercase">{f.k}</span>
                    <span className="text-[11px] px-2 py-0.5 rounded-full border hairline bg-surface text-foreground/70">{f.tag}</span>
                  </div>
                  <h3 className="font-display text-3xl lg:text-5xl tracking-[-0.03em] leading-[1.02]">{f.t}</h3>
                  <p className="mt-5 text-[15px] text-muted-foreground leading-relaxed max-w-md">{f.d}</p>

                  {f.footnote && (
                    <div className="mt-7 max-w-md">
                      <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-muted-foreground mb-2.5">
                        {f.footnote.label}
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {f.footnote.items.map((it) => (
                          <span
                            key={it}
                            className="text-[11px] px-2.5 py-1 rounded-full border hairline bg-surface text-foreground/75"
                          >
                            {it}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <a href="#" className="mt-7 text-sm text-brand hover:text-ember transition-colors duration-300 inline-flex items-center gap-1.5 group w-fit">
                    Explore dataset
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </a>
                </div>

                <div className="col-span-12 lg:col-span-6 lg:col-start-7">
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.5, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <VisualCanvas type={f.visual} />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

/* ------------------------- Visual Canvas ------------------------- */

function CanvasShell({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="relative rounded-xl border hairline bg-surface overflow-hidden min-h-[320px]">
      <div className="flex items-center justify-between px-4 pt-3.5">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-ember" />
          <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground">
            Dataset Inspector
          </span>
        </div>
        <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-muted-foreground/70">
          {label}
        </span>
      </div>
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="relative p-5 pt-4">{children}</div>
    </div>
  );
}

function VisualCanvas({ type }: { type: Visual }) {
  if (type === "lang") return <LangCanvas />;
  if (type === "multi") return <MultiSpeakerCanvas />;
  if (type === "emotion") return <EmotionCanvas />;
  return <SpecializedCanvas />;
}

/* 1. Multi-lingual — scattering language pills */
function LangCanvas() {
  const langs = [
    "English","Hindi","Tamil","Marathi","Telugu","Bangla","Kannada",
    "Malayalam","Punjabi","Oriya","Gujarati","Assamese",
    "Hinglish","Bhojpuri","Awadhi","Rajasthani",
  ];
  return (
    <CanvasShell label="LANG · 22 + dialects">
      <div className="flex flex-wrap gap-2 py-4">
        {langs.map((l, i) => (
          <motion.span
            key={l}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.025, duration: 0.4 }}
            whileHover={{
              x: (i % 5 - 2) * 6,
              y: (i % 3 - 1) * 5,
              scale: 1.06,
              rotate: (i % 2 ? 1 : -1) * 2,
            }}
            className="cursor-default px-3 py-1.5 rounded-full border hairline bg-card text-[12px] text-foreground/85 hover:border-brand/50 hover:text-brand transition-colors"
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-between font-mono text-[10px] tracking-[0.18em] uppercase text-muted-foreground">
        <span>code-switch · 37%</span>
        <span>accented EN · ✓</span>
      </div>
    </CanvasShell>
  );
}

/* 2. Multi-Speaker — 4 colored waveform tracks */
function MultiSpeakerCanvas() {
  const tracks = [
    { color: "var(--brand)", phase: 0.0, amp: 18 },
    { color: "var(--ember)", phase: 1.1, amp: 22 },
    { color: "#3b82f6", phase: 2.0, amp: 16 },
    { color: "#a855f7", phase: 0.6, amp: 20 },
  ];
  const N = 48;
  return (
    <CanvasShell label="DIAR · up to 16 stems">
      <div className="space-y-2.5 py-2">
        {tracks.map((t, ti) => (
          <div key={ti} className="flex items-center gap-3">
            <span
              className="font-mono text-[9px] tracking-[0.18em] uppercase w-12"
              style={{ color: t.color }}
            >
              SPK {String.fromCharCode(65 + ti)}
            </span>
            <div className="flex-1 h-9 flex items-center gap-[2px]">
              {Array.from({ length: N }).map((_, i) => {
                const h =
                  0.35 +
                  0.55 *
                    Math.abs(
                      Math.sin(i * 0.4 + t.phase) * 0.7 +
                        Math.cos(i * 0.18 + t.phase * 1.4) * 0.3,
                    );
                return (
                  <motion.span
                    key={i}
                    initial={{ scaleY: 0.3, opacity: 0 }}
                    animate={{
                      scaleY: [0.4, h, 0.5, h * 0.85, 0.4],
                      opacity: 1,
                    }}
                    transition={{
                      duration: 2 + (i % 5) * 0.2,
                      repeat: Infinity,
                      delay: i * 0.02 + ti * 0.15,
                      ease: "easeInOut",
                    }}
                    className="flex-1 rounded-[1px] origin-center"
                    style={{
                      height: `${t.amp * 1.4}px`,
                      background: t.color,
                      opacity: 0.85,
                    }}
                  />
                );
              })}
            </div>
            <span className="font-mono text-[9px] text-muted-foreground w-10 text-right">
              {(0.5 + ti * 0.18).toFixed(2)}s
            </span>
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center justify-between font-mono text-[10px] tracking-[0.18em] uppercase text-muted-foreground">
        <span>channel-separated</span>
        <span>debate · panel · meeting</span>
      </div>
    </CanvasShell>
  );
}

/* 3. Emotion — 3x3 matrix with glow on hover */
function EmotionCanvas() {
  const emotions = ["Neutral","Angry","Happy","Sad","Fear","Anxious","Surprised","Confused","Excited"];
  return (
    <CanvasShell label="EMO · 9 classes · κ 0.81">
      <div className="grid grid-cols-3 gap-2 py-2">
        {emotions.map((e, i) => (
          <motion.div
            key={e}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.04, duration: 0.4 }}
            whileHover={{ y: -2 }}
            className="group relative aspect-[2/1] rounded-lg border hairline bg-card flex items-center justify-center cursor-default overflow-hidden transition-colors hover:border-brand/0"
          >
            <span className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background:
                  "radial-gradient(120% 80% at 50% 50%, color-mix(in oklab, var(--ember) 28%, transparent), transparent 70%)",
              }}
            />
            <span className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                boxShadow:
                  "0 0 0 1px color-mix(in oklab, var(--ember) 55%, transparent), 0 10px 30px -10px color-mix(in oklab, var(--ember) 35%, transparent)",
              }}
            />
            <span className="relative text-[13px] font-medium text-foreground/85 group-hover:text-foreground transition-colors">
              {e}
            </span>
            <span className="absolute top-1.5 left-2 font-mono text-[9px] tracking-[0.18em] uppercase text-muted-foreground/70">
              0{i + 1}
            </span>
          </motion.div>
        ))}
      </div>
      <div className="mt-3 flex items-center justify-between font-mono text-[10px] tracking-[0.18em] uppercase text-muted-foreground">
        <span>frame-level · native-reviewed</span>
        <span>12.4k hrs labelled</span>
      </div>
    </CanvasShell>
  );
}

/* 4. Specialized — privacy mask / noise gate curve */
function SpecializedCanvas() {
  const N = 64;
  const raw = Array.from({ length: N }, (_, i) => {
    const noise = Math.sin(i * 1.7) * 0.4 + (Math.random() - 0.5) * 0.6;
    const signal = Math.sin(i * 0.35) * 0.7;
    return signal + noise;
  });
  const filtered = raw.map((v) => (Math.abs(v) < 0.55 ? v * 0.15 : v * 0.85));
  const toPath = (arr: number[]) =>
    "M0,60 " +
    arr
      .map((v, i) => {
        const x = (i / (N - 1)) * 320;
        const y = 60 - v * 35;
        return `L${x.toFixed(1)},${y.toFixed(1)}`;
      })
      .join(" ");

  // privacy mask blocks
  const masks = [
    { x: 40, w: 36 },
    { x: 138, w: 28 },
    { x: 224, w: 44 },
  ];

  return (
    <CanvasShell label="PRIV · NOISE · ADVERSE">
      <div className="relative">
        <svg viewBox="0 0 320 120" className="w-full h-[180px]">
          <defs>
            <linearGradient id="gateFill" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="var(--brand)" stopOpacity="0.35" />
              <stop offset="100%" stopColor="var(--brand)" stopOpacity="0" />
            </linearGradient>
            <pattern id="hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <line x1="0" y1="0" x2="0" y2="6" stroke="var(--ember)" strokeWidth="1" opacity="0.35" />
            </pattern>
          </defs>

          {/* noise gate threshold band */}
          <rect x="0" y="42" width="320" height="36" fill="url(#gateFill)" opacity="0.5" />
          <line x1="0" y1="42" x2="320" y2="42" stroke="var(--brand)" strokeDasharray="3 4" strokeWidth="0.8" opacity="0.6" />
          <line x1="0" y1="78" x2="320" y2="78" stroke="var(--brand)" strokeDasharray="3 4" strokeWidth="0.8" opacity="0.6" />

          {/* raw noisy signal */}
          <motion.path
            d={toPath(raw)}
            stroke="currentColor"
            className="text-muted-foreground"
            strokeWidth="0.8"
            fill="none"
            opacity="0.45"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
          />
          {/* filtered signal */}
          <motion.path
            d={toPath(filtered)}
            stroke="var(--ember)"
            strokeWidth="1.4"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          />

          {/* privacy masks */}
          {masks.map((m, i) => (
            <motion.g
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 + i * 0.15 }}
            >
              <rect x={m.x} y="20" width={m.w} height="80" fill="url(#hatch)" />
              <rect x={m.x} y="20" width={m.w} height="80" fill="none" stroke="var(--ember)" strokeWidth="0.6" opacity="0.55" />
              <text x={m.x + m.w / 2} y="16" textAnchor="middle" fontSize="6.5" className="font-mono fill-current" style={{ color: "var(--ember)" }} fill="var(--ember)">
                MASK
              </text>
            </motion.g>
          ))}

          <text x="6" y="112" fontSize="7" className="font-mono" fill="currentColor" opacity="0.5">
            SNR −5 to 25 dB
          </text>
          <text x="314" y="112" fontSize="7" textAnchor="end" className="font-mono" fill="currentColor" opacity="0.5">
            on-device redaction
          </text>
        </svg>
      </div>
      <div className="mt-2 grid grid-cols-3 gap-2 font-mono text-[10px] tracking-[0.16em] uppercase">
        <div className="px-2 py-1.5 rounded border hairline bg-card text-foreground/70">Street · Vehicle</div>
        <div className="px-2 py-1.5 rounded border hairline bg-card text-foreground/70">Child Speech</div>
        <div className="px-2 py-1.5 rounded border hairline bg-card text-foreground/70">Accessibility</div>
      </div>
    </CanvasShell>
  );
}

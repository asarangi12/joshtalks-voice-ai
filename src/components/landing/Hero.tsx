import { motion } from "framer-motion";
import { Stagger, itemVariants } from "./Reveal";
import { ParticleField } from "./ParticleField";


type Visual = "waves" | "pulse" | "map" | "duplex";

const products: Array<{
  id: string;
  code: string;
  name: string;
  sub: string;
  accent: string;
  visual: Visual;
}> = [
  {
    id: "asr",
    code: "01 / ASR",
    name: "ASR Datasets",
    sub: "Channel-separated conversational audio datasets. Improve model performance with our off-the-shelf, production-ready corpora.",
    accent: "from-brand/15 via-brand/5 to-transparent",
    visual: "waves",
  },
  {
    id: "tts",
    code: "02 / TTS",
    name: "TTS Evals",
    sub: "Human evaluations for Voice AI & TTS. Plug into your training and release pipelines — results in hours, not weeks.",
    accent: "from-ember/20 via-ember/5 to-transparent",
    visual: "pulse",
  },
  {
    id: "voi",
    code: "03 / VOI",
    name: "Voice of India",
    sub: "India's national reference benchmark for speech recognition — built at national scale, scored with linguistic fidelity, measured for real-world deployment readiness.",
    accent: "from-brand/15 via-ember/10 to-transparent",
    visual: "map",
  },
  {
    id: "h1",
    code: "04 / H1",
    name: "Human-1",
    sub: "A full-duplex conversational speech model for Hindi — trained on 26,000 hours of spontaneous conversations from 14,695 speakers.",
    accent: "from-ember/15 via-brand/5 to-transparent",
    visual: "duplex",
  },
];

function CardVisual({ kind }: { kind: Visual }) {
  if (kind === "waves") {
    return (
      <svg viewBox="0 0 120 40" className="w-full h-10 overflow-visible">
        {Array.from({ length: 24 }).map((_, i) => {
          const h = 6 + Math.abs(Math.sin(i * 0.9)) * 26;
          return (
            <rect
              key={i}
              x={i * 5}
              y={20 - h / 2}
              width="2"
              height={h}
              rx="1"
              className="fill-brand/70 wave-bar"
              style={{ animationDelay: `${i * 0.06}s`, transformOrigin: "center" }}
            />
          );
        })}
      </svg>
    );
  }
  if (kind === "pulse") {
    return (
      <svg viewBox="0 0 120 40" className="w-full h-10">
        <path
          d="M0 20 L18 20 L24 8 L32 32 L40 14 L48 26 L56 20 L120 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-ember"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle r="2.5" className="fill-ember">
          <animateMotion
            dur="3.2s"
            repeatCount="indefinite"
            path="M0 20 L18 20 L24 8 L32 32 L40 14 L48 26 L56 20 L120 20"
          />
        </circle>
      </svg>
    );
  }
  if (kind === "map") {
    return (
      <div className="relative w-full h-10">
        <div className="absolute inset-0 grid grid-cols-12 gap-[3px]">
          {Array.from({ length: 60 }).map((_, i) => (
            <span
              key={i}
              className="size-[3px] rounded-full bg-brand/50"
              style={{
                opacity: 0.3 + ((i * 37) % 70) / 100,
                animation: `wave-pulse ${1.6 + (i % 5) * 0.3}s ease-in-out ${(i % 7) * 0.15}s infinite`,
              }}
            />
          ))}
        </div>
      </div>
    );
  }
  // duplex
  return (
    <div className="w-full h-10 flex flex-col justify-center gap-1.5">
      <div className="flex items-center gap-2">
        <span className="font-mono text-[9px] text-muted-foreground w-3">A</span>
        <div className="flex-1 h-1.5 rounded-full bg-border overflow-hidden">
          <div className="h-full w-3/4 bg-brand rounded-full origin-left" style={{ animation: "wave-pulse 2s ease-in-out infinite" }} />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="font-mono text-[9px] text-muted-foreground w-3">B</span>
        <div className="flex-1 h-1.5 rounded-full bg-border overflow-hidden">
          <div className="h-full w-2/3 bg-ember rounded-full origin-left" style={{ animation: "wave-pulse 2s ease-in-out 0.6s infinite" }} />
        </div>
      </div>
    </div>
  );
}

const headlineWords = ["Infrastructure", "for", "Voice", "AI", "in"];

export function Hero() {
  return (
    <section className="relative border-b hairline overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none [mask-image:linear-gradient(180deg,#000_0%,#000_50%,transparent_100%)]" />
      <ParticleField className="opacity-[0.55] [mask-image:linear-gradient(180deg,#000_0%,#000_60%,transparent_100%)]" />
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 pt-20 pb-20 lg:pt-28 lg:pb-28">

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-3 mb-10 text-[12px] text-muted-foreground"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full border hairline bg-card px-2.5 py-1 ember-pulse">
            <span className="relative flex size-1.5">
              <span className="absolute inset-0 rounded-full bg-ember animate-ping opacity-60" />
              <span className="relative size-1.5 rounded-full bg-ember" />
            </span>
            <span className="text-foreground/80">Now serving 40+ AI labs</span>
          </span>

          <span className="hidden sm:inline">India-first voice infrastructure · est. 2018</span>
        </motion.div>

        <h1 className="font-display font-medium text-foreground text-[clamp(2.75rem,8.4vw,7.75rem)] leading-[0.96] tracking-[-0.035em] text-balance max-w-[18ch]">
          {headlineWords.map((w, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.1 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block mr-[0.25em]"
            >
              {w}
            </motion.span>
          ))}
          <br className="hidden sm:block" />
          <motion.span
            initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="inline-block"
          >
            <span className="italic text-brand">India</span>
            <span className="text-ember">.</span>
          </motion.span>
        </h1>

        <div className="mt-10 grid grid-cols-12 gap-6 items-end">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-12 md:col-span-7 lg:col-span-6 text-base lg:text-lg text-muted-foreground max-w-xl leading-relaxed"
          >
            Research-grade datasets and evaluations for top AI labs and tech
            companies across the world — built on the ground, across{" "}
            <span className="text-foreground">22 languages</span> and{" "}
            <span className="text-foreground">700+ dialects</span>.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-12 md:col-span-5 lg:col-span-6 flex md:justify-end items-end gap-3 flex-wrap"
          >
            <button className="btn-lift text-sm px-5 py-2.5 rounded-md bg-brand text-brand-foreground hover:bg-foreground">
              Request dataset access →
            </button>
            <button className="btn-lift text-sm px-5 py-2.5 rounded-md border hairline bg-card hover:border-foreground/30 hover:bg-surface">
              Read whitepaper
            </button>

          </motion.div>
        </div>

        {/* product bento */}
        <Stagger className="mt-16 lg:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3" delayChildren={0.9} stagger={0.09}>
          {products.map((p) => (
            <motion.a
              key={p.id}
              href={`#${p.id}`}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="group relative rounded-xl border hairline bg-card p-6 hover:border-brand/30 hover:shadow-[0_30px_60px_-30px_rgba(15,23,42,0.22)] transition-[border-color,box-shadow] duration-300"
            >
              <div className="flex items-center justify-between mb-10">
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{p.code}</span>
                <span className="size-1.5 rounded-full bg-ember opacity-0 group-hover:opacity-100 transition" />
              </div>
              <div className="font-display text-2xl tracking-tight">{p.name}</div>
              <div className="mt-1 text-[13px] text-muted-foreground">{p.sub}</div>
              <div className="mt-8 flex items-end justify-between">
                <span className="font-display text-xl text-brand">{p.meta}</span>
                <span className="text-[11px] text-muted-foreground group-hover:text-ember transition-colors duration-300">explore →</span>
              </div>
              <span className="pointer-events-none absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </motion.a>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

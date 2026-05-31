import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Pill = "code" | "dialect" | "diar";

const TAGS = [
  { at: 18, label: "Code-Switching Detected" },
  { at: 48, label: "Ambient Noise Filtered" },
  { at: 78, label: "Dialect Shift — Urban North India" },
];

// Hinglish token stream
const TOKENS: { t: string; mix?: "en" | "hi" }[] = [
  { t: "मुझे", mix: "hi" },
  { t: "ek", mix: "en" },
  { t: "meeting", mix: "en" },
  { t: "schedule", mix: "en" },
  { t: "करनी", mix: "hi" },
  { t: "है", mix: "hi" },
  { t: "tomorrow", mix: "en" },
  { t: "morning", mix: "en" },
  { t: "को", mix: "hi" },
];

export function DiversityEngine() {
  const [hoverX, setHoverX] = useState<number | null>(null);
  const [pill, setPill] = useState<Pill>("code");
  const wavRef = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const r = wavRef.current?.getBoundingClientRect();
    if (!r) return;
    setHoverX(Math.max(0, Math.min(100, ((e.clientX - r.left) / r.width) * 100)));
  };

  const activeTag =
    hoverX === null
      ? null
      : [...TAGS].reverse().find((t) => hoverX >= t.at - 10) ?? TAGS[0];

  // 60 deterministic bar heights
  const bars = Array.from({ length: 64 }, (_, i) => {
    const v =
      0.35 +
      0.55 *
        Math.abs(
          Math.sin(i * 0.55) * 0.6 +
            Math.sin(i * 0.21 + 1.3) * 0.4 +
            Math.sin(i * 1.1) * 0.18,
        );
    return Math.min(1, v);
  });

  return (
    <div className="relative rounded-2xl border hairline bg-[#0B0B0F] text-white/90 overflow-hidden shadow-[0_30px_80px_-40px_rgba(15,23,42,0.45)]">
      {/* grid texture */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />
      {/* header */}
      <div className="relative flex items-center justify-between px-5 pt-5">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inset-0 rounded-full bg-ember animate-ping opacity-70" />
            <span className="relative rounded-full h-1.5 w-1.5 bg-ember" />
          </span>
          <span className="font-mono text-[10px] tracking-[0.22em] text-white/55 uppercase">
            Linguistic Diversity Processing Engine
          </span>
        </div>
        <span className="font-mono text-[10px] text-white/35">v0.42 · live</span>
      </div>

      {/* token stream */}
      <div className="relative px-5 pt-5">
        <div className="font-mono text-[10px] tracking-[0.18em] text-white/40 mb-2 uppercase">
          stream — hi-EN code-switch
        </div>
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5 font-display text-[17px] leading-snug">
          {TOKENS.map((tok, i) => {
            const highlightMix = pill === "code";
            const isHi = tok.mix === "hi";
            return (
              <span key={i} className="relative">
                <span
                  className={`transition-colors duration-500 ${
                    highlightMix
                      ? isHi
                        ? "text-ember"
                        : "text-white"
                      : "text-white/85"
                  }`}
                >
                  {tok.t}
                </span>
                {highlightMix && (
                  <motion.span
                    layoutId={`tok-${i}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className={`absolute -inset-x-1 -inset-y-0.5 -z-0 rounded-sm ${
                      isHi ? "bg-ember/15" : "bg-white/5"
                    }`}
                  />
                )}
              </span>
            );
          })}
          <span className="cursor-blink text-white/70 ml-1">▍</span>
        </div>
      </div>

      {/* waveform */}
      <div className="relative px-5 pt-6">
        <div className="flex items-center justify-between font-mono text-[10px] tracking-[0.18em] text-white/40 uppercase mb-2">
          <span>waveform · 00:12 / 00:30</span>
          <span>{activeTag ? activeTag.label : "hover to scrub"}</span>
        </div>
        <div
          ref={wavRef}
          onMouseMove={onMove}
          onMouseLeave={() => setHoverX(null)}
          className="relative h-20 flex items-center gap-[2px] cursor-crosshair"
        >
          {bars.map((h, i) => {
            const pct = (i / bars.length) * 100;
            const passed = hoverX !== null && pct <= hoverX;
            return (
              <div
                key={i}
                className="flex-1 rounded-[1px] transition-colors duration-200"
                style={{
                  height: `${h * 100}%`,
                  background: passed
                    ? "var(--ember)"
                    : "rgba(255,255,255,0.28)",
                }}
              />
            );
          })}
          <AnimatePresence>
            {hoverX !== null && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute top-0 bottom-0 w-px bg-ember pointer-events-none"
                style={{ left: `${hoverX}%` }}
              >
                <span className="absolute -top-5 -translate-x-1/2 font-mono text-[9px] text-ember whitespace-nowrap">
                  {String(Math.floor((hoverX / 100) * 30)).padStart(2, "0")}.
                  {String(Math.floor((hoverX * 3) % 100)).padStart(2, "0")}s
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* context tag rail */}
        <div className="mt-3 grid grid-cols-3 gap-2">
          {TAGS.map((t) => {
            const active = activeTag?.label === t.label;
            return (
              <div
                key={t.label}
                className={`font-mono text-[9.5px] tracking-[0.14em] uppercase px-2 py-1.5 rounded border transition-all duration-300 ${
                  active
                    ? "border-ember/60 text-ember bg-ember/[0.06]"
                    : "border-white/10 text-white/40"
                }`}
              >
                {t.label}
              </div>
            );
          })}
        </div>
      </div>

      {/* pill filters + viz panel */}
      <div className="relative px-5 pt-6 pb-5">
        <div className="flex flex-wrap gap-1.5 mb-3">
          {(
            [
              { id: "code", label: "Code-Switching (Hinglish)" },
              { id: "dialect", label: "700+ Dialect Models" },
              { id: "diar", label: "Multi-Speaker Diarization" },
            ] as { id: Pill; label: string }[]
          ).map((p) => {
            const active = pill === p.id;
            return (
              <button
                key={p.id}
                onClick={() => setPill(p.id)}
                className={`font-mono text-[10px] tracking-[0.14em] uppercase px-3 py-1.5 rounded-full border transition-all duration-300 ${
                  active
                    ? "border-ember/70 text-ember bg-ember/[0.08]"
                    : "border-white/12 text-white/55 hover:text-white hover:border-white/25"
                }`}
              >
                {p.label}
              </button>
            );
          })}
        </div>

        <div className="relative h-32 rounded-lg border border-white/8 bg-white/[0.02] overflow-hidden">
          <AnimatePresence mode="wait">
            {pill === "code" && (
              <motion.div
                key="code"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 p-4 flex flex-wrap gap-1.5 content-center font-mono text-[11px]"
              >
                {TOKENS.map((t, i) => (
                  <span
                    key={i}
                    className={`px-1.5 py-0.5 rounded ${
                      t.mix === "hi"
                        ? "bg-ember/20 text-ember"
                        : "bg-white/10 text-white/85"
                    }`}
                  >
                    {t.t}
                    <span className="opacity-50 ml-1">[{t.mix}]</span>
                  </span>
                ))}
              </motion.div>
            )}

            {pill === "dialect" && (
              <motion.svg
                key="dialect"
                viewBox="0 0 320 128"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 w-full h-full"
              >
                {[
                  [60, 40], [110, 80], [160, 35], [205, 90], [250, 50], [285, 95], [40, 90], [140, 105], [225, 25],
                ].map(([x, y], i, arr) => (
                  <g key={i}>
                    {arr.slice(i + 1, i + 3).map(([x2, y2], j) => (
                      <motion.line
                        key={j}
                        x1={x} y1={y} x2={x2} y2={y2}
                        stroke="rgba(255,255,255,0.18)"
                        strokeWidth="0.6"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.8, delay: 0.05 * i }}
                      />
                    ))}
                    <motion.circle
                      cx={x} cy={y} r={i % 3 === 0 ? 3 : 2}
                      fill={i % 3 === 0 ? "var(--ember)" : "rgba(255,255,255,0.7)"}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.04 * i }}
                    />
                  </g>
                ))}
                <text x="10" y="120" className="font-mono" fontSize="7" fill="rgba(255,255,255,0.4)">
                  712 NODES · 22 LANG · 24 STATES
                </text>
              </motion.svg>
            )}

            {pill === "diar" && (
              <motion.svg
                key="diar"
                viewBox="0 0 320 128"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 w-full h-full"
              >
                <motion.path
                  d={"M0,64 " + Array.from({ length: 32 }, (_, i) => {
                    const x = (i + 1) * 10;
                    const y = 64 - Math.sin(i * 0.7) * 22 - (i % 4 === 0 ? 6 : 0);
                    return `L${x},${y}`;
                  }).join(" ")}
                  stroke="var(--ember)"
                  strokeWidth="1.3"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
                <motion.path
                  d={"M0,64 " + Array.from({ length: 32 }, (_, i) => {
                    const x = (i + 1) * 10;
                    const y = 64 + Math.cos(i * 0.55 + 1) * 24 + (i % 3 === 0 ? 4 : 0);
                    return `L${x},${y}`;
                  }).join(" ")}
                  stroke="rgba(255,255,255,0.75)"
                  strokeWidth="1.3"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.15, ease: "easeOut" }}
                />
                <line x1="0" y1="64" x2="320" y2="64" stroke="rgba(255,255,255,0.12)" strokeDasharray="2 4" />
                <text x="10" y="14" fontSize="8" className="font-mono" fill="var(--ember)">SPEAKER A</text>
                <text x="10" y="122" fontSize="8" className="font-mono" fill="rgba(255,255,255,0.7)">SPEAKER B</text>
              </motion.svg>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

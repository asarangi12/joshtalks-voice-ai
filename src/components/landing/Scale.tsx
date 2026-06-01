import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

export function Scale() {
  return (
    <section id="scale" className="border-b hairline bg-background">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-24 lg:py-32">
        <div className="grid grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left column */}
          <Reveal className="col-span-12 lg:col-span-6">
            <div className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground mb-6 uppercase">
              [ 05 ] — Scale &amp; Logistics
            </div>
            <h2 className="font-display font-medium text-[clamp(2rem,5vw,4.5rem)] leading-[1.02] tracking-[-0.035em] text-balance">
              From Data Scarcity <br />
              to <span className="italic text-brand">Abundance</span>.
            </h2>
            <p className="mt-8 text-base lg:text-lg text-muted-foreground leading-[1.75] max-w-xl">
              Our patented means of data production and annotation allows us to
              generate and label{" "}
              <span className="text-foreground font-medium">
                10 Million Hours of voice data every year
              </span>
              , systematically solving the data bottleneck for frontier AI
              models.
            </p>
          </Reveal>

          {/* Right column — technical callout */}
          <motion.div
            initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-12 lg:col-span-6"
          >
            <div className="relative rounded-2xl border hairline bg-card overflow-hidden shadow-[0_30px_80px_-40px_rgba(15,23,42,0.18)]">
              {/* corner crosshair */}
              <span aria-hidden className="absolute top-3 right-3 size-3 opacity-50">
                <span className="absolute top-0 right-0 w-full h-px bg-foreground/60" />
                <span className="absolute top-0 right-0 h-full w-px bg-foreground/60" />
              </span>
              <span
                aria-hidden
                className="absolute inset-0 opacity-[0.045] pointer-events-none"
                style={{
                  backgroundImage:
                    "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                }}
              />

              {/* Top half — metric */}
              <div className="relative p-8 lg:p-10">
                <div className="flex items-center gap-2 mb-5">
                  <span className="size-1.5 rounded-full bg-ember animate-pulse" />
                  <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground">
                    Annual Throughput
                  </span>
                </div>
                <div className="flex items-baseline gap-3 flex-wrap">
                  <span className="font-display font-medium text-[clamp(2.75rem,6vw,5rem)] leading-none tracking-[-0.04em] text-foreground">
                    10M
                  </span>
                  <span className="font-display text-2xl lg:text-3xl tracking-tight text-foreground/70">
                    Hours / Year
                  </span>
                </div>
                <div className="mt-3 text-sm text-muted-foreground">
                  Patented High-Throughput Pipeline
                </div>

                {/* mini capacity bar */}
                <div className="mt-6 h-1 w-full rounded-full bg-border overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "92%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.4, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full bg-gradient-to-r from-brand via-brand to-ember rounded-full"
                  />
                </div>
              </div>

              {/* divider */}
              <div className="h-px w-full bg-border" />

              {/* Bottom half — channel separated micro-layout */}
              <div className="relative p-8 lg:p-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground">
                    Off-the-Shelf Corpora
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full border hairline bg-surface text-foreground/70">
                    dual-channel
                  </span>
                </div>
                <h3 className="font-display text-xl lg:text-2xl tracking-tight leading-snug">
                  Channel Separated Conversational Audio Datasets
                </h3>
                <p className="mt-3 text-[14px] text-muted-foreground leading-relaxed">
                  Large-scale, multi-topic, natural dialogues in Indian languages
                  perfect for training robust ASR models. Off-the-shelf volumes
                  span tens of thousands of hours per language, equipped with
                  per-speaker metadata and dual-channel separation.
                </p>

                {/* tiny dual-track viz */}
                <div className="mt-5 space-y-1.5">
                  {[0, 1].map((i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="font-mono text-[9px] tracking-[0.18em] uppercase w-8 text-muted-foreground">
                        CH{i + 1}
                      </span>
                      <div className="flex-1 h-5 flex items-center gap-[2px]">
                        {Array.from({ length: 48 }).map((_, j) => {
                          const h = 0.3 + Math.abs(Math.sin(j * 0.5 + i * 1.4)) * 0.7;
                          return (
                            <span
                              key={j}
                              className="flex-1 rounded-[1px]"
                              style={{
                                height: `${h * 18}px`,
                                background: i === 0 ? "var(--brand)" : "var(--ember)",
                                opacity: 0.8,
                              }}
                            />
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

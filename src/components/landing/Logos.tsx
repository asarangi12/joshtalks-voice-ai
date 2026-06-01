import { Reveal } from "./Reveal";

const logos = [
  "OpenAI", "Meta", "Amazon", "WhatsApp", "Google", "Spotify",
  "UN Women", "IFC", "Bill & Melinda Gates Foundation", "ILO", "Omidyar Network India",
];

export function Logos() {
  const track = [...logos, ...logos];

  return (
    <section className="border-b hairline">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20 lg:py-24">
        <Reveal>
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <h3 className="font-display text-2xl lg:text-3xl tracking-[-0.025em] max-w-md">
              Trusted by research teams <span className="italic text-brand">globally</span>.
            </h3>
          </div>
        </Reveal>

        <div
          className="logo-marquee relative overflow-hidden"
          style={{
            WebkitMaskImage:
              "linear-gradient(90deg, transparent 0, #000 8%, #000 92%, transparent 100%)",
            maskImage:
              "linear-gradient(90deg, transparent 0, #000 8%, #000 92%, transparent 100%)",
          }}
        >
          <div className="logo-marquee-track flex w-max items-center gap-16 py-6">
            {track.map((l, i) => (
              <div
                key={`${l}-${i}`}
                aria-hidden={i >= logos.length}
                className="shrink-0 font-display text-base lg:text-lg tracking-tight text-foreground/55 grayscale opacity-80 hover:opacity-100 hover:text-brand transition-all duration-300 whitespace-nowrap"
              >
                {l}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes logo-marquee-slide {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .logo-marquee-track {
          animation: logo-marquee-slide 38s linear infinite;
          will-change: transform;
        }
        .logo-marquee:hover .logo-marquee-track {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .logo-marquee-track { animation: none; }
        }
      `}</style>
    </section>
  );
}

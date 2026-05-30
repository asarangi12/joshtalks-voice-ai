const logos = [
  "OpenAI",
  "Meta",
  "Amazon",
  "WhatsApp",
  "Google",
  "Spotify",
  "UN Women",
  "IFC",
  "Gates Foundation",
  "ILO",
  "Omidyar Network India",
  "Anthropic",
];

export function Logos() {
  return (
    <section className="border-b hairline">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20 lg:py-24">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <h3 className="font-display text-2xl lg:text-3xl tracking-[-0.025em] max-w-md">
            Trusted by research teams <span className="italic text-brand">globally</span>.
          </h3>
          <span className="font-mono text-[11px] text-muted-foreground tracking-[0.2em] uppercase">
            n = 40+ labs · 12 countries
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 border hairline rounded-xl overflow-hidden bg-card">
          {logos.map((l, i) => (
            <div
              key={l}
              className={`h-24 flex items-center justify-center px-6 text-center font-display text-base lg:text-lg tracking-tight text-foreground/55 hover:text-foreground transition
                ${i % 6 !== 5 ? "lg:border-r hairline" : ""}
                ${i % 4 !== 3 ? "md:border-r hairline" : ""}
                ${i % 3 !== 2 ? "sm:border-r hairline" : ""}
                ${i % 2 !== 1 ? "border-r hairline" : ""}
                ${i < logos.length - 2 ? "border-b hairline" : ""}
              `}
            >
              {l}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

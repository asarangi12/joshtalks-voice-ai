export function Mission() {
  return (
    <section id="research" className="border-b hairline bg-surface/60">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-24 lg:py-36">
        <div className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground mb-10 uppercase">
          [ 02 ] — Our Mission
        </div>
        <div className="grid grid-cols-12 gap-8 lg:gap-16 items-start">
          <h2 className="col-span-12 lg:col-span-6 font-display font-medium text-[clamp(2rem,5.2vw,4.75rem)] leading-[1.02] tracking-[-0.03em] text-balance">
            We build the voice <br />
            <span className="italic text-brand">infrastructure</span> AI needs.
          </h2>
          <div className="col-span-12 lg:col-span-6 lg:col-start-7 lg:pt-6">
            <p className="text-lg lg:text-xl text-foreground/80 leading-[1.7] max-w-xl">
              Josh Talks enables AI labs and enterprise teams to train, evaluate,
              and scale voice technologies that truly understand India's
              linguistic diversity.
            </p>
            <p className="mt-6 text-base text-muted-foreground leading-[1.8] max-w-xl">
              We collect, curate, and deliver research-grade conversational and
              multi-speaker voice datasets across Indian languages, accents, and
              real contexts — with rigorous quality, compliance, and traceability.
            </p>
            <div className="mt-10 flex items-center gap-8 text-sm">
              <div>
                <div className="font-display text-3xl text-brand">22</div>
                <div className="text-xs text-muted-foreground mt-1">official languages</div>
              </div>
              <div className="h-10 w-px bg-border" />
              <div>
                <div className="font-display text-3xl text-brand">9,400+</div>
                <div className="text-xs text-muted-foreground mt-1">contributors</div>
              </div>
              <div className="h-10 w-px bg-border" />
              <div>
                <div className="font-display text-3xl text-brand">24</div>
                <div className="text-xs text-muted-foreground mt-1">Indian states</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

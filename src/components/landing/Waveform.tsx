export function Waveform({ bars = 28, className = "" }: { bars?: number; className?: string }) {
  return (
    <div className={`flex items-center gap-[3px] h-8 ${className}`}>
      {Array.from({ length: bars }).map((_, i) => (
        <span
          key={i}
          className="wave-bar w-[2px] bg-foreground/60 rounded-full"
          style={{
            height: `${20 + ((i * 37) % 80)}%`,
            animationDelay: `${(i * 80) % 1400}ms`,
          }}
        />
      ))}
    </div>
  );
}

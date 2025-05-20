export default function HeroGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Circuit pattern background */}
      <div className="absolute inset-0 circuit-pattern opacity-20"></div>

      {/* Glowing elements */}
      <div className="absolute top-1/4 left-1/4 size-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 size-96 bg-secondary/10 rounded-full blur-3xl"></div>

      {/* Scan line effect */}
      <div className="absolute left-0 right-0 h-px bg-primary/20 dark:animate-scan-line"></div>

      {/* Grid overlay */}
      <div className="absolute inset-0 cyberpunk-grid"></div>
    </div>
  );
}

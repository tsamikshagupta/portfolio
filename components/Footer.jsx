export default function Footer() {
  return (
    <footer className="border-t border-cypress/20 bg-ink px-[var(--space-section-x)] py-8">
      <div className="section-inner flex flex-col gap-2 text-center md:flex-row md:items-center md:justify-between md:text-left">
        <p className="font-display text-2xl text-aloe">Terala Samiksha Gupta</p>
        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-olive">
          © 2026 · Hyderabad, India · Built for real-world systems
        </p>
      </div>
    </footer>
  );
}

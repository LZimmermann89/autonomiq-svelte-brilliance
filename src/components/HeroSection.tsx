import heroCNC from "@/assets/hero-cnc.jpg";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroCNC}
          alt="CNC Maschine mit KI-gesteuerter Bahnplanung"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 z-0 grid-bg opacity-60" />

      {/* Scan line animation */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-full h-0.5 opacity-0"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(37,99,235,0.4), transparent)",
            animation: "scan-line 8s ease-in-out infinite",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-16">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="animate-fade-in mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-medium tracking-widest uppercase text-primary">
              TU Darmstadt · PTW Institut
            </span>
          </div>

          {/* Headline */}
          <h1 className="animate-fade-in-up delay-100 mb-6 text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight">
            Intelligente{" "}
            <span className="text-gradient">CAM-Software</span>
            <br />
            für die{" "}
            <span className="text-gradient-accent glow-text">CNC-Fertigung</span>
          </h1>

          {/* Subline */}
          <p className="animate-fade-in-up delay-200 mb-10 text-lg sm:text-xl text-steel-light max-w-2xl leading-relaxed">
            autonomIQ automatisiert Ihre Fertigung auf einem neuen Niveau. Unsere KI analysiert
            3D-CAD-Modelle, wählt eigenständig Werkzeuge, berechnet optimale Werkzeugwege und
            generiert direkt den NC-Code für Ihre CNC-Maschinen – ohne manuelle Programmierung.
          </p>

          {/* CTAs */}
          <div className="animate-fade-in-up delay-300 flex flex-wrap gap-4">
            <Link
              to="/kontakt"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-sm bg-primary text-primary-foreground font-semibold text-base hover:opacity-90 transition-all animate-pulse-glow"
            >
              Pilotanwender werden
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-1">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link
              to="/technologie"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-sm border border-border text-foreground font-medium text-base hover:border-primary/60 hover:text-primary transition-all"
            >
              Technologie entdecken
            </Link>
          </div>

          {/* Stats row */}
          <div className="animate-fade-in delay-500 mt-16 flex flex-wrap gap-8 pt-8 border-t border-border/40">
            {[
              { value: "100%", label: "Automatische NC-Code-Generierung" },
              { value: "KI-gestützt", label: "Geometrieerkennung & Strategie" },
              { value: "TU Darmstadt", label: "Forschungsinstitut PTW" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <span className="text-2xl font-bold text-primary">{stat.value}</span>
                <span className="text-xs text-muted-foreground max-w-[140px] leading-snug">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
}

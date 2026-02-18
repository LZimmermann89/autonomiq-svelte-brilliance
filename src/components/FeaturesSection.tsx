import { Brain, Wrench, Code2, Layers, Cpu, Zap } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "KI-Geometrieerkennung",
    description:
      "Das System analysiert eigenständig 3D-CAD-Modelle und erkennt Fräsflächen, Bohrungen und Konturen ohne manuelle Klassifizierung.",
  },
  {
    icon: Wrench,
    title: "Intelligente Werkzeugauswahl",
    description:
      "Auf Basis von Geometrie, Material und Fertigungsparametern wählt autonomIQ automatisch das optimale Werkzeug aus Ihrer Maschinendatenbank.",
  },
  {
    icon: Layers,
    title: "Bearbeitungsstrategien",
    description:
      "Eigenständige Entwicklung maßgeschneiderter Bearbeitungsstrategien – von Schruppen bis Schlichten, adaptiv und kollisionsfrei.",
  },
  {
    icon: Zap,
    title: "Optimale Werkzeugwege",
    description:
      "KI-generierte Werkzeugbahnen minimieren Bearbeitungszeit, reduzieren Werkzeugverschleiß und maximieren Oberflächenqualität.",
  },
  {
    icon: Code2,
    title: "NC-Code-Generierung",
    description:
      "Direkter Export maschinenspezifischer NC-Code für alle gängigen CNC-Steuerungen – Siemens, Fanuc, Heidenhain und mehr.",
  },
  {
    icon: Cpu,
    title: "Lernende Systeme",
    description:
      "autonomIQ lernt kontinuierlich aus Produktionsdaten und verbessert Strategien auf Basis realer Fertigungsergebnisse.",
  },
];

export function FeaturesSection() {
  return (
    <section id="technologie" className="py-24 relative">
      {/* Dot bg */}
      <div className="absolute inset-0 dot-bg opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 mb-5">
            <span className="text-xs font-medium tracking-widest uppercase text-primary">
              Kerntechnologie
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-5">
            Autonome Fertigung.{" "}
            <span className="text-gradient">Maximale Präzision.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Von der CAD-Datei zur fertig programmierten CNC-Maschine – vollautomatisch, KI-gestützt
            und in einem Bruchteil der bisherigen Zeit.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <article
              key={f.title}
              className="surface-card rounded-lg p-7 group hover:border-glow transition-all duration-300"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Icon */}
              <div className="mb-5 inline-flex items-center justify-center w-12 h-12 rounded-sm bg-primary/10 border border-primary/20 text-primary group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-300">
                <f.icon size={22} />
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold mb-2.5 text-foreground group-hover:text-primary transition-colors">
                {f.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

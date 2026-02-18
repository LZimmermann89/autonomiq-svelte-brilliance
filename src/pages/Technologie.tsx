import { Layout } from "@/components/Layout";
import { Brain, Wrench, Code2, Layers, Cpu, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Brain,
    title: "KI-Geometrieerkennung",
    description:
      "Das System analysiert eigenständig 3D-CAD-Modelle und erkennt Fräsflächen, Bohrungen und Konturen ohne manuelle Klassifizierung. Dank Deep Learning wird die Erkennungsgenauigkeit mit jedem Bauteil besser.",
    badge: "Core AI",
  },
  {
    icon: Wrench,
    title: "Intelligente Werkzeugauswahl",
    description:
      "Auf Basis von Geometrie, Material und Fertigungsparametern wählt autonomIQ automatisch das optimale Werkzeug aus Ihrer Maschinendatenbank – inkl. Schnittdatenoptimierung nach aktuellen Herstellerdaten.",
    badge: "Automation",
  },
  {
    icon: Layers,
    title: "Bearbeitungsstrategien",
    description:
      "Eigenständige Entwicklung maßgeschneiderter Bearbeitungsstrategien – von Schruppen bis Schlichten, adaptiv und kollisionsfrei. Das System berücksichtigt Maschinenlimits und Werkzeuggeometrien.",
    badge: "Strategy",
  },
  {
    icon: Zap,
    title: "Optimale Werkzeugwege",
    description:
      "KI-generierte Werkzeugbahnen minimieren Bearbeitungszeit, reduzieren Werkzeugverschleiß und maximieren Oberflächenqualität. Trochoidal-Fräsen und adaptive Strategien sind automatisch enthalten.",
    badge: "Path AI",
  },
  {
    icon: Code2,
    title: "NC-Code-Generierung",
    description:
      "Direkter Export maschinenspezifischer NC-Code für alle gängigen CNC-Steuerungen – Siemens SINUMERIK, Fanuc, Heidenhain iTNC und mehr. Postprozessoren werden automatisch angewandt.",
    badge: "Output",
  },
  {
    icon: Cpu,
    title: "Lernende Systeme",
    description:
      "autonomIQ lernt kontinuierlich aus Produktionsdaten und verbessert Strategien auf Basis realer Fertigungsergebnisse. Feedback-Schleifen aus der Produktion fließen direkt in das Modell ein.",
    badge: "ML Loop",
  },
];

export default function Technologie() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 dot-bg opacity-30 pointer-events-none" />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        <div className="relative max-w-screen-xl mx-auto px-4 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-primary mb-6">
            Kerntechnologie
          </span>
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight mb-6">
            Autonome Fertigung.{" "}
            <span className="text-gradient">Maximale Präzision.</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10">
            Von der CAD-Datei zur fertig programmierten CNC-Maschine – vollautomatisch, KI-gestützt und in einem Bruchteil der bisherigen Zeit.
          </p>
          <Link
            to="/kontakt"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
          >
            Demo anfragen <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="py-16">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <article
                key={f.title}
                className="surface-card rounded-xl p-7 group hover:border-glow transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-all">
                    <f.icon size={22} />
                  </div>
                  <span className="text-xs font-bold tracking-widest uppercase text-primary/60 border border-primary/20 bg-primary/5 px-2.5 py-1 rounded-full">
                    {f.badge}
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {f.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-10 text-center">
            <h2 className="text-3xl font-extrabold mb-4">Bereit, Ihre Fertigung zu transformieren?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">Werden Sie einer unserer Pilotanwender und gestalten Sie mit uns die Fertigung von morgen.</p>
            <Link to="/kontakt" className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors animate-pulse-glow">
              Jetzt bewerben <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}

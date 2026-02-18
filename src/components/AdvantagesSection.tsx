import { CheckCircle2, Clock, TrendingDown, Shield, ArrowRight } from "lucide-react";

const advantages = [
  {
    icon: Clock,
    title: "Drastisch kürzere Programmierzeiten",
    description:
      "Was bisher Stunden dauerte, erledigt autonomIQ in Minuten. CAM-Programmierung wird zur Nebensache.",
    metric: "bis zu -90%",
    metricLabel: "Programmierzeit",
  },
  {
    icon: TrendingDown,
    title: "Niedrigere Betriebskosten",
    description:
      "Optimierte Werkzeugwege verlängern die Standzeit Ihrer Werkzeuge und reduzieren Ausschuss signifikant.",
    metric: "bis zu -40%",
    metricLabel: "Werkzeugkosten",
  },
  {
    icon: Shield,
    title: "Konsistente Qualität",
    description:
      "Keine manuellen Fehler, keine Erfahrungsabhängigkeit – jede Programmierung auf gleichem Höchstniveau.",
    metric: "100%",
    metricLabel: "Reproduzierbarkeit",
  },
  {
    icon: CheckCircle2,
    title: "Skalierbar für jede Losgröße",
    description:
      "Ob Einzel-, Klein- oder Großserie – autonomIQ adaptiert die Strategie automatisch an Ihre Anforderungen.",
    metric: "Losgröße 1",
    metricLabel: "bis Großserie",
  },
];

export function AdvantagesSection() {
  return (
    <section id="vorteile" className="py-24 relative bg-secondary/30">
      {/* Accent line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text block */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 mb-6">
              <span className="text-xs font-medium tracking-widest uppercase text-primary">
                Operative Exzellenz
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
              Fertigungseffizienz auf{" "}
              <span className="text-gradient">neuem Niveau</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              autonomIQ ist mehr als Software – es ist die Transformation Ihrer Fertigung.
              Entwickelt am renommierten PTW-Institut der TU Darmstadt, vereint es jahrelange
              Fertigungsexpertise mit modernster KI.
            </p>
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-200"
            >
              Jetzt Pilotprogramm anfragen
              <ArrowRight size={18} />
            </a>
          </div>

          {/* Right: Advantage cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {advantages.map((adv) => (
              <div
                key={adv.title}
                className="surface-card rounded-lg p-6 group hover:border-glow transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-sm bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-all">
                    <adv.icon size={18} />
                  </div>
                  <div>
                    <div className="text-2xl font-extrabold text-primary leading-none">{adv.metric}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{adv.metricLabel}</div>
                  </div>
                </div>
                <h3 className="font-bold text-sm text-foreground mb-1.5">{adv.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{adv.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
    </section>
  );
}

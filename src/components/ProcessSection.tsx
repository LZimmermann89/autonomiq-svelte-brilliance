const steps = [
  {
    step: "01",
    title: "CAD-Modell importieren",
    description:
      "Laden Sie Ihr 3D-CAD-Modell in autonomIQ. Das System unterstützt alle gängigen Formate: STEP, IGES, STL, Parasolid und native Formate führender CAD-Systeme.",
  },
  {
    step: "02",
    title: "KI analysiert Geometrie",
    description:
      "Die KI erkennt automatisch alle relevanten Geometriemerkmale – Flächen, Bohrungen, Taschen, Konturen und Freiformflächen – und klassifiziert diese für die Bearbeitung.",
  },
  {
    step: "03",
    title: "Strategie & Werkzeuge werden gewählt",
    description:
      "Basierend auf Material, Toleranzen und Ihrer Werkzeugdatenbank entwickelt autonomIQ optimale Bearbeitungsstrategien und wählt die passenden Werkzeuge.",
  },
  {
    step: "04",
    title: "NC-Code wird generiert",
    description:
      "Maschinenspezifischer, kollisionsgeprüfter NC-Code wird automatisch erstellt und ist sofort für Ihre CNC-Maschine einsatzbereit.",
  },
];

export function ProcessSection() {
  return (
    <section id="anwendung" className="py-24 relative">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 mb-5">
            <span className="text-xs font-medium tracking-widest uppercase text-primary">
              Workflow
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-5">
            Von CAD zu{" "}
            <span className="text-gradient">NC-Code</span>
            {" "}in vier Schritten
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Vollautomatisch. Ohne manuelle Eingriffe. Ohne CAM-Expertise erforderlich.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-8 left-[calc(12.5%+1.5rem)] right-[calc(12.5%+1.5rem)] h-px bg-gradient-to-r from-primary/10 via-primary/50 to-primary/10" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s) => (
              <div key={s.step} className="flex flex-col gap-5 group">
                {/* Step number */}
                <div className="relative w-16 h-16 flex-shrink-0">
                  <div className="w-16 h-16 rounded-sm border border-primary/30 bg-primary/8 flex items-center justify-center group-hover:border-primary/60 group-hover:bg-primary/15 transition-all duration-300">
                    <span className="text-2xl font-extrabold text-gradient mono">{s.step}</span>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-base text-foreground mb-2 group-hover:text-primary transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { Layout } from "@/components/Layout";
import { Clock, TrendingDown, Shield, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const advantages = [
  {
    icon: Clock,
    metric: "bis zu -90%",
    metricLabel: "Programmierzeit",
    title: "Drastisch kürzere Programmierzeiten",
    description:
      "Was bisher Stunden dauerte, erledigt autonomIQ in Minuten. CAM-Programmierung wird zur Nebensache – Ihre Experten können sich auf wertschöpfende Aufgaben konzentrieren.",
  },
  {
    icon: TrendingDown,
    metric: "bis zu -40%",
    metricLabel: "Werkzeugkosten",
    title: "Niedrigere Betriebskosten",
    description:
      "Optimierte Werkzeugwege verlängern die Standzeit Ihrer Werkzeuge und reduzieren Ausschuss signifikant. Adaptive Schnittstrategie schont Werkzeug und Maschine.",
  },
  {
    icon: Shield,
    metric: "100%",
    metricLabel: "Reproduzierbarkeit",
    title: "Konsistente Qualität",
    description:
      "Keine manuellen Fehler, keine Erfahrungsabhängigkeit – jede Programmierung auf gleichem Höchstniveau. Kollisionsgeprüfte Werkzeugwege garantieren Prozesssicherheit.",
  },
  {
    icon: CheckCircle2,
    metric: "Losgröße 1",
    metricLabel: "bis Großserie",
    title: "Skalierbar für jede Losgröße",
    description:
      "Ob Einzel-, Klein- oder Großserie – autonomIQ adaptiert die Strategie automatisch an Ihre Anforderungen und macht auch die Einzelteilfertigung wirtschaftlich.",
  },
];

const comparison = [
  { aspect: "Programmierdauer", traditional: "2–8 Stunden", autonomiq: "5–15 Minuten" },
  { aspect: "Benötigte Expertise", traditional: "Erfahrener CAM-Programmierer", autonomiq: "Kein CAM-Know-how nötig" },
  { aspect: "Fehlerquote", traditional: "Hoch (manuell)", autonomiq: "Minimal (KI-geprüft)" },
  { aspect: "Skalierbarkeit", traditional: "Begrenzt (Personalabhängig)", autonomiq: "Unbegrenzt" },
  { aspect: "Lernkurve", traditional: "Monate bis Jahre", autonomiq: "Stunden" },
  { aspect: "Kosten/Bauteil", traditional: "Hoch", autonomiq: "Bis zu 60% geringer" },
];

export default function Vorteile() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        <div className="relative max-w-screen-xl mx-auto px-4 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-primary mb-6">
            Operative Exzellenz
          </span>
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight mb-6">
            Fertigungseffizienz auf{" "}
            <span className="text-gradient">neuem Niveau</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            autonomIQ ist mehr als Software – es ist die Transformation Ihrer Fertigung. Messbare Ergebnisse vom ersten Tag an.
          </p>
        </div>
      </section>

      {/* Metric Cards */}
      <section className="py-12">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {advantages.map((adv) => (
              <div key={adv.title} className="surface-card rounded-xl p-6 group hover:border-glow transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-all">
                    <adv.icon size={18} />
                  </div>
                  <div>
                    <div className="text-2xl font-extrabold text-primary leading-none">{adv.metric}</div>
                    <div className="text-xs text-muted-foreground">{adv.metricLabel}</div>
                  </div>
                </div>
                <h3 className="font-bold text-sm text-foreground mb-2">{adv.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{adv.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold mb-3">autonomIQ vs. Traditionell</h2>
            <p className="text-muted-foreground">Ein direkter Vergleich zeigt den Vorsprung</p>
          </div>
          <div className="rounded-xl border border-border overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-secondary/50">
                  <th className="px-6 py-4 text-left font-semibold text-foreground">Kriterium</th>
                  <th className="px-6 py-4 text-center font-semibold text-muted-foreground">Traditionell</th>
                  <th className="px-6 py-4 text-center font-semibold text-primary">autonomIQ</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={row.aspect} className={`border-b border-border/50 ${i % 2 === 0 ? "bg-card/30" : ""}`}>
                    <td className="px-6 py-4 font-medium text-foreground">{row.aspect}</td>
                    <td className="px-6 py-4 text-center text-muted-foreground">{row.traditional}</td>
                    <td className="px-6 py-4 text-center font-semibold text-primary">{row.autonomiq}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-10 text-center">
            <h2 className="text-3xl font-extrabold mb-4">Jetzt Pilotprogramm anfragen</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Werden Sie einer unserer Pilotanwender und profitieren Sie als Erster von autonomIQ.
            </p>
            <Link to="/kontakt" className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors animate-pulse-glow">
              Anfrage stellen <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}

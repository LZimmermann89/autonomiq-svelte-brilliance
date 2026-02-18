import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

export function ContactSection() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
    privacy: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder – in production: wire to backend
    setSent(true);
  };

  return (
    <section id="kontakt" className="py-24 relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="absolute inset-0 dot-bg opacity-25 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Info */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 mb-6">
              <span className="text-xs font-medium tracking-widest uppercase text-primary">
                Pilotprogramm
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
              Werden Sie{" "}
              <span className="text-gradient">Pilotanwender</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Sie sind Fertigungsbetrieb und möchten als einer der ersten Pilotanwender von
              autonomIQ profitieren? Wir suchen Industriepartner, die gemeinsam mit uns die
              Fertigung von morgen gestalten.
            </p>

            <div className="space-y-4">
              {[
                "Frühzeitiger Zugang zur autonomIQ-Technologie",
                "Enge Begleitung durch das PTW-Forschungsteam",
                "Individuelle Anpassung an Ihre Maschinen und Prozesse",
                "Direkter Einfluss auf die Produktentwicklung",
              ].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  </span>
                  <span className="text-sm text-foreground leading-relaxed">{point}</span>
                </div>
              ))}
            </div>

            {/* Contact info */}
            <div className="mt-10 pt-8 border-t border-border/40 space-y-2">
              <p className="text-sm text-muted-foreground">
                <span className="text-foreground font-medium">PTW · TU Darmstadt</span>
              </p>
              <p className="text-sm text-muted-foreground">Otto-Berndt-Straße 2, 64287 Darmstadt</p>
              <p className="text-sm text-muted-foreground">
                <a href="tel:+4961518229758" className="hover:text-primary transition-colors">+49 6151 8229-758</a>
              </p>
              <p className="text-sm text-muted-foreground">
                <a href="mailto:info@autonomiq.de" className="hover:text-primary transition-colors">info@autonomiq.de</a>
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="surface-card rounded-xl p-8">
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full gap-5 py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center">
                  <CheckCircle size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Anfrage gesendet!</h3>
                <p className="text-muted-foreground text-sm max-w-xs">
                  Vielen Dank! Wir melden uns so schnell wie möglich bei Ihnen.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1.5">
                      Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Max Mustermann"
                      className="w-full px-4 py-2.5 rounded-sm bg-muted border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition-colors"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1.5">
                      Unternehmen *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Musterfirma GmbH"
                      className="w-full px-4 py-2.5 rounded-sm bg-muted border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition-colors"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1.5">
                    E-Mail *
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="max@musterfirma.de"
                    className="w-full px-4 py-2.5 rounded-sm bg-muted border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition-colors"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1.5">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    placeholder="+49 6151 000 000"
                    className="w-full px-4 py-2.5 rounded-sm bg-muted border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition-colors"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1.5">
                    Nachricht / Ihr Anwendungsfall
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Beschreiben Sie kurz Ihren Fertigungsbereich und Ihr Interesse an autonomIQ..."
                    className="w-full px-4 py-2.5 rounded-sm bg-muted border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition-colors resize-none"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </div>

                {/* Privacy checkbox – REQUIRED for German law (DSGVO) */}
                <div className="flex items-start gap-3">
                  <input
                    required
                    type="checkbox"
                    id="privacy"
                    checked={form.privacy}
                    onChange={(e) => setForm({ ...form, privacy: e.target.checked })}
                    className="mt-0.5 accent-primary w-4 h-4 flex-shrink-0"
                  />
                  <label htmlFor="privacy" className="text-xs text-muted-foreground leading-snug">
                    Ich stimme der Verarbeitung meiner Daten gemäß der{" "}
                    <a href="#datenschutz" className="text-primary hover:underline">
                      Datenschutzerklärung
                    </a>{" "}
                    zu. Die Einwilligung kann jederzeit widerrufen werden. *
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-sm bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-all animate-pulse-glow"
                >
                  <Send size={16} />
                  Anfrage senden
                </button>

                <p className="text-xs text-muted-foreground text-center">
                  * Pflichtfelder. Ihre Daten werden vertraulich behandelt und nicht an Dritte weitergegeben.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

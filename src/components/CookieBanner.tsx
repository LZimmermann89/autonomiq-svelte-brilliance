import { useState, useEffect } from "react";
import { Cookie, X, ChevronDown, ChevronUp, Shield } from "lucide-react";

type ConsentState = "accepted" | "declined" | null;

const STORAGE_KEY = "autonomiq_cookie_consent";
const STORAGE_VERSION = "1";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    // Show only if no consent stored or version changed
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      // Small delay for better UX
      const t = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(t);
    }
    try {
      const parsed = JSON.parse(stored);
      if (parsed.version !== STORAGE_VERSION) {
        localStorage.removeItem(STORAGE_KEY);
        setVisible(true);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  const saveConsent = (decision: ConsentState) => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ decision, version: STORAGE_VERSION, timestamp: new Date().toISOString() })
    );
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-title"
      className="fixed bottom-0 inset-x-0 z-50 animate-fade-in-up"
    >
      {/* Backdrop blur strip */}
      <div className="glass border-t border-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            {/* Icon + Text */}
            <div className="flex items-start gap-3 flex-1 min-w-0">
              <div className="flex-shrink-0 w-9 h-9 rounded-sm bg-primary/10 border border-primary/25 flex items-center justify-center text-primary mt-0.5">
                <Cookie size={16} />
              </div>
              <div className="flex-1 min-w-0">
                <h2
                  id="cookie-title"
                  className="text-sm font-bold text-foreground mb-1"
                >
                  🍪 Cookie-Einstellungen (§ 25 TTDSG · DSGVO)
                </h2>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Wir verwenden ausschließlich technisch notwendige Cookies (Session-Speicherung,
                  Formularsicherheit). Drittanbieter-Cookies oder Tracking setzen wir{" "}
                  <strong className="text-steel-light">nur mit Ihrer ausdrücklichen Einwilligung</strong> ein.{" "}
                  <a
                    href="#datenschutz"
                    onClick={() => setVisible(false)}
                    className="text-primary hover:underline font-medium"
                  >
                    Datenschutzerklärung →
                  </a>
                </p>

                {/* Expandable details */}
                <button
                  onClick={() => setExpanded(!expanded)}
                  className="mt-1.5 flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
                  aria-expanded={expanded}
                >
                  {expanded ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
                  {expanded ? "Details ausblenden" : "Details einblenden"}
                </button>

                {expanded && (
                  <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 animate-fade-in">
                    <CookieCategory
                      required
                      name="Notwendige Cookies"
                      desc="Session-Verwaltung, Formularsicherheit, CSRF-Schutz. Immer aktiv – keine Einwilligung erforderlich (§ 25 Abs. 2 TTDSG)."
                    />
                    <CookieCategory
                      required={false}
                      name="Analyse & Statistik"
                      desc="Anonymisierte Nutzungsstatistiken zur Verbesserung des Angebots. Nur mit Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)."
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex-shrink-0 flex items-center gap-2.5">
              <button
                onClick={() => saveConsent("declined")}
                className="inline-flex items-center px-4 py-2 rounded-sm border border-border text-xs font-semibold text-muted-foreground hover:border-border/80 hover:text-foreground transition-all whitespace-nowrap"
              >
                Nur notwendige
              </button>
              <button
                onClick={() => saveConsent("accepted")}
                className="inline-flex items-center gap-1.5 px-5 py-2 rounded-sm bg-primary text-primary-foreground text-xs font-semibold hover:opacity-90 transition-all whitespace-nowrap animate-pulse-glow"
              >
                <Shield size={13} />
                Alle akzeptieren
              </button>
              <button
                onClick={() => saveConsent("declined")}
                aria-label="Schließen"
                className="p-1.5 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Legal note */}
          <p className="mt-2 text-[10px] text-muted-foreground/60 sm:pl-12">
            Verantwortlicher: TU Darmstadt PTW, Otto-Berndt-Straße 2, 64287 Darmstadt ·
            Sie können Ihre Einwilligung jederzeit widerrufen (Art. 7 Abs. 3 DSGVO).
          </p>
        </div>
      </div>
    </div>
  );
}

function CookieCategory({
  required,
  name,
  desc,
}: {
  required: boolean;
  name: string;
  desc: string;
}) {
  return (
    <div className="rounded-sm border border-border bg-muted/30 p-3">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-xs font-semibold text-foreground">{name}</span>
        {required ? (
          <span className="text-[10px] px-1.5 py-0.5 rounded-full border border-primary/30 bg-primary/8 text-primary font-medium">
            Immer aktiv
          </span>
        ) : (
          <span className="text-[10px] px-1.5 py-0.5 rounded-full border border-border text-muted-foreground">
            Optional
          </span>
        )}
      </div>
      <p className="text-[11px] text-muted-foreground leading-snug">{desc}</p>
    </div>
  );
}

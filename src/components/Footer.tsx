export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/40 backdrop-blur-sm">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2.5 mb-4">
              <span className="flex h-7 w-7 items-center justify-center rounded-sm bg-primary">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 1L14 4.5V11.5L8 15L2 11.5V4.5L8 1Z" stroke="hsl(220,47%,5%)" strokeWidth="1.5" fill="none"/>
                  <circle cx="8" cy="8" r="2.5" fill="hsl(220,47%,5%)"/>
                </svg>
              </span>
              <span className="font-bold text-lg tracking-tight text-foreground">
                autono<span className="text-primary">IQ</span>
              </span>
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Intelligente CAM-Software für die CNC-Fertigung. Entwickelt am PTW Institut der
              TU Darmstadt.
            </p>
            <p className="mt-4 text-xs text-muted-foreground">
              Ein Projekt des{" "}
              <strong className="text-steel-light">
                Instituts für Produktionsmanagement, Technologie und Werkzeugmaschinen (PTW)
              </strong>
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {[
                ["Technologie", "#technologie"],
                ["Vorteile", "#vorteile"],
                ["Workflow", "#anwendung"],
                ["Forschung", "#forschung"],
                ["Kontakt", "#kontakt"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
              Rechtliches
            </h4>
            <ul className="space-y-2.5">
              {[
                ["Impressum", "#impressum"],
                ["Datenschutzerklärung", "#datenschutz"],
                ["Haftungsausschluss", "#haftung"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Kontakt-Daten */}
            <div className="mt-6 space-y-1">
              <p className="text-xs text-muted-foreground">Otto-Berndt-Straße 2</p>
              <p className="text-xs text-muted-foreground">64287 Darmstadt, Deutschland</p>
              <a href="mailto:info@autonomiq.de" className="text-xs text-primary hover:underline block mt-2">
                info@autonomiq.de
              </a>
              <a href="tel:+4961518229758" className="text-xs text-muted-foreground hover:text-primary transition-colors block">
                +49 6151 8229-758
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Impressum section – legally required (TMG §5) */}
      <div id="impressum" className="border-t border-border/40 bg-background/60">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <h5 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">
            Impressum (§ 5 TMG)
          </h5>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs text-muted-foreground leading-relaxed">
            <div>
              <p className="font-medium text-steel-light mb-1">Anbieter</p>
              <p>Technische Universität Darmstadt</p>
              <p>Institut für Produktionsmanagement, Technologie und Werkzeugmaschinen (PTW)</p>
              <p>autonomIQ</p>
              <p>Otto-Berndt-Straße 2</p>
              <p>64287 Darmstadt</p>
              <p>Deutschland</p>
            </div>
            <div>
              <p className="font-medium text-steel-light mb-1">Kontakt</p>
              <p>Tel.: +49 6151 8229-758</p>
              <p>E-Mail: info@autonomiq.de</p>
              <p>Web: www.autonomiq.de</p>
            </div>
            <div id="datenschutz">
              <p className="font-medium text-steel-light mb-1">Datenschutz (DSGVO)</p>
              <p>
                Personenbezogene Daten werden nur zur Kontaktaufnahme verarbeitet (Art. 6 Abs. 1
                lit. a DSGVO). Keine Weitergabe an Dritte. Cookies werden nur mit Einwilligung
                gesetzt. Verantwortlicher: PTW, TU Darmstadt.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-border/30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-muted-foreground">
            © {year} autonomIQ · TU Darmstadt PTW. Alle Rechte vorbehalten.
          </p>
          <p className="text-xs text-muted-foreground">
            Haftungshinweis: Trotz sorgfältiger Prüfung übernehmen wir keine Haftung für externe Links.
          </p>
        </div>
      </div>
    </footer>
  );
}

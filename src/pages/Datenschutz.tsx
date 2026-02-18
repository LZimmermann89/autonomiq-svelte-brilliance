import { Layout } from "@/components/Layout";

export default function Datenschutz() {
  return (
    <Layout>
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl font-extrabold mb-2">Datenschutzerklärung</h1>
          <p className="text-muted-foreground mb-10">Gemäß DSGVO, BDSG und § 25 TTDSG</p>

          <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
            {[
              {
                title: "1. Verantwortlicher",
                content: (
                  <>
                    <p>Technische Universität Darmstadt · PTW Institut · autonomIQ</p>
                    <p>Otto-Berndt-Straße 2, 64287 Darmstadt</p>
                    <p>E-Mail: <a href="mailto:info@autonomiq.de" className="text-primary hover:underline">info@autonomiq.de</a></p>
                    <p>Tel.: +49 6151 8229-758</p>
                  </>
                ),
              },
              {
                title: "2. Erhebung und Verarbeitung personenbezogener Daten",
                content: (
                  <p>Personenbezogene Daten werden nur erhoben, soweit dies zur Bereitstellung der Webseite oder zur Bearbeitung Ihrer Kontaktanfragen erforderlich ist. Die Verarbeitung erfolgt auf Basis von Art. 6 Abs. 1 lit. a DSGVO (Einwilligung) und Art. 6 Abs. 1 lit. f DSGVO (berechtigte Interessen).</p>
                ),
              },
              {
                title: "3. Kontaktformular",
                content: (
                  <p>Wenn Sie uns über das Kontaktformular kontaktieren, werden die von Ihnen angegebenen Daten (Name, Unternehmen, E-Mail, Telefon, Nachricht) zur Bearbeitung Ihrer Anfrage gespeichert. Die Verarbeitung erfolgt auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Ihre Daten werden nicht an Dritte weitergegeben. Sie können Ihre Einwilligung jederzeit widerrufen.</p>
                ),
              },
              {
                title: "4. Cookies",
                content: (
                  <p>Diese Website verwendet technisch notwendige Cookies, die für den Betrieb der Website unbedingt erforderlich sind (§ 25 Abs. 2 TTDSG). Optionale Cookies (z. B. für Analysen) werden nur mit Ihrer ausdrücklichen Einwilligung gesetzt. Sie können Ihre Cookie-Präferenzen jederzeit über den Cookie-Banner anpassen.</p>
                ),
              },
              {
                title: "5. Server-Log-Dateien",
                content: (
                  <p>Der Hosting-Provider erhebt und speichert automatisch Informationen in Server-Log-Dateien, die Ihr Browser übermittelt (IP-Adresse, Browsertyp, Betriebssystem, Referrer-URL, Datum/Uhrzeit). Eine Zusammenführung dieser Daten mit anderen Datenquellen erfolgt nicht. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.</p>
                ),
              },
              {
                title: "6. Ihre Rechte",
                content: (
                  <ul className="list-disc list-inside space-y-1">
                    <li>Auskunft (Art. 15 DSGVO)</li>
                    <li>Berichtigung (Art. 16 DSGVO)</li>
                    <li>Löschung (Art. 17 DSGVO)</li>
                    <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                    <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
                    <li>Widerspruch (Art. 21 DSGVO)</li>
                    <li>Beschwerde bei der zuständigen Aufsichtsbehörde (HBDI Hessen)</li>
                  </ul>
                ),
              },
              {
                title: "7. Datensicherheit",
                content: (
                  <p>Diese Website nutzt SSL- bzw. TLS-Verschlüsselung zur Sicherung der Übertragung personenbezogener Daten. Wir treffen technische und organisatorische Maßnahmen gemäß Art. 32 DSGVO zum Schutz Ihrer Daten.</p>
                ),
              },
              {
                title: "8. Änderungen dieser Datenschutzerklärung",
                content: (
                  <p>Wir behalten uns vor, diese Datenschutzerklärung anzupassen. Stand: Februar 2026.</p>
                ),
              },
            ].map((section) => (
              <div key={section.title} className="surface-card rounded-xl p-6">
                <h2 className="text-base font-bold text-foreground mb-3">{section.title}</h2>
                <div className="space-y-2">{section.content}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

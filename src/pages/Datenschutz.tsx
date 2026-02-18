import { Layout } from "@/components/Layout";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="surface-card rounded-xl p-6">
      <h2 className="text-base font-bold text-foreground mb-3">{title}</h2>
      <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">{children}</div>
    </div>
  );
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-4 pt-4 border-t border-border/50">
      <h3 className="text-sm font-semibold text-foreground mb-2">{title}</h3>
      {children}
    </div>
  );
}

export default function Datenschutz() {
  return (
    <Layout>
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          {/* Header */}
          <div className="mb-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-primary mb-5">
              Rechtliches
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight mb-2">Datenschutzerklärung</h1>
            <p className="text-muted-foreground text-sm">
              Gemäß DSGVO (EU) 2016/679 · BDSG · § 25 TTDSG · Gültig ab: 2. Juli 2025 · Letzte Aktualisierung: 2. Juli 2025
            </p>
          </div>

          <div className="space-y-5">

            {/* Intro */}
            <div className="surface-card rounded-xl p-6 text-sm text-muted-foreground leading-relaxed space-y-3">
              <p>
                Ihre Privatsphäre ist uns wichtig. Technische Universität Darmstadt Institut für Produktionsmanagement, Technologie und Werkzeugmaschinen (PTW), autonomIQ respektiert Ihre Privatsphäre und hält sich an die geltenden Gesetze und Vorschriften in Bezug auf alle persönlichen Daten, die wir über Sie erheben, auch über unsere Website{" "}
                <a href="https://autonomiq.de/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://autonomiq.de/</a>{" "}
                und andere Websites, die wir besitzen und betreiben.
              </p>
              <p>
                Personenbezogene Daten sind alle Informationen über Sie, die dazu verwendet werden können, Sie zu identifizieren. Dazu gehören Informationen über Sie als Person (z. B. Name, Adresse und Geburtsdatum), Ihre Geräte, Zahlungsdetails und sogar Informationen darüber, wie Sie eine Website oder einen Online-Dienst nutzen.
              </p>
              <p>
                Für den Fall, dass unsere Webseite Links zu Webseiten und Diensten von Drittanbietern enthält, beachten Sie bitte, dass diese ihre eigenen Datenschutzrichtlinien haben. Wenn Sie einem Link zu Inhalten von Dritten folgen, sollten Sie deren Datenschutzrichtlinien lesen, um zu erfahren, wie sie persönliche Daten sammeln und verwenden. Diese Datenschutzrichtlinie gilt nicht für Ihre Aktivitäten, nachdem Sie unsere Webseite verlassen haben.
              </p>
            </div>

            {/* Daten die wir erheben */}
            <Section title="Daten, die wir erheben">
              <p>
                Die von uns erhobenen Daten fallen in eine von zwei Kategorien: „freiwillig zur Verfügung gestellte" und „automatisch erfasste" Informationen.
              </p>
              <p>
                „Freiwillig zur Verfügung gestellte" Informationen beziehen sich auf alle Informationen, die Sie uns wissentlich und aktiv zur Verfügung stellen, wenn Sie eine unserer Dienstleistungen und Werbeaktionen nutzen oder daran teilnehmen.
              </p>
              <p>
                „Automatisch gesammelte" Informationen beziehen sich auf alle Informationen, die automatisch von Ihren Geräten im Zuge des Zugriffs auf unsere Produkte und Dienstleistungen gesendet werden.
              </p>
              <SubSection title="Log-Dateien">
                <p>
                  Wenn Sie unsere Webseite besuchen, können unsere Server automatisch die von Ihrem Webbrowser übermittelten Standarddaten aufzeichnen. Dazu gehören die IP-Adresse Ihres Geräts, der Typ und die Version Ihres Browsers, die von Ihnen besuchten Seiten, die Uhrzeit und das Datum Ihres Besuchs, die auf jeder Seite verbrachte Zeit und andere Details über Ihren Besuch.
                </p>
                <p className="mt-2">
                  Wenn Sie bei der Nutzung der Website auf bestimmte Fehler stoßen, können wir außerdem automatisch Daten über den Fehler und die Umstände seines Auftretens erfassen. Bitte beachten Sie, dass diese Informationen zwar für sich genommen nicht persönlich identifizierbar sind, dass es aber möglich sein kann, sie mit anderen Daten zu kombinieren, um einzelne Personen zu identifizieren.
                </p>
              </SubSection>
            </Section>

            {/* Sicherheit */}
            <Section title="Sicherheit Ihrer persönlichen Daten">
              <p>
                Wenn wir persönliche Daten erfassen und verarbeiten und solange wir diese Daten speichern, schützen wir sie mit wirtschaftlich vertretbaren Mitteln, um Verlust und Diebstahl sowie unbefugten Zugriff, Offenlegung, Kopieren, Verwendung oder Änderung zu verhindern.
              </p>
              <p>
                Obwohl wir unser Bestes tun, um die persönlichen Daten, die Sie uns zur Verfügung stellen, zu schützen, weisen wir darauf hin, dass keine Methode der elektronischen Übertragung oder Speicherung zu 100 Prozent sicher ist, und niemand kann totale Datensicherheit garantieren.
              </p>
            </Section>

            {/* Speicherdauer */}
            <Section title="Wie lange wir Ihre persönlichen Daten behalten">
              <p>
                Wir bewahren Ihre persönlichen Daten nur so lange auf, wie wir sie benötigen. Dieser Zeitraum kann davon abhängen, wofür wir Ihre Daten in Übereinstimmung mit dieser Datenschutzrichtlinie verwenden. Zum Beispiel, wenn Sie uns personenbezogene Daten wie beispielsweise eine E-Mail-Adresse zur Verfügung gestellt haben, wenn Sie uns wegen einer bestimmten Anfrage kontaktieren, dürfen wir diese Daten für die Dauer des Verfahrens aufbewahren, solange Ihre Anfrage offen ist und für unsere eigenen Unterlagen verbleibt, damit wir ähnliche Anfragen in Zukunft effektiv bearbeiten können.
              </p>
              <p>
                Falls erforderlich, können wir Ihre personenbezogenen Daten jedoch aufbewahren, um gesetzlichen, buchhalterischen oder Berichtsverpflichtungen nachzukommen oder für Archivierungszwecke im öffentlichen Interesse, wissenschaftlichen oder historischen Forschungs- oder statistische Zwecke.
              </p>
            </Section>

            {/* Kinder */}
            <Section title="Privatsphäre von Kindern">
              <p>
                Unsere Produkte und Dienstleistungen richten sich nicht direkt an Kinder unter 13 Jahren, und wissentlich erfassen wir keine persönlichen Daten von Kindern unter 13 Jahren.
              </p>
            </Section>

            {/* Offenlegung */}
            <Section title="Offenlegung persönlicher Daten an Dritte">
              <p>Wir können personenbezogene Daten weitergeben an:</p>
              <ul className="list-disc list-inside space-y-1.5 mt-2 ml-1">
                <li>eine Mutter-, Tochter- oder Schwestergesellschaft unseres Unternehmens</li>
                <li>Drittanbieter von Dienstleistungen, damit diese ihre Dienstleistungen erbringen können, einschließlich (ohne Einschränkung) IT-Dienstleister, Datenspeicher-, Hosting- und Serveranbieter, Fehlerprotokollierer, Inkassobüros, Anbieter von Wartungs- oder Problemlösungen, Marketinganbieter, professionelle Berater und Betreiber von Zahlungssystemen</li>
                <li>unsere Mitarbeiter, Auftragnehmer und/oder verbundene Unternehmen</li>
                <li>unsere bestehenden oder potenziellen Vertreter oder Geschäftspartner</li>
                <li>Kreditauskunfteien, Gerichte und Aufsichtsbehörden, falls Sie für Waren oder Dienstleistungen, die wir Ihnen bereitgestellt haben, nicht zahlen</li>
                <li>Gerichte, Aufsichtsbehörden und Strafverfolgungsbeamte, soweit dies gesetzlich vorgeschrieben ist, in Verbindung mit tatsächlichen oder bevorstehenden Gerichtsverfahren oder zur Feststellung, Ausübung oder Verteidigung unserer gesetzlichen Rechte</li>
                <li>Dritte, einschließlich Vertreter oder Subunternehmen, die uns bei der Bereitstellung von Informationen, Produkten, Dienstleistungen oder Direktmarketing für Sie unterstützen</li>
                <li>Dritte zur Erhebung und Verarbeitung von Daten</li>
                <li>ein Unternehmen, das unser gesamtes Vermögen und unsere Geschäftstätigkeit erwirbt oder an das wir sie ganz oder im Wesentlichen übertragen</li>
              </ul>
              <SubSection title="Derzeit genutzte Drittanbieter">
                <ul className="list-disc list-inside ml-1">
                  <li>Swipe One</li>
                </ul>
              </SubSection>
            </Section>

            {/* Ihre Rechte */}
            <Section title="Ihre Rechte und die Kontrolle Ihrer persönlichen Daten">
              <div className="space-y-3">
                <p><span className="font-semibold text-foreground">Ihre Wahl:</span> Indem Sie uns persönliche Daten zur Verfügung stellen, erklären Sie sich damit einverstanden, dass wir Ihre personenbezogenen Daten in Übereinstimmung mit dieser Datenschutzrichtlinie erheben, speichern, verwenden und weitergeben.</p>
                <p><span className="font-semibold text-foreground">Daten von Drittanbietern:</span> Wenn wir persönliche Informationen über Sie von einem Dritten erhalten, werden wir diese wie in dieser Datenschutzerklärung beschrieben schützen.</p>
                <p><span className="font-semibold text-foreground">Marketing-Erlaubnis:</span> Wenn Sie zuvor zugestimmt haben, dass wir Ihre persönlichen Daten für Direktmarketing verwenden, können Sie Ihre Meinung jederzeit ändern, indem Sie sich mit uns in Verbindung setzen.</p>
                <p><span className="font-semibold text-foreground">Zugriff:</span> Sie können Einzelheiten zu den persönlichen Daten anfordern, die wir über Sie gespeichert haben.</p>
                <p><span className="font-semibold text-foreground">Korrektur:</span> Wenn Sie der Meinung sind, dass Informationen, die wir über Sie gespeichert haben, ungenau, veraltet, unvollständig, irrelevant oder irreführend sind, wenden Sie sich bitte an uns.</p>
                <p><span className="font-semibold text-foreground">Nicht-Diskriminierung:</span> Wir werden Sie nicht benachteiligen, wenn Sie eines Ihrer Rechte in Bezug auf Ihre persönlichen Daten wahrnehmen.</p>
                <p><span className="font-semibold text-foreground">Benachrichtigung über Datenschutzverletzungen:</span> Wir werden die auf uns anwendbaren Gesetze in Bezug auf jede Datenschutzverletzung einhalten.</p>
                <p><span className="font-semibold text-foreground">Beschwerde:</span> Wenn Sie der Meinung sind, dass wir gegen ein entsprechendes Datenschutzgesetz verstoßen haben, wenden Sie sich bitte unter Verwendung der nachstehenden Angaben an uns. Sie haben auch das Recht, sich mit Ihrer Beschwerde an einen Datenschutzbeauftragten oder eine Regulierungsbehörde zu wenden.</p>
                <p><span className="font-semibold text-foreground">Abmelden:</span> Um sich von unserer E-Mail-Datenbank abzumelden oder Mitteilungen abzubestellen, wenden Sie sich bitte an uns über die in dieser Datenschutzrichtlinie angegebenen Kontaktmöglichkeiten.</p>
              </div>
            </Section>

            {/* Betriebsübertragungen */}
            <Section title="Betriebsübertragungen">
              <p>
                Im Falle einer Übernahme von uns oder unseren Vermögenswerten oder in dem unwahrscheinlichen Fall, dass wir unser Geschäft aufgeben oder in Konkurs gehen, würden wir Daten, einschließlich Ihrer persönlichen Informationen, zu den Vermögenswerten zählen, die an Parteien übertragen werden, die uns übernehmen.
              </p>
            </Section>

            {/* Grenzen */}
            <Section title="Grenzen unserer Richtlinie">
              <p>
                Unsere Website kann Links zu externen Websites enthalten, die nicht von uns betrieben werden. Bitte beachten Sie, dass wir keine Kontrolle über den Inhalt und die Richtlinien dieser Seiten haben und keine Verantwortung oder Haftung für deren Datenschutzpraktiken übernehmen können.
              </p>
            </Section>

            {/* Änderungen */}
            <Section title="Änderungen an diesen Richtlinien">
              <p>
                Es liegt in unserem Ermessen, unsere Datenschutzrichtlinie zu ändern, um Aktualisierungen unserer Geschäftsprozesse, aktuelle bewährte Praktiken oder gesetzliche oder behördliche Änderungen zu berücksichtigen. Wenn wir uns entscheiden, diese Datenschutzrichtlinie zu ändern, werden wir die Änderungen hier unter demselben Link veröffentlichen.
              </p>
              <p>
                Falls gesetzlich vorgeschrieben, holen wir Ihr Einverständnis ein oder geben Ihnen die Möglichkeit, sich für oder gegen eine neue Verwendung Ihrer personenbezogenen Daten zu entscheiden.
              </p>
            </Section>

            {/* DSGVO Zusatz */}
            <Section title="Zusätzliche Angaben zur Einhaltung der DSGVO (EU)">
              <SubSection title="Datenverantwortlicher / Datenverarbeiter">
                <p>
                  Die DSGVO unterscheidet zwischen Organisationen, die personenbezogene Daten für ihre eigenen Zwecke verarbeiten (bekannt als „Datenverantwortliche") und Organisationen, die personenbezogene Daten im Auftrag anderer Organisationen verarbeiten (bekannt als „Datenverarbeiter"). Wir, Technische Universität Darmstadt Institut für Produktionsmanagement, Technologie und Werkzeugmaschinen (PTW), autonomIQ, sind ein Datenverantwortlicher und/oder Datenverarbeiter in Bezug auf die personenbezogenen Daten, die Sie uns zur Verfügung stellen.
                </p>
              </SubSection>
              <SubSection title="Rechtsgrundlagen für die Verarbeitung Ihrer persönlichen Daten">
                <p className="mb-3">
                  Wir erheben und verwenden Ihre personenbezogenen Daten nur dann, wenn wir gesetzlich dazu berechtigt sind. Unsere Rechtsgrundlagen sind:
                </p>
                <ul className="list-disc list-inside space-y-1.5 ml-1">
                  <li><span className="font-medium text-foreground">Einverständnis (Art. 6 Abs. 1 lit. a DSGVO):</span> Wenn Sie uns Ihr Einverständnis geben, Ihre personenbezogenen Daten für einen bestimmten Zweck zu erfassen und zu verwenden. Sie können Ihre Zustimmung jederzeit widerrufen.</li>
                  <li><span className="font-medium text-foreground">Erfüllung eines Vertrags (Art. 6 Abs. 1 lit. b DSGVO):</span> Wenn Sie einen Vertrag oder eine Transaktion mit uns abgeschlossen haben, oder um vorbereitende Schritte zu unternehmen.</li>
                  <li><span className="font-medium text-foreground">Berechtigte Interessen (Art. 6 Abs. 1 lit. f DSGVO):</span> Wenn wir der Meinung sind, dass dies für unsere berechtigten Interessen notwendig ist, z. B. um unsere Dienste bereitzustellen, zu betreiben, zu verbessern und zu kommunizieren.</li>
                  <li><span className="font-medium text-foreground">Einhaltung der Rechtsvorschriften (Art. 6 Abs. 1 lit. c DSGVO):</span> In einigen Fällen können wir rechtlich verpflichtet sein, Ihre personenbezogenen Daten zu verwenden oder aufzubewahren.</li>
                </ul>
              </SubSection>
            </Section>

            {/* Internationale Übermittlung */}
            <Section title="Internationale Übermittlungen außerhalb des EWR">
              <p>
                Wir stellen sicher, dass jede Übermittlung personenbezogener Daten aus Ländern des Europäischen Wirtschaftsraums (EWR) in Länder außerhalb des EWR durch angemessene Schutzmaßnahmen geschützt wird, z. B. durch von der Europäischen Kommission genehmigte Standard-Datenschutzklauseln oder die Verwendung verbindlicher unternehmensinterner Vorschriften oder anderer rechtlich anerkannter Mittel.
              </p>
            </Section>

            {/* Weitere Rechte */}
            <Section title="Ihre Rechte und die Kontrolle über Ihre personenbezogenen Daten">
              <div className="space-y-3">
                <p>
                  <span className="font-semibold text-foreground">Einschränken:</span> Sie haben das Recht, uns aufzufordern, die Verarbeitung Ihrer personenbezogenen Daten einzuschränken, wenn (1) Sie Bedenken hinsichtlich der Richtigkeit haben, (2) Sie der Meinung sind, dass Ihre Daten unrechtmäßig verarbeitet wurden, (3) Sie die Daten ausschließlich für die Zwecke eines Rechtsanspruchs benötigen, oder (4) wir gerade Ihren Einspruch prüfen.
                </p>
                <p>
                  <span className="font-semibold text-foreground">Einspruch gegen die Verarbeitung:</span> Sie haben das Recht, der Verarbeitung Ihrer personenbezogenen Daten zu widersprechen, wenn dies auf unserem berechtigten oder öffentlichem Interesse beruht.
                </p>
                <p>
                  <span className="font-semibold text-foreground">Datenübertragbarkeit:</span> Sie haben das Recht, eine Kopie der personenbezogenen Daten anzufordern, die wir über Sie gespeichert haben, vorzugsweise im CSV-Format oder einem anderen leicht lesbaren maschinellen Format.
                </p>
              </div>
            </Section>

            {/* Kontakt */}
            <div className="surface-card rounded-xl p-6 border border-primary/20">
              <h2 className="text-base font-bold text-foreground mb-4">Kontakt</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Wenn Sie Fragen oder Bedenken in Bezug auf Ihre Privatsphäre haben, können Sie uns kontaktieren:
              </p>
              <div className="space-y-1.5 text-sm text-muted-foreground">
                <p className="font-medium text-foreground">Technische Universität Darmstadt</p>
                <p>Institut für Produktionsmanagement, Technologie und Werkzeugmaschinen (PTW), autonomIQ</p>
                <p>Otto-Berndt-Straße 2, 64287 Darmstadt</p>
                <p className="pt-2">
                  E-Mail: <a href="mailto:info@autonomiq.de" className="text-primary hover:underline">info@autonomiq.de</a>
                </p>
                <p>
                  Web: <a href="https://autonomiq.de/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://autonomiq.de/</a>
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
}

<script>
	import { goto } from '$app/navigation';
	import { ArrowLeft, Languages } from 'lucide-svelte';

	function back() {
		if (window?.history.length > 1) {
			window?.history.back();
		} else {
			goto('/');
		}
	}
</script>

<svelte:head>
	<title>Datenschutzerklärung</title>
	<meta
		name="description"
		content="Informationen zur Verarbeitung personenbezogener Daten, zur Nutzung lokaler Browserspeicher, zum Hosting und zu Online-Funktionen auf meinen Websites."
	/>
	<meta property="og:title" content="Datenschutzerklärung" />
	<meta
		property="og:description"
		content="Informationen zur Verarbeitung personenbezogener Daten, zur Nutzung lokaler Browserspeicher, zum Hosting und zu Online-Funktionen auf meinen Websites."
	/>
	<link rel="canonical" href="https://nwrenger.dev/datenschutz" />
</svelte:head>

<div class="p-4">
	<div class="mx-auto h-full max-w-2xl space-y-4">
		<div class="flex items-center justify-between">
			<!-- Back button -->
			<button
				type="button"
				onclick={back}
				title="Zurück"
				aria-label="Zurück"
				class="btn-icon preset-tonal"
			>
				<ArrowLeft />
			</button>

			<!-- Language Change -->
			<a data-sveltekit-replacestate href="/privacy-policy" class="btn preset-tonal">
				<Languages size={18} />
				<span>Englische Version</span>
			</a>
		</div>

		<div class="space-y-6">
			<div class="space-y-2">
				<h2 class="h2 font-semibold tracking-tight">Datenschutzerklärung</h2>

				<p>
					Diese Datenschutzerklärung gilt für die von mir betriebenen, öffentlich zugänglichen
					Websites und Projektseiten unter <strong>nwrenger.dev</strong> einschließlich der dazugehörigen
					Online-Dienste. Sie gilt nicht für Websites, die von anderen betrieben werden, oder für externe
					Websites, auf die ich lediglich verlinke. Die folgenden Abschnitte gelten für alle meine Websites,
					sofern kein bestimmter Dienst genannt wird.
				</p>
			</div>

			<div class="space-y-2">
				<h3 class="h3 font-semibold tracking-tight">1. Verantwortlicher</h3>
				<p>
					Verantwortlicher für die in dieser Datenschutzerklärung beschriebenen Verarbeitungen ist:
				</p>
				<p>
					<strong>Nils Wrenger</strong><br />
					E-Mail: <a href="mailto:nils@wrenger.net" class="anchor">nils@wrenger.net</a>
				</p>
			</div>

			<div class="space-y-2">
				<h3 class="h3 font-semibold tracking-tight">2. Hosting über GitHub Pages</h3>
				<p>
					Alle meine Websites werden über
					<a
						href="https://pages.github.com/"
						class="anchor"
						target="_blank"
						rel="noopener noreferrer">GitHub Pages</a
					>
					bereitgestellt. Wenn Ihr Browser eine Seite oder Ressource abruft, erhält GitHub die für die
					Bereitstellung erforderlichen technischen Daten, insbesondere Ihre IP-Adresse, die angeforderte
					Ressource und Informationen zur HTTP-Anfrage. GitHub gibt an, die IP-Adressen von Besuchern
					zu Sicherheitszwecken zu protokollieren und zu speichern, auch wenn diese nicht bei GitHub angemeldet
					sind.
				</p>
				<p>
					Ich nutze GitHub Pages zur sicheren, zuverlässigen und effizienten Bereitstellung meiner
					Websites. Rechtsgrundlage für die Verarbeitung personenbezogener Daten zu diesen Zwecken
					ist Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;f DSGVO. Die Bereitstellung der erforderlichen
					Verbindungsdaten ist für den Zugriff auf die Websites technisch notwendig. Für die
					gewöhnliche Nutzung sind weder ein Nutzerkonto noch persönliche Angaben wie Ihr Name oder
					Ihre E-Mail-Adresse erforderlich.
				</p>
				<p>
					GitHub kann personenbezogene Daten in den USA und in anderen Ländern außerhalb des
					Europäischen Wirtschaftsraums (EWR) verarbeiten. GitHub gibt an, am EU-US Data Privacy
					Framework teilzunehmen (Art.&nbsp;45 DSGVO) und bei Übermittlungen in Länder ohne
					angemessenes Datenschutzniveau, soweit einschlägig, grundsätzlich die
					Standardvertragsklauseln der Europäischen Kommission zu verwenden (Art.&nbsp;46 DSGVO).
				</p>
				<p>
					GitHub bestimmt die Speicherdauer seiner eigenen Sicherheitsprotokolle nach den jeweiligen
					Verarbeitungszwecken und gesetzlichen Verpflichtungen. In seiner öffentlichen
					Dokumentation nennt GitHub keine gesonderte feste Speicherdauer für die Protokollierung
					der IP-Adressen von Besuchern über GitHub Pages bereitgestellter Websites. Weitere
					Informationen zur Verarbeitung durch GitHub, zur Speicherdauer und zu den Garantien bei
					internationalen Datenübermittlungen finden Sie in der
					<a
						href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement"
						class="anchor"
						target="_blank"
						rel="noopener noreferrer">Datenschutzerklärung von GitHub</a
					>.
				</p>
			</div>

			<div class="space-y-2">
				<h3 class="h3 font-semibold tracking-tight">3. Lokale Speicher im Browser</h3>
				<p>
					Meine Websites verwenden <strong>Local Storage</strong> und/oder
					<strong>Session Storage</strong> Ihres Browsers, um die für ihre Funktionsfähigkeit erforderlichen
					Zustandsinformationen zu speichern. Dazu gehören je nach Website Anzeigeeinstellungen, der Zustand
					der Benutzeroberfläche, lokal erstellte Inhalte, Spielstände oder der Bearbeitungsstand von
					Fragebögen sowie Sitzungsinformationen. Diese Speicherung ermöglicht es, die jeweils gewünschte
					Funktion auch bei Seitenwechseln, beim Neuladen der Seite oder bei späteren Besuchen fortzusetzen.
				</p>
				<p>
					Bei Funktionen, die vollständig auf Ihrem Endgerät ausgeführt werden, überträgt die
					Anwendung die gespeicherten Informationen weder an mich noch an externe Dienste. Ausnahmen
					im Rahmen von Online-Funktionen oder einer bewussten Weitergabe von Informationen werden
					nachfolgend beschrieben. Der Zugriff auf die Browserspeicher ist bei regulärem
					Browserbetrieb auf die jeweilige Origin der Website (Protokoll, Hostname und Port)
					beschränkt.
				</p>
				<p>
					Soweit die Speicherung oder der Zugriff auf Informationen in Ihrem Endgerät unbedingt
					erforderlich ist, um einen von Ihnen ausdrücklich gewünschten digitalen Dienst
					bereitzustellen, ist gemäß §&nbsp;25 Abs.&nbsp;2 Nr.&nbsp;2 TDDDG keine gesonderte
					Einwilligung erforderlich. Diese Ausnahme betrifft den Zugriff auf Ihr Endgerät. Soweit
					darüber hinaus personenbezogene Daten unter meiner Verantwortung verarbeitet werden,
					erfolgt die Verarbeitung der für die Bereitstellung und Aufrechterhaltung der gewünschten
					Funktion erforderlichen personenbezogenen Daten, die keiner besonderen Kategorie
					angehören, auf Grundlage von Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;f DSGVO. Für die
					Verarbeitung besonderer Kategorien personenbezogener Daten gelten zusätzlich die
					Anforderungen des Art.&nbsp;9 DSGVO.
				</p>
				<p>
					Im Local Storage gespeicherte Informationen bleiben grundsätzlich erhalten, bis sie durch
					die Anwendung ersetzt oder zurückgesetzt oder von Ihnen bzw. Ihrem Browser gelöscht
					werden. Informationen im Session Storage bleiben grundsätzlich für die Dauer der Sitzung
					des jeweiligen Browser-Tabs erhalten, auch beim Neuladen der Seite. Sie können bei einer
					Sitzungswiederherstellung durch den Browser erneut verfügbar sein. Sie können die
					gespeicherten Informationen über die Website-Einstellungen Ihres Browsers löschen. Das
					Blockieren oder Löschen dieser Speicher kann dazu führen, dass bestimmte Funktionen nicht
					mehr ordnungsgemäß ausgeführt werden können oder gespeicherte Zustandsinformationen
					verloren gehen.
				</p>
			</div>

			<div class="space-y-2">
				<h3 class="h3 font-semibold tracking-tight">4. Online-Funktionen (Clash)</h3>
				<p>
					<a href="https://clash.nwrenger.dev/" class="anchor">Clash</a> verwendet einen zusätzlichen
					Server, um das gemeinsame Spielen über das Internet zu ermöglichen. Bei Verbindungen zu diesem
					Server werden notwendigerweise Ihre IP-Adresse und technische Verbindungsdaten verarbeitet.
					Das Spiel verarbeitet einen von Ihnen gewählten Anzeigenamen (Nickname), zufällig erzeugte Lobby-
					und Spielerkennungen, eine zufällig erzeugte geheime Authentifizierungskennung sowie Lobby-
					und Spielinformationen wie Einstellungen, Karten, Auswahlen und Punktestände.
				</p>
				<p>
					Diese Daten werden zum Verbindungsaufbau, zur Verwaltung und Authentifizierung von
					Spielsitzungen, zur Wiederherstellung unterbrochener Verbindungen, zur Synchronisierung
					des Spielgeschehens und zum sicheren Betrieb des Dienstes verarbeitet. Rechtsgrundlage ist
					Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;f DSGVO. Meine berechtigten Interessen liegen in der
					Bereitstellung der gewünschten Mehrspieler-Funktion sowie in deren zuverlässigem und
					sicherem Betrieb. Die erforderlichen Sitzungs- und Verbindungsdaten müssen für die
					Teilnahme bereitgestellt werden. Sie müssen weder Ihren echten Namen verwenden noch ein
					dauerhaftes Nutzerkonto erstellen.
				</p>
				<p>
					Ihr Nickname, Ihre Spielerkennung und die für das Spiel relevanten Informationen werden
					den anderen Spielern Ihrer Lobby bereitgestellt, soweit dies für das Spiel erforderlich
					ist. Ihre geheime Authentifizierungskennung ist ausschließlich für Ihren Client und den
					Spielserver bestimmt. Die zur Authentifizierung der Sitzung erforderlichen Daten werden im
					Session Storage Ihres Browsers gespeichert, um Ihre Verbindung auch nach dem Neuladen der
					Seite wiederherstellen zu können.
				</p>
				<p>
					Spieler- und Lobbyzustände werden im Arbeitsspeicher des Servers statt in einer
					dauerhaften Nutzerdatenbank gespeichert. Wenn Sie eine Lobby ausdrücklich verlassen, wird
					Ihr Spielerdatensatz entfernt. Nach einer festgestellten Verbindungsunterbrechung wird er
					in der Regel nach einer Frist von einer Minute entfernt, sofern Sie sich in dieser Zeit
					nicht erneut verbinden. Lobbys, die seit mehr als 30 Minuten inaktiv sind, werden im
					Rahmen eines alle 30 Minuten ausgeführten Bereinigungsvorgangs entfernt, in der Regel also
					nach etwa 30 bis 60 Minuten Inaktivität. Verbleibende temporäre Spieldaten werden
					freigegeben, sobald die Lobby und die zugehörige laufende Verarbeitung beendet sind.
					Andere Spieler können ihnen bereitgestellte Informationen unabhängig vom Dienst
					aufbewahren.
				</p>
				<p>
					Die Anwendung führt keine Zugriffsprotokolle mit IP-Adressen der Spieler und erstellt
					keine dauerhaften Spielerprofile. Sie erzeugt Betriebs- und Fehlermeldungen, die unter
					anderem Lobbykennungen, Spielerzahlen und Informationen zu Bereinigungsvorgängen enthalten
					können. Diese Meldungen sind von den temporären Spielzuständen getrennt. Soweit sie durch
					die Systemprotokollierung gespeichert werden, richtet sich ihre Speicherdauer nach der
					Protokollrotation, den Speichergrenzen des Systems und danach, ob Protokolle über einen
					Neustart hinaus erhalten bleiben. Sie dienen der Fehlerbehebung und dem zuverlässigen
					Betrieb auf Grundlage von Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;f DSGVO. Anbieter der
					Infrastruktur können unabhängig davon technische Daten zu Betriebs- und Sicherheitszwecken
					verarbeiten.
				</p>
				<p>
					Beim Importieren oder Aktualisieren von Kartensätzen ruft der Server deren Inhalte über
					<a href="https://api.crcast.cc/" class="anchor" target="_blank" rel="noopener noreferrer"
						>api.crcast.cc</a
					>
					ab. Dabei werden der Code des Kartensatzes und die Verbindungsdaten des Servers an diesen Dienst
					übermittelt, nicht jedoch Ihre Authentifizierungsdaten als Spieler oder die IP-Adresse Ihres
					Browsers. Heruntergeladene Kartensätze werden auf einem Datenträger zwischengespeichert und
					können bis zu ihrer Aktualisierung oder Entfernung auch anderen Lobbys zur Verfügung stehen.
					Sie werden nicht mit Ihrer Spielsitzung gelöscht. Bitte importieren Sie keine Kartensätze mit
					personenbezogenen Informationen, zu deren Weitergabe Sie nicht berechtigt sind. Sie können mich
					kontaktieren, um die Entfernung solcher Inhalte zu verlangen.
				</p>
				<p>
					Der Spielserver wird über
					<a
						href="https://www.oracle.com/cloud/"
						class="anchor"
						target="_blank"
						rel="noopener noreferrer">Oracle Cloud Infrastructure (OCI)</a
					>
					in der Region Frankfurt, Deutschland, betrieben. Soweit Oracle personenbezogene Daten in meinem
					Auftrag verarbeitet, ist Oracle als Auftragsverarbeiter tätig. Oracle kann Betriebsdaten auch
					für eigene Zwecke verarbeiten. Im Rahmen von Support-, Sicherheits- oder Betriebsleistungen
					kann eine Verarbeitung außerhalb des EWR erfolgen. Oracle nennt seine verbindlichen internen
					Datenschutzvorschriften für Auftragsverarbeiter (Binding Corporate Rules for Processors) und
					die EU-Standardvertragsklauseln als Garantien für einschlägige Datenübermittlungen gemäß Art.&nbsp;46
					DSGVO. Weitere Informationen, insbesondere zu den Kriterien des Anbieters für die Speicherdauer,
					finden Sie in der
					<a
						href="https://www.oracle.com/legal/privacy/services-privacy-policy/"
						class="anchor"
						target="_blank"
						rel="noopener noreferrer">Oracle Services Privacy Policy</a
					>
					sowie in den
					<a
						href="https://www.oracle.com/contracts/cloud-services/"
						class="anchor"
						target="_blank"
						rel="noopener noreferrer">Verträgen für Cloud-Dienste</a
					>.
				</p>
			</div>

			<div class="space-y-2">
				<h3 class="h3 font-semibold tracking-tight">5. Politischer Fragebogen (Smart-O-Mat)</h3>
				<p>
					Mit dem <a href="https://wahl.nwrenger.dev/" class="anchor">Smart-O-Mat</a> können Sie Ihre
					Positionen mit denen politischer Parteien vergleichen. Ihre Antworten und Gewichtungen können
					Rückschlüsse auf Ihre politischen Meinungen zulassen und damit zu den besonderen Kategorien
					personenbezogener Daten im Sinne des Art.&nbsp;9 DSGVO gehören, sofern sie sich auf eine identifizierbare
					Person beziehen.
				</p>
				<p>
					Die Bearbeitung des Fragebogens, die Berechnung der Ergebnisse und die Speicherung des
					Bearbeitungsstands erfolgen lokal in Ihrem Browser. Die Anwendung übermittelt Ihre
					Antworten und Ergebnisse weder an mich noch an einen externen Auswertungsdienst. Ein
					Nutzerkonto oder Angaben zu Ihrer Identität sind nicht erforderlich. Die Beantwortung der
					Fragen ist freiwillig. Sie können Ihren lokal gespeicherten Bearbeitungsstand
					zurücksetzen, indem Sie den Fragebogen neu starten oder die Browserspeicher der Website
					löschen. Die Ergebnisse dienen der Information und stellen keine automatisierten
					Entscheidungen mit rechtlicher oder ähnlich erheblicher Wirkung im Sinne des Art.&nbsp;22
					DSGVO dar.
				</p>
				<p>
					Die optionale Teilen-Funktion erzeugt einen Link, der Ihre Antworten in kodierter Form im
					URL-Fragment (dem Teil nach dem Zeichen #) enthält. Dieses Fragment wird bei HTTP-Anfragen
					an den Hosting-Anbieter normalerweise nicht übertragen. Die Antworten sind nicht
					verschlüsselt: Jede Person, die über den vollständigen Link verfügt, kann sie auslesen.
					Wenn Sie einen Link kopieren oder teilen, kann dieser in Ihrem Browser, in der
					Zwischenablage, bei verwendeten Nachrichtendiensten oder von den Empfängern gespeichert
					werden. Teilen Sie ihn daher nur mit Personen, denen Sie vertrauen. Links, die vor der
					Umstellung auf URL-Fragmente erstellt wurden, können Antworten in den
					URL-Abfrageparametern enthalten und sollten nicht weiterverwendet werden. Ich kann
					geteilte Links nicht widerrufen oder Kopien löschen, über die andere verfügen.
				</p>
				<p>
					Zur Anzeige aktueller Wahlumfragen ruft Ihr Browser öffentlich zugängliche Umfragedaten
					über die <a
						href="https://dawum.de/API/"
						class="anchor"
						target="_blank"
						rel="noopener noreferrer">DAWUM-API</a
					>
					ab. Die API erhält die für den Abruf erforderlichen technischen Verbindungsdaten, insbesondere
					Ihre IP-Adresse. Ihre Antworten und Ergebnisse werden bei diesem Abruf jedoch nicht übermittelt.
					Rechtsgrundlage für die Verarbeitung der Verbindungsdaten ist Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;f
					DSGVO. Mein berechtigtes Interesse liegt in der Bereitstellung aktueller Umfragedaten. DAWUM
					beschreibt die eigene Datenverarbeitung und Speicherdauer, einschließlich einer Löschfrist von
					48 Stunden für Website-Zugriffsprotokolle, in seiner
					<a
						href="https://dawum.de/Datenschutz/"
						class="anchor"
						target="_blank"
						rel="noopener noreferrer">Datenschutzerklärung</a
					>.
				</p>
			</div>

			<div class="space-y-2">
				<h3 class="h3 font-semibold tracking-tight">6. Kontaktaufnahme und öffentliche Beiträge</h3>
				<p>
					Wenn Sie mich per E-Mail kontaktieren, verarbeite ich Ihre E-Mail-Adresse, Ihre Nachricht
					und weitere von Ihnen mitgeteilte Informationen zur Bearbeitung Ihrer Anfrage.
					E-Mail-Dienstanbieter verarbeiten Daten, soweit dies für die Zustellung und Speicherung
					der Korrespondenz erforderlich ist. Rechtsgrundlage ist Art.&nbsp;6 Abs.&nbsp;1
					lit.&nbsp;f DSGVO aufgrund meines berechtigten Interesses an der Beantwortung von Anfragen
					oder Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;c DSGVO, soweit die Verarbeitung zur Erfüllung
					einer rechtlichen Verpflichtung erforderlich ist. Die Korrespondenz wird so lange
					aufbewahrt, wie dies zur Bearbeitung der Anfrage und damit verbundener Rückfragen
					erforderlich ist, oder darüber hinaus, soweit dies gesetzlich vorgeschrieben oder für
					Rechtsansprüche erforderlich ist. Die Bereitstellung von Kontaktdaten ist freiwillig. Ohne
					diese kann ich Ihnen gegebenenfalls nicht antworten.
				</p>
				<p>
					Bei einigen Projekten können über GitHub öffentliche Beiträge, Rückmeldungen oder
					Fehlerberichte eingereicht werden. Wenn Sie sich dort beteiligen, können Ihr Nutzername,
					die eingereichten Inhalte, Commit-Informationen und weitere öffentlich zugängliche
					Beitragsdaten für andere sichtbar sein. Ich verwende diese Informationen zur Prüfung von
					Beiträgen, zur Pflege der Projekte und zur Dokumentation von Änderungen auf Grundlage von
					Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;f DSGVO. Übernommene Beiträge können im öffentlichen
					Projekt und dessen Versionshistorie verbleiben, solange dies für die Projektpflege, die
					Zuordnung der Urheberschaft und die Lizenzierung erforderlich ist. Gesetzliche
					Löschungsrechte werden dadurch nicht ausgeschlossen. Von anderen Personen unterhaltene
					Kopien oder Forks können sich meinem Einfluss entziehen. Die eigene Datenverarbeitung
					durch GitHub wird in der in Abschnitt&nbsp;2 verlinkten Datenschutzerklärung beschrieben.
				</p>
			</div>

			<div class="space-y-2">
				<h3 class="h3 font-semibold tracking-tight">7. Keine Analyse, Werbung oder Tracking</h3>
				<p>
					Ich binde auf meinen Websites keine Analysedienste, Werbung oder websiteübergreifendes
					Tracking ein und erstelle keine Nutzerprofile zu Werbe- oder Analysezwecken. Die zuvor
					beschriebene technische Datenverarbeitung durch Hosting- und Dienstanbieter bleibt davon
					unberührt. Meine Websites treffen keine automatisierten Entscheidungen über Sie, die Ihnen
					gegenüber rechtliche Wirkung entfalten oder Sie in ähnlicher Weise erheblich
					beeinträchtigen (Art.&nbsp;22 DSGVO).
				</p>
				<p>
					Für externe Websites, die Sie über Links aufrufen, gelten deren eigene
					Datenschutzerklärungen. Anfragen an eingebundene externe Dienste werden in den jeweiligen
					Abschnitten dieser Datenschutzerklärung beschrieben.
				</p>
			</div>

			<div class="space-y-2">
				<h3 class="h3 font-semibold tracking-tight">8. Ihre Rechte</h3>
				<p>
					Nach Maßgabe der gesetzlichen Voraussetzungen der DSGVO stehen Ihnen die Rechte auf
					<strong>Auskunft</strong> (Art.&nbsp;15), <strong>Berichtigung</strong> (Art.&nbsp;16),
					<strong>Löschung</strong> (Art.&nbsp;17),
					<strong>Einschränkung der Verarbeitung</strong> (Art.&nbsp;18),
					<strong>Datenübertragbarkeit</strong> (Art.&nbsp;20) sowie
					<strong>Widerspruch</strong> (Art.&nbsp;21) zu. Soweit eine Verarbeitung auf Ihrer Einwilligung
					beruht, können Sie diese jederzeit widerrufen, ohne dass die Rechtmäßigkeit der bis zum Widerruf
					erfolgten Verarbeitung berührt wird.
				</p>
				<div class="space-y-1">
					<h4 class="h5 font-semibold tracking-tight">Widerspruchsrecht</h4>
					<p>
						Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben,
						jederzeit Widerspruch gegen die Verarbeitung Ihrer personenbezogenen Daten einzulegen,
						sofern diese auf Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;f DSGVO beruht. Ich werde die
						betreffende Verarbeitung einstellen, es sei denn, ich kann zwingende schutzwürdige
						Gründe für die Verarbeitung nachweisen, die Ihre Interessen, Rechte und Freiheiten
						überwiegen, oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung
						von Rechtsansprüchen.
					</p>
				</div>
				<p>
					Zur Ausübung Ihrer Rechte sowie zur Anforderung von Informationen oder Kopien der
					einschlägigen Garantien für internationale Datenübermittlungen können Sie mich unter
					<a href="mailto:nils@wrenger.net" class="anchor">nils@wrenger.net</a> kontaktieren. Ich erhebe
					keine zusätzlichen Daten allein zu dem Zweck, Nutzer für solche Anfragen zu identifizieren (Art.&nbsp;11
					DSGVO). Daten, die ausschließlich in Ihrem eigenen Browser gespeichert sind, können Sie direkt
					über die jeweilige Website oder die Einstellungen Ihres Browsers verwalten.
				</p>
				<p>
					Sie haben außerdem gemäß Art.&nbsp;77 DSGVO das Recht, sich bei einer
					Datenschutzaufsichtsbehörde zu beschweren, wenn Sie der Ansicht sind, dass die
					Verarbeitung Ihrer personenbezogenen Daten gegen die DSGVO verstößt. Dies gilt
					insbesondere in dem EU-Mitgliedstaat Ihres gewöhnlichen Aufenthaltsorts, Ihres
					Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes. Eine Liste der Aufsichtsbehörden
					finden Sie beim
					<a
						href="https://www.edpb.europa.eu/about-edpb/about-edpb/members_en"
						class="anchor"
						target="_blank"
						rel="noopener noreferrer">Europäischen Datenschutzausschuss</a
					>.
				</p>
			</div>

			<p><small>Stand: 26.11.2026</small></p>
		</div>
	</div>
</div>

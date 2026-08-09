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
		content="Lesen Sie die Datenschutzerklärung meiner Websites, um zu erfahren, wie personenbezogene Daten verarbeitet, lokale Browserspeicher genutzt und Online-Funktionen bereitgestellt werden."
	/>
	<!-- Open Graph -->
	<meta property="og:title" content="Datenschutzerklärung" />
	<meta
		property="og:description"
		content="Lesen Sie die Datenschutzerklärung meiner Websites, um zu erfahren, wie personenbezogene Daten verarbeitet, lokale Browserspeicher genutzt und Online-Funktionen bereitgestellt werden."
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
					Diese Datenschutzerklärung gilt für meine öffentlich zugänglichen Websites unter <strong
						>nwrenger.dev</strong
					>
					sowie für die von mir selbst betriebenen Projektseiten. Sie gilt <strong>nicht</strong> für
					Inhalte oder Datenverarbeitungen auf externen Websites Dritter (z.&nbsp;B. GitHub-Repositories
					oder Social-Media-Profile), auf die ich lediglich verlinke.
				</p>
			</div>

			<div class="space-y-2">
				<h3 class="h3 font-semibold tracking-tight">1. Verantwortlicher</h3>
				<p>
					Verantwortlicher für die in dieser Datenschutzerklärung beschriebenen Verarbeitungen ist:
				</p>
				<p>
					<strong>Nils Wrenger</strong><br />
					E-Mail:
					<a href="mailto:nils@wrenger.net" class="anchor">nils@wrenger.net</a>
				</p>
			</div>

			<div class="space-y-2">
				<h3 class="h3 font-semibold tracking-tight">2. Lokale Speicher im Browser</h3>
				<p>
					Einzelne Websites können <strong>Local Storage</strong> und/oder
					<strong>Session Storage</strong> Ihres Browsers verwenden. Darin können beispielsweise Anzeige-
					und Spracheinstellungen, Zustandsinformationen oder Spielstände gespeichert werden.
				</p>
				<p>
					Bei rein lokal ausgeführten Funktionen verbleiben diese Informationen auf Ihrem Endgerät
					und werden nicht an mich oder an Dritte übertragen. Soweit eine Online-Funktion die
					Übertragung bestimmter Zustandsinformationen erfordert, gilt ergänzend Abschnitt&nbsp;4
					dieser Datenschutzerklärung.
				</p>
				<p>
					Nur soweit die Speicherung oder der Zugriff auf Informationen in Ihrem Endgerät unbedingt
					erforderlich ist, um einen von Ihnen ausdrücklich gewünschten digitalen Dienst
					bereitzustellen, ist gemäß §&nbsp;25 Abs.&nbsp;2 Nr.&nbsp;2 TDDDG keine Einwilligung
					erforderlich.
				</p>
			</div>

			<div class="space-y-2">
				<h3 class="h3 font-semibold tracking-tight">3. Hosting über GitHub Pages</h3>
				<p>
					Die öffentlich zugänglichen Websites werden grundsätzlich über
					<a href="https://pages.github.com/" class="anchor" target="_blank" rel="noopener"
						>GitHub Pages</a
					>
					bereitgestellt. Betreiber des Dienstes ist GitHub. Beim Aufruf einer über GitHub Pages bereitgestellten
					Website wird insbesondere Ihre <strong>IP-Adresse</strong> von GitHub protokolliert und zu Sicherheitszwecken
					gespeichert.
				</p>
				<p>
					Die Nutzung von GitHub Pages dient der zuverlässigen und sicheren Bereitstellung der
					Websites. Soweit die Nutzung des Dienstes eine Verarbeitung personenbezogener Daten durch
					mich voraussetzt, erfolgt diese auf Grundlage von Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;f
					DSGVO. Das berechtigte Interesse liegt in der sicheren, zuverlässigen und effizienten
					Bereitstellung meiner Websites.
				</p>
				<p>
					GitHub verarbeitet personenbezogene Daten in verschiedenen Ländern, darunter auch in den
					USA. Für Übermittlungen in Länder ohne angemessenes Datenschutzniveau gibt GitHub an,
					grundsätzlich die Standardvertragsklauseln der Europäischen Kommission zu verwenden.
					GitHub nimmt außerdem am EU-US Data Privacy Framework teil. Die Speicherdauer richtet sich
					nach dem jeweiligen Verarbeitungszweck und etwaigen gesetzlichen Verpflichtungen.
				</p>
				<p>
					Weitere Informationen zur Verarbeitung, zu internationalen Datenübermittlungen und zur
					Speicherdauer finden Sie in der
					<a
						href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement"
						class="anchor"
						target="_blank"
						rel="noopener">Datenschutzerklärung von GitHub</a
					>.
				</p>
			</div>

			<div class="space-y-2">
				<h3 class="h3 font-semibold tracking-tight">4. Online-Funktionen und APIs</h3>
				<p>
					Einzelne Projektseiten können zur Bereitstellung von <strong>Online-Funktionen</strong>
					Verbindungen zu von mir betriebenen APIs oder Serverdiensten herstellen. Dies betrifft beispielsweise
					Funktionen, bei denen Daten zwischen mehreren Nutzern ausgetauscht oder serverseitig verarbeitet
					werden müssen.
				</p>
				<p>
					Dabei können technisch erforderliche Verbindungsdaten, insbesondere die IP-Adresse, sowie
					Daten verarbeitet werden, die im Rahmen der jeweiligen Funktion angegeben oder erzeugt
					werden. Dazu können beispielsweise gewählte Anzeigenamen, zufällig erzeugte Kennungen
					sowie Sitzungs-, Lobby-, Spiel- oder sonstige Zustandsinformationen gehören. Technisch
					erforderliche Verbindungsdaten werden automatisch übermittelt und sind zur Bereitstellung
					der jeweiligen Online-Funktion erforderlich.
				</p>
				<p>
					Soweit die jeweilige Funktion mehrere Nutzer umfasst, können die für die gemeinsame
					Funktion erforderlichen Daten auch den anderen Teilnehmern der jeweiligen Sitzung
					bereitgestellt werden.
				</p>
				<p>
					Die Verarbeitung erfolgt ausschließlich zur Bereitstellung der jeweiligen Online-Funktion,
					zur Zuordnung von Verbindungen und Sitzungen sowie zur Gewährleistung der technischen
					Sicherheit und Funktionsfähigkeit. Rechtsgrundlage ist Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;f
					DSGVO. Mein berechtigtes Interesse besteht in der Bereitstellung und sicheren technischen
					Durchführung der jeweiligen Online-Funktion.
				</p>
				<p>
					Die für diese Online-Funktionen verwendeten Serverdienste werden derzeit über
					<a href="https://www.oracle.com/cloud/" class="anchor" target="_blank" rel="noopener"
						>Oracle Cloud Infrastructure (OCI)</a
					>
					gehostet. Soweit Oracle im Zusammenhang mit dem Hosting personenbezogene Daten in meinem Auftrag
					verarbeitet, ist Oracle als Auftragsverarbeiter tätig. Je nach Dienst können dabei auch technisch
					erforderliche Verbindungs- und Systembetriebsdaten verarbeitet werden.
				</p>
				<p>
					Oracle stellt grundsätzlich Möglichkeiten bereit, die Region auszuwählen, in der Workloads
					und Kundeninhalte gespeichert werden. Je nach Dienst sowie im Rahmen von Support- oder
					sonstigen Betriebsleistungen kann eine Verarbeitung dennoch auch in anderen Ländern
					erfolgen. Soweit internationale Datenübermittlungen rechtlichen Beschränkungen
					unterliegen, sieht Oracle hierfür geeignete Garantien in seinen anwendbaren
					Datenschutzbedingungen vor.
				</p>
				<p>
					Weitere Informationen zur Verarbeitung personenbezogener Daten durch Oracle im
					Zusammenhang mit dessen Diensten finden Sie in der
					<a
						href="https://www.oracle.com/legal/privacy/services-privacy-policy/"
						class="anchor"
						target="_blank"
						rel="noopener">Oracle Services Privacy Policy</a
					>.
				</p>
				<p>
					Projektbezogene Daten werden auf Anwendungsebene grundsätzlich nur so lange verarbeitet
					oder gespeichert, wie dies für die jeweilige Verbindung, Sitzung oder Funktion
					erforderlich ist. Projektbezogene Zustandsdaten werden entfernt, sobald sie für die
					jeweilige Online-Funktion nicht mehr benötigt werden. Dauerhafte Nutzerkonten oder
					Nutzerprofile werden im Rahmen dieser Verarbeitung nicht erstellt.
				</p>
			</div>

			<div class="space-y-2">
				<h3 class="h3 font-semibold tracking-tight">5. Keine Analyse, Werbung oder Tracking</h3>
				<p>
					Ich binde auf diesen Websites keine Analysedienste, personalisierte Werbung oder
					websiteübergreifendes Tracking ein und erstelle keine Nutzerprofile zu Werbe- oder
					Analysezwecken.
				</p>
			</div>

			<div class="space-y-2">
				<h3 class="h3 font-semibold tracking-tight">6. Ihre Rechte</h3>
				<p>
					Soweit personenbezogene Daten verarbeitet werden, stehen Ihnen nach Maßgabe der
					gesetzlichen Voraussetzungen insbesondere die Rechte auf <strong>Auskunft</strong>
					(Art.&nbsp;15 DSGVO),
					<strong>Berichtigung</strong> (Art.&nbsp;16 DSGVO),
					<strong>Löschung</strong> (Art.&nbsp;17 DSGVO),
					<strong>Einschränkung der Verarbeitung</strong> (Art.&nbsp;18 DSGVO),
					<strong>Datenübertragbarkeit</strong> (Art.&nbsp;20 DSGVO) sowie
					<strong>Widerspruch</strong> gegen bestimmte Verarbeitungen (Art.&nbsp;21 DSGVO) zu.
				</p>

				<div class="space-y-1">
					<h4 class="h5 font-semibold tracking-tight">Widerspruchsrecht</h4>
					<p>
						Soweit eine Verarbeitung auf Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;f DSGVO beruht, haben Sie
						das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit
						Widerspruch gegen die Verarbeitung Ihrer personenbezogenen Daten einzulegen. Die
						Verarbeitung wird dann grundsätzlich beendet, sofern keine zwingenden schutzwürdigen
						Gründe für die weitere Verarbeitung bestehen oder die Verarbeitung der Geltendmachung,
						Ausübung oder Verteidigung von Rechtsansprüchen dient.
					</p>
				</div>

				<p>
					Zur Ausübung dieser Rechte können Sie mich unter
					<a href="mailto:nils@wrenger.net" class="anchor">nils@wrenger.net</a>
					kontaktieren.
				</p>
				<p>
					Sie haben außerdem gemäß Art.&nbsp;77 DSGVO das Recht, sich bei einer
					Datenschutzaufsichtsbehörde zu beschweren, wenn Sie der Ansicht sind, dass die
					Verarbeitung Ihrer personenbezogenen Daten gegen die DSGVO verstößt.
				</p>
			</div>

			<p><small>Stand: 09.08.2026</small></p>
		</div>
	</div>
</div>

<script>
	import { ArrowLeft, Languages } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Datenschutzerklärung</title>
	<meta
		name="description"
		content="Lesen Sie die Datenschutzerklärung meiner Websites, um zu erfahren, wie personenbezogene Daten verarbeitet werden, wie Local/Session Storage genutzt wird und wie die Seiten über GitHub Pages gehostet werden."
	/>
	<!-- Open Graph -->
	<meta property="og:title" content="Datenschutzerklärung" />
	<meta
		property="og:description"
		content="Lesen Sie die Datenschutzerklärung meiner Websites, um zu erfahren, wie personenbezogene Daten verarbeitet werden, wie Local/Session Storage genutzt wird und wie die Seiten über GitHub Pages gehostet werden."
	/>
</svelte:head>

<div class="p-4">
	<div class="mx-auto h-full max-w-2xl space-y-4">
		<div class="flex items-center justify-between">
			<!-- Back button -->
			<button
				onclick={() => {
					if (window?.history.length > 1) {
						window?.history.back();
					} else {
						window.close();
					}
				}}
				title="Return"
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
				<h3 class="h3 font-semibold tracking-tight">Datenschutzerklärung</h3>

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
				<h4 class="h4 font-semibold tracking-tight">1. Personenbezogene Daten</h4>
				<p>
					Von mir werden auf den genannten Websites <strong>keine personenbezogenen Daten</strong>
					erhoben, gespeichert oder verarbeitet.
				</p>
			</div>

			<div class="space-y-2">
				<h4 class="h4 font-semibold tracking-tight">2. Lokale Speicher im Browser</h4>
				<p>
					Es kann sein, dass diese Websites <strong>Local Storage</strong> und/oder
					<strong>Session Storage</strong> Ihres Browsers nutzen. Dabei werden ausschließlich
					oberflächenbezogene Einstellungen (z.&nbsp;B. Ansichts- oder Zustandsinformationen)
					gespeichert. Diese Informationen <strong>verlassen Ihren Browser nicht</strong>
					und werden <strong>weder an mich noch an Dritte übertragen</strong>. Die Speicherung
					erfolgt auf Grundlage von §&nbsp;25 TDDDG und ist nur insoweit zulässig, wie sie
					<em>unbedingt erforderlich</em> ist, um die von Ihnen ausdrücklich gewünschte Nutzung der Website
					zu ermöglichen.
				</p>
			</div>

			<div class="space-y-2">
				<h4 class="h4 font-semibold tracking-tight">3. Hosting</h4>
				<p>
					Die Bereitstellung der Websites erfolgt über
					<a href="https://pages.github.com/" class="anchor" target="_blank" rel="noopener"
						>GitHub Pages</a
					>. Beim Aufruf der Seiten verarbeitet GitHub technisch erforderliche Daten wie
					insbesondere Ihre
					<strong>IP-Adresse</strong>, um die Auslieferung der Inhalte und den sicheren Betrieb zu
					gewährleisten. Auf diese Verarbeitung habe ich keinen Einfluss. Weitere Informationen
					finden Sie in der
					<a
						href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement"
						class="anchor"
						target="_blank"
						rel="noopener">Datenschutzerklärung von GitHub</a
					>.
				</p>
			</div>

			<p><small>Stand: 20.09.2025</small></p>
		</div>
	</div>
</div>

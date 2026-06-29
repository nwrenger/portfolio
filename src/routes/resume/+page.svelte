<script>
	import { ArrowLeft, Download } from 'lucide-svelte';
</script>

<svelte:head>
	<title>View Resume - Portfolio | Nils</title>
	<meta
		name="description"
		content="Read my resume for an overview of my experience and skills. Some details are anonymized for privacy; full references can be shared in a professional setting."
	/>
	<!-- Open Graph -->
	<meta property="og:title" content="View Resume - Portfolio | Nils" />
	<meta
		property="og:description"
		content="Read my resume for an overview of my experience and skills. Some details are anonymized for privacy; full references can be shared in a professional setting."
	/>
	<link rel="canonical" href="https://nwrenger.dev/resume/" />
</svelte:head>

<div class="flex h-full p-4">
	<div class="mx-auto flex min-h-0 w-full max-w-2xl flex-col space-y-4">
		<div class="flex items-center justify-between">
			<!-- Back button -->
			<a href="/" title="Return" aria-label="Return" class="btn-icon preset-tonal">
				<ArrowLeft size={18} />
			</a>

			<a
				href="/resume.pdf"
				download
				title="Download as PDF"
				aria-label="Download as PDF"
				class="btn-icon preset-tonal"
			>
				<Download size={18} />
			</a>
		</div>

		<header class="space-y-2">
			<h2 class="h2 font-semibold tracking-tight">View Resume</h2>

			<p>
				Read my resume for an overview of my experience and skills. Some details are anonymized for
				privacy; full references can be shared in a professional setting.
			</p>
		</header>

		<iframe
			src="/resume.pdf"
			class="border-surface-200-800 min-h-0 flex-1 rounded-xl border"
			title="Resume"
		></iframe>
	</div>
</div>

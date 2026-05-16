<script lang="ts">
	import { ArrowLeft } from 'lucide-svelte';
	import LinksSelect from '$lib/components/ui/LinksSelect.svelte';
	import { sponsors } from '$lib/content';
</script>

<svelte:head>
	<title>Sponsor Me - Portfolio | Nils</title>
	<meta
		name="description"
		content="Your support helps keep my projects open source, actively maintained, and available without paywalls. Find links to sponsoring methods here."
	/>
	<!-- Open Graph -->
	<meta property="og:title" content="Sponsor Me - Portfolio | Nils" />
	<meta
		property="og:description"
		content="Your support helps keep my projects open source, actively maintained, and available without paywalls. Find links to sponsoring methods here."
	/>
	<link rel="canonical" href="https://nwrenger.dev/sponsors/" />
</svelte:head>

<div class="p-4">
	<div class="mx-auto h-full max-w-2xl space-y-4">
		<div>
			<!-- Back button -->
			<a href="/" title="Return" aria-label="Return" class="btn-icon preset-tonal">
				<ArrowLeft size={18} />
			</a>
		</div>

		<header class="space-y-2">
			<h2 class="h2 font-semibold tracking-tight">Sponsor Me</h2>

			<p>
				Your support helps keep my projects open source, actively maintained, and available without
				paywalls. You can find sponsoring options below.
			</p>
		</header>

		<LinksSelect links={sponsors} />
	</div>
</div>

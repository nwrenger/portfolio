<script lang="ts">
	import { ArrowLeft } from 'lucide-svelte';
	import LinksSelect from '$lib/components/ui/LinksSelect.svelte';
	import { socials } from '$lib/content';
</script>

<svelte:head>
	<title>Get in Touch - Portfolio | Nils</title>
	<meta
		name="description"
		content="Feel free to reach out for collaborations, inquiries, or just to say hi. Find links to social media and email here."
	/>
	<!-- Open Graph -->
	<meta property="og:title" content="Get in Touch - Portfolio | Nils" />
	<meta
		property="og:description"
		content="Feel free to reach out for collaborations, inquiries, or just to say hi. Find links to social media and email here."
	/>
	<link rel="canonical" href="https://nwrenger.dev/contacts/" />
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
			<h2 class="h2 font-semibold tracking-tight">Get in Touch</h2>

			<p>
				Feel free to reach out for collaborations, inquiries, or just to say hi. You can find links
				to my social media profiles and email below.
			</p>
		</header>

		<LinksSelect links={socials} />
	</div>
</div>

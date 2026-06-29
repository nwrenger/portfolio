<script lang="ts">
	import { ArrowLeft } from 'lucide-svelte';
	import LinksSelect from '$lib/components/ui/LinksSelect.svelte';
	import { socials, sponsors } from '$lib/content';
</script>

<svelte:head>
	<title>Get in Touch - Portfolio | Nils</title>
	<meta
		name="description"
		content="Feel free to reach out for collaborations, inquiries, or support my open-source work. Find links to social media, email, and sponsorship options here."
	/>
	<!-- Open Graph -->
	<meta property="og:title" content="Get in Touch - Portfolio | Nils" />
	<meta
		property="og:description"
		content="Feel free to reach out for collaborations, inquiries, or support my open-source work. Find links to social media, email, and sponsorship options here."
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

		<div class="space-y-8">
			<div class="space-y-4">
				<header class="space-y-2">
					<h2 class="h2 font-semibold tracking-tight">Get in Touch</h2>

					<p>
						Feel free to reach out for collaborations, inquiries, or just to say hi. You can find
						links to my social media profiles and email below.
					</p>
				</header>

				<LinksSelect links={socials} />
			</div>

			<div class="space-y-4">
				<section class="space-y-2">
					<h3 class="h3 font-semibold tracking-tight">Support My Work</h3>
					<p>
						If you use my open-source projects, sponsoring helps me keep them open source, actively
						maintained, and available without paywalls. You can find sponsoring options below.
					</p>
				</section>

				<LinksSelect links={sponsors} />
			</div>
		</div>
	</div>
</div>

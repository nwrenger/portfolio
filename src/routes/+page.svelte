<script>
	import Socials from '$lib/components/ui/Socials.svelte';
</script>

<svelte:head>
	<title>Portfolio | Nils</title>
	<meta
		name="description"
		content="Hey, I'm Nils 👋, Computer Science student building fast backends and CLIs in Rust, sleek UIs with Svelte, and the occasional Minecraft mod. Explore my projects!"
	/>
	<!-- Open Graph -->
	<meta property="og:title" content="Portfolio | Nils" />
	<meta
		property="og:description"
		content="Hey, I'm Nils 👋, Computer Science student building fast backends and CLIs in Rust, sleek UIs with Svelte, and the occasional Minecraft mod. Explore my projects!"
	/>
	<link rel="canonical" href="https://nwrenger.dev/" />
</svelte:head>

<div class="flex h-full items-center justify-center p-4">
	<section class="flex w-full max-w-xl flex-col items-center gap-6 text-center">
		<div class="flex flex-col items-center gap-3">
			<h1 class="h1 font-bold tracking-tight">
				Hey, I'm <span class="text-primary-500">Nils</span> 👋
			</h1>
			<p>
				Computer Science student building fast backends and CLIs in <code>Rust</code>, sleek UIs
				with
				<code>Svelte</code>, and the occasional
				<code>Minecraft</code> mod.
			</p>
		</div>

		<div class="flex flex-wrap items-center justify-center gap-3">
			<a href="/projects" class="btn preset-filled-brand">My Projects</a>
			<a href="/resume" class="btn preset-filled-tertiary-600-400">View Resume</a>
			<span class="chip preset-tonal">
				<span class="relative flex size-2 opacity-70">
					<span
						class="preset-filled-surface-950-50 absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
					></span>
					<span class="preset-filled-surface-950-50 relative inline-flex size-2 rounded-full"
					></span>
				</span>
				Germany
			</span>
		</div>

		<Socials />

		<a href="/privacy-policy" class="anchor text-xs">Privacy Policy</a>
	</section>
</div>

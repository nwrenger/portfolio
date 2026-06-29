<svelte:head>
	<title>Portfolio | Nils</title>
	<meta
		name="description"
		content="Hi, I'm Nils, a high school coder passionate about Rust, Svelte and Minecraft modding. Explore my portfolio and projects!"
	/>
	<!-- Open Graph -->
	<meta property="og:title" content="Portfolio | Nils" />
	<meta
		property="og:description"
		content="Hi, I'm Nils, a high school coder passionate about Rust, Svelte and Minecraft modding. Explore my portfolio and projects!"
	/>
	<link rel="canonical" href="https://nwrenger.dev/" />
</svelte:head>

<div class="flex h-full items-center justify-center p-4">
	<section class="flex w-full max-w-xl flex-col items-center gap-6 text-center">
		<div class="flex flex-col items-center gap-2">
			<h1 class="h1 font-bold tracking-tight">
				Hey, I'm <span class="text-primary-500">Nils</span> 👋
			</h1>
			<p>
				High-school developer building fast backends and CLIs in <code>Rust</code>, sleek UIs with
				<code>Svelte</code>, and the occasional
				<code>Minecraft</code> mod.
			</p>
		</div>

		<div class="flex flex-wrap items-center justify-center gap-3">
			<a href="/projects" class="btn preset-tonal-primary">My Projects</a>
			<a href="/resume" class="btn preset-tonal-secondary">View Resume</a>
			<a href="/contacts" class="btn preset-tonal-tertiary">Get in Touch</a>
		</div>

		<a href="/privacy-policy" class="anchor text-xs">Privacy Policy</a>
	</section>
</div>

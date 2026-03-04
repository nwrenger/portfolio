<script lang="ts">
	import { projectTypes, socials, sponsors } from '$lib/content';
	import LinksSelect from '$lib/components/ui/LinksSelect.svelte';
	import Scroller from '$lib/components/ui/Scroller.svelte';
	import { goto } from '$app/navigation';
</script>

<svelte:head>
	<title>Portfolio | Nils</title>
	<meta
		name="description"
		content="Hi, I'm Nils, a high school coder passionate about Rust and Svelte. Explore my portfolio and projects!"
	/>
	<!-- Open Graph -->
	<meta property="og:title" content="Portfolio | Nils" />
	<meta
		property="og:description"
		content="Hi, I'm Nils, a high school coder passionate about Rust and Svelte. Explore my portfolio and projects!"
	/>
</svelte:head>

<Scroller>
	{#snippet contents()}
		<div class="flex h-full snap-center items-center justify-center p-4">
			<section class="flex w-full max-w-xl flex-col items-center gap-6 text-center">
				<div class="flex flex-col items-center gap-2">
					<h1 class="h1 font-bold tracking-tight">
						Hey, I'm <span class="text-primary">Nils</span> 👋
					</h1>
					<p>
						High-school developer building fast backends and CLIs in <code
							class="text-primary bg-primary/10 rounded px-1">Rust</code
						>, sleek UIs with
						<code class="text-secondary bg-secondary/10 rounded px-1">Svelte</code>, and the
						occasional <code class="text-tertiary bg-tertiary/10 rounded px-1">Minecraft</code> mod.
					</p>
				</div>

				<div class="flex flex-wrap items-center justify-center gap-3">
					<a href="#projects" class="btn preset-tonal-primary"> My Projects </a>
					<a href="#contacts" class="btn preset-tonal-secondary"> Get in Touch </a>
					<a href="#sponsors" class="btn preset-tonal-tertiary"> Sponsor Me </a>
				</div>

				<a onclick={() => goto('/')} href="/privacy-policy" class="anchor text-xs">Privacy Policy</a
				>
			</section>
		</div>

		<div id="projects" class="flex h-full snap-center items-center justify-center p-4">
			<LinksSelect label="My Projects" bg="preset-tonal-primary" links={projectTypes} />
		</div>

		<div id="contacts" class="flex h-full snap-center items-center justify-center p-4">
			<LinksSelect label="Get in Touch" bg="preset-tonal-secondary" links={socials} />
		</div>

		<div id="sponsors" class="flex h-full snap-center items-center justify-center p-4">
			<LinksSelect label="Sponsor Me" bg="preset-tonal-tertiary" links={sponsors} />
		</div>
	{/snippet}
</Scroller>

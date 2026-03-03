<script lang="ts">
	import { projectTypes, socials, sponsors } from '$lib/content';
	import LinksSelect from '$lib/components/ui/LinksSelect.svelte';
	import Scroller from '$lib/components/ui/Scroller.svelte';
	import { page } from '$app/state';
	import { tick, untrack } from 'svelte';
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
			<div class="flex max-h-full w-full max-w-2xl">
				<section class="space-y-4 text-center">
					<h1 class="h1">Hi, there!</h1>
					<p>
						I'm Nils Wrenger, a high-school <code>Rust</code> enthusiast who loves building
						everything from fast backends and CLIs to sleek UIs in <code>Svelte</code>, and even the
						occasional
						<code>Minecraft</code> mod. Check out my projects below or feel free to reach out!
					</p>
					<div
						class="flex flex-col items-center justify-center space-y-4 pt-4 sm:flex-row sm:space-y-0 sm:space-x-4"
					>
						<a href="#projects" class="btn preset-tonal"> My Projects </a>
						<a href="#sponsors" class="btn preset-filled-primary-500"> Sponsor Me </a>
						<a href="#contacts" class="btn preset-filled-tertiary-500"> Contacts </a>
					</div>
					<div class="pt-4 text-sm">
						<a onclick={() => goto('/')} href="/privacy-policy" class="anchor">Privacy Policy</a>
					</div>
				</section>
			</div>
		</div>

		<div id="projects" class="flex h-full snap-center items-center justify-center p-4">
			<LinksSelect label="My Projects" bg="preset-tonal" links={projectTypes} />
		</div>

		<div id="sponsors" class="flex h-full snap-center items-center justify-center p-4">
			<LinksSelect label="Sponsor Me" bg="preset-tonal-primary" links={sponsors} />
		</div>

		<div id="contacts" class="flex h-full snap-center items-center justify-center p-4">
			<LinksSelect label="Contacts" bg="preset-tonal-tertiary" links={socials} />
		</div>
	{/snippet}
</Scroller>

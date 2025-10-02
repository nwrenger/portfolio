<script lang="ts">
	import { socials, sponsors, takes, year } from '$lib';
	import LinksSelect from '$lib/components/ui/LinksSelect.svelte';
	import { ChevronDown } from 'lucide-svelte';

	let bottom_content: HTMLDivElement;
</script>

<svelte:head>
	<title>Portfolio | Nils</title>
	<meta
		name="description"
		content="Hi, I'm Nils – a high school coder passionate about Rust and Svelte. Explore my portfolio, projects, and skills!"
	/>
	<!-- Open Graph -->
	<meta property="og:title" content="Portfolio | Nils" />
	<meta
		property="og:description"
		content="Hi, I'm Nils – a high school coder passionate about Rust and Svelte. Explore my portfolio, projects, and skills!"
	/>
</svelte:head>

<div class="mx-auto h-full max-w-3xl px-4 py-6">
	<div class="min-h-svh-y-5 flex flex-col space-y-5 *:pt-4">
		<div class="flex flex-1 items-center justify-center">
			<section class="space-y-4 text-center sm:px-4">
				<h1 class="h1">Hi, there!</h1>
				<p>
					I'm Nils Wrenger, a high-school <code>Rust</code> enthusiast who loves building anything
					from fast backends and CLIs to sleek UIs in <code>Svelte</code>. Check out my projects
					below or consider sponsoring me. Feel free to reach out for a chat or anything else!
				</p>
				<div
					class="flex flex-col items-center justify-center space-y-4 pt-4 md:flex-row md:space-y-0 md:space-x-4"
				>
					<a href="/projects" class="btn preset-tonal">My Projects</a>
					<!-- Sponsor Me Button && Popup -->
					<LinksSelect
						label="Sponsor Me"
						bg="preset-filled-primary-500"
						contrast="preset-tonal-primary"
						links={sponsors}
					/>
					<!-- Contacts Button && Popup -->
					<LinksSelect
						label="Contacts"
						bg="preset-filled-tertiary-500"
						contrast="preset-tonal-tertiary"
						links={socials}
					/>
				</div>
			</section>
		</div>

		<div class="flex justify-center">
			<button
				onclick={() => bottom_content?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
				class="flex w-fit animate-bounce flex-col items-center"
			>
				<p>More About Me</p>
				<ChevronDown size={32} />
			</button>
		</div>
	</div>

	<div class="min-h-svh-y-100 space-y-6 pt-4" bind:this={bottom_content}>
		<section class="space-y-4">
			<h3 class="h3">Skills</h3>
			<p>
				My focus is on UI development (websites, apps and TUIs) and performance-driven projects like
				algorithms and databases. Therefore, my proficiency lies in <code>Rust</code> and in
				<code>Svelte</code>
				(i.e.
				<code>Javascript</code> / <code>Typescript</code>). But in the past, I've experimented with
				programming languages like <code>Go</code>,
				<code>Zig</code>, and <code>Python</code>, and even delved into game development with
				<code>Godot</code>.
			</p>
		</section>

		<section class="space-y-4">
			<h3 class="h3">Programming Takes</h3>
			<div class="grid gap-4 md:grid-cols-2">
				{#each takes as { name, icon, description }}
					<div
						class="card card-hover border-surface-200-800 preset-filled-surface-100-900 flex h-full flex-col justify-between overflow-hidden border-[1px]"
					>
						<article class="space-y-2 p-4">
							<div>
								<h6 class="h6">{name} {icon}</h6>
							</div>
							<p class="opacity-80">
								{@html description}
							</p>
						</article>
					</div>
				{/each}
			</div>
		</section>
	</div>
</div>

<footer class="border-surface-200-800 border-t">
	<div class="mx-auto flex max-w-3xl flex-row items-center justify-between gap-3 px-4 py-6 text-sm">
		<p class="text-surface-600 text-center text-xs sm:text-sm">
			<span class="opacity-80">© {year}</span> · <span class="font-medium">Nils Wrenger</span>
		</p>

		<div class="flex flex-wrap items-center gap-4">
			<a href="/privacy-policy" class="anchor text-center">Privacy Policy</a>
		</div>
	</div>
</footer>

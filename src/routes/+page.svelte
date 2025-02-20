<script lang="ts">
	import { takes } from '$lib';
	import ContactsSelect from '$lib/components/ui/ContactsSelect.svelte';
	import { ChevronDown } from 'lucide-svelte';

	let bottom_content: HTMLDivElement;
</script>

<svelte:head>
	<title>Portfolio | Nils</title>
	<meta
		name="description"
		content="Hi, I'm Nils – a high school coder passionate about Rust and Svelte. Explore my portfolio, projects, and skills!"
	/>
</svelte:head>

<section class="flex min-h-[100svh] items-center justify-center">
	<div class="mx-auto max-w-3xl space-y-4 py-16 text-center sm:px-4">
		<h1 class="h1">Hi, there!</h1>
		<p>
			I'm Nils, a high-school <code>Rust</code> enthusiast who loves building anything from fast
			backends to sleek UIs in <code>Svelte</code>. Check out my projects below or consider
			sponsoring me. Feel free to reach out for a chat or anything else!
		</p>
		<div
			class="flex h-full flex-col items-center justify-center space-y-4 pt-4 md:flex-row md:space-x-4 md:space-y-0"
		>
			<a href="/projects" class="btn preset-tonal">My Projects</a>
			<a
				href="https://github.com/sponsors/nwrenger"
				target="_blank"
				class="btn preset-filled-primary-500"
			>
				Sponsor Me
			</a>
			<ContactsSelect />
		</div>
	</div>

	<button
		onclick={() => bottom_content?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
		class="absolute bottom-4 flex animate-bounce flex-col items-center"
	>
		<p>More About Me</p>
		<ChevronDown size={32} />
	</button>
</section>

<div class="mx-auto max-w-3xl space-y-6 pt-8" bind:this={bottom_content}>
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
			<code>Godot</code>
			— proving that I bring a diverse, adaptable skill set to every project!
		</p>
	</section>

	<section class="space-y-4">
		<h3 class="h3">Programming Takes</h3>
		<div class="grid gap-4 md:grid-cols-2">
			{#each takes as { name, icon, description }}
				<div
					class="card card-hover flex h-full flex-col justify-between overflow-hidden border-[1px] border-surface-200-800 preset-filled-surface-100-900"
				>
					<article class="space-y-2 p-4">
						<div>
							<h6 class="h6">{name} {icon}</h6>
						</div>
						<p class="opacity-60">
							{@html description}
						</p>
					</article>
				</div>
			{/each}
		</div>
	</section>
</div>

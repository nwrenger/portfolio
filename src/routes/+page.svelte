<script>
	import { skills } from '$lib';
	import * as Card from '$lib/components/ui/card';
</script>

<svelte:head>
	<title>portfolio</title>
	<meta
		name="description"
		content="Hi, there! I'm Nils, a high school student passionate about coding, particularly in Rust and in Svelte."
	/>
</svelte:head>

<div class="space-y-4">
	<h2>Hi, there!</h2>

	<p>
		I'm Nils, a high-school <code>Rust</code> enthusiast passionate about coding. I've worked on
		various projects so far, so look for that under
		<a href="/projects" class="link">Projects</a>. Feel free to reach out for a chat about coding or
		anything else via email at
		<a href="mailto:nils@wrenger.net" class="link" target="_parent">nils@wrenger.net</a>!
	</p>
</div>

<div class="mt-10 space-y-3">
	<h3>Skills</h3>
	<p>
		My focus is on UI development (websites, apps, and TUIs) and performance-driven projects like
		algorithms and databases. Therefore, my proficiency lies in <code>Rust</code> and in
		<code>Svelte</code>
		(i.e., <code>JavaScript</code> / <code>TypeScript</code>). But in the past, I have tried out
		other programming languages like <code>Go</code> and
		<code>Python</code>, or even a game engine like
		<code>Godot</code>, so keep your eyes peeled! Or just check out the list below:
	</p>
	<div class="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
		{#each skills as skill}
			<a href={skill.url} target="_blank" rel="noopener noreferrer">
				<Card.Root
					class="group flex h-full transform-gpu flex-col items-start justify-start overflow-hidden rounded-lg border-none transition-all duration-300 ease-out hover:scale-[104%] hover:bg-primary hover:text-accent hover:shadow-lg hover:shadow-primary/30"
				>
					<Card.Header class="w-full p-4">
						<div class="flex w-full items-center justify-between">
							<Card.Title class="font-semibold">{skill.name}</Card.Title>
							<span
								class="text-3xl transition-transform duration-300 ease-out group-hover:rotate-3"
							>
								{skill.icon}
							</span>
						</div>
					</Card.Header>
				</Card.Root>
			</a>
		{/each}
	</div>
</div>

<div class="mt-10 space-y-3">
	<h3>Sponsor Me</h3>
	<p>
		You can also sponsor me <a
			href="https://github.com/sponsors/nwrenger"
			class="link"
			target="_blank"
		>
			here on GitHub
		</a> to support my work and to get some cool perks like early access to certain projects!
	</p>
</div>

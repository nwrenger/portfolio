<script>
	import { takes } from '$lib';
</script>

<svelte:head>
	<title>Portfolio</title>
	<meta
		name="description"
		content="Hi, there! I'm Nils, a high school student passionate about coding, particularly in Rust and in Svelte. This here is my portfolio, enjoy exploring it!"
	/>
</svelte:head>

<div class="space-y-8">
	<div class="space-y-3">
		<h2>Hi, there!</h2>

		<p>
			I'm Nils, a high-school <code>Rust</code> enthusiast passionate about coding. I've worked on
			various projects so far, so look for that under
			<a href="/projects" class="link">Projects</a>. Additionally, you can also
			<a href="https://github.com/sponsors/nwrenger" class="link" target="_blank">
				sponsor me on GitHub
			</a>
			to support my work and to get some cool perks like early access to certain projects. Nevertheless,
			feel free to reach out for a chat about coding or anything else!
		</p>
	</div>

	<div class="space-y-3">
		<h3>Skills</h3>
		<p>
			My focus is on UI development (websites, apps, and TUIs) and performance-driven projects like
			algorithms and databases. Therefore, my proficiency lies in <code>Rust</code> and
			<code>Svelte</code>
			(i.e., <code>JavaScript</code> / <code>TypeScript</code>). But in the past, I have tried out
			other programming languages like <code>Go</code> and <code>Python</code>, or even a Game
			Engine like
			<code>Godot</code>, so keep your eyes peeled!
		</p>
	</div>

	<div class="space-y-3">
		<h3>Programming Takes</h3>
		<dl class="space-y-2">
			{#each takes as take}
				<div>
					<dt class="text-lg font-bold">
						{take.name}
						{take.icon}
					</dt>
					<dd class="text-base opacity-60">
						{@html take.description}
					</dd>
				</div>
			{/each}
		</dl>
	</div>
</div>

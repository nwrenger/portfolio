<script>
	import { skills, socials } from '$lib';
	import * as Accordion from '$lib/components/ui/accordion';
</script>

<svelte:head>
	<title>Portfolio</title>
	<meta
		name="description"
		content="Hi, there! I'm Nils, a high school student passionate about coding, particularly in Rust and in Svelte. This here is my portfolio, enjoy exploring it!"
	/>
</svelte:head>

<div class="space-y-4">
	<h2>Hi, there!</h2>

	<p>
		I'm Nils, a high-school <code>Rust</code> enthusiast passionate about coding. I've worked on
		various projects so far, so look for that under
		<a href="/projects" class="link">Projects</a>. Feel free to reach out for a chat about coding or
		anything else!
	</p>
</div>

<Accordion.Root type="single" class="w-full">
	<Accordion.Item value="skills">
		<Accordion.Trigger><h4>What Skills do I have?</h4></Accordion.Trigger>
		<Accordion.Content>
			<p>
				My focus is on UI development (websites, apps, and TUIs) and performance-driven projects
				like algorithms and databases. Therefore, my proficiency lies in <code>Rust</code> and
				<code>Svelte</code>
				(i.e., <code>JavaScript</code> / <code>TypeScript</code>). But in the past, I have tried out
				other programming languages like <code>Go</code> and <code>Python</code>, or even a Game
				Engine like
				<code>Godot</code>, so keep your eyes peeled! Or just check out the list below:
			</p>

			<dl class="space-y-4 pt-3">
				{#each skills as skill}
					<div>
						<dt class="text-lg font-bold">
							{skill.name}
							{skill.icon}
						</dt>
						<dd class="text-base opacity-60">
							{@html skill.description}
						</dd>
					</div>
				{/each}
			</dl>
		</Accordion.Content>
	</Accordion.Item>

	<Accordion.Item value="socials">
		<Accordion.Trigger><h4>Where am I online?</h4></Accordion.Trigger>
		<Accordion.Content>
			<p>I am online on multiple platforms. Check out the list below:</p>

			<ul class="flex flex-wrap items-center justify-between pt-3">
				{#each socials as social}
					<a
						href={social.url}
						target="_blank"
						rel="noopener noreferrer"
						class="group flex items-center space-x-3 p-3 transition-colors duration-300 hover:text-primary"
					>
						<social.icon class="h-6 w-6" />
						<span class="text-lg font-medium">{social.name}</span>
					</a>
				{/each}
			</ul>
		</Accordion.Content>
	</Accordion.Item>

	<Accordion.Item value="sponsor">
		<Accordion.Trigger><h4>Sponsor Me?</h4></Accordion.Trigger>
		<Accordion.Content>
			<p>
				You can also sponsor me
				<a href="https://github.com/sponsors/nwrenger" class="link" target="_blank">
					here on GitHub
				</a>
				to support my work and to get some cool perks like early access to certain projects!
			</p>
		</Accordion.Content>
	</Accordion.Item>
</Accordion.Root>

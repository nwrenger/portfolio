<script>
	import { skills, socials } from '$lib';
	import * as Card from '$lib/components/ui/card';
	import * as Accordion from '$lib/components/ui/accordion';
</script>

<svelte:head>
	<title>Portfolio</title>
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
		anything else!
	</p>
</div>

<Accordion.Root type="single" class="w-full">
	<Accordion.Item value="skills">
		<Accordion.Trigger><h4>What Skills do I have?</h4></Accordion.Trigger>
		<Accordion.Content>
			<p>
				My focus is on UI development (websites, apps, and TUIs) and performance-driven projects
				like algorithms and databases. Therefore, my proficiency lies in <code>Rust</code> and in
				<code>Svelte</code>
				(i.e., <code>JavaScript</code> / <code>TypeScript</code>). But in the past, I have tried out
				other programming languages like <code>Go</code> and
				<code>Python</code>, or even a game engine like
				<code>Godot</code>, so keep your eyes peeled! Or just check out the list below:
			</p>

			<div class="grid grid-cols-1 gap-4 p-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
				{#each skills as skill}
					<a href={skill.url} target="_blank" rel="noopener noreferrer">
						<Card.Root
							class="group flex h-full transform-gpu flex-col items-start justify-start overflow-hidden rounded-lg border-none bg-card p-4 shadow transition-all duration-300 ease-out hover:scale-[102%] hover:shadow-lg"
						>
							<div class="flex w-full items-center justify-between">
								<Card.Title
									class="font-semibold text-foreground transition-colors duration-300 group-hover:text-primary"
								>
									{skill.name}
								</Card.Title>

								<span
									class="text-3xl transition-all duration-300 ease-out group-hover:rotate-6 group-hover:text-primary"
								>
									{skill.icon}
								</span>
							</div>
						</Card.Root>
					</a>
				{/each}
			</div>
		</Accordion.Content>
	</Accordion.Item>

	<Accordion.Item value="socials">
		<Accordion.Trigger><h4>Where am I online?</h4></Accordion.Trigger>
		<Accordion.Content>
			<p>I am online on multiple platforms. Check out the list below:</p>
			<div class="grid grid-cols-1 gap-4 p-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
				{#each socials as social}
					<a href={social.url} target="_blank" rel="noopener noreferrer">
						<Card.Root
							class="group flex transform-gpu items-center overflow-hidden rounded-lg border-none bg-card p-4 shadow transition-all duration-300 ease-out hover:scale-[102%] hover:shadow-lg"
						>
							<Card.Title
								class="font-semibold text-foreground transition-colors duration-300 group-hover:text-primary"
							>
								<div class="flex items-center justify-start space-x-3">
									<social.icon
										class="h-6 w-6 text-foreground transition-colors duration-300 group-hover:text-primary"
									/>
									<span>
										{social.name}
									</span>
								</div>
							</Card.Title>
						</Card.Root>
					</a>
				{/each}
			</div>
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

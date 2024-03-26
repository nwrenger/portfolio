<script>
	let projects = [
		{
			title: 'console-utils-rs',
			description: 'CLI Input Library for Rust',
			href: 'https://github.com/nwrenger/console-utils-rs'
		},
		{
			title: 'dashboard',
			description: 'Dashboard of all my websites',
			href: 'https://github.com/nwrenger/dashboard'
		},
		{
			title: 'doenermann-bot',
			description: 'The Dönermann Discord Bot used on a Discord-Server of mine',
			href: 'https://github.com/nwrenger/doenermann-bot'
		},
		{
			title: 'Escaping-from-the-Supernova',
			description: 'A procedural generated textadventure coded in Rust',
			href: 'https://github.com/nwrenger/Escaping-from-the-Supernova'
		},
		{
			title: 'eta',
			description: 'An efficient Code Editor made from scratch using egui!',
			href: 'https://github.com/nwrenger/eta'
		},
		{
			title: 'flip-ui',
			description: 'The UI Builder for the Flipper Zero',
			href: 'https://github.com/flip-ui'
		},
		{
			title: 'hadar',
			description: 'The current code of Hunger of Hadar, a battlesnake agent',
			href: 'https://github.com/nwrenger/hadar'
		},
		{
			title: 'omega',
			description: 'A performant terminal-based file editor with extensive shortcuts',
			href: 'https://github.com/nwrenger/omega'
		},
		{
			title: 'portfolio',
			description: 'My personal Portfolio, or more precise THIS website',
			href: 'https://github.com/nwrenger/portfolio'
		},
		{
			title: 'quickmaths',
			description: 'A school project...QUICKMATHS!!!',
			href: 'https://github.com/nwrenger/quickmaths'
		},
		{
			title: 'schiller-db',
			description: "Schillernova's Database Management Software",
			href: 'https://github.com/nwrenger/schiller-db'
		},
		{
			title: 'schiller-lib',
			description: 'The Schiller School Library App',
			href: 'https://github.com/wrenger/schiller-lib'
		},
		{
			title: 'schulen-im-chaos',
			description: 'Homework-Sharing Platform',
			href: 'https://github.com/schulen-im-chaos'
		},
		{
			title: 'shitboard',
			description: 'Online Soundboard App',
			href: 'https://github.com/nwrenger/shitboard'
		}
	];
</script>

<svelte:head>
	<title>portfolio</title>
	<meta
		name="description"
		content="Hi, there! I'm Nils, a high school student passionate about coding, particularly in Rust and in Svelte."
	/>
</svelte:head>

<div class="container space-y-8 flex flex-col items-center !max-w-6xl mx-auto p-4">
	<h1 class="h1">Hi, there!</h1>

	<p class="text-center">
		I'm Nils, a high school student passionate about coding, particularly in <a
			href="https://www.rust-lang.org/"
			class="anchor"
			target="_blank">Rust</a
		>
		and in <a href="https://svelte.dev/" class="anchor" target="_blank">Svelte</a>. I have done a
		lot of things so far, so look for that under <code class="code">Projects</code>. Feel free to
		reach out for a chat about coding or anything else via my E-Mail
		<a href="mailto:nils@wrenger.net" class="anchor" target="_parent">nils@wrenger.net</a>!
	</p>

	<div class="flex flex-col items-center">
		<h2 class="h2 pb-2">Projects</h2>
		<code class="code">Total: {projects.length}</code>
	</div>

	<div class="grid md:grid-cols-2 gap-4 w-full">
		{#each projects as project}
			<a class="overflow-hidden block card card-hover" href={project.href} target="_blank">
				<div class="p-4">
					<h3 class="h3">{project.title}</h3>
					<p>{project.description}</p>
				</div>
			</a>
		{/each}
	</div>

	<p class="text-center">
		More details and other smaller Projects can be seen on
		<a href="https://www.github.com/nwrenger" class="anchor" target="_blank">my Github</a>
	</p>
</div>

<script>
	import { Accordion, AccordionItem, CodeBlock } from '@skeletonlabs/skeleton';

	const projects = {
		'console-utils-rs': {
			description: 'CLI Input Library for Rust, down below is an Example!',
			url: 'https://github.com/nwrenger/console-utils-rs'
		},
		'doenermann-bot': {
			description: 'The Dönermann Discord Bot used on a Discord-Server of mine',
			url: 'https://github.com/nwrenger/doenermann-bot'
		},
		'Escaping-from-the-Supernova': {
			description: ' A procedural generated textadventure coded in Rust',
			url: 'https://github.com/nwrenger/Escaping-from-the-Supernova'
		},
		'flip-ui': {
			description: 'The UI Builder for the Flipper Zero',
			url: 'https://github.com/flip-ui'
		},
		hadar: {
			description: 'The current code of Hunger of Hadar, a battlesnake agent',
			url: 'https://github.com/nwrenger/hadar'
		},
		'nwrenger.github.io': {
			description: 'My personal Portfolio, or more precise THIS website',
			url: 'https://github.com/nwrenger/nwrenger.github.io'
		},
		quickmaths: {
			description: 'A school project...QUICKMATHS!!!',
			url: 'https://github.com/nwrenger/quickmaths'
		},
		'schiller-db': {
			description: "Schillernova's Database Management Software",
			url: 'https://github.com/nwrenger/schiller-db'
		},
		'schiller-lib': {
			description: 'The Schiller School Library App',
			url: 'https://github.com/wrenger/schiller-lib'
		},
		'schulen-im-chaos': {
			description: 'Homework-Sharing Platform',
			url: 'https://github.com/schulen-im-chaos'
		}
	};
</script>

<svelte:head>
	<title>Hi, there!</title>
	<meta name="description" content="Hi, there!" />
</svelte:head>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-8 flex flex-col items-center lg:w-2/3 w-11/12 pb-6">
		<h1 class="h1">Hi, there!</h1>

		<div class="card p-4 w-full">
			<Accordion autocollapse>
				<AccordionItem open>
					<svelte:fragment slot="lead"><i class="fa-solid fa-house"></i></svelte:fragment>
					<svelte:fragment slot="summary">Welcome</svelte:fragment>
					<svelte:fragment slot="content"
						>Welcome to my very informative Website! Just go to <code class="code">Projects</code>
						or to <code class="code">About Me</code>.
					</svelte:fragment>
				</AccordionItem>
				<AccordionItem>
					<svelte:fragment slot="lead"><i class="fa-solid fa-diagram-project"></i></svelte:fragment>
					<svelte:fragment slot="summary">Projects</svelte:fragment>
					<svelte:fragment slot="content">
						<ul class="list pb-2">
							{#each Object.entries(projects) as [key, val] (key)}
								<li>
									<span class="badge-icon p-2 variant-soft-primary"
										><i class="fa-solid fa-chevron-right"></i></span
									>
									<span class="flex-auto"
										><span class="font-bold">{key}</span>: {val.description}</span
									>
									<a href={val.url} class="anchor" target="_blank">
										<i class="fa-solid fa-up-right-from-square"></i>
									</a>
								</li>
							{/each}
						</ul>
						More details and other smaller Projects can be seen on
						<a href="https://www.github.com/nwrenger" class="anchor" target="_blank">My Github</a
						>.</svelte:fragment
					>
				</AccordionItem>
				<AccordionItem>
					<svelte:fragment slot="lead"><i class="fa-solid fa-user"></i></svelte:fragment>
					<svelte:fragment slot="summary">About Me</svelte:fragment>
					<svelte:fragment slot="content"
						>Hi there! I'm Nils, a high school student passionate about coding, particularly in <a
							href="https://www.rust-lang.org/"
							class="anchor"
							target="_blank">Rust</a
						>
						and in <a href="https://svelte.dev/" class="anchor" target="_blank">Svelte</a>. I have
						done a lot of things so far, so look for that under <code class="code">Projects</code>.
						Feel free to reach out for a chat about coding or anything else!
					</svelte:fragment>
				</AccordionItem>
				<AccordionItem>
					<svelte:fragment slot="lead"><i class="fa-solid fa-envelope"></i></svelte:fragment>
					<svelte:fragment slot="summary">Contact</svelte:fragment>
					<svelte:fragment slot="content"
						>You can contact me via my E-Mail <a
							href="mailto:nils@wrenger.net"
							class="anchor"
							target="_parent">nils@wrenger.net</a
						>.</svelte:fragment
					>
				</AccordionItem>
			</Accordion>
		</div>
		<CodeBlock
			class="w-full"
			language="rust"
			code={`use console_utils::input::reveal;\n\nfn main() {\n\t// Display "Rust is awesome!" with a time interval of 0.1 seconds between each character\n\treveal("Rust is awesome!", 0.1);\n}`}
		></CodeBlock>
	</div>
</div>

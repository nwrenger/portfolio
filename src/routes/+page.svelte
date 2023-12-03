<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->
<script>
	import { Accordion, AccordionItem, CodeBlock } from '@skeletonlabs/skeleton';
</script>

<svelte:head>
	<title>Hi, there!</title>
	<meta name="description" content="Hi, there!" />
</svelte:head>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-8 flex flex-col items-center lg:w-2/3 w-11/12 pt-6 pb-6">
		<h1 class="h1">
			<span
				class="bg-gradient-to-br from-blue-500 to-red-500 bg-clip-text text-transparent box-decoration-clone"
				>Hi, there!</span
			>
		</h1>

		<div class="card p-4 w-full">
			<Accordion autocollapse>
				<AccordionItem open>
					<svelte:fragment slot="lead"><i class="fa-solid fa-house"></i></svelte:fragment>
					<svelte:fragment slot="summary">Welcome</svelte:fragment>
					<svelte:fragment slot="content"
						>Welcome to my meaningless Website! It can't do anything now. Just go to my Projects
						section or go to my About Me section.</svelte:fragment
					>
				</AccordionItem>
				<AccordionItem>
					<svelte:fragment slot="lead"><i class="fa-solid fa-diagram-project"></i></svelte:fragment>
					<svelte:fragment slot="summary">Projects</svelte:fragment>
					<svelte:fragment slot="content"
						>Currently, you can see all my Projects on <a
							href="https://www.github.com/nwrenger"
							class="anchor"
							target="_blank">Github</a
						>.</svelte:fragment
					>
				</AccordionItem>
				<AccordionItem>
					<svelte:fragment slot="lead"><i class="fa-solid fa-user"></i></svelte:fragment>
					<svelte:fragment slot="summary">About Me</svelte:fragment>
					<svelte:fragment slot="content"
						>Hi there! I'm Nils, a high school student passionate about coding, particularly in
						Rust. I love its power, efficiency, and emphasis on safety. Additionally, I've developed
						a <a href="https://crates.io/crates/console-utils" class="anchor" target="_blank"
							>CLI crate/lib</a
						> in Rust, and below is an example. Apart from coding, I play clarinet and saxophone to unwind
						and stay creative. Exploring new technologies is another interest, especially in artificial
						intelligence, machine learning, and cybersecurity. Feel free to reach out for a chat about
						coding, music, or anything else!</svelte:fragment
					>
				</AccordionItem>
				<AccordionItem>
					<svelte:fragment slot="lead"><i class="fa-solid fa-code"></i></svelte:fragment>
					<svelte:fragment slot="summary">About This Website</svelte:fragment>
					<svelte:fragment slot="content"
						>This Website was created and build with <a
							href="https://svelte.dev/"
							class="anchor"
							target="_blank">Svelte</a
						>
						and <a href="https://www.skeleton.dev/" class="anchor" target="_blank">Skeleton</a>. You
						can find it on Github
						<a href="https://github.com/nwrenger/svelte-website" class="anchor" target="_blank"
							>here</a
						>.</svelte:fragment
					>
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
				<AccordionItem>
					<svelte:fragment slot="lead"><i class="fa-solid fa-gavel"></i></svelte:fragment>
					<svelte:fragment slot="summary">Legals</svelte:fragment>
					<svelte:fragment slot="content"
						>This is my personal website, meant for my friends and as a personal hobby only. I don't
						make and don't intent to make money with it. All the content represents my own opinion
						and is not guaranteed to be complete and correct. I cannot provide any liability for any
						external links and their content found on this website.</svelte:fragment
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

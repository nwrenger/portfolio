<script lang="ts">
	import { projects } from '$lib';
	import * as Card from '$lib/components/ui/card';
	import ImageLoader from './../ImageLoader.svelte';
</script>

<svelte:head>
	<title>portfolio - Projects</title>
	<meta
		name="description"
		content="Here you can find all the projects I have worked on so far. They range from web development to game development and even to algorithms."
	/>
</svelte:head>

<div
	class="space-y-4 rounded-lg bg-background/95 p-6 backdrop-blur supports-[backdrop-filter]:bg-background/45 lg:p-12"
>
	<div class="flex items-center justify-between pb-2">
		<h2 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Projects</h2>

		<code class="code">
			Total: {projects.length}
		</code>
	</div>

	<div class="grid w-full gap-6 md:grid-cols-2">
		{#each projects as { title, summary, picture, description, link }, i}
			<Card.Root
				class="flex h-full transform flex-col items-start justify-start overflow-hidden rounded-lg border-none transition-transform hover:scale-[102%] hover:shadow-lg"
			>
				<ImageLoader
					src={'projects/' + picture}
					alt={title}
					height="h-52 md:h-64"
					rounded="rounded-t-md"
				/>
				<Card.Header class="w-full p-4">
					<Card.Title class="text-2xl font-semibold">{title}</Card.Title>
					<Card.Description class="mb-2 text-base leading-7 text-muted-foreground"
						>{summary}</Card.Description
					>
					<p class="leading-7">{@html description}</p>
					<div class="mt-4">
						<a href={link} class="underline underline-offset-4" target="_blank">
							See the Project here
						</a>
					</div>
				</Card.Header>
			</Card.Root>
		{/each}
	</div>
</div>

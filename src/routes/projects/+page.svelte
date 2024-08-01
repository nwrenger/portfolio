<script lang="ts">
	import { projects } from '$lib';
	import * as Card from '$lib/components/ui/card';
	import ImageLoader from './../ImageLoader.svelte';
</script>

<div
	class="space-y-4 rounded-lg bg-background/95 p-6 backdrop-blur supports-[backdrop-filter]:bg-background/45 lg:p-12"
>
	<div class="flex items-center justify-between pb-2">
		<h2 class="scroll-m-20 text-3xl font-bold tracking-tight lg:text-4xl">Projects</h2>

		<code class="text-sm">
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
					<Card.Title class="text-xl font-semibold">{title}</Card.Title>
					<Card.Description class="mb-2 text-muted-foreground">{summary}</Card.Description>
					<p class="text-primary-background text-sm">{@html description}</p>
					<div class="mt-4">
						<a href={link} class="text-primary underline underline-offset-4" target="_blank">
							See the Project here
						</a>
					</div>
				</Card.Header>
			</Card.Root>
		{/each}
	</div>
</div>

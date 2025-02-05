<script lang="ts">
	import { projects, type Project } from '$lib';
	import { Badge } from '$lib/components/ui/badge';
	import * as Card from '$lib/components/ui/card';
	import { ExternalLink, Hash } from 'lucide-svelte';
	import ImageLoader from './../ImageLoader.svelte';

	const sortedProjects = projects
		.sort((a, b) => b.date.toMillis() - a.date.toMillis())
		.reduce(
			(acc, project) => {
				const year = project.date.year;
				if (!acc[year]) acc[year] = [];
				acc[year].push(project);
				return acc;
			},
			{} as Record<number, Project[]>
		);

	const years = Object.keys(sortedProjects)
		.map(Number)
		.sort((a, b) => b - a);
</script>

<svelte:head>
	<title>Projects - Portfolio</title>
	<meta
		name="description"
		content="Here you can find all the projects I have worked on so far. They range from web development to game development and even to algorithms."
	/>
</svelte:head>

<div class="space-y-4">
	<div class="flex items-center justify-between pb-2">
		<h2>Projects</h2>
		<code>
			Total: {projects.length}
		</code>
	</div>

	{#each years as year}
		{@const yearStr = year.toString()}
		<h3 class="mt-6 border-b pb-2 text-2xl font-bold" id={yearStr}>{year}</h3>
		<div class="grid w-full gap-6 md:grid-cols-2">
			{#each sortedProjects[year] as { title, date, summary, picture, description, link, archived }}
				<Card.Root
					id={title}
					class="flex h-full transform-gpu flex-col items-start justify-start overflow-hidden rounded-lg border-none shadow transition-[transform,box-shadow] duration-300 ease-out hover:scale-[102%] hover:shadow-lg"
				>
					<a href={'projects/' + picture} target="_blank" class="w-full">
						<ImageLoader
							src={'projects/' + picture}
							alt={title}
							height="h-52 md:h-64"
							rounded="rounded-t-md rounded-b-none"
						/>
					</a>
					<Card.Header class="w-full p-4">
						<div class="flex w-full items-center justify-between">
							<Card.Title class="text-2xl font-semibold">
								{title}
							</Card.Title>
							<Badge class="text-center" variant="secondary">{date.toFormat('MMMM dd, yyyy')}</Badge
							>
						</div>
						<Card.Description class="mb-2 text-base leading-7">
							{summary}
						</Card.Description>
						<p>{@html description}</p>
						<div class="mt-4">
							<a href={link} class="link flex w-fit items-center" target="_blank">
								See the {archived ? 'archived' : ''} Project here
								<ExternalLink class="pl-2 pt-[2px]" />
							</a>
						</div>
					</Card.Header>
				</Card.Root>
			{/each}
		</div>
	{/each}
</div>

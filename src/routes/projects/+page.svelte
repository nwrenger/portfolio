<script lang="ts">
	import { projects, type Project } from '$lib';
	import ImageLoader from '$lib/components/ui/ImageLoader.svelte';
	import { ArrowLeft, ExternalLink } from 'lucide-svelte';

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
	<title>Projects - Portfolio | Nils</title>
	<meta
		name="description"
		content="Here you can find all the projects I have worked on so far. They range from web development to game development and even to algorithms."
	/>
</svelte:head>

<div class="space-y-4">
	<a href="/" class="btn preset-tonal">
		<ArrowLeft size={18} />
		<span>Return</span>
	</a>

	<div class="flex items-center justify-between">
		<h2 class="h2">Projects</h2>
		<button type="button" class="chip preset-filled-surface-500">Total: 20</button>
	</div>

	{#each years as year}
		{@const yearStr = year.toString()}
		<div>
			<h3 class="h3" id={yearStr}>{year}</h3>
			<hr class="hr" />
		</div>
		<div class="grid w-full gap-6 md:grid-cols-2">
			{#each sortedProjects[year] as { title, date, summary, picture, description, link, archived }}
				<div
					id={title}
					class="card card-hover flex h-full flex-col justify-between divide-y overflow-hidden border-[1px] border-surface-200-800 divide-surface-200-800 preset-filled-surface-100-900"
				>
					<div class="divide-y divide-surface-200-800">
						<header>
							<a href={'projects/' + picture} target="_blank" class="w-full">
								<ImageLoader src={'projects/' + picture} alt={title} ratio="aspect-[21/9]" />
							</a>
						</header>
						<article class="space-y-2 p-4">
							<div>
								<h2 class="h6">{summary}</h2>
								<h3 class="h3">{title}</h3>
							</div>
							<p class="opacity-80">
								{@html description}
							</p>
						</article>
					</div>
					<footer class="flex items-center justify-between gap-4 p-4">
						<p class="text-base opacity-80">
							<a href={link} class="anchor flex w-fit items-center" target="_blank">
								See the {archived ? 'archived' : ''} Project here
								<ExternalLink class="pl-2 pt-[2px]" />
							</a>
						</p>
						<p class="text-base opacity-80">On {date.toFormat('MMMM dd, yyyy')}</p>
					</footer>
				</div>
			{/each}
		</div>
	{/each}
</div>

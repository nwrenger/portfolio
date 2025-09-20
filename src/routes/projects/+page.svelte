<script lang="ts">
	import { page } from '$app/state';
	import { projects, year, type Project } from '$lib';
	import ImageLoader from '$lib/components/ui/ImageLoader.svelte';
	import { ArrowLeft, ExternalLink, Link } from 'lucide-svelte';

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

	const flatProjects = years.flatMap((y) => sortedProjects[y]) as Project[];

	let selectedYear: number | 'all' = $state('all');

	let filteredProjects = $derived(
		selectedYear === 'all' ? flatProjects : sortedProjects[selectedYear] || []
	);

	// Reset the selected year if a project references another
	$effect(() => {
		if (page.url.hash) selectedYear = 'all';
	});
</script>

<svelte:head>
	<title>Projects - Portfolio | Nils</title>
	<meta
		name="description"
		content="Here you can find all the projects I have worked on so far. They range from web development to game development and even to algorithms."
	/>
	<!-- Open Graph -->
	<meta property="og:title" content="Projects - Portfolio | Nils" />
	<meta
		property="og:description"
		content="Here you can find all the projects I have worked on so far. They range from web development to game development and even to algorithms."
	/>
</svelte:head>

<div class="mx-auto h-full max-w-7xl px-4 py-6">
	<div class="space-y-4">
		<div class="grid grid-cols-2 pb-2 sm:grid-cols-3">
			<div class="flex items-center">
				<a href="/" class="btn preset-tonal">
					<ArrowLeft size={18} />
					<span>Return</span>
				</a>
			</div>

			<div class="hidden h-full justify-center sm:flex">
				<h1 class="h2">Projects</h1>
			</div>

			<div class="flex items-center justify-end space-x-2">
				<select bind:value={selectedYear} class="select h-fit max-w-30">
					<option value="all">All years</option>
					{#each years as year}
						<option value={year}>{year}</option>
					{/each}
				</select>

				<span class="badge preset-filled-surface-500 text-base">
					{filteredProjects.length}
				</span>
			</div>
		</div>

		<div class="grid w-full gap-6 md:grid-cols-2">
			{#each filteredProjects as { title, date, summary, picture, description, link, archived }}
				<div
					id={title}
					class="card card-hover preset-filled-surface-100-900 border-surface-200-800 divide-surface-200-800 relative flex h-full w-full flex-col justify-between divide-y overflow-hidden border-[1px]"
				>
					<div class="divide-surface-200-800 h-full divide-y">
						<header class="relative">
							<a href={link} target="_blank" class="w-full">
								<ImageLoader src={'projects/' + picture} alt={title} ratio="aspect-21/9" />
								{#if archived}
									<div class="absolute inset-0 flex items-center justify-center bg-black/40">
										<span class="text-lg font-bold tracking-widest text-white">ARCHIVED</span>
									</div>
								{/if}
							</a>
						</header>
						<article class="space-y-4 p-4">
							<div>
								<h2 class="h6">{summary}</h2>
								<div class="group flex justify-between space-x-2">
									<h3 class="h3">{title}</h3>
									<a
										href="#{title}"
										class="touch:opacity-100 flex items-center opacity-0 transition-opacity group-hover:opacity-100"
									>
										<Link class="stroke-secondary-900-100 size-5 md:size-6" />
									</a>
								</div>
							</div>
							<p class="opacity-80">
								{@html description}
							</p>
						</article>
					</div>
					<footer class="flex items-center justify-between gap-4 p-4">
						<p class="text-base opacity-80">
							<a href={link} target="_blank" class="anchor flex w-fit items-center">
								See the {archived ? 'archived' : ''} Project here
								<ExternalLink class="pt-[2px] pl-2" />
							</a>
						</p>
						<p class="text-base opacity-80">{date.toFormat('MMMM dd, yyyy')}</p>
					</footer>
				</div>
			{/each}
		</div>
	</div>
</div>

<footer class="border-surface-200-800 border-t">
	<div class="mx-auto flex max-w-7xl flex-row items-center justify-between gap-3 px-4 py-6 text-sm">
		<p class="text-surface-600 text-center text-xs sm:text-sm">
			<span class="opacity-80">© {year}</span> · <span class="font-medium">Nils Wrenger</span>
		</p>

		<div class="flex flex-wrap items-center gap-4">
			<a href="/privacy-policy" class="anchor text-center">Privacy Policy</a>
		</div>
	</div>
</footer>

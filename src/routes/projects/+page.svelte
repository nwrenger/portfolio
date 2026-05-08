<script lang="ts">
	import {
		categoryNames,
		categoryIcons,
		getProjectSlug,
		projects,
		type Category
	} from '$lib/content';
	import { page } from '$app/state';
	import { ArrowLeft, ArrowRight, CalendarDays } from 'lucide-svelte';

	const categories = Object.keys(categoryNames) as Category[];
	const sortedProjects = [...projects].sort((a, b) => b.date.toMillis() - a.date.toMillis());

	let selectedCategory: Category | null | 'loading' = $state(null);
	let activeCategory = $derived(
		selectedCategory && categories.includes(selectedCategory) ? selectedCategory : null
	);
	let visibleProjects = $derived(
		activeCategory
			? sortedProjects.filter((project) => project.categories.includes(activeCategory))
			: sortedProjects
	);

	$effect(() => {
		selectedCategory = page.url.searchParams.get('category') as Category | null;
	});
</script>

<svelte:head>
	<title>Projects - Portfolio | Nils</title>
	<meta
		name="description"
		content="Explore all projects by Nils, sorted by latest first with summaries and categories."
	/>
	<!-- Open Graph -->
	<meta property="og:title" content="Projects - Portfolio | Nils" />
	<meta
		property="og:description"
		content="Explore all projects by Nils, sorted by latest first with summaries and categories."
	/>
	<link rel="canonical" href="https://nwrenger.dev/projects/" />
</svelte:head>

<div class="p-4">
	<div class="mx-auto h-full max-w-2xl space-y-4">
		<div>
			<!-- Back button -->
			<a href="/" title="Return" aria-label="Return" class="btn-icon preset-tonal">
				<ArrowLeft size={18} />
			</a>
		</div>

		<header class="space-y-2">
			<h2 class="h2 font-semibold tracking-tight">Projects</h2>

			<p>
				A complete overview of what I have built so far. Filter by category or open a project to see
				the full write-up and image.
			</p>
		</header>

		<nav class="flex flex-wrap gap-2" aria-label="Project categories">
			<a href="/projects" class="btn btn-sm {activeCategory ? 'preset-tonal' : 'preset-filled'}">
				All
				<span class="opacity-70">{sortedProjects.length}</span>
			</a>
			{#each categories as category}
				<a
					href="/projects?category={category}"
					class="btn btn-sm {activeCategory === category ? 'preset-filled' : 'preset-tonal'}"
				>
					{categoryNames[category][1]}
					<span class="opacity-70">
						{sortedProjects.filter((project) => project.categories.includes(category)).length}
					</span>
				</a>
			{/each}
		</nav>

		<section class="grid gap-4" aria-label="Projects">
			{#each visibleProjects as project}
				{@const slug = getProjectSlug(project.title)}
				<a
					href="/projects/{slug}"
					class="card card-hover preset-tonal-surface border-surface-200-800 group flex flex-col justify-between gap-4 border p-5"
				>
					<div class="flex items-start justify-between gap-4">
						<div class="space-y-1">
							<h4 class="h4 font-semibold tracking-tight">{project.title}</h4>
							<p>{project.summary}</p>
						</div>
						<ArrowRight
							size={18}
							class="text-surface-600-400 mt-1 shrink-0 transition group-hover:translate-x-1"
						/>
					</div>

					<div class="text-surface-600-400 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
						<span class="flex items-center gap-1.5">
							<CalendarDays size={16} />
							{project.date.toFormat('MMMM dd, yyyy')}
						</span>
						{#each project.categories as category, i (category)}
							{@const Icon = categoryIcons[category]}
							<span class="flex items-center gap-1.5">
								<Icon size={16} />
								<span>{categoryNames[category][0]}</span>
							</span>
						{/each}
					</div>
				</a>
			{/each}
		</section>
	</div>
</div>

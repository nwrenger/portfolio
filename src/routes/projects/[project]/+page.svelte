<script lang="ts">
	import { page } from '$app/state';
	import { ArrowLeft, CalendarDays, ExternalLink } from 'lucide-svelte';
	import type { PageData } from './$types';
	import ImageLoader from '$lib/components/ui/ImageLoader.svelte';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();
	let project = $derived(data.project);
	let imageSrc = $derived(`/projects/${project.picture}`);
	let canonicalUrl = $derived(`https://nwrenger.dev${page.url.pathname}`);
</script>

<svelte:head>
	<title>{project.title} - Portfolio | Nils</title>
	<meta name="description" content={project.summary} />
	<!-- Open Graph -->
	<meta property="og:title" content="{project.title} - Portfolio | Nils" />
	<meta property="og:description" content={project.summary} />
	<meta property="og:image" content="https://nwrenger.dev{imageSrc}" />
	<link rel="canonical" href={canonicalUrl} />
</svelte:head>

<div class="p-4">
	<div class="mx-auto h-full max-w-2xl space-y-4">
		<div>
			<!-- Back button -->
			<button
				type="button"
				onclick={() => {
					if (window?.history.length > 1) {
						window?.history.back();
					} else {
						window.close();
					}
				}}
				title="Return"
				aria-label="Return"
				class="btn-icon preset-tonal"
			>
				<ArrowLeft />
			</button>
		</div>

		<header
			class="preset-tonal border-surface-200-800 relative shrink overflow-hidden rounded-xl border"
		>
			<a href={project.link} target="_blank" rel="noopener noreferrer" class="block w-full">
				<ImageLoader src={imageSrc} alt={project.title} ratio="aspect-16/9" />
			</a>
		</header>

		<article class="flex min-h-0 shrink flex-col space-y-4">
			<div class="flex-none">
				<div class="flex items-center justify-between space-x-4">
					<h3 class="h3 font-semibold tracking-tight">{project.title}</h3>
					{#if project.archived}
						<span class="badge preset-tonal-warning h-fit text-xs">Archived</span>
					{/if}
				</div>
				<h4 class="h6">{project.summary}</h4>
			</div>
			<p class="overflow-y-auto">{@html project.description}</p>
		</article>

		<footer class="flex flex-none items-center justify-between gap-4">
			<p>
				<a
					href={project.link}
					target="_blank"
					rel="noopener noreferrer"
					class="anchor flex w-fit items-center"
				>
					See here
					<ExternalLink class="pl-2 opacity-60" />
				</a>
			</p>
			<span class="text-surface-600-400 flex items-center gap-1.5">
				<CalendarDays size={16} />
				{project.date.toFormat('MMMM dd, yyyy')}
			</span>
		</footer>
	</div>
</div>

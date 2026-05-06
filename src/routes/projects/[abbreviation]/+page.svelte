<script lang="ts">
	import ImageLoader from '$lib/components/ui/ImageLoader.svelte';
	import { ExternalLink, Link } from 'lucide-svelte';
	import type { PageData } from '../../projects/[abbreviation]/$types';
	import { categoryNames } from '$lib/content';
	import Scroller from '$lib/components/ui/Scroller.svelte';
	import Background from '$lib/components/ui/Background.svelte';
	import { page } from '$app/state';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();
	let categoryName = $derived(categoryNames[data.abbreviation]);
	let canonicalUrl = $derived(`https://nwrenger.dev${page.url.pathname}`);
	let projectImages = $state<Record<string, HTMLImageElement | undefined>>({});

	function getProjectImageSrc(picture: string) {
		return `/projects/${picture}`;
	}

	function getAnchorId(title: string) {
		return title
			.toLowerCase()
			.trim()
			.replace(/[^a-z0-9]+/g, '-')
			.replace(/^-|-$/g, '');
	}

	function setProjectImage(anchorId: string, image: HTMLImageElement) {
		projectImages[anchorId] = image;
	}
</script>

<svelte:head>
	<title>{categoryName} - Portfolio | Nils</title>
	<meta
		name="description"
		content="Here you can find the {categoryName} I have worked on so far."
	/>
	<!-- Open Graph -->
	<meta property="og:title" content="{categoryName} - Portfolio | Nils" />
	<meta
		property="og:description"
		content="Here you can find the {categoryName} I have worked on so far."
	/>
	<link rel="canonical" href={canonicalUrl} />
</svelte:head>

<Scroller return_link="/">
	{#snippet contents()}
		{#each data.projects as { title, date, summary, picture, description, link, archived, categories }}
			{@const anchorId = getAnchorId(title)}
			{@const imageSrc = getProjectImageSrc(picture)}
			<div class="relative flex h-full snap-center items-center justify-center p-4">
				<div
					class="pointer-events-none absolute inset-0 overflow-hidden select-none"
					aria-hidden="true"
				>
					<Background image={projectImages[anchorId]} opacity={0.35} />
				</div>

				<div id={anchorId} class="flex max-h-full w-full max-w-2xl">
					<div
						class="divide-surface-200-800 card border-surface-200-800 preset-glass-neutral relative z-10 flex
             max-h-full min-h-0 w-full flex-col divide-y overflow-hidden border shadow-2xl"
					>
						<header class="preset-tonal relative shrink overflow-hidden">
							<a href={link} target="_blank" rel="noopener noreferrer" class="block w-full">
								<ImageLoader
									src={imageSrc}
									alt={title}
									ratio="aspect-16/9"
									onLoad={(image) => setProjectImage(anchorId, image)}
								/>
								{#if archived}
									<div class="absolute inset-0 flex items-center justify-center bg-black/40">
										<span class="text-lg font-bold tracking-widest text-white">ARCHIVED</span>
									</div>
								{/if}
							</a>
						</header>

						<article class="flex min-h-0 shrink flex-col space-y-4 px-4 pt-4">
							<div class="flex-none">
								<div class="flex justify-between space-x-2">
									<h3 class="h3 font-semibold tracking-tight">{title}</h3>
									<a
										href="#{anchorId}"
										title="Permalink: {title}"
										aria-label="Permalink for {title}"
										class="flex items-center"
									>
										<Link class="stroke-secondary-900-100" />
									</a>
								</div>
								<h4 class="h6">{summary}</h4>
								<div class="mt-2 flex flex-wrap gap-2">
									{#each categories as category}
										<span class="badge preset-tonal text-xs">{categoryNames[category]}</span>
									{/each}
								</div>
							</div>
							<p class="overflow-y-auto pb-4">{@html description}</p>
						</article>

						<footer class="flex flex-none items-center justify-between gap-4 p-4">
							<p>
								<a
									href={link}
									target="_blank"
									rel="noopener noreferrer"
									class="anchor flex w-fit items-center"
								>
									See here
									<ExternalLink class="pl-2 opacity-60" />
								</a>
							</p>
							<p class="text-base">{date.toFormat('MMMM dd, yyyy')}</p>
						</footer>
					</div>
				</div>
			</div>
		{/each}
	{/snippet}
</Scroller>

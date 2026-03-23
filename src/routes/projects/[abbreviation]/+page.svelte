<script lang="ts">
	import ImageLoader from '$lib/components/ui/ImageLoader.svelte';
	import { ExternalLink, Link } from 'lucide-svelte';
	import type { PageData } from '../../projects/[abbreviation]/$types';
	import { categoryNames } from '$lib/content';
	import Scroller from '$lib/components/ui/Scroller.svelte';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();
</script>

<svelte:head>
	<title>{categoryNames[data.abbreviation]} - Portfolio | Nils</title>
	<meta
		name="description"
		content="Here you can find the {categoryNames[data.abbreviation]} I have worked on so far."
	/>
	<!-- Open Graph -->
	<meta property="og:title" content="Projects - Portfolio | Nils" />
	<meta
		property="og:description"
		content="Here you can find the {categoryNames[data.abbreviation]} I have worked on so far."
	/>
</svelte:head>

<Scroller return_link="/">
	{#snippet contents()}
		{#each data.projects as { title, date, summary, picture, description, link, archived }}
			<div class="relative flex h-full snap-center items-center justify-center p-4">
				<div
					class="pointer-events-none absolute inset-0 overflow-hidden select-none"
					aria-hidden="true"
				>
					<ImageLoader
						src={'/../projects/' + picture}
						alt=""
						aria_hidden="true"
						ratio="aspect-16/9"
						opacity="opacity-35"
						classes="absolute h-full w-full translate-z-0 scale-110 object-cover blur-[28px] saturate-140 will-change-transform"
					/>
				</div>

				<div id={title} class="flex max-h-full w-full max-w-2xl">
					<div
						class="divide-surface-200-800 card border-surface-200-800 preset-glass-neutral relative z-10 flex
             max-h-full min-h-0 w-full flex-col divide-y overflow-hidden border shadow-2xl"
					>
						<header class="preset-tonal relative shrink overflow-hidden">
							<a href={link} target="_blank" class="block w-full">
								<ImageLoader src={'/../projects/' + picture} alt={title} ratio="aspect-16/9" />
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
									<a href="#{title}" title="Permalink: {title}" class="flex items-center">
										<Link class="stroke-secondary-900-100" />
									</a>
								</div>
								<h4 class="h6">{summary}</h4>
							</div>
							<p class="overflow-y-auto pb-4">{@html description}</p>
						</article>

						<footer class="flex flex-none items-center justify-between gap-4 p-4">
							<p>
								<a href={link} target="_blank" class="anchor flex w-fit items-center">
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

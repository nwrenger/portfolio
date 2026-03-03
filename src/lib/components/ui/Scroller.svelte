<script lang="ts">
	import { ArrowLeft, ChevronDown, ChevronUp } from 'lucide-svelte';
	import { fade } from 'svelte/transition';
	import { onMount, type Snippet } from 'svelte';
	import { page } from '$app/state';
	import { afterNavigate, beforeNavigate } from '$app/navigation';

	interface Props {
		contents: Snippet;
		return_link?: string;
	}

	let { contents, return_link }: Props = $props();

	const KEY = `scroll:${page.url.pathname}`;

	beforeNavigate(() => {
		if (el) sessionStorage.setItem(KEY, String(el.scrollTop));
	});

	afterNavigate(() => {
		if (el && !page.url.hash)
			el.scrollTo({ top: Number(sessionStorage.getItem(KEY)) ?? 0, behavior: 'instant' });
	});

	let el = $state<HTMLDivElement>();
	let atStart = $state(true);
	let atEnd = $state(false);

	function checkScroll() {
		if (!el) return;
		const threshold = el.clientHeight / 2;
		atStart = el.scrollTop <= threshold;
		atEnd = el.scrollTop + el.clientHeight >= el.scrollHeight - threshold;
	}

	onMount(() => checkScroll());

	function onScroll(e: Event) {
		el = e.target as HTMLDivElement;
		checkScroll();
	}
</script>

<div
	class="h-full snap-y snap-mandatory snap-always overflow-y-scroll scroll-smooth"
	style="scrollbar-width: none; overscroll-behavior: contain;"
	bind:this={el}
	onscroll={onScroll}
>
	{@render contents()}

	{#if !atStart}
		<div
			transition:fade={{ delay: 0 }}
			class="absolute top-0 left-[calc(50%-14px)] z-20 opacity-75"
		>
			<ChevronUp size={28} />
		</div>
	{/if}

	{#if return_link}
		<div class="absolute top-4 left-4 z-20">
			<a class="btn-icon preset-tonal" title="Return" href={return_link}><ArrowLeft size={18} /></a>
		</div>
	{/if}

	{#if !atEnd}
		<div
			transition:fade={{ delay: 0 }}
			class="absolute bottom-0 left-[calc(50%-14px)] z-20 opacity-75"
		>
			<ChevronDown size={28} />
		</div>
	{/if}
</div>

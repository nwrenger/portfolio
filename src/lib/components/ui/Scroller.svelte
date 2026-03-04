<script lang="ts">
	import { ArrowLeft, ChevronDown, ChevronUp, ChevronsUpDown } from 'lucide-svelte';
	import { fade } from 'svelte/transition';
	import { onMount, type Snippet } from 'svelte';
	import { page } from '$app/state';
	import { afterNavigate, beforeNavigate } from '$app/navigation';
	import { shared } from '../../../routes/shared.svelte';

	interface Props {
		contents: Snippet;
		return_link?: string;
	}

	let { contents, return_link }: Props = $props();

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
			e.preventDefault();
			if (e.key === 'ArrowDown') scrollToNext();
			else scrollToPrev();
		}
	}

	function getSnapChildren(el: HTMLDivElement) {
		return Array.from(el.children) as HTMLElement[];
	}

	function scrollToNext() {
		if (el) {
			const children = getSnapChildren(el);
			const current = Math.round(el.scrollTop / el.clientHeight);
			children[current + 1]?.scrollIntoView({ behavior: 'smooth' });
		}
	}

	function scrollToPrev() {
		if (el) {
			const children = getSnapChildren(el);
			const current = Math.round(el.scrollTop / el.clientHeight);
			children[current - 1]?.scrollIntoView({ behavior: 'smooth' });
		}
	}

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
	let showHint = $state(false);
	let scrollCount = $state(0);

	function showScrollHint() {
		if (!shared.scrolled) {
			setTimeout(() => {
				// Only show if there's actually more than one snap section
				if (el && el.scrollHeight > el.clientHeight * 1.5) {
					showHint = true;
				}
			}, 800);
		}
	}

	function dismissHint() {
		if (showHint) {
			scrollCount += 1;
			if (scrollCount == 2) {
				showHint = false;
				shared.scrolled = true;
			}
		}
	}

	function checkScroll() {
		if (!el) return;
		const threshold = el.clientHeight / 2;
		atStart = el.scrollTop <= threshold;
		atEnd = el.scrollTop + el.clientHeight >= el.scrollHeight - threshold;
	}

	onMount(() => {
		checkScroll();
		showScrollHint();
	});

	function onScroll(e: Event) {
		el = e.target as HTMLDivElement;
		checkScroll();
		dismissHint();
	}
</script>

<svelte:window onkeydown={handleKeydown} />

<div
	class="h-full snap-y snap-mandatory snap-always overflow-y-scroll scroll-smooth"
	style="scrollbar-width: none; overscroll-behavior: contain;"
	bind:this={el}
	onscroll={onScroll}
>
	{@render contents()}

	{#if !atStart}
		<button
			transition:fade={{ delay: 0 }}
			onclick={scrollToPrev}
			class="absolute top-0 left-[calc(50%-14px)] z-20 opacity-75"
		>
			<ChevronUp size={28} />
		</button>
	{/if}

	{#if return_link}
		<div class="absolute top-4 left-4 z-20">
			<a
				class="btn-icon preset-tonal backdrop-blur-2xl hover:backdrop-blur-none"
				title="Return"
				href={return_link}><ArrowLeft size={18} /></a
			>
		</div>
	{/if}

	{#if !atEnd}
		<button
			transition:fade={{ delay: 0 }}
			onclick={scrollToNext}
			class="absolute bottom-0 left-[calc(50%-14px)] z-20 opacity-75"
		>
			<ChevronDown size={28} />
		</button>
	{/if}

	{#if showHint}
		<div
			transition:fade={{ duration: 600 }}
			class="pointer-events-none absolute bottom-10 left-1/2 z-30 flex -translate-x-1/2 flex-col items-center gap-1.5"
		>
			<div
				class="flex items-center gap-1 rounded-full bg-black/40 px-4 py-2 text-sm text-white/80 backdrop-blur-sm"
			>
				<span>Scroll, tap on </span>
				<ChevronsUpDown size={15} class="shrink-0" />
				<span> or use arrow keys</span>
			</div>
		</div>
	{/if}
</div>

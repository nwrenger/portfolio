<script lang="ts">
	import '../app.pcss';
	import { ModeWatcher, toggleMode } from 'mode-watcher';
	import * as Avatar from '$lib/components/ui/avatar';
	import { Button } from '$lib/components/ui/button';
	import { Sun, Moon } from 'lucide-svelte';

	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	let coords = { x: 0, y: 0 };
	let size = 0;
	let button_down = false;

	function handleLeave(e: PointerEvent) {
		button_down = false;

		coords = { x: e.clientX, y: e.clientY };
		size = 0;
	}

	function handleEnter(e: PointerEvent) {
		button_down = false;

		coords = { x: e.clientX, y: e.clientY };
		size = 10;
	}

	function handleMove(e: PointerEvent) {
		coords = { x: e.clientX, y: e.clientY };
		const target = e.target as HTMLElement;

		if (!button_down) {
			if (target.closest('a') || target.closest('button')) {
				size = 15;
			} else {
				size = 10;
			}
		}
	}

	function handleDown(e: PointerEvent) {
		button_down = true;

		coords = { x: e.clientX, y: e.clientY };
		const target = e.target as HTMLElement;

		if (target.closest('a') || target.closest('button')) {
			size = 9;
		} else {
			size = 7;
		}
	}

	function handleUp(e: PointerEvent) {
		button_down = false;

		coords = { x: e.clientX, y: e.clientY };
		const target = e.target as HTMLElement;

		if (target.closest('a') || target.closest('button')) {
			size = 15;
		} else {
			size = 10;
		}
	}

	function handleScroll() {
		let target = document.elementFromPoint(coords.x, coords.y);

		if (target && !button_down) {
			if (target.closest('a') || target.closest('button')) {
				size = 15;
			} else {
				size = 10;
			}
		}
	}

	let mounted = false;
	onMount(() => (mounted = true));

	let isTouchDevice = false;
	$: if (mounted) isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
</script>

<ModeWatcher disableTransitions={false} />

<svelte:body
	on:pointerleave={!isTouchDevice ? handleLeave : null}
	on:pointerenter={!isTouchDevice ? handleEnter : null}
	on:pointerdown={!isTouchDevice ? handleDown : null}
	on:pointerup={!isTouchDevice ? handleUp : null}
	on:pointermove={!isTouchDevice ? handleMove : null}
/>

<svelte:window on:scroll={!isTouchDevice ? handleScroll : null} />

<div class="min-h-screen">
	<header
		class="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
	>
		<div class="container max-w-7xl pl-4 pr-4">
			<nav class="flex h-[70px] items-center justify-between gap-3" data-sveltekit-preload-data>
				<div class="hidden items-center gap-1.5 sm:flex">
					<Button href="/" variant="link" class="p-0">
						<Avatar.Root>
							<Avatar.Image src="favicon.png" alt="portfolio" class="rounded-md" />
							<Avatar.Fallback>PF</Avatar.Fallback>
						</Avatar.Root>
					</Button>
				</div>
				<div class="flex items-center gap-1.5">
					<Button href="/" variant="link" class={$page.url.pathname == '/' ? 'underline' : ''}
						>Home</Button
					>
					<Button
						href="/projects"
						variant="link"
						class={$page.url.pathname == '/projects' ? 'underline' : ''}>Projects</Button
					>
					<Button href="https://github.com/nwrenger" target="_blank" variant="link">Github</Button>
				</div>
				<div class="flex items-center justify-end gap-2.5">
					<Button on:click={toggleMode} variant="outline" size="icon">
						<Sun
							class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
						/>
						<Moon
							class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
						/>
						<span class="sr-only">Toggle theme</span>
					</Button>
				</div>
			</nav>
		</div>
	</header>

	<div class="container max-w-6xl space-y-8 px-4 py-5">
		<slot />
	</div>
</div>

{#if !isTouchDevice}
	<div
		class="pointer-events-none fixed left-0 top-0 z-[1000] rounded-[50%] bg-white mix-blend-difference"
		style="
			transition: width 0.15s ease-out, height 0.15s ease-out;
			transform: translate(calc({coords.x}px - 50%), calc({coords.y}px - 50%));
			width: {size * 2}px;
			height: {size * 2}px;
		"
	></div>
	{#if mounted && size === 0}
		<div
			transition:fade
			class="fixed left-0 top-0 z-[999] flex h-full w-full items-center justify-center bg-background/30 text-lg backdrop-blur supports-[backdrop-filter]:bg-background/30"
		>
			<div in:fade class="animate-pulse text-center">
				<p>Move, click, or interact using your cursor!</p>
			</div>
		</div>
	{/if}
{/if}

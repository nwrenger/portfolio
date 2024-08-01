<script lang="ts">
	import '../app.pcss';
	import { ModeWatcher, toggleMode } from 'mode-watcher';
	import * as Avatar from '$lib/components/ui/avatar';
	import { Button } from '$lib/components/ui/button';
	import { Sun, Moon } from 'lucide-svelte';
	import { fade } from 'svelte/transition';

	import { spring } from 'svelte/motion';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	let coords = spring(
		{ x: -50, y: -50 },
		{
			stiffness: 1,
			damping: 1
		}
	);

	let size = spring(10);

	function handleMouseLeave() {
		size.set(0);
	}

	function handleMouseEnter() {
		size.set(10);
	}

	function handleMouseMove(e: MouseEvent) {
		coords.set({ x: e.clientX, y: e.clientY });
		const target = e.target as HTMLElement;

		if (e.buttons !== 1) {
			if (target.tagName === 'A' || target.tagName === 'BUTTON') {
				size.set(15);
			} else {
				size.set(10);
			}
		}
	}

	function handleMouseDown(e: MouseEvent) {
		const target = e.target as HTMLElement;

		if (target.tagName === 'A' || target.tagName === 'BUTTON') {
			size.set(10);
		} else {
			size.set(7);
		}
	}

	function handleMouseUp(e: MouseEvent) {
		const target = e.target as HTMLElement;

		if (target.tagName === 'A' || target.tagName === 'BUTTON') {
			size.set(15);
		} else {
			size.set(10);
		}
	}

	let mounted = false;
	onMount(() => (mounted = true));

	export let data;
	$: pathname = data.pathname;

	let isTouchDevice = false;
	$: if (mounted) isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
</script>

<ModeWatcher disableTransitions={false} />

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<div
	class="h-full overflow-scroll"
	on:mouseleave={!isTouchDevice ? handleMouseLeave : null}
	on:mouseenter={!isTouchDevice ? handleMouseEnter : null}
	on:mousedown={!isTouchDevice ? handleMouseDown : null}
	on:mouseup={!isTouchDevice ? handleMouseUp : null}
	on:mousemove={!isTouchDevice ? handleMouseMove : null}
>
	<header
		class="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
	>
		<div class="container max-w-7xl pl-4 pr-4">
			<nav class="flex h-[70px] items-center justify-between gap-3" data-sveltekit-preload-code>
				<div class="hidden items-center gap-1.5 sm:flex">
					<Button href="/" variant="link" class="p-0">
						<Avatar.Root>
							<Avatar.Image src="favicon.png" alt="portfolio" />
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

	{#key pathname}
		<div
			in:fade={{ duration: 200, delay: 400 }}
			out:fade={{ duration: 200 }}
			class="container max-w-7xl space-y-8 p-4"
		>
			<slot />
		</div>
	{/key}
</div>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<svg class="pointer-events-none fixed left-0 top-0 z-[1000] h-full w-full mix-blend-difference">
	{#if !isTouchDevice}
		<circle cx={$coords.x} cy={$coords.y} r={$size} class="filter-[invert(i)] fill-white" />
	{/if}
</svg>

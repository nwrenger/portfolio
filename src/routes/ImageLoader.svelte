<script lang="ts">
	import Skeleton from '$lib/components/ui/skeleton/skeleton.svelte';
	import { onMount } from 'svelte';

	interface Props {
		src: string;
		alt?: string;
		width?: string;
		height?: string;
		ratio?: string;
		rounded?: string;
	}

	let {
		src,
		alt = '',
		width = 'w-full',
		height = 'h-full',
		ratio = 'aspect-auto',
		rounded = 'rounded-lg'
	}: Props = $props();
	const base = `${width} ${height} ${ratio} ${rounded}`;

	let loaded = $state(false);
	let mounted = $state(false);

	function handleLoad() {
		loaded = true;
	}

	onMount(() => (mounted = true));
</script>

{#if !loaded}
	<Skeleton class="{base} animate-pulse" />
{/if}

{#if mounted}
	<img {src} {alt} onload={handleLoad} class="{base} object-cover {!loaded ? 'hidden' : ''}" />
{/if}

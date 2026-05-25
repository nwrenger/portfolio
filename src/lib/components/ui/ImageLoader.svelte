<script lang="ts">
	interface Props {
		src: string;
		alt?: string;
		width?: string;
		height?: string;
		ratio?: string;
		opacity?: string;
		classes?: string;
		aria_hidden?: 'true' | 'false';
	}

	let {
		src,
		alt = '',
		width = 'w-full',
		height = 'h-full',
		ratio = 'aspect-auto',
		opacity = 'opacity-100',
		classes = '',
		aria_hidden = 'false'
	}: Props = $props();
	let base = $derived(`${width} ${height} ${classes}`);
	let img = $derived(`${base} ${ratio}`);

	let loaded = $state(false);

	function handleLoad() {
		loaded = true;
	}
</script>

<div class="relative overflow-hidden {base}">
	<img
		{src}
		{alt}
		onload={handleLoad}
		class="{img} object-cover {loaded ? opacity : ' opacity-0'} transition-opacity duration-300"
		loading="lazy"
		decoding="sync"
		aria-hidden={aria_hidden}
	/>

	{#if !loaded}
		<div class="placeholder absolute inset-0 animate-pulse rounded-none {opacity}"></div>
	{/if}
</div>

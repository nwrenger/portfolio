<script lang="ts">
	export let src: string;
	export let alt = '';

	const base = 'w-full h-36 md:h-64 rounded-lg';
	let loaded = false;

	function handleLoad() {
		loaded = true;
	}
</script>

{#if !loaded}
	<div class="{base} placeholder animate-pulse" />
{/if}
<img
	{src}
	{alt}
	on:load={handleLoad}
	class="{base} object-cover shadow-md {!loaded ? 'hidden' : ''}"
/>

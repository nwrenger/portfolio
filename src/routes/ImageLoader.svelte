<script lang="ts">
	export let src: string;
	export let alt = '';
	$: loaded = false;

	function handleLoad() {
		loaded = true;
	}
</script>

{#if !loaded}
	<div class="w-full md:h-64 placeholder rounded-lg animate-pulse" />
{/if}
<img
	{src}
	{alt}
	on:load={handleLoad}
	class="w-full md:h-64 object-cover rounded-lg shadow-md {!loaded ? 'hidden' : ''}"
/>

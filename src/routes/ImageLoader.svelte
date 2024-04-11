<script lang="ts">
	export let src: string;
	export let alt = '';
	$: loaded = false;

	function handleLoad() {
		loaded = true;
	}
</script>

{#if !loaded}
	<p class="w-full md:h-64 animate-pulse">Loading...</p>
{/if}
<img
	{src}
	{alt}
	on:load={handleLoad}
	class="w-full md:h-64 object-cover rounded-lg shadow-md {!loaded ? 'hidden' : ''}"
/>

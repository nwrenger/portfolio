<script>
	import Header from './Header.svelte';
</script>

<div class="app">
	<Header />

	<main style="max-width: 900px; justify-content: center; margin: 0 auto;">
		<slot />
	</main>
</div>

<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<div class="mx-auto flex h-full max-w-7xl flex-col px-4 py-5">
	{@render children()}
</div>

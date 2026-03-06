<script lang="ts">
	import { page } from '$app/state';
	import { ArrowLeft } from 'lucide-svelte';
</script>

<div class="mx-auto flex h-full max-w-xl items-center justify-center p-4">
	<div class="flex flex-col items-center justify-center space-y-2">
		<h2 class="h3 font-semibold tracking-tight">
			{page.status} - {page.error?.message || 'Unknown Error'}
		</h2>

		<a
			class="btn-icon preset-tonal backdrop-blur-2xl hover:backdrop-blur-none"
			title="Return"
			href="/"><ArrowLeft size={18} /></a
		>
	</div>
</div>

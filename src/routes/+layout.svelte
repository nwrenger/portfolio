<script lang="ts">
	import { page } from '$app/state';
	import '../app.css';

	let { children } = $props();
	const year = new Date().getFullYear();
</script>

<div class="mx-auto flex h-full max-w-7xl flex-col px-4 py-6">
	{@render children()}
</div>

{#if page.url.pathname != '/privacy-policy'}
	<footer class="border-surface-200-800 border-t">
		<div
			class="mx-auto flex max-w-7xl flex-row items-center justify-between gap-3 px-4 py-6 text-sm"
		>
			<p class="text-surface-600 text-center text-xs sm:text-sm">
				<span class="opacity-80">© {year}</span> · <span class="font-medium">Nils Wrenger</span>
			</p>

			<div class="flex flex-wrap items-center gap-4">
				<a href="/privacy-policy" class="anchor text-center">Privacy Policy</a>
			</div>
		</div>
	</footer>
{/if}

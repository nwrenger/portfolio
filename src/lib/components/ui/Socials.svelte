<script>
	import { socials } from '$lib/content';
	import CopyButton from './CopyButton.svelte';
	import { ClipboardCheck } from 'lucide-svelte';
</script>

<div class="flex flex-wrap items-center justify-center gap-3">
	{#each socials as { name, url, icon: Icon }}
		{#if url}
			<a
				href={url}
				class="btn-icon anchor"
				target="_blank"
				rel="noopener noreferrer"
				title={name}
				aria-label={name}
			>
				<Icon />
			</a>
		{/if}
	{/each}
</div>

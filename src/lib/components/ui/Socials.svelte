<script>
	import { socials } from '$lib/content';
	import CopyButton from './CopyButton.svelte';
	import { ClipboardCheck } from 'lucide-svelte';
</script>

<div class="flex flex-wrap items-center justify-center gap-3">
	{#each socials as { name, url, username, icon: Icon }}
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
		{:else if username}
			<CopyButton text={username} class="btn-icon" title={name} aria-label={name}>
				{#snippet child({ copied })}
					{#if copied}
						<ClipboardCheck class="text-success-400" />
					{:else}
						<Icon class="anchor" />
					{/if}
				{/snippet}
			</CopyButton>
		{/if}
	{/each}
</div>

<script lang="ts">
	import { socials } from '$lib';
	import { Popover } from '@skeletonlabs/skeleton-svelte';
	import CopyButton from './CopyButton.svelte';
	import { ClipboardCheck } from 'lucide-svelte';

	let openState = $state(false);

	function popoverClose() {
		openState = false;
	}
</script>

<Popover
	open={openState}
	onOpenChange={(e) => (openState = e.open)}
	positioning={{ placement: 'bottom' }}
	triggerBase="btn preset-filled-tertiary-500"
	contentBase="card bg-surface-200-800 p-4 space-y-4 max-w-[260px]"
>
	{#snippet trigger()}Contacts{/snippet}
	{#snippet content()}
		<div class="flex flex-col items-center justify-start space-y-2">
			{#each socials as { name, url, username, icon: Icon }}
				{#if url}
					<a
						href={url}
						target="_blank"
						class="btn preset-tonal w-full! justify-start"
						onclick={popoverClose}
					>
						<Icon class="mr-2 size-4" />
						<span>{name}</span>
					</a>
				{:else if username}
					<CopyButton text={username} class="btn preset-tonal w-full! justify-start">
						{#snippet child({ copied })}
							{#if copied}
								<ClipboardCheck class="mr-2 size-4" />
								<span class="hidden md:block">Copied</span>
							{:else}
								<Icon class="mr-2 size-4" />
								<span>{name}</span>
							{/if}
						{/snippet}
					</CopyButton>
				{/if}
			{/each}
		</div>
	{/snippet}
</Popover>

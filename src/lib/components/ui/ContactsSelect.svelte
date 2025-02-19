<script lang="ts">
	import { socials } from '$lib';
	import { Popover } from '@skeletonlabs/skeleton-svelte';

	let openState = $state(false);

	function popoverClose() {
		openState = false;
	}
</script>

<Popover
	bind:open={openState}
	positioning={{ placement: 'bottom' }}
	triggerBase="btn preset-filled-tertiary-500"
	contentBase="card bg-surface-200-800 p-4 space-y-4 max-w-[260px]"
>
	{#snippet trigger()}Contacts{/snippet}
	{#snippet content()}
		<div class="flex flex-col items-center justify-start space-y-2">
			{#each socials as { name, url, icon: Icon }}
				<a
					href={url}
					class="btn !w-full justify-start preset-tonal"
					target="_blank"
					onclick={popoverClose}
				>
					<Icon class="mr-2 size-4" />
					<span>{name}</span>
				</a>
			{/each}
		</div>
	{/snippet}
</Popover>

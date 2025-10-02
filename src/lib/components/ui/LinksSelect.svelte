<script module>
	export interface Link {
		name: string;
		username?: string;
		url?: string;
		icon: typeof Icon;
	}
</script>

<script lang="ts">
	import { Popover } from '@skeletonlabs/skeleton-svelte';
	import CopyButton from './CopyButton.svelte';
	import { ClipboardCheck, Icon } from 'lucide-svelte';

	interface Props {
		label: string;
		bg: string;
		contrast: string;
		links: Link[];
	}

	let { label, bg, contrast, links }: Props = $props();
	let openState = $state(false);

	function popoverClose() {
		openState = false;
	}
</script>

<Popover
	open={openState}
	onOpenChange={(e) => (openState = e.open)}
	positioning={{ placement: 'bottom' }}
	triggerBase="btn {bg}"
	contentBase="card {bg} p-4 space-y-4 min-w-[170px] max-w-[260px]"
>
	{#snippet trigger()}{label}{/snippet}
	{#snippet content()}
		<div class="flex flex-col items-center justify-start space-y-2">
			{#each links as { name, url, username, icon: Icon }}
				{#if url}
					<a
						href={url}
						target="_blank"
						class="btn {contrast} w-full! justify-start"
						onclick={popoverClose}
					>
						<Icon class="mr-2 size-4" />
						<span>{name}</span>
					</a>
				{:else if username}
					<CopyButton text={username} class="btn {contrast} w-full! justify-start">
						{#snippet child({ copied })}
							{#if copied}
								<ClipboardCheck class="mr-2 size-4" />
								<span class="block">Copied</span>
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

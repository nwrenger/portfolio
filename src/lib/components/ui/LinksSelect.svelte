<script module>
	export interface Link {
		name: string;
		username?: string;
		url?: string;
		icon: typeof Icon;
	}
</script>

<script lang="ts">
	import { Popover, Portal } from '@skeletonlabs/skeleton-svelte';
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
>
	<Popover.Trigger class="btn {bg}">{label}</Popover.Trigger>
	<Portal>
		<Popover.Positioner>
			<Popover.Content
				class="card {bg} max-w-[260px] min-w-[170px] space-y-4 p-4 opacity-0 transition transition-discrete data-[state=open]:opacity-100 starting:data-[state=open]:opacity-0"
			>
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
			</Popover.Content>
		</Popover.Positioner>
	</Portal>
</Popover>

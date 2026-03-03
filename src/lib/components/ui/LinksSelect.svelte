<script module>
	export interface Link {
		name: string;
		username?: string;
		url?: string;
		new_tab?: boolean;
		icon: typeof Icon;
	}
</script>

<script lang="ts">
	import CopyButton from './CopyButton.svelte';
	import { ClipboardCheck, ClipboardCopy, ExternalLink, Icon } from 'lucide-svelte';

	interface Props {
		label: string;
		bg: string;
		links: Link[];
	}

	let { label, bg, links }: Props = $props();
</script>

<div class="flex max-h-full w-full max-w-sm flex-col justify-center space-y-5 text-center">
	<!-- Label -->
	<div class="flex flex-col items-center gap-2">
		<h3 class="h3 font-semibold tracking-tight">{label}</h3>
		<div class="bg-surface-400 h-px w-12 rounded-full opacity-50"></div>
	</div>

	<!-- Links -->
	<div class="grid gap-2.5">
		{#each links as { name, url, username, new_tab, icon: Icon }}
			{#if url}
				<a
					href={url}
					target={new_tab ? '_blank' : ''}
					rel={new_tab ? 'noopener noreferrer' : ''}
					class="group btn {bg} flex items-center justify-start gap-3 p-3.5"
				>
					<span
						class="bg-surface-500/25 flex size-8 shrink-0 items-center justify-center rounded-md transition-colors"
					>
						<Icon class="size-4" />
					</span>
					<span class="text-sm font-medium">{name}</span>
					{#if new_tab}
						<ExternalLink
							class="anchor ml-auto shrink-0 opacity-0 transition-all duration-150 group-hover:opacity-55"
							size={16}
						/>
					{/if}
				</a>
			{:else if username}
				<CopyButton
					text={username}
					class="group btn {bg} flex w-full items-center justify-start gap-3 p-3.5"
				>
					{#snippet child({ copied })}
						<span
							class="bg-surface-500/25 flex size-8 shrink-0 items-center justify-center rounded-md transition-colors"
						>
							{#if copied}
								<ClipboardCheck class="text-success-400 size-4" />
							{:else}
								<Icon class="size-4" />
							{/if}
						</span>
						<span class="text-sm font-medium transition-colors {copied ? 'text-success-400' : ''}">
							{copied ? 'Copied!' : name}
						</span>
						{#if !copied}
							<ClipboardCopy
								class="anchor ml-auto shrink-0 opacity-0 transition-all duration-150 group-hover:opacity-55"
								size={16}
							/>
						{/if}
					{/snippet}
				</CopyButton>
			{/if}
		{/each}
	</div>
</div>

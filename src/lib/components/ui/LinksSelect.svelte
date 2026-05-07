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
		links: Link[];
	}

	let { links }: Props = $props();
</script>

<section class="xs:grid-cols-2 grid gap-4">
	{#each links as { name, url, username, new_tab, icon: Icon }}
		{#if url}
			<a
				href={url}
				target={new_tab ? '_blank' : undefined}
				rel={new_tab ? 'noopener noreferrer' : undefined}
				class="group card card-hover preset-tonal-surface border-surface-200-800 flex items-center justify-start gap-3 border p-3.5"
			>
				<span
					class="bg-surface-500/25 flex size-8 shrink-0 items-center justify-center rounded-md transition-colors"
				>
					<Icon class="size-4" />
				</span>
				<span class="text-sm">{name}</span>
				{#if new_tab}
					<ExternalLink
						aria-hidden="true"
						class="anchor ml-auto shrink-0 opacity-0 transition-all duration-150 group-hover:opacity-55 group-focus-visible:opacity-55"
						size={16}
					/>
				{/if}
			</a>
		{:else if username}
			<CopyButton
				text={username}
				class="group card card-hover preset-tonal-surface border-surface-200-800 flex w-full items-center justify-start gap-3 border p-3.5"
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
					<span class="text-sm transition-colors {copied ? 'text-success-400' : ''}">
						{copied ? 'Copied!' : name}
					</span>
					{#if !copied}
						<ClipboardCopy
							aria-hidden="true"
							class="anchor ml-auto shrink-0 opacity-0 transition-all duration-150 group-hover:opacity-55 group-focus-visible:opacity-55"
							size={16}
						/>
					{/if}
				{/snippet}
			</CopyButton>
		{/if}
	{/each}
</section>

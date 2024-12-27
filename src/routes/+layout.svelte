<script lang="ts">
	import '../app.css';
	import * as Avatar from '$lib/components/ui/avatar';
	import { Button } from '$lib/components/ui/button';
	import { ModeWatcher, toggleMode } from 'mode-watcher';
	import { Sun, Moon } from 'lucide-svelte';

	import { page } from '$app/state';
	import { type Snippet } from 'svelte';
	interface Props {
		children?: Snippet;
	}

	let { children }: Props = $props();
</script>

<ModeWatcher disableTransitions={false} />

<div class="min-h-screen">
	<header
		class="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
	>
		<div class="container max-w-7xl pl-4 pr-4">
			<nav class="flex h-[70px] items-center justify-between gap-3" data-sveltekit-preload-data>
				<div class="hidden items-center gap-1.5 sm:flex">
					<Button href="/" variant="link" class="p-0">
						<Avatar.Root>
							<Avatar.Image src="favicon.webp" alt="portfolio" />
							<Avatar.Fallback>PF</Avatar.Fallback>
						</Avatar.Root>
					</Button>
				</div>
				<div class="flex items-center gap-1.5">
					<Button href="/" variant="link" class={page.url.pathname == '/' ? 'underline' : ''}
						>Home</Button
					>
					<Button
						href="/projects"
						variant="link"
						class={page.url.pathname == '/projects' ? 'underline' : ''}>Projects</Button
					>
					<Button href="https://github.com/nwrenger" target="_blank" variant="link">Github</Button>
				</div>
				<div class="flex items-center justify-end gap-2.5">
					<Button onclick={toggleMode} variant="outline" size="icon">
						<Sun
							class="!size-5 h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
						/>
						<Moon
							class="absolute !size-5 h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
						/>
						<span class="sr-only">Toggle theme</span>
					</Button>
				</div>
			</nav>
		</div>
	</header>

	<div class="container max-w-6xl space-y-8 px-4 py-5">
		{@render children?.()}
	</div>
</div>

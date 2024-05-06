<script lang="ts">
	import { projects } from '$lib';
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Card from '$lib/components/ui/card';
	import * as Sheet from '$lib/components/ui/sheet';
	import { SquareArrowOutUpRight, RefreshCcw } from 'lucide-svelte';
	import ImageLoader from './ImageLoader.svelte';
	import { builderActions } from 'bits-ui';
	import { fade, fly, scale } from 'svelte/transition';
	import { onMount } from 'svelte';

	let playAnim: boolean = false;

	onMount(() => (playAnim = true));

	/// Replays the current animation using a timeout (yeah that's a little bit hacky)
	function replayAnim() {
		playAnim = false;
		setTimeout(() => {
			playAnim = true;
		}, 100);
	}
</script>

<svelte:head>
	<title>portfolio</title>
	<meta
		name="description"
		content="Hi, there! I'm Nils, a high school student passionate about coding, particularly in Rust and in Svelte."
	/>
</svelte:head>

{#if playAnim}
	<h1
		class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"
		in:fade={{ duration: 200, delay: 0 }}
	>
		Hi, there!
	</h1>

	<p class="leading-7" in:fade={{ duration: 200, delay: 200 }}>
		I'm Nils, a high school student passionate about coding, particularly in <a
			href="https://www.rust-lang.org/"
			class="text-primary underline underline-offset-4"
			target="_blank">Rust</a
		>
		and in
		<a href="https://svelte.dev/" class="text-primary underline underline-offset-4" target="_blank"
			>Svelte</a
		>. I have done a lot of things so far, so look for that under
		<a href="#projects" class="text-primary underline underline-offset-4">Projects</a>. Feel free to
		reach out for a chat about coding or anything else via my E-Mail
		<a
			href="mailto:nils@wrenger.net"
			class="text-primary underline underline-offset-4"
			target="_parent">nils@wrenger.net</a
		>!
	</p>

	<div in:fade={{ duration: 200, delay: 400 }}>
		<h2
			class="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0"
			id="projects"
		>
			Projects
		</h2>

		<code class="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
			Total: {projects.length}
		</code>
	</div>

	<div class="grid w-full gap-4 md:grid-cols-2">
		{#each projects as { title, summary, picture, description, link }, i}
			<Sheet.Root>
				<Sheet.Trigger asChild let:builder>
					{@const builders = [builder]}
					<button
						use:builderActions={{ builders }}
						class="h-full rounded-lg transition-all hover:scale-[1.01] hover:shadow-lg"
						in:fly|global={{ duration: 200, delay: 600 + i * 100, x: i % 2 == 0 ? -800 : 800 }}
					>
						<Card.Root class="!h-full">
							<Card.Header>
								<Card.Title>{title}</Card.Title>
								<Card.Description>{summary}</Card.Description>
							</Card.Header>
						</Card.Root>
					</button>
				</Sheet.Trigger>
				<Sheet.Content class="w-[340px] overflow-y-scroll sm:!max-w-full md:w-[480px]">
					<Sheet.Header>
						<Sheet.Title>
							<h2
								class="flex scroll-m-20 justify-start pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0"
							>
								{title}
							</h2>
						</Sheet.Title>
						<Sheet.Description class="space-y-4 !text-left">
							<ImageLoader src={'projects/' + picture} alt={title} height="h-36 md:h-64" />
							<p class="leading-7">{@html description}</p>
							<div>
								<a href={link} class="text-primary underline underline-offset-4" target="_blank"
									><span class="flex justify-between"
										>See the Project here <SquareArrowOutUpRight size={20} /></span
									></a
								>
							</div>
						</Sheet.Description>
					</Sheet.Header>
				</Sheet.Content>
			</Sheet.Root>
		{/each}
	</div>

	<p
		class="leading-7"
		in:fade={{
			duration: 200,
			delay: 800 + projects.length * 100
		}}
	>
		More details and other smaller Projects can be seen on
		<a
			href="https://www.github.com/nwrenger"
			class="text-primary underline underline-offset-4"
			target="_blank">my Github</a
		>
	</p>

	<div
		in:scale={{
			duration: 200,
			delay: 1000 + projects.length * 100
		}}
	>
		<Button variant="ghost" size="icon" on:click={replayAnim} title="Replay Animation"
			><RefreshCcw /></Button
		>
	</div>
{/if}

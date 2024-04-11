<script lang="ts">
	import { onMount } from 'svelte';
	import { playAnim } from '$lib/stores';
	import { projects } from '$lib';
	import { fade, fly, scale } from 'svelte/transition';
	import { getDrawerStore, type DrawerSettings } from '@skeletonlabs/skeleton';

	const drawerStore = getDrawerStore();

	// if page fully loaded play animation once
	onMount(() => ($playAnim = true));

	/// Open the popup fitting to the specified title
	function showDetails(title: string) {
		const drawerSettings: DrawerSettings = {
			id: title,
			position: 'right',
			bgBackdrop: 'bg-gradient-to-tr from-indigo-500/50 via-purple-500/50 to-pink-500/50',
			width: 'w-[300px] md:w-[480px]',
			padding: 'p-4',
			rounded: 'rounded-xl'
		};
		drawerStore.open(drawerSettings);
	}

	/// Replays the current animation using a timeout (yeah that's a little bit hacky)
	function replayAnim() {
		$playAnim = false;
		setTimeout(() => {
			$playAnim = true;
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

{#if $playAnim}
	<div class="container space-y-8 flex flex-col items-center !max-w-6xl mx-auto p-4">
		<h1 class="h1" in:fade={{ duration: 200, delay: 200 }}>Hi, there!</h1>

		<p class="text-center" in:fade={{ duration: 200, delay: 400 }}>
			I'm Nils, a high school student passionate about coding, particularly in <a
				href="https://www.rust-lang.org/"
				class="anchor"
				target="_blank">Rust</a
			>
			and in <a href="https://svelte.dev/" class="anchor" target="_blank">Svelte</a>. I have done a
			lot of things so far, so look for that under <a href="#projects" class="anchor">Projects</a>.
			Feel free to reach out for a chat about coding or anything else via my E-Mail
			<a href="mailto:nils@wrenger.net" class="anchor" target="_parent">nils@wrenger.net</a>!
		</p>

		<div
			class="flex flex-col items-center"
			in:fade={{
				duration: 200,
				delay: 600
			}}
		>
			<h2 class="h2 pb-2" id="projects">Projects</h2>
			<code class="code">Total: {projects.length}</code>
		</div>

		<div class="grid md:grid-cols-2 gap-4 w-full">
			{#each projects as { title, summary }, i}
				<button
					class="overflow-hidden block card card-hover text-left"
					on:click={() => showDetails(title)}
					in:fly|global={{ duration: 200, delay: 800 + i * 100, x: i % 2 == 0 ? -800 : 800 }}
				>
					<div class="p-4">
						<h3 class="h3">{title}</h3>
						<p>{summary}</p>
					</div>
				</button>
			{/each}
		</div>

		<p
			class="text-center"
			in:fade={{
				duration: 200,
				delay: 1000 + projects.length * 100
			}}
		>
			More details and other smaller Projects can be seen on
			<a href="https://www.github.com/nwrenger" class="anchor" target="_blank">my Github</a>
		</p>

		<button
			type="button"
			class="btn-icon variant-filled"
			title="Replay Animation"
			in:scale={{
				duration: 200,
				delay: 1200 + projects.length * 100
			}}
			on:click={replayAnim}><i class="fa-solid fa-rotate-right"></i></button
		>
	</div>
{/if}

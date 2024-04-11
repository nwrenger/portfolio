<script lang="ts">
	import '../app.postcss';
	import '@fortawesome/fontawesome-free/css/all.css';
	import {
		popup,
		type PopupSettings,
		AppShell,
		LightSwitch,
		storePopup,
		initializeStores,
		setInitialClassState,
		Drawer,
		getDrawerStore
	} from '@skeletonlabs/skeleton';

	// drawer
	initializeStores();
	const drawerStore = getDrawerStore();

	// animations
	import { fade } from 'svelte/transition';

	// popup
	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
	import { playAnim } from '$lib/stores';
	import { projects } from '$lib';
	import ImageLoader from './ImageLoader.svelte';
	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });

	const profile: PopupSettings = {
		event: 'click',
		target: 'profileContents',
		placement: 'bottom'
	};
</script>

<svelte:head>{@html '<script>(' + setInitialClassState.toString() + ')();</script>'}</svelte:head>

<!-- Drawer for further infos -->
<Drawer>
	{#each projects as { title, picture, description, link }}
		{#if $drawerStore.id === title}
			<div class="p-4 space-y-4">
				<button
					type="button"
					class="btn-icon variant-filled mb-2"
					title="Close"
					on:click={drawerStore.close}><i class="fa-solid fa-xmark"></i></button
				>
				<h2 class="h2">{title}</h2>
				<a href="projects/{picture}" target="_blank">
					<ImageLoader src="projects/{picture}" alt="Picture of {title}" />
				</a>
				<p>{@html description}</p>

				<div>
					<a class="anchor" target="_blank" href={link}
						>See the project here <i class="fa-solid fa-up-right-from-square"></i></a
					>
				</div>
			</div>
		{/if}
	{/each}
</Drawer>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="pageHeader">
		<!-- Page Container -->
		{#if $playAnim}
			<div
				class="page-container !max-w-6xl mx-auto grid grid-cols-[1fr_auto] items-center gap-4 p-4"
				in:fade={{ duration: 200, delay: 0 }}
			>
				<button type="button" class="btn-icon" use:popup={profile} title="profile">
					<img class=" max-w-full rounded-sm aspect-square shadow-xl" src="/favicon.png" alt="nw" />
				</button>

				<div class="card p-4 w-72 shadow-xl" data-popup="profileContents">
					<div class="space-y-4">
						<div>
							<p class="font-bold">Nils Wrenger</p>
							<p class="opacity-50">nwrenger</p>
						</div>
						<p>Hi, I use Fedora OS and have skills in programming with Rust btw</p>
						<div class="flex gap-4">
							<small><strong>10</strong> <span class="opacity-50">Followers</span></small>
							<small><strong>11</strong> <span class="opacity-50">Following</span></small>
						</div>
						<a
							class="btn variant-soft w-full"
							href="https://github.com/nwrenger"
							target="_blank"
							rel="noreferrer"
						>
							View on Github
						</a>
					</div>
					<div class="arrow bg-surface-100-800-token" />
				</div>
				<LightSwitch
					class="bg-surface-50/50 dark:bg-surface-900/50 backdrop-blur-xl shadow-xl"
					ring="ring-none"
				/>
			</div>
		{/if}
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>

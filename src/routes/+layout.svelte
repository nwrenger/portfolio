<script lang="ts">
	import hljs from 'highlight.js/lib/core';
	import rust from 'highlight.js/lib/languages/rust';
	import 'highlight.js/styles/github-dark.css';
	hljs.registerLanguage('rust', rust);
	import { popup, storeHighlightJs, type PopupSettings } from '@skeletonlabs/skeleton';
	storeHighlightJs.set(hljs);

	import '../app.postcss';
	import '@fortawesome/fontawesome-free/css/all.css';

	import { AppShell } from '@skeletonlabs/skeleton';
	import { LightSwitch } from '@skeletonlabs/skeleton';

	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });

	const profile: PopupSettings = {
		event: 'click',
		target: 'profileContents',
		placement: 'bottom'
	};
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="pageHeader">
		<!-- Page Container -->
		<div class="page-container !max-w-7xl mx-auto grid grid-cols-[1fr_auto] items-center gap-4 p-4">
			<button type="button" class="btn-icon" use:popup={profile}>
				<img class=" max-w-full rounded-sm aspect-square shadow-xl" src="./favicon.png" alt="nw" />
			</button>

			<div class="card p-4 w-72 shadow-xl" data-popup="profileContents">
				<div class="space-y-4">
					<div>
						<p class="font-bold">Nils Wrenger</p>
						<p class="opacity-50">nwrenger</p>
					</div>
					<p>Hi, I use Fedora OS and have skills in programming with Rust btw</p>
					<div class="flex gap-4">
						<small><strong>9</strong> <span class="opacity-50">Followers</span></small>
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
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>

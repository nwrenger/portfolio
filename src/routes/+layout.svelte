<script lang="ts">
	import hljs from 'highlight.js/lib/core';
	import rust from 'highlight.js/lib/languages/rust';
	import 'highlight.js/styles/github-dark.css';
	hljs.registerLanguage('rust', rust);
	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	storeHighlightJs.set(hljs);

	import '../app.postcss';
	import '@fortawesome/fontawesome-free/css/all.css';

	import img from '$lib/images/logo.png';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import { LightSwitch } from '@skeletonlabs/skeleton';
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar class="shadow-2xl">
			<svelte:fragment slot="lead">
				<a class="sm:!ml-0 w-[40px] sm:w-auto overflow-hidden flex items-center" href="/">
					<img class="h-[40px] max-w-full rounded-sm" src={img} alt="profile" />
					<h4 class="h4 ps-3">
						<span
							class="bg-gradient-to-br from-blue-500 to-violet-500 bg-clip-text text-transparent box-decoration-clone"
							>nwrenger</span
						>
					</h4>
				</a>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<LightSwitch />
				<a
					class="btn btn-icon hover:variant-soft-primary"
					href="https://github.com/nwrenger"
					target="_blank"
					rel="noreferrer"
					><i class="fa-brands fa-github text-lg"></i>
				</a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>

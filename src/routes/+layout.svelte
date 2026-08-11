<script lang="ts">
	import '../app.css';
	import { onNavigate } from '$app/navigation';

	let { children } = $props();

	// View transition
	let currentTransition: ViewTransition | null = null;

	function inferDirection(from?: URL, to?: URL): 'forward' | 'back' | null {
		if (!from || !to) return null;

		const fromSegments = from.pathname.split('/').filter(Boolean);
		const toSegments = to.pathname.split('/').filter(Boolean);

		if (fromSegments.length < toSegments.length) return 'forward';
		if (fromSegments.length > toSegments.length) return 'back';

		return null;
	}

	onNavigate((navigation) => {
		if (
			!document.startViewTransition ||
			navigation.willUnload ||
			window.matchMedia('(prefers-reduced-motion: reduce)').matches
		)
			return;

		const direction = inferDirection(navigation.from?.url, navigation.to?.url);

		return new Promise((resolve) => {
			currentTransition?.skipTransition();

			const transition = document.startViewTransition({
				types: direction ? [direction] : [],
				update: async () => {
					resolve();
					await navigation.complete;
				}
			});

			currentTransition = transition;
			transition.ready.catch(() => {});

			transition.finished.finally(() => {
				if (currentTransition === transition) {
					currentTransition = null;
				}
			});
		});
	});
</script>

<main class="page-transition">
	{@render children()}
</main>

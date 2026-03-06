<script lang="ts">
	import '../app.css';
	import { onNavigate } from '$app/navigation';

	let { children } = $props();

	// View transition
	let currentTransition: ViewTransition | null = $state(null);

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			if (currentTransition && currentTransition.skipTransition) {
				currentTransition.skipTransition();
			}

			currentTransition = document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});

			currentTransition.ready.catch(() => {});

			currentTransition.finished.finally(() => {
				currentTransition = null;
			});
		});
	});
</script>

{@render children()}

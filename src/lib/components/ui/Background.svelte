<script lang="ts">
	interface Props {
		src: string;
		opacity: number;
	}

	let { src, opacity }: Props = $props();

	let canvas: HTMLCanvasElement;
	let loaded = $state(false);
	let img: HTMLImageElement | null = null;

	function drawCovered(imgEl: HTMLImageElement) {
		if (!canvas) return;

		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		const W = canvas.width;
		const H = canvas.height;
		const iw = imgEl.naturalWidth;
		const ih = imgEl.naturalHeight;

		ctx.clearRect(0, 0, W, H);

		// object-fit: cover, scale: 1.21
		const SCALE_FACTOR = 1.21;
		const scale = Math.max(W / iw, H / ih) * SCALE_FACTOR;
		const dw = iw * scale;
		const dh = ih * scale;
		const dx = (W - dw) / 2;
		const dy = (H - dh) / 2;

		ctx.drawImage(imgEl, dx, dy, dw, dh);
	}

	function resizeAndRedraw() {
		if (!canvas) return;

		const rect = canvas.getBoundingClientRect();
		const dpr = window.devicePixelRatio || 1;

		const width = Math.round((rect.width || 800) * dpr);
		const height = Math.round((rect.height || 600) * dpr);

		if (canvas.width !== width || canvas.height !== height) {
			canvas.width = width;
			canvas.height = height;
		}

		if (img) drawCovered(img);
	}

	function loadImage() {
		loaded = false;

		const next = new Image();
		next.crossOrigin = 'anonymous';
		next.onload = () => {
			img = next;
			resizeAndRedraw();

			requestAnimationFrame(() =>
				requestAnimationFrame(() => {
					loaded = true;
				})
			);
		};
		next.src = src;
	}

	function onMount(node: HTMLCanvasElement) {
		canvas = node;

		requestAnimationFrame(() => {
			loadImage();
		});
	}
</script>

<svelte:window on:resize={resizeAndRedraw} />

<canvas
	use:onMount
	style:opacity={loaded ? opacity : 0}
	style="filter: blur(56px) saturate(180%);"
	class="absolute inset-0 h-full w-full transition-opacity duration-300 select-none"
	aria-hidden="true"
></canvas>

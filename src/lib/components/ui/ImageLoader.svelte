<script lang="ts">
	interface Props {
		src: string;
		alt?: string;
		width?: string;
		height?: string;
		ratio?: string;
		opacity?: string;
		classes?: string;
		aria_hidden?: 'true' | 'false';
		onLoad?: (image: HTMLImageElement) => void;
	}

	let {
		src,
		alt = '',
		width = 'w-full',
		height = 'h-full',
		ratio = 'aspect-auto',
		opacity = 'opacity-100',
		classes = '',
		aria_hidden = 'false',
		onLoad
	}: Props = $props();
	let base = $derived(`${width} ${height} ${classes}`);
	let img = $derived(`${base} ${ratio}`);

	let loaded = $state(false);

	function handleLoad(event: Event) {
		loaded = true;
		onLoad?.(event.currentTarget as HTMLImageElement);
	}
</script>

<div class="{loaded ? '' : `placeholder animate-pulse rounded-none ${opacity}`} {base}">
	<img
		{src}
		{alt}
		onload={handleLoad}
		class="{img} object-cover {loaded ? opacity : ' opacity-0'} transition-opacity duration-300"
		loading="lazy"
		decoding="sync"
		aria-hidden={aria_hidden}
	/>
</div>

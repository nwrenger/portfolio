<script lang="ts">
	interface Props {
		src: string;
		alt?: string;
		width?: string;
		height?: string;
		ratio?: string;
		rounded?: string;
	}

	let {
		src,
		alt = '',
		width = 'w-full',
		height = 'h-full',
		ratio = 'aspect-auto',
		rounded = 'rounded-lg'
	}: Props = $props();
	const base = `${width} ${height} ${ratio} ${rounded}`;

	let loaded = $state(false);

	function handleLoad() {
		loaded = true;
	}
</script>

<div class={loaded ? '' : 'animate-pulse bg-muted'}>
	<img
		{src}
		{alt}
		onload={handleLoad}
		class="{base} object-cover {loaded ? 'opacity-100' : ' opacity-0'}"
		loading="lazy"
	/>
</div>

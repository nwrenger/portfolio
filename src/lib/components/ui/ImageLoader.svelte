<script lang="ts">
	interface Props {
		src: string;
		alt?: string;
		classes?: string;
		loading?: 'eager' | 'lazy';
		fetchpriority?: 'high' | 'low' | 'auto';
	}

	let { src, alt = '', classes = '', loading = 'eager', fetchpriority = 'high' }: Props = $props();
</script>

{#key src}
	<img
		{src}
		{alt}
		{loading}
		{fetchpriority}
		class="opacity-0 {classes}"
		onload={(event) => event.currentTarget.classList.remove('opacity-0')}
	/>
{/key}

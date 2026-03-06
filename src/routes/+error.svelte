<script lang="ts">
	import { page } from '$app/state';
</script>

<div class="mx-auto flex h-full max-w-xl items-center justify-center p-4">
	<h2 class="h3 font-semibold tracking-tight">
		{page.status} - {page.error?.message || 'Unknown Error'}
	</h2>
</div>

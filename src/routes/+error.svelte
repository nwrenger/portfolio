<script lang="ts">
	import { page } from '$app/state';
</script>

<div class="mx-auto h-full max-w-3xl px-4 py-6">
	<h2 class="h2 text-center">
		{page.status} - {page.error?.message || 'Unknown Error'}
	</h2>
</div>

<script lang="ts">
	import { page } from '$app/stores';
</script>

<h2>
	{$page.status} - {$page.error?.message || 'Unknown Error'}
</h2>

<script lang="ts">
	import * as Alert from '$lib/components/ui/alert';
	import { page } from '$app/stores';
	import { CircleAlert } from 'lucide-svelte';
</script>

<Alert.Root>
	<CircleAlert class="h-4 w-4" />
	<Alert.Title>Error: {$page.status} - {$page.error?.message || 'Unknown Error'}</Alert.Title>
	<Alert.Description>
		<p>URL: <code>{$page.url}</code></p>
		<p>Timestamp: {new Date().toLocaleString()}</p>
	</Alert.Description>
</Alert.Root>

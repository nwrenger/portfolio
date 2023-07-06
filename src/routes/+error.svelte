<script>
	// @ts-nocheck
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>Error</title>
	<meta name="description" content="An Error Occurred" />
</svelte:head>

<section>
	<div class="card border-secondary" style="margin: 20px;">
		<h4 class="card-header">Oh no! An Error Occurred!</h4>
		<div class="card-body">
			<p class="card-text">
				With the Status Code "{$page.status}" and the Error Message "{$page.error.message}".
			</p>
		</div>
	</div>
</section>

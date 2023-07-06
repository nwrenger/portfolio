<script>
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="My Home" />
</svelte:head>

<section>
	<div class="card border-secondary" style="margin: 20px;">
		<h4 class="card-header">Hi, there!</h4>
		<div class="card-body">
			<p class="card-text">
				Welcome to my meaningless Website! It can't do anything now. Just go to my <a
					href="{base}/projects"
					class="link">Projects</a
				>
				Section or go to my <a href="{base}/about" class="link">About Me</a> Section. Lorem ipsum
				alum est. Mercator es ibus est. Inuria ia est.<br />
			</p>
		</div>
	</div>
</section>

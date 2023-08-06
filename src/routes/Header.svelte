<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/logo.png';
	import { base } from '$app/paths';
</script>

<header>
	<nav class="navbar navbar-expand-lg bg-body-tertiary">
		<div class="container-fluid">
			<a target="_blank" class="navbar-brand" href="https://github.com/nwrenger"
				><img class="navbar-img" src={logo} alt="nwrenger" /></a
			>
			<button
				class="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarNavAltMarkup"
				aria-controls="navbarNavAltMarkup"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon" />
			</button>
			<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
				<div class="navbar-nav">
					<a
						class={$page.url.pathname === base + '/' || $page.url.pathname === base
							? 'nav-link active'
							: 'nav-link'}
						href="{base}/">Home</a
					>
					<a
						class={$page.url.pathname === base + '/projects' ? 'nav-link active' : 'nav-link'}
						href="{base}/projects">Projects</a
					>
					<a
						class={$page.url.pathname === base + '/about' ? 'nav-link active' : 'nav-link'}
						href="{base}/about">About</a
					>
					<a
						class={$page.url.pathname === base + '/contact' ? 'nav-link active' : 'nav-link'}
						href="{base}/contact">Contact</a
					>
					<a
						class={$page.url.pathname === base + '/legals' ? 'nav-link active' : 'nav-link'}
						href="{base}/legals">Legals</a
					>
				</div>
			</div>
		</div>
	</nav>
</header>

<style>
	.navbar-img {
		height: 40px;
		transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
		box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
	}

	.navbar-img:hover {
		transform: scale(1.2) rotate(5deg);
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
	}

	.navbar-img:active {
		transform: scale(1) rotate(2deg);
		box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
	}
</style>

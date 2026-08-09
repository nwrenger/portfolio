<script>
	import { goto } from '$app/navigation';
	import { ArrowLeft, Languages } from 'lucide-svelte';

	function back() {
		if (window?.history.length > 1) {
			window?.history.back();
		} else {
			goto('/');
		}
	}
</script>

<svelte:head>
	<title>Privacy Policy</title>
	<meta
		name="description"
		content="Read the privacy policy for my websites to learn how personal data is processed, local browser storage is used, and online functionality is provided."
	/>
	<!-- Open Graph -->
	<meta property="og:title" content="Privacy Policy" />
	<meta
		property="og:description"
		content="Read the privacy policy for my websites to learn how personal data is processed, local browser storage is used, and online functionality is provided."
	/>
	<link rel="canonical" href="https://nwrenger.dev/privacy-policy" />
</svelte:head>

<div class="p-4">
	<div class="mx-auto h-full max-w-2xl space-y-4">
		<div class="flex items-center justify-between">
			<!-- Back button -->
			<button
				type="button"
				onclick={back}
				title="Return"
				aria-label="Return"
				class="btn-icon preset-tonal"
			>
				<ArrowLeft />
			</button>

			<!-- Language Change -->
			<a data-sveltekit-replacestate href="/datenschutz" class="btn preset-tonal">
				<Languages size={18} />
				<span>German Version</span>
			</a>
		</div>

		<div class="space-y-6">
			<div class="space-y-2">
				<h2 class="h2 font-semibold tracking-tight">Privacy Policy</h2>

				<p>
					This privacy policy applies to my publicly accessible websites under <strong
						>nwrenger.dev</strong
					>
					as well as to project pages operated by me. It does <strong>not</strong> apply to content or
					data processing on external third-party websites (e.g. GitHub repositories or social media profiles)
					that I only link to.
				</p>
			</div>

			<div class="space-y-2">
				<h3 class="h3 font-semibold tracking-tight">1. Controller</h3>
				<p>The controller responsible for the processing described in this Privacy Policy is:</p>
				<p>
					<strong>Nils Wrenger</strong><br />
					Email:
					<a href="mailto:nils@wrenger.net" class="anchor">nils@wrenger.net</a>
				</p>
			</div>

			<div class="space-y-2">
				<h3 class="h3 font-semibold tracking-tight">2. Local Browser Storage</h3>
				<p>
					Individual websites may use your browser's <strong>Local Storage</strong> and/or
					<strong>Session Storage</strong>. This may be used to store, for example, display and
					language preferences, state information, or game progress.
				</p>
				<p>
					For functionality that operates entirely locally, this information remains on your device
					and is not transmitted to me or to third parties. Where online functionality requires
					certain state information to be transmitted, Section&nbsp;4 of this Privacy Policy applies
					additionally.
				</p>
				<p>
					Only where storing or accessing information on your device is strictly necessary to
					provide a digital service expressly requested by you, no consent is required pursuant to
					§&nbsp;25(2)(2) TDDDG.
				</p>
			</div>

			<div class="space-y-2">
				<h3 class="h3 font-semibold tracking-tight">3. Hosting via GitHub Pages</h3>
				<p>
					The publicly accessible websites are generally provided via
					<a href="https://pages.github.com/" class="anchor" target="_blank" rel="noopener"
						>GitHub Pages</a
					>, a service operated by GitHub. When a website hosted through GitHub Pages is accessed,
					GitHub logs and stores, in particular, your <strong>IP address</strong> for security purposes.
				</p>
				<p>
					GitHub Pages is used to provide the websites reliably and securely. Insofar as my use of
					the service involves the processing of personal data, the legal basis is Art.&nbsp;6(1)(f)
					GDPR. My legitimate interest is the secure, reliable, and efficient provision of my
					websites.
				</p>
				<p>
					GitHub processes personal data in various countries, including the United States. For
					transfers to countries without an adequate level of data protection, GitHub states that it
					generally relies on the European Commission's Standard Contractual Clauses. GitHub also
					participates in the EU-U.S. Data Privacy Framework. Retention periods depend on the
					respective processing purpose and applicable legal obligations.
				</p>
				<p>
					For further information about processing, international data transfers, and retention,
					please refer to the
					<a
						href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement"
						class="anchor"
						target="_blank"
						rel="noopener">GitHub General Privacy Statement</a
					>.
				</p>
			</div>

			<div class="space-y-2">
				<h3 class="h3 font-semibold tracking-tight">4. Online Functionality and APIs</h3>
				<p>
					Individual project pages may connect to APIs or server services operated by me in order to
					provide <strong>online functionality</strong>. This includes, for example, functionality
					that requires data to be exchanged between multiple users or processed on a server.
				</p>
				<p>
					In this context, technically necessary connection data, including the IP address, as well
					as data entered or generated as part of the respective functionality may be processed.
					This may include, for example, chosen display names, randomly generated identifiers, and
					session, lobby, game, or other state information. Technically necessary connection data is
					transmitted automatically and is required to provide the respective online functionality.
				</p>
				<p>
					Where the respective functionality involves multiple users, data necessary for the shared
					functionality may also be made available to the other participants in the relevant
					session.
				</p>
				<p>
					This data is processed solely to provide the respective online functionality, associate
					connections with sessions, and ensure technical security and functionality. The legal
					basis is Art.&nbsp;6(1)(f) GDPR. My legitimate interest is the provision and secure
					technical operation of the respective online functionality.
				</p>
				<p>
					The server services used for this online functionality are currently hosted using
					<a href="https://www.oracle.com/cloud/" class="anchor" target="_blank" rel="noopener"
						>Oracle Cloud Infrastructure (OCI)</a
					>. Insofar as Oracle processes personal data on my behalf in connection with the hosting
					service, Oracle acts as a processor. Depending on the service, this may include
					technically necessary connection and system-operation data.
				</p>
				<p>
					Oracle generally provides mechanisms for customers to select the region in which their
					workloads and customer content are stored. Depending on the service and the provision of
					support or other operational functions, processing may nevertheless also take place in
					other countries. Where international transfers are subject to legal restrictions, Oracle
					provides appropriate safeguards under its applicable data processing terms.
				</p>
				<p>
					For further information about Oracle's processing of personal data in connection with its
					services, please refer to the
					<a
						href="https://www.oracle.com/legal/privacy/services-privacy-policy/"
						class="anchor"
						target="_blank"
						rel="noopener">Oracle Services Privacy Policy</a
					>.
				</p>
				<p>
					Application-level project data is generally processed or stored only for as long as
					necessary for the respective connection, session, or functionality. Project-related state
					information is removed once it is no longer required for the respective online
					functionality. No persistent user accounts or profiles are created as part of this
					processing.
				</p>
			</div>

			<div class="space-y-2">
				<h3 class="h3 font-semibold tracking-tight">5. No Analytics, Advertising, or Tracking</h3>
				<p>
					I do not integrate analytics services, personalized advertising, or cross-site tracking
					into these websites, and I do not create user profiles for advertising or analytics
					purposes.
				</p>
			</div>

			<div class="space-y-2">
				<h3 class="h3 font-semibold tracking-tight">6. Your Rights</h3>
				<p>
					Where personal data is processed, and subject to the applicable legal requirements, you
					may in particular have the right to <strong>access</strong> (Art.&nbsp;15 GDPR),
					<strong>rectification</strong> (Art.&nbsp;16 GDPR),
					<strong>erasure</strong> (Art.&nbsp;17 GDPR),
					<strong>restriction of processing</strong> (Art.&nbsp;18 GDPR),
					<strong>data portability</strong> (Art.&nbsp;20 GDPR), and to
					<strong>object</strong> to certain processing (Art.&nbsp;21 GDPR).
				</p>

				<div class="space-y-1">
					<h4 class="h5 font-semibold tracking-tight">Right to Object</h4>
					<p>
						Where processing is based on Art.&nbsp;6(1)(f) GDPR, you have the right, on grounds
						relating to your particular situation, to object at any time to the processing of
						personal data concerning you. The processing will then generally be discontinued unless
						there are compelling legitimate grounds for continuing the processing or the processing
						is necessary for the establishment, exercise, or defense of legal claims.
					</p>
				</div>

				<p>
					To exercise these rights, you can contact me at
					<a href="mailto:nils@wrenger.net" class="anchor">nils@wrenger.net</a>.
				</p>
				<p>
					Under Art.&nbsp;77 GDPR, you also have the right to lodge a complaint with a data
					protection supervisory authority if you believe that the processing of your personal data
					infringes the GDPR.
				</p>
			</div>

			<p><small>Last updated: August 9, 2026</small></p>
		</div>
	</div>
</div>

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
		content="Information about personal data, browser storage, hosting, and online functionality on my websites."
	/>
	<meta property="og:title" content="Privacy Policy" />
	<meta
		property="og:description"
		content="Information about personal data, browser storage, hosting, and online functionality on my websites."
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
					This privacy policy applies to the publicly accessible websites and project pages operated
					by me under <strong>nwrenger.dev</strong>, including their associated online services. It
					does not cover websites operated by others or external websites that I merely link to. The
					following sections apply across my websites unless a particular service is specified.
				</p>
			</div>

			<div class="space-y-2">
				<h3 class="h3 font-semibold tracking-tight">1. Controller</h3>
				<p>The controller responsible for the processing described in this privacy policy is:</p>
				<p>
					<strong>Nils Wrenger</strong><br />
					Email: <a href="mailto:nils@wrenger.net" class="anchor">nils@wrenger.net</a>
				</p>
			</div>

			<div class="space-y-2">
				<h3 class="h3 font-semibold tracking-tight">2. Hosting via GitHub Pages</h3>
				<p>
					All of my websites are hosted through
					<a
						href="https://pages.github.com/"
						class="anchor"
						target="_blank"
						rel="noopener noreferrer">GitHub Pages</a
					>. When your browser requests a page or resource, GitHub receives the technical data
					needed to deliver it, including your IP address, the requested resource and HTTP request
					information. GitHub states that it logs and stores visitors' IP addresses for security
					purposes, even when visitors are not signed in to GitHub.
				</p>
				<p>
					I use GitHub Pages to provide my websites securely, reliably and efficiently. The legal
					basis for processing personal data for these purposes is Art.&nbsp;6(1)(f) GDPR. Providing
					the necessary connection data is technically required to access the websites; no account
					or personal details such as your name or email address are required for ordinary use.
				</p>
				<p>
					GitHub may process personal data in the United States and other countries outside the
					European Economic Area (EEA). GitHub states that it participates in the EU-U.S. Data
					Privacy Framework (Art.&nbsp;45 GDPR) and generally uses the European Commission's
					Standard Contractual Clauses for transfers to countries without an adequate level of data
					protection (Art.&nbsp;46 GDPR), where applicable.
				</p>
				<p>
					GitHub determines the retention of its own security logs according to its processing
					purposes and legal obligations. It does not specify a separate fixed retention period for
					GitHub Pages visitor IP logs in its public documentation. Further information about
					GitHub's processing, retention and transfer safeguards can be found in its
					<a
						href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement"
						class="anchor"
						target="_blank"
						rel="noopener noreferrer">General Privacy Statement</a
					>.
				</p>
			</div>

			<div class="space-y-2">
				<h3 class="h3 font-semibold tracking-tight">3. Local Browser Storage</h3>
				<p>
					My websites use your browser's <strong>Local Storage</strong> and/or
					<strong>Session Storage</strong>
					to maintain the state required for their functionality. Depending on the website, this includes
					display preferences, interface state, locally created content, game or questionnaire progress,
					and session information. This storage allows the requested functionality to continue across
					page changes, reloads or subsequent visits, as appropriate.
				</p>
				<p>
					For functions that operate entirely on your device, stored information is not sent to me
					or to an external service by the application. Exceptions for online functionality or
					intentional sharing are described below. Access to browser storage is limited to the
					respective website origin under normal browser operation.
				</p>
				<p>
					Storage and access that are strictly necessary for a digital service expressly requested
					by you are based on §&nbsp;25(2)(2) TDDDG and do not require separate consent. This
					exception concerns access to your device; where personal data is also processed under my
					responsibility, Art.&nbsp;6(1)(f) GDPR applies to ordinary data necessary to provide and
					maintain the requested functionality. Any processing of special categories of personal
					data is subject to the additional requirements of Art.&nbsp;9 GDPR.
				</p>
				<p>
					Local Storage generally remains until the application replaces or resets it, or you or
					your browser delete it. Session Storage generally lasts for the respective browser tab's
					session, including reloads, and may be restored by browser session recovery. You can clear
					stored data through your browser's site settings. Blocking or deleting this storage may
					prevent certain features from working correctly or cause saved state to be lost.
				</p>
			</div>

			<div class="space-y-2">
				<h3 class="h3 font-semibold tracking-tight">4. Online Functionality (Clash)</h3>
				<p>
					<a href="https://clash.nwrenger.dev/" class="anchor">Clash</a> uses an additional server to
					provide online multiplayer gameplay. Connections to this server necessarily involve your IP
					address and technical connection data. The game processes a nickname chosen by you, randomly
					generated lobby and player identifiers, a randomly generated authentication secret, and lobby
					and gameplay information such as settings, cards, selections and scores.
				</p>
				<p>
					These data are used to establish connections, manage and authenticate game sessions, allow
					reconnection, synchronize gameplay and operate the service securely. The legal basis is
					Art.&nbsp;6(1)(f) GDPR; my legitimate interests are providing the requested multiplayer
					functionality and ensuring its reliable and secure operation. The required session and
					connection data must be provided to participate. You do not need to use your real name or
					create a permanent account.
				</p>
				<p>
					Your nickname, player identifier and relevant gameplay information are made available to
					other players in your lobby as needed for the game. Your authentication secret is intended
					only for your client and the game server. Session credentials are stored in your browser's
					Session Storage to maintain your connection across reloads.
				</p>
				<p>
					Player and lobby state is held in server memory rather than a persistent user database.
					When you explicitly leave a lobby, your player record is removed. Following a detected
					disconnection, it is normally removed after a one-minute reconnection period unless you
					reconnect. Lobbies inactive for more than 30 minutes are removed during a cleanup process
					that runs every 30 minutes, normally within approximately 30 to 60 minutes of inactivity.
					Remaining temporary game data is released when the lobby and its active processing end.
					Other players may retain information that they have received independently of the service.
				</p>
				<p>
					The application does not maintain a player IP-address access log or persistent player
					profiles. It generates operational and error messages, which can include lobby
					identifiers, player counts and cleanup events. These are separate from the temporary game
					state. Where these messages are retained by system logging, their retention depends on the
					system's log rotation, storage limits and whether logs survive a restart. They are used
					for troubleshooting and reliable operation under Art.&nbsp;6(1)(f) GDPR. Infrastructure
					providers may independently process technical data for operation and security.
				</p>
				<p>
					When importing or updating card decks, the server requests deck content from
					<a href="https://api.crcast.cc/" class="anchor" target="_blank" rel="noopener noreferrer"
						>api.crcast.cc</a
					>. The deck code and the server's connection data are sent to this service, not your
					player credentials or browser IP address as part of the deck request. Downloaded deck
					content is cached on disk and may remain available to other lobbies until updated or
					removed; it is not deleted with your game session. Please do not import decks containing
					personal information that you are not entitled to share. You can contact me to request
					removal of such content.
				</p>
				<p>
					The game server is hosted using
					<a
						href="https://www.oracle.com/cloud/"
						class="anchor"
						target="_blank"
						rel="noopener noreferrer">Oracle Cloud Infrastructure (OCI)</a
					>
					in the Frankfurt, Germany region. Oracle acts as a processor insofar as it processes data on
					my behalf. Oracle may also process operational data for its own purposes. Processing outside
					the EEA may occur in connection with support, security or service operations. Oracle describes
					its Binding Corporate Rules for Processors and the EU Standard Contractual Clauses as safeguards
					for relevant transfers under Art.&nbsp;46 GDPR. Further information, including provider retention
					criteria, is available in the
					<a
						href="https://www.oracle.com/legal/privacy/services-privacy-policy/"
						class="anchor"
						target="_blank"
						rel="noopener noreferrer">Oracle Services Privacy Policy</a
					>
					and its
					<a
						href="https://www.oracle.com/contracts/cloud-services/"
						class="anchor"
						target="_blank"
						rel="noopener noreferrer">cloud service agreements</a
					>.
				</p>
			</div>

			<div class="space-y-2">
				<h3 class="h3 font-semibold tracking-tight">5. Political Questionnaire (Smart-O-Mat)</h3>
				<p>
					<a href="https://wahl.nwrenger.dev/" class="anchor">Smart-O-Mat</a> lets you compare your positions
					with those of political parties. Your answers and weightings may reveal political opinions and
					therefore may constitute particularly sensitive personal data under Art.&nbsp;9 GDPR if they
					relate to an identifiable person.
				</p>
				<p>
					The questionnaire, calculation of results and saving of progress take place locally in
					your browser. The application does not submit your answers or results to me or a remote
					evaluation service. No account or identifying information is required. Answering questions
					is voluntary. Your locally saved progress can be reset by restarting the questionnaire or
					clearing the site's browser storage. The results are informational and do not constitute
					automated decisions with legal or similarly significant effects under Art.&nbsp;22 GDPR.
				</p>
				<p>
					The optional sharing function creates a link containing your encoded answers in the URL
					fragment (the part after the # symbol). This fragment is normally not included in HTTP
					requests to the hosting provider. The answers are not encrypted: anyone with the complete
					link can read them. If you copy or share a link, it may be stored by your browser,
					clipboard, messaging service or recipients. Only share it with people you trust. Links
					created before the switch to URL fragments may contain answers in the query string and
					should not be reused. I cannot revoke shared links or erase copies held by others.
				</p>
				<p>
					To display current election polls, your browser retrieves public polling data from the
					<a href="https://dawum.de/API/" class="anchor" target="_blank" rel="noopener noreferrer"
						>DAWUM API</a
					>. The API receives the technical connection data needed for this request, including your
					IP address, but the polling request does not contain your questionnaire answers or
					results. The legal basis for the connection data is Art.&nbsp;6(1)(f) GDPR; my legitimate
					interest is providing current polling information. DAWUM describes its own processing and
					retention, including a 48-hour deletion period for website access logs, in its
					<a
						href="https://dawum.de/Datenschutz/"
						class="anchor"
						target="_blank"
						rel="noopener noreferrer">privacy policy</a
					>.
				</p>
			</div>

			<div class="space-y-2">
				<h3 class="h3 font-semibold tracking-tight">6. Contact and Public Contributions</h3>
				<p>
					If you contact me by email, I process your email address, message and any other
					information that you provide to respond to your enquiry. Email service providers handle
					data as needed to deliver and store correspondence. The legal basis is Art.&nbsp;6(1)(f)
					GDPR, based on my legitimate interest in responding to enquiries, or Art.&nbsp;6(1)(c)
					GDPR where processing is necessary to comply with a legal obligation. Correspondence is
					kept for as long as needed to resolve the enquiry and any related follow-up, or longer if
					required by law or necessary for legal claims. Providing contact information is voluntary,
					but without it I may be unable to respond.
				</p>
				<p>
					Some projects accept public contributions, feedback or bug reports through GitHub. If you
					choose to contribute there, your username, submitted content, commit information and other
					publicly available contribution data may be visible to others. I use such information to
					review contributions, maintain projects and document changes under Art.&nbsp;6(1)(f) GDPR.
					Accepted contributions may remain in the public project and its version history for as
					long as needed for maintenance, attribution and licensing. This does not exclude
					applicable erasure rights. Copies or forks maintained by other people may remain outside
					my control. GitHub's own processing is described in its privacy statement linked in
					Section&nbsp;2.
				</p>
			</div>

			<div class="space-y-2">
				<h3 class="h3 font-semibold tracking-tight">7. No Analytics, Advertising or Tracking</h3>
				<p>
					I do not integrate analytics services, advertising or cross-site tracking into my
					websites, and I do not create advertising or analytics profiles. This does not exclude the
					technical processing by hosting and service providers described above. My websites do not
					make automated decisions about you with legal or similarly significant effects under
					Art.&nbsp;22 GDPR.
				</p>
				<p>
					External websites that you choose to visit through links are subject to their own privacy
					notices. Requests to integrated external services are described in the relevant sections
					above.
				</p>
			</div>

			<div class="space-y-2">
				<h3 class="h3 font-semibold tracking-tight">8. Your Rights</h3>
				<p>
					Subject to the applicable conditions under the GDPR, you have the right to <strong
						>access</strong
					>
					(Art.&nbsp;15), <strong>rectification</strong> (Art.&nbsp;16), <strong>erasure</strong>
					(Art.&nbsp;17), <strong>restriction of processing</strong> (Art.&nbsp;18),
					<strong>data portability</strong> (Art.&nbsp;20) and <strong>objection</strong> (Art.&nbsp;21).
					Where processing is based on consent, you may withdraw that consent at any time without affecting
					the lawfulness of processing before withdrawal.
				</p>
				<div class="space-y-1">
					<h4 class="h5 font-semibold tracking-tight">Right to Object</h4>
					<p>
						You have the right to object at any time, on grounds relating to your particular
						situation, to processing based on Art.&nbsp;6(1)(f) GDPR. I will stop the relevant
						processing unless I demonstrate compelling legitimate grounds that override your
						interests, rights and freedoms, or the processing is necessary for the establishment,
						exercise or defense of legal claims.
					</p>
				</div>
				<p>
					To exercise your rights or request information or copies of applicable international
					transfer safeguards, contact me at <a href="mailto:nils@wrenger.net" class="anchor"
						>nils@wrenger.net</a
					>. I do not collect additional identifying data solely to identify users for such requests
					(Art.&nbsp;11 GDPR). Data held solely in your own browser can be managed directly through
					the relevant website or browser settings.
				</p>
				<p>
					Under Art.&nbsp;77 GDPR, you also have the right to lodge a complaint with a data
					protection supervisory authority, particularly in the EU member state of your habitual
					residence, place of work or the alleged infringement. A list of authorities is available
					from the
					<a
						href="https://www.edpb.europa.eu/about-edpb/about-edpb/members_en"
						class="anchor"
						target="_blank"
						rel="noopener noreferrer">European Data Protection Board</a
					>.
				</p>
			</div>

			<p><small>Last updated: November 26, 2026</small></p>
		</div>
	</div>
</div>

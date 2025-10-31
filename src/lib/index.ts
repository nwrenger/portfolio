export const year = new Date().getFullYear();

export interface Take {
	name: string;
	icon: string;
	description: string;
	color?: string;
}

export const takes: Take[] = [
	{
		name: 'Rust',
		icon: '🦀',
		description: 'I have worked on almost all of my projects in Rust. I am very proficient in it!',
		color:
			'border-orange-500/30 bg-orange-500/10 hover:bg-orange-500/20 dark:hover:bg-orange-500/15'
	},
	{
		name: 'Svelte',
		icon: '🧡',
		description:
			"When I am doing frontend, then only using Svelte. It's a great framework and I am, like with Rust, also very versed in it!",
		color: 'border-red-400/30 bg-red-400/10 hover:bg-red-400/20 dark:hover:bg-red-400/15'
	},
	{
		name: 'Zed',
		icon: '📝',
		description:
			"Yeah, I am using Zed now! I finally got done switching from VS Code and it's great!"
	},
	{
		name: 'C',
		icon: '👼',
		description:
			"The mother (or father) of every modern programming language. C is great but I've never used it in any projects.",
		color: 'border-gray-400/30 bg-gray-400/10 hover:bg-gray-400/20 dark:hover:bg-gray-400/15'
	},
	{
		name: 'Zig',
		icon: '⚡️',
		description:
			'Tried out once, had a blast using <code class="code">comptime</code> but I am simply to stupid to use it in real projects!',
		color:
			'border-yellow-400/30 bg-yellow-400/10 hover:bg-yellow-400/20 dark:hover:bg-yellow-400/15'
	},
	{
		name: 'Go',
		icon: '🐹',
		description:
			'Nice language with horrid syntax. I tried it out a few times but then always booted back to Rust.',
		color: 'border-cyan-500/30 bg-cyan-500/10 hover:bg-cyan-500/20 dark:hover:bg-cyan-500/15'
	},
	{
		name: 'Godot',
		icon: '🎮',
		description: 'Best Game Engine out there. Used in my early days for a few crappy games.'
	},
	{
		name: 'Python',
		icon: '🐍',
		description:
			"'Everyone can write Python, right?' and that's also the issue with it: No types and whitespace-based scoping!",
		color: 'border-green-500/30 bg-green-500/10 hover:bg-green-500/20 dark:hover:bg-green-500/15'
	},
	{
		name: 'JavaScript',
		icon: '📺',
		description:
			"If someone were to smoke weed while programming in three languages simultaneously, that's how it feels writing JavaScript. Wtf is this language?",
		color:
			'border-yellow-500/30 bg-yellow-500/10 hover:bg-yellow-500/20 dark:hover:bg-yellow-500/15'
	},
	{
		name: 'TypeScript',
		icon: '💻',
		description:
			'A great extension to JavaScript to make it usable again. Programming in Svelte only with TypeScript.',
		color: 'border-blue-500/30 bg-blue-500/10 hover:bg-blue-500/20 dark:hover:bg-blue-500/15'
	},
	{
		name: 'HTML & CSS',
		icon: '🌐',
		description: 'Yeah, way better than JavaScript. Great Core Web Technologies!',
		color: 'border-pink-400/30 bg-pink-400/10 hover:bg-pink-400/20 dark:hover:bg-pink-400/15'
	},
	{
		name: 'Git & GitHub',
		icon: '🔧',
		description:
			'Writing every project in Git and uploading it to GitHub. What would I do without GitHub? Use Gitlab!'
	}
];

import { Github, Mail } from 'lucide-svelte';
import BlueSky from '$lib/components/icons/BlueSky.svelte';
import Discord from '$lib/components/icons/Discord.svelte';
import Instagram from '$lib/components/icons/Instagram.svelte';
import { DateTime } from 'luxon';
import type { Link } from './components/ui/LinksSelect.svelte';
import Kofi from './components/icons/Kofi.svelte';

export const sponsors: Link[] = [
	{ name: 'GitHub', url: 'https://github.com/sponsors/nwrenger', icon: Github },
	{ name: 'Ko-fi', url: 'https://ko-fi.com/nwrenger', icon: Kofi }
];

export const socials: Link[] = [
	{ name: 'GitHub', url: 'https://github.com/nwrenger', icon: Github },
	{ name: 'BlueSky', url: 'https://bsky.app/profile/nilch.bsky.social', icon: BlueSky },
	{ name: 'Discord', username: '@nilch_', icon: Discord },
	{ name: 'Instagram', url: 'https://www.instagram.com/_nilch', icon: Instagram },
	{ name: 'Mails', url: 'mailto:nils@wrenger.net', icon: Mail }
];

export interface Project {
	title: string;
	date: DateTime;
	summary: string;
	picture: string;
	description: string;
	link: string;
	archived: boolean;
}

export const projects: Project[] = [
	{
		title: 'clash',
		date: DateTime.fromISO('2025-08-22'),
		summary: 'Cards (Ludicrous ones) Against Humanity',
		picture: 'clash.webp',
		description: `As the name suggests, this is an online clone of the popular card game Cards Against Humanity. I've written
		it to develop a deeper understanding of WebSockets and Games. It's written in my typical stack consisting of <code>Svelte</code>
		on the frontend and <code>Rust</code> on the backend. But in comparison to <a class="anchor" href="/projects#one-googol">one-googol</a>,
		which is a very similar project, it is way more complex and this time the frontend is hosted by GitHub and not by the backend, which
		just hosts the api. This marks my 3rd "Game" I've written and I have to say it's by far the best one!`,
		link: 'https://clash.nwrenger.dev/',
		archived: false
	},
	{
		title: 'console-utils-rs',
		date: DateTime.fromISO('2023-11-28'),
		summary: 'CLI Input Library for Rust',
		picture: 'console-utils.webp',
		description: `This project was initiated by writing Python during my Computer Science lessons. The thing is that Rust itself (the std library) does'nt have a very “nice” way of retrieving user input.
		In comparison, python has the super simple <code >input</code> function which can do that very easily!
		Therefore, I decided to develop this crate which main point is to be very developer friendly with providing high functionality!`,
		link: 'https://crates.io/crates/console-utils/',
		archived: false
	},
	{
		title: 'crastination',
		date: DateTime.fromISO('2022-10-24'),
		summary: 'My first big Project and my last Game',
		picture: 'crastination.webp',
		description: `This was the first big project I worked on, marking the start of my programming journey! <code>Crastination</code> is a simple platformer where I aimed to create an immersive and intriguing story.
		However, I didn't enjoy the development process, and the update to <code>Godot 4</code> was the last straw—leading me to stop developing games altogether.
		The idea itself was interesting: <em>A game about procrastination. Why is it so hard for people to tackle difficult or ambiguous tasks? How can you overcome that?</em>
		But in the end, I tried to reach for the stars, only to realize I didn’t yet have the skills nor the desire to to reach them.`,
		link: 'https://nilch.itch.io/crastination/',
		archived: false
	},
	{
		title: 'dashboard',
		date: DateTime.fromISO('2024-03-22'),
		summary: 'A dashboard of all my websites',
		picture: 'dashboard.webp',
		description: `The summary basically is enough to explain this project: A dashboard of all my websites.
		I am here going to explain further how it came to this project. I bought some time ago the domain <code>nwrenger.dev</code> and wanted to host under that domain some websites,
		which btw was harder than I thought because of DNS, the provider and GH-Pages. Nevertheless, the idea of an overview of all my websites began to grow, and now here we are!`,
		link: 'https://github.com/nwrenger/dashboard/',
		archived: true
	},
	{
		title: 'Disable Dimensions',
		date: DateTime.fromISO('2025-10-20'),
		summary: 'Disable vanilla Dimensions like The Nether and/or The End',
		picture: 'disable-dimensions.webp',
		description: `In Minecraft there are different dimensions you'll need to explore to progress the 'story' of the game, which finishes in The End dimension by killing the Ender Dragon.
		It is very common in multiplayer that the server staff want to restrict entering those dimensions because of (1) slowing down story progression or (2) not being designed to have enterable
		dimensions, a custom build server for example. For that, I coded this <code class="code">Data Pack</code> which restricts players' access to the other dimensions by teleporting them immediately back after they try
		to enter the dimension. It also has mod support and is currently the only working <code class="code">Data Pack</code> based solution out there! Coding this was my first dive into making modifications for a game,
		which made the process both challenging and really exciting.`,
		link: 'https://modrinth.com/datapack/disable-dimensions/',
		archived: false
	},
	{
		title: 'doenermann-bot',
		date: DateTime.fromISO('2023-01-06'),
		summary: 'The Discord Bot',
		picture: 'doenermann-bot.webp',
		description: `Before I am explaining the origins/need of this bot, please note that the black bars in the picture are there to protect personal information,
		nothing more, nothing less!So, this bot was created for a discord server which I am also a part of. It can track birthdays (second message seen in the picture),
		copy messages from a channel (first message seen in the picture), give users automatically roles on certain conditions, ...
		This was created as a drop-in replacement of Mee6, which did some very shady stuff lately.`,
		link: 'https://github.com/nwrenger/doenermann-bot/',
		archived: false
	},
	{
		title: 'Escaping-from-the-Supernova',
		date: DateTime.fromISO('2023-03-19'),
		summary: 'A procedural generated textadventure',
		picture: 'efts.webp',
		description: `This project marks my first attempt at writing in Rust, and the original version is available under the "old" branch.
		After gaining more experience and developing my own CLI crate <a class="anchor" href="/projects#console-utils-rs">console-utils</a>,
  		I expanded the project into a procedurally generated text adventure with a total of 16 different endings. Have fun exploring them!`,
		link: 'https://github.com/nwrenger/Escaping-from-the-Supernova/',
		archived: false
	},
	{
		title: 'eta',
		date: DateTime.fromISO('2024-02-15'),
		summary: 'A Code Editor made in egui',
		picture: 'eta.webp',
		description: `As explained in the summary, this is a code editor made in <code>egui</code> which focuses on efficiency.
		Furthermore, this was created due to the lack of performance seen in VSC, the most used code editor, and my curiosity of
		how a project editor app works and how hard is it to create one, which I now know it is <code>VERY HARD</code>.`,
		link: 'https://github.com/nwrenger/eta/',
		archived: false
	},
	{
		title: 'flip-ui',
		date: DateTime.fromISO('2024-01-02'),
		summary: 'The UI Builder for the Flipper Zero',
		picture: 'flip-ui.webp',
		description: `This is a UI build for the flipperzero, a small IoT device which was mainly hyped due to it's hacking
		 capabilities. The idea itself came from building a Flipperzero App myself and seeing how unnecessary, difficult that was.
		 Nevertheless, the workflow when using this is to create a UI using the website and then use a Rust crate which converts
		 the UI data and your own custom functions into a flipperzero compatible binary.`,
		link: 'https://github.com/flip-ui/',
		archived: false
	},
	{
		title: 'gluer',
		date: DateTime.fromISO('2024-07-28'),
		summary: 'A Rust wrapper for backends that eliminates redundant definitions',
		picture: 'gluer.webp',
		description: `As the summary suggests, this project aims to streamline development by eliminating redundant definitions
		in both the backend and frontend through static analysis of routes, functions, structs, enums and types. Utilizing the
		<code>#[metadata]</code> procedural attribute macro and the <code>generate!</code> procedural macro, the project extracts
		relevant information and generates the corresponding <code>api</code> in a TypeScript file. Currently, the project supports
		the <code>axum</code> framework, with plans to extend support to additional backends in the future.`,
		link: 'https://crates.io/crates/gluer/',
		archived: false
	},
	{
		title: 'hadar',
		date: DateTime.fromISO('2024-01-27'),
		summary: "Codebase of a 'simple' Battlesnake agent",
		picture: 'hadar.webp',
		description: `This is a very simple Battlesnake agent, a bot designed to play competitive snake against other bots.
		Its sole mission is to seek food and avoid killing itself when it gets too long. The results of this strategy are displayed
		in the picture above!`,
		link: 'https://github.com/nwrenger/hadar/',
		archived: false
	},
	{
		title: 'light-magic',
		date: DateTime.fromISO('2024-05-27'),
		summary: 'A persistent in-memory database',
		picture: 'light-magic.webp',
		description: `A powerful and user-friendly in-memory database crate that extends Rust's standard data types, such as as
		the <code>Table</code> type, and the macro system for generating data types, interactions, and data operations. It features
		efficient <code>search</code> and <code>join!</code> functions for seamless data management and rust's beautiful type system
		for creating the database table. Give it a try and experience the simplicity and performance of this innovative database solution!`,
		link: 'https://crates.io/crates/light-magic/',
		archived: false
	},
	{
		title: 'notenprojekt',
		date: DateTime.fromISO('2025-06-17'),
		summary: 'German grade management App',
		picture: 'notenprojekt.webp',
		description: `A simple app for managing your grades based on the german grades system in lower saxony. This was built in my Computer
		Science lessons as a project to fortify and apply our theoretical knowledge of databases like <code class="code">sqlite</code>.
		Originally, there was a section planned with more analytics over all your quarters and some graphs, but as always our teacher didn't
		give us enough time, so this will remain a 'when there's time for personal projects again' kind of thing.`,
		link: 'https://github.com/nwrenger/notenprojekt',
		archived: false
	},
	{
		title: 'omega',
		date: DateTime.fromISO('2024-03-25'),
		summary: 'A performant terminal-based project editor',
		picture: 'omega.webp',
		description: `This project was created after I created <a class="anchor" href="/projects#eta">eta</a>
		from which I learned a lot. It's a terminal-based project editor with syntax highlighting, great performance and very useful and powerful shortcuts.
		So please give it a try!`,
		link: 'https://crates.io/crates/omega/',
		archived: false
	},
	{
		title: 'one-googol',
		date: DateTime.fromISO('2025-01-05'),
		summary: 'One Googol collaborative project',
		picture: 'one-googol.webp',
		description: `This is a collaborative project where participants work together to reach a number with 100 zeros,
		known as a Googol. The backend was initially built in Go, but after a night of challenges, I switched back to Rust.
		The game is designed for large-scale participation, with my server currently capable of handling up to 18,000 concurrent
		WebSocket connections. It features intricate scaling with polling and, in the future, will include Cookie Clicker-style
		elements!`,
		link: 'https://github.com/nwrenger/one-googol/',
		archived: true
	},
	{
		title: 'plebis-online-website',
		date: DateTime.fromISO('2025-01-24'),
		summary: 'The official Plebis Online Website',
		picture: 'plebis-online-website.webp',
		description: `A few of my friends are working since <code>2021</code> / <code>COVID-19</code> on a fast-paced shooter named "Plebis Online".
		As I also began to develop stuff, they asked me to create a cool website which I did (hopefully). Additionally, I joined the team
		and am helping them with other stuff, beyond just the Website. When the game is done, I will link it here.`,
		link: 'https://plebis.online/',
		archived: false
	},
	{
		title: 'pointy',
		date: DateTime.fromISO('2025-04-10'),
		summary: 'The clipboard extension everybody needs',
		picture: 'pointy.webp',
		description: `A small clipboard extension which opens a wheel of actions interacting with your current clipboard on a configurable shortcut. It's designed
	 	to support extensions from anybody via a 2nd <a class="anchor" href="https://github.com/nwrenger/pointy-extensions" target="_blank">pointy-extensions</a> GitHub repository. I have developed some cool ones myself, but also
		you can easily design some yourself. I even provide a rust api, look for that under the <a class="anchor" href="https://github.com/nwrenger/pointy/tree/main/crates/extensions" target="_blank">crate/extensions</a>
		and <a class="anchor" href="https://github.com/nwrenger/pointy/tree/main/crates/pointy_api" target="_blank">crate/pointy_api</a> in the main repository.
		Sadly, the interest from my side is currently on a halt, but if you find the idea interesting, mind trying it out!`,
		link: 'https://github.com/nwrenger/pointy/',
		archived: false
	},
	{
		title: 'portfolio',
		date: DateTime.fromISO('2023-03-29'),
		summary: 'My personal Portfolio',
		picture: 'portfolio.webp',
		description: `You are aCtuAlLy currently viewing my portfolio. Feel free to explore the project source code to understand
		how I built this website and provide feedback on areas for improvement. This portfolio style emphasizes simplicity with a
		touch of design and fun. My portfolio/personal website has evolved significantly over time, even going back to a
		<a class="anchor" target="_blank" href="https://github.com/nwrenger/rust-website"><code>Rust</code> / <code>Handlebars</code> version </a>,
		so don’t hesitate to revisit and see what has changed!`,
		link: 'https://github.com/nwrenger/portfolio/',
		archived: false
	},
	{
		title: 'PHV Misburg Website',
		date: DateTime.fromISO('2023-07-18'),
		summary: 'Website of a Dogsports Club',
		picture: 'phvmisburg.webp',
		description: `As a family member of mine is in a Dogsports Club and they had nobody managing their website, I got to being
		their webmaster. Nevertheless, I also redesigned the Website because the old one was designed years ago and looked horrid
		for modern standards. On that note, I have to say that Wordpress was an experience of itself and am proud to say, that after
		enough sleepless hours, it works and looks great!`,
		link: 'https://phvmisburg.de/',
		archived: false
	},
	{
		title: 'quickmaths',
		date: DateTime.fromISO('2023-09-20'),
		summary: 'A school project...QUICKMATHS!!!',
		picture: 'quickmaths.webp',
		description: `Indeed, this summary hints at something math-related, and that's essentially accurate.
		Developed during my school lessons, this website focuses on learning math calculations and uniquely features local co-op!
		Surprising, right? Grab a friend, try it out below, and see who excels at calculations!`,
		link: 'https://quickmaths.nwrenger.dev/',
		archived: false
	},
	{
		title: 'schiller-db',
		date: DateTime.fromISO('2023-04-21'),
		summary: "Schillernova's Database Software",
		picture: 'schiller-db.webp',
		description: `Developed for a project week (a school-wide activity for a week, in my case we were our own state),
		this project unfortunately didn't meet expectations, but that's a tale for another time! Here, authorities could access
		an overview of all citizens, including the unemployed, as well as a record of crimes committed by citizens.
		The aim was to assist authorities in state management by eliminating the need for extensive paperwork, which is typically
		essential in bureaucratic processes.`,
		link: 'https://github.com/nwrenger/schiller-db/',
		archived: false
	},
	{
		title: 'schiller-lib',
		date: DateTime.fromISO('2023-09-17'),
		summary: 'The Schiller School Library App',
		picture: 'schiller-lib.webp',
		description: `Like many schools, mine also has a library where students can read and borrow books.
		My brother and I developed this piece of software to address this need. Originally, the library's software was a Windows application,
		but now it has been transformed into a comprehensive website plus server with OAuth for authentication.
		This update was made to eliminate the need for Windows/PC and to simplify the user interface for younger students.`,
		link: 'https://github.com/wrenger/schiller-lib/',
		archived: false
	},
	{
		title: 'schulen-im-chaos',
		date: DateTime.fromISO('2023-08-09'),
		summary: 'Homework-Sharing Platform',
		picture: 'sic.webp',
		description: `The "Schulen im Chaos" (Schools in Chaos) project, which I was invited to develop the infrastructure and website for,
		focuses—as the summary suggests—on sharing notes on various school subjects, such as Mathematics, Physics, Computer Science,
		etc. It's important to note that the current scope of this project is limited to German schools only,
		due to the significant differences in school systems worldwide.`,
		link: 'https://schulenimchaos.de/',
		archived: false
	},
	{
		title: 'shitboard',
		date: DateTime.fromISO('2024-03-18'),
		summary: 'Online Soundboard App',
		picture: 'shitboard.webp',
		description: `Developed at the request of a friend who wanted a sound-sharing platform but never ended up uploading anything...
		So please, if you have content to share, go ahead and upload it. What gets uploaded won’t be deleted.
		Have fun! Note: Not everything will stay there indefinitely, so please don’t upload illegal material!`,
		link: 'https://shitboard.nwrenger.dev/',
		archived: false
	},
	{
		title: 'simple-fantasy-game',
		date: DateTime.fromISO('2025-01-27'),
		summary: 'A simple fantasy game emulator',
		picture: 'simple-fantasy-game.webp',
		description: `This small game emulator was built using my self-developed <a class="anchor" href="/projects#console-utils-rs">console-utils</a> crate during my Informatics lesson.
		Please note that it is written in <code>German</code>. In these lessons, we are currently covering OOP, and I wanted to explore how <code>Rust</code> implements object-oriented programming—both where it succeeds and where it falls short.
		I’m currently waiting for my teacher’s feedback, but I think she’ll like it!`,
		link: 'https://github.com/nwrenger/simple-fantasy-game/',
		archived: false
	},
	{
		title: 'Smart-O-Mat',
		date: DateTime.fromISO('2025-02-17'),
		summary: 'Improved rework of the so called "Wahl-O-Mat"',
		picture: 'smart-o-mat.webp',
		description: `The <code>German</code> elections have something called the "Wahl-O-Mat", where you can answer 38 theses and then get an election recommendation based on how other parties answered these theses.
		It's incredible how shitty the source of the "Wahl-O-Mat" looks. They have some kind of custom templating engine with horrid datapoint definitions. Furthermore, a lack of features
		like sharing your progress, automatically saving your progress locally, getting to compare your result to current polling results and so on increased the urge to develop something myself. So I created the "Smart-O-Mat",
		a smarter and far better version. For every German fellow: Go voting and use this as advice for your election choice!`,
		link: 'https://wahl.nwrenger.dev/',
		archived: false
	},
	{
		title: 'songwriting',
		date: DateTime.fromISO('2024-12-16'),
		summary: 'Songwriting Portfolio',
		picture: 'songwriting.webp',
		description: `I developed my Songwriting Portfolio for my music class. Please note that it is entirely written in <code>German</code>.
		I utilized the new <code>Skeleton</code> Framework and created some impressive components and animations. Enjoy exploring it!`,
		link: 'https://songwriting.nwrenger.dev/',
		archived: false
	}
];

export const skills = [
	{
		name: 'Rust',
		icon: '🦀',
		url: 'https://www.rust-lang.org/',
		description: 'I have worked on almost all of my projects in Rust. I am very proficient in it!'
	},
	{
		name: 'Svelte',
		icon: '🧡',
		url: 'https://svelte.dev/',
		description:
			"When I am doing frontend, then only using Svelte. It's a great framework and I am, like with Rust, also very proficient in it!"
	},
	{
		name: 'Zig',
		icon: '⚡️',
		url: 'https://ziglang.org/',
		description:
			'Tried out once, had a blast using <code class="code">comptime</code> but I am simply to stupid to use it in real projects!'
	},
	{
		name: 'Go',
		icon: '🐹',
		url: 'https://golang.org/',
		description:
			'Nice language with horrid syntax. I tried it out a few times but then booted back to Rust.'
	},
	{
		name: 'Godot',
		icon: '🎮',
		url: 'https://godotengine.org/',
		description: 'Best Game Engine out there. Used in my early days for a few crappy games.'
	},
	{
		name: 'Python',
		icon: '🐍',
		url: 'https://www.python.org/',
		description: "'Everyone can write Python, right?'"
	},
	{
		name: 'JavaScript',
		icon: '📺',
		url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
		description:
			"If someone were to smoke weed while programming in three languages simultaneously, that's how it feels writing JavaScript. Dafuq is this language?"
	},
	{
		name: 'TypeScript',
		icon: '💻',
		url: 'https://www.typescriptlang.org/',
		description:
			'A great extension to JavaScript to make it usable again. Programming in Svelte only with TypeScript.'
	},
	{
		name: 'HTML & CSS',
		icon: '🌐',
		url: 'https://developer.mozilla.org/en-US/docs/Learn/HTML',
		description: 'Yeah, way better than JavaScript. Great Core Web Technologies!'
	},
	{
		name: 'Git & GitHub',
		icon: '🔧',
		url: 'https://github.com/',
		description:
			'Writing every project in Git and uploading it to Github. Honestly, a great product from Microsoft!'
	}
];

import { Github, Mail } from 'lucide-svelte';
import BlueSky from '$lib/components/icons/BlueSky.svelte';
import Discord from '$lib/components/icons/Discord.svelte';
import Instagram from '$lib/components/icons/Instagram.svelte';

export const socials = [
	{ name: 'GitHub', url: 'https://github.com/nwrenger', icon: Github },
	{ name: 'BlueSky', url: 'https://bsky.app/profile/nilch.bsky.social', icon: BlueSky },
	{ name: 'Discord', url: 'https://discordlookup.com/user/567331495484719134', icon: Discord },
	{ name: 'Instagram', url: 'https://www.instagram.com/_nilch', icon: Instagram },
	{ name: 'Mails', url: 'mailto:nils@wrenger.net', icon: Mail }
];

export const projects = [
	{
		title: 'console-utils-rs',
		summary: 'CLI Input Library for Rust',
		picture: 'console-utils.webp',
		description:
			"This project was initiated by writing Python during my Computer Science lessons. The thing is that Rust itself (the std library) does'nt have a very “nice” way of retrieving user input. In comparison, python has the super simple <code >input</code> function which can do that very easily! Therefore, I decided to develop this crate which main point is to be very developer friendly with providing high functionality!",
		link: 'https://crates.io/crates/console-utils',
		archived: false
	},
	{
		title: 'dashboard',
		summary: 'A dashboard of all my websites',
		picture: 'dashboard.webp',
		description:
			'The summary basically is enough to explain this project: A dashboard of all my websites. I am here going to explain further how it came to this project. I bought some time ago the domain <code>nwrenger.dev</code> and wanted to host under that domain some websites, which btw was harder than I thought because of DNS, the provider and GH-Pages. Nevertheless, the idea of an overview of all my websites began to grow, and now here we are!',
		link: 'https://github.com/nwrenger/dashboard',
		archived: true
	},
	{
		title: 'doenermann-bot',
		summary: 'The Discord Bot',
		picture: 'doenermann-bot.webp',
		description:
			'Before I am explaining the origins/need of this bot, please note that the black bars in the picture are there to protect personal information, nothing more, nothing less! So, this bot was created for a discord server which I am also a part of. It can track birthdays (second message seen in the picture), copy messages from a channel (first message seen in the picture), give users automatically roles on certain conditions, ... This was created as a drop-in replacement of Mee6, which did some very shady stuff lately.',
		link: 'https://github.com/nwrenger/doenermann-bot',
		archived: false
	},
	{
		title: 'Escaping-from-the-Supernova',
		summary: 'A procedural generated textadventure',
		picture: 'efts.webp',
		description:
			'This project marks my first attempt at writing in Rust, and the original version is available under the "old" branch. After gaining more experience and developing my own CLI crate <code>console-utils</code>, I expanded the project into a procedurally generated text adventure with a total of 16 different endings. Have fun exploring them!',
		link: 'https://github.com/nwrenger/Escaping-from-the-Supernova',
		archived: false
	},
	{
		title: 'eta',
		summary: 'A Code Editor made in egui',
		picture: 'eta.webp',
		description:
			'As explained in the summary, this is a code editor made in <code>egui</code> which focuses on efficiency. Furthermore, this was created due to the lack of performance seen in VSC, the most used code editor, and my curiosity of how a project editor app works and how hard is it to create one, which I now know it is <code>VERY HARD</code>.',
		link: 'https://github.com/nwrenger/eta',
		archived: false
	},
	{
		title: 'flip-ui',
		summary: 'The UI Builder for the Flipper Zero',
		picture: 'flip-ui.webp',
		description:
			"This is a UI build for the flipperzero, a small IoT device which was mainly hyped due to it's hacking capabilities. The idea itself came from building a Flipperzero App myself and seeing how unnecessary, difficult that was. Nevertheless, the workflow when using this is to create a UI using the website and then use a Rust crate which converts the UI data and your own custom functions into a flipperzero compatible binary.",
		link: 'https://github.com/flip-ui',
		archived: false
	},
	{
		title: 'gluer',
		summary: 'A Rust wrapper for backends that eliminates redundant definitions',
		picture: 'gluer.webp',
		description:
			'As the summary suggests, this project aims to streamline development by eliminating redundant definitions in both the backend and frontend through static analysis of routes, functions, structs, enums and types. Utilizing the <code>#[metadata]</code> procedural attribute macro and the <code>generate!</code> procedural macro, the project extracts relevant information and generates the corresponding <code>api</code> in a TypeScript file. Currently, the project supports the <code>axum</code> framework, with plans to extend support to additional backends in the future.',
		link: 'https://crates.io/crates/gluer',
		archived: false
	},
	{
		title: 'hadar',
		summary: "Codebase of a 'simple' Battlesnake agent",
		picture: 'hadar.webp',
		description:
			'This is a very simple Battlesnake agent, a bot designed to play competitive snake against other bots. Its sole mission is to seek food and avoid killing itself when it gets too long. The results of this strategy are displayed in the picture above!',
		link: 'https://github.com/nwrenger/hadar',
		archived: false
	},
	{
		title: 'light-magic',
		summary: 'A persistent in-memory database',
		picture: 'light-magic.webp',
		description:
			"A powerful and user-friendly in-memory database crate that extends Rust's standard data types, such as as the <code>Table</code> type, and the macro system for generating data types, interactions, and data operations. It features efficient <code>search</code> and <code>join!</code> functions for seamless data management and rust's beautiful type system for creating the database table. Give it a try and experience the simplicity and performance of this innovative database solution!",
		link: 'https://crates.io/crates/light-magic',
		archived: false
	},
	{
		title: 'omega',
		summary: 'A performant terminal-based project editor',
		picture: 'omega.webp',
		description:
			"This project was created after I created <code>eta</code> from which I learned a lot. It's a terminal-based project editor with syntax highlighting, great performance and very useful and powerful shortcuts. So please give it a try!",
		link: 'https://crates.io/crates/omega',
		archived: false
	},
	{
		title: 'portfolio',
		summary: 'My personal Portfolio',
		picture: 'portfolio.webp',
		description:
			'You are aCtuAlLy currently viewing my portfolio. Feel free to explore the project source code to understand how I built this website and provide feedback on areas for improvement. This portfolio style emphasizes simplicity with a touch of design and fun. My portfolio/personal website has evolved significantly over time, so don’t hesitate to revisit and see what has changed!',
		link: 'https://github.com/nwrenger/portfolio',
		archived: false
	},
	{
		title: 'quickmaths',
		summary: 'A school project...QUICKMATHS!!!',
		picture: 'quickmaths.webp',
		description:
			"Indeed, this summary hints at something math-related, and that's essentially accurate. Developed during my school lessons, this website focuses on learning math calculations and uniquely features local co-op! Surprising, right? Grab a friend, try it out below, and see who excels at calculations!",
		link: 'https://quickmaths.nwrenger.dev',
		archived: false
	},
	{
		title: 'schiller-db',
		summary: "Schillernova's Database Software",
		picture: 'schiller-db.webp',
		description:
			"Developed for a project week (a school-wide activity for a week, in my case we were our own state), this project unfortunately didn't meet expectations, but that's a tale for another time! Here, authorities could access an overview of all citizens, including the unemployed, as well as a record of crimes committed by citizens. The aim was to assist authorities in state management by eliminating the need for extensive paperwork, which is typically essential in bureaucratic processes.",
		link: 'https://github.com/nwrenger/schiller-db',
		archived: false
	},
	{
		title: 'schiller-lib',
		summary: 'The Schiller School Library App',
		picture: 'schiller-lib.webp',
		description:
			"Like many schools, mine also has a library where students can read and borrow books. My brother and I developed this piece of software to address this need. Originally, the library's software was a Windows application, but now it has been transformed into a comprehensive website plus server with OAuth for authentication. This update was made to eliminate the need for Windows/PC and to simplify the user interface for younger students.",
		link: 'https://github.com/wrenger/schiller-lib',
		archived: false
	},
	{
		title: 'schulen-im-chaos',
		summary: 'Homework-Sharing Platform',
		picture: 'sic.webp',
		description:
			'The "Schulen im Chaos" (Schools in Chaos) project, which I was invited to develop the infrastructure and website for, focuses—as the summary suggests—on sharing notes on various school subjects, such as Mathematics, Physics, Computer Science, etc. It\'s important to note that the current scope of this project is limited to German schools only, due to the significant differences in school systems worldwide.',
		link: 'https://schulenimchaos.de',
		archived: false
	},
	{
		title: 'shitboard',
		summary: 'Online Soundboard App',
		picture: 'shitboard.webp',
		description:
			'Developed at the request of a friend who wanted a sound-sharing platform but never ended up uploading anything... So please, if you have content to share, go ahead and upload it. What gets uploaded won’t be deleted. Have fun! Note: Not everything will stay there indefinitely, so please don’t upload illegal material!',
		link: 'https://shitboard.nwrenger.dev',
		archived: false
	},
	{
		title: 'songwriting',
		summary: 'Songwriting Portfolio',
		picture: 'songwriting.webp',
		description:
			'I developed my Songwriting Portfolio for my music class. Please note that it is entirely written in <code>German</code>. I utilized the new <code>Skeleton Framework</code> and created some impressive components and animations. Enjoy exploring it!',
		link: 'https://songwriting.nwrenger.dev',
		archived: false
	}
];

import { projects, type Category } from '$lib/content.js';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
	let abbr = params.abbreviation as Category;
	let filteredProjects = projects.filter((project) =>
		project.categories.find((cat) => cat == abbr)
	);
	const sortedProjects = filteredProjects.sort((a, b) => b.date.toMillis() - a.date.toMillis());

	if (sortedProjects.length == 0) {
		error(404, 'Category Not Found');
	}

	return { projects: sortedProjects, abbreviation: abbr };
}

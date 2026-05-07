import { getProjectSlug, projects } from '$lib/content.js';
import { error } from '@sveltejs/kit';

export function entries() {
	return projects.map((project) => ({
		project: getProjectSlug(project.title)
	}));
}

export function load({ params }) {
	const project = projects.find((candidate) => getProjectSlug(candidate.title) === params.project);

	if (!project) {
		error(404, 'Project Not Found');
	}

	return { project, slug: params.project };
}

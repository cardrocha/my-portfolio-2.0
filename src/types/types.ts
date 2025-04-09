export interface Repos {
	id: number;
	image: string;
	title: string;
	description: string;
	project: string;
	language: string;
	link: string;
	deploy: string;
}

export interface HeaderLinks {
  id: number
  href: string
  title: string
  text: string
}

export interface Quest {
  id: number
  year: string,
  title: string,
  subtitle: string,
  technologies: string,
  status: string,
  statusColor: string,
}
import type { Repos } from '../types/types'
import RepoBox from "./RepoBox";

type Props = {
	repo: Repos[];
};

const ProjectList = ({ repo }: Props) => {
	return (
		<div className="p-14">
			<ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 lg:gap-2">
				{repo.map((repo) => (
					<RepoBox
						key={repo.id}
						image={repo.image}
						title={repo.title}
						description={repo.description}
						project={repo.project}
						language={repo.language}
						link={repo.link}
						deploy={repo.deploy}
					/>
				))}
			</ul>
		</div>
	);
};

export default ProjectList;

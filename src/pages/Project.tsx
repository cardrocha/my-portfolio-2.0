import ProjectList from "../components/ProjectList";
import { projects } from '../data/projectData';

const Project = () => {
	return (
		<section>
			<h2 className="text-4xl text-indigo-900 dark:text-white text-center mt-32 font-semibold border-b-4 border-indigo-800 pb-2">
				Meus Projetos
			</h2>
			<ProjectList repo={projects} />
		</section>
	);
};

export default Project;

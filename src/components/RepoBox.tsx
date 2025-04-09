import { useState } from "react";

type Props = {
	image: string;
	title: string;
	description: string;
	project: string;
	language: string;
	link: string;
	deploy: string;
};

const RepoBox = ({
	image,
	title,
	description,
	project,
	language,
	link,
	deploy,
}: Props) => {
	const [isExpanded, setIsExpanded] = useState(false);

	const getDescription = (text: string) => {
		if (isExpanded || text.length <= 95) {
			return text;
		}
		return text.slice(0, 78) + ` (...)`;
	};

	const toggleDescription = () => {
		setIsExpanded((prev) => !prev);
	};

	return (
		<div className="mb-12">
			<div className="flex flex-col justify-between h-full lg:h-full border-4 border-indigo-800 rounded-xl p-4">
				<div>
					<h1 className="box-decoration-slice bg-gradient-to-l from-indigo-600 to-indigo-800 text-white text-center text-2xl p-2 rounded-lg font-bold mb-4">
						{title}
					</h1>

					<p className="text-indigo-700 dark:text-white text-sm text-center font-semibold mb-2">
						{getDescription(description)}
					</p>

					{description.length > 95 && (
						<div className="flex justify-center">
							<button
								onClick={toggleDescription}
								className="bg-indigo-800 hover:bg-indigo-500 px-2 py-1 text-white rounded-sm text-xs hover:text-gray-200 transition-all hover:scale-110"
							>
								{isExpanded ? "Mostrar menos" : "Mostrar mais"}
							</button>
						</div>
					)}

					<p className="text-indigo-700 dark:text-red-500 text-center font-bold mt-4 mb-2">
						Projeto: {project}
					</p>
					<p className="text-indigo-700 dark:text-indigo-400 text-center font-bold">
						{language}
					</p>
				</div>

				<img
					className="w-full h-[280px] object-cover rounded-xl mt-4"
					src={image}
					alt={title}
				/>
			</div>

			<div className="flex items-center justify-center gap-4 mt-2">
				<a
					className="bg-indigo-800 hover:bg-indigo-500 py-2 px-6 rounded-lg text-white transition-all"
					href={link}
					rel="noreferrer"
					target="_blank"
				>
					Link
				</a>
				<a
					className="bg-indigo-800 hover:bg-indigo-500 py-2 px-6 rounded-lg text-white"
					href={deploy}
					rel="noreferrer"
					target="_blank"
				>
					Deploy
				</a>
			</div>
		</div>
	);
};

export default RepoBox;

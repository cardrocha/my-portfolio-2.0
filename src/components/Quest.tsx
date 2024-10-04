import { FaArrowDown } from "react-icons/fa";
import { PiCircleFill } from "react-icons/pi";
import { quests } from '../data/questData'

const Quest = () => {
	return (
		<section className="pb-24">
			<div>
				<h2 className="text-3xl lg:text-4xl text-indigo-800 dark:text-white font-bold text-center py-24">
					Linha do Tempo de Missões
				</h2>
				<div className="flex items-center justify-center">
					<FaArrowDown className="text-4xl text-indigo-600 dark:text-white animate-bounce" />
				</div>
				<ul className="flex flex-col items-center justify-center gap-5 text-center list-none pt-10">
					{quests.map((quest) => (
						<li key={quest.id} className="flex flex-col items-center">
							<div className="border-[1px] border-indigo-600 dark:border-white h-12" />
							<PiCircleFill className="text-xl text-indigo-800 dark:text-white" />
							<div>
								<p className="text-xl text-indigo-600 dark:text-white">
									{quest.year} -{" "}
									<span className="text-2xl text-indigo-800 dark:text-white font-bold underline">
										{quest.title}
									</span>
									: {quest.subtitle}
								</p>
								<p className="pt-2 text-xl text-indigo-600 dark:text-white mb-3">
									{quest.technologies}
								</p>
								<p className={`text-xl font-semibold ${quest.statusColor}`}>
									Status: <span className="font-bold">{quest.status}</span>
								</p>
							</div>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};

export default Quest;

import { FaArrowDown } from "react-icons/fa";
import { PiCircleFill } from "react-icons/pi";

const Quest = () => {
	return (
		<section className="pb-24">
			<div>
				<h2 className="text-3xl lg:text-4xl text-indigo-900 dark:text-white font-bold text-center py-24">
					Linha do Tempo de Missões
				</h2>
				<div className="flex items-center justify-center">
					<FaArrowDown className="text-4xl text-indigo-600 dark:text-white animate-bounce" />
				</div>
				<ul className="flex flex-col items-center justify-center gap-5 text-center list-none pt-10">
					<li className="flex flex-col items-center">
						<div className="border-[1px] border-indigo-600 dark:border-white h-12" />
						<PiCircleFill className="text-xl text-indigo-900 dark:text-white" />
						<div>
							<p className="text-xl text-indigo-600 dark:text-white">
								2020 -{" "}
								<span className="text-2xl text-indigo-800 dark:text-white font-bold underline">
									Reprograma-se
								</span>
								: Desenvolvedor de Jogos
							</p>
							<p className="text-xl text-indigo-600 dark:text-white mb-3">
								Unity básico, Java básico, C# básico
							</p>
							<p className="text-xl text-green-600 font-semibold">
								Status: <span className="font-bold">Concluída</span>
							</p>
						</div>
					</li>
					<li className="flex flex-col items-center">
						<div className="border-[1px] border-indigo-600 dark:border-white h-12" />
						<PiCircleFill className="text-xl text-indigo-900 dark:text-white" />
						<div>
							<p className="text-xl text-indigo-600 dark:text-white">
								2021 -{" "}
								<span className="text-2xl text-indigo-800 dark:text-white font-bold underline">
									FreeCodeCamp
								</span>
								: Design Responsivo para a Web
							</p>
							<p className="text-xl text-indigo-600 dark:text-white mb-3">
								HTML, CSS básico a intermediário
							</p>
							<p className="text-xl text-yellow-600 font-semibold">
								Status: <span className="font-bold">Em Andamento</span>
							</p>
						</div>
					</li>
					<li className="flex flex-col items-center">
						<div className="border-[1px] border-indigo-600 dark:border-white h-12" />
						<PiCircleFill className="text-xl text-indigo-900 dark:text-white" />
						<div>
							<p className="text-xl text-indigo-600 dark:text-white">
								2023 -{" "}
								<span className="text-2xl text-indigo-800 dark:text-white font-bold underline">
									Alura - ONE
								</span>
								: Formação Front-end e React
							</p>
							<p className="text-xl text-indigo-600 dark:text-white mb-3">
								HTML, CSS, JavaScript, React, Styled-Components, React Hooks
							</p>
							<p className="text-xl text-green-600 font-semibold">
								Status: <span className="font-bold">Concluída</span>
							</p>
						</div>
					</li>
					<li className="flex flex-col items-center">
						<div className="border-[1px] border-indigo-600 dark:border-white h-12" />
						<PiCircleFill className="text-xl text-indigo-900 dark:text-white" />
						<div>
							<p className="text-xl text-indigo-600 dark:text-white">
								2022 a 2024 -{" "}
								<span className="text-2xl text-indigo-800 dark:text-white font-bold underline">
									EBAC
								</span>
								: Full-Stack Python
							</p>
							<p className="text-xl text-indigo-600 dark:text-white">
								Desenvolvimento Front-end: React, TypeScript, Styled-Components,
								Redux
							</p>
							<p className="text-xl text-indigo-600 dark:text-white mb-3">
								Desenvolvimento Back-end: Python, Django, Django Rest Framework,
								SQL, Poetry, Docker
							</p>
							<p className="text-xl text-green-600 font-semibold">
								Status: <span className="font-bold">Concluída</span>
							</p>
						</div>
					</li>
					<li className="flex flex-col items-center">
						<div className="border-[1px] border-indigo-600 dark:border-white h-12" />
						<PiCircleFill className="text-xl text-indigo-900 dark:text-white" />
						<div>
							<p className="text-xl text-indigo-600 dark:text-white">
								2024 -{" "}
								<span className="text-2xl text-indigo-800 dark:text-white font-bold underline">
									Transição de Carreira
								</span>
								: Atuar como Desenvolvedor Front-end Júnior
							</p>
							<p className="text-xl text-indigo-600 dark:text-white">
								Aplicando o que aprendi em projetos reais, contribuir para o
								crescimento profissional onde estiver atuando,
							</p>
							<p className="text-xl text-indigo-600 dark:text-white mb-3">
								utilizando boas práticas de desenvolvimento, métodos ágeis e
								aprendendo novas tecnologias.
							</p>
							<p className="text-xl text-yellow-600 font-semibold">
								Status: <span className="font-bold">Em Andamento</span>
							</p>
						</div>
					</li>
					<li className="flex flex-col items-center">
						<div className="border-[1px] border-indigo-600 dark:border-white h-12" />
						<PiCircleFill className="text-xl text-indigo-900 dark:text-white" />
						<div>
							<p className="text-xl text-indigo-600 dark:text-white">
								Futuro -{" "}
								<span className="text-2xl text-indigo-800 dark:text-white font-bold underline">
									Ensino Superior
								</span>
								: Análise e Desenvolvimento de Sistemas
							</p>
							<p className="text-xl text-indigo-600 dark:text-white mb-3">
								Pretendo finalizar minha formação para adquirir novos
								conhecimentos e habilidades.
							</p>
							<p className="text-xl text-red-600 font-semibold">
								Status: <span className="font-bold">Por Iniciar</span>
							</p>
						</div>
					</li>
				</ul>
			</div>
		</section>
	);
};

export default Quest;

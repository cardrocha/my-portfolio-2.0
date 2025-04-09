import { useEffect, useState } from "react";
import * as A from "react-icons/ai";
import { BsUbuntu } from "react-icons/bs";
import * as D from "react-icons/di";
import * as I from "react-icons/io";
import * as S from "react-icons/si";
import * as T from "react-icons/tb";
import data from "../../data.json";

interface InfoItem {
	id: string;
	title: string;
	description: string;
}

const Skills = () => {
	const [open, setOpen] = useState("react");
	const [info, setInfo] = useState<InfoItem | undefined>(undefined);

	useEffect(() => {
		const selectedItem = data.find((item) => item.id === open);
		if (selectedItem) {
			setInfo(selectedItem);
		}
	}, [open]);

	return (
		<div className="max-w-screen-xlxl mx-auto container flex flex-col gap-14 p-6 lg:p-24">
			<h2 className="text-3xl lg:text-4xl text-center text-indigo-800 font-bold">
				Tecnologia e Habilidades
			</h2>
			<h3 className="text-2xl lg:text-3xl text-center text-indigo-800 font-bold">
				Minhas princiais skills:
			</h3>
			<ul className="flex items-center gap-2 lg:gap-0 justify-center md:justify-around">
				<li>
					<S.SiReact
						onClick={() => setOpen("react")}
						className={`text-5xl mb-2 text-blue-400 dark:bg-white scale-100 lg:scale-150 duration-75 shadow shadow-white/100 rounded-lg p-1 cursor-pointer ${open === "react" ? "border-2" : ""}`}
					/>
				</li>
				<li>
					<S.SiTypescript
						onClick={() => setOpen("typescript")}
						className={`text-5xl mb-2 text-blue-600 dark:bg-white scale-100 lg:scale-150 duration-75 shadow shadow-white/100 rounded-lg p-1 cursor-pointer ${open === "typescript" ? "border-2" : ""}`}
					/>
				</li>
				<li>
					<S.SiStyledcomponents
						onClick={() => setOpen("styled")}
						className={`text-5xl mb-2 text-fuchsia-600 dark:bg-white scale-100 lg:scale-150 duration-75 shadow shadow-white/100 rounded-lg p-1 cursor-pointer ${open === "styled" ? "border-2" : ""}`}
					/>
				</li>
				<li>
					<S.SiVite
						onClick={() => setOpen("vite")}
						className={`text-5xl mb-2 text-amber-700 scale-100 dark:bg-white lg:scale-150 duration-75 shadow shadow-white/100 rounded-lg p-1 cursor-pointer ${open === "vite" ? "border-2" : ""}`}
					/>
				</li>
				<li>
					<T.TbBrandNextjs
						onClick={() => setOpen("nextjs")}
						className={`text-5xl mb-2 text-gray-700 scale-100 dark:bg-white lg:scale-150 duration-75 shadow shadow-white/100 rounded-lg p-1 cursor-pointer ${open === "nextjs" ? "border-2" : ""}`}
					/>
				</li>
				<li>
					<S.SiTailwindcss
						onClick={() => setOpen("tailwind")}
						className={`text-5xl mb-2 text-sky-600 scale-100 dark:bg-white lg:scale-150 duration-75 shadow shadow-white/100 rounded-lg p-1 cursor-pointer ${open === "tailwind" ? "border-2" : ""}`}
					/>
				</li>
			</ul>
			<div className="flex flex-col-reverse">
				<ul className="grid grid-cols-6 md:grid-cols-11 w-full gap-0 md:pr-10 lg:pr-0 md:gap-12 lg:w-[800px] mx-auto">
					<li>
						<A.AiFillHtml5
							onClick={() => setOpen("html")}
							className={`text-5xl mb-2 text-orange-400 dark:bg-white scale-95 lg:scale-125 duration-75 shadow shadow-white/100 rounded-lg p-1 cursor-pointer ${open === "html" ? "border-2" : ""}`}
						/>
					</li>
					<li>
						<I.IoLogoCss3
							onClick={() => setOpen("css")}
							className={`text-5xl text-blue-400 scale-95 dark:bg-white lg:scale-125 duration-75 shadow shadow-white/100 rounded-lg p-1 cursor-pointer ${open === "css" ? "border-2" : ""}`}
						/>
					</li>
					<li>
						<I.IoLogoJavascript
							onClick={() => setOpen("javascript")}
							className={`text-5xl mb-2 text-yellow-300 dark:bg-white scale-95 lg:scale-125 duration-75 shadow shadow-white/100 rounded-lg p-1 cursor-pointer ${open === "javascript" ? "border-2" : ""}`}
						/>
					</li>
					<li>
						<I.IoMdGitBranch
							onClick={() => setOpen("git")}
							className={`text-5xl mb-2 text-orange-500 dark:bg-white scale-95 lg:scale-125 duration-75 shadow shadow-white/100 rounded-lg p-1 cursor-pointer ${open === "git" ? "border-2" : ""}`}
						/>
					</li>
					<li>
						<S.SiJquery
							onClick={() => setOpen("jquery")}
							className={`text-5xl mb-2 text-sky-400 dark:bg-white scale-95 lg:scale-125 duration-75 shadow shadow-white/100 rounded-lg p-1 cursor-pointer ${open === "jquery" ? "border-2" : ""}`}
						/>
					</li>
					<li>
						<S.SiBootstrap
							onClick={() => setOpen("bootstrap")}
							className={`text-5xl mb-2 text-purple-500 dark:bg-white scale-95 lg:scale-125 duration-75 shadow shadow-white/100 rounded-lg p-1 cursor-pointer ${open === "bootstrap" ? "border-2" : ""}`}
						/>
					</li>
					<li>
						<I.IoLogoSass
							onClick={() => setOpen("sass")}
							className={`text-5xl mb-2 text-pink-400 dark:bg-white scale-95 lg:scale-125 duration-75 shadow shadow-white/100 rounded-lg p-1 cursor-pointer ${open === "sass" ? "border-2" : ""}`}
						/>
					</li>
					<li>
						<D.DiGulp
							onClick={() => setOpen("gulp")}
							className={`text-5xl mb-2 text-red-600 dark:bg-white scale-95 lg:scale-125 duration-75 shadow shadow-white/100 rounded-lg p-1 cursor-pointer ${open === "gulp" ? "border-2" : ""}`}
						/>
					</li>
					<li>
						<S.SiLess
							onClick={() => setOpen("less")}
							className={`text-5xl mb-2 text-indigo-600 dark:bg-white scale-95 lg:scale-125 duration-75 shadow shadow-white/100 rounded-lg p-1 cursor-pointer ${open === "less" ? "border-2" : ""}`}
						/>
					</li>
					<li>
						<S.SiGrunt
							onClick={() => setOpen("grunt")}
							className={`text-5xl mb-2 text-amber-600 dark:bg-white scale-95 lg:scale-125 duration-75 shadow shadow-white/100 rounded-lg p-1 cursor-pointer ${open === "grunt" ? "border-2" : ""}`}
						/>
					</li>
					<li>
						<I.IoLogoNodejs
							onClick={() => setOpen("nodejs")}
							className={`text-5xl text-green-600 dark:bg-white scale-95 lg:scale-125 duration-75 shadow shadow-white/100 rounded-lg p-0 cursor-pointer ${open === "nodejs" ? "border-2" : ""}`}
						/>
					</li>
					<li>
						<S.SiVuedotjs
							onClick={() => setOpen("vuejs")}
							className={`text-5xl mb-2 text-green-700 dark:bg-white scale-95 lg:scale-125 duration-75 shadow shadow-white/100 rounded-lg p-1 cursor-pointer ${open === "vuejs" ? "border-2" : ""}`}
						/>
					</li>
					<li>
						<S.SiReactrouter
							onClick={() => setOpen("router")}
							className={`text-5xl mb-2 text-rose-600 dark:bg-white scale-95 lg:scale-125 duration-75 shadow shadow-white/100 rounded-lg p-1 cursor-pointer ${open === "router" ? "border-2" : ""}`}
						/>
					</li>
					<li>
						<S.SiRedux
							onClick={() => setOpen("redux")}
							className={`text-5xl mb-2 text-purple-700 dark:bg-white scale-95 lg:scale-125 duration-75 shadow shadow-white/100 rounded-lg p-1 cursor-pointer ${open === "redux" ? "border-2" : ""}`}
						/>
					</li>
					<li>
						<S.SiJest
							onClick={() => setOpen("jest")}
							className={`text-5xl mb-2 text-rose-500 dark:bg-white scale-95 lg:scale-125 duration-75 shadow shadow-white/100 rounded-lg p-1 cursor-pointer ${open === "jest" ? "border-2" : ""}`}
						/>
					</li>
					<li>
						<S.SiCypress
							onClick={() => setOpen("cypress")}
							className={`text-5xl mb-2 text-emerald-500 dark:bg-white scale-95 lg:scale-125 duration-75 shadow shadow-white/100 rounded-lg p-1 cursor-pointer ${open === "cypress" ? "border-2" : ""}`}
						/>
					</li>
					<li>
						<BsUbuntu
							onClick={() => setOpen("ubuntu")}
							className={`text-5xl mb-2 text-orange-600 dark:bg-white scale-95 lg:scale-125 duration-75 shadow shadow-white/100 rounded-lg p-1 cursor-pointer ${open === "ubuntu" ? "border-2" : ""}`}
						/>
					</li>
					<li>
						<D.DiPython
							onClick={() => setOpen("python")}
							className={`text-5xl mb-2 text-yellow-300 dark:bg-white scale-95 lg:scale-125 duration-75 shadow shadow-white/100 rounded-lg p-1 cursor-pointer ${open === "python" ? "border-2" : ""}`}
						/>
					</li>
					<li>
						<D.DiDjango
							onClick={() => setOpen("django")}
							className={`text-5xl mb-2 text-emerald-800 dark:bg-white scale-95 lg:scale-125 duration-75 shadow shadow-white/100 rounded-lg p-1 cursor-pointer ${open === "django" ? "border-2" : ""}`}
						/>
					</li>
					<li>
						<S.SiPostgresql
							onClick={() => setOpen("sql")}
							className={`text-5xl mb-2 text-indigo-600 dark:bg-white scale-95 lg:scale-125 duration-75 shadow shadow-white/100 rounded-lg p-1 cursor-pointer ${open === "sql" ? "border-2" : ""}`}
						/>
					</li>
					<li>
						<S.SiPoetry
							onClick={() => setOpen("poetry")}
							className={`text-5xl mb-2 text-sky-500 dark:bg-white scale-95 lg:scale-125 duration-75 shadow shadow-white/100 rounded-lg p-1 cursor-pointer ${open === "poetry" ? "border-2" : ""}`}
						/>
					</li>
					<li>
						<S.SiDocker
							onClick={() => setOpen("docker")}
							className={`text-5xl mb-2 text-sky-700 dark:bg-white scale-95 lg:scale-125 duration-75 shadow shadow-white/100 rounded-lg p-1 cursor-pointer ${open === "docker" ? "border-2" : ""}`}
						/>
					</li>
				</ul>
				<div>
					{info && (
						<div className="flex flex-col gap-2 w-full h-full lg:h-[240px] mx-auto">
							<h3 className="text-3xl lg:text-4xl text-blue-600 font-bold text-center border-2 bg-blue-50 border-blue-600 rounded-xl p-4">
								{info.title}
							</h3>
							<p className="text-sm lg:text-base text-indigo-700 border-2 border-indigo-600 rounded-md bg-indigo-50 p-4">
								{info.description}
							</p>
						</div>
					)}
					<h3 className="text-3xl text-center mt-10 lg:mt-0 mb-10 text-indigo-800 font-bold">
						Outras skills:
					</h3>
				</div>
			</div>
		</div>
	);
};

export default Skills;

import * as F from "react-icons/fa";
import perfil from "../assets/perfilAvatar.png";

const Hero = () => {
	return (
		<section className="mx-auto max-w-screen-xl container pb-14 pt-24 md:pt-[137px]">
			<div className="flex flex-col-reverse lg:flex-row gap-16 md:gap-0 items-center justify-around">
				<p className="text-xl dark:text-white md:text-2xl lg:text-3xl w-full p-2 lg:w-[940px] self-start">
					<span className="text-indigo-800 text-xl md:text-2xl lg:text-3xl font-bold">
						Se você procura um{" "}
						<span className="text-2xl md:text-3xl lg:text-4xl font-extrabold">
							Desenvolvedor Front-end
							<br />{" "}
							<span className="text-xl md:text-3xl">
								{" "}
								com 2 anos de experiência
							</span>
						</span>
					</span>
					, dedicado a criar experiências digitais excepcionais, você está no
					lugar certo!{" "}
					<span className="text-indigo-800 text-2xl lg:text-3xl font-bold">
						Comigo, <span className="font-extrabold">Ricardo Rocha</span>
					</span>
					, você terá acesso a um profissional qualificado, especializado em
					transformar designs em interfaces interativas e responsivas.
				</p>
				<div className="relative">
					<img
						className="w-72 h-72 border-2 border-gray-800 dark:border-gray-500 object-cover rounded-full drop-shadow-2xl"
						src={perfil}
						alt="foto de perfil"
					/>
					<p className="absolute bottom-0 -right-2 opacity-85 bg-indigo-600 font-semibold text-2xl text-white text-center p-2 px-5 whitespace-nowrap rounded">2 anos de experiência</p>
				</div>
			</div>
			<div className="flex flex-col gap-4 mt-32">
				<h2 className="text-indigo-800 text-2xl lg:text-3xl text-center font-bold">
					Entre em contato, acesse minhas redes:
				</h2>
				<div className="flex flex-col md:flex-row items-center gap-2 mx-auto">
					<a
						className="text-xl whitespace-nowrap lg:text-2xl text-center text-white font-semibold w-40 lg:w-52 bg-indigo-700 hover:bg-indigo-900 px-2 py-1 lg:px-5 lg:py-3 border-2 border-black rounded-xl"
						target="_blank"
						rel="noreferrer"
						href="/src/assets/ricardo-2025.pdf"
						title="Clique aqui para fazer o download"
					>
						Download CV
					</a>
					<div className="flex items-center justify-center gap-5 mt-5 w-full">
						<div className="flex flex-col items-center">
							<a
								target="_blank"
								rel="noreferrer"
								className="text-sm p-2 font-bold hover:bg-slate-900 text-center border-4 border-indigo-900 rounded-full"
								href="https://www.linkedin.com/in/cardrocha/"
								title="Acesse meu perfil no Linkedin"
							>
								<F.FaLinkedin className="text-2xl text-indigo-500" />
							</a>
							<p className="font-bold">Linkedin</p>
						</div>
						<div className="flex flex-col items-center group">
							<a
								target="_blank"
								rel="noreferrer"
								className="text-sm p-2 font-bold group-hover:bg-slate-900 text-center border-4 border-indigo-900 rounded-full"
								href="https://github.com/cardrocha"
								title="De uma olhada nos meus repositórios"
							>
								<F.FaGithub className="text-2xl text-black dark:text-white group-hover:text-white" />
							</a>
							<p className="font-bold">Github</p>
						</div>
						<div className="flex flex-col items-center">
							<a
								className="text-sm p-2 font-bold hover:bg-slate-900 text-center border-4 border-indigo-900 rounded-full"
								target="_blank"
								rel="noreferrer"
								href="https://wa.me/5521997924360"
								title="Converse comigo pelo whatsapp"
							>
								<F.FaWhatsapp className="text-2xl text-emerald-600" />
							</a>
							<p className="font-bold">Whatsapp</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;

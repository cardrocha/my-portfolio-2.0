import * as A from "react-icons/ai";
import * as I from "react-icons/io";
import * as S from "react-icons/si";
import perfil from "../assets/perfilAvatar.png";

const Status = () => {
  return (
    <section className="mx-auto max-w-screen-xl container">
      <div className="flex flex-col xl:flex-row gap-5 items-center justify-center py-10 w-full">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-indigo-800 pb-2 whitespace-nowrap">
          Level: 2<span className="text-2xl"> year</span>
        </h2>
        <p className="text-2xl md:text-4xl font-bold text-indigo-800 whitespace-nowrap">
          <span className="text-2xl font-extrabold md:text-4xl lg:text-4xl">Classe:</span>{" "}
          Developer Front-end
        </p>
        <div className="flex gap-5 items-center">
          <p className="text-xl md:text-2xl text-indigo-800 font-bold mt-2 whitespace-nowrap">
            EXP: 65052
          </p>
          <p className="text-xl md:text-2xl text-indigo-800 font-bold mt-2 whitespace-nowrap">
            NEXT: 42
          </p>
        </div>
      </div>
      <div className="flex flex-col xl:flex-row gap-10 lg:gap-0 items-center justify-around w-full mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-0 lg:gap-10 justify-around text-3xl md:w-full lg:w-[940px]">
          <div>
            <h2 className="text-4xl text-center lg:text-left lg:text-5xl font-bold text-indigo-800 pl-3 lg:pl-0 pb-5">
              Status Skills
            </h2>
            <li className="relative font-bold text-indigo-800 dark:text-white flex items-center gap-2 justify-start">
              <A.AiFillHtml5 className="text-5xl mb-2 text-orange-400 scale-125 p-1 cursor-pointer" />
              <p className="absolute z-10 right-1 bottom-9 text-2xl font-medium text-right">
                90/100
              </p>
              <div className="bg-gray-500 w-72 h-6 relative rounded-xl">
                <div className="bg-amber-600 w-64 h-6 rounded-xl absolute top-0 left-0" />
              </div>
            </li>
            <li className=" relative font-bold text-indigo-800 dark:text-white flex items-center justify-start">
              <I.IoLogoCss3 className="text-5xl text-blue-400 scale-125 p-1 cursor-pointer" />
              <p className="absolute z-10 right-1 bottom-8 text-2xl font-medium text-right">
                90/100
              </p>
              <div className="bg-gray-500 w-72 h-6 relative rounded-xl">
                <div className="bg-indigo-800 w-64 h-6 rounded-xl absolute top-0 left-0" />
              </div>
            </li>
            <li className="relative font-bold text-indigo-800 dark:text-white flex items-center gap-2 justify-start">
              <I.IoLogoJavascript className="text-5xl mb-2 text-yellow-500 scale-125 p-1 cursor-pointer" />
              <p className="absolute z-10 right-1 bottom-9 text-2xl font-medium text-right">
                75/100
              </p>
              <div className="bg-gray-500 w-72 h-6 relative rounded-xl">
                <div className="bg-yellow-500 w-48 h-6 rounded-xl absolute top-0 left-0" />
              </div>
            </li>
            <li className=" relative font-bold text-indigo-800 dark:text-white flex items-center gap-2 justify-start">
              <I.IoLogoSass className="text-5xl mb-2 text-pink-300 scale-125 p-1 cursor-pointer" />
              <p className="absolute z-10 right-1 bottom-9 text-2xl font-medium text-right">
                70/100
              </p>
              <div className="bg-gray-500 w-72 h-6 relative rounded-xl">
                <div className="bg-pink-300 w-44 h-6 rounded-xl absolute top-0 left-0" />
              </div>
            </li>
          </div>
          <div className="flex flex-col list-none pt-0 md:pt-[60px]">
            <li className=" relative font-bold text-indigo-800 dark:text-white flex items-center gap-2 justify-start">
              <S.SiReact className="text-5xl mb-2 text-blue-400 scale-125 p-1 cursor-pointer" />
              <p className="absolute z-10 right-1 bottom-9 text-2xl font-medium text-right">
                80/100
              </p>
              <div className="bg-gray-500 w-72 h-6 relative rounded-xl">
                <div className="bg-blue-400 w-60 h-6 rounded-xl absolute top-0 left-0" />
              </div>
            </li>
            <li className="relative font-bold text-indigo-800 dark:text-white flex items-center gap-2 justify-start">
              <S.SiTypescript className="text-5xl mb-2 text-blue-600 scale-125 p-1 cursor-pointer" />
              <p className="absolute z-10 right-1 bottom-9 text-2xl font-medium text-right">
                75/100
              </p>
              <div className="bg-gray-500 w-72 h-6 relative rounded-xl">
                <div className="bg-blue-700 w-52 h-6 rounded-xl absolute top-0 left-0" />
              </div>
            </li>
            <li className=" relative font-bold text-indigo-800 dark:text-white flex items-center gap-2 justify-start">
              <I.IoMdGitBranch className="text-5xl mb-2 text-orange-500 scale-125 p-1 cursor-pointer" />
              <p className="absolute z-10 right-1 bottom-9 text-2xl font-medium text-right">
                75/100
              </p>
              <div className="bg-gray-500 w-72 h-6 relative rounded-xl">
                <div className="bg-amber-700 w-52 h-6 rounded-xl absolute top-0 left-0" />
              </div>
            </li>
            <li className="relative font-bold whitespace-nowrap gap-1 text-indigo-800 dark:text-white flex items-center justify-start">
              <S.SiStyledcomponents className="text-5xl mb-2 text-fuchsia-500 scale-125 p-1 cursor-pointer" />
              <p className="absolute z-10 right-1 bottom-9 text-2xl font-medium text-right">
                75/100
              </p>
              <div className="bg-gray-500 w-72 h-6 relative rounded-xl">
                <div className="bg-pink-700 w-52 h-6 rounded-xl absolute top-0 left-0" />
              </div>
            </li>
          </div>
        </div>
        <div className="relative pb-5">
          <img
            className="w-72 h-72 border-2 border-gray-800 dark:border-gray-500 rounded-full object-cover filter drop-shadow-2xl"
            src={perfil}
            alt="foto de perfil"
          />
          <p className="absolute bottom-5 -right-2 opacity-85 bg-indigo-600 font-semibold text-2xl text-white text-center p-2 px-6 whitespace-nowrap rounded">
          Level: 2 <span className="text-base">years of experience</span>
          </p>
        </div>
      </div>
      <div className="px-10 py-10">
        <div className="border-2 border-indigo-900 rounded-xl bg-indigo-200 px-2 pt-2">
          <h2 className="text-indigo-800 text-4xl font-bold">Biography:</h2>
          <div>
            <p className="text-indigo-900 text-xl font-medium py-2">
              <span className="font-bold">História de Origem</span>: Em 2020, o
              jovem aventureiro
              <span className="font-bold"> Ricardo</span> iniciou sua jornada na
              terra do desenvolvimento com um curso de programação de jogos em
              Unity na
              <span className="font-bold underline"> Reprograma-se</span>, onde
              descobriu os segredos da
              <span className="font-bold underline italic">
                {" "}
                linguagem C#
              </span>. <br />
              <br /> Fascinado pelo poder da criação digital. Em 2021, ingressou
              na guilda
              <span className="font-bold underline"> FreeCodeCamp</span>, onde
              iniciou as artes do
              <span className="font-bold underline italic">
                {" "}
                Design Responsivo para a Web
              </span>
              . Durante este período, criou artefatos notáveis como um
              aplicativo de fotos de gatos e um tributo místico a uma lendária
              banda de rock. <br />
              <br />
              <span className="font-bold">Formação e Treinamento</span>:
              <span className="font-bold"> Ricardo</span> em sua busca por
              conhecimento, em 2024, concluiu o épico curso
              <span className="font-bold underline italic">
                {" "}
                Full-Stack Python
              </span>{" "}
              na prestigiosa Academia
              <span className="font-bold underline"> EBAC</span>. Onde aprimorou
              suas habilidades em
              <span className="font-bold underline italic">
                {" "}
                React, TypeScript e Styled-Components
              </span>
              , tornando-se um verdadeiro mestre das boas práticas e dos métodos
              ágeis, incluindo os lendários
              <span className="font-bold underline italic">
                {" "}
                Code Clean, BEM e SMACSS
              </span>
              .
            </p>
            <p className="text-indigo-900 text-xl font-medium py-4">
              Em julho de 2024, Ricardo uniu-se ao clã{" "}
              <a href="https://www.leafpallete.com/" target="_blank" className="text-indigo-950 font-bold underline">Leaf Pallete</a>, focado
              em soluções inovadoras de Designer. Como Desenvolvedor Front-end
              Júnior, ele enfrenta os desafios do{" "}
              <span className="font-bold underline">framework Next.js</span>{" "}
              enquanto colabora com designers e desenvolvedores. Sob a liderança
              de <span className="font-bold">Sálvio Tonon</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Status;

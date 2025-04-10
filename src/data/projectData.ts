import { Repos } from "../types/types";

export const projects: Repos[] = [
  {
    id: 1,
    image: "/streaming1.png",
    title: "Streaming",
    description:
      "Landing page para um serviço de streaming fictício, onde os usuários podem explorar planos de assinatura e conteúdos disponíveis. Desenvolvido com React.js, TypeScript e styled-components, o projeto aplica conceitos como renderização de listas, gerenciamento de estado com hooks e componentização. Foi criado durante o curso da EBAC.",
    project: "Pessoal",
    language: "React.js - TypeScript - Styled-components",
    link: "https://github.com/cardrocha/streaming",
    deploy: "https://streaming-teal-xi.vercel.app/",
  },
  {
    id: 2,
    image: "/shopcart1.png",
    title: "CartShop - Ecommerce",
    description:
      "Aplicação web de e-commerce com foco no fluxo de carrinho de compras. Utiliza React.js, TypeScript, Tailwind CSS e Zustand para gerenciamento de estado. Totalmente responsiva, conta com validação de formulários com Formik e Yup, integração com uma API fake e feedback visual para o usuário durante o processo de checkout.",
    project: "Pessoal",
    language:
      "React.js - TypeScript - Tailwind CSS - Zustand - LocalStorage - Formik - Yup - React-Input-Mask",
    link: "https://github.com/cardrocha/shopcart",
    deploy: "https://shopcart-zeta.vercel.app/",
  },
  {
    id: 3,
    image: "/project_portfolio.png",
    title: "Projeto Portfólio",
    description:
      "Primeira versão do meu portfólio pessoal, criado com base nos conhecimentos adquiridos no curso da EBAC. Utilizei React.js, Styled-components e Tailwind CSS, aplicando conceitos como hooks, ciclo de vida dos componentes e boas práticas de componentização. Também há integração com backend usando Nest.js.",
    project: "Pessoal",
    language: "Next.js - TypeScript - Tailwind CSS",
    link: "https://github.com/cardrocha/Portfolio_developer",
    deploy: "https://portfolio-developer-pi.vercel.app/",
  },
  {
    id: 4,
    image: "/fitness.png",
    title: "Landing Page - Academia",
    description:
      "Landing page desenvolvida a partir de um layout criado por Jonata Ferreira. O projeto foca na fidelidade ao design, estrutura de pastas organizada, código limpo e responsividade. Utiliza Next.js, TypeScript e Tailwind CSS para entregar uma interface moderna e funcional.",
    project: "Pessoal | Designer: Jonata Ferreira",
    language: "Next.js - TypeScript - Tailwind CSS",
    link: "https://github.com/cardrocha/fitness-app/",
    deploy: "https://fitness-app-rho-gules.vercel.app/",
  },
  {
    id: 5,
    image: "/efood.png",
    title: "Efood",
    description:
      "Aplicação web de delivery online com funcionalidades de pagamento e checkout. Desenvolvido com base em protótipos do Figma, utilizando React.js, Redux Toolkit, TypeScript e Styled-components. Inclui formulários com validação e máscaras de input, simulando uma experiência real de e-commerce.",
    project: "Projeto EBAC | Designer: EBAC",
    language:
      "React - Redux Toolkit - TypeScript - Styled-components - Formik - Yup - React-Input-Mask",
    link: "https://github.com/cardrocha/efood_ecommerce",
    deploy: "https://efood-ecommerce.vercel.app/",
  },
  {
    id: 6,
    image: "/eplay.png",
    title: "Eplay",
    description:
      "E-commerce para venda de jogos digitais com funcionalidades completas de listagem de produtos, carrinho, pagamento e checkout. Desenvolvido com React.js e TypeScript, o projeto reforça conceitos de componentização, gerenciamento global de estado e responsividade.",
    project: "Projeto EBAC",
    language:
      "React - Redux Toolkit - TypeScript - Styled-components - Formik - Yup - React-Input-Mask",
    link: "https://github.com/cardrocha/eplay",
    deploy: "https://eplay-one.vercel.app/",
  },
  {
    id: 7,
    image: "/todo_list.png",
    title: "Todo List",
    description:
      "Aplicação para gerenciamento de tarefas com funcionalidades de adicionar, editar, excluir e marcar tarefas como concluídas. Simples e objetiva, esta aplicação foi construída com React, Redux Toolkit e Styled-components, focando na organização e na experiência do usuário.",
    project: "Projeto EBAC",
    language: "React - Redux Toolkit - TypeScript - Styled-components",
    link: "https://github.com/cardrocha/minhas-tarefas",
    deploy: "https://minhas-tarefas-wine.vercel.app/",
  },
  {
    id: 8,
    image: "/project_p.png",
    title: "Projeto Portfólio - HTML/CSS/JS",
    description:
      "Primeiro projeto de portfólio, simulando um provedor de internet banda larga. Criado com HTML, CSS e JavaScript puro, com foco em estrutura semântica e design responsivo. Representa o início da minha jornada no desenvolvimento web.",
    project: "Pessoal",
    language: "HTML - CSS - JavaScript",
    link: "https://github.com/cardrocha/projeto_portfolio",
    deploy: "https://projeto-portfolio-six.vercel.app/",
  },
];

import Curriculo from "../components/Skills"

export interface informationSkill {
  id: number
  state: string
  title: string
  description: string
  image: string
}

// const skillsList: informationSkill[] = [
//   {
//     id: 1,
//     state: 'home',
//     title: 'HTML',
//     description:' HTML (Linguagem de Marcação de HiperTexto) é utilizado para criar páginas da web, permitindo aos desenvolvedores estruturar e organizar o conteúdo através de tags específicas. É a base fundamental para a construção de websites e proporciona a estrutura necessária para incorporar elementos como texto, imagens, links e formulários.',
//     image:'https://jera.com.br/blog/wp-content/uploads/2020/11/Introdu%C3%A7%C3%A3o_HTML_CSS_1.png'
//   }
// ]

const curriculum = () => {
  return (
    <Curriculo />
  )
}

export default curriculum
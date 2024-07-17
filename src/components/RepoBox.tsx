type Props = {
  image: string
  title: string
  description: string
  project: string
  language: string
  link: string
  deploy: string
}

const RepoBox = ({
  image,
  title,
  description,
  project,
  language,
  link,
  deploy
}: Props) => {
  return (
    <div>
      <div className="flex flex-col justify-between h-full lg:h-[700px] border-4 border-indigo-800 rounded-xl p-4">
        <div>
          <h1 className="box-decoration-slice bg-gradient-to-l from-indigo-600 to-indigo-800 text-white text-center text-2xl p-2 rounded-lg font-bold mb-4">{title}</h1>
          <p className="text-indigo-700 dark:text-white text-sm text-center font-semibold mb-4">{description}</p>
          <p className="text-indigo-700 dark:text-red-500 text-center font-bold mb-4">Projeto: {project}</p>
          <p className="text-indigo-700 dark:text-indigo-400 text-center font-bold">{language}</p>
        </div>
        <img className="w-full h-[280px] object-cover rounded-xl" src={image} alt={title} />
      </div>
      <div className="flex items-center justify-center gap-4 mt-2">
          <a className="bg-indigo-800 hover:bg-indigo-500 py-1 px-4 rounded-lg text-white" href={link} target="_blank">Link</a>
          <a className="bg-indigo-800 hover:bg-indigo-500 py-1 px-4 rounded-lg text-white" href={deploy} target="_blank">Deploy</a>
      </div>
    </div>
  )
}

export default RepoBox

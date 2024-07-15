import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaLaptopCode } from 'react-icons/fa'
import { RxHamburgerMenu } from 'react-icons/rx'

const Header = () => {
  const [selected, setSelected] = useState(window.location.pathname)
  const [open, setOpen] = useState(false)

  const handleLinkClick = (path: string) => {
    setSelected(path)
    setOpen(false)
  }

  return (
    <header className="relative max-w-screen-xlxl mx-auto container bg-indigo-800 text-white p-5 rounded">
      <div className="flex flex-col lg:flex-row items-start md:items-center gap-0 md:gap-20 justify-center">
        <RxHamburgerMenu
          onClick={() => setOpen(true)}
          className="md:hidden absolute right-5 text-4xl"
        />
        <h1 className="flex gap-5 items-center text-2xl md:text-4xl font-bold">
          <FaLaptopCode />
          <a href="/">Ricardo Rocha</a>
        </h1>
        <nav>
          <ul className="hidden md:grid grid-cols-3 md:grid-cols-5 lg:flex items-center gap-3 lg:gap-6">
            <li onClick={() => handleLinkClick('/')}>
              <Link
                title="Clique aqui para ir a Home"
                to="/"
                className={`text-base lg:text-xl px-4 py-2 rounded ${selected === '/' && 'bg-indigo-600'}`}
              >
                HOME
              </Link>
            </li>
            <li onClick={() => handleLinkClick('/about')}>
              <Link
                title="Clique aqui para ir a Status"
                to="/about"
                className={`text-base lg:text-xl px-4 py-2 rounded ${selected === '/about' && 'bg-indigo-600'}`}
              >
                STATUS
              </Link>
            </li>
            <li onClick={() => handleLinkClick('/skills')}>
              <Link
                title="Clique aqui para ir a Skills"
                to="/skills"
                className={`text-base lg:text-xl px-4 py-2 rounded ${selected === '/skills' && 'bg-indigo-600'}`}
              >
                SKILLS
              </Link>
            </li>
            <li onClick={() => handleLinkClick('/quest')}>
              <Link
                title="Clique aqui para ir a Quest"
                to="/quest"
                className={`text-base lg:text-xl px-4 py-2 rounded ${selected === '/quest' && 'bg-indigo-600'}`}
              >
                QUEST
              </Link>
            </li>
            <li onClick={() => handleLinkClick('/project')}>
              <Link
                title="Clique aqui para ir a Projects"
                to="/project"
                className={`text-base lg:text-xl px-4 py-2 rounded ${selected === '/project' && 'bg-indigo-600'}`}
              >
                PROJECTS
              </Link>
            </li>
          </ul>
        </nav>
        <nav
          className={`transform transition-all duration-300 ${open ? 'block, translate-x-0' : 'hidden, translate-x-full'} absolute border-l-2 bg-indigo-800 w-40 h-lvh z-10 top-0 right-0`}
        >
          <ul className="flex flex-col pt-10 items-center gap-3 lg:gap-6">
            <li onClick={() => handleLinkClick('/')}>
              <Link
                title="Clique aqui para ir a Home"
                to="/"
                className={`text-base lg:text-xl px-4 py-2 rounded ${selected === '/' && 'bg-indigo-600'}`}
              >
                HOME
              </Link>
            </li>
            <li onClick={() => handleLinkClick('/about')}>
              <Link
                title="Clique aqui para ir a Status"
                to="/about"
                className={`text-base lg:text-xl px-4 py-2 rounded ${selected === '/about' && 'bg-indigo-600'}`}
              >
                STATUS
              </Link>
            </li>
            <li onClick={() => handleLinkClick('/skills')}>
              <Link
                title="Clique aqui para ir a Skills"
                to="/skills"
                className={`text-base lg:text-xl px-4 py-2 rounded ${selected === '/skills' && 'bg-indigo-600'}`}
              >
                SKILLS
              </Link>
            </li>
            <li onClick={() => handleLinkClick('/quest')}>
              <Link
                title="Clique aqui para ir a Quest"
                to="/quest"
                className={`text-base lg:text-xl px-4 py-2 rounded ${selected === '/quest' && 'bg-indigo-600'}`}
              >
                QUEST
              </Link>
            </li>
            <li onClick={() => handleLinkClick('/project')}>
              <Link
                title="Clique aqui para ir a Projects"
                to="/project"
                className={`text-base lg:text-xl px-4 py-2 rounded ${selected === '/project' && 'bg-indigo-600'}`}
              >
                PROJECTS
              </Link>
            </li>
            <li
              className="bg-indigo-900 border-[1px] border-indigo-950 rounded-lg px-4 py-2 mt-3"
              onClick={() => setOpen(false)}
            >
              FECHAR
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header

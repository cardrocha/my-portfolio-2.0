import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaLaptopCode } from 'react-icons/fa'
import { RxHamburgerMenu } from 'react-icons/rx'
import { CiLight } from 'react-icons/ci'
import { MdDarkMode } from 'react-icons/md'

const Header = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [selected, setSelected] = useState(window.location.pathname)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const handleLinkClick = (path: string) => {
    setSelected(path)
    setOpen(false)
  }

  return (
    <header
      className={`relative max-w-screen-xl mx-auto container bg-indigo-800 text-white p-10 md:p-6 rounded ${darkMode ? 'dark' : ''}`}
    >
      <div className="flex flex-col lg:flex-row items-start md:items-center gap-0 md:gap-20 justify-center">
        <RxHamburgerMenu
          title="Clique aqui para abrir o menu"
          onClick={() => setOpen(!open)}
          className="md:hidden absolute right-5 mt-10 text-4xl cursor-pointer"
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
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="absolute top-4 right-2 md:top-[26px] md:right-7 bg-black dark:bg-white dark:text-black border-2 border-indigo-950 dark:border-white text-base lg:text-xl px-4 py-1 rounded-full"
        >
          {darkMode ? (
            <CiLight className="text-2xl" />
          ) : (
            <MdDarkMode className="text-2xl" />
          )}
        </button>
        <nav
          className={`transform transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'} md:hidden fixed top-0 right-0 w-40 h-full border-l-2 bg-indigo-800 z-10`}
        >
          <RxHamburgerMenu
            title="Clique aqui para fechar o menu"
            onClick={() => setOpen(!open)}
            className="absolute top-5 left-16 md:hidden right-5 mb-5 text-4xl cursor-pointer"
          />
          <ul className="flex flex-col pt-20 items-center gap-3 lg:gap-6">
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
      </div>
    </header>
  )
}

export default Header

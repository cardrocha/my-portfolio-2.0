import { useEffect, useState } from "react";
import { CiLight } from "react-icons/ci";
import { FaLaptopCode } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, useLocation } from "react-router-dom";
import { headerLinks } from "../data/headerLinks";
import Button from "./Button";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header
      className={`relative max-w-screen-xl mx-auto container bg-indigo-800 text-white p-10 md:p-6 rounded ${darkMode ? "dark" : ""}`}
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
            {headerLinks.map((link) => (
              <Link
                key={link.id}
                title={link.title}
                to={link.href}
                className={`text-base lg:text-xl px-4 py-2 rounded ${location.pathname === link.href ? "bg-indigo-600 text-white" : ""}`}
              >
                {link.text}
              </Link>
            ))}
          </ul>
        </nav>
        <Button
          onClick={() => setDarkMode(!darkMode)}
          className="absolute top-4 right-2 md:top-[26px] md:right-7 bg-black dark:bg-white dark:text-black border-2 border-indigo-950 dark:border-white text-base lg:text-xl px-4 py-1 rounded-full"
        >
          {darkMode ? (
            <MdDarkMode className="text-2xl" />
          ) : (
            <CiLight className="text-2xl" />
          )}
        </Button>
        <nav
          className={`transform transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"} md:hidden fixed top-0 right-0 w-40 h-full border-l-2 bg-indigo-800 z-10`}
        >
          <RxHamburgerMenu
            title="Clique aqui para fechar o menu"
            onClick={() => setOpen(!open)}
            className="absolute top-5 left-16 md:hidden right-5 mb-5 text-4xl cursor-pointer"
          />
          <ul className="flex flex-col pt-20 items-center gap-3 lg:gap-6">
					{headerLinks.map((link) => (
              <Link
                key={link.id}
                title={link.title}
                to={link.href}
                className={`text-base lg:text-xl px-4 py-2 rounded ${location.pathname === link.href ? "bg-indigo-600 text-white" : ""}`}
              >
                {link.text}
              </Link>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

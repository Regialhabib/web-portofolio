import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import List from "../Elements/List";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleNav = () => {
    setIsOpen((state) => !state);
  };

  const [darkMode, setDarkMode] = useState(false);
  const darkIcon = "bi bi-moon-stars-fill text-purple-500 ";
  const handleDarkMode = () => {
    setDarkMode((state) => !state);
    const theme = darkMode ? "light" : "dark";
    localStorage.setItem("theme", theme);
  };

  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  const handleTheme = () => {
    setTheme(localStorage.getItem("theme"));
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme, setTheme]);


  return (
    <>
      <header className="flex h-16 shadow-md px-9 md:py-5 fixed dark:bg-zinc-900 bg-white top-0 w-full">
        <nav className="flex items-center  w-full justify-between lg:justify-center ">
          <div>
            <i
              className={`bi dark:text-gray-50 ${
                isOpen ? "bi-x-lg" : "bi-list"
              } text-2xl cursor-pointer font-semibold md:hidden`}
              id="logo"
              onClick={() => {
                handleNav();
              }}
            ></i>
          </div>
          <ul
            id="nav"
            className={`bg-white flex-col pt-5 md:pt-0 fixed dark:bg-zinc-900 dark:text-gray-50 w-full max-w-5xl left-0 px-8 bottom-0 top-14 gap-6 ${
              isOpen ? "flex" : "hidden"
            } font-semibold text-base md:static md:flex-row md:flex md:px-0 md:gap-8  `}
          >
            <List>
              <Link to="/">Home</Link>
            </List>
            <List className="border-gray-500 border-b py-2  md:py-0 md:border-none">
              <Link to="/about">About</Link>
            </List>
            <List className="border-gray-500 border-b py-2 md:py-0 md:border-none">
              <Link to="/skills">Skils</Link>
            </List>
            <List className="border-gray-500 border-b py-2 md:py-0 md:border-none">
              <Link to="/contact">Contact</Link>
            </List>
            <List className="border-gray-500 border-b py-2 md:py-0 md:border-none">
              <Link to="/projects">Projects</Link>
            </List>
          </ul>
          <div>
            <div
              className="flex justify-center items-center cursor-pointer bg-zinc-200 dark:bg-zinc-800 w-fit py-1 px-3 rounded-lg  "
              onClick={() => {
                handleDarkMode();
                handleTheme();
              }}
            >
              {" "}
              <i
                className={
                  localStorage.getItem("theme") === "dark"
                    ? "bi bi-sun-fill text-yellow-400 "
                    : darkIcon
                }
              ></i>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;

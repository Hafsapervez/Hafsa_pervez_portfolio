import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMoon, FiSun, FiMenu, FiX,  } from "react-icons/fi";
// import DownloadCV from "./DownloadCV";FiDownload

const Header = ({ darkMode, setDarkMode }) => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed w-full z-40 backdrop-blur-md bg-opacity-80">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.a
          href="#home"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent"
        >
          &lt;HafsaPervez/&gt;
        </motion.a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-12">
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="hover:text-purple-400 transition-colors"
            >
              {item.name}
            </motion.a>
          ))}

          <motion.button
            onClick={() => setDarkMode(!darkMode)}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: navItems.length * 0.1 }}
            className="p-2 rounded-full hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
          </motion.button>

          {/* CV Button for Desktop */}
          {/* <DownloadCV /> */}
        </nav>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center gap-2">
          {/* Mobile Download CV Icon */}
          <a
            href="/documents/Hafza Pervez Resume.pdf" // put your file path here
            download
            className="p-2 rounded-full hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors"
            aria-label="Download Resume"
          >
            {/* <FiDownload size={20} /> */}
          </a>

          {/* Dark Mode Button */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>

          {/* Hamburger Menu */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="p-2 rounded-md hover:bg-gray-700/50 dark:hover:bg-gray-200/50 transition"
            aria-label="Toggle menu"
          >
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="md:hidden mx-4 mt-2 rounded-xl border border-white/10 dark:border-black/10
                       bg-grey/70 dark:bg-black/60 backdrop-blur-md shadow-lg overflow-hidden"
          >
            <ul className="flex flex-col py-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-3 text-base hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;

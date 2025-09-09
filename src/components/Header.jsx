import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-950 bg-opacity-90 backdrop-blur-md z-50 shadow-sm">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <img
              src="/logoJ.png"
              alt="logo"
              className="h-10 w-10 sm:h-12 sm:w-12"
            />
            <span className="text-white font-bold text-lg sm:text-xl">
              Jaymar Roco
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6 text-white font-medium text-lg">
            <a
              href="#about-me"
              className="hover:text-cyan-400 transition-colors duration-300"
            >
              Home
            </a>
            <a
              href="#Projects"
              className="hover:text-cyan-400 transition-colors duration-300"
            >
              Projects
            </a>
            <a
              href="#Contacts"
              className="hover:text-cyan-400 transition-colors duration-300"
            >
              Contacts
            </a>
          </nav>

          {/* Mobile Burger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 rounded hover:bg-gray-800 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="md:hidden mt-2 bg-gray-950 rounded-lg shadow-lg">
            <ul className="flex flex-col p-4 gap-2 text-white font-medium">
              <li>
                <a
                  href="#about-me"
                  className="block px-4 py-2 rounded hover:bg-gray-800 transition"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#MyPortfolio"
                  className="block px-4 py-2 rounded hover:bg-gray-800 transition"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#Contacts"
                  className="block px-4 py-2 rounded hover:bg-gray-800 transition"
                >
                  Contacts
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;

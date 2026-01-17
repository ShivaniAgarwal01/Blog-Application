import ThemeToggle from "./ThemeToggle"
import { useState } from "react"

interface NavbarProps {
  isDark: boolean
  toggleTheme: () => void
}

export default function Navbar({ isDark, toggleTheme }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="w-full bg-white dark:bg-gray-900 shadow-sm dark:shadow-none border-b dark:border-gray-800">
      <div className="relative max-w-8xl mx-auto py-4 px-6 flex items-center">

        {/* Left - Logo */}
        <h1 className="text-xl font-bold text-gray-800 dark:text-white">
          CA Monk
        </h1>

        {/* Center Menu (Desktop) */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-6 text-sm font-medium text-gray-600 dark:text-gray-300">
          {["Tools", "Practice", "Events", "Job Board"].map(item => (
            <button
              key={item}
              className="hover:text-black dark:hover:text-white transition"
            >
              {item}
            </button>
          ))}
        </div>

        {/* Right Section */}
        <div className="ml-auto flex items-center gap-5">

          {/* Theme Toggle */}
          <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />

          {/* Profile Button */}
          <button className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition text-sm">
            Profile
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-700 dark:text-gray-300 text-2xl"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-800">
          {["Tools", "Practice", "Events", "Job Board"].map(item => (
            <button
              key={item}
              className="block w-full text-left px-6 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}

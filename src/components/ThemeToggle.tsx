interface ThemeToggleProps {
  isDark: boolean
  toggleTheme: () => void
}

export default function ThemeToggle({
  isDark,
  toggleTheme,
}: ThemeToggleProps) {
  return (
    <button
      onClick={toggleTheme}
      className={`relative w-12 h-6 rounded-full transition-colors
        ${isDark ? "bg-blue-600" : "bg-gray-300"}`}
    >
      <span
        className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform
          ${isDark ? "translate-x-6" : ""}`}
      />
    </button>
  )
}

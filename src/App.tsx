import { useState } from "react"
import BlogList from "./components/BlogList"
import BlogDetails from "./components/BlogDetails"
import CreateBlogForm from "./components/CreateBlogForm"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

export default function App() {
  const [selectedId, setSelectedId] = useState<number | null>(null)
  const [isDark, setIsDark] = useState(false)

  const toggleTheme = () => setIsDark(prev => !prev)

  return (
    <div className={isDark ? "dark" : ""}>
      <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950 transition-colors">

        {/* Navbar */}
        <Navbar isDark={isDark} toggleTheme={toggleTheme} />

        {/* Page Header */}
        <div className="flex flex-col items-center justify-center py-4">
          <h1 className="text-3xl font-bold px-5 py-3 dark:text-white">CA MONK Blog</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Explore insightful articles on accounting, finance, and career tips
          </p>
        </div>

        {/* Main content + CreateBlogForm */}
        <main className="flex-1 relative max-w-8xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* LEFT - Blog List */}
          <div className="md:col-span-1">
            <BlogList
              onSelectBlog={setSelectedId}
              selectedId={selectedId}
            />
          </div>

          {/* RIGHT - Blog Details */}
          <div className="md:col-span-2">
            {selectedId ? (
              <BlogDetails blogId={selectedId} />
            ) : (
              <div
                className={`h-full flex items-center justify-center rounded-xl ${
                  isDark ? "bg-gray-800" : "bg-white shadow"
                }`}
              >
                <p className="opacity-60">Select a blog to read</p>
              </div>
            )}
          </div>

          {/* Add Button from CreateBlogForm */}
          <CreateBlogForm />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  )
}

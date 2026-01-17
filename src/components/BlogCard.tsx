import { Blog } from "../types/blog"

interface BlogCardProps {
  blog: Blog
  onClick: () => void
}

export default function BlogCard({ blog, onClick }: BlogCardProps) {
  return (
    <div
      onClick={onClick}
      className="
        cursor-pointer rounded-xl p-4 sm:p-5
        bg-white dark:bg-gray-800
        border border-gray-200 dark:border-gray-700
        shadow-sm hover:shadow-md
        transition-all duration-200
        flex flex-col justify-between
      "
    >
      {/* Categories */}
      <div className="flex flex-wrap gap-2 mb-3">
        {blog.category.map((cat) => (
          <span
            key={cat}
            className="
              text-xs sm:text-sm
              px-2 py-1 rounded
              bg-blue-100 text-blue-600
              dark:bg-blue-800 dark:text-blue-300
            "
          >
            {cat}
          </span>
        ))}
      </div>

      {/* Title */}
      <h2 className="text-sm sm:text-base font-semibold mb-1 text-gray-900 dark:text-gray-100">
        {blog.title}
      </h2>

      {/* Description */}
      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
        {blog.description}
      </p>
    </div>
  )
}

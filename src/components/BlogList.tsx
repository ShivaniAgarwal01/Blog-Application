import { useQuery } from "@tanstack/react-query"
import { fetchBlogs } from "../routes/blogs"

interface BlogListProps {
  onSelectBlog: (id: number) => void
  selectedId: number | null
}

export default function BlogList({
  onSelectBlog,
  selectedId,
}: BlogListProps) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["blogs"],
    queryFn: fetchBlogs,
  })

  if (isLoading) {
    return (
      <p className="text-center text-sm opacity-60 py-6">
        Loading blogs...
      </p>
    )
  }

  if (error) {
    return (
      <p className="text-center text-sm text-red-500 py-6">
        Error loading blogs
      </p>
    )
  }

  return (
    <div className="space-y-3 sm:space-y-4">
      {data.map((blog: any) => {
        const isActive = selectedId === blog.id

        return (
          <div
            key={blog.id}
            onClick={() => onSelectBlog(blog.id)}
            className={`
              p-4 sm:p-5 rounded-xl cursor-pointer transition-all duration-200
              border
              ${
                isActive
                  ? "border-white ring-1 ring-blue-500/30"
                  : "border-gray-200 dark:border-gray-700"
              }
              ${
                isActive
                  ? "bg-blue-50 dark:bg-gray-700"
                  : "bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700"
              }
            `}
          >
            <h3 className="font-semibold text-sm sm:text-base leading-snug text-gray-900 dark:text-gray-100">
              {blog.title}
            </h3>

            <p className="mt-1 text-xs sm:text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
              {blog.description}
            </p>
          </div>
        )
      })}
    </div>
  )
}

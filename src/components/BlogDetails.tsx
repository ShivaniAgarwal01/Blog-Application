import { useQuery } from "@tanstack/react-query"
import { fetchBlogById } from "../routes/blogs"
import { Heart, Flag } from "lucide-react"

interface BlogDetailsProps {
  blogId: number
}

export default function BlogDetails({ blogId }: BlogDetailsProps) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["blog", blogId],
    queryFn: () => fetchBlogById(blogId),
  })

  if (isLoading)
    return (
      <p className="text-center text-sm opacity-60 py-6 dark:text-gray-400">
        Loading blog...
      </p>
    )
  if (error)
    return (
      <p className="text-center text-sm text-red-500 py-6">
        Error loading blog
      </p>
    )

  const readTime = Math.ceil(data.content.split(" ").length / 200)

  return (
    <article className="p-4 sm:p-6 rounded-xl h-full bg-white dark:bg-gray-800 shadow-sm dark:shadow-none transition-colors">
      {/* Cover Image */}
      {data.coverImage && (
        <img
          src={data.coverImage}
          className="w-full h-52 sm:h-64 object-cover rounded-lg mb-6"
        />
      )}

      {/* Title */}
      <h1 className="text-xl sm:text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100">
        {data.title}
      </h1>

      {/* Date & Read Time */}
      <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-6">
        {new Date(data.date).toDateString()} · {readTime} min read
      </div>

      {/* Content */}
      <p className="leading-relaxed whitespace-pre-line text-gray-800 dark:text-gray-200 mb-10 text-sm sm:text-base">
        {data.content}
      </p>

      {/* Footer */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-t border-gray-200 dark:border-gray-700 pt-4 gap-3 sm:gap-0">
        <span className="text-sm text-gray-600 dark:text-gray-400">
          Written by CA Monk
        </span>

        <div className="flex gap-4">
          <button className="hover:text-red-500 transition text-gray-600 dark:text-gray-300">
            <Heart size={18} />
          </button>
          <button className="hover:text-yellow-500 transition text-gray-600 dark:text-gray-300">
            <Flag size={18} />
          </button>
        </div>
      </div>
    </article>
  )
}

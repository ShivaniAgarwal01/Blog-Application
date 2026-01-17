import { useState } from "react"
import { Plus, X } from "lucide-react"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createBlog } from "../routes/blogs"

export default function CreateBlogForm() {
  const [open, setOpen] = useState(false)
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [content, setContent] = useState("")
  const [coverImage, setCoverImage] = useState("")

  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: createBlog,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] })
      setOpen(false)
      setTitle("")
      setDescription("")
      setContent("")
      setCoverImage("")
    },
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    mutation.mutate({
      title,
      description,
      content,
      coverImage,
      date: new Date().toISOString(),
    })
  }

  return (
    <>
      {/* Floating Add Button */}
      <button
        onClick={() => setOpen(true)}
        className="
          absolute bottom-10 right-8 z-50
          bg-blue-600 hover:bg-blue-700
          text-white p-4 rounded-full shadow-lg
          transition
        "
      >
        <Plus />
      </button>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4">
          <div
            className="
              w-full max-w-xl
              rounded-xl p-5 sm:p-6
              bg-white dark:bg-gray-900
              text-gray-900 dark:text-gray-100
              shadow-xl
            "
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg sm:text-xl font-semibold">
                Create Blog
              </h2>
              <button
                onClick={() => setOpen(false)}
                className="opacity-70 hover:opacity-100"
              >
                <X />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
                required
                className="
                  w-full rounded-lg px-4 py-2
                  bg-gray-100 dark:bg-gray-800
                  text-gray-900 dark:text-gray-100
                  outline-none focus:ring-2 focus:ring-white
                "
              />

              <input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Short description"
                required
                className="
                  w-full rounded-lg px-4 py-2
                  bg-gray-100 dark:bg-gray-800
                  text-gray-900 dark:text-gray-100
                  outline-none focus:ring-2 focus:ring-white
                "
              />

              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Content"
                rows={5}
                required
                className="
                  w-full rounded-lg px-4 py-2
                  bg-gray-100 dark:bg-gray-800
                  text-gray-900 dark:text-gray-100
                  outline-none focus:ring-2 focus:ring-white
                "
              />

              <input
                value={coverImage}
                onChange={(e) => setCoverImage(e.target.value)}
                placeholder="Cover image URL (optional)"
                className="
                  w-full rounded-lg px-4 py-2
                  bg-gray-100 dark:bg-gray-800
                  text-gray-900 dark:text-gray-100
                  outline-none focus:ring-2 focus:ring-white
                "
              />

              <button
                type="submit"
                disabled={mutation.isPending}
                className="
                  w-full rounded-lg py-2
                  bg-blue-600 hover:bg-blue-700
                  text-white font-medium
                  transition disabled:opacity-60
                  cursor-pointer
                "
              >
                {mutation.isPending ? "Publishing..." : "Publish Blog"}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

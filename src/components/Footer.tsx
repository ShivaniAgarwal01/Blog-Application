export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 px-6 sm:px-12 py-10">
      {/* Grid container: 4 columns */}
      <div className="max-w-8xl mx-auto grid grid-cols-1 sm:grid-cols-4 gap-y-8 sm:gap-y-0 gap-x-20">
        {/* Brand */}
        <div className="space-y-2">
          <h1 className="text-xl font-bold flex items-center gap-2">
            CA MONK
          </h1>
          <p className="text-sm opacity-70">
            Empowering the next generation of financial leaders with tools, community, and knowledge.
          </p>
        </div>

        {/* Resources */}
       
        <div>
          <h2 className="font-semibold mb-3">Resources</h2>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer">Blog</li>
            <li className="hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer">Webinars</li>
            <li className="hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer">Case Studies</li>
          </ul>
        </div>

        {/* Platform */}
        <div>
          <h2 className="font-semibold mb-3">Platform</h2>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer">Job Board</li>
            <li className="hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer">Practice Tests</li>
            <li className="hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer">Mentorship</li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h2 className="font-semibold mb-3">Connect</h2>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer">LinkedIn</li>
            <li className="hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer">Twitter</li>
            <li className="hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer">Instagram</li>
          </ul>
        </div>
      </div>
      {/* Bottom bar */}
      <div className="mt-10 border-t border-gray-200 dark:border-gray-700 pt-4 text-sm flex flex-col sm:flex-row justify-between items-center">
        <span>© 2026 CA Monk. All rights reserved.</span>
        <div className="flex gap-4 mt-2 sm:mt-0">
          <span className="hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer">Privacy Policy</span>
          <span className="hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer">Terms of Service</span>
        </div>
      </div>
      
    </footer>
  );
}

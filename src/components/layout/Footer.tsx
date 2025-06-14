export default function Footer() {
  return (
    <footer className="w-full py-6 px-4 bg-white border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-2 text-sm text-gray-500 mt-8">
      <div>
        © {new Date().getFullYear()} Simply Fit. All rights reserved.
      </div>
      <div className="flex items-center gap-3">
        <a href="https://github.com/Archiev19/simply-fit" target="_blank" rel="noopener noreferrer" className="hover:text-primary font-medium transition-colors">GitHub</a>
        <span className="hidden md:inline">|</span>
        <span>Made with <span className="text-red-500">❤️</span> in India</span>
      </div>
    </footer>
  )
} 
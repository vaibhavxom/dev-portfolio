export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white text-center py-6 px-4 sm:px-8 md:px-16 select-none">
      <hr className="border-t border-gray-700 mb-4 opacity-40" />
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 text-sm">
        <span>© {year} Rushikesh Mithagare.</span>
        <span className="opacity-70">All rights reserved.</span>
        <a
          href="https://vaibhavxom.github.io/dev-portfolio"
          className="hover:underline hover:text-gray-400 transition"
        >
          Portfolio
        </a>
      </div>
      <span className="opacity-50 text-xs mt-2 block">
        Built with Next.js & TailwindCSS · No cookies · No trackers
      </span>
    </footer>
  );
}

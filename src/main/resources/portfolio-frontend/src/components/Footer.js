export default function Footer() {
  return (
    <footer
      role="contentinfo"
      className="bg-gray-900 text-white text-center py-6 px-4 select-none"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 text-sm">
        <span>© {new Date().getFullYear()} Rushikesh Mithagare.</span>
        <span className="opacity-70">All rights reserved.</span>
      </div>
    </footer>
  );
}

const links = ["About", "Projects", "Contact"];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-5 bg-black/80 backdrop-blur border-b border-white/5">
      <span className="text-white font-semibold tracking-tight">Steven Armenta</span>
      <div className="flex gap-8">
        {links.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            {link}
          </a>
        ))}
      </div>
    </nav>
  );
}

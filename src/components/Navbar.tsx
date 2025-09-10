import Link from "next/link";

export default function Navbar() {
  return (
<nav className="border-b-2 border-green-400 py-2 text-center font-mono bg-black text-green-400">
  <ul className="flex flex-wrap justify-center gap-2 md:gap-4">
    {[
      { href: "/", label: "home" },
      { href: "/about", label: "about" },
      { href: "/projects", label: "projects" },
      { href: "/skills", label: "skills" },
      { href: "/contact", label: "contact" },
      { href: "/blog", label: "blog" },
    ].map((item, i, arr) => (
      <li key={item.href} className="flex items-center gap-1">
        <Link href={item.href} className="hover:text-green-200 transition">{item.label}</Link>
        {i < arr.length - 1 && <span className="text-green-400">|</span>}
      </li>
    ))}
  </ul>
</nav>

  )}
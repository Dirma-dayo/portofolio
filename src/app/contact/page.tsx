// pages/links.tsx
import { FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function LinksPage() {
  return (
    <main className="min-h-screen bg-black text-green-400 font-mono p-6 flex items-center justify-center">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center tracking-widest glitch">socials & cursed links</h1>
        <ul className="space-y-4 text-lg">
          <li>
            <a href="https://github.com/Dirma-dayo" className="flex items-center justify-center gap-2 border border-green-500 p-3 rounded-lg hover:bg-green-900/30 transition-all duration-200">
              <FaGithub className="text-green-400" /> [ github ]
            </a>
          </li>
          <li>
            <a href="mailto:burneria997@email.com" className="flex items-center justify-center gap-2 border border-green-500 p-3 rounded-lg hover:bg-green-900/30 transition-all duration-200">
              <FaEnvelope className="text-green-400" /> [ email ]
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/arianeechan/" className="flex items-center justify-center gap-2 border border-green-500 p-3 rounded-lg hover:bg-green-900/30 transition-all duration-200">
              <FaInstagram className="text-green-400" /> [ instagram ]
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
}

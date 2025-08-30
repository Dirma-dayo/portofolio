

export default function LinksPage() {
  return (
    <main className="min-h-screen bg-black text-green-400 font-mono p-6">
      <h1 className="text-3xl font-bold mb-6 text-center tracking-widest glitch">
        ~ socials & cursed links ~
      </h1>

      <ul className="space-y-4 text-lg">
        <li>
          <a
            href="https://github.com/Dirma-dayo"
            className="block border border-green-500 p-3 rounded-lg hover:bg-green-900/30 transition-all duration-200"
          >
            [ github.com ]
          </a>
        </li>
        <li>
          <a
            href="mailto:burneria997@email.com"
            className="block border border-green-500 p-3 rounded-lg hover:bg-green-900/30 transition-all duration-200"
          >
            [ AOL ]
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/arianeechan/"
            className="block border border-green-500 p-3 rounded-lg hover:bg-green-900/30 transition-all duration-200"
          >
            [ Instagram ]
          </a>
        </li>
      </ul>
    </main>
  )
}

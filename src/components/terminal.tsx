"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const router = useRouter();

  const handleCommand = (cmd: string) => {
    let output = "";
    switch (cmd.toLowerCase()) {
      case "help":
        output = "commands: help, about, projects, skills, contacts, clear, win";
        break;
      case "projects":
        router.push("/projects");
        break;
      case "skills":
        router.push("/skills");
        break;
      case "about":
        router.push("/about");
        break;
      case "contacts":
        router.push("/contacts");
        return;
      case "clear":
        setHistory([]);
        return;
      case "win":
        window.location.href = "https://windows93.net";
        break;
      default:
        output = `unknown command: ${cmd}`;
    }
    setHistory([...history, `> ${cmd}`, output]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(input);
      setInput("");
    }
  };

  return (
    <main>

      {/* terminal section */}
      <section className="max-w-3xl mx-auto my-8 p-4 font-mono text-sm text-green-400 bg-black border-2 border-green-400">
        {/* Header */}
        <div className="mb-4 border-b border-green-400 pb-2">
          <span className="font-bold">~/nextjs-web-portofolio</span>
        </div>

        {/* Help text */}
        <div className="font-bold">
          <p>{"help for command list | or just use the navigation in the top screen that works too"}</p>
        </div>

        <br />
        <br />
        <br />

        {/* Info card */}
        <div className="flex items-center gap-4 mb-4 text-left">
          <img
            src="/img/image.png"
            alt="me"
            className="w-36 h-36 object-cover border border-green-400 p-1 shrink-0 block"
          />
          <div className="leading-7">
            aria@GlorifiedToaster <br />
            -------------------------------------------------------
            <div><strong>Name:</strong> Muhammad Fahri Baadila</div>
            <div><strong>Uptime:</strong> 17 Years</div>
            <div><strong>School:</strong> SMKN 8 Malang</div>
            <div><strong>Field:</strong> RPL</div>
            <div><strong>OS:</strong> Arch Linux</div>
            <div><strong>Hobbies:</strong> Hardware | Old things | Retro PCs</div>
          </div>
        </div>

        {/* Command history */}
        {history.map((line, i) => (
          <div key={i}>{line}</div>
        ))}

        {/* Input line */}
        <div className="flex">
          <span>&gt;&nbsp;</span>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-black text-green-400 border-none outline-none font-mono"
            autoFocus
          />
        </div>
      </section>
    </main>
  );
}

"use client";
import { useState, useRef, useEffect } from "react";
import { FaFolder } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { JSX } from "react/jsx-runtime";

export default function WiWin() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<(string | JSX.Element)[]>([]);
  const historyEndRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const handleCommand = (cmd: string) => {
    const lc = cmd.toLowerCase();
    let output: string | JSX.Element = "";

    const routes = ["about", "projects", "skills", "contact", "blog"];

    if (lc === "help") {
      output = "commands: help, dir, clear";
    } else if (lc === "dir") {
      output = (
        <div className="flex flex-col gap-1">
          {routes.map((file) => (
            <div key={file}>
              <FaFolder className="inline mr-1" />
              {file}
            </div>
          ))}
        </div>
      );
    } else if (lc === "clear") {
      setHistory([]);
      return;
    } else if (routes.includes(lc)) {
      // navigate
      router.push(`/${lc}`);
      output = `navigating to /${lc} ...`;
    } else {
      output = `unknown command: ${cmd}`;
    }

    setHistory([...history, `C:\Users\Fahri> ${cmd}`, output]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(input);
      setInput("");
    }
  };

  useEffect(() => {
    historyEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  return (
    <div className="max-w-3xl mx-auto my-8 p-4 font-mono text-white bg-blue-900 border border-green-400 rounded-lg">
      {/* Info Card */}
      <div className="flex items-start gap-4 mb-4 text-left">
        <img
          src="/img/image.png"
          alt="me"
          className="w-36 h-36 object-cover border border-green-400 p-1 shrink-0 block"
        />
        <div className="leading-7">
          <div className="text-gray-300">C:\Users\Fahri</div>
          <div className="text-gray-400">-----------------------------</div>

          <div>
            <strong>Name:</strong> Muhammad Fahri Baadila
          </div>
          <div>
            <strong>Uptime:</strong> 17 Years
          </div>
          <div>
            <strong>School:</strong> SMKN 8 Malang
          </div>
          <div>
            <strong>Field:</strong> RPL
          </div>
          <div>
            <strong>OS:</strong> Windows 10
          </div>
          <div>
            <strong>Hobbies:</strong> Hardware | Old things | Retro PCs
          </div>
          <div className="text-gray-400">-----------------------------</div>
          <div>
            <strong>Status:</strong> Online | Windows Terminal Emulator Active
          </div>
        </div>
      </div>

      {/* Command History */}
      <div className="mb-2">
        {history.map((line, i) => (
          <div key={i}>{line}</div>
        ))}
        <div ref={historyEndRef}></div>
      </div>

      {/* Input Line */}
      <div className="flex items-center">
        <span>C:\Users\Fahri&gt;&nbsp;</span>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-blue-900 text-white border-none outline-none font-mono"
          autoFocus
        />
      </div>
    </div>
  );
}

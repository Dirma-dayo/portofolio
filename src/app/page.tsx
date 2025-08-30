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
        output = "commands: help, about, contacts, clear, win";
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
    <main
      style={{
        maxWidth: "800px",
        margin: "2rem auto",
        padding: "1rem",
        fontFamily: "monospace",
        fontSize: "14px",
        color: "#00ff00",
        background: "black",
        border: "2px solid #00ff00",
      }}
    >
      <div style={{ marginBottom: "1rem" }}>
        <div style={{ borderBottom: "1px solid #00ff00", paddingBottom: "0.5rem" }}>
          <span style={{ fontWeight: "bold" }}>~/nextjs-web-portofolio</span>
        </div>
      </div>

      <div>
        <span style={{ fontWeight: "bold" }}>
          "help" for command list | or just use the navigation in the top screen that works too
        </span>

        
        <br /><br /><br />
        <div
  style={{
    display: "flex",
    alignItems: "center",   // vertically center text to image
    gap: "1rem",            // space between image and text
    marginBottom: "1rem",
    justifyContent: "flex-start", // left-align everything
    textAlign: "left",      // reset any inherited centering
  }}
>
  <img
    src="/img/image.png"
    alt="me"
    style={{
      width: "150px",
      height: "150px",
      objectFit: "cover",
      border: "1px solid #00ff00",
      padding: "2px",
      flexShrink: 0,
      display: "block", // force block to remove inline spacing issues
    }}
  />
  <div style={{ lineHeight: "2.0" }}>
    aria@GlorifiedToaster <br></br>
    -------------------------------------------------------
    <div><strong>Name:</strong> Muhammad Fahri Baadila</div>
    <div><strong>Uptime:</strong> 17 Years</div>
    <div><strong>School:</strong> SMKN 8 Malang</div>
    <div><strong>Field:</strong> RPL</div>
    <div><strong>OS:</strong> Arch Linux / Windows</div>
    <div><strong>Hobbies:</strong> Hardware | Old things | Retro PCs</div>
  </div>
</div>




        
        {history.map((line, i) => (
          <div key={i}>{line}</div>
        ))}
      </div>

      <div style={{ display: "flex" }}>
        <span>&gt;&nbsp;</span>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          style={{
            flex: 1,
            background: "black",
            color: "#00ff00",
            border: "none",
            outline: "none",
            fontFamily: "monospace",
          }}
          autoFocus
        />
      </div>
    </main>
  );
}

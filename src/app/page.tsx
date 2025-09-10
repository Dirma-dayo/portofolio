"use client";
import { useState } from "react";
import Hero from "@/components/herothingidk";
import Terminal from "@/components/terminal";
import WiWin from "@/components/wiwin";

export default function HomePage() {
  const [showHero, setShowHero] = useState(true);
  const [bootOS, setBootOS] = useState<"arch" | "windows" | null>(null);

  return (
    <main className="min-h-screen bg-black font-mono">
      {showHero && !bootOS ? (
        <Hero
          onBoot={(os: "arch" | "windows") => {
            setBootOS(os);
            setShowHero(false);
          }}
        />
      ) : bootOS === "arch" ? (
        <Terminal />
      ) : bootOS === "windows" ? (
        <WiWin />
      ) : null}
    </main>
  );
}

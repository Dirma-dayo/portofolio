"use client";
import { useState } from "react";

export default function Hero({ onBoot }: { onBoot?: (os: "arch" | "windows") => void }) {
  const OS_LIST = ["Arch Linux", "Windows (bootmgfw.efi)"];
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [boot, setBoot] = useState(false);

  const handleSelect = (index: number) => {
    setSelectedIndex(index);
    setBoot(true);
    if (onBoot) onBoot(index === 0 ? "arch" : "windows");
  };

  return (
    <div className="h-screen w-full bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 flex flex-col justify-center items-center p-6 text-white">
      <p className="text-center mb-2 text-sm sm:text-base">GNU GRUB version 2.06</p>
      <p className="text-center mb-4 text-sm sm:text-base">
        Minimal BASH-like line editing is supported.
      </p>
      <p className="text-center mb-8 text-sm sm:text-base">tap an OS to boot</p>

      <div className="flex flex-col gap-4 w-full sm:w-1/2 items-center">
        {OS_LIST.map((os, i) => (
          <button
            key={os}
            onClick={() => handleSelect(i)}
            className="w-full sm:w-auto px-8 py-3 text-center border border-white rounded-lg"
          >
            {os}
          </button>
        ))}
      </div>
    </div>
  );
}

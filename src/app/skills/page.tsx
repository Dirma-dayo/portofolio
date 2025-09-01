import { FaTools, FaMicrochip, FaHdd, FaPalette, FaCode } from "react-icons/fa";

export default function SkillsPage() {
  const skills = [
    {
      icon: <FaMicrochip className="w-8 h-8 text-green-400" />,
      text: "id say im pretty good at pc building",
    },
    {
      icon: <FaTools className="w-8 h-8 text-green-400" />,
      text: "im also good at fixing or maintaining old broken pcs",
    },
    {
      icon: <FaHdd className="w-8 h-8 text-green-400" />,
      text: "i can help you install operating systems (windows, linux, etc.)",
    },
    {
      icon: <FaPalette className="w-8 h-8 text-green-400" />,
      text: "people say im pretty good at designing",
    },
    {
      icon: <FaCode className="w-8 h-8 text-green-400" />,
      text: "my problem solving is pretty solid too (helped rakha and sulthan fix their broken arch linux setups — looking for more arch victims rn — and some other student broken code)",
    },
  ];

  return (
    <main className="font-mono text-green-400 bg-black min-h-screen p-6 flex items-center justify-center">
      <div className="grid gap-4 max-w-xl w-full">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="flex flex-col items-center text-center gap-3 border border-green-400/40 rounded-2xl p-6 bg-black/60 shadow-md shadow-green-900"
          >
            {skill.icon}
            <span>{skill.text}</span>
          </div>
        ))}
      </div>
    </main>
  );
}
// pages/projects.tsx
import { projects } from "../../data/projects";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectsPage() {
  return (
    <main className="font-mono text-green-400 bg-black min-h-screen p-6 flex items-center justify-center">
      <div className="grid gap-6 max-w-2xl w-full">
        {projects.map((project, i) => (
          <div
            key={i}
            className="border border-green-400/40 rounded-2xl p-6 bg-black/60 shadow-md shadow-green-900 flex flex-col gap-2 hover:shadow-lg transition-shadow duration-300"
          >
            <h2 className="text-lg font-bold">{project.name}</h2>
            <p className="text-sm">{project.description}</p>
            <div className="flex gap-4 mt-2">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-green-200">
                  <FaGithub /> github
                </a>
              )}
              {project.deploy && (
                <a href={project.deploy} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-green-200">
                  <FaExternalLinkAlt /> live
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

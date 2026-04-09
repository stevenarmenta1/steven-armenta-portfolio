interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

const projects: Project[] = [
  {
    title: "Coming Soon",
    description: "Projects will appear here as I build and ship them. Check back soon.",
    tags: ["TypeScript", "React"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold tracking-tight mb-2">Projects</h2>
      <p className="text-gray-500 mb-12">Things I've built and shipped.</p>

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.title}
            className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-white/20 transition-colors group"
          >
            <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-purple-300 transition-colors">
              {project.link ? (
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  {project.title}
                </a>
              ) : (
                project.title
              )}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="px-2 py-0.5 text-xs bg-purple-900/30 text-purple-300 border border-purple-800/40 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

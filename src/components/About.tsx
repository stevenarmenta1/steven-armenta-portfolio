const skills = [
  "TypeScript", "React", "Next.js", "Python",
  "Node.js", "Tailwind CSS", "SQL", "Git",
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold tracking-tight mb-4">About Me</h2>
      <p className="text-gray-400 leading-relaxed mb-4">
        I'm a software developer based in the Inland Empire, CA, focused on building clean, performant web applications.
        I'm currently pursuing a Master's in AI and enjoy working at the crossroads of modern web engineering and machine learning.
      </p>
      <p className="text-gray-400 leading-relaxed mb-10">
        When I'm not coding, I'm exploring new technologies and working on projects that challenge me to grow as an engineer.
      </p>

      <h3 className="text-lg font-semibold mb-4 text-white">Tech Stack</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 text-sm bg-white/5 border border-white/10 rounded-full text-gray-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

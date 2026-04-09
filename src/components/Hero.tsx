export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-3xl">
        <span className="inline-block px-3 py-1 mb-6 text-xs uppercase tracking-widest text-gray-500 border border-white/10 rounded-full bg-white/5">
          Software Developer · Inland Empire, CA
        </span>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">
          Steven Ray Armenta
        </h1>
        <p className="text-lg text-gray-400 mb-10 max-w-xl mx-auto leading-relaxed">
          I build modern web applications and explore the intersection of software engineering and AI.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="#projects"
            className="px-7 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-7 py-3 border border-white/20 text-white rounded-full hover:bg-white/10 transition-colors"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

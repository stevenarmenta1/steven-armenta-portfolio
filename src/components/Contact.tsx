export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold tracking-tight mb-4">Get In Touch</h2>
      <p className="text-gray-400 mb-10 max-w-md mx-auto leading-relaxed">
        Whether you have a project in mind, want to collaborate, or just want to say hi — my inbox is open.
      </p>
      <div className="flex gap-4 justify-center flex-wrap">
        <a
          href="mailto:your@email.com"
          className="px-7 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors"
        >
          Email Me
        </a>
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-7 py-3 border border-white/20 text-white rounded-full hover:bg-white/10 transition-colors"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-7 py-3 border border-white/20 text-white rounded-full hover:bg-white/10 transition-colors"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}

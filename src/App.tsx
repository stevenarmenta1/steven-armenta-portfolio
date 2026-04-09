import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./index.css";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className="border-t border-white/5" />
        <About />
        <div className="border-t border-white/5" />
        <Projects />
        <div className="border-t border-white/5" />
        <Contact />
      </main>
      <footer className="py-8 text-center text-gray-600 text-sm border-t border-white/5">
        © {new Date().getFullYear()} Steven Armenta
      </footer>
    </>
  );
}

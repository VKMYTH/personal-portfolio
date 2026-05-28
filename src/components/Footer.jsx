import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

function Footer() {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative px-6 py-10 border-t border-orange-500/10">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-sm text-orange-300/50">
          built with React + ☕ by Vaibhav Kolli · 2026
        </p>
        <button
          onClick={scrollTop}
          aria-label="Back to top"
          className="group w-10 h-10 rounded-full border border-orange-500/30 bg-[#0a0612]/40 flex items-center justify-center hover:border-orange-400/70 hover:bg-orange-500/10 hover:scale-110 transition-all duration-300"
        >
          <ArrowUp className="w-4 h-4 text-orange-300 group-hover:text-orange-200" />
        </button>
      </div>
    </footer>
  );
}

export default Footer;
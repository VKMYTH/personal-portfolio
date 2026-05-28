import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "home", id: "home" },
  { label: "about", id: "about" },
  { label: "education", id: "education" },
  { label: "skills", id: "skills" },
  { label: "projects", id: "projects" },
  { label: "research", id: "research" },
  { label: "contact", id: "contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setOpen(false); // close mobile menu after clicking
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-auto"
    >
      <div className="hidden lg:flex items-center gap-1 px-2 py-2 rounded-full border border-orange-500/20 bg-[#0a0612]/60 backdrop-blur-xl shadow-[0_0_30px_rgba(255,122,0,0.15)]">
        {links.map((link) => (
          <button
            key={link.id}
            onClick={() => scrollTo(link.id)}
            className="px-4 py-1.5 rounded-full font-mono text-sm text-orange-100/70 hover:text-orange-300 hover:bg-orange-500/10 transition-all duration-300"
          >
            {link.label}
          </button>
        ))}
      </div>

      <div className="lg:hidden flex flex-col items-end">
        <button
          onClick={() => setOpen(!open)}
          className="p-3 rounded-full border border-orange-500/20 bg-[#0a0612]/70 backdrop-blur-xl shadow-[0_0_30px_rgba(255,122,0,0.15)] text-orange-300"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -10 }}
              transition={{ duration: 0.2 }}
              className="mt-2 flex flex-col gap-1 p-2 rounded-2xl border border-orange-500/20 bg-[#0a0612]/90 backdrop-blur-xl shadow-[0_0_30px_rgba(255,122,0,0.2)] min-w-[160px]"
            >
              {links.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="px-4 py-2.5 rounded-xl font-mono text-sm text-orange-100/70 hover:text-orange-300 hover:bg-orange-500/10 transition-all duration-300 text-right"
                >
                  {link.label}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}

export default Navbar;
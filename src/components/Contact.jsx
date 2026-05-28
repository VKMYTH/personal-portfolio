import { motion } from "framer-motion";
import { Briefcase, Mail, Download, GitFork, ExternalLink } from "lucide-react";

const socials = [
  {
    label: "LinkedIn",
    icon: Briefcase,
    href: "https://www.linkedin.com/in/vaibhav-kolli/",
  },
  {
    label: "GitHub",
    icon: GitFork,
    href: "https://github.com/VKMYTH",
  },
  {
    label: "Email",
    icon: Mail,
    href: "mailto:kollivaibhav1@gmail.com",
  },
];

function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center px-6 py-24"
    >
      <div className="max-w-3xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="font-mono text-sm text-orange-400/80 tracking-[0.3em] uppercase mb-4"
        >
          &gt; ./connect.sh
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-black mb-6"
          style={{
            backgroundImage:
              "linear-gradient(135deg, #ffd9a3 0%, #ff7a00 50%, #ff4500 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Let's build
          <br />
          something.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-orange-100/70 text-lg mb-10 max-w-xl mx-auto"
        >
          Open to internships, collaborations, or just a conversation about
          code. My inbox is always open.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://docs.google.com/document/d/1YCYkb81ejW9-9hVmh0ZSwT2__DoZ7DzU8tWmnF_NxWQ/export?format=pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-mono font-bold text-[#0a0612] bg-gradient-to-r from-orange-400 to-amber-400 hover:shadow-[0_0_40px_rgba(255,122,0,0.6)] hover:scale-105 transition-all duration-300"
          >
            <Download className="w-5 h-5" />
            download resume
          </a>

          <a
            href="https://docs.google.com/document/d/1YCYkb81ejW9-9hVmh0ZSwT2__DoZ7DzU8tWmnF_NxWQ/view"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-mono font-bold border border-orange-400/40 text-orange-200 hover:bg-orange-500/10 hover:border-orange-400/70 hover:shadow-[0_0_30px_rgba(255,122,0,0.3)] hover:scale-105 transition-all duration-300"
          >
            <ExternalLink className="w-5 h-5" />
            view online
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center justify-center gap-4"
        >
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="group w-14 h-14 rounded-full border border-orange-500/30 bg-[#0a0612]/40 backdrop-blur-md flex items-center justify-center hover:border-orange-400/70 hover:bg-orange-500/10 hover:shadow-[0_0_25px_rgba(255,122,0,0.4)] hover:scale-110 transition-all duration-300"
              >
                <Icon className="w-6 h-6 text-orange-300 group-hover:text-orange-200 transition-colors duration-300" />
              </a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
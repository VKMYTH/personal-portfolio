import { motion } from "framer-motion";
import { GitFork, ExternalLink, Folder } from "lucide-react";
const projects = [
    {
        title: "Storm Shield",
        blurb:
          "When a disaster hits, tons of people want to help but have no idea where they're actually needed. Storm Shield uses geolocation to match volunteers with nearby relief operations in real time. A few friends and I built it end to end in React Native and Supabase, and it went on to win the U.S. Congressional App Challenge.",
        tech: ["React Native", "Supabase", "OpenAI API"],
        image: "/storm_shield.png",
        github: "https://github.com/sinarck/storm-shield",
        live: "https://www.congressionalappchallenge.us/24-tx03/",
        featured: true,
      },
    {
      title: "YouthWell — AI Mental Health Application",
      blurb:
        "Mental health support is hard to reach exactly when people need it most. This app uses AI to make that first step lower-stakes and more accessible. I built it in a weekend at the Code4Hope Hackathon, where it placed top 10 out of nearly 190 teams.",
      tech: ["AI/ML", "React", "Hackathon"],
      image: "/youthwell.png",
      github: "https://github.com/VKMYTH/YouthWell",
      live: "https://vkmyth.github.io/YouthWell/",
      featured: false,
    },
  ];

function Projects() {
  return (
    <section
      id="projects"
      className="relative min-h-screen flex items-center justify-center px-6 py-24"
    >
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="font-mono text-sm text-orange-400/80 tracking-[0.3em] uppercase mb-2">
            &gt; ls ./projects
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-orange-50">
            Projects
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className={`group relative rounded-2xl border bg-[#0a0612]/40 backdrop-blur-md p-7 transition-all duration-300 ${
                project.featured
                  ? "border-orange-400/40 shadow-[0_0_30px_rgba(255,122,0,0.15)] md:col-span-2"
                  : "border-orange-500/20"
              } hover:border-orange-400/60 hover:shadow-[0_0_40px_rgba(255,122,0,0.25)]`}
            >
              <div className="relative -m-7 mb-5 h-56 md:h-80 overflow-hidden rounded-t-2xl border-b border-orange-500/20 bg-[radial-gradient(ellipse_at_center,_rgba(255,122,0,0.15),_#0a0612)]">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-orange-500/15 via-amber-600/10 to-[#0a0612] flex items-center justify-center">
                    <span className="font-mono text-sm text-orange-300/40">
                      [ {project.title} preview ]
                    </span>
                  </div>
                )}
              </div>

              {project.featured && (
                <span className="absolute -top-3 left-7 px-3 py-1 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 font-mono text-xs font-bold text-[#0a0612]">
                  featured
                </span>
              )}

              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center group-hover:bg-orange-500/20 group-hover:shadow-[0_0_20px_rgba(255,122,0,0.4)] transition-all duration-300">
                  <Folder className="w-6 h-6 text-orange-400" />
                </div>
                <div className="flex gap-3">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-orange-300/60 hover:text-orange-300 hover:scale-110 transition-all duration-200" aria-label="GitHub repository">
                    <GitFork className="w-5 h-5" />
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-orange-300/60 hover:text-orange-300 hover:scale-110 transition-all duration-200" aria-label="Live demo">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-orange-50 mb-3 group-hover:text-orange-200 transition-colors duration-300">
                {project.title}
              </h3>

              <p className="text-orange-100/70 leading-relaxed mb-6">
                {project.blurb}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-lg bg-orange-500/5 border border-orange-500/15 font-mono text-xs text-orange-200/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
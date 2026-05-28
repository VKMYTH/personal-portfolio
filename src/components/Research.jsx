import { motion } from "framer-motion";
import { FlaskConical, Cpu, Brain } from "lucide-react";

const experiences = [
    {
      icon: FlaskConical,
      role: "Computational Materials Researcher",
      org: "UT Austin — High School Research Academy",
      date: "Jun — Jul 2025",
      detail:
        "Selected for UT Austin's High School Research Academy to work alongside undergraduate mentors and Professor Wenrui Chai on a computational materials project studying furfural hydrogenation, with a publication currently pending. I ran atomic-scale simulations of material structures using VASP and applied Density Functional Theory to model material stability and optimize atomic interactions. A big part of the work was learning to debug and tune simulation parameters for accuracy and reproducibility in a high-compute environment, then translating the results into a formal research poster I presented at the end of the program.",
      tags: ["VASP", "DFT", "Simulation"],
    },
    {
      icon: Cpu,
      role: "Algorithms Researcher",
      org: "UT Dallas — Advanced Competitive Programming",
      date: "Jun — Jul 2024",
      detail:
        "Joined an advanced competitive programming workshop and research program under Dr. Chitturi Badrachalam, diving into algorithmic strategies like dynamic programming, number theory, and combinatorics. I competed in algorithm contests modeled on IOI and ICPC formats, took part in group code reviews focused on time-complexity optimization, and mentored peers through recursive patterns and constructive proofs in algorithm design. I came out of it a much sharper problem solver, especially when it comes to efficiency and clean reasoning.",
      tags: ["Algorithms", "Dynamic Programming", "Complexity"],
    },
  ];

function Research() {
  return (
    <section
      id="research"
      className="relative min-h-screen flex items-center justify-center px-6 py-24"
    >
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="font-mono text-sm text-orange-400/80 tracking-[0.3em] uppercase mb-2">
            &gt; cat experience.log
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-orange-50">
            Research &amp; Experience
          </h2>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -4 }}
                className="group rounded-2xl border border-orange-500/20 bg-[#0a0612]/40 backdrop-blur-md p-6 hover:border-orange-400/50 hover:shadow-[0_0_30px_rgba(255,122,0,0.2)] transition-all duration-300"
              >
                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center group-hover:bg-orange-500/20 group-hover:shadow-[0_0_20px_rgba(255,122,0,0.4)] transition-all duration-300">
                    <Icon className="w-6 h-6 text-orange-400" />
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                      <h3 className="text-xl font-bold text-orange-50">
                        {exp.role}
                      </h3>
                      <span className="font-mono text-sm text-orange-400/70">
                        {exp.date}
                      </span>
                    </div>
                    <div className="text-orange-200 font-medium mb-3">
                      {exp.org}
                    </div>
                    <p className="text-orange-100/70 leading-relaxed mb-4">
                      {exp.detail}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-lg bg-orange-500/5 border border-orange-500/15 font-mono text-xs text-orange-200/80"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Research;
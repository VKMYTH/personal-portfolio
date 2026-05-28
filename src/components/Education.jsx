import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const timeline = [
    {
      school: "The University of Texas at Austin",
      degree: "B.S. Computer Science",
      date: "2026 — 2030",
      detail:
        "Incoming freshman studying Computer Science. Excited to dive deeper into systems, AI, and building products that scale.",
      current: true,
    },
    {
      school: "Centennial High School",
      degree: "High School Diploma",
      date: "2022 — 2026",
      detail:
        "Weighted GPA 5.35/6.00, ranked 28/487. National AP Scholar with 18+ AP courses. USACO Gold Division, Congressional App Challenge winner, and Tournament of Champions debater (top 0.1% nationally).",
      current: false,
    },
  ];

function Education() {
  return (
    <section
      id="education"
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
            &gt; education --list
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-orange-50">
            Education
          </h2>
        </motion.div>

        <div className="relative">
          <div
            className="absolute left-[19px] md:left-[27px] top-2 bottom-2 w-px"
            style={{
              background:
                "linear-gradient(180deg, transparent, #ff7a00, #ff7a00, transparent)",
            }}
          />

          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative flex gap-6 mb-12 last:mb-0"
            >
              <div className="relative z-10 flex-shrink-0">
                <div
                  className={`w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center border ${
                    item.current
                      ? "border-orange-400 bg-orange-500/20 shadow-[0_0_25px_rgba(255,122,0,0.5)]"
                      : "border-orange-500/30 bg-[#0a0612]"
                  }`}
                >
                  <GraduationCap
                    className={`w-5 h-5 md:w-6 md:h-6 ${
                      item.current ? "text-orange-300" : "text-orange-400/60"
                    }`}
                  />
                </div>
              </div>

              <div className="flex-1 rounded-2xl border border-orange-500/20 bg-[#0a0612]/40 backdrop-blur-md p-6">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="text-xl md:text-2xl font-bold text-orange-50">
                    {item.school}
                  </h3>
                  {item.current && (
                    <span className="px-3 py-0.5 rounded-full bg-orange-500/20 border border-orange-400/30 font-mono text-xs text-orange-300">
                      current
                    </span>
                  )}
                </div>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-4">
                  <span className="text-orange-200 font-medium">
                    {item.degree}
                  </span>
                  <span className="font-mono text-sm text-orange-400/70">
                    {item.date}
                  </span>
                </div>
                <p className="text-orange-100/70 leading-relaxed">
                  {item.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
import { motion } from "framer-motion";
import { Code2, Layers, Wrench, Users } from "lucide-react";

const categories = [
    {
      title: "Languages",
      icon: Code2,
      skills: [
        { name: "Java", level: 3 },
        { name: "Python", level: 3 },
        { name: "Swift", level: 3 },
        { name: "JavaScript", level: 2 },
        { name: "C#", level: 2 },
        { name: "HTML/CSS", level: 3 },
      ],
    },
    {
      title: "Frameworks & Libraries",
      icon: Layers,
      skills: [
        { name: "React Native", level: 3 },
        { name: "React", level: 3 },
      ],
    },
    {
      title: "Tools & Software",
      icon: Wrench,
      skills: [
        { name: "Xcode", level: 3 },
        { name: "IntelliJ", level: 3 },
        { name: "Git", level: 2 },
        { name: "Unreal Engine", level: 2 },
      ],
    },
    {
      title: "Languages & Communication",
      icon: Users,
      skills: [
        { name: "English", level: 3 },
        { name: "Spanish", level: 2 },
        { name: "Telugu", level: 2 },
        { name: "Team Leadership", level: 3 },
      ],
    },
  ];

const levelLabels = { 1: "familiar", 2: "proficient", 3: "advanced" };

function Skills() {
  return (
    <section
      id="skills"
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
            &gt; cat skills.json
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-orange-50">
            Skills
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((cat, index) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -6 }}
                className="group relative rounded-2xl border border-orange-500/20 bg-[#0a0612]/40 backdrop-blur-md p-6 hover:border-orange-400/50 hover:shadow-[0_0_30px_rgba(255,122,0,0.2)] transition-all duration-300"
              >
                <span className="absolute top-3 left-3 w-3 h-3 border-t border-l border-orange-400/0 group-hover:border-orange-400/70 transition-all duration-300" />
                <span className="absolute top-3 right-3 w-3 h-3 border-t border-r border-orange-400/0 group-hover:border-orange-400/70 transition-all duration-300" />
                <span className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-orange-400/0 group-hover:border-orange-400/70 transition-all duration-300" />
                <span className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-orange-400/0 group-hover:border-orange-400/70 transition-all duration-300" />

                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 3 + index,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-5 group-hover:bg-orange-500/20 group-hover:shadow-[0_0_20px_rgba(255,122,0,0.4)] transition-all duration-300"
                >
                  <Icon className="w-6 h-6 text-orange-400" />
                </motion.div>

                <h3 className="text-lg font-bold text-orange-50 mb-5">
                  {cat.title}
                </h3>

                <div className="space-y-4">
                  {cat.skills.map((skill, sIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.15 + sIndex * 0.08,
                      }}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-mono text-sm text-orange-100/90">
                          {skill.name}
                        </span>
                        <span className="font-mono text-[10px] uppercase tracking-wider text-orange-400/60">
                          {levelLabels[skill.level]}
                        </span>
                      </div>
                      <div className="h-1.5 rounded-full bg-orange-500/10 overflow-hidden">
                        
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${(skill.level / 3) * 100}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.9,
                            delay: index * 0.15 + sIndex * 0.08 + 0.2,
                            ease: "easeOut",
                          }}
                          className="h-full rounded-full"
                          style={{
                            background:
                              "linear-gradient(90deg, #ff4500, #ff7a00, #ffb800)",
                            boxShadow: "0 0 10px rgba(255, 122, 0, 0.5)",
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
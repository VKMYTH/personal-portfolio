import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center px-6 py-24"
    >
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="font-mono text-sm text-orange-400/80 tracking-[0.3em] uppercase mb-2">
            &gt; whoami
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-orange-50">
            About
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-[1fr_1.5fr] gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mx-auto md:mx-0"
          >
            <div className="relative w-64 h-64 md:w-full md:h-auto md:aspect-square rounded-2xl overflow-hidden border border-orange-500/30 shadow-[0_0_40px_rgba(255,122,0,0.2)]">
              <img
                src="/headshot.png"
                alt="Vaibhav Kolli"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -inset-2 -z-10 rounded-2xl bg-orange-500/10 blur-2xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="rounded-2xl border border-orange-500/20 bg-[#0a0612]/40 backdrop-blur-md p-8"
          >
            <p className="text-orange-50/90 text-lg leading-relaxed mb-6">
              I'm heading into CS at UT Austin still figuring out exactly where
              I want to take it, and I think that's the fun part. Right now I
              just want to learn as much as I can and try things I haven't yet.
              When I'm not coding, you'll usually find me playing basketball, out on a
              hike, or planning my next trip around wherever has the
              best food.
            </p>
            <p className="text-orange-100/70 leading-relaxed mb-8">
              Outside of code, I spent four years in competitive debate (peaked
              top 0.1% nationally), co-authored a #1 Amazon bestseller in the
              Public Policy category, and love working with to create impact. Now I'm excited to see what I can build next.
            </p>

            <div className="grid grid-cols-2 gap-4">
            {[
                { label: "school", value: "UT Austin" },
                { label: "major", value: "Computer Science" },
                { label: "based in", value: "Frisco, TX" },
                { label: "status", value: "Incoming Freshman" },
              ].map((fact) => (
                <div
                  key={fact.label}
                  className="rounded-xl border border-orange-500/10 bg-orange-500/5 p-4"
                >
                  <div className="font-mono text-xs text-orange-400/70 uppercase tracking-wider mb-1">
                    {fact.label}
                  </div>
                  <div className="text-orange-50 font-semibold">
                    {fact.value}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
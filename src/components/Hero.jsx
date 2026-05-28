import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ChevronDown } from "lucide-react";

function Hero() {
  const embers = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 10,
    duration: 8 + Math.random() * 12,
    size: 2 + Math.random() * 4,
  }));

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {embers.map((ember) => (
        <motion.div
          key={ember.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: `${ember.left}%`,
            bottom: "-10px",
            width: `${ember.size}px`,
            height: `${ember.size}px`,
            background: "#ffb347",
            boxShadow: "0 0 8px #ff7a00",
          }}
          animate={{
            y: [0, -1000],
            x: [0, Math.random() * 100 - 50],
            opacity: [0, 0.8, 0.8, 0],
          }}
          transition={{
            duration: ember.duration,
            delay: ember.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none scale-50 sm:scale-75 md:scale-100">
        <motion.div
          className="absolute rounded-full border border-orange-500/20"
          style={{ width: "700px", height: "700px" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-orange-400 shadow-[0_0_20px_#ff7a00]" />
        </motion.div>
        <motion.div
          className="absolute rounded-full border border-amber-400/15"
          style={{ width: "900px", height: "900px" }}
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-amber-300 shadow-[0_0_15px_#ffb800]" />
        </motion.div>
        <motion.div
          className="absolute rounded-full border border-orange-300/10"
          style={{ width: "1100px", height: "1100px" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-orange-200 shadow-[0_0_15px_#ffaa66]" />
        </motion.div>
      </div>

      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-mono text-sm tracking-[0.3em] text-orange-400/80 mb-6 uppercase"
        >
          &gt; Initializing portfolio_v1.0
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-7xl md:text-9xl font-black tracking-tight leading-none"
          style={{
            backgroundImage:
              "linear-gradient(135deg, #ffd9a3 0%, #ff7a00 50%, #ff4500 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            filter: "drop-shadow(0 0 30px rgba(255, 122, 0, 0.4))",
          }}
          whileHover={{
            filter: "drop-shadow(0 0 50px rgba(255, 122, 0, 0.8))",
            transition: { duration: 0.3 },
          }}
        >
          VAIBHAV
          <br />
          KOLLI
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="h-px w-48 mx-auto my-8"
          style={{
            background:
              "linear-gradient(90deg, transparent, #ff7a00, transparent)",
          }}
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="font-mono text-lg md:text-xl text-orange-100/90 h-8"
        >
          <span className="text-orange-400">$</span>{" "}
          <TypeAnimation
            sequence={[
              "cs @ ut austin",
              2000,
              "lifelong learner",
              2000,
              "hiking enthusiast",
              2000,
              "powered by good coffee",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            cursor={true}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="flex items-center justify-center gap-3 mt-10 flex-wrap"
        >
          <div className="px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/5 backdrop-blur-sm">
            <span className="font-mono text-xs text-orange-300 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              available for internships
            </span>
          </div>
          <div className="px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/5 backdrop-blur-sm">
            <span className="font-mono text-xs text-amber-300">
              📍 frisco, tx
            </span>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-xs text-orange-300/60 tracking-widest">
          SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-orange-400/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
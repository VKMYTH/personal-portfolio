import { motion } from "framer-motion";
import { useMemo } from "react";

function AmbientParticles() {
  // Generate particles once and memoize so they don't regenerate on every render
  const particles = useMemo(
    () =>
      Array.from({ length: 40 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 1.5 + Math.random() * 2.5,
        duration: 15 + Math.random() * 20,
        delay: Math.random() * 15,
        drift: Math.random() * 60 - 30,
      })),
    []
  );

  return (
    <div className="fixed inset-0 -z-[5] overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: "#ffaa55",
            boxShadow: "0 0 6px #ff7a00",
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, p.drift, 0],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export default AmbientParticles;
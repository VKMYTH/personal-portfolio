import { motion } from "framer-motion";

function SectionDivider() {
  return (
    <div className="relative w-full py-8 flex items-center justify-center pointer-events-none">
      {/* The horizon line */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="h-px w-full max-w-2xl"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(255, 122, 0, 0.6), rgba(255, 184, 0, 0.6), rgba(255, 122, 0, 0.6), transparent)",
          boxShadow: "0 0 12px rgba(255, 122, 0, 0.4)",
        }}
      />

      {/* Center glow node */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute w-2 h-2 rounded-full bg-orange-400"
        style={{
          boxShadow: "0 0 20px rgba(255, 122, 0, 1), 0 0 40px rgba(255, 122, 0, 0.5)",
        }}
      />
    </div>
  );
}

export default SectionDivider;
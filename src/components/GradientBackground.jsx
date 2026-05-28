import { motion } from "framer-motion";

function GradientBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#0a0612]">
      <motion.div
        className="absolute rounded-full blur-[120px]"
        style={{
          background: "#ff4500",
          width: "700px",
          height: "700px",
          top: "-15%",
          left: "-15%",
        }}
        animate={{
          x: [0, 80, -40, 0],
          y: [0, 120, 40, 0],
          scale: [1, 1.15, 0.95, 1],
          opacity: [0.55, 0.45, 0.6, 0.55],
        }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute rounded-full blur-[110px]"
        style={{
          background: "#ff7a00",
          width: "500px",
          height: "500px",
          top: "20%",
          right: "-10%",
        }}
        animate={{
          x: [0, -120, 80, 0],
          y: [0, 100, -80, 0],
          scale: [1, 0.85, 1.2, 1],
          opacity: [0.6, 0.7, 0.5, 0.6],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute rounded-full blur-[90px]"
        style={{
          background: "#ffb800",
          width: "400px",
          height: "400px",
          bottom: "10%",
          left: "20%",
        }}
        animate={{
          x: [0, 150, -80, 0],
          y: [0, -100, 80, 0],
          scale: [1, 1.1, 0.9, 1],
          opacity: [0.45, 0.55, 0.4, 0.45],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute rounded-full blur-[80px]"
        style={{
          background: "#ffaa66",
          width: "350px",
          height: "350px",
          top: "5%",
          right: "20%",
        }}
        animate={{
          x: [0, -60, 90, 0],
          y: [0, 80, 40, 0],
          scale: [1, 1.2, 0.95, 1],
          opacity: [0.4, 0.5, 0.35, 0.4],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      <div
        className="absolute inset-0 opacity-[0.1]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 140, 30, 0.6) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 140, 30, 0.6) 1px, transparent 1px)
          `,
          backgroundSize: "44px 44px",
          maskImage: "radial-gradient(ellipse at center, black 0%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 0%, transparent 80%)",
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(255, 140, 30, 0.4) 0px, rgba(255, 140, 30, 0.4) 1px, transparent 1px, transparent 3px)",
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 30%, rgba(10, 6, 18, 0.85) 100%)",
        }}
      />
    </div>
  );
}

export default GradientBackground;
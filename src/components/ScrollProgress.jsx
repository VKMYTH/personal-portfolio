import { motion, useScroll, useSpring } from "framer-motion";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  // Smooth out the bar's motion with a spring so it doesn't snap
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] z-[60] origin-left"
      style={{
        scaleX,
        background:
          "linear-gradient(90deg, #ff4500, #ff7a00, #ffb800, #ff7a00, #ff4500)",
        boxShadow: "0 0 12px rgba(255, 122, 0, 0.8)",
      }}
    />
  );
}

export default ScrollProgress;
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function GlowEffect() {
  const [isMounted, setIsMounted] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const glowX = useSpring(mouseX, springConfig);
  const glowY = useSpring(mouseY, springConfig);

  useEffect(() => {
    setIsMounted(true);
    
    // Check if device supports mouse hover
    const mediaQuery = window.matchMedia("(pointer: coarse)");
    if (mediaQuery.matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 175); // Half of glow width (350px)
      mouseY.set(e.clientY - 175);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  if (!isMounted) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-30 overflow-hidden">
      {/* Immersive UI Gradient Orbs */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Primary Electric Blue Mouse Glow */}
      <motion.div
        className="absolute h-[350px] w-[350px] rounded-full bg-blue-600/8 mix-blend-screen opacity-70 blur-[100px] hidden md:block"
        style={{
          x: glowX,
          y: glowY,
        }}
      />
      {/* Secondary Pulse Purple Mouse Glow */}
      <motion.div
        className="absolute h-[280px] w-[280px] rounded-full bg-purple-600/8 mix-blend-screen opacity-50 blur-[90px] hidden md:block"
        style={{
          x: glowX,
          y: glowY,
        }}
        animate={{
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}

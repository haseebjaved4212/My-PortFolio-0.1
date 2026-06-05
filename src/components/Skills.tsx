/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";

const row1Skills = [
  "React.js",
  "TypeScript",
  "GSAP",
  "HTML5",
  "Python",
  "C#",
  "FastAPI",
  "Git",
  "Docker",
  "CI/CD",
  "n8n",
  "AI/ML Fundamentals",
  "TCP/IP Protocol Suite",
  "DNS Fundamentals"
];

const row2Skills = [
  "Next.js",
  "JavaScript",
  "Three.js",
  "CSS3",
  "ASP.NET",
  "Django",
  "Flask",
  "GitHub",
  "Linux",
  "AI Automation",
  "Prompt Engineering",
  "Computer Networking",
  "HTTP/HTTPS"
];

interface MarqueeRowProps {
  skills: string[];
  duration: number;
}

function MarqueeRow({ skills, duration }: MarqueeRowProps) {
  // Triple the skills to make sure there are absolutely no gaps at the edges on wide monitors
  const tripledSkills = [...skills, ...skills, ...skills];

  return (
    <div className="flex overflow-hidden w-full select-none py-3 relative">
      {/* Soft gradient masks on left & right edges for smooth fading entry/exit */}
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

      <motion.div
        animate={{ x: ["0%", "-33.333%"] }}
        transition={{
          ease: "linear",
          duration: duration,
          repeat: Infinity,
        }}
        className="flex gap-4 md:gap-6 whitespace-nowrap min-w-max pr-4 md:pr-6"
      >
        {tripledSkills.map((skill, index) => (
          <div
            key={`${skill}-${index}`}
            className="flex items-center gap-3 px-6 py-4 rounded-2xl glass-panel border border-white/[0.04] text-white font-sans text-sm md:text-base font-semibold tracking-wide hover:border-blue-500/30 hover:bg-white/[0.08] transition-all duration-300"
          >
            {/* Pulsing indicator orb */}
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(37,99,235,0.7)] animate-pulse" />
            <span>{skill}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function Skills() {
  return (
    <section 
      id="skills" 
      className="py-24 md:py-32 w-full bg-[#050505] relative overflow-hidden"
    >
      {/* Background radial highlight */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-center pointer-events-none opacity-20">
        <div className="w-[600px] h-[300px] bg-blue-600/10 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Animated Header */}
        <div className="flex flex-col gap-3 mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 text-xs font-mono tracking-widest text-blue-500 uppercase"
          >
            <span className="w-6 h-[1px] bg-blue-500" />
            <span>02 // SKILLS HUD</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl md:text-5xl font-display font-extrabold text-white tracking-tight leading-none"
          >
            A Core Engine Built for<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-300 to-purple-500">
              Modern Performance
            </span>
          </motion.h2>
        </div>

        {/* Marquee Animation Containers */}
        <div className="flex flex-col gap-4 md:gap-6 mt-8">
          <MarqueeRow skills={row1Skills} duration={25} />
          <MarqueeRow skills={row2Skills} duration={28} />
        </div>

      </div>
    </section>
  );
}

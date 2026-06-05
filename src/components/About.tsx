/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Cpu, Layers, Globe, CheckCircle } from "lucide-react";

interface Highlight {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

const highlights: Highlight[] = [
  {
    icon: <Cpu className="text-electric-blue w-5 h-5" />,
    title: "AI & Automation",
    desc: "Plugging intelligent llms and agentic networks into live client workflows."
  },
  {
    icon: <Layers className="text-electric-purple w-5 h-5" />,
    title: "Full Stack Mastery",
    desc: "Architecting balanced systems from React/Next.js up to robust .NET/Python backends."
  },
  {
    icon: <Globe className="text-emerald-400 w-5 h-5" />,
    title: "Networking & DevOps",
    desc: "Rigging reliable pipelines with TCP/IP expertise, Docker, and containerized deployments."
  }
];

const philosophyPoints = [
  "Scalable, clean-code architecture",
  "User-first performance optimization",
  "Continuous micro-innovation loops",
  "Cross-discipline technology pairing"
];

export default function About() {
  return (
    <section 
      id="about" 
      className="py-24 md:py-32 w-full bg-[#050505] relative overflow-hidden"
    >
      {/* Background Grids and Accents */}
      <div className="absolute inset-0 pointer-events-none opacity-30 select-none">
        <div className="absolute -top-[10%] -left-[10%] w-[35vw] h-[35vw] bg-purple-600/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] -right-[15%] w-[40vw] h-[40vw] bg-blue-600/5 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Animated Section Header */}
        <div className="flex flex-col gap-3 mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 text-xs font-mono tracking-widest text-blue-500 uppercase"
          >
            <span className="w-6 h-[1px] bg-blue-500" />
            <span>01 // WHO IS HASEEB</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl md:text-5xl font-display font-extrabold text-white tracking-tight leading-none"
          >
            Crafting the Future of Web<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue via-indigo-300 to-electric-purple">
              and Agentic Solutions
            </span>
          </motion.h2>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
          
          {/* Main Narrative Card: Large Column (7/12 width) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 glass-panel rounded-3xl p-8 md:p-10 flex flex-col justify-between border-white/[0.04] shadow-2xl relative overflow-hidden group hover:border-blue-500/20 transition-all duration-500"
          >
            {/* Soft decorative light strip */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-electric-blue/20 to-transparent" />
            
            <div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-6 tracking-wide uppercase font-mono text-zinc-400">
                // EXECUTIVE SUMMARY
              </h3>
              <p className="text-zinc-300 text-sm md:text-base leading-relaxed md:leading-loose mb-6">
                Passionate Software Engineer with expertise in modern web development, backend systems, and AI-powered solutions. Experienced in building responsive applications using React.js, Next.js, TypeScript, Python, and .NET technologies. 
              </p>
              <p className="text-zinc-300 text-sm md:text-base leading-relaxed md:leading-loose">
                Strong foundation in DevOps practices, Computer Networking, Git workflows, and AI Automation. Focused on creating scalable, user-centric applications while continuously exploring emerging technologies in AI and cloud-native development.
              </p>
            </div>

            {/* Quick Micro-stats section inside narrative */}
            <div className="grid grid-cols-2 gap-4 mt-12 pt-8 border-t border-white/5">
              <div>
                <p className="text-3xl md:text-4xl font-extrabold text-white text-glow-blue leading-none">
                  03<span className="text-electric-blue font-light">+</span>
                </p>
                <p className="text-[11px] font-mono tracking-wider text-zinc-500 mt-2 uppercase">Years of Fluid Practice</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-extrabold text-white text-glow-purple leading-none">
                  100<span className="text-electric-purple font-light">%</span>
                </p>
                <p className="text-[11px] font-mono tracking-wider text-zinc-500 mt-2 uppercase">Automation Oriented</p>
              </div>
            </div>
          </motion.div>

          {/* Right Bento Column: Split/Interactive (5/12 width) */}
          <div className="lg:col-span-5 flex flex-col gap-6 md:gap-8">
            
            {/* Core Values Stack */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="glass-panel rounded-3xl p-8 flex-1 border-white/[0.04] relative group hover:border-[#7C3AED]/20 transition-all duration-500"
            >
              <h3 className="text-sm font-mono tracking-wider text-zinc-400 mb-6 uppercase">// KEY FOCUS AREAS</h3>
              <div className="flex flex-col gap-6">
                {highlights.map((h, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="p-3 bg-white/[0.03] border border-white/[0.05] rounded-xl shrink-0">
                      {h.icon}
                    </div>
                    <div>
                      <h4 className="text-white text-sm font-semibold tracking-wide mb-1">{h.title}</h4>
                      <p className="text-zinc-400 text-xs md:text-sm leading-normal">{h.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Philosophy checklist block */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="glass-panel rounded-3xl p-8 border-white/[0.04]"
            >
              <h3 className="text-sm font-mono tracking-wider text-zinc-400 mb-5 uppercase">// QUALITY ASSURANCE</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {philosophyPoints.map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs md:text-sm text-zinc-300">
                    <CheckCircle className="text-electric-blue w-4 h-4 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}

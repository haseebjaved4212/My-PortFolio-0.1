/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useRef, MouseEvent } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "motion/react";
import { Github, ExternalLink } from "lucide-react";
import { Project } from "../types";

// @ts-ignore
import imgImageEnhancer from "../assets/images/ui_ai_image_enhancer_1780641027717.png";
// @ts-ignore
import imgEcommerce from "../assets/images/ui_fashique_ecommerce_1780641047709.png";
// @ts-ignore
import imgMacOsPortfolio from "../assets/images/ui_macos_portfolio_1780641069986.png";

const projectsData: Project[] = [
  {
    id: "proj-1",
    title: "AI Powered Image Enhancer",
    description: "AI-powered image enhancement application with a modern user interface and intelligent image processing capabilities.",
    tech: ["Next.js", "Python", "Tailwind CSS", "AI Canvas", "FastAPI"],
    github: "https://github.com/haseebjaved4212/AI-Powered-Image-Enhancer",
    demo: "https://haseebjaved4212.github.io/AI-Powered-Image-Enhancer/",
    image: imgImageEnhancer
  },
  {
    id: "proj-2",
    title: "FashiQue",
    description: "Modern e-commerce platform featuring responsive design, smooth user experience, and optimized frontend architecture.",
    tech: ["React.js", "Tailwind CSS", "GSAP", "State Managers", "Vite"],
    github: "https://github.com/haseebjaved4212/FashiQue",
    demo: "https://fashi-que.vercel.app/",
    image: imgEcommerce
  },
  {
    id: "proj-3",
    title: "MacOS Styled Portfolio",
    description: "Interactive macOS-inspired portfolio experience showcasing advanced animations and immersive UI design.",
    tech: ["React.js", "Three.js", "GSAP", "CSS Desktop Grid", "Framer Motion"],
    github: "https://github.com/haseebjaved4212/My-MacOs-Portfolio",
    demo: "https://my-mac-os-portfolio-xi.vercel.app/",
    image: imgMacOsPortfolio
  }
];

// Interactive 3D Card Tilt Component with Mouse Coordinates Tracking
function PremiumTiltCard({ project }: { project: Project }) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs to avoid jittery movements
  const xSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const ySpring = useSpring(y, { stiffness: 150, damping: 20 });

  // Range controls: Higher divisor = gentler tilt range
  const transform = useMotionTemplate`perspective(1000px) rotateX(${xSpring}deg) rotateY(${ySpring}deg) scale(1.02)`;

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Position of hover cursor relative to element
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Convert to percentage values from -0.5 to 0.5
    const xPct = (mouseX / width) - 0.5;
    const yPct = (mouseY / height) - 0.5;

    // Compute degree rotation (up to 16 degrees max rotation)
    y.set(xPct * 16); 
    x.set(yPct * -16);
  };

  const handleMouseLeave = () => {
    // Reset cards flat
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform }}
      className="group transform-gpu relative flex flex-col h-full rounded-3xl glass-panel overflow-hidden hover:border-blue-500/40 hover:shadow-[0_15px_40px_rgba(37,99,255,0.12)] transition-all duration-300 select-none cursor-pointer"
    >
      {/* 3D Sheen Overlays */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-tr from-white/[0.02] via-transparent to-white/[0.01]" />
      
      {/* Top Graphic Visual Screen container */}
      <div className="relative aspect-video w-full overflow-hidden bg-zinc-950 border-b border-white/5">
        <img
          src={project.image}
          alt={project.title}
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
        />
        {/* Soft edge masks */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
      </div>

      {/* Floating Card Tech Tags */}
      <div className="p-8 flex flex-col flex-grow justify-between relative z-20">
        <div>
          {/* Tech cluster */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tag) => (
              <span 
                key={tag} 
                className="px-3 py-1 text-[10px] bg-blue-500/10 border border-blue-500/20 text-blue-300 rounded-full uppercase font-bold tracking-wider"
              >
                {tag}
              </span>
            ))}
          </div>

          <h3 className="text-xl font-bold text-white mb-3 tracking-wide tracking-tight">
            {project.title}
          </h3>
          
          <p className="text-zinc-400 text-xs md:text-sm leading-relaxed mb-6 font-medium">
            {project.description}
          </p>
        </div>

        {/* Dynamic Launch Controls */}
        <div className="flex gap-4 items-center pt-4 border-t border-white/5">
          {/* GitHub action */}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-zinc-400 hover:text-white text-xs font-mono tracking-wider font-semibold uppercase transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>

          {/* Spacer */}
          <span className="w-1 h-1 rounded-full bg-zinc-700" />

          {/* Demo Action */}
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-400 hover:text-blue-300 text-xs font-mono tracking-wider font-semibold uppercase transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Live Demo</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section 
      id="projects" 
      className="py-24 md:py-32 w-full bg-[#050505] relative overflow-hidden"
    >
      {/* Background visual helpers */}
      <div className="absolute bottom-0 right-[15%] w-[450px] h-[450px] bg-purple-600/5 rounded-full blur-[110px] pointer-events-none" />

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
            <span>03 // PORTFOLIO ENTRIES</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl md:text-5xl font-display font-extrabold text-white tracking-tight leading-none"
          >
            Selected Masterworks &<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-200 to-purple-500">
              Dynamic Productions
            </span>
          </motion.h2>
        </div>

        {/* Dynamic Project Grid (Staggered list) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
            >
              <PremiumTiltCard project={project} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

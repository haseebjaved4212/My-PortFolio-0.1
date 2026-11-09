/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef, useState, MouseEvent } from "react";
import { motion } from "motion/react";
import gsap from "gsap";
import { Download, ArrowRight, Terminal } from "lucide-react";

const roles = [
  "Software Engineer",
  "Full Stack Developer",
  "AI Automation Enthusiast"
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleLettersRef = useRef<(HTMLSpanElement | null)[]>([]);
  const fadeUpRef = useRef<(HTMLDivElement | null)[]>([]);
  
  // Custom typewriter implementation
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const roleText = roles[currentRoleIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting) {
      if (typedText.length < roleText.length) {
        timer = setTimeout(() => {
          setTypedText(roleText.substring(0, typedText.length + 1));
        }, 100);
      } else {
        // Pause at complete text before deleting
        timer = setTimeout(() => setIsDeleting(true), 2500);
      }
    } else {
      if (typedText.length > 0) {
        timer = setTimeout(() => {
          setTypedText(roleText.substring(0, typedText.length - 1));
        }, 50);
      } else {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, currentRoleIndex]);

  useEffect(() => {
    // GSAP mounting animations for name letters
    const filteredLetters = titleLettersRef.current.filter((el): el is HTMLSpanElement => el !== null);
    const filteredFadeUp = fadeUpRef.current.filter((el): el is HTMLDivElement => el !== null);

    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    tl.fromTo(
      filteredLetters,
      { y: 150, opacity: 0, rotateX: -60 },
      { y: 0, opacity: 1, rotateX: 0, duration: 1.2, stagger: 0.05, delay: 0.3 }
    );

    tl.fromTo(
      filteredFadeUp,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.15 },
      "-=0.6"
    );
  }, []);

  const handleScrollToProjects = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const nameString = "Haseeb Javed";

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-[#050505] text-white px-6 py-20"
    >
      {/* 1. Creative Ambient Background Gradients */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[10%] w-[45vw] h-[45vw] bg-blue-600/10 rounded-full blur-[140px] animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-[10%] right-[10%] w-[45vw] h-[45vw] bg-purple-600/10 rounded-full blur-[140px] animate-pulse" style={{ animationDuration: '12s' }} />
        <div className="absolute inset-0 ambient-grid opacity-65" />
      </div>

      {/* 2. Floating Particle Engine (Pure CSS/React lightweight canvas-like effect) */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        {[...Array(20)].map((_, i) => {
          const size = Math.random() * 4 + 2;
          const left = Math.random() * 100;
          const top = Math.random() * 100;
          const delay = Math.random() * 10;
          const duration = Math.random() * 20 + 20;

          return (
            <motion.div
              key={i}
              className="absolute bg-white/20 rounded-full"
              style={{
                width: size,
                height: size,
                left: `${left}%`,
                top: `${top}%`,
              }}
              animate={{
                y: [0, -120, 0],
                x: [0, Math.random() * 40 - 20, 0],
                opacity: [0.1, 0.8, 0.1],
              }}
              transition={{
                duration: duration,
                repeat: Infinity,
                delay: delay,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </div>

      {/* 3. Main Hero Core Container */}
      <div className="relative z-10 w-full max-w-5xl text-center flex flex-col items-center select-none">
        
        {/* Terminal Accent Badge */}
        <div 
          ref={(el) => { if(el) fadeUpRef.current[0] = el; }}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/3 border border-white/5 shadow-inner text-xs font-mono tracking-wider text-neutral-400 mb-8"
        >
          <Terminal className="text-blue-500 w-3.5 h-3.5 animate-pulse" />
          <span>PORTFOLIO_ENGINE_INIT // VERSION_2026</span>
        </div>

        {/* Cinematic Animated Large Name Header */}
        <h1 className="text-5xl md:text-8xl lg:text-9xl font-display font-extrabold tracking-tight mb-6 pointer-events-none flex flex-wrap justify-center items-center gap-x-4 overflow-hidden py-4">
          {nameString.split(" ").map((word, wordIndex) => (
            <span key={wordIndex} className="flex overflow-hidden">
              {word.split("").map((letter, letterIndex) => {
                const absoluteIndex = wordIndex * nameString.split(" ")[0].length + letterIndex;
                return (
                  <span
                    key={letterIndex}
                    ref={(el) => { titleLettersRef.current[absoluteIndex] = el; }}
                    className="inline-block origin-bottom transform-gpu bg-linear-to-br from-white via-white to-gray-500 bg-clip-text text-transparent"
                  >
                    {letter}
                  </span>
                );
              })}
            </span>
          ))}
        </h1>

        {/* Dynamic Interactive Typewriter Roles Subtitle */}
        <div 
          ref={(el) => { if (el) fadeUpRef.current[1] = el; }}
          className="h-8 mb-6 flex items-center justify-center font-mono text-sm md:text-xl font-semibold bg-clip-text text-transparent bg-linear-to-r from-blue-500 via-violet-300 to-purple-500 tracking-wide"
        >
          <span>{typedText}</span>
          <span className="w-1.5 h-5 bg-blue-500 ml-1 animate-ping" />
        </div>

        {/* Rich Engaging Introduction Block */}
        <div 
          ref={(el) => { if (el) fadeUpRef.current[2] = el; }}
          className="max-w-2xl text-center mb-12"
        >
          <p className="text-neutral-400 text-sm md:text-base leading-relaxed md:leading-loose">
            Building scalable web applications, AI-powered solutions, and immersive digital experiences. Beautifully blending visual performance with high-performance system backends.
          </p>
        </div>

        {/* Deluxe Interactive Magnetic CTAs style-aligned with Immersive theme */}
        <div 
          ref={(el) => { if (el) fadeUpRef.current[3] = el; }}
          className="flex flex-col sm:flex-row gap-5 justify-center items-center w-full max-w-md"
        >
          {/* Projects Button */}
          <a
            href="#projects"
            onClick={handleScrollToProjects}
            className="w-full sm:w-auto relative group flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-blue-600 text-white font-bold text-sm hover:scale-102 hover:bg-blue-500 transition-all duration-300 shadow-lg shadow-blue-500/20 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              View Projects <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>

          {/* Download CV Button */}
          <a
            href="/resume.pdf"
            download="Haseeb_Javed_Resume.pdf"
            className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-white/10 border border-white/10 hover:bg-white/15 text-white font-bold text-sm hover:scale-102 transition-all duration-300 backdrop-blur-sm shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] group"
          >
            <Download className="text-purple-400 w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            <span>Download CV</span>
          </a>
        </div>

      </div>

      {/* Creative scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6, y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 2.2 }}
        className="absolute bottom-8 z-10 flex flex-col items-center gap-1 cursor-pointer"
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
      >
        <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase">Scroll Down</span>
        <div className="w-5 h-8 rounded-full border border-neutral-600 flex justify-center p-1.5">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-1 rounded-full bg-white"
          />
        </div>
      </motion.div>
    </section>
  );
}

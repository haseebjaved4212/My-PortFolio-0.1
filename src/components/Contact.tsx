/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Copy, Check, Github, Linkedin, Instagram, Mail } from "lucide-react";

interface SocialItem {
  name: string;
  icon: React.ReactNode;
  url: string;
}

const socials: SocialItem[] = [
  {
    name: "GitHub",
    icon: <Github className="w-5 h-5" />,
    url: "https://github.com/haseebjaved4212",
  },
  {
    name: "LinkedIn",
    icon: <Linkedin className="w-5 h-5" />,
    url: "https://www.linkedin.com/in/haseeb-javed-0332b3341",
  },
  {
    name: "Instagram",
    icon: <Instagram className="w-5 h-5" />,
    url: "https://www.instagram.com/haseeb_javed4212",
  }
];

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const emailAddress = "contactimhaseeb@gmail.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopied(true);
      setShowToast(true);

      // Reset indicators
      setTimeout(() => {
        setCopied(false);
      }, 3000);

      setTimeout(() => {
        setShowToast(false);
      }, 4000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <section 
      id="contact" 
      className="py-24 md:py-32 w-full bg-[#050505] relative overflow-hidden flex flex-col justify-center items-center"
    >
      {/* Dynamic glow rings */}
      <div className="absolute inset-x-0 bottom-0 top-[20%] pointer-events-none select-none">
        <div className="absolute left-[20%] right-[20%] bottom-0 h-[300px] w-auto bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute left-[35%] right-[35%] bottom-0 h-[200px] w-auto bg-purple-600/10 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '6s' }} />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 w-full text-center">
        
        {/* Animated Section Header */}
        <div className="flex flex-col items-center gap-3 mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 text-xs font-mono tracking-widest text-blue-500 uppercase bg-white/[0.02] border border-white/5 px-4 py-1.5 rounded-full"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            <span>04 // SECURE COMMUNICATION</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-extrabold text-white tracking-tight leading-tight"
          >
            Let's Start Something<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-300 to-purple-500">
              Extremely Real.
            </span>
          </motion.h2>
        </div>

        {/* Central Communications Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-panel rounded-3xl p-8 md:p-12 border-white/[0.04] max-w-2xl mx-auto shadow-2xl relative overflow-hidden group hover:border-electric-blue/20 transition-all duration-500"
        >
          {/* Accent decoration */}
          <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-electric-blue/40 to-transparent" />
          
          <p className="text-zinc-400 text-xs md:text-sm font-mono tracking-widest uppercase mb-6">// DIRECT CONTACT INBOX</p>
          
          {/* Glass email container */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-5 bg-black/40 border border-white/5 p-4 md:p-5 rounded-2xl mb-8 group/mail">
            <div className="flex items-center gap-4">
              <span className="p-3 bg-white/[0.03] border border-white/[0.05] rounded-xl text-electric-blue group-hover/mail:text-white transition-colors duration-300 shrink-0">
                <Mail className="w-5 h-5" />
              </span>
              <span className="text-white font-mono font-medium text-xs md:text-sm select-all break-all">
                {emailAddress}
              </span>
            </div>

            {/* Premium Copy Button */}
            <button
              onClick={handleCopy}
              className={`w-full sm:w-auto relative overflow-hidden flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl font-semibold text-xs tracking-wider uppercase transition-all duration-300 pointer-events-auto border shrink-0 ${
                copied 
                  ? "bg-transparent border-emerald-400/40 text-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.1)]" 
                  : "bg-white text-black border-transparent hover:scale-102 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]"
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 scale-110" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy Email</span>
                </>
              )}
            </button>
          </div>

          <p className="text-zinc-400 text-xs md:text-sm leading-relaxed mb-8 select-none">
            Open for software architecture opportunities, AI pipelines consulting, clean-code full-stack system integrations, or general architectural brainstorming. Available worldwide.
          </p>

          {/* Social Icons Hub */}
          <div className="flex justify-center items-center gap-4 border-t border-white/5 pt-8">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="p-3.5 bg-white/[0.01] hover:bg-white/[0.04] border border-white/[0.04] hover:border-electric-blue/30 text-zinc-400 hover:text-white rounded-xl transition-all duration-300 hover:scale-105"
              >
                {social.icon}
              </a>
            ))}
          </div>

        </motion.div>

      </div>

      {/* Modern custom toast notification (Framer Motion) */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed bottom-8 z-40 flex items-center gap-3 px-5 py-4 rounded-2xl bg-[#09090E]/90 border border-emerald-500/25 blur-backdrop shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
          >
            <div className="p-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-lg">
              <Check className="w-4 h-4" />
            </div>
            <div className="text-left select-none">
              <p className="text-white text-xs font-bold font-mono uppercase tracking-wide">Action Successful</p>
              <p className="text-zinc-400 text-[11px] font-medium leading-none mt-1">contactimhaseeb@gmail.com copied to keyboard</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

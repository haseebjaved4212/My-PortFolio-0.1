/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Github, Linkedin, Instagram, ArrowUp } from "lucide-react";

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

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#050505] border-t border-white/5 py-12 relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Branding Logo */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <p className="text-white font-extrabold text-lg tracking-tighter">
            HJ<span className="text-blue-500">.</span>
          </p>
          <p className="text-zinc-500 text-[10px] font-mono mt-1 uppercase tracking-widest">// Personal Flagship v2.0</p>
        </div>

        {/* Copyright notice */}
        <div className="text-zinc-500 text-xs text-center md:text-left">
          <span>&copy; {currentYear} Haseeb Javed. All rights reserved.</span>
        </div>

        {/* Social interactions and back to top */}
        <div className="flex items-center gap-5">
          <div className="flex gap-4">
            {socials.map((e) => (
              <a
                key={e.name}
                href={e.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={e.name}
                className="text-zinc-500 hover:text-white transition-colors"
              >
                {e.icon}
              </a>
            ))}
          </div>

          <span className="w-[1px] h-4 bg-zinc-800" />

          {/* Magnetic back to top */}
          <button
            onClick={handleScrollToTop}
            aria-label="Back to top"
            className="p-2 border border-white/5 hover:border-electric-blue/35 bg-white/[0.01] hover:bg-white/[0.03] text-zinc-400 hover:text-white rounded-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const start = Date.now();
    const duration = 1600; // 1.6s loads completely

    const timer = setInterval(() => {
      const elapsed = Date.now() - start;
      const progress = Math.min(Math.floor((elapsed / duration) * 100), 100);
      setPercent(progress);

      if (progress >= 100) {
        clearInterval(timer);
        setTimeout(() => {
          onComplete();
        }, 300);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{ 
        y: "-100%",
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
      }}
      className="fixed inset-0 bg-[#020205] z-[9999] flex flex-col justify-center items-center pointer-events-auto select-none"
    >
      <div className="w-full max-w-sm px-8 flex flex-col gap-4 text-center">
        {/* Sleek Terminal indicator */}
        <div className="flex justify-between items-center font-mono text-[10px] tracking-wide text-zinc-500 uppercase">
          <span>// CORE_ENGINE_BOOT</span>
          <span>{percent}% COMPLETE</span>
        </div>

        {/* Master loading progress slider track */}
        <div className="h-[2px] w-full bg-white/[0.03] border border-white/[0.05] rounded-full overflow-hidden relative">
          <motion.div
            className="h-full bg-gradient-to-r from-electric-blue via-indigo-400 to-electric-purple rounded-full shadow-[0_0_8px_rgba(0,102,255,0.6)]"
            style={{ width: `${percent}%` }}
          />
        </div>

        {/* Branding name loader */}
        <div className="overflow-hidden h-7 mt-2">
          <motion.p 
            initial={{ y: 30 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white text-md font-mono font-semibold tracking-widest text-[#0066FF]"
          >
            HASEEB JAVED<span className="text-white">.</span>
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}

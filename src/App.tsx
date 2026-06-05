/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { AnimatePresence } from "motion/react";
import Preloader from "./components/Preloader";
import GlowEffect from "./components/GlowEffect";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {/* 1. Global Cinematic Preloader */}
      <AnimatePresence mode="wait">
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {/* 2. Main Site Structure */}
      {!loading && (
        <div className="relative min-h-screen w-full bg-[#050505] text-white overflow-x-hidden selection:bg-blue-600/30 selection:text-white">
          {/* Mouse follow backdrop ambient glow */}
          <GlowEffect />

          {/* Premium Floating Header */}
          <Navbar />

          {/* Core Visual Blocks */}
          <main className="relative z-10 w-full flex flex-col">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </main>

          {/* Minimal Elegant Footer */}
          <Footer />
        </div>
      )}
    </>
  );
}

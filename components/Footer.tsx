"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

const formatTime = () => new Date().toLocaleTimeString();

export default function Footer(): React.ReactElement {
  const [timeNow, setTimeNow] = useState("");

  useEffect(() => {
    const initialId = window.setTimeout(() => {
      setTimeNow(formatTime());
    }, 0);

    const intervalId = window.setInterval(() => {
      setTimeNow(formatTime());
    }, 1000);

    return () => {
      window.clearTimeout(initialId);
      window.clearInterval(intervalId);
    };
  }, []);

  return (
    <footer className="relative mx-auto pb-12 md:pb-0 lg:pb-0 xl:pb-0 max-w-330 bg-zinc-950 border-t border-zinc-800 text-zinc-300 overflow-hidden">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-20 py-5">
        <Link href="/contact" className="text-lg cursor-pointer hover:text-zinc-100 transition-colors">
          Reach out →
        </Link>
        <TextHoverEffect text="HASEEB" />
        <div className="text-lg">{timeNow}</div>
      </div>
    </footer>
  );
}

"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { homePageStyles, spotlightStyles } from "@/public/dummyStyles";
import { Spotlight } from "@/components/ui/spotlight";
import { Cover } from "@/components/ui/cover";
import { PointerHighlight } from "@/components/ui/pointer-highlight";

export default function HomePage(): React.ReactElement {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        console.log("Autoplay prevented");
      });
    }
  }, []);

  return (
    <div className={homePageStyles.container}>
      <div
        className={cn(
          homePageStyles.backgroundGrid.wrapper,
          homePageStyles.backgroundGrid.pattern
        )}
      />
      <Spotlight className={spotlightStyles.position} fill="#c0c0c0" />
      <div className={homePageStyles.gradientOverlay} />

      <section className={homePageStyles.heroSection}>
        <div className="relative">
          <h1 className={homePageStyles.h1}>
            Hey, I&apos;m{" "}
            <span className={homePageStyles.spanWithMargin}>
              <Cover>Haseeb</Cover>
            </span>
          </h1>

          <h2 className={homePageStyles.h2}>
            AI Product{" "}
            <span className={homePageStyles.spanInline}>
              <PointerHighlight>Engineer</PointerHighlight>
            </span>
          </h2>

          <div className="mb-6">
            <div className={homePageStyles.calloutCard.wrapper}>
              <div className={homePageStyles.calloutCard.innerContainer}>
                <div className={homePageStyles.calloutCard.textContainer}>
                  <svg
                    className={homePageStyles.calloutCard.icon}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  <div className={homePageStyles.calloutCard.text}>
                    Connect with me on X
                  </div>
                </div>
                <a
                  href="https://x.com/Haseebjaved4212"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow on X"
                  className={homePageStyles.calloutCard.button}
                >
                  Follow
                </a>
              </div>
            </div>
          </div>

          <p className={homePageStyles.paragraph}>
            I turn fuzzy ideas into live Products (<em>quickly</em>) — full-stack AI Builder. Currently working as a Founding Engineer at{" "}
            <a
              className={homePageStyles.link}
              href="https://invoicegenerator-frontend-tdng.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Invoice-AI
            </a>
            . I have built multiple products in past 5 years; raised $100K funding for my startup{" "}
            <a
              className={homePageStyles.link}
              href="https://github.com/haseebjaved4212"
              target="_blank"
              rel="noopener noreferrer"
            >
              hexagondigitalservices.com
            </a>
          </p>

          <article className={homePageStyles.article.wrapper}>
            <div className={homePageStyles.article.videoContainer}>
              <video
                ref={videoRef}
                className={homePageStyles.article.video}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                disablePictureInPicture
                disableRemotePlayback
                style={homePageStyles.article.videoStyles}
              >
                <source src="/homevideo.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>

            <div className={homePageStyles.article.content}>
              <div className={homePageStyles.article.header}>
                <svg
                  className={homePageStyles.article.headerIcon}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
                <span>Featured Work</span>
              </div>

              <h3 className={homePageStyles.article.title}>
                My 2025: shipping, signal, and a few uncomfortable rules
              </h3>

              <p className={homePageStyles.article.description}>
                A candid review of 2025 into 2026. The video above showcases some of the key projects and moments from my journey.
              </p>

              <div className={homePageStyles.article.linkContainer}>
                <Link href="/projects" className={homePageStyles.article.link}>
                  <span>See My Projects</span>
                  <svg
                    className={homePageStyles.article.linkIcon}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}

"use client";

import { Dictionary } from "@/lib/dictionary";
import Image from "next/image";
import { motion } from "framer-motion";

interface HeroProps {
  dict: Dictionary["hero"];
}

export default function Hero({ dict }: HeroProps) {
  return (
    <section id="home" className="hero section-shell">
      <div className="hero-grid">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <p className="eyebrow"><span className="eyebrow-dot" />{dict.portfolio}</p>
          <h1>{dict.title}<span>.</span></h1>
          <h2>{dict.subtitle}</h2>
          <p className="hero-description">{dict.description}</p>

          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              {dict.projectsCta}<span aria-hidden="true">↗</span>
            </a>
            <a className="button button-secondary" href={`mailto:${dict.email}`}>
              {dict.emailCta}
            </a>
          </div>

          <div className="hero-meta">
            <a href="https://www.linkedin.com/in/vincent-tran-94400/" target="_blank" rel="noopener noreferrer">
              LinkedIn <span aria-hidden="true">↗</span>
            </a>
            <span className="meta-divider" />
            <a href="tel:+33767304398">{dict.phone}</a>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.15 }}
        >
          <div className="portrait-frame">
            <Image
              src="/images/Photo.jpg"
              alt="Portrait de Vincent Tran"
              width={500}
              height={500}
              sizes="(max-width: 680px) 65vw, (max-width: 900px) 38vw, 310px"
              priority
              className="portrait-image"
            />
          </div>
          <span className="visual-index">01 / PORTFOLIO</span>
        </motion.div>
      </div>
      <a className="scroll-cue" href="#about"><span />{dict.scrollCta}</a>
    </section>
  );
}

"use client";

import { Dictionary } from "@/lib/dictionary";
import { motion } from "framer-motion";

interface AboutProps {
  dict: Dictionary["about"];
}

export default function About({ dict }: AboutProps) {
  return (
    <section id="about" className="section-shell about-section">
      <motion.div
        className="about-panel"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        viewport={{ once: true, margin: "-60px" }}
      >
        <div className="section-heading about-heading">
          <p className="eyebrow">01 — {dict.kicker}</p>
          <h2>{dict.title}</h2>
        </div>
        <div className="about-copy">
          {[dict.paragraph1, dict.paragraph2, dict.paragraph3].map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <div className="about-signature">
          <span className="signature-mark">VT</span>
          <span>{dict.signature}</span>
        </div>
      </motion.div>
    </section>
  );
}

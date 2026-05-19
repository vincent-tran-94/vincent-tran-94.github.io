"use client";

import { Dictionary } from "@/lib/dictionary";
import { motion } from "framer-motion";

interface AboutProps {
  dict: Dictionary["about"];
}

export default function About({ dict }: AboutProps) {
  return (
    <section
      id="about"
      style={{
        padding: "120px 20px",
        maxWidth: "900px",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        style={{
          fontSize: "2rem",
          fontWeight: 700,
          marginBottom: "50px",
          color: "#f0f4ff",
          letterSpacing: "1px",
        }}
      >
        {dict.title}
      </motion.h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        {[dict.paragraph1, dict.paragraph2, dict.paragraph3].map((p, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true, margin: "-30px" }}
            style={{
              fontSize: "1.05rem",
              color: "#f0f4ff",
              lineHeight: "1.8",
              maxWidth: "750px",
              margin: "0 auto",
            }}
          >
            {p}
          </motion.p>
        ))}
      </div>
    </section>
  );
}

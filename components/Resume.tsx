"use client";

import { Dictionary } from "@/lib/dictionary";
import { motion } from "framer-motion";

interface ResumeProps {
  dict: Dictionary["resume"];
}

export default function Resume({ dict }: ResumeProps) {
  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
    viewport: { once: true, margin: "-30px" },
  };

  return (
    <section
      id="resume"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "60px",
        padding: "100px 20px",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      {/* Education */}
      <motion.div {...fadeUp}>
        <h2 style={{
          fontSize: "2rem", fontWeight: 700, marginBottom: "40px",
          color: "#f0f4ff", textAlign: "center", letterSpacing: "1px",
        }}>
          {dict.education.title}
        </h2>
        <div style={{
          background: "rgba(255, 255, 255, 0.03)",
          borderRadius: "16px", border: "1px solid rgba(255, 255, 255, 0.06)",
          padding: "40px",
        }}>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "16px" }}>
            {dict.education.items.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                style={{
                  color: "#f0f4ff", fontSize: "0.95rem", lineHeight: "1.6",
                  paddingLeft: "20px", borderLeft: "2px solid rgba(74, 124, 247, 0.3)",
                }}
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* Experience */}
      <motion.div {...fadeUp}>
        <h2 style={{
          fontSize: "2rem", fontWeight: 700, marginBottom: "40px",
          color: "#f0f4ff", textAlign: "center", letterSpacing: "1px",
        }}>
          {dict.experience.title}
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {dict.experience.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.06)",
                padding: "24px 28px",
              }}
            >
              <h3 style={{ color: "#4a7cf7", fontSize: "0.95rem", fontWeight: 600, marginBottom: "8px" }}>
                {item.title}
              </h3>
              <p style={{ color: "#f0f4ff", fontSize: "0.9rem", lineHeight: "1.7", whiteSpace: "pre-line" }}>
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Skills Cards */}
      <motion.div {...fadeUp}>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "24px" }}>
          {[
            { title: dict.skills.title, items: dict.skills.items },
            { title: dict.softSkills.title, items: dict.softSkills.items },
            { title: dict.certifications.title, items: dict.certifications.items },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              className="resume-card"
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                borderRadius: "16px", border: "1px solid rgba(255, 255, 255, 0.06)",
                padding: "32px",
                flex: "0 0 calc(33% - 24px)", minWidth: "260px",
                transition: "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 12px 40px rgba(74, 124, 247, 0.15)";
                e.currentTarget.style.borderColor = "rgba(74, 124, 247, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.06)";
              }}
            >
              <h3 style={{ color: "#f0f4ff", fontSize: "1.1rem", fontWeight: 600, marginBottom: "20px", letterSpacing: "0.5px" }}>
                {card.title}
              </h3>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
                {card.items.map((item, j) => (
                  <li key={j} style={{
                    color: "#f0f4ff", fontSize: "0.9rem",
                    display: "flex", alignItems: "center", gap: "8px",
                  }}>
                    <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#4a7cf7", flexShrink: 0 }} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
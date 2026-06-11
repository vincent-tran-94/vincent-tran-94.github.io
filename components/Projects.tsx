"use client";

import { Dictionary } from "@/lib/dictionary";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";

interface ProjectsProps {
  dict: Dictionary["projects"];
}

export default function Projects({ dict }: ProjectsProps) {
  const params = useParams();
  const locale = (params?.locale as string) || "fr";
  return (
    <>
      <h2
        style={{
          textAlign: "center",
          fontSize: "2.2rem",
          marginBottom: "40px",
          color: "#f0f0f0",
          fontWeight: 700,
          letterSpacing: "1px",
        }}
      >
        {dict.title}
      </h2>
      <section
        id="projects"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "30px",
          padding: "20px 40px 60px",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        {dict.items.map((project, i) => (
          <motion.article
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
            className="project-card"
            style={{
              background: "rgba(30, 40, 60, 0.8)",
              backdropFilter: "blur(12px)",
              borderRadius: "16px",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
              overflow: "hidden",
              flex: "0 0 calc(33.333% - 30px)",
              minWidth: "300px",
              maxWidth: "400px",
              transition: "transform 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
              e.currentTarget.style.boxShadow = "0 16px 48px rgba(100, 150, 255, 0.2)";
              e.currentTarget.style.borderColor = "rgba(100, 150, 255, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 8px 32px rgba(0, 0, 0, 0.3)";
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.08)";
            }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "220px",
                overflow: "hidden",
              }}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                style={{
                  objectFit: "cover",
                  transition: "transform 0.6s ease",
                }}
                className="project-image"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "60%",
                  background: "linear-gradient(transparent, rgba(30, 40, 60, 0.95))",
                }}
              />
            </div>
            <div style={{ padding: "24px 24px 28px" }}>
              <h3
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  color: "#e0e8f0",
                  marginBottom: "12px",
                  lineHeight: "1.4",
                }}
              >
                {project.title}
              </h3>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "#f0f4ff",
                  lineHeight: "1.6",
                  marginBottom: "20px",
                }}
              >
                {project.description}
              </p>
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "10px 24px",
                    background: "linear-gradient(135deg, #4a7cf7, #6c63ff)",
                    color: "white",
                    textDecoration: "none",
                    borderRadius: "8px",
                    fontWeight: 500,
                    fontSize: "0.9rem",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    boxShadow: "0 4px 16px rgba(74, 124, 247, 0.3)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "0 6px 24px rgba(74, 124, 247, 0.5)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 4px 16px rgba(74, 124, 247, 0.3)";
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  Voir sur GitHub
                </a>
                {project.link2 && project.link2Label && (
                  <Link
                    href={`/${locale}/${project.link2}`}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      padding: "10px 24px",
                      background: "linear-gradient(135deg, #f97316, #fb923c)",
                      color: "white",
                      textDecoration: "none",
                      borderRadius: "8px",
                      fontWeight: 500,
                      fontSize: "0.9rem",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      boxShadow: "0 4px 16px rgba(249, 115, 22, 0.3)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow = "0 6px 24px rgba(249, 115, 22, 0.5)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "0 4px 16px rgba(249, 115, 22, 0.3)";
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                    </svg>
                    {project.link2Label}
                  </Link>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </section>
    </>
  );
}

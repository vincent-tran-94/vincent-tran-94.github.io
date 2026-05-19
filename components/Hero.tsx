"use client";

import { Dictionary } from "@/lib/dictionary";
import Image from "next/image";
import { motion } from "framer-motion";

interface HeroProps {
  dict: Dictionary["hero"];
}

export default function Hero({ dict }: HeroProps) {
  return (
    <section
      id="home"
      className="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        background: "linear-gradient(135deg, #0a0e1a 0%, #141c32 50%, #1a2444 100%)",
        padding: "80px 20px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{
        position: "absolute", top: "10%", left: "5%", width: "400px", height: "400px",
        borderRadius: "50%", background: "radial-gradient(circle, rgba(74, 124, 247, 0.15), transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "10%", right: "5%", width: "350px", height: "350px",
        borderRadius: "50%", background: "radial-gradient(circle, rgba(108, 99, 255, 0.12), transparent 70%)",
        pointerEvents: "none",
      }} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ position: "relative", zIndex: 1 }}
      >
        <header>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            style={{
              fontSize: "0.85rem", color: "#4a7cf7", letterSpacing: "4px",
              textTransform: "uppercase", fontWeight: 600, marginBottom: "16px",
            }}
          >
            {dict.portfolio}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            style={{
              fontSize: "3.5rem", fontWeight: 800, marginBottom: "30px",
              background: "linear-gradient(135deg, #f0f4ff, #4a7cf7)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              lineHeight: "1.2",
            }}
          >
            {dict.title}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Image
              src="/images/Photo.jpg"
              alt="Photo de Vincent Tran"
              width={200}
              height={200}
              style={{
                borderRadius: "50%",
                border: "3px solid rgba(74, 124, 247, 0.3)",
                boxShadow: "0 0 60px rgba(74, 124, 247, 0.2)",
                objectFit: "cover",
              }}
              priority
            />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            style={{
              fontSize: "1.1rem", color: "#f0f4ff", fontWeight: 400,
              letterSpacing: "1px", marginTop: "30px", marginBottom: "12px",
            }}
          >
            {dict.subtitle}
          </motion.h2>
        </header>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          style={{
            fontSize: "1.05rem", maxWidth: "580px",
            margin: "0 auto 50px", lineHeight: "1.8", color: "#f0f4ff",
          }}
        >
          {dict.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <h3 style={{
            fontSize: "1rem", color: "#f0f4ff", fontWeight: 600,
            marginBottom: "20px", letterSpacing: "2px", textTransform: "uppercase",
          }}>
            {dict.contact}
          </h3>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px", alignItems: "center" }}>
            {[
              { icon: "/images/phone_icon.jpg", label: "Phone:", value: dict.phone, href: "tel:+33767304398" },
              { icon: "/images/email_icon.jpg", label: "Email:", value: dict.email, href: "mailto:vincenttran94@hotmail.fr" },
              { icon: "/images/linkedin_icon.png", label: null, value: "LinkedIn", href: "https://www.linkedin.com/in/vincent-tran-94400/", external: true },
            ].map((item, i) => (
              <div key={i} style={{
                display: "flex", alignItems: "center", gap: "10px",
                padding: "10px 24px", background: "rgba(255, 255, 255, 0.04)",
                borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.06)",
                transition: "all 0.3s ease",
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(74, 124, 247, 0.1)";
                  e.currentTarget.style.borderColor = "rgba(74, 124, 247, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.04)";
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.06)";
                }}
              >
                <Image src={item.icon} alt="" width={18} height={18} style={{ borderRadius: "4px" }} />
                {item.label && <span style={{ color: "#8892a4", fontSize: "0.9rem" }}>{item.label}</span>}
                <a
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  style={{
                    color: "#f0f4ff", textDecoration: "none",
                    fontSize: "0.9rem", fontWeight: 500, transition: "color 0.3s",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "#4a7cf7"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = "#f0f4ff"; }}
                >
                  {item.value}
                </a>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
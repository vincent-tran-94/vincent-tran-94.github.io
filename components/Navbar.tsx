
"use client";

import { Dictionary } from "@/lib/dictionary";
import { useRouter, usePathname } from "next/navigation";
import { motion } from "framer-motion";

interface NavbarProps {
  dict: Dictionary["nav"];
  locale: string;
}

export default function Navbar({ dict, locale }: NavbarProps) {
  const router = useRouter();
  const pathname = usePathname();

  const handleNavClick = (href: string) => {
    const [path, hash] = href.split("#");
    if (pathname === path || pathname === `/${locale}`) {
      if (hash) {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else {
      router.push(href);
    }
  };

  const links = [
    { href: `/${locale}`, label: dict.home },
    { href: `/${locale}#about`, label: dict.about },
    { href: `/${locale}#resume`, label: dict.resume },
    { href: `/${locale}#projects`, label: dict.projects },
  ];

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px 40px",
        background: "rgba(10, 14, 26, 0.85)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
        position: "fixed",
        width: "100%",
        top: 0,
        zIndex: 1000,
      }}
    >
      <button
        onClick={() => handleNavClick(`/${locale}`)}
        style={{
          fontSize: "1.3rem",
          fontWeight: 700,
          background: "linear-gradient(135deg, #4a7cf7, #6c63ff)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          border: "none",
          cursor: "pointer",
          fontFamily: "inherit",
        }}
      >
        Vincent TRAN
      </button>

      <ul
        className="nav-links"
        style={{
          listStyle: "none",
          display: "flex",
          alignItems: "center",
          gap: "6px",
        }}
      >
        {links.map((link) => (
          <li key={link.href}>
            <button
              onClick={() => handleNavClick(link.href)}
              style={{
                fontSize: "0.9rem",
                color: "#f0f4ff",
                padding: "8px 16px",
                borderRadius: "8px",
                fontWeight: 500,
                transition: "all 0.3s ease",
                border: "none",
                background: "transparent",
                cursor: "pointer",
                fontFamily: "inherit",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#f0f4ff";
                e.currentTarget.style.background = "rgba(74, 124, 247, 0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#a0aab8";
                e.currentTarget.style.background = "transparent";
              }}
            >
              {link.label}
            </button>
          </li>
        ))}
        <li style={{ marginLeft: "8px" }}>
          <div style={{ position: "relative" }}>
            <select
              value={locale}
              onChange={(e) => { window.location.href = `/${e.target.value}`; }}
              style={{
                background: "linear-gradient(135deg, rgba(74, 124, 247, 0.15), rgba(108, 99, 255, 0.12))",
                color: "#e8edff",
                border: "1px solid rgba(74, 124, 247, 0.3)",
                fontSize: "0.85rem",
                padding: "7px 32px 7px 14px",
                borderRadius: "8px",
                cursor: "pointer",
                outline: "none",
                fontWeight: 600,
                letterSpacing: "0.5px",
                fontFamily: "inherit",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
                appearance: "none",
                WebkitAppearance: "none",
                MozAppearance: "none",
                transition: "all 0.3s ease",
                minWidth: "72px",
                textAlign: "center" as const,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(74, 124, 247, 0.6)";
                e.currentTarget.style.background = "linear-gradient(135deg, rgba(74, 124, 247, 0.25), rgba(108, 99, 255, 0.2))";
                e.currentTarget.style.boxShadow = "0 0 20px rgba(74, 124, 247, 0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(74, 124, 247, 0.3)";
                e.currentTarget.style.background = "linear-gradient(135deg, rgba(74, 124, 247, 0.15), rgba(108, 99, 255, 0.12))";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <option value="fr" style={{ background: "#0e1428", color: "#e8edff", padding: "8px" }}>FR</option>
              <option value="en" style={{ background: "#0e1428", color: "#e8edff", padding: "8px" }}>EN</option>
            </select>
            <svg
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
              style={{
                position: "absolute",
                right: "12px",
                top: "50%",
                transform: "translateY(-50%)",
                pointerEvents: "none",
                opacity: 0.7,
              }}
            >
              <path d="M1 1L5 5L9 1" stroke="#8a9bff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </li>
      </ul>
    </motion.nav>
  );
}

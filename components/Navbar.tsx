"use client";

import { Dictionary } from "@/lib/dictionary";
import { motion } from "framer-motion";
import { useState } from "react";

interface NavbarProps {
  dict: Dictionary["nav"];
  locale: string;
}

export default function Navbar({ dict, locale }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    { href: `/${locale}`, label: dict.home },
    { href: `/${locale}#about`, label: dict.about },
    { href: `/${locale}#resume`, label: dict.resume },
    { href: `/${locale}#projects`, label: dict.projects },
  ];

  return (
    <motion.nav
      className="site-nav"
      initial={{ y: -18, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <a className="nav-brand" href={`/${locale}`} aria-label="Vincent Tran — accueil">
        <span className="nav-brand-mark">V</span><span>Vincent Tran</span>
      </a>
      <button
        type="button"
        className="nav-menu-toggle"
        aria-label={menuOpen ? (locale === "fr" ? "Fermer le menu" : "Close menu") : (locale === "fr" ? "Ouvrir le menu" : "Open menu")}
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span /><span />
      </button>
      <div className={menuOpen ? "nav-panel is-open" : "nav-panel"} id="primary-navigation">
        <ul className="nav-links">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setMenuOpen(false)}>{link.label}</a>
            </li>
          ))}
        </ul>
        <label className="language-switch" aria-label={locale === "fr" ? "Langue" : "Language"}>
          <select value={locale} onChange={(event) => { window.location.href = `/${event.target.value}`; }}>
            <option value="fr">FR</option>
            <option value="en">EN</option>
          </select>
          <span aria-hidden="true">⌄</span>
        </label>
      </div>
    </motion.nav>
  );
}

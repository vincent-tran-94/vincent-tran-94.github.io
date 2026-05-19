"use client";

import { Dictionary } from "@/lib/dictionary";

interface FooterProps {
  dict: Dictionary["footer"];
}

export default function Footer({ dict }: FooterProps) {
  return (
    <footer
      style={{
        padding: "20px",
        textAlign: "center",
        backgroundColor: "#0f1821",
        color: "#bbb",
        fontSize: "14px",
      }}
    >
      <p>{dict.copyright}</p>
    </footer>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vincent Tran — Ingénieur IA & Développeur Full Stack",
  description: "Découvrez le parcours, les projets et les compétences de Vincent Tran, ingénieur IA et développeur full stack.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}

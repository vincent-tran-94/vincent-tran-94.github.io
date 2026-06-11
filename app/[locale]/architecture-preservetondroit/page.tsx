"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { dictionaries } from "@/lib/dictionary";

export default function ArchitecturePage() {
  const params = useParams();
  const locale = (params?.locale as string) || "fr";
  const dict = dictionaries[locale] ?? dictionaries.fr;

  const project = dict.projects.items.find(
    (p) => p.link2 && p.link2.includes("architecture-preservetondroit")
  );
  const title = project?.title ?? "Architecture IA — PréserveTonDroit";
  const backLabel = locale === "fr" ? "← Retour aux projets" : "← Back to projects";

  return (
    <div
      style={{
        background: "#0f172a",
        color: "#e2e8f0",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "30px 20px",
      }}
    >
      {/* Back link */}
      <Link
        href={`/${locale}`}
        style={{
          alignSelf: "flex-start",
          color: "#818cf8",
          textDecoration: "none",
          fontSize: "0.95rem",
          marginBottom: "10px",
          transition: "color 0.2s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "#a5b4fc")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "#818cf8")}
      >
        {backLabel}
      </Link>

      {/* Title */}
      <h1
        style={{
          fontSize: "2rem",
          fontWeight: 700,
          textAlign: "center",
          marginBottom: "6px",
          background: "linear-gradient(135deg, #f97316, #fb923c, #fbbf24)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        {title}
      </h1>
      <p
        style={{
          fontSize: "1rem",
          color: "#94a3b8",
          textAlign: "center",
          marginBottom: "30px",
          fontWeight: 400,
        }}
      >
        Quiz Juridique — Hub central + 3 colonnes fonctionnelles + Couche données
      </p>

      {/* Architecture SVG */}
      <div style={{ position: "relative", width: "1100px", maxWidth: "100%" }}>
        <svg
          viewBox="0 0 1100 720"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: "100%", height: "auto" }}
        >
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#475569"/>
            </marker>
            <marker id="arrowhead-blue" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#3b82f6"/>
            </marker>
            <marker id="arrowhead-green" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#22c55e"/>
            </marker>
            <marker id="arrowhead-purple" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#a855f7"/>
            </marker>
            <marker id="arrowhead-indigo" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#6366f1"/>
            </marker>
            <filter id="glow-orange">
              <feGaussianBlur stdDeviation="3" result="blur"/>
              <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
            <filter id="glow-blue">
              <feGaussianBlur stdDeviation="2" result="blur"/>
              <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
          </defs>

          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1e293b" strokeWidth="0.5"/>
          </pattern>
          <rect width="1100" height="720" fill="url(#grid)" rx="16"/>

          {/* Data Layer Band */}
          <rect x="30" y="520" width="1040" height="180" rx="14" fill="rgba(99,102,241,0.06)" stroke="rgba(99,102,241,0.2)" strokeWidth="1"/>
          <rect x="44" y="512" width="230" height="20" rx="6" fill="#1e1b4b" stroke="#4338ca" strokeWidth="1"/>
          <text x="58" y="526" fill="#818cf8" fontSize="11" fontWeight="700" letterSpacing="1.5">COUCHE DONNÉES & INFRASTRUCTURE</text>

          {/* Hub Central */}
          <rect x="410" y="250" width="280" height="110" rx="14" fill="url(#hubGrad)" filter="url(#glow-orange)"/>
          <defs>
            <linearGradient id="hubGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#ea580c"/>
              <stop offset="100%" stopColor="#f97316"/>
            </linearGradient>
          </defs>
          <text x="550" y="290" textAnchor="middle" fill="#fff" fontSize="18" fontWeight="700">Python 3.11</text>
          <text x="550" y="312" textAnchor="middle" fill="#fff" fontSize="12" opacity="0.9">Quiz Engine — Hub Central</text>
          <text x="550" y="332" textAnchor="middle" fill="#fff" fontSize="10" opacity="0.7">Traitement & orchestration</text>

          {/* Column 1: Left */}
          <rect x="40" y="60" width="220" height="100" rx="12" fill="#1e293b" stroke="#3b82f6" strokeWidth="2"/>
          <text x="150" y="98" textAnchor="middle" fill="#93c5fd" fontSize="14" fontWeight="700">RAG Documents</text>
          <text x="150" y="118" textAnchor="middle" fill="#93c5fd" fontSize="11" opacity="0.8">Droit interne</text>
          <rect x="90" y="128" width="120" height="18" rx="8" fill="rgba(59,130,246,0.2)"/>
          <text x="150" y="141" textAnchor="middle" fill="#60a5fa" fontSize="9" fontWeight="600">Recherche vectorielle</text>

          <rect x="40" y="210" width="220" height="100" rx="12" fill="#1e293b" stroke="#f97316" strokeWidth="2"/>
          <text x="150" y="248" textAnchor="middle" fill="#fdba74" fontSize="14" fontWeight="700">Générateur Questions</text>
          <text x="150" y="268" textAnchor="middle" fill="#fdba74" fontSize="11" opacity="0.8">Création via LLM</text>
          <rect x="90" y="278" width="120" height="18" rx="8" fill="rgba(249,115,22,0.2)"/>
          <text x="150" y="291" textAnchor="middle" fill="#fb923c" fontSize="9" fontWeight="600">QCM dynamiques</text>

          <rect x="40" y="370" width="220" height="100" rx="12" fill="#1e293b" stroke="#3b82f6" strokeWidth="2"/>
          <text x="150" y="408" textAnchor="middle" fill="#93c5fd" fontSize="14" fontWeight="700">Domaines Juridiques</text>
          <text x="150" y="428" textAnchor="middle" fill="#93c5fd" fontSize="11" opacity="0.8">Travail / Famille / Logement</text>
          <rect x="90" y="438" width="120" height="18" rx="8" fill="rgba(59,130,246,0.2)"/>
          <text x="150" y="451" textAnchor="middle" fill="#60a5fa" fontSize="9" fontWeight="600">Classification</text>

          <rect x="40" y="545" width="220" height="100" rx="12" fill="#1e293b" stroke="#f97316" strokeWidth="2"/>
          <text x="150" y="583" textAnchor="middle" fill="#fdba74" fontSize="14" fontWeight="700">Validateur Juridique</text>
          <text x="150" y="603" textAnchor="middle" fill="#fdba74" fontSize="11" opacity="0.8">Exactitude juridique</text>
          <rect x="90" y="613" width="120" height="18" rx="8" fill="rgba(249,115,22,0.2)"/>
          <text x="150" y="626" textAnchor="middle" fill="#fb923c" fontSize="9" fontWeight="600">Validation & conformité</text>

          {/* Column 3: Right */}
          <rect x="840" y="60" width="220" height="100" rx="12" fill="#1e293b" stroke="#3b82f6" strokeWidth="2"/>
          <text x="950" y="98" textAnchor="middle" fill="#93c5fd" fontSize="14" fontWeight="700">Scoring Pédagogique</text>
          <text x="950" y="118" textAnchor="middle" fill="#93c5fd" fontSize="11" opacity="0.8">Niveau adaptatif</text>
          <rect x="890" y="128" width="120" height="18" rx="8" fill="rgba(59,130,246,0.2)"/>
          <text x="950" y="141" textAnchor="middle" fill="#60a5fa" fontSize="9" fontWeight="600">Évaluation progressive</text>

          <rect x="840" y="210" width="220" height="100" rx="12" fill="#1e293b" stroke="#3b82f6" strokeWidth="2"/>
          <text x="950" y="248" textAnchor="middle" fill="#93c5fd" fontSize="14" fontWeight="700">Next.js API</text>
          <text x="950" y="268" textAnchor="middle" fill="#93c5fd" fontSize="11" opacity="0.8">REST Endpoints</text>
          <rect x="890" y="278" width="120" height="18" rx="8" fill="rgba(59,130,246,0.2)"/>
          <text x="950" y="291" textAnchor="middle" fill="#60a5fa" fontSize="9" fontWeight="600">Interface REST</text>

          <rect x="840" y="370" width="220" height="100" rx="12" fill="#065f46" stroke="#10b981" strokeWidth="2"/>
          <text x="950" y="408" textAnchor="middle" fill="#6ee7b7" fontSize="14" fontWeight="700">+150 Utilisateurs</text>
          <text x="950" y="428" textAnchor="middle" fill="#6ee7b7" fontSize="11" opacity="0.8">Next.js 18 + SSR</text>
          <rect x="890" y="438" width="120" height="18" rx="8" fill="rgba(16,185,129,0.2)"/>
          <text x="950" y="451" textAnchor="middle" fill="#34d399" fontSize="9" fontWeight="600">Frontend rendu</text>

          <rect x="840" y="545" width="220" height="100" rx="12" fill="#3b0764" stroke="#a855f7" strokeWidth="2"/>
          <text x="950" y="583" textAnchor="middle" fill="#d8b4fe" fontSize="14" fontWeight="700">LLM Génération</text>
          <text x="950" y="603" textAnchor="middle" fill="#d8b4fe" fontSize="11" opacity="0.8">openai/gpt-oss-120b:free</text>
          <rect x="890" y="613" width="120" height="18" rx="8" fill="rgba(168,85,247,0.2)"/>
          <text x="950" y="626" textAnchor="middle" fill="#c084fc" fontSize="9" fontWeight="600">Génération IA</text>

          {/* Explications Auto */}
          <rect x="350" y="430" width="200" height="80" rx="12" fill="#1e293b" stroke="#3b82f6" strokeWidth="2"/>
          <text x="450" y="462" textAnchor="middle" fill="#93c5fd" fontSize="13" fontWeight="700">Explications Auto</text>
          <text x="450" y="482" textAnchor="middle" fill="#93c5fd" fontSize="10" opacity="0.8">Raisonnement juridique</text>
          <rect x="390" y="490" width="120" height="16" rx="6" fill="rgba(59,130,246,0.2)"/>
          <text x="450" y="502" textAnchor="middle" fill="#60a5fa" fontSize="8" fontWeight="600">Justification auto</text>

          {/* Data Layer */}
          <rect x="250" y="670" width="600" height="40" rx="10" fill="#1a1a2e" stroke="#6366f1" strokeWidth="2"/>
          <text x="550" y="696" textAnchor="middle" fill="#a5b4fc" fontSize="12" fontWeight="700">PostgreSQL 16</text>

          {/* Connections */}
          <line x1="150" y1="160" x2="150" y2="210" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowhead-blue)"/>
          <text x="165" y="190" fill="#64748b" fontSize="8">documents</text>

          <path d="M 260 130 Q 340 180 410 280" fill="none" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowhead-blue)"/>
          <text x="310" y="185" fill="#64748b" fontSize="8">embeddings</text>

          <line x1="260" y1="270" x2="410" y2="290" stroke="#f97316" strokeWidth="2" markerEnd="url(#arrowhead)"/>
          <text x="320" y="270" fill="#64748b" fontSize="8">questions</text>

          <line x1="150" y1="470" x2="150" y2="545" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowhead-blue)"/>
          <text x="165" y="515" fill="#64748b" fontSize="8">domaines</text>

          <path d="M 260 410 Q 340 380 410 340" fill="none" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowhead-blue)"/>
          <text x="310" y="375" fill="#64748b" fontSize="8">catégories</text>

          <line x1="260" y1="580" x2="350" y2="475" stroke="#22c55e" strokeWidth="2" markerEnd="url(#arrowhead-green)"/>
          <text x="285" y="520" fill="#64748b" fontSize="8">validé</text>

          <path d="M 260 570 Q 350 450 420 360" fill="none" stroke="#22c55e" strokeWidth="2" markerEnd="url(#arrowhead-green)"/>
          <text x="320" y="445" fill="#64748b" fontSize="8">résultats</text>

          <line x1="450" y1="430" x2="500" y2="360" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowhead-blue)"/>
          <text x="465" y="400" fill="#64748b" fontSize="8">explications</text>

          <line x1="690" y1="290" x2="840" y2="260" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowhead-blue)"/>
          <text x="750" y="265" fill="#64748b" fontSize="8">API</text>

          <path d="M 690 270 Q 770 180 840 120" fill="none" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowhead-blue)"/>
          <text x="750" y="185" fill="#64748b" fontSize="8">évaluation</text>

          <line x1="950" y1="310" x2="950" y2="370" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrowhead-green)"/>
          <text x="965" y="345" fill="#64748b" fontSize="8">service</text>

          <path d="M 690 340 Q 770 470 840 580" fill="none" stroke="#a855f7" strokeWidth="2" markerEnd="url(#arrowhead-purple)"/>
          <text x="745" y="470" fill="#64748b" fontSize="8">génération</text>

          <path d="M 840 560 Q 770 440 690 320" fill="none" stroke="#a855f7" strokeWidth="1.5" strokeDasharray="5 3" markerEnd="url(#arrowhead-purple)"/>
          <text x="730" y="430" fill="#64748b" fontSize="8">réponses</text>

          <line x1="550" y1="360" x2="550" y2="670" stroke="#6366f1" strokeWidth="2" strokeDasharray="6 4" markerEnd="url(#arrowhead-indigo)"/>
          <text x="560" y="520" fill="#818cf8" fontSize="8">requêtes</text>

          <path d="M 840 100 Q 770 170 690 260" fill="none" stroke="#22c55e" strokeWidth="1.5" strokeDasharray="5 3" markerEnd="url(#arrowhead-green)"/>
          <text x="740" y="160" fill="#64748b" fontSize="8">scores</text>
        </svg>
      </div>

      {/* Legend */}
      <div
        style={{
          marginTop: "25px",
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {[
          { color: "#f97316", label: "Flux fonctionnel" },
          { color: "#3b82f6", label: "Interface / données" },
          { color: "#22c55e", label: "Validation / retour" },
          { color: "#a855f7", label: "Appel LLM" },
          { color: "repeating-linear-gradient(90deg, #6366f1 0 6px, transparent 6px 10px)", label: "Couche données" },
        ].map((item, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.75rem", color: "#94a3b8" }}>
            <div style={{ width: "30px", height: "3px", borderRadius: "2px", background: item.color }} />
            {item.label}
          </div>
        ))}
      </div>

      {/* Specs Section */}
      <div style={{ marginTop: "30px", width: "100%", maxWidth: "1100px" }}>
        <h3
          style={{
            fontSize: "1rem",
            fontWeight: 700,
            color: "#818cf8",
            marginBottom: "14px",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
          }}
        >
          Spécifications Techniques
        </h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "14px",
          }}
        >
          {[
            {
              title: "PostgreSQL 16",
              items: [
                "Schéma quiz, questions, réponses, scores",
                "Corpus juridique FR",
                "Migrations Prisma + Alembic",
                "Pool de connexions 20 max",
                "RLS (Row Level Security) par tenant",
              ],
            },
            {
              title: "LLM (openai/gpt-oss-120b:free)",
              items: [
                "Génération questions QCM",
                "Température 0.7 (précision)",
                "Modèle via OpenRouter",
                "Fine-tuning possible",
              ],
            },
          ].map((card, i) => (
            <div
              key={i}
              style={{
                background: "linear-gradient(135deg, #1e293b, #0f172a)",
                border: "1px solid #334155",
                borderRadius: "12px",
                padding: "16px",
              }}
            >
              <h4 style={{ fontSize: "0.85rem", color: "#f97316", marginBottom: "8px" }}>
                {card.title}
              </h4>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {card.items.map((item, j) => (
                  <li
                    key={j}
                    style={{
                      fontSize: "0.78rem",
                      color: "#cbd5e1",
                      padding: "3px 0 3px 14px",
                      position: "relative",
                    }}
                  >
                    <span style={{ position: "absolute", left: 0, color: "#6366f1" }}>
                      ▸
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Back link at bottom */}
      <Link
        href={`/${locale}`}
        style={{
          marginTop: "40px",
          color: "#818cf8",
          textDecoration: "none",
          fontSize: "0.95rem",
          transition: "color 0.2s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "#a5b4fc")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "#818cf8")}
      >
        {backLabel}
      </Link>
    </div>
  );
}
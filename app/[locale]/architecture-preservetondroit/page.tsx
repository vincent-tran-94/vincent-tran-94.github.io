"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

export default function ArchitecturePage() {
  const params = useParams();
  const locale = (params?.locale as string) || "fr";
  const isFrench = locale === "fr";

  const steps = isFrench
    ? [
        { number: "01", eyebrow: "ACCÈS", title: "Utilisateurs", detail: "+150 personnes", note: "Parcours de quiz et résultats" },
        { number: "02", eyebrow: "APPLICATION", title: "Next.js 18", detail: "Interface SSR · API REST", note: "Affichage et échanges client" },
        { number: "03", eyebrow: "ORCHESTRATION", title: "Quiz Engine", detail: "Python 3.11", note: "Règles métier et coordination des services" },
      ]
    : [
        { number: "01", eyebrow: "ACCESS", title: "Users", detail: "+150 people", note: "Quiz journeys and results" },
        { number: "02", eyebrow: "APPLICATION", title: "Next.js 18", detail: "SSR interface · REST API", note: "Rendering and client requests" },
        { number: "03", eyebrow: "ORCHESTRATION", title: "Quiz Engine", detail: "Python 3.11", note: "Business rules and service coordination" },
      ];

  const modules = isFrench
    ? [
        { icon: "01", title: "Corpus juridique", detail: "RAG et recherche vectorielle · travail, famille, logement.", type: "blue" },
        { icon: "02", title: "Génération de QCM", detail: "Création de questions par LLM via OpenRouter.", type: "orange" },
        { icon: "03", title: "Validation juridique", detail: "Contrôle de cohérence et conformité des contenus.", type: "green" },
        { icon: "04", title: "Scoring & explications", detail: "Évaluation progressive et retours pédagogiques.", type: "purple" },
      ]
    : [
        { icon: "01", title: "Legal knowledge", detail: "RAG and vector search · work, family, housing.", type: "blue" },
        { icon: "02", title: "Question generation", detail: "LLM-powered quiz generation through OpenRouter.", type: "orange" },
        { icon: "03", title: "Legal validation", detail: "Content consistency and compliance checks.", type: "green" },
        { icon: "04", title: "Scoring & explanations", detail: "Progressive assessment and learning feedback.", type: "purple" },
      ];

  return (
    <div className="architecture-page">
      <div className="architecture-wrap">
        <Link className="architecture-back" href={`/${locale}#projects`}>
          <span aria-hidden="true">←</span> {isFrench ? "Retour aux projets" : "Back to projects"}
        </Link>

        <header className="architecture-header">
          <p className="architecture-eyebrow">{isFrench ? "PRÉSERVE TON DROIT · PROJET WEB" : "PRÉSERVE TON DROIT · WEB PROJECT"}</p>
          <h1>{isFrench ? "Architecture de la plateforme" : "Platform architecture"}</h1>
          <p>{isFrench
            ? "Du parcours utilisateur à la génération de quiz, une vue synthétique des composants et de leurs responsabilités."
            : "From the user journey to quiz generation, a concise view of the components and their responsibilities."}</p>
        </header>

        <section className="architecture-board" aria-label={isFrench ? "Diagramme d’architecture" : "Architecture diagram"}>
          <div className="architecture-board-head">
            <div>
              <span className="architecture-board-kicker">{isFrench ? "VUE D’ENSEMBLE" : "SYSTEM OVERVIEW"}</span>
              <h2>{isFrench ? "Flux principal" : "Main flow"}</h2>
            </div>
            <span className="architecture-status"><i />{isFrench ? "Architecture applicative" : "Application architecture"}</span>
          </div>

          <div className="architecture-flow">
            {steps.map((step, index) => (
              <div className="architecture-flow-fragment" key={step.number}>
                <article className={`architecture-step architecture-step-${index + 1}`}>
                  <div className="architecture-step-top"><span>{step.number}</span><small>{step.eyebrow}</small></div>
                  <h3>{step.title}</h3>
                  <p className="architecture-step-detail">{step.detail}</p>
                  <p className="architecture-step-note">{step.note}</p>
                </article>
                {index < steps.length - 1 && (
                  <div className="architecture-flow-arrow" aria-hidden="true">
                    <span>{index === 0 ? "HTTPS" : "REST"}</span>
                    <i />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="architecture-section-label">
            <span>{isFrench ? "SERVICES UTILISÉS PAR LE MOTEUR" : "SERVICES USED BY THE ENGINE"}</span>
            <i />
          </div>
          <div className="architecture-modules">
            {modules.map((module) => (
              <article className={`architecture-module architecture-module-${module.type}`} key={module.icon}>
                <span className="architecture-module-number">{module.icon}</span>
                <div><h3>{module.title}</h3><p>{module.detail}</p></div>
              </article>
            ))}
          </div>

          <div className="architecture-db-connector" aria-hidden="true"><i /></div>
          <div className="architecture-database">
            <div className="database-icon" aria-hidden="true">DB</div>
            <div><span>{isFrench ? "PERSISTANCE" : "PERSISTENCE"}</span><h3>PostgreSQL 16</h3></div>
            <p>{isFrench ? "Quiz · questions · réponses · scores" : "Quizzes · questions · answers · scores"}</p>
          </div>
        </section>

        <details className="architecture-details">
          <summary>{isFrench ? "Détails techniques" : "Technical details"}<span aria-hidden="true">+</span></summary>
          <div className="architecture-detail-grid">
            <article>
              <span>{isFrench ? "DONNÉES" : "DATA"}</span>
              <p>{isFrench
                ? "Schéma quiz, questions, réponses et scores. Migrations Prisma et Alembic, pool de connexions limité à 20 et sécurité RLS par tenant."
                : "Quiz, question, answer, and score schema. Prisma and Alembic migrations, connection pool capped at 20, and tenant-level RLS."}</p>
            </article>
            <article>
              <span>{isFrench ? "MODÈLE DE GÉNÉRATION" : "GENERATION MODEL"}</span>
              <p>openai/gpt-oss-120b:free · OpenRouter · {isFrench ? "température 0,7" : "temperature 0.7"}</p>
            </article>
          </div>
        </details>

      </div>
    </div>
  );
}

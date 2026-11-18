"use client";

import { Dictionary } from "@/lib/dictionary";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useParams } from "next/navigation";
import { useState } from "react";

interface ProjectsProps {
  dict: Dictionary["projects"];
}

type ProjectCategory = "all" | "web" | "ai" | "systems";

export default function Projects({ dict }: ProjectsProps) {
  const params = useParams();
  const locale = (params?.locale as string) || "fr";
  const [category, setCategory] = useState<ProjectCategory>("all");
  const visibleProjects = category === "all"
    ? dict.items
    : dict.items.filter((project) => project.category === category);
  const filters: ProjectCategory[] = ["all", "web", "ai", "systems"];
  const categoryLabels: Record<Exclude<ProjectCategory, "all">, string> = dict.categories;

  return (
    <section id="projects" className="section-shell projects-section">
      <div className="projects-heading-row">
        <div className="section-heading">
          <p className="eyebrow">03 — {dict.kicker}</p>
          <h2>{dict.title}</h2>
          <p className="section-intro">{dict.intro}</p>
        </div>
        <span className="project-count">{String(visibleProjects.length).padStart(2, "0")} <i>/ {String(dict.items.length).padStart(2, "0")}</i></span>
      </div>

      <div className="project-filters" role="group" aria-label={dict.filterLabel}>
        {filters.map((filter) => (
          <button
            key={filter}
            className={category === filter ? "filter-button is-active" : "filter-button"}
            type="button"
            aria-pressed={category === filter}
            onClick={() => setCategory(filter)}
          >
            {filter === "all" ? dict.filters.all : categoryLabels[filter]}
          </button>
        ))}
      </div>

      <motion.div layout className="project-grid" transition={{ layout: { type: "spring", stiffness: 240, damping: 32, mass: 0.8 } }}>
        <AnimatePresence initial={false} mode="sync">
          {visibleProjects.map((project, index) => (
            <motion.article
              className="project-card"
              key={project.link}
              layout
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, transition: { duration: 0.16 } }}
              transition={{
                layout: { type: "spring", stiffness: 240, damping: 32, mass: 0.8 },
                opacity: { duration: 0.28, delay: index * 0.035 },
                y: { duration: 0.32, ease: [0.22, 1, 0.36, 1], delay: index * 0.035 },
              }}
            >
              <a className="project-image-link" href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`${dict.githubLabel} — ${project.title}`}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 680px) calc(100vw - 36px), (max-width: 900px) calc(50vw - 32px), (max-width: 1328px) calc(33.333vw - 32px), 400px"
                  className={project.imageFit === "contain" ? "project-image project-image-contain" : "project-image"}
                />
                <span className="project-image-arrow" aria-hidden="true">↗</span>
              </a>
              <div className="project-card-body">
                <div className="project-card-topline">
                  <span className="project-category">{categoryLabels[project.category]}</span>
                  <span className="project-index">0{index + 1}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-card-actions">
                  <a className="text-link" href={project.link} target="_blank" rel="noopener noreferrer">
                    {dict.githubLabel}<span aria-hidden="true">↗</span>
                  </a>
                  {project.link2 && project.link2Label && (
                    <Link className="text-link text-link-muted" href={`/${locale}/${project.link2}`}>
                      {project.link2Label}<span aria-hidden="true">↗</span>
                    </Link>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

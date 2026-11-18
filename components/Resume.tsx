"use client";

import { Dictionary } from "@/lib/dictionary";
import { motion } from "framer-motion";

interface ResumeProps {
  dict: Dictionary["resume"];
}

export default function Resume({ dict }: ResumeProps) {
  const skillGroups = [dict.skills, dict.softSkills, dict.certifications];

  return (
    <section id="resume" className="section-shell resume-section">
      <div className="section-heading">
        <p className="eyebrow">02 — {dict.kicker}</p>
        <h2>{dict.experience.title}</h2>
        <p className="section-intro">{dict.intro}</p>
      </div>

      <div className="experience-list">
        {dict.experience.items.map((item, index) => (
          <motion.details
            className="experience-item"
            key={item.title}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
            viewport={{ once: true, margin: "-30px" }}
          >
            <summary>
              <span className="experience-number">0{index + 1}</span>
              <span className="experience-title">{item.title}</span>
              <span className="experience-toggle" aria-hidden="true">+</span>
            </summary>
            <p>{item.description}</p>
          </motion.details>
        ))}
      </div>

      <div className="resume-lower-grid">
        <div className="education-block">
          <h3>{dict.education.title}</h3>
          <ul className="education-list">
            {dict.education.items.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <motion.article
              className="skill-card"
              key={group.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

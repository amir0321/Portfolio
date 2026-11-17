import React, { useState } from "react";
import "./MyWork.css";
import mywork_data from "../../assets/mywork_data";
import { useLanguage } from "../../context/LanguageContext";

const MyWork = () => {
  const { lang, t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState("all");

  const filterOptions = [
    { id: "all", label: t.work.filters.all },
    { id: "featured", label: t.work.filters.featured },
    { id: "fullstack", label: t.work.filters.fullstack },
    { id: "security", label: t.work.filters.security },
    { id: "frontend", label: t.work.filters.frontend },
    { id: "private", label: t.work.filters.private },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? mywork_data
      : mywork_data.filter((item) => item.categories.includes(activeFilter));

  return (
    <section id="work" className="section-container mywork-section">
      <div className="section-header">
        <span className="section-eyebrow">{t.work.eyebrow}</span>
        <h2 className="section-title">{t.work.title}</h2>
        <p className="section-subtitle">{t.work.subtitle}</p>
      </div>

      <div className="work-filters" role="tablist" aria-label="Project categories">
        {filterOptions.map((option) => (
          <button
            key={option.id}
            type="button"
            role="tab"
            aria-selected={activeFilter === option.id}
            className={`filter-btn ${activeFilter === option.id ? "filter-btn-active" : ""}`}
            onClick={() => setActiveFilter(option.id)}
          >
            {option.label}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <article
            key={project.id}
            className={`project-card accent-${project.accent} ${project.featured ? "project-featured" : ""}`}
          >
            <div className="project-card-header">
              <div className="project-badges">
                {project.featured && (
                  <span className="badge badge-featured">★ {t.work.badges.featured}</span>
                )}
                {project.visibility === "private" ? (
                  <span className="badge badge-private">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <rect x="4" y="11" width="16" height="10" rx="2" stroke="currentColor" strokeWidth="2" />
                      <path d="M8 11V7a4 4 0 0 1 8 0v4" stroke="currentColor" strokeWidth="2" />
                    </svg>
                    {t.work.badges.private}
                  </span>
                ) : (
                  <span className="badge badge-public">{t.work.badges.public}</span>
                )}
              </div>
            </div>

            <div className="project-main">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-subtitle">{project.subtitle[lang]}</p>
              <p className="project-description">{project.description[lang]}</p>

              <div className="project-details-box">
                <div className="project-detail-block">
                  <span className="detail-label">{t.work.labels.role}</span>
                  <p>{project.role[lang]}</p>
                </div>

                <div className="project-detail-block highlight-block">
                  <span className="detail-label highlight-label">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path
                        d="M12 2L4 5.5V11.5C4 16.8 7.4 21.6 12 23C16.6 21.6 20 16.8 20 11.5V5.5L12 2Z"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                    {t.work.labels.highlight}
                  </span>
                  <p>{project.highlight[lang]}</p>
                </div>
              </div>
            </div>

            <div className="project-footer">
              <div className="project-stack">
                {project.stack.map((tech, idx) => (
                  <span key={idx} className="stack-chip">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-links">
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link link-primary"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.92.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.17 1.18a11.05 11.05 0 0 1 5.78 0c2.2-1.49 3.16-1.18 3.16-1.18.63 1.58.24 2.75.12 3.04.74.81 1.18 1.83 1.18 3.09 0 4.41-2.7 5.38-5.26 5.67.41.36.78 1.06.78 2.14 0 1.55-.01 2.79-.01 3.17 0 .31.21.67.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
                    </svg>
                    <span>{t.work.labels.viewCode}</span>
                  </a>
                ) : (
                  <span className="private-repo-note">{t.work.labels.privateNotice}</span>
                )}

                {project.caseStudyUrl && (
                  <a
                    href={project.caseStudyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link link-secondary"
                  >
                    <span>{t.work.labels.viewCaseStudy}</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default MyWork;

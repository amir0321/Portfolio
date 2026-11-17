import React from "react";
import "./About.css";
import github_avatar from "../../assets/github_avatar.jpg";
import { useLanguage } from "../../context/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="section-container about-section">
      <div className="section-header">
        <span className="section-eyebrow">{t.about.eyebrow}</span>
        <h2 className="section-title">{t.about.title}</h2>
        <p className="section-subtitle">{t.about.subtitle}</p>
      </div>

      <div className="about-bento-grid">
        {/* Main story card */}
        <article className="bento-card bento-story">
          <div className="bento-story-top">
            <img
              src={github_avatar}
              alt="Ameer Shameel"
              className="about-avatar"
            />
            <div>
              <h3>{t.about.storyTitle}</h3>
              <p className="about-role-tag">
                Frontend · Backend/API · PostgreSQL · Cybersecurity
              </p>
            </div>
          </div>
          <p className="bento-paragraph">{t.about.storyP1}</p>
          <p className="bento-paragraph">{t.about.storyP2}</p>
        </article>

        {/* Architectural questions card */}
        <article className="bento-card bento-questions">
          <h3 className="bento-card-title">{t.about.questionsTitle}</h3>
          <div className="questions-list">
            {t.about.questions.map((item, idx) => (
              <div key={idx} className="question-item">
                <p className="question-q">“{item.q}”</p>
                <p className="question-a">{item.a}</p>
              </div>
            ))}
          </div>
        </article>

        {/* Tech stack card spanning full width */}
        <article className="bento-card bento-stack">
          <h3 className="bento-card-title">{t.about.stackTitle}</h3>
          <div className="stack-groups-grid">
            {t.about.stackGroups.map((group, idx) => (
              <div key={idx} className="stack-group">
                <h4 className="stack-group-title">{group.name}</h4>
                <div className="stack-badges">
                  {group.items.map((tech, i) => (
                    <span key={i} className="stack-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </article>
      </div>

      <div className="about-stats-row">
        {t.about.stats.map((stat, idx) => (
          <div key={idx} className="stat-card">
            <span className="stat-value gradient-text">{stat.value}</span>
            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;

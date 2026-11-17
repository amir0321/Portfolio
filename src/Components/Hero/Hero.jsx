import React from "react";
import "./Hero.css";
import github_avatar from "../../assets/github_avatar.jpg";
import { useLanguage } from "../../context/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-status-badge">
            <span className="status-dot" aria-hidden="true" />
            <span>{t.hero.badge}</span>
          </div>

          <h1 className="hero-heading">
            <span className="hero-greeting">{t.hero.greeting} </span>
            <span className="gradient-text">{t.hero.name}</span>
            <span className="hero-subtitle-line">
              {t.hero.rolePrefix}{" "}
              <span className="hero-underline-accent">{t.hero.roleHighlight}</span>.
            </span>
          </h1>

          <p className="hero-description">{t.hero.description}</p>

          <div className="hero-pillars">
            <span className="pillar-pill">React 19 & Angular 20</span>
            <span className="pillar-pill">Node.js & .NET 9</span>
            <span className="pillar-pill">PostgreSQL & MongoDB</span>
            <span className="pillar-pill pillar-security">AppSec & Cybersecurity</span>
          </div>

          <div className="hero-actions">
            <a href="#work" className="btn-primary">
              <span>{t.hero.primaryCta}</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M5 12H19M19 12L13 6M19 12L13 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a href="#contact" className="btn-secondary">
              {t.hero.secondaryCta}
            </a>
            <a
              href="https://github.com/amir0321"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.92.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.17 1.18a11.05 11.05 0 0 1 5.78 0c2.2-1.49 3.16-1.18 3.16-1.18.63 1.58.24 2.75.12 3.04.74.81 1.18 1.83 1.18 3.09 0 4.41-2.7 5.38-5.26 5.67.41.36.78 1.06.78 2.14 0 1.55-.01 2.79-.01 3.17 0 .31.21.67.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
              </svg>
              <span>{t.hero.githubCta}</span>
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="profile-showcase-card">
            <div className="profile-card-header">
              <div className="avatar-wrapper">
                <img
                  src={github_avatar}
                  alt="Ameer Shameel"
                  className="hero-avatar"
                />
                <span className="avatar-verified" title="GitHub @amir0321" aria-hidden="true">
                  ✓
                </span>
              </div>
              <div className="profile-meta">
                <h2>Ameer Shameel</h2>
                <p className="profile-handle">@amir0321 · {t.hero.location}</p>
              </div>
            </div>

            <div className="flow-architecture-box">
              <div className="flow-box-header">
                <span className="terminal-dots" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="flow-box-title">{t.hero.flowCard.title}</span>
              </div>

              <div className="flow-steps">
                <div className="flow-step">
                  <span className="flow-step-tag tag-cyan">{t.hero.flowCard.step1Label}</span>
                  <p>{t.hero.flowCard.step1Desc}</p>
                </div>
                <div className="flow-step">
                  <span className="flow-step-tag tag-indigo">{t.hero.flowCard.step2Label}</span>
                  <p>{t.hero.flowCard.step2Desc}</p>
                </div>
                <div className="flow-step">
                  <span className="flow-step-tag tag-emerald">{t.hero.flowCard.step3Label}</span>
                  <p>{t.hero.flowCard.step3Desc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

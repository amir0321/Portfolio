import React from "react";
import "./Footer.css";
import { useLanguage } from "../../context/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="footer-wrapper">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand-col">
            <a href="#home" className="brand-logo">
              <span className="brand-mark" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2L4 5.5V11.5C4 16.8 7.4 21.6 12 23C16.6 21.6 20 16.8 20 11.5V5.5L12 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.5 12L11.2 13.7L15 9.9"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="brand-text">
                Ameer<span className="brand-dot">.</span>Shameel
              </span>
            </a>
            <p className="footer-tagline">{t.footer.tagline}</p>
          </div>

          <div className="footer-links-col">
            <h4>{t.footer.navTitle}</h4>
            <ul>
              <li><a href="#home">{t.nav.home}</a></li>
              <li><a href="#about">{t.nav.about}</a></li>
              <li><a href="#services">{t.nav.services}</a></li>
              <li><a href="#work">{t.nav.work}</a></li>
              <li><a href="#contact">{t.nav.contact}</a></li>
            </ul>
          </div>

          <div className="footer-links-col">
            <h4>{t.footer.linksTitle}</h4>
            <ul>
              <li>
                <a
                  href="https://github.com/amir0321"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.footer.githubProfile} ↗
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/amir0321/amir0321"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.footer.architectureNotes} ↗
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/amir0321/Portfolio/blob/main/SECURITY.md"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.footer.securityPolicy} ↗
                </a>
              </li>
              <li>
                <a href="mailto:ameer.tech28@gmail.com">
                  ameer.tech28@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {year} Ameer Shameel. {t.footer.rights}</p>
          <p className="footer-tech-signature">
            React 19 · Vite · AppSec Mindset
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

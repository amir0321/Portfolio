import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import { useLanguage } from "../../context/LanguageContext";

const Navbar = () => {
  const { lang, setLang, t } = useLanguage();
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    if (!mobileOpen) return;

    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
        toggleRef.current?.focus();
      }
    };
    const closeOnOutsideClick = (event) => {
      if (!navRef.current?.contains(event.target)) setMobileOpen(false);
    };
    const desktop = window.matchMedia("(min-width: 1181px)");
    const closeOnDesktop = (event) => {
      if (event.matches) setMobileOpen(false);
    };

    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("pointerdown", closeOnOutsideClick);
    desktop.addEventListener("change", closeOnDesktop);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", closeOnOutsideClick);
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, [mobileOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);

      const sections = ["home", "about", "services", "work", "contact"];
      const scrollPosition = window.scrollY + 180;

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (section) => {
    setActiveSection(section);
    setMobileOpen(false);
  };

  const navItems = [
    { id: "home", label: t.nav.home },
    { id: "about", label: t.nav.about },
    { id: "services", label: t.nav.services },
    { id: "work", label: t.nav.work },
    { id: "contact", label: t.nav.contact },
  ];

  return (
    <header className={`navbar-wrapper ${scrolled ? "navbar-scrolled" : ""}`}>
      <nav ref={navRef} className="navbar" aria-label={lang === "sv" ? "Huvudnavigation" : "Main navigation"}>
        <a
          href="#home"
          className="brand-logo"
          onClick={() => handleNavClick("home")}
        >
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

        <ul id="primary-navigation" className={`nav-menu ${mobileOpen ? "nav-menu-open" : ""}`}>
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`nav-link ${activeSection === item.id ? "nav-link-active" : ""}`}
                aria-current={activeSection === item.id ? "location" : undefined}
                onClick={() => handleNavClick(item.id)}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="nav-mobile-actions">
            <a
              href="https://github.com/amir0321"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-github-btn"
            >
              {t.nav.github} ↗
            </a>
            <a
              href="#contact"
              className="nav-connect-btn"
              onClick={() => handleNavClick("contact")}
            >
              {t.nav.cta}
            </a>
          </li>
        </ul>

        <div className="nav-actions">
          <div className="lang-switcher" role="group" aria-label="Language switcher">
            <button
              type="button"
              className={`lang-btn ${lang === "sv" ? "lang-btn-active" : ""}`}
              onClick={() => setLang("sv")}
              aria-pressed={lang === "sv"}
            >
              SV
            </button>
            <button
              type="button"
              className={`lang-btn ${lang === "en" ? "lang-btn-active" : ""}`}
              onClick={() => setLang("en")}
              aria-pressed={lang === "en"}
            >
              EN
            </button>
          </div>

          <a
            href="https://github.com/amir0321"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-github-link"
            aria-label="GitHub profile"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.92.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.17 1.18a11.05 11.05 0 0 1 5.78 0c2.2-1.49 3.16-1.18 3.16-1.18.63 1.58.24 2.75.12 3.04.74.81 1.18 1.83 1.18 3.09 0 4.41-2.7 5.38-5.26 5.67.41.36.78 1.06.78 2.14 0 1.55-.01 2.79-.01 3.17 0 .31.21.67.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
            </svg>
          </a>

          <a href="#contact" className="nav-connect-btn desktop-only">
            {t.nav.cta}
          </a>

          <button
            ref={toggleRef}
            type="button"
            className="nav-toggle"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="primary-navigation"
            aria-label={lang === "sv" ? "Öppna eller stäng menyn" : "Toggle navigation menu"}
          >
            <span className={`hamburger-line ${mobileOpen ? "open-1" : ""}`} />
            <span className={`hamburger-line ${mobileOpen ? "open-2" : ""}`} />
            <span className={`hamburger-line ${mobileOpen ? "open-3" : ""}`} />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

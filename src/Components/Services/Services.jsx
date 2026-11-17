import React from "react";
import "./Services.css";
import Services_Data from "../../assets/services_data";
import { useLanguage } from "../../context/LanguageContext";

const renderServiceIcon = (icon) => {
  switch (icon) {
    case "frontend":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="3" y="4" width="18" height="16" rx="3" stroke="currentColor" strokeWidth="2" />
          <path d="M9 10L7 12L9 14M15 10L17 12L15 14M13 9L11 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "backend":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="3" y="4" width="18" height="6" rx="2" stroke="currentColor" strokeWidth="2" />
          <rect x="3" y="14" width="18" height="6" rx="2" stroke="currentColor" strokeWidth="2" />
          <circle cx="7" cy="7" r="1" fill="currentColor" />
          <circle cx="7" cy="17" r="1" fill="currentColor" />
        </svg>
      );
    case "database":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <ellipse cx="12" cy="6" rx="8" ry="3" stroke="currentColor" strokeWidth="2" />
          <path d="M4 6V12C4 13.66 7.58 15 12 15C16.42 15 20 13.66 20 12V6" stroke="currentColor" strokeWidth="2" />
          <path d="M4 12V18C4 19.66 7.58 21 12 21C16.42 21 20 19.66 20 18V12" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
    case "security":
    default:
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 2L4 5.5V11.5C4 16.8 7.4 21.6 12 23C16.6 21.6 20 16.8 20 11.5V5.5L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9.5 12L11.2 13.7L15 9.9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
  }
};

const Services = () => {
  const { lang, t } = useLanguage();

  return (
    <section id="services" className="section-container services-section">
      <div className="section-header">
        <span className="section-eyebrow">{t.services.eyebrow}</span>
        <h2 className="section-title">{t.services.title}</h2>
        <p className="section-subtitle">{t.services.subtitle}</p>
      </div>

      <div className="services-grid">
        {Services_Data.map((service) => (
          <article key={service.s_no} className={`service-card service-${service.icon}`}>
            <div className="service-card-top">
              <div className="service-icon-box">
                {renderServiceIcon(service.icon)}
              </div>
              <span className="service-number">{service.s_no}</span>
            </div>

            <h3 className="service-title">{service.title[lang]}</h3>
            <p className="service-desc">{service.desc[lang]}</p>

            <div className="service-tags">
              {service.tags.map((tag, idx) => (
                <span key={idx} className="service-tag">
                  {tag}
                </span>
              ))}
            </div>

            <div className="service-example">
              <span>{service.example[lang]}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;

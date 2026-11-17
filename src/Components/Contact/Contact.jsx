import React, { useState } from "react";
import "./Contact.css";
import { useLanguage } from "../../context/LanguageContext";

const COOLDOWN_MS = 60 * 1000;
const STORAGE_KEY = "portfolio_last_contact_ts";

const Contact = () => {
  const { t } = useLanguage();
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    // Honeypot check against simple spam bots
    const botField = formData.get("company_website");
    if (botField) {
      return;
    }

    const name = (formData.get("name") || "").toString().trim();
    const email = (formData.get("email") || "").toString().trim();
    const message = (formData.get("message") || "").toString().trim();

    if (!name || !email || !message) {
      setStatus({ type: "error", message: t.contact.form.errorEmpty });
      return;
    }

    // Client-side rate limit (60s cooldown)
    try {
      const lastSent = Number(localStorage.getItem(STORAGE_KEY) || 0);
      if (Date.now() - lastSent < COOLDOWN_MS) {
        setStatus({ type: "error", message: t.contact.form.errorCooldown });
        return;
      }
    } catch {
      // Ignore storage access errors
    }

    setStatus({ type: "", message: "" });
    setIsSubmitting(true);

    const payload = {
      access_key: "ea24ecd7-fdd4-4e82-8cc9-da3e8397b22c",
      name,
      email,
      message,
      subject: `Portfolio Contact from ${name}`,
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      }).then((r) => r.json());

      if (res.success) {
        try {
          localStorage.setItem(STORAGE_KEY, String(Date.now()));
        } catch {
          // Ignore storage restrictions
        }
        form.reset();
        setStatus({ type: "success", message: t.contact.form.success });
      } else {
        setStatus({ type: "error", message: t.contact.form.errorNetwork });
      }
    } catch {
      setStatus({ type: "error", message: t.contact.form.errorNetwork });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-container contact-section">
      <div className="section-header">
        <span className="section-eyebrow">{t.contact.eyebrow}</span>
        <h2 className="section-title">{t.contact.title}</h2>
        <p className="section-subtitle">{t.contact.subtitle}</p>
      </div>

      <div className="contact-grid">
        <div className="contact-info-card">
          <h3>{t.contact.infoTitle}</h3>
          <p className="contact-info-text">{t.contact.infoText}</p>

          <div className="contact-detail-list">
            <a href="mailto:ameer.tech28@gmail.com" className="contact-detail-item">
              <span className="contact-icon-wrap" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
                  <path d="M3 7L12 13L21 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <div>
                <span className="contact-item-label">Email</span>
                <p className="contact-item-value">ameer.tech28@gmail.com</p>
              </div>
            </a>

            <a href="tel:+46736525257" className="contact-detail-item">
              <span className="contact-icon-wrap" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M22 16.92V19.92C22 20.48 21.56 20.93 21 20.97C10.45 21.71 2.29 13.55 3.03 3C3.07 2.44 3.52 2 4.08 2H7.08C7.57 2 7.99 2.35 8.07 2.83C8.26 3.97 8.62 5.07 9.13 6.1C9.3 6.45 9.21 6.87 8.92 7.14L7.21 8.85C8.84 11.79 11.21 14.16 14.15 15.79L15.86 14.08C16.13 13.79 16.55 13.7 16.9 13.87C17.93 14.38 19.03 14.74 20.17 14.93C20.65 15.01 21 15.43 21 15.92Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <div>
                <span className="contact-item-label">Phone</span>
                <p className="contact-item-value">+46 73 652 52 57</p>
              </div>
            </a>

            <div className="contact-detail-item">
              <span className="contact-icon-wrap" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 21C16 16.8 19 13.2 19 9.5C19 5.63 15.87 2.5 12 2.5C8.13 2.5 5 5.63 5 9.5C5 13.2 8 16.8 12 21Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle cx="12" cy="9.5" r="2.5" stroke="currentColor" strokeWidth="2" />
                </svg>
              </span>
              <div>
                <span className="contact-item-label">Location</span>
                <p className="contact-item-value">{t.contact.locationValue}</p>
              </div>
            </div>

            <a
              href="https://github.com/amir0321"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-detail-item"
            >
              <span className="contact-icon-wrap" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.92.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.17 1.18a11.05 11.05 0 0 1 5.78 0c2.2-1.49 3.16-1.18 3.16-1.18.63 1.58.24 2.75.12 3.04.74.81 1.18 1.83 1.18 3.09 0 4.41-2.7 5.38-5.26 5.67.41.36.78 1.06.78 2.14 0 1.55-.01 2.79-.01 3.17 0 .31.21.67.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
                </svg>
              </span>
              <div>
                <span className="contact-item-label">{t.contact.githubLabel}</span>
                <p className="contact-item-value">github.com/amir0321 ↗</p>
              </div>
            </a>
          </div>

          <div className="security-form-note">
            <span className="security-note-title">🛡️ {t.contact.securityNoteTitle}</span>
            <p>{t.contact.securityNoteText}</p>
          </div>
        </div>

        <form onSubmit={onSubmit} className="contact-form-card" noValidate>
          {/* Hidden Honeypot field */}
          <input
            type="text"
            name="company_website"
            tabIndex="-1"
            autoComplete="off"
            className="honeypot-field"
            aria-hidden="true"
          />

          {status.message && (
            <div
              className={`form-alert ${status.type === "success" ? "form-alert-success" : "form-alert-error"}`}
              role="status"
            >
              {status.message}
            </div>
          )}

          <div className="form-group">
            <label htmlFor="contact-name">{t.contact.form.nameLabel}</label>
            <input
              id="contact-name"
              type="text"
              name="name"
              placeholder={t.contact.form.namePlaceholder}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="contact-email">{t.contact.form.emailLabel}</label>
            <input
              id="contact-email"
              type="email"
              name="email"
              placeholder={t.contact.form.emailPlaceholder}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="contact-message">{t.contact.form.messageLabel}</label>
            <textarea
              id="contact-message"
              name="message"
              rows="6"
              placeholder={t.contact.form.messagePlaceholder}
              required
            />
          </div>

          <button type="submit" className="contact-submit-btn" disabled={isSubmitting}>
            {isSubmitting ? t.contact.form.submitting : t.contact.form.submit}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

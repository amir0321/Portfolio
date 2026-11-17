/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState, useEffect } from "react";

const translations = {
  sv: {
    nav: {
      home: "Hem",
      about: "Om mig",
      services: "Fokusområden",
      work: "Projekt",
      contact: "Kontakt",
      cta: "Kontakta mig",
      github: "GitHub",
    },
    hero: {
      badge: "Tillgänglig för LIA, juniora roller & uppdrag",
      greeting: "Hej, jag heter",
      name: "Ameer Shameel",
      rolePrefix: "Jag bygger säkra flöden från",
      roleHighlight: "gränssnitt till API & databas",
      description:
        "Jag utbildar mig inom frontendutveckling med databaser och studerar cybersäkerhet på egen hand. Jag gillar att följa ett användarflöde hela vägen — från genomtänkt UI/UX på skärmen till API-arkitektur, datamodellering och säkerhet bakom kulisserna.",
      primaryCta: "Utforska mina projekt",
      secondaryCta: "Ta kontakt",
      githubCta: "GitHub-profil",
      location: "Stockholm & Eskilstuna, Sverige",
      flowCard: {
        title: "Hur jag tänker i projekt",
        step1Label: "01 · UI & Design",
        step1Desc: "Responsiva komponenter i React & Angular med tydlig återkoppling vid laddning, fel och kallstarter.",
        step2Label: "02 · API & Affärslogik",
        step2Desc: "Validering med Zod, JWT/HttpOnly-sessioner, rate-limiting och pris-/affärsregler på servern.",
        step3Label: "03 · Databas & AppSec",
        step3Desc: "PostgreSQL-transaktioner mot race conditions (409 Conflict) och ägarfilter direkt i databasfrågan.",
      },
    },
    about: {
      eyebrow: "01 // Profil & Arkitektur",
      title: "Hela kedjan med säkerhet i åtanke",
      subtitle:
        "Jag nöjer mig inte med att ett gränssnitt bara ser bra ut — jag vill veta hur datan valideras, lagras och skyddas när oväntade situationer uppstår.",
      storyTitle: "Från konkreta frågor till robusta lösningar",
      storyP1:
        "Under min utbildning inom frontendutveckling med databaser och mina självstudier i cybersäkerhet har jag fokuserat på hur frontend, API och databas delar på ansvaret.",
      storyP2:
        "I biografprojektet Filmvisarna blev det konkret: vad händer om två besökare bokar samma stol samtidigt? Vi löste det med PostgreSQL-transaktioner och sammansatt primärnyckel som svarar med 409 Conflict. I Marginalia ställde jag en annan fråga: hur ser jag till att varje användare bara kommer åt sina egna böcker? Genom att filtrera på både bok-ID och verifierat användar-ID från JWT direkt i databasfrågan.",
      questionsTitle: "Exempel på arkitekturbeslut jag drivit",
      questions: [
        {
          q: "Hur stoppar vi dubbelbokningar vid hög belastning?",
          a: "PostgreSQL-transaktioner + unik sammansatt nyckel (screening_id, seat_id) i Filmvisarna Cinema.",
        },
        {
          q: "Hur förhindrar vi IDOR (att användare ser andras data)?",
          a: "Ägarfilter i EF Core-frågan som returnerar konsekvent 404 Not Found i Marginalia.",
        },
        {
          q: "Hur skyddar vi adminsessioner och inloggning?",
          a: "HttpOnly-cookies mot XSS kombinerat med express-rate-limit mot brute-force i AutoEskil.",
        },
      ],
      stackTitle: "Teknikstack & Verktyg",
      stackGroups: [
        {
          name: "Frontend & UI/UX",
          items: ["React 19", "Angular 20 (Signals)", "TypeScript", "JavaScript (ES6+)", "SCSS / Sass", "Tailwind CSS", "Bootstrap", "Figma"],
        },
        {
          name: "Backend & Databaser",
          items: ["Node.js & Express", "ASP.NET Core (.NET 9)", "Entity Framework Core", "PostgreSQL", "SQLite", "MongoDB & Mongoose", "REST API"],
        },
        {
          name: "Säkerhet & DevOps",
          items: ["AppSec & IDOR-skydd", "JWT & HttpOnly Cookies", "Zod-validering", "Rate Limiting", "Docker", "GitHub Actions (CI/CD)", "Git & GitHub"],
        },
      ],
      stats: [
        { value: "10+", label: "Fullstack- & Webbprojekt" },
        { value: "4", label: "Djupgående Arkitekturstudier" },
        { value: "UI → DB", label: "Fokus på hela dataflödet" },
        { value: "AppSec", label: "Säkerhet från start" },
      ],
    },
    services: {
      eyebrow: "02 // Kompetensområden",
      title: "Vad jag bidrar med i ett team",
      subtitle:
        "Kombinationen av modern frontend, strukturerade backend-API:er, relationsdatabaser och säkerhetstänk gör att jag kan arbeta över hela stacken.",
    },
    work: {
      eyebrow: "03 // Utvalda Projekt & Case Studies",
      title: "Projekt från min GitHub",
      subtitle:
        "Här är mina publika och privata projekt inom fullstack, frontend, databaser och cybersäkerhet. Klicka på valfritt projekt för att se tekniska beslut eller källkod.",
      filters: {
        all: "Alla projekt",
        featured: "Utvalda (Case Studies)",
        fullstack: "Fullstack & Backend",
        security: "Säkerhet & AppSec",
        frontend: "Frontend & Design",
        private: "Privata projekt",
      },
      badges: {
        public: "Publikt Repo",
        private: "Privat Repo",
        featured: "Fördjupning",
      },
      labels: {
        role: "Min roll & bidrag",
        highlight: "Tekniskt fokus & säkerhetsval",
        viewCode: "Källkod på GitHub",
        viewCaseStudy: "Läs teknisk fördjupning",
        privateNotice: "Privat repo av säkerhets- och kundintegritetsskäl",
        expandDetails: "Visa tekniska val",
        collapseDetails: "Dölj detaljer",
        showMore: "Visa fler projekt",
        showLess: "Visa färre projekt",
      },
    },
    contact: {
      eyebrow: "04 // Kontakt",
      title: "Låt oss prata",
      subtitle:
        "Söker ni en engagerad utvecklare till teamet, LIA-plats eller vill diskutera ett projekt inom frontend, backend eller säkerhet? Hör gärna av dig!",
      infoTitle: "Kontaktuppgifter",
      infoText:
        "Jag finns i Stockholm och Eskilstuna med omnejd och arbetar gärna både på plats och på distans.",
      locationValue: "Stockholm & Eskilstuna, Sverige",
      githubLabel: "GitHub-profil & tekniska artiklar",
      securityNoteTitle: "Skyddat formulär",
      securityNoteText: "Formuläret använder honeypot-validering och klientbaserad rate-limiting (60s cooldown).",
      form: {
        nameLabel: "Ditt namn",
        namePlaceholder: "Ange ditt namn",
        emailLabel: "Din e-postadress",
        emailPlaceholder: "namn@exempel.se",
        messageLabel: "Ditt meddelande",
        messagePlaceholder: "Berätta kort om vad ni söker eller vill diskutera...",
        submit: "Skicka meddelande",
        submitting: "Skickar...",
        errorEmpty: "Vänligen fyll i namn, e-post och meddelande.",
        errorCooldown: "Du har nyligen skickat ett meddelande. Vänta en minut innan du skickar igen.",
        errorNetwork: "Det gick inte att skicka meddelandet just nu. Du kan alltid nå mig direkt via e-post.",
        success: "Tack för ditt meddelande! Jag återkommer så snart som möjligt.",
      },
    },
    footer: {
      tagline:
        "Frontendutvecklare med databaser & fokus på cybersäkerhet. Bygger genomtänkta, säkra och användarvänliga webbapplikationer.",
      navTitle: "Navigering",
      linksTitle: "Profiler & Dokumentation",
      githubProfile: "GitHub (@amir0321)",
      architectureNotes: "Arkitekturval & Case Studies",
      securityPolicy: "Säkerhetspolicy (SECURITY.md)",
      rights: "Alla rättigheter förbehållna.",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Expertise",
      work: "Projects",
      contact: "Contact",
      cta: "Get in touch",
      github: "GitHub",
    },
    hero: {
      badge: "Available for internships (LIA), junior roles & projects",
      greeting: "Hi, I'm",
      name: "Ameer Shameel",
      rolePrefix: "Building secure user flows from",
      roleHighlight: "UI to API & database",
      description:
        "I'm studying Frontend Development with Databases while pursuing Cybersecurity independently. I love following a user flow all the way through — from clean UI/UX on screen to API architecture, relational data modeling, and application security behind the scenes.",
      primaryCta: "Explore my projects",
      secondaryCta: "Contact me",
      githubCta: "GitHub Profile",
      location: "Stockholm & Eskilstuna, Sweden",
      flowCard: {
        title: "How I approach engineering",
        step1Label: "01 · UI & Design",
        step1Desc: "Responsive components in React & Angular with clear feedback for loading, errors, and cold starts.",
        step2Label: "02 · API & Business Logic",
        step2Desc: "Zod validation, JWT/HttpOnly sessions, rate limiting, and server-side price/campaign rules.",
        step3Label: "03 · Database & AppSec",
        step3Desc: "PostgreSQL transactions preventing race conditions (409 Conflict) and ownership filters in queries.",
      },
    },
    about: {
      eyebrow: "01 // Profile & Architecture",
      title: "Full-flow mindset with security first",
      subtitle:
        "I'm not satisfied with an interface that only looks good — I want to ensure data is properly validated, stored, and protected when edge cases happen.",
      storyTitle: "Turning concrete questions into robust solutions",
      storyP1:
        "Throughout my studies in frontend development with databases and my self-directed cybersecurity work, I've focused on how the UI, API, and database share responsibility.",
      storyP2:
        "In the Filmvisarna Cinema project, a key question was concrete: what happens if two visitors book the exact same seat at the same time? We solved it using PostgreSQL transactions and a composite primary key returning 409 Conflict. In Marginalia, I asked another question: how do I ensure each user can only access their own books? By filtering on both the book ID and the verified JWT user ID directly inside the database query.",
      questionsTitle: "Architectural decisions I've driven",
      questions: [
        {
          q: "How do we prevent double bookings under concurrency?",
          a: "PostgreSQL transactions + composite primary key (screening_id, seat_id) in Filmvisarna Cinema.",
        },
        {
          q: "How do we prevent IDOR (unauthorized access to others' records)?",
          a: "Ownership filter in EF Core queries returning a consistent 404 Not Found in Marginalia.",
        },
        {
          q: "How do we protect admin sessions and login endpoints?",
          a: "HttpOnly cookies against XSS combined with express-rate-limit against brute-force in AutoEskil.",
        },
      ],
      stackTitle: "Tech Stack & Tooling",
      stackGroups: [
        {
          name: "Frontend & UI/UX",
          items: ["React 19", "Angular 20 (Signals)", "TypeScript", "JavaScript (ES6+)", "SCSS / Sass", "Tailwind CSS", "Bootstrap", "Figma"],
        },
        {
          name: "Backend & Databases",
          items: ["Node.js & Express", "ASP.NET Core (.NET 9)", "Entity Framework Core", "PostgreSQL", "SQLite", "MongoDB & Mongoose", "REST API"],
        },
        {
          name: "Security & DevOps",
          items: ["AppSec & IDOR Protection", "JWT & HttpOnly Cookies", "Zod Validation", "Rate Limiting", "Docker", "GitHub Actions (CI/CD)", "Git & GitHub"],
        },
      ],
      stats: [
        { value: "10+", label: "Fullstack & Web Projects" },
        { value: "4", label: "In-Depth Case Studies" },
        { value: "UI → DB", label: "End-to-End Data Flow" },
        { value: "AppSec", label: "Security by Design" },
      ],
    },
    services: {
      eyebrow: "02 // Core Competencies",
      title: "What I bring to a team",
      subtitle:
        "Combining modern frontend engineering, structured backend APIs, relational databases, and application security allows me to contribute across the stack.",
    },
    work: {
      eyebrow: "03 // Selected Projects & Case Studies",
      title: "Projects from my GitHub",
      subtitle:
        "Explore my public and private projects across fullstack, frontend, databases, and cybersecurity. Inspect the architectural decisions or view the source code.",
      filters: {
        all: "All Projects",
        featured: "Featured Case Studies",
        fullstack: "Fullstack & Backend",
        security: "Security & AppSec",
        frontend: "Frontend & Design",
        private: "Private Projects",
      },
      badges: {
        public: "Public Repo",
        private: "Private Repo",
        featured: "Case Study",
      },
      labels: {
        role: "My role & contribution",
        highlight: "Technical & security highlight",
        viewCode: "Source on GitHub",
        viewCaseStudy: "Read architectural notes",
        privateNotice: "Private repository for security and client privacy reasons",
        expandDetails: "Show technical choices",
        collapseDetails: "Hide details",
        showMore: "Show more projects",
        showLess: "Show fewer projects",
      },
    },
    contact: {
      eyebrow: "04 // Contact",
      title: "Let's talk",
      subtitle:
        "Looking for a dedicated developer for your team, an internship (LIA), or want to discuss frontend, backend, or security? Feel free to reach out!",
      infoTitle: "Contact Details",
      infoText:
        "Based in the Stockholm and Eskilstuna region, Sweden — open to both on-site, hybrid, and remote opportunities.",
      locationValue: "Stockholm & Eskilstuna, Sweden",
      githubLabel: "GitHub profile & architecture write-ups",
      securityNoteTitle: "Protected Form",
      securityNoteText: "This form uses honeypot validation and client-side rate limiting (60s cooldown).",
      form: {
        nameLabel: "Your Name",
        namePlaceholder: "Enter your name",
        emailLabel: "Your Email",
        emailPlaceholder: "name@example.com",
        messageLabel: "Your Message",
        messagePlaceholder: "Tell me briefly about the role, project, or question...",
        submit: "Send Message",
        submitting: "Sending...",
        errorEmpty: "Please fill in your name, email, and message.",
        errorCooldown: "You recently sent a message. Please wait one minute before sending again.",
        errorNetwork: "Could not send message right now. Feel free to email me directly.",
        success: "Thank you for your message! I will get back to you as soon as possible.",
      },
    },
    footer: {
      tagline:
        "Frontend Developer with Databases & Cybersecurity focus. Building thoughtful, secure, and user-friendly web applications.",
      navTitle: "Navigation",
      linksTitle: "Profiles & Documentation",
      githubProfile: "GitHub (@amir0321)",
      architectureNotes: "Architectural Notes & Case Studies",
      securityPolicy: "Security Policy (SECURITY.md)",
      rights: "All rights reserved.",
    },
  },
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    try {
      const saved = localStorage.getItem("portfolio_lang");
      return saved === "en" || saved === "sv" ? saved : "sv";
    } catch {
      return "sv";
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("portfolio_lang", lang);
      document.documentElement.lang = lang;
    } catch {
      // Ignore storage restrictions
    }
  }, [lang]);

  const toggleLanguage = (nextLang) => {
    if (nextLang === "sv" || nextLang === "en") {
      setLang(nextLang);
    } else {
      setLang((prev) => (prev === "sv" ? "en" : "sv"));
    }
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang: toggleLanguage, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

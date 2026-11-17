const Services_Data = [
  {
    s_no: "01",
    icon: "frontend",
    title: {
      sv: "Frontend & UI/UX-Design",
      en: "Frontend & UI/UX Design",
    },
    desc: {
      sv: "Jag omsätter Figma-skisser till återanvändbara, tillgängliga och responsiva komponenter i React 19 och Angular 20. Fokus ligger på tydlig visuell hierarki och begriplig återkoppling vid laddning, fel eller kallstarter.",
      en: "I translate Figma designs into reusable, accessible, and responsive components in React 19 and Angular 20. My focus is on clear visual hierarchy and intuitive feedback during loading, errors, or server cold starts.",
    },
    tags: ["React 19", "Angular 20 (Signals)", "TypeScript", "SCSS / Sass", "Tailwind CSS", "Figma"],
    example: {
      sv: "Exempel: Interaktiv salongskarta i Filmvisarna & ApiWakeService i Marginalia.",
      en: "Example: Interactive auditorium seat map in Filmvisarna & ApiWakeService in Marginalia.",
    },
  },
  {
    s_no: "02",
    icon: "backend",
    title: {
      sv: "Backend & REST API-Arkitektur",
      en: "Backend & REST API Architecture",
    },
    desc: {
      sv: "Jag bygger strukturerade API:er i Node.js/Express och ASP.NET Core (.NET 9) med tydlig ansvarsfördelning mellan rutter, validering, controllers och affärslogik så att priser, regler och tillstånd beräknas säkert på servern.",
      en: "I build structured APIs with Node.js/Express and ASP.NET Core (.NET 9), separating routes, validation, controllers, and business services so pricing, rules, and state are reliably enforced on the server.",
    },
    tags: ["Node.js", "Express", "ASP.NET Core (.NET 9)", "REST API", "Zod", "Docker"],
    example: {
      sv: "Exempel: Serverstyrd kampanj- och prisberäkning i AirBean API.",
      en: "Example: Server-side campaign and price calculation engine in AirBean API.",
    },
  },
  {
    s_no: "03",
    icon: "database",
    title: {
      sv: "Databaser & Dataintegritet",
      en: "Databases & Data Integrity",
    },
    desc: {
      sv: "Jag modellerar relations- och dokumentdatabaser där databasen hjälper till att upprätthålla affärsregler — från transaktioner och sammansatta primärnycklar i PostgreSQL till schemavalidering i MongoDB/Mongoose.",
      en: "I model relational and document databases where the database actively enforces business rules — from transactions and composite primary keys in PostgreSQL to schema validation in MongoDB/Mongoose.",
    },
    tags: ["PostgreSQL", "EF Core", "SQLite", "MongoDB & Mongoose", "SQL Transactions", "Data Modeling"],
    example: {
      sv: "Exempel: Migrering från SQLite till PostgreSQL med eget kompatibilitetslager i AutoEskil.",
      en: "Example: SQLite-to-PostgreSQL migration with custom compatibility layer in AutoEskil.",
    },
  },
  {
    s_no: "04",
    icon: "security",
    title: {
      sv: "Cybersäkerhet & AppSec",
      en: "Cybersecurity & AppSec",
    },
    desc: {
      sv: "Jag integrerar säkerhet i varje lager: ägarbaserad åtkomstkontroll i databasfrågor (IDOR-skydd), JWT-verifiering, HttpOnly-cookies, rate-limiting mot brute-force, signerade tokens och analys av misstänkt webbtrafik.",
      en: "I build security into every layer: query-level ownership checks (IDOR protection), JWT verification, HttpOnly cookies, brute-force rate limiting, signed tokens, and suspicious traffic detection.",
    },
    tags: ["IDOR Prevention", "JWT & HttpOnly", "Rate Limiting", "Signed Tokens", "Traffic Analysis", "Zod"],
    example: {
      sv: "Exempel: Ägarfilter i Marginalia, HttpOnly + rate-limit i AutoEskil & TraceLock.",
      en: "Example: Query ownership filter in Marginalia, HttpOnly + rate-limit in AutoEskil & TraceLock.",
    },
  },
];

export default Services_Data;

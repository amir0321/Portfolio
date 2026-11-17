import filmvisarna1 from "./projects/filmvisarna-1.png";
import filmvisarna2 from "./projects/filmvisarna-2.png";
import filmvisarna3 from "./projects/filmvisarna-3.png";

import marginalia1 from "./projects/marginalia-1.png";
import marginalia2 from "./projects/marginalia-2.png";
import marginalia3 from "./projects/marginalia-3.png";

import autoeskil1 from "./projects/autoeskil-1.png";
import autoeskil2 from "./projects/autoeskil-2.png";
import autoeskil3 from "./projects/autoeskil-3.png";

import airbean1 from "./projects/airbean-1.png";

import tracelock1 from "./projects/tracelock-1.png";
import tracelock2 from "./projects/tracelock-2.png";
import tracelock3 from "./projects/tracelock-3.png";

import codeforge1 from "./projects/codeforge-1.png";
import codeforge2 from "./projects/codeforge-2.png";

import taskflow1 from "./projects/taskflow-1.png";
import taskflow2 from "./projects/taskflow-2.png";

import nextwatch1 from "./projects/nextwatch-1.png";
import nextwatch2 from "./projects/nextwatch-2.png";

import frontend1 from "./projects/frontend-1.png";
import frontend2 from "./projects/frontend-2.png";

import client1 from "./projects/client-1.png";
import client2 from "./projects/client-2.png";

const mywork_data = [
  {
    id: "tracelock",
    title: "TraceLock",
    image: tracelock1,
    images: [tracelock1, tracelock2, tracelock3],
    visibility: "private",
    featured: false,
    categories: ["security", "private"],
    accent: "emerald",
    subtitle: {
      sv: "Cybersäkerhetsprojekt för detektering av misstänkt webbtrafik",
      en: "Cybersecurity project for detecting suspicious web traffic",
    },
    description: {
      sv: "Ett privat cybersäkerhetsprojekt där jag utforskar hur webbapplikationer kan identifiera, analysera och hantera avvikande eller misstänkt trafik i realtid med interaktiv hotkarta och portskanning.",
      en: "A private cybersecurity project exploring how web applications can identify, analyze, and respond to anomalous or suspicious traffic patterns in real-time with an interactive threat map and port scanning.",
    },
    role: {
      sv: "Eget forsknings- och utvecklingsprojekt inom applikationssäkerhet, telemetri och trafikanalys.",
      en: "Independent research and development project focused on application security, telemetry, and traffic inspection.",
    },
    highlight: {
      sv: "SOC-översikt med realtidstelemetri, geografisk hotkarta, portskanning och detekteringsmekanismer mot automatiserade attacker. Hålls privat av säkerhetsskäl.",
      en: "SOC dashboard featuring real-time telemetry, geographical threat mapping, port scanning, and automated attack defense heuristics. Kept private for security reasons.",
    },
    stack: ["Next.js", "React", "TypeScript", "Leaflet", "AppSec", "Traffic Inspection", "Anomaly Detection"],
    githubUrl: null,
    caseStudyUrl: "https://github.com/amir0321/amir0321#privata-projekt",
  },
  {
    id: "filmvisarna",
    title: "Filmvisarna Cinema",
    image: filmvisarna1,
    images: [filmvisarna1, filmvisarna2, filmvisarna3],
    visibility: "public",
    featured: true,
    categories: ["featured", "fullstack", "security", "frontend"],
    accent: "emerald",
    subtitle: {
      sv: "Fullstack biografbokningssystem med interaktiv platskarta",
      en: "Fullstack cinema booking system with interactive seat map",
    },
    description: {
      sv: "Ett komplett bokningssystem för en biograf där besökare kan filtrera visningar, välja platser på en dynamisk salongskarta, förbeställa snacks och avboka biljetter. Personalen har en egen administrationsvy för salonger, visningar och bokningar.",
      en: "A full-featured cinema booking platform where visitors browse screenings, pick seats on a dynamic auditorium map, pre-order snacks, and cancel tickets. Staff members have a dedicated admin portal for managing screenings and bookings.",
    },
    role: {
      sv: "Ansvarade för delar av arkitekturen mellan frontend och backend, omsatte Figma-designen i återanvändbara React/SCSS-komponenter samt byggde den interaktiva platskartan och boknings-/avbokningsflödena.",
      en: "Led parts of the frontend-backend contract, translated Figma designs into reusable React/SCSS components, and built the interactive seat map along with the booking and cancellation flows.",
    },
    highlight: {
      sv: "PostgreSQL-transaktioner + sammansatt primärnyckel (screening_id, seat_id) förhindrar dubbelbokningar vid samtidiga anrop (409 Conflict). Avbokning sker via signerade tokens med tidsgräns (2h före visning).",
      en: "PostgreSQL transactions + composite primary key (screening_id, seat_id) prevent race-condition double bookings (409 Conflict). Cancellations use signed tokens enforced up to 2 hours before showtime.",
    },
    stack: ["React", "TypeScript", "Express", "PostgreSQL", "Zod", "SCSS", "React Router", "Bootstrap"],
    githubUrl: "https://github.com/amir0321/filmvisarna-cinema",
    caseStudyUrl: "https://github.com/amir0321/amir0321/blob/main/projects/filmvisarna-cinema.md",
  },
  {
    id: "marginalia",
    title: "Marginalia",
    image: marginalia1,
    images: [marginalia1, marginalia2, marginalia3],
    visibility: "public",
    featured: true,
    categories: ["featured", "fullstack", "security", "frontend"],
    accent: "cyan",
    subtitle: {
      sv: "Personligt bok- & citatbibliotek i Angular 20 och .NET 9",
      en: "Personal book & quote library built with Angular 20 and .NET 9",
    },
    description: {
      sv: "Responsiv fullstackapplikation byggd som arbetsprov för att spara lästa böcker och upp till fem favoritcitat per bok, med lokal tillståndshantering via Angular Signals och CI/CD-pipeline i GitHub Actions.",
      en: "Responsive fullstack web app built as a technical work sample for tracking read books and up to five favorite quotes per book, using Angular Signals for reactive state and GitHub Actions for CI/CD.",
    },
    role: {
      sv: "Byggde hela lösningen från Angular-gränssnitt och datamodellering i EF Core till ASP.NET Core-API, Docker-containerisering och driftsättning.",
      en: "Architected and built the complete solution from the Angular UI and EF Core data model to the ASP.NET Core API, Docker setup, and deployment.",
    },
    highlight: {
      sv: "Ägarbaserad åtkomstkontroll (IDOR-skydd) direkt i databasfrågorna: varje läsning, ändring och radering filtrerar på både bok-ID och användarens verifierade JWT-ID och returnerar konsekvent 404 Not Found. ApiWakeService hanterar kallstarter snyggt i UI:t.",
      en: "Query-level ownership control (IDOR prevention): every read, update, and delete filters by both book ID and verified JWT user ID, returning a uniform 404 Not Found to prevent data leakage. Includes ApiWakeService for cold-start UX.",
    },
    stack: ["Angular 20", ".NET 9", "ASP.NET Core", "EF Core", "PostgreSQL", "Docker", "GitHub Actions"],
    githubUrl: "https://github.com/amir0321/Marginalia",
    caseStudyUrl: "https://github.com/amir0321/amir0321/blob/main/projects/Marginalia.md",
  },
  {
    id: "autoeskil",
    title: "AutoEskil",
    image: autoeskil1,
    images: [autoeskil1, autoeskil2, autoeskil3],
    visibility: "public",
    featured: true,
    categories: ["featured", "fullstack", "security"],
    accent: "indigo",
    subtitle: {
      sv: "Bilförmedling & matchningsplattform med adminpanel",
      en: "Car brokerage & inventory matching platform with admin portal",
    },
    description: {
      sv: "Webbapplikation där bilköpare anger budget, miltal och drivmedel för att direkt matchas mot anslutna bilhandlares lager i Eskilstuna, medan administratörer följer upp leads och matchningar.",
      en: "Web application where car buyers submit budget, mileage, and fuel preferences to get instant matches against local dealerships' inventory, while administrators track leads and matched vehicles.",
    },
    role: {
      sv: "Utvecklade matchningsalgoritmen, relationsmodellen mellan handlare/bilar/förfrågningar, adminpanelen samt migreringen av datalagret inför produktionsdrift.",
      en: "Built the lead-matching flow, relational schema across dealers, vehicles, and leads, the admin dashboard, and the production database migration.",
    },
    highlight: {
      sv: "Migrerade från SQLite till PostgreSQL med ett eget kompatibilitetslager i db.js (? till $1, $2). Skyddade admininloggningen med HttpOnly-cookies mot XSS och express-rate-limit mot brute-force.",
      en: "Migrated from SQLite to PostgreSQL using a custom db.js compatibility layer translating ? placeholders to $1, $2. Secured admin authentication with HttpOnly cookies and express-rate-limit.",
    },
    stack: ["React", "Vite", "Node.js", "Express", "PostgreSQL", "SQLite", "HttpOnly Auth"],
    githubUrl: "https://github.com/amir0321/AutoEskil",
    caseStudyUrl: "https://github.com/amir0321/amir0321/blob/main/projects/AutoEskil.md",
  },
  {
    id: "airbean-api",
    title: "AirBean API",
    image: airbean1,
    images: [airbean1],
    visibility: "public",
    featured: true,
    categories: ["featured", "fullstack"],
    accent: "amber",
    subtitle: {
      sv: "REST-API för kaffebeställningar & kampanjmotor",
      en: "REST API for drone coffee orders & campaign pricing engine",
    },
    description: {
      sv: "Ett skiktat REST-API för en kaffekedja med drönarleverans som hanterar meny, gäst- och användarbeställningar, kombinationsrabatter och beräknad leveranstid.",
      en: "A layered REST API for a drone-delivery coffee chain handling menus, guest and user orders, multi-item promotional discounts, and estimated delivery times.",
    },
    role: {
      sv: "Ritade databasschemat och relationerna som teamet arbetade utifrån samt strukturerade Express-arkitekturen med validering, orderflöde och kampanjlogik.",
      en: "Designed the database schema and entity relationships for the four-person team and structured the Express architecture across routes, validation, controllers, and campaign services.",
    },
    highlight: {
      sv: "All pris- och rabattberäkning sker strikt på servern: klienten skickar endast produkt-ID och antal, varpå servern validerar rader, hämtar priser och beräknar kampanjregler.",
      en: "Strict server-side price and discount calculation: clients only send product IDs and quantities while the server validates items, queries prices, and applies campaign rules.",
    },
    stack: ["Node.js", "Express", "SQLite", "REST API", "Layered Architecture"],
    githubUrl: "https://github.com/amir0321/airbean-api",
    caseStudyUrl: "https://github.com/amir0321/amir0321/blob/main/projects/airbean-api.md",
  },
  {
    id: "codeforge",
    title: "CodeForge",
    image: codeforge1,
    images: [codeforge1, codeforge2],
    visibility: "public",
    featured: false,
    categories: ["frontend", "security"],
    accent: "cyan",
    subtitle: {
      sv: "Byrålandningssida med säkerhetsfokus och mörkt tema",
      en: "Agency landing page with security focus & dark theme",
    },
    description: {
      sv: "En modern, snabb landningssida för en webb- och mjukvarubyrå med tydlig presentation av tjänster, säkerhetsgranskning, process och prismodeller.",
      en: "A modern, high-performance agency landing page showcasing engineering services, security auditing, delivery process, and transparent pricing models.",
    },
    role: {
      sv: "Byggde hela frontendupplevelsen med fokus på typografi, mikrointeraktioner, kontrast och responsivitet.",
      en: "Designed and developed the frontend experience with a focus on typography, micro-interactions, accessibility contrast, and responsive layout.",
    },
    highlight: {
      sv: "Komponentbaserad layout i React och Vite med strikt designsystem och noll onödiga beroenden.",
      en: "Component-driven layout in React and Vite with a strict design token system and zero unnecessary dependencies.",
    },
    stack: ["React", "Vite", "Tailwind CSS", "JavaScript", "Responsive Design"],
    githubUrl: "https://github.com/amir0321/CodeForge",
    caseStudyUrl: "https://github.com/amir0321/amir0321/blob/main/projects/other-projects.md#codeforge",
  },
  {
    id: "taskflow",
    title: "TaskFlow",
    image: taskflow1,
    images: [taskflow1, taskflow2],
    visibility: "public",
    featured: false,
    categories: ["frontend"],
    accent: "indigo",
    subtitle: {
      sv: "Produktivitets- och uppgiftshanterare med lokal lagring",
      en: "Productivity & task management dashboard with local persistence",
    },
    description: {
      sv: "En ren, tillgänglig och responsiv webbapplikation för att organisera dagliga uppgifter, prioriteringar och produktivitetsstatistik med direkt feedback i gränssnittet.",
      en: "A clean, accessible, and responsive web app for managing daily tasks, priority levels, and productivity stats with immediate UI feedback.",
    },
    role: {
      sv: "Utvecklade applikationens UI-komponenter, filtreringslogik och lokala synkronisering.",
      en: "Developed UI components, multi-criteria filtering logic, and local storage state persistence.",
    },
    highlight: {
      sv: "Optimerad för snabb tangentbordsinteraktion, tillståndshantering utan externa bibliotek och tillgängliga ARIA-attribut.",
      en: "Optimized for fast keyboard interaction, lightweight state management without heavy libraries, and accessible ARIA attributes.",
    },
    stack: ["React", "JavaScript", "CSS3", "Local Storage", "Accessibility"],
    githubUrl: "https://github.com/amir0321/TASKFLOW",
    caseStudyUrl: "https://github.com/amir0321/amir0321/blob/main/projects/other-projects.md#taskflow",
  },
  {
    id: "nextwatch",
    title: "NextWatch",
    image: nextwatch1,
    images: [nextwatch1, nextwatch2],
    visibility: "public",
    featured: false,
    categories: ["frontend"],
    accent: "amber",
    subtitle: {
      sv: "Film- och streamingkatalog integrerad mot TMDB",
      en: "Movie & streaming catalog powered by the TMDB API",
    },
    description: {
      sv: "En streaming-inspirerad webbapplikation där användare söker och utforskar filmer och serier, ser betyg, genrer, trailers och relaterade titlar i realtid.",
      en: "A streaming-inspired web app allowing users to browse and search movies and TV series, view ratings, trailers, genres, and related titles via TMDB.",
    },
    role: {
      sv: "Integrerade TMDB:s REST-API med Axios, byggde sök- och filtreringsgränssnittet samt designade de responsiva filmkorten.",
      en: "Integrated the TMDB REST API with Axios, built the search and genre filtering UI, and styled responsive movie cards.",
    },
    highlight: {
      sv: "Tydlig separation mellan datahämtning, fel-/laddningstillstånd (MoviesStatus) och presentationskomponenter.",
      en: "Clean separation between API fetching, state feedback (MoviesStatus), and presentational views.",
    },
    stack: ["React", "React Router", "Axios", "TMDB API", "CSS"],
    githubUrl: "https://github.com/amir0321/Nextwatch",
    caseStudyUrl: "https://github.com/amir0321/amir0321/blob/main/projects/other-projects.md#nextwatch",
  },
  {
    id: "frontend-ui-collection",
    title: "Modern UX · Pärmar & Poesi · Solaris",
    image: frontend1,
    images: [frontend1, frontend2],
    visibility: "public",
    featured: false,
    categories: ["frontend"],
    accent: "cyan",
    subtitle: {
      sv: "Gränssnitts-, design- och arkitekturprojekt i Tailwind, SCSS & JS",
      en: "UI/UX, Sass architecture & interactive DOM projects",
    },
    description: {
      sv: "Tre fokuserade frontendprojekt: en responsiv SaaS-landningssida i React & Tailwind CSS (Modern UX), en gruppbyggd bokhandel med gemensam Sass-arkitektur (Pärmar & Poesi) samt en interaktiv solsystemsvisualisering (Solaris).",
      en: "Three focused frontend projects: a responsive SaaS landing page in React & Tailwind CSS (Modern UX), a team-built bookstore using shared Sass variables/mixins (Pärmar & Poesi), and an interactive solar system visualizer (Solaris).",
    },
    role: {
      sv: "Ansvarade för komponentuppdelning och visuell hierarki i Modern UX, huvudstruktur och Sass-integration i Pärmar & Poesi samt kedjade asynkrona API-anrop i Solaris.",
      en: "Led component hierarchy in Modern UX, main layout and Sass integration in Pärmar & Poesi, and chained async API key/planet requests in Solaris.",
    },
    highlight: {
      sv: "Visar bredd inom modern styling (Tailwind CSS, SCSS-mixins/variabler och ren CSS) samt modulär JavaScript utan ramverk.",
      en: "Demonstrates breadth across styling paradigms (Tailwind CSS, SCSS mixins/variables, vanilla CSS) and modular framework-free JavaScript.",
    },
    stack: ["React", "Tailwind CSS", "SCSS / Sass", "Vanilla JS", "Async REST API", "Responsive Design"],
    githubUrl: "https://github.com/amir0321/modern-ux",
    caseStudyUrl: "https://github.com/amir0321/amir0321/blob/main/projects/other-projects.md",
  },
  {
    id: "client-booking-sites",
    title: "Lokala Verksamhets- & Bokningswebbplatser",
    image: client1,
    images: [client1, client2],
    visibility: "private",
    featured: false,
    categories: ["fullstack", "frontend", "private"],
    accent: "emerald",
    subtitle: {
      sv: "Skräddarsydda webbplatser med digital tidsbokning för lokala företag",
      en: "Custom websites with digital appointment booking for local businesses",
    },
    description: {
      sv: "Privata kund- och verksamhetsprojekt (bland annat för Folket Frisör och Trafiksola) med fokus på tydlig tjänstepresentation, lokal synlighet och smidig digital tidsbokning.",
      en: "Private business projects (including Folket Frisör and Trafiksola) focused on service presentation, local reach, and digital appointment booking.",
    },
    role: {
      sv: "Helhetsansvar för design, responsiv frontend och bokningsflöden anpassade efter respektive verksamhets behov.",
      en: "End-to-end responsibility for UI/UX design, responsive frontend, and booking workflows tailored to each business.",
    },
    highlight: {
      sv: "Anpassade användarflöden för bokning och kontakt. Repon hålls privata av hänsyn till verksamheternas integritet och konfiguration.",
      en: "Tailored booking and customer inquiry flows. Repositories are kept private to protect business configurations and client privacy.",
    },
    stack: ["React", "TypeScript / JS", "Booking Flows", "Responsive UI/UX", "SEO"],
    githubUrl: null,
    caseStudyUrl: "https://github.com/amir0321/amir0321#privata-projekt",
  },
];

export default mywork_data;

const mywork_data = [
  {
    id: "filmvisarna",
    title: "Filmvisarna Cinema",
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
    id: "tracelock",
    title: "TraceLock",
    visibility: "private",
    featured: false,
    categories: ["security", "private"],
    accent: "emerald",
    subtitle: {
      sv: "Cybersäkerhetsprojekt för detektering av misstänkt webbtrafik",
      en: "Cybersecurity project for detecting suspicious web traffic",
    },
    description: {
      sv: "Ett privat cybersäkerhetsprojekt där jag utforskar hur webbapplikationer kan identifiera, analysera och hantera avvikande eller misstänkt trafik i realtid.",
      en: "A private cybersecurity project exploring how web applications can identify, analyze, and respond to anomalous or suspicious traffic patterns.",
    },
    role: {
      sv: "Eget forsknings- och utvecklingsprojekt inom applikationssäkerhet och trafikanalys.",
      en: "Independent research and development project focused on application security and traffic inspection.",
    },
    highlight: {
      sv: "Fokuserar på detekteringsmekanismer, logganalys och skyddsåtgärder mot automatiserade attacker. Hålls privat av säkerhetsskäl.",
      en: "Focuses on detection heuristics, request inspection, and defensive countermeasures against automated abuse. Kept private for security reasons.",
    },
    stack: ["Cybersecurity", "AppSec", "Traffic Inspection", "Anomaly Detection", "Web Security"],
    githubUrl: null,
    caseStudyUrl: "https://github.com/amir0321/amir0321#privata-projekt",
  },
  {
    id: "codeforge",
    title: "CodeForge",
    visibility: "public",
    featured: false,
    categories: ["frontend", "security"],
    accent: "cyan",
    subtitle: {
      sv: "Tvåspråkig plattform för webbutveckling & cybersäkerhet",
      en: "Bilingual digital agency platform for web dev & cybersecurity",
    },
    description: {
      sv: "Tvåspråkig (SV/EN) webbplats för digitala tjänster inom webbutveckling och cybersäkerhet, där React Context styr språkväxlingen över hela applikationen.",
      en: "Bilingual (SV/EN) website showcasing web development and cybersecurity services, powered by React Context for seamless language switching.",
    },
    role: {
      sv: "Designade gränssnittet, byggde språkhanteringen med gemensamma språkfiler och säkrade kontaktflödet.",
      en: "Designed the UI, engineered the React Context i18n system, and implemented client-side form protection.",
    },
    highlight: {
      sv: "Kontaktformuläret skyddas mot enkla botar med ett dolt honeypot-fält samt 60 sekunders rate-limiting i klienten.",
      en: "Protected the contact flow against basic spam bots using a hidden honeypot field and a 60-second client-side rate limit.",
    },
    stack: ["React", "Context API (i18n)", "JavaScript", "CSS3", "Bot Protection"],
    githubUrl: "https://github.com/amir0321/codeforge",
    caseStudyUrl: "https://github.com/amir0321/amir0321/blob/main/projects/other-projects.md#codeforge",
  },
  {
    id: "taskflow",
    title: "Taskflow",
    visibility: "public",
    featured: false,
    categories: ["fullstack", "security"],
    accent: "indigo",
    subtitle: {
      sv: "Fullstack uppgiftshanterare med JWT & MongoDB",
      en: "Fullstack task manager with JWT auth & MongoDB",
    },
    description: {
      sv: "Fullstackapplikation för att organisera uppgifter efter prioritet, förfallodatum och status med dokumentmodellering i MongoDB och Mongoose.",
      en: "Fullstack application for organizing tasks by priority, due date, and status using document modeling in MongoDB and Mongoose.",
    },
    role: {
      sv: "Byggde både frontend och Express-API samt definierade Mongoose-scheman med ägarreferenser och begränsade prioritetsnivåer.",
      en: "Built both the frontend and Express API, defining Mongoose schemas with owner references and strict priority enums.",
    },
    highlight: {
      sv: "Express-middleware verifierar JWT-tokens vid anrop till skyddade rutter och knyter varje uppgift till sin ägare.",
      en: "Custom Express middleware verifies JWT tokens on protected routes and scopes tasks to their authenticated owner.",
    },
    stack: ["React", "Node.js", "Express", "MongoDB", "Mongoose", "JWT"],
    githubUrl: "https://github.com/amir0321/TASKFLOW",
    caseStudyUrl: "https://github.com/amir0321/amir0321/blob/main/projects/other-projects.md#taskflow",
  },
  {
    id: "nextwatch",
    title: "NextWatch",
    visibility: "public",
    featured: false,
    categories: ["frontend"],
    accent: "amber",
    subtitle: {
      sv: "Filmapp i React med dedikerat API-servicelager",
      en: "React movie discovery app with dedicated API service layer",
    },
    description: {
      sv: "React-applikation som hämtar populära och kommande filmer från The Movie Database (TMDB) med återanvändbara detaljvyer via dynamiska rutter (/movie/:id).",
      en: "React application fetching popular and upcoming movies from The Movie Database (TMDB) with reusable detail views via dynamic routing (/movie/:id).",
    },
    role: {
      sv: "Separerade Axios-anrop i ett eget servicelager och skapade en gemensam statuskomponent för laddning, fel och tomma sökresultat.",
      en: "Isolated Axios calls in a dedicated service layer and built a unified MoviesStatus component for loading, error, and empty states.",
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
    visibility: "private",
    featured: false,
    categories: ["fullstack", "frontend", "private"],
    accent: "emerald",
    subtitle: {
      sv: "Skräddarsydda webbplatser med digital tidsbokning för lokala företag",
      en: "Custom websites with digital appointment booking for local businesses",
    },
    description: {
      sv: "Privata kund- och verksamhetsprojekt (bland annat för salonger, trafikskola och bilservice) med fokus på tydlig tjänstepresentation, lokal synlighet och smidig digital tidsbokning.",
      en: "Private business projects (including hair salons, driving school, and auto service) focused on service presentation, local reach, and digital appointment booking.",
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

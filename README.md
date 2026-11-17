# Portfolio – Ameer Shameel

Min personliga portfolio för att presentera projekt, tekniska färdigheter och hur
jag arbetar med frontend, backend/API:er, databaser och applikationssäkerhet.
Webbplatsen är byggd med React och Vite, stöder svenska och engelska och publiceras på Vercel.

**Publicerad webbplats: [portfolio-coral-three-27.vercel.app](https://portfolio-coral-three-27.vercel.app/)**

[Källkod](https://github.com/amir0321/Portfolio) ·
[CI och byggstatus](https://github.com/amir0321/Portfolio/actions/workflows/ci.yml) ·
[GitHub-profil](https://github.com/amir0321) · [Säkerhetspolicy](SECURITY.md)

## Innehåll

- [Om projektet](#om-projektet)
- [Funktioner](#funktioner)
- [Teknik](#teknik)
- [Kom igång lokalt](#kom-igång-lokalt)
- [Kommandon](#kommandon)
- [Projektstruktur](#projektstruktur)
- [Innehåll och projektbilder](#innehåll-och-projektbilder)
- [Kontaktformulär](#kontaktformulär)
- [Tester och kvalitet](#tester-och-kvalitet)
- [Deployment på Vercel](#deployment-på-vercel)
- [Git och underhåll](#git-och-underhåll)
- [Felsökning](#felsökning)
- [Kontakt](#kontakt)

## Om projektet

Portfolion samlar min profil, mina fokusområden, utvalda projekt och kontaktvägar.
Projektpresentationerna beskriver tekniska beslut, min roll, dataintegritet och
säkerhetslösningar i de olika projekten.

Själva portfolion byggs till statiska HTML-, CSS-, JavaScript- och bildfiler.
Kontaktmeddelanden förmedlas av Web3Forms. Ingen egen server eller databas behöver
startas för att köra portfolion.

### Hur jag byggde portfolion

- **Komponentbaserad struktur:** varje sektion har en egen React-komponent och CSS,
  vilket gör det lättare att underhålla innehåll och layout.
- **React och Vite:** en enkel utvecklingsmiljö och ett produktionsbygge med hashade
  assets som kan levereras från Vercels CDN.
- **Gemensamt språkstöd:** ett context hanterar språkval och återanvändbara
  översättningar. Språkvalet sparas lokalt när webbläsarlagring är tillgänglig.
- **Datadrivna projektkort:** beskrivningar, kategorier, teknikstack och bildgallerier
  samlas i en gemensam datafil.
- **Prestanda och tillgänglighet:** WebP-bilder, lazy loading av projektbilder,
  fokusmarkeringar, tangentbordsstöd och stöd för reducerad rörelse.

## Funktioner

- Responsiv layout för mobil, surfplatta och större skärmar.
- Språkbyte mellan svenska och engelska.
- Presentation av profil, kompetenser och tekniska fokusområden.
- Projektfilter för bland annat fullstack, frontend, säkerhet och privata projekt.
- Bildgallerier, expanderbara tekniska detaljer och möjlighet att visa fler projekt.
- Länkar till publika repon och tekniska fördjupningar där sådana finns.
- Kontaktformulär med validering, hCaptcha och återkoppling vid skickning.
- Direktlänkar för e-post, telefon och GitHub.
- Mobilmeny som stängs med Escape, vid val av sektion och vid klick utanför menyn.
- Sidtitel, beskrivning, delningsmetadata, egen favicon och `robots.txt`.

## Teknik

| Område | Teknik |
| --- | --- |
| Gränssnitt | React 19, JavaScript med JSX, CSS |
| Utveckling och bygge | Vite 7, Node.js 22, npm |
| Språkstöd | React Context och `localStorage` |
| Kontaktmeddelanden | Web3Forms och hCaptcha |
| Kodkontroll | ESLint |
| Tester | Vitest, React Testing Library, jest-dom och jsdom |
| Bildoptimering | Sharp och WebP |
| CI och uppdateringar | GitHub Actions och Dependabot |
| Hosting | Vercel |

Exakta installerade beroendeversioner styrs av `package-lock.json`.

## Kom igång lokalt

Du behöver Git, Node.js **22.x**, npm och en modern webbläsare. Node-versionen anges
i `.nvmrc` och `package.json`.

```bash
git clone https://github.com/amir0321/Portfolio.git
cd Portfolio
npm ci
npm run dev
```

Öppna den lokala adress som Vite skriver ut i terminalen. Om du använder nvm kan du
välja rätt Node-version före installationen:

```bash
nvm install
nvm use
```

Det befintliga kontaktformuläret fungerar utan en lokal miljöfil. Internetanslutning
krävs för bland annat Web3Forms, hCaptcha och de externa webbtypsnitten.

## Kommandon

| Kommando | Beskrivning |
| --- | --- |
| `npm ci` | Installerar beroendena från låsfilen. |
| `npm run dev` | Startar utvecklingsservern med automatisk uppdatering. |
| `npm run lint` | Kontrollerar JavaScript och JSX med ESLint. |
| `npm test` | Kör regressionstesterna en gång. |
| `npm run test:watch` | Kör tester i bevakningsläge. |
| `npm audit --audit-level=low` | Kontrollerar beroenden mot npm:s aktuella sårbarhetsuppgifter. |
| `npm run build` | Skapar ett produktionsbygge i `dist/`. |
| `npm run preview` | Förhandsvisar ett redan skapat produktionsbygge lokalt. |
| `npm run optimize:images` | Konverterar projektbilder i PNG/JPEG till optimerad WebP. |

För att kontrollera produktionsbygget lokalt:

```bash
npm run build
npm run preview
```

## Projektstruktur

```text
Portfolio/
├── .github/
│   ├── workflows/ci.yml         # Installation, lint, tester, audit och build
│   ├── dependabot.yml          # Förslag på beroendeuppdateringar
│   └── pull_request_template.md
├── public/
│   ├── favicon.svg
│   └── robots.txt
├── scripts/optimize-images.mjs
├── src/
│   ├── Components/
│   │   ├── About/
│   │   ├── Contact/
│   │   ├── Footer/
│   │   ├── Hero/
│   │   ├── MyWork/
│   │   ├── Navbar/
│   │   └── Services/
│   ├── assets/
│   │   ├── projects/           # Optimerade projektbilder
│   │   ├── mywork_data.js      # Projektinnehåll och länkar
│   │   └── services_data.js    # Fokusområden och kompetenser
│   ├── context/LanguageContext.jsx
│   ├── test/setup.js
│   ├── App.jsx                # Sidans sektioner
│   ├── index.css              # Globala stilar och designvariabler
│   └── main.jsx               # React-startpunkt
├── .env.example
├── .gitignore
├── .nvmrc
├── index.html                 # HTML-startpunkt och metadata
├── package.json
├── package-lock.json
├── SECURITY.md
├── vercel.json
└── vite.config.js
```

Regressionstester ligger intill de komponenter och det context som de testar.
`dist/` genereras av byggkommandot och ingår inte i Git.

## Innehåll och projektbilder

### Uppdatera innehåll

- Gemensamma svenska och engelska texter: `src/context/LanguageContext.jsx`.
- Projektkort, bildimporter, kategorier och länkar: `src/assets/mywork_data.js`.
- Fokusområden och exempel: `src/assets/services_data.js`.
- Färger, typsnitt och gemensamma layoutregler: `src/index.css`.
- Sidtitel, beskrivning och delningsmetadata: `index.html`.

Håll båda språken uppdaterade när du ändrar innehåll. Privata projekt kan beskrivas
utan att länka till privat källkod; publicera endast bilder och uppgifter som får delas.

### Lägg till projektbilder

1. Lägg PNG/JPEG-original i `src/assets/projects/`.
2. Kör `npm run optimize:images`.
3. Uppdatera importerna i `src/assets/mywork_data.js` till de nya `.webp`-filerna.
4. Kontrollera bilderna i projektkort och bildgallerier.
5. Ta bort originalen före commit när du är nöjd med resultatet.

Optimeringen använder högst 1 280 pixlars bredd utan att förstora små bilder och
WebP-kvalitet 82. Originalen bevaras av skriptet tills du tar bort dem själv.

## Kontaktformulär

Besökaren fyller i namn, e-postadress och meddelande och bekräftar hCaptcha.
Formuläret skickar uppgifterna och captcha-token till Web3Forms, som hanterar
leveransen till mottagaren som är inställd i Web3Forms-kontot.

Formuläret innehåller:

- Kontroll av obligatoriska fält och e-postformat.
- Maxlängder på 100 tecken för namn, 254 för e-post och 5 000 för meddelande.
- hCaptcha, honeypot och en lokal cooldown på 60 sekunder efter lyckad skickning.
- Skydd mot dubbla skickningar medan ett anrop pågår.
- Hantering av HTTP-fel, nätverksfel och timeout efter 15 sekunder.
- Ny captcha-verifiering efter varje skickningsförsök.
- Direkt e-postlänk som alternativ om formulärtjänsten inte är tillgänglig.

Klientens cooldown och honeypot är kompletterande kontroller. Serversidans krav på
hCaptcha styrs i Web3Forms under **Settings → Captcha Protection** och ska vara
aktiverat för formuläret som används.

### Miljövariabler och mottagare

Ingen miljövariabel krävs för det befintliga formuläret. För att använda ett annat
Web3Forms-formulär, kopiera `.env.example` till `.env.local` och ange:

```dotenv
VITE_WEB3FORMS_ACCESS_KEY=ditt-publika-formular-id
```

Starta om utvecklingsservern efter ändringen. För produktion anger du samma variabel
i Vercels projektinställningar och gör en ny deployment.

`VITE_WEB3FORMS_ACCESS_KEY` är ett publikt formulär-ID som inkluderas i klientbygget.
Privata API-nycklar och andra hemligheter ska aldrig läggas i `VITE_*`-variabler.
Den faktiska mottagaradressen anges under **Recipient Emails** i Web3Forms. Den
publika e-postlänken på sidan hanteras separat i komponenterna.

Se [Web3Forms officiella anvisningar för React och hCaptcha](https://docs.web3forms.com/getting-started/customizations/spam-protection/hcaptcha).

## Tester och kvalitet

Kör följande före publicering av en ändring:

```bash
npm run lint
npm test
npm audit --audit-level=low
npm run build
```

Testerna omfattar validering, captcha som saknas eller har gått ut, dubbla
skickningar, lyckade och misslyckade API-svar, cooldown, mobilmenyns stängningsbeteende
och språkbyte när webbläsarlagring är blockerad.

Web3Forms och captcha mockas i testerna, så inga riktiga kontaktmeddelanden skickas.
Ett komplett leveranstest görs manuellt på den publicerade sidan: fyll i formuläret,
lös captcha och kontrollera att meddelandet når rätt inkorg.

Kontrollera också berörda vyer på smal mobil och större skärm, på båda språken och
med tangentbord. Automatiska tester ersätter inte visuell kontroll.

## Deployment på Vercel

**Portfolion är publicerad på [https://portfolio-coral-three-27.vercel.app/](https://portfolio-coral-three-27.vercel.app/).**

Projektets deploymentkonfiguration finns i `vercel.json`:

| Inställning | Värde |
| --- | --- |
| Git-repository | `amir0321/Portfolio` |
| Produktionsbranch | `main` |
| Root Directory | `./` |
| Framework / Application Preset | `Vite` |
| Node.js | `22.x` enligt `package.json` |
| Install Command | `npm ci` |
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Obligatoriska miljövariabler för befintligt formulär | Inga |

### Publicera och uppdatera

1. Importera GitHub-repot i Vercel med inställningarna ovan om ett nytt hostingprojekt behövs.
2. Låt `vercel.json` styra installation, bygge och output.
3. Publicera med **Deploy** och kontrollera att statusen blir **Ready**.
4. Med Vercels Git-integration kopplad till `main` byggs nya ändringar där automatiskt.
5. Kontrollera sidan efter deployment: språkbyte, navigation, projektfilter, bilder och kontaktformulär.

Konfigurationen anger säkerhetsheaders för innehållstyp, inramning, referrer-policy
och begränsad åtkomst till kamera, mikrofon och position. Hashade filer under
`/assets/` får lång cachetid. Övriga sökvägar har fallback till `index.html`.

## Git och underhåll

Checka in källkod, konfiguration och `package-lock.json`. Följande genererade eller
lokala filer ignoreras av Git:

- `node_modules/` och `dist/`.
- `.vercel/` och `coverage/`.
- `.env` och `.env.*`, med undantag för den dokumenterande `.env.example`.
- Loggfiler, `.DS_Store` och lokala editorfiler enligt `.gitignore`.

GitHub Actions kör `npm ci`, lint, tester, säkerhetskontroll och bygge vid pull
requests till `main` och ändringar på `main`. Jobbet heter **Verify**.

Branchskyddet för `main` kräver pull request, grön `Verify`, uppdaterad branch och
lösta granskningsdiskussioner. Force push och borttagning av branchen är blockerade.
Det personliga projektet kräver ingen ytterligare godkännare.

Dependabot föreslår uppdateringar av npm-paket och GitHub Actions varje vecka.
Granska ändringarna och låt CI passera före merge, särskilt vid större versionsbyten.
Det finns en [PR-mall](.github/pull_request_template.md) för beskrivning och verifiering.

## Felsökning

| Problem | Kontrollera |
| --- | --- |
| Installation eller verktyg misslyckas | Använd Node 22 med `nvm use` och installera med `npm ci`. |
| Vercel hittar inte projektet eller byggfilerna | Använd `main`, projektroten `./`, preset Vite och output `dist`. |
| Formuläret kräver verifiering | Lös hCaptcha igen; en token kan gå ut och återställs efter ett skickningsförsök. |
| Formuläret visar cooldown | Vänta en minut efter den senaste lyckade skickningen. |
| Meddelandet syns inte i inkorgen | Kontrollera mottagaren i Web3Forms samt skräppost och övriga inkorgsflikar. |
| Ändrad miljövariabel får ingen effekt | Starta om Vite lokalt eller skapa en ny deployment i Vercel. |
| Direkt push till `main` nekas | Använd en branch och PR som passerar `Verify`-kontrollen. |

## Kontakt

- **Ameer Shameel**
- Webbplats: [portfolio-coral-three-27.vercel.app](https://portfolio-coral-three-27.vercel.app/)
- GitHub: [@amir0321](https://github.com/amir0321)
- E-post: [ameer.tech28@gmail.com](mailto:ameer.tech28@gmail.com)

Rapportera säkerhetsproblem enligt [SECURITY.md](SECURITY.md).

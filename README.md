# 🌟 Portfolio – Ameer Shameel (React + Vite)

Min personliga portfoliowebbplats byggd i React och Vite för att presentera mina projekt, tekniska färdigheter och kontaktvägar på ett enkelt och responsivt sätt.

---

## 🧠 Hur jag byggde portfolion

- **Komponentbaserad struktur (`src/Components/`):**
  Jag delade upp sidan i tydliga, fristående komponenter för presentation, projektkort och kontakt så att det är enkelt att lägga till nya projekt allt eftersom utbildningen går framåt.
- **Snabb laddning med Vite:**
  Valde React + Vite utan tunga extra-bibliotek för att hålla bygget litet och snabbt.

---

## 🚀 Köra lokalt

```bash
git clone https://github.com/amir0321/Portfolio.git
cd Portfolio
nvm install
nvm use
npm ci
npm run dev
```

Projektet använder Node.js 22 (se `.nvmrc` och `package.json`). Svenska och engelska
stöds, och språkvalet sparas lokalt i webbläsaren när lagring är tillgänglig.

## Kontroller före merge

```bash
npm run lint
npm test
npm audit --audit-level=low
npm run build
npm run preview
```

GitHub Actions kör installation, lint, tester, säkerhetskontroll och produktionsbygge
för pull requests till `main` och ändringar på `main`. Checken heter `Verify`.
Testerna mockar Web3Forms och captcha; de skickar inga riktiga kontaktmeddelanden.
Dependabot kontrollerar npm-paket och GitHub Actions varje vecka.

## Deployment på Vercel

1. Importera `amir0321/Portfolio` och välj `main` som produktionsbranch.
2. Använd projektroten (`./`) och preset **Vite**.
3. Använd Node.js **22.x**, installation `npm ci`, build `npm run build` och output `dist`.
4. Vänta på grön `Verify` före merge. Vercels Git-integration bygger sedan om `main`.
5. Kontrollera den publicerade adressen: mobilmeny, språkbyte, projektbilder,
   kontaktformulär och säkerhetsheaders.

`vercel.json` deklarerar byggkommandot, output, säkerhetsheaders och lång cache för
hashade assets. `dist/`, `node_modules/`, `.vercel/`, `coverage/` och lokala miljöfiler
ska inte checkas in. Byggfiler genereras vid deployment.

### Kontaktformulär och spamkontroll

Formuläret använder Web3Forms med hCaptcha. **Aktivera hCaptcha under formulärets
Block Spam-inställning i Web3Forms-kontot** så att tjänsten kräver och verifierar
captcha på serversidan även vid direkta API-anrop. Klientens honeypot och cooldown
är kompletterande användarflöden, inte serverbaserad rate-limiting.

Integration och den publika sitekeyn följer
[Web3Forms officiella React-anvisningar](https://docs.web3forms.com/getting-started/customizations/spam-protection/hcaptcha).
Ett riktigt end-to-end-test kräver en människa som löser captcha och kontrollerar
att meddelandet kommer fram. Automatisk verifiering skickar inga e-postmeddelanden.

Ingen miljövariabel krävs för det befintliga formuläret. Om ett annat Web3Forms-formulär
ska användas, kopiera `.env.example` till `.env.local` och ange
`VITE_WEB3FORMS_ACCESS_KEY`. Ange samma värde i Vercel och bygg om. Detta är ett
publikt formulär-ID som hamnar i klientbygget; lägg aldrig privata nycklar i `VITE_*`.

### Projektbilder

Projektbilder levereras som WebP med högst 1 280 pixlars bredd. För nya bilder:

1. Lägg PNG/JPEG-original i `src/assets/projects/`.
2. Kör `npm run optimize:images`.
3. Uppdatera importerna i `src/assets/mywork_data.js` till `.webp` och kontrollera bilderna.
4. Ta bort originalen före commit; optimeringskommandot bevarar dem tills du gjort kontrollen.

### Branchskydd

`main` ska kräva pull request, grön `Verify`, uppdaterad branch och lösta
granskningsdiskussioner. Tvingade pushar och borttagning av branchen ska vara
avstängda. För detta personliga projekt krävs ingen ytterligare godkännare.

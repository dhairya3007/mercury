# Mercury Infotech React Reconstruction

A modern, responsive, high-performance reconstruction of the official **Mercury Infotech** website ([mercuryinfotech.co.uk](https://mercuryinfotech.co.uk/)), built with **React 18**, **Vite**, **Centralized CSS Architecture**, and **Motion for React**.

---

## 🚀 Key Highlights & Architectural Standards

- **Exact Business Fidelity**: Preserves all authentic business data, London/Harrow registered office address, ICO registration number (`CSN2076847`), verified Google reviews, services, products, pricing plans, and UK GDPR/PECR compliance policies without invented data.
- **Dedicated Preloader**: Interactive preloader with rotating quad blocks and brand logo reveal matching the original experience, powered by `motion/react` with reduced-motion support.
- **Centralized CSS Architecture**: Strict adherence to a non-fragmented CSS design system in `src/styles/` with a unified import hierarchy through `main.css`.
- **Dynamic Routing**: 14 distinct routes covering all services, products, partner technologies, legal documents, FAQs, and contact pages with `react-router-dom`.
- **Asset Preservation**: Original imagery, icons, logos, and badges stored and referenced locally in `public/assets/`.

---

## 📁 Project Structure

```
mercury/
├── public/
│   ├── assets/
│   │   ├── icons/            # Service & feature icons
│   │   ├── images/           # Banners, about visuals, review badges, and product mocks
│   │   └── logo/             # Official Mercury Infotech brand logo
│   ├── favicon.ico           # Brand favicon
│   └── robots.txt            # SEO crawler configuration
├── src/
│   ├── components/
│   │   ├── common/           # Preloader, Breadcrumb, ScrollToTop, NewsletterBanner
│   │   └── layout/           # Header, Navigation, MobileMenu, Footer, Layout shell
│   ├── data/                 # Modular business content, navigation, services, legal data
│   │   ├── faq.js
│   │   ├── legalPages.js     # Privacy Policy, Terms of Use, Cookie Policy
│   │   ├── navigation.js
│   │   ├── partners.js       # System Hub & Chai Pe Charcha
│   │   ├── pricing.js        # Starter (£799), Business (£1599), Custom
│   │   ├── products.js       # NFC Card, Digital Catalog, Feedback, One Page Website
│   │   ├── services.js       # Web Dev, Graphic Design, CRM, Scheduling
│   │   ├── siteContent.js    # Contact, ICO number, Address, Socials, Stats
│   │   └── testimonials.js   # Verified Google reviews
│   ├── hooks/
│   │   └── usePreloader.js   # Preloader lifecycle & safety timeout
│   ├── pages/                # All 12 page views
│   ├── routes/
│   │   └── AppRoutes.jsx     # Route definitions
│   ├── styles/               # Centralized CSS System
│   │   ├── components/       # Header, Footer, Cards, Forms, Buttons, Accordion, etc.
│   │   ├── pages/            # Home, About, Services, Products, Partners, Legal, etc.
│   │   ├── layout.css        # Grid systems & animated background lines
│   │   ├── main.css          # Master import aggregator
│   │   ├── reset.css         # Modern CSS reset
│   │   ├── typography.css    # Saira typography rules
│   │   ├── utilities.css     # Spacing, helpers, and responsive classes
│   │   └── variables.css     # CSS Custom Properties & Design Tokens
│   ├── App.jsx               # Application root
│   └── main.jsx              # DOM entry point
├── index.html                # HTML entry point with Saira Google Font & FontAwesome
├── package.json
└── vite.config.js
```

---

## 🛠️ Available Scripts

In the project root, you can run:

### `npm run dev`
Starts the local development server with Vite hot module replacement (HMR).

### `npm run build`
Compiles and bundles the production distribution into the `dist/` directory.

### `npm run preview`
Locally previews the production build from `dist/`.

---

## 📋 Verified Business Information

| Entity | Details |
|---|---|
| **Company Name** | Mercury Infotech Ltd |
| **ICO Data Protection** | CSN2076847 |
| **Registered Address** | 11, Hillrise Court, 135 Kenton Rd, Harrow HA3 0AZ, United Kingdom |
| **Phone** | +44 7442 974622 |
| **Emails** | Info@mercuryinfotech.co.uk / imercuryinfotechuk@gmail.com |
| **Operating Hours** | Monday to Friday: 09:00 AM – 06:00 PM (UK Time) |




[Privacy Policy](http://localhost:3000/privacy-policy)
[Terms of Use](http://localhost:3000/terms-of-use)
[Cookie Policy](http://localhost:3000/cookie-policy)
 in those page pls check if any content is missing then tell me  and add it pls one table is missing i guess 
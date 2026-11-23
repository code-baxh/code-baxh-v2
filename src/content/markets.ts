import type { Market } from "./types";

/**
 * Market pages (/markets/[slug]). Each one must stay genuinely specific to its market:
 * contract, hours, data rules and integrations. Near-identical location pages are
 * treated as doorway pages by search engines, so never clone one and swap the name.
 * Keep regulatory statements to well-established facts, and re-check dates yearly.
 */
export const markets: Market[] = [
  {
    slug: "united-states",
    name: "United States",
    inName: "the US",
    summary: "A US contract in dollars, live overlap from Eastern to Pacific, and products built for HIPAA, SOC 2 and state privacy laws.",
    metaTitle: "Software Development Company for US Businesses",
    metaDescription:
      "Software and AI development for US companies: a US contract priced in dollars, overlap with every US time zone, and HIPAA, SOC 2 and privacy built in.",
    eyebrow: "Software development for the US",
    headline: "Software and AI development for US companies.",
    lead: "We build SaaS platforms, web and mobile apps and AI features for US companies. You sign a US contract, work with us inside your own business hours, and own everything we build.",
    working: [
      {
        title: "A US contract, priced in dollars",
        body: "You contract with CodeBaxh LLC, registered in Missouri. Agreements are governed by Missouri law, projects are quoted in US dollars, and fixed-scope work is paid by milestone.",
      },
      {
        title: "Every US time zone",
        body: "Our engineers work a late shift, so standups, reviews and urgent fixes happen inside your working day, whether you are on Eastern, Central, Mountain or Pacific time.",
      },
      {
        title: "A US number and one lead",
        body: "Call us on +1 364 999 7842. Bilal Khursheed, our founder, leads every engagement and stays your point of contact from discovery to launch.",
      },
      {
        title: "Your code, your IP",
        body: "Once milestones are paid, the code, designs and documentation are yours. We sign NDAs before you share anything sensitive and can work in your own GitHub and cloud accounts.",
      },
    ],
    compliance: [
      {
        title: "State privacy laws",
        body: "There is no single federal privacy law. California's CCPA, as amended by the CPRA, and a growing list of other state laws give users rights to see and delete their data. We build data export, deletion and consent records in from the start.",
      },
      {
        title: "HIPAA for health data",
        body: "Protected health information needs a business associate agreement with every vendor that touches it. We choose HIPAA-eligible services, encrypt data at rest and in transit, and log who accessed what.",
      },
      {
        title: "SOC 2-ready engineering",
        body: "Enterprise buyers ask for SOC 2 evidence early. We build role-based access, audit logs and reviewed, automated deployments into the product, so the controls already exist when you start an audit.",
      },
      {
        title: "Accessibility and the ADA",
        body: "Website accessibility claims under the Americans with Disabilities Act are common in the US. We build interfaces to WCAG 2.2 AA, the current version of the standard accessibility audits measure against.",
      },
      {
        title: "Sales tax on SaaS",
        body: "States tax software subscriptions differently, and some do not tax them at all. We connect billing to Stripe Tax so each customer is charged the right rate for where they are.",
      },
      {
        title: "COPPA and FERPA for EdTech",
        body: "Products for schools and children under 13 need parental consent under COPPA and careful handling of student records under FERPA. Our founder recently delivered a K-12 AI tutoring service built on row-level security in Postgres.",
      },
    ],
    integrations: [
      "Stripe Billing, Tax and Connect",
      "Twilio SMS and voice",
      "HubSpot and Salesforce",
      "Okta and Auth0 single sign-on",
      "QuickBooks",
      "AWS and Google Cloud US regions",
    ],
    caseStudies: ["multi-tenant-saas-mvp", "home-equity-fintech-saas", "ai-call-analysis"],
    faqs: [
      {
        q: "Can a US company contract with you directly?",
        a: "Yes. CodeBaxh LLC is a limited liability company registered in Missouri (charter number LC014772565). You sign a US contract governed by Missouri law, and projects are quoted in US dollars.",
      },
      {
        q: "Which US time zones do you cover?",
        a: "All of them. Our engineering team works a late shift, so calls, code reviews and fixes happen during your working day on Eastern, Central, Mountain or Pacific time.",
      },
      {
        q: "What does a project cost?",
        a: "Most projects start from $10k. Fixed-scope work is quoted after a discovery call, with milestone payments. Retainers and staff augmentation are priced per month.",
      },
      {
        q: "Can you build products that handle health data?",
        a: "Yes. We discuss HIPAA in discovery, before any patient data is involved: which vendors will sign a business associate agreement, where data is hosted and how access is logged.",
      },
    ],
  },
  {
    slug: "europe",
    name: "Europe",
    inName: "Europe",
    summary: "GDPR by contract, the EU AI Act and accessibility rules built in, and hours that match the European working day.",
    metaTitle: "Software Development Company for European Businesses",
    metaDescription:
      "Software and AI development for European companies: a GDPR data processing agreement, EU hosting, the AI Act built in, and a team in Stockholm on your hours.",
    eyebrow: "Software development for Europe",
    headline: "Software and AI development for European companies.",
    lead: "We build SaaS platforms, web and mobile apps and AI features for companies across Europe, from France and the Benelux to Spain and Italy. GDPR and the EU AI Act are in the plan from day one, and our hours match yours.",
    working: [
      {
        title: "GDPR by contract",
        body: "We sign a data processing agreement under Article 28 GDPR, with the EU's Standard Contractual Clauses covering any personal data our engineering team in Pakistan can access.",
      },
      {
        title: "Your whole working day",
        body: "Our Stockholm team works Central European hours, and engineering in Islamabad overlaps the full European and UK working day, from Lisbon and London to Helsinki.",
      },
      {
        title: "A team inside the EU",
        body: "Our product and delivery team is in Stockholm, so your project is owned by people in the EU, and you can meet them in person.",
      },
      {
        title: "Clear pricing and ownership",
        body: "Projects are quoted after discovery with milestone payments, and most start from $10k. Once milestones are paid, the code and IP are yours.",
      },
    ],
    compliance: [
      {
        title: "GDPR inside the product",
        body: "Consent records, data export, deletion and retention rules are built into the product rather than added before launch. Personal data is hosted in EU cloud regions unless you choose otherwise.",
      },
      {
        title: "EU AI Act transparency",
        body: "Article 50 of the AI Act applies from 2 August 2026: people must be told when they are talking to an AI. Our chatbots and assistants disclose it, and we document what each AI feature does and which model it uses.",
      },
      {
        title: "European Accessibility Act",
        body: "Since 28 June 2025, many consumer services, including e-commerce and banking, must meet accessibility requirements across the EU. We build interfaces to WCAG 2.2 AA.",
      },
      {
        title: "VAT on digital services",
        body: "Digital services sold to consumers are taxed at the rate of the customer's country, while B2B sales usually use the reverse charge. We set up your billing so both are invoiced correctly.",
      },
    ],
    integrations: [
      "Stripe with SEPA Direct Debit",
      "iDEAL (Netherlands)",
      "Bancontact (Belgium)",
      "Cartes Bancaires (France)",
      "Klarna",
      "Mollie",
      "EU regions on AWS, Google Cloud and Azure",
    ],
    caseStudies: ["legal-contract-ai", "multi-tenant-saas-mvp", "fika-wall-art-ecommerce"],
    faqs: [
      {
        q: "Is it GDPR-compliant to work with a team outside the EU?",
        a: "Yes, when the transfer is covered. We sign a data processing agreement with the EU Standard Contractual Clauses, give engineers access only to the data they need, and use anonymised or test data wherever we can.",
      },
      {
        q: "Do you work European hours?",
        a: "Yes. Our Stockholm team works Central European hours and engineering overlaps the full European and UK working day, so meetings and fixes happen in your hours.",
      },
      {
        q: "Does the EU AI Act apply to our chatbot?",
        a: "If people in the EU use it, it very likely does. Under Article 50, from 2 August 2026 users must be told they are interacting with an AI. We build that disclosure in and help you document the system. For anything that may be high-risk, take legal advice and we will build to it.",
      },
      {
        q: "What does a project cost?",
        a: "Most projects start from $10k. You get a written estimate with milestones after discovery, before any commitment.",
      },
    ],
  },
  {
    slug: "nordics",
    name: "Nordics",
    inName: "the Nordics",
    summary: "A team in Stockholm, BankID and MitID sign-in, Swish and Vipps MobilePay, and data kept in Nordic or EU regions.",
    metaTitle: "Software & AI Development for Nordic Companies",
    metaDescription:
      "Software and AI development for Swedish, Norwegian, Danish and Finnish companies, with a team in Stockholm, BankID and Swish integration, and EU hosting.",
    eyebrow: "Software development for the Nordics",
    headline: "Software and AI development for Nordic companies, with a team in Stockholm.",
    lead: "We build SaaS platforms, web and mobile apps and AI features for companies in Sweden, Norway, Denmark and Finland. Our product and delivery team is in Stockholm, and engineering covers your full working day.",
    working: [
      {
        title: "A team in Stockholm",
        body: "Usman Mustafa, our co-founder, runs product and delivery from Stockholm. Meet in person for kick-off and key workshops, and plan in your own time zone.",
      },
      {
        title: "Direct, and written down",
        body: "You get a shared backlog, a demo of working software every week, and plain answers about scope, risk and cost, with decisions recorded in writing.",
      },
      {
        title: "Data in the Nordics",
        body: "We sign a data processing agreement with Standard Contractual Clauses and keep personal data in Nordic or EU regions, such as AWS in Stockholm.",
      },
      {
        title: "Clear pricing",
        body: "Most projects start from $10k, quoted after discovery with milestone payments. Once they are paid, the code and IP are yours.",
      },
    ],
    compliance: [
      {
        title: "BankID and MitID sign-in",
        body: "Nordic users expect to sign in with their national e-ID: BankID in Sweden and Norway, MitID in Denmark and bank IDs in Finland. We integrate them through a certified identity broker, so you get one integration for all of them.",
      },
      {
        title: "Local payments",
        body: "Card checkout alone loses Nordic customers. We add the methods they use: Swish in Sweden, Vipps MobilePay in Norway, Denmark and Finland, and Klarna across the region.",
      },
      {
        title: "Privacy regulators that enforce",
        body: "Sweden's privacy regulator, IMY, has fined companies over personal data sent to the US through analytics tools. We keep tracking consent-based and personal data in the EU.",
      },
      {
        title: "Accessibility",
        body: "In Sweden, Denmark and Finland, the European Accessibility Act has applied to many consumer services since 28 June 2025. We build interfaces to WCAG 2.2 AA.",
      },
    ],
    integrations: [
      "BankID (Sweden and Norway)",
      "MitID (Denmark)",
      "Swish",
      "Vipps MobilePay",
      "Klarna",
      "Fortnox and Visma",
      "AWS Stockholm region",
    ],
    caseStudies: ["fika-wall-art-ecommerce", "transit-rewards-app", "multi-tenant-saas-mvp"],
    faqs: [
      {
        q: "Can we meet your team in Stockholm?",
        a: "Yes. Our product and delivery team, led by co-founder Usman Mustafa, is based in Stockholm. Meet in person for kick-off and key workshops, and online the rest of the time.",
      },
      {
        q: "Can you integrate BankID or MitID?",
        a: "Yes. We integrate national e-ID sign-in and signing through a certified identity broker, which handles certification and gives you one integration across BankID, MitID and Finnish bank IDs.",
      },
      {
        q: "Where will our data be hosted?",
        a: "In the EU, typically AWS's Stockholm region or another Nordic or EU region you choose. Engineers in Pakistan access personal data only under the data processing agreement and Standard Contractual Clauses, and use test data wherever possible.",
      },
      {
        q: "What does a project cost?",
        a: "Most projects start from $10k, with a written estimate and milestones after discovery.",
      },
    ],
  },
  {
    slug: "germany-austria-switzerland",
    name: "Germany, Austria & Switzerland",
    inName: "Germany, Austria and Switzerland",
    summary: "Fixed scope in writing, hosting in Germany, GDPR and the Swiss FADP covered, and interfaces built for German from day one.",
    metaTitle: "Software Development for Germany, Austria & Switzerland",
    metaDescription:
      "Software and AI development for DACH companies: written fixed-scope plans, hosting in Germany, GDPR and Swiss FADP covered, and German-ready interfaces.",
    eyebrow: "Software development for DACH",
    headline: "Software and AI development for Germany, Austria and Switzerland.",
    lead: "We build SaaS platforms, web and mobile apps and AI features for companies in the DACH region, with written specifications, hosting in Germany and data protection planned in from the start.",
    working: [
      {
        title: "Fixed scope, in writing",
        body: "A written specification, a fixed price per milestone and an agreed acceptance process before work starts. Changes go through a change request with the cost stated up front.",
      },
      {
        title: "Hosting in Germany",
        body: "Personal data stays in Germany or the EU: AWS or Google Cloud in Frankfurt, Azure Germany West Central, or Hetzner if you prefer a German host.",
      },
      {
        title: "GDPR and the Swiss FADP",
        body: "A data processing agreement under Article 28 GDPR, with Standard Contractual Clauses for access from outside the EU. For Swiss companies, we align with the revised Federal Act on Data Protection, in force since September 2023.",
      },
      {
        title: "Your hours",
        body: "Engineering overlaps the full Central European working day, and our product team in Stockholm shares your time zone.",
      },
    ],
    compliance: [
      {
        title: "Cookie consent under the TDDDG",
        body: "Germany's TDDDG, formerly the TTDSG, requires consent before non-essential cookies or tracking. We build consent that blocks scripts until users agree, the way this site does.",
      },
      {
        title: "Impressum and legal pages",
        body: "Under the Digitale-Dienste-Gesetz (DDG), business websites and apps in Germany need an Impressum. We build the legal pages and consent flows into the product; your lawyer supplies the text.",
      },
      {
        title: "Accessibility under the BFSG",
        body: "Germany's Barrierefreiheitsstärkungsgesetz, which implements the European Accessibility Act, has applied to many consumer services since 28 June 2025. We build interfaces to WCAG 2.2 AA.",
      },
      {
        title: "German-ready interfaces",
        body: "Products ship with internationalisation from day one: German and English, locale-aware dates, numbers and currency, and layouts with room for longer German words.",
      },
      {
        title: "EU AI Act transparency",
        body: "From 2 August 2026, people must be told when they are talking to an AI. Our chatbots and assistants disclose it, and each AI feature is documented.",
      },
    ],
    integrations: [
      "SEPA Direct Debit",
      "PayPal",
      "Klarna",
      "TWINT (Switzerland)",
      "DATEV export",
      "AWS and Google Cloud Frankfurt",
      "Hetzner",
    ],
    caseStudies: ["legal-contract-ai", "redeemx-admin-dashboard", "multi-tenant-saas-mvp"],
    faqs: [
      {
        q: "Can our data stay in Germany?",
        a: "Yes. We host in German regions such as AWS or Google Cloud in Frankfurt, Azure Germany West Central or Hetzner. Engineers outside the EU access personal data only under the data processing agreement and Standard Contractual Clauses.",
      },
      {
        q: "Do you work to a fixed price?",
        a: "Yes. Fixed-scope projects get a written specification, milestones and a fixed price per milestone. Most projects start from $10k.",
      },
      {
        q: "Can you build in German?",
        a: "Yes. We build interfaces with full internationalisation, German and English included. Your team or a translator supplies the final German copy, or we work from your existing translations.",
      },
      {
        q: "Do you work with Swiss companies?",
        a: "Yes. For Swiss clients we align data handling with the revised Federal Act on Data Protection: a processing agreement, a record of what data is processed where, and secured transfers.",
      },
    ],
  },
  {
    slug: "uae",
    name: "UAE",
    inName: "the UAE",
    summary: "One hour from our engineers, Arabic and right-to-left interfaces, UAE Pass, local payments and in-country hosting.",
    metaTitle: "Software Development Company for Dubai & the UAE",
    metaDescription:
      "Software and AI development for UAE companies: one hour from our engineers, Arabic and right-to-left interfaces, UAE Pass, local payments and UAE hosting.",
    eyebrow: "Software development for the UAE",
    headline: "Software and AI development for companies in the UAE.",
    lead: "We build SaaS platforms, marketplaces, mobile apps and AI assistants for companies in Dubai, Abu Dhabi and across the UAE, with Arabic support, local payments and a one-hour time difference from our engineering team.",
    working: [
      {
        title: "One hour apart",
        body: "Islamabad is one hour ahead of Dubai and Abu Dhabi, so our engineers share almost your whole working day, Monday to Friday.",
      },
      {
        title: "A US contract, priced in dollars",
        body: "You contract with CodeBaxh LLC, a US company, and projects are quoted in US dollars. The dirham is pegged to the dollar, so quotes do not move with exchange rates.",
      },
      {
        title: "Arabic and English, done properly",
        body: "Right-to-left layouts, Arabic typography and bilingual content are planned in design, not patched in after launch.",
      },
      {
        title: "Clear pricing and ownership",
        body: "Most projects start from $10k, with milestone payments. Once they are paid, the code and IP are yours.",
      },
    ],
    compliance: [
      {
        title: "UAE data protection",
        body: "The federal Personal Data Protection Law (Federal Decree-Law No. 45 of 2021) covers most UAE companies, while the DIFC and ADGM free zones have their own data protection laws. We plan consent, access and transfer rules for the regime that applies to you.",
      },
      {
        title: "Hosting in the UAE",
        body: "Some sectors, health in particular, need data to stay in the country. AWS and Microsoft Azure both run UAE cloud regions, and we host there when your sector or customers require it.",
      },
      {
        title: "UAE Pass",
        body: "UAE Pass is the national digital identity. We integrate it for sign-in and document signing when your product needs verified users.",
      },
      {
        title: "Local payments",
        body: "Card and Apple Pay checkout through Stripe, Checkout.com or Network International, and buy now, pay later through Tabby or Tamara.",
      },
      {
        title: "AI in Arabic and English",
        body: "Chatbots and assistants that handle Arabic and English, including mixed-language messages, with answers grounded in your own content and delivered on WhatsApp or the web.",
      },
    ],
    integrations: [
      "UAE Pass",
      "Stripe",
      "Checkout.com",
      "Network International",
      "Tabby and Tamara",
      "WhatsApp Business Platform",
      "AWS and Azure UAE regions",
    ],
    caseStudies: ["mydasma-wedding-platform", "omnichannel-messaging-saas", "ai-business-consultant-chatbot"],
    faqs: [
      {
        q: "How much time-zone overlap do we get?",
        a: "Almost the whole day. Islamabad is one hour ahead of the UAE, so our engineers are online through your working hours, Monday to Friday.",
      },
      {
        q: "Can you build Arabic, right-to-left interfaces?",
        a: "Yes. We design and build bilingual Arabic and English products with right-to-left layouts, and test both directions before launch.",
      },
      {
        q: "Can our data be hosted in the UAE?",
        a: "Yes. AWS and Azure both have UAE regions. We recommend in-country hosting when your sector or customers require it, health data in particular.",
      },
      {
        q: "What does a project cost?",
        a: "Most projects start from $10k, quoted in US dollars after discovery, with milestone payments.",
      },
    ],
  },
];

export const marketBySlug = (slug: string) => markets.find((m) => m.slug === slug);

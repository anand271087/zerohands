// All page copy and proof numbers. Figures must match the design spec §3.

export const clients = [
  { name: "Spinny", logo: "/logos/spinny.svg" },
  { name: "Beroe", logo: "/logos/beroe.svg" },
];

export const stats = [
  { value: "25 → 5", label: "people on Spinny's invoice desk" },
  { value: "120K+", label: "spare parts tracked across 26 portals" },
  { value: "1 hr → <1 min", label: "to find an answer in 725+ Beroe documents" },
];

export const problems = [
  {
    title: "Re-typing invoices",
    body: "Someone opens a photo, squints at a handwritten bill, and types every line into your system. Then checks it against the order. Every day.",
  },
  {
    title: "Logging into portal after portal",
    body: "Prices and part numbers live on dozens of vendor sites. Your team logs in, searches, copies and pastes, and the data is stale by next month.",
  },
  {
    title: "Digging through documents",
    body: "The answer is somewhere in 700 PDFs, decks and email threads. New joiners ask a colleague. Experienced people lose an hour looking.",
  },
];

export const resultsTable = [
  { client: "Spinny", useCase: "Invoice scan & match", change: "20–25 people → 5", time: "~32 min → <1 min per invoice", hours: "~2,600–3,500 hrs/month", value: "₹45–60 L / year", payback: "1–2 weeks" },
  { client: "Spinny", useCase: "OEM parts crawler", change: "10 people → 1", time: "Multi-day task → overnight", hours: "~1,600 hrs/month", value: "~₹27 L / year", payback: "~2 weeks" },
  { client: "Beroe", useCase: "Knowledge chatbot", change: "1 hr search → <1 min", time: "725+ docs · 800+ staff", hours: "Hours back every day", value: "—", payback: "—" },
  { client: "Beroe", useCase: "Account Workbench", change: "Scattered tools → one hub", time: "Auto-built QBR/MBR decks", hours: "—", value: "—", payback: "—" },
];

export const caseStudies = [
  {
    id: "spinny-invoice",
    featured: true,
    client: "Spinny",
    logo: "/logos/spinny.svg",
    tag: "Used-car marketplace · 1,072 vendors",
    title: "Invoice scan & match",
    problem:
      "A team of 20–25 read vendor spare-parts invoices — many handwritten photos — typed every line into the CRM and checked it against the order. About 15 invoices per person per day.",
    built: [
      "CRM sends the invoice photo link to an n8n workflow the moment it's uploaded",
      "Google Gemini reads the invoice — including handwriting — and scores its confidence on every field",
      "A matching engine checks each line against open orders, agreed discounts and fixed prices",
      "Each line comes back MATCHED, NOT MATCHED or STILL OPEN, with overcharges flagged",
      "Anything the AI is unsure about goes to a human review queue",
    ],
    results: [
      { value: "25 → 5", label: "people on the desk" },
      { value: "₹45–60 L", label: "saved per year" },
      { value: "~1 hr", label: "for a full day's volume" },
      { value: "1–2 wks", label: "payback" },
    ],
    stack: ["n8n", "Google Gemini", "Vision OCR", "Webhooks", "Google Sheets"],
  },
  {
    id: "spinny-crawler",
    client: "Spinny",
    logo: "/logos/spinny.svg",
    tag: "Used-car marketplace",
    title: "OEM spare-parts crawler",
    problem:
      "Around 10 people logged into brand and dealer portals one by one to look up part numbers and prices.",
    built: [
      "Crawlers for 26 sources — Mahindra, Maruti, Toyota, Tata, Hyundai, MG, Ford, Bosch, Valeo and more",
      "Handles logins, captchas (solved offline), dropdown catalogues and PDF price lists",
      "One clean master sheet of 120K+ parts, refreshed overnight",
      "Alerts the team when a portal changes its layout",
    ],
    results: [
      { value: "10 → 1", label: "people" },
      { value: "120K+", label: "parts tracked" },
      { value: "~₹27 L", label: "saved per year" },
    ],
    stack: ["Python", "Playwright", "Scrapy", "Scheduled runs"],
  },
  {
    id: "beroe-chatbot",
    client: "Beroe",
    logo: "/logos/beroe.svg",
    tag: "Procurement intelligence",
    title: "Knowledge chatbot on 725+ documents",
    problem:
      "SOPs, product notes and client records were spread across PDFs, Word files, SharePoint and email. Finding one answer took close to an hour.",
    built: [
      "Upload pipeline for PDF, Word, SharePoint links, XML, JSON and email (EML)",
      "Retrieval-augmented (RAG) chatbot that answers from your own documents",
      "New documents searchable as soon as they're uploaded",
      "Built for confidential, internal-only data",
    ],
    results: [
      { value: "1 hr → <1 min", label: "per answer" },
      { value: "725+", label: "documents" },
      { value: "800+", label: "staff served" },
    ],
    stack: ["RAG", "LLM", "Document pipeline"],
  },
  {
    id: "beroe-awb",
    client: "Beroe",
    logo: "/logos/beroe.svg",
    tag: "Procurement intelligence",
    title: "Account Workbench",
    problem:
      "Sales, Customer Success and Solutioning each tracked client accounts in different tools — so no one had the full picture.",
    built: [
      "One workbench per client account: handoff, onboarding, goals, growth pipeline and reports",
      "Claude pulls contacts, goals and key fields out of meeting notes, decks, spreadsheets and emails (12 file types)",
      "Business-review decks (QBR/MBR) generated automatically",
      "11 user roles, row-level security, OWASP-checked",
    ],
    results: [
      { value: "1", label: "hub instead of scattered tools" },
      { value: "12", label: "file types understood" },
      { value: "11", label: "user roles" },
    ],
    stack: ["Claude", "React", "FastAPI", "Supabase"],
  },
];

export const services = [
  { title: "Invoice & document processing", outcome: "Stop re-typing.", body: "Invoices, bills, forms and handwritten photos read, checked and entered into your system automatically." },
  { title: "Knowledge chatbots", outcome: "Answers in seconds.", body: "A private chatbot trained on your SOPs, policies and documents — for your team or your customers." },
  { title: "Web data crawlers", outcome: "Fresh data, no copy-paste.", body: "Prices, catalogues and listings pulled from any website or portal, on a schedule, into one clean sheet." },
  { title: "Workflow automation", outcome: "Tools that talk to each other.", body: "n8n workflows that connect your CRM, email, sheets and WhatsApp so handoffs happen on their own." },
  { title: "Custom AI apps & agents", outcome: "Built around how you work.", body: "Internal tools and AI agents for the processes off-the-shelf software doesn't cover." },
  { title: "AI avatar videos", outcome: "Content without a shoot.", body: "Presenter-led videos from a script — any language, no studio, no retakes." },
];

export const steps = [
  { when: "Day 0", title: "Free 20-min call", body: "Tell us the task that eats your team's time. We tell you honestly if AI can do it." },
  { when: "Week 1", title: "Working prototype", body: "You see it run on your own invoices, documents or websites — not a slide deck." },
  { when: "Weeks 2–4", title: "Live in production", body: "Connected to your systems, tested by your team, with a human check where it matters." },
  { when: "Ongoing", title: "Support & improve", body: "We monitor it, fix what breaks and tune it as your process changes." },
];

export const comparison = {
  columns: ["ZeroHands", "Big IT firm", "Freelancer", "In-house hire"],
  rows: [
    { label: "Time to go live", values: ["2–4 weeks", "3–6 months", "Unpredictable", "Months to hire, then build"] },
    { label: "Upfront cost", values: ["Scoped to one problem", "Large contract", "Low", "Salary + recruiting"] },
    { label: "AI & automation depth", values: ["Solution architects, 17+ yrs", "Yes, but you're a small account", "Varies", "Hard to find in India today"] },
    { label: "You own the code & data", values: ["Yes", "Often locked in", "Sometimes", "Yes"] },
    { label: "Support after launch", values: ["Included", "Paid change requests", "Rarely", "If they stay"] },
  ],
};

export const testimonials = [
  {
    quote:
      "Our teams used to spend close to an hour hunting through documents for a single answer. Now they ask the chatbot and get it in under a minute. ZeroHands understood our confidentiality needs from day one.",
    role: "VP, Sales",
    company: "Beroe",
  },
  {
    quote:
      "Invoice processing that needed a team of 25 now runs with 5 people checking exceptions. It even reads handwritten vendor invoices. It paid for itself in the first couple of weeks.",
    role: "Delivery Manager",
    company: "Spinny",
  },
];

export const faqs = [
  { q: "Is our data safe?", a: "Yes. We build for confidential internal data — role-based access, no data used to train public models, and we can deploy on your own servers or cloud account." },
  { q: "What if the AI gets something wrong?", a: "We design for it. Every system scores its own confidence and sends anything uncertain to a person to check. At Spinny, 5 people review exceptions instead of 25 doing everything by hand." },
  { q: "How fast can we go live?", a: "You see a working prototype in week 1. Most projects are live in 2–4 weeks. Larger companies with approval processes typically take about a month end to end." },
  { q: "Which tools do you use?", a: "Whatever fits: n8n for workflows, Google Gemini, Claude and OpenAI models, Python and Playwright for crawlers, and React/FastAPI for custom apps." },
  { q: "Do we need an AI team?", a: "No. That's the point. We build it, hand it over with documentation, and support it. Your team only needs to know the process being automated." },
];

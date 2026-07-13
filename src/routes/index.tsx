import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FreeCertHub — Companies Offering Free Certificates on Course Completion" },
      {
        name: "description",
        content:
          "Curated list of companies and platforms that give free certificates after completing their online courses — Google, HubSpot, IBM, Cisco, Microsoft, and more.",
      },
      { property: "og:title", content: "FreeCertHub — Free Certificate Courses" },
      { property: "og:description", content: "Discover companies giving free certificates on course completion." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
  errorComponent: ({ error, reset }) => (
    <div className="p-8">
      <p>Error: {error.message}</p>
      <button onClick={reset} className="underline">Retry</button>
    </div>
  ),
  notFoundComponent: () => <div className="p-8">Not found</div>,
});

type Provider = {
  name: string;
  category: string;
  description: string;
  examples: string[];
  url: string;
  cost: "Fully Free" | "Free Course, Paid Cert" | "Free with Financial Aid";
  accent: string;
};

const PROVIDERS: Provider[] = [
  {
    name: "Google Digital Garage",
    category: "Marketing & Business",
    description:
      "Free courses with a recognized certificate on completion. The 'Fundamentals of Digital Marketing' is IAB Europe accredited.",
    examples: ["Fundamentals of Digital Marketing", "Google AI Essentials (audit)"],
    url: "https://learndigital.withgoogle.com/digitalgarage",
    cost: "Fully Free",
    accent: "from-blue-500 to-emerald-500",
  },
  {
    name: "HubSpot Academy",
    category: "Marketing, Sales & CRM",
    description:
      "Dozens of fully free certifications recognized in the marketing industry. Just watch, pass the exam, and download.",
    examples: ["Inbound Marketing", "Content Marketing", "SEO Certification"],
    url: "https://academy.hubspot.com",
    cost: "Fully Free",
    accent: "from-orange-500 to-rose-500",
  },
  {
    name: "Cisco Networking Academy",
    category: "Networking & Cybersecurity",
    description:
      "Free courses like 'Introduction to Cybersecurity' and 'Networking Basics' come with an official Cisco certificate of completion.",
    examples: ["Intro to Cybersecurity", "Networking Basics", "Python Essentials"],
    url: "https://www.netacad.com",
    cost: "Fully Free",
    accent: "from-sky-500 to-indigo-500",
  },
  {
    name: "IBM SkillsBuild",
    category: "AI, Data & Cloud",
    description:
      "Free learning paths from IBM with digital credentials/badges issued via Credly upon completion.",
    examples: ["AI Fundamentals", "Data Analytics", "Cybersecurity Fundamentals"],
    url: "https://skillsbuild.org",
    cost: "Fully Free",
    accent: "from-blue-600 to-cyan-500",
  },
  {
    name: "Microsoft Learn",
    category: "Cloud, Dev & AI",
    description:
      "Free learning paths with achievement badges. Many prep you for paid Microsoft certifications, but the learn badges themselves are free.",
    examples: ["Azure Fundamentals path", "GitHub Foundations prep", "Copilot for productivity"],
    url: "https://learn.microsoft.com",
    cost: "Fully Free",
    accent: "from-blue-500 to-purple-500",
  },
  {
    name: "Meta Blueprint",
    category: "Social Media Marketing",
    description:
      "Free self-paced courses on Facebook & Instagram advertising with a certificate of completion.",
    examples: ["Meta Certified Digital Marketing Associate (prep)", "Ads Manager Basics"],
    url: "https://www.facebook.com/business/learn",
    cost: "Fully Free",
    accent: "from-blue-500 to-fuchsia-500",
  },
  {
    name: "Google Cloud Skills Boost",
    category: "Cloud Computing",
    description:
      "Regularly runs free skill-badge campaigns. Complete the labs to earn a shareable Google Cloud digital badge.",
    examples: ["Generative AI Learning Path", "Cloud Digital Leader prep"],
    url: "https://www.cloudskillsboost.google",
    cost: "Fully Free",
    accent: "from-emerald-500 to-teal-500",
  },
  {
    name: "AWS Skill Builder",
    category: "Cloud Computing",
    description:
      "Hundreds of free digital courses from AWS. Free tier issues completion certificates; official exams are paid.",
    examples: ["AWS Cloud Practitioner Essentials", "Generative AI Learning Plan"],
    url: "https://skillbuilder.aws",
    cost: "Free Course, Paid Cert",
    accent: "from-orange-500 to-amber-500",
  },
  {
    name: "Great Learning Academy",
    category: "Tech, Business & Data",
    description:
      "1000+ completely free courses with certificates upon finishing the short assessment.",
    examples: ["Python for Beginners", "Excel Basics", "Intro to Machine Learning"],
    url: "https://www.mygreatlearning.com/academy",
    cost: "Fully Free",
    accent: "from-rose-500 to-pink-500",
  },
  {
    name: "Simplilearn SkillUp",
    category: "Tech, Data & Business",
    description:
      "Free self-paced courses with a certificate of completion for every finished course.",
    examples: ["Introduction to Data Science", "JavaScript for Beginners"],
    url: "https://www.simplilearn.com/skillup-free-online-courses",
    cost: "Fully Free",
    accent: "from-violet-500 to-purple-500",
  },
  {
    name: "Alison",
    category: "General / Broad Catalog",
    description:
      "Free courses across every category. Certificate PDF is paid, but the digital record of completion is free.",
    examples: ["Diploma in Project Management", "English Grammar"],
    url: "https://alison.com",
    cost: "Free Course, Paid Cert",
    accent: "from-lime-500 to-green-500",
  },
  {
    name: "Coursera (Financial Aid)",
    category: "University Courses",
    description:
      "Courses from Stanford, Yale, Google & more. Apply for financial aid to earn the verified certificate for free.",
    examples: ["Google IT Support", "Yale — The Science of Well-Being"],
    url: "https://www.coursera.org",
    cost: "Free with Financial Aid",
    accent: "from-indigo-500 to-blue-600",
  },
];

const CATEGORIES = ["All", ...Array.from(new Set(PROVIDERS.map((p) => p.category)))];
const COSTS = ["All", "Fully Free", "Free Course, Paid Cert", "Free with Financial Aid"] as const;

function HomePage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [cost, setCost] = useState<(typeof COSTS)[number]>("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PROVIDERS.filter((p) => {
      if (category !== "All" && p.category !== category) return false;
      if (cost !== "All" && p.cost !== cost) return false;
      if (!q) return true;
      return (
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.examples.some((e) => e.toLowerCase().includes(q))
      );
    });
  }, [query, category, cost]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900">
      {/* Nav */}
      <header className="sticky top-0 z-20 border-b border-slate-200/70 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-indigo-500 to-emerald-500 text-white font-bold">
              F
            </div>
            <span className="font-semibold tracking-tight">FreeCertHub</span>
          </div>
          <nav className="hidden gap-6 text-sm text-slate-600 md:flex">
            <a href="#providers" className="hover:text-slate-900">Providers</a>
            <a href="#how" className="hover:text-slate-900">How it works</a>
            <a href="#faq" className="hover:text-slate-900">FAQ</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-10 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 shadow-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Updated for 2026 · {PROVIDERS.length} verified providers
        </span>
        <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl">
          Free certificates,{" "}
          <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-emerald-500 bg-clip-text text-transparent">
            just complete the course
          </span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
          A curated directory of companies and platforms that award a free certificate when you finish their online course — no hidden fees.
        </p>

        {/* Search */}
        <div className="mx-auto mt-8 flex max-w-xl items-center gap-2 rounded-2xl border border-slate-200 bg-white p-2 shadow-sm">
          <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" />
          </svg>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Google, Python, marketing, cloud…"
            className="w-full bg-transparent px-2 py-2 text-sm outline-none placeholder:text-slate-400"
          />
        </div>
      </section>

      {/* Filters */}
      <section id="providers" className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="mr-1 text-xs font-semibold uppercase tracking-wider text-slate-500">Category:</span>
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`rounded-full border px-3 py-1 text-xs font-medium transition ${
                category === c
                  ? "border-slate-900 bg-slate-900 text-white"
                  : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <span className="mr-1 text-xs font-semibold uppercase tracking-wider text-slate-500">Cost:</span>
          {COSTS.map((c) => (
            <button
              key={c}
              onClick={() => setCost(c)}
              className={`rounded-full border px-3 py-1 text-xs font-medium transition ${
                cost === c
                  ? "border-emerald-600 bg-emerald-600 text-white"
                  : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="mt-8 grid grid-cols-1 gap-5 pb-16 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <article
              key={p.name}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${p.accent}`} />
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-semibold tracking-tight">{p.name}</h3>
                <span
                  className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${
                    p.cost === "Fully Free"
                      ? "bg-emerald-50 text-emerald-700"
                      : p.cost === "Free Course, Paid Cert"
                      ? "bg-amber-50 text-amber-700"
                      : "bg-blue-50 text-blue-700"
                  }`}
                >
                  {p.cost}
                </span>
              </div>
              <p className="mt-1 text-xs font-medium text-slate-500">{p.category}</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{p.description}</p>
              <ul className="mt-4 space-y-1">
                {p.examples.map((e) => (
                  <li key={e} className="flex items-center gap-2 text-xs text-slate-700">
                    <span className="h-1 w-1 rounded-full bg-slate-400" /> {e}
                  </li>
                ))}
              </ul>
              <a
                href={p.url}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-indigo-600 hover:text-indigo-700"
              >
                Visit {p.name}
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17 17 7" /><path d="M8 7h9v9" />
                </svg>
              </a>
            </article>
          ))}
          {filtered.length === 0 && (
            <div className="col-span-full rounded-xl border border-dashed border-slate-300 p-10 text-center text-sm text-slate-500">
              No providers match your filters. Try clearing the search.
            </div>
          )}
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">How to earn a free certificate</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {[
              { n: "1", t: "Pick a provider", d: "Choose a company from the list that matches the skill you want." },
              { n: "2", t: "Complete the course", d: "Finish all lessons and pass the final assessment or quiz." },
              { n: "3", t: "Download your cert", d: "Instantly download a PDF or claim a shareable digital badge." },
            ].map((s) => (
              <div key={s.n} className="rounded-2xl border border-slate-200 p-6">
                <div className="grid h-9 w-9 place-items-center rounded-lg bg-slate-900 text-sm font-bold text-white">
                  {s.n}
                </div>
                <h3 className="mt-4 font-semibold">{s.t}</h3>
                <p className="mt-2 text-sm text-slate-600">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">FAQ</h2>
        <div className="mt-6 space-y-4">
          {[
            {
              q: "Are these certificates recognized by employers?",
              a: "Certificates from Google, HubSpot, Cisco, IBM, Microsoft, and Meta are widely recognized. Smaller platforms are best used to showcase skills on your CV or LinkedIn.",
            },
            {
              q: "Do I need to pay anything?",
              a: "Providers marked 'Fully Free' charge nothing. Others offer the course free but charge for the official certificate or exam.",
            },
            {
              q: "Can I add these to LinkedIn?",
              a: "Yes — most providers issue a shareable link or Credly badge you can attach to your LinkedIn profile.",
            },
          ].map((f) => (
            <details key={f.q} className="group rounded-xl border border-slate-200 bg-white p-5 open:shadow-sm">
              <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                {f.q}
                <span className="ml-4 text-slate-400 transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm text-slate-600">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-8 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} FreeCertHub · Course and certificate policies are set by each provider and may change.
        </div>
      </footer>
    </main>
  );
}

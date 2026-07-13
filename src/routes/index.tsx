import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { COURSES, CATEGORIES, LEVELS, COSTS, PROVIDERS } from "@/data/courses";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FreeCertHub — Free Certificate Courses from Top Companies" },
      {
        name: "description",
        content:
          "Handpicked free courses with certificates from Google, HubSpot, IBM, Cisco, Microsoft, Meta, AWS and more.",
      },
      { property: "og:title", content: "FreeCertHub" },
      { property: "og:description", content: "Companies giving free certificates on course completion." },
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

const COMPANY_LOGOS = [
  "Google", "HubSpot", "IBM", "Cisco", "Microsoft", "Meta", "AWS", "Coursera", "Yale", "Harvard", "freeCodeCamp", "Kaggle",
];

const PAGE_SIZE = 24;


function HomePage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [level, setLevel] = useState<(typeof LEVELS)[number]>("All");
  const [cost, setCost] = useState<(typeof COSTS)[number]>("All");
  const [provider, setProvider] = useState("All");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return COURSES.filter((c) => {
      if (category !== "All" && c.category !== category) return false;
      if (level !== "All" && c.level !== level) return false;
      if (cost !== "All" && c.cost !== cost) return false;
      if (provider !== "All" && c.provider !== provider) return false;
      if (!q) return true;
      return (
        c.title.toLowerCase().includes(q) ||
        c.provider.toLowerCase().includes(q) ||
        c.blurb.toLowerCase().includes(q)
      );
    });
  }, [query, category, level, cost, provider]);

  useEffect(() => {
    setPage(1);
  }, [query, category, level, cost, provider]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paged = filtered.slice(0, page * PAGE_SIZE);


  return (
    <main className="min-h-screen bg-cream font-sans text-ink" style={{ fontFamily: "var(--font-sans)" }}>
      {/* Grain / noise backdrop */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.06] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><filter id='n'><feTurbulence baseFrequency='0.9' /></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.6'/></svg>\")",
        }}
      />

      {/* Nav */}
      <header className="sticky top-0 z-30 border-b border-ink/10 bg-cream/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-full bg-ink text-cream" style={{ fontFamily: "var(--font-display)" }}>
              <span className="text-lg font-bold italic">F</span>
            </div>
            <span className="text-lg font-semibold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              FreeCert<span className="italic text-flame">Hub</span>
            </span>
          </a>
          <nav className="hidden gap-8 text-sm font-medium text-ink/70 md:flex">
            <a href="#courses" className="hover:text-ink">Courses</a>
            <a href="#how" className="hover:text-ink">How it works</a>
            <a href="#faq" className="hover:text-ink">FAQ</a>
          </nav>
          <a
            href="#courses"
            className="hidden rounded-full bg-ink px-4 py-2 text-xs font-semibold text-cream shadow-[0_4px_0_0_oklch(0.72_0.19_45)] transition hover:-translate-y-0.5 md:inline-flex"
          >
            Browse courses →
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative z-10 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-20 sm:pt-24">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-8">
              <span className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white/60 px-3 py-1 text-xs font-medium text-ink/70 backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-flame" />
                {COURSES.length} handpicked courses · updated 2026
              </span>
              <h1
                className="mt-6 text-5xl leading-[0.95] tracking-tight sm:text-7xl lg:text-[92px]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Learn something new.{" "}
                <span className="italic text-flame">Get the certificate.</span>{" "}
                <span className="relative inline-block">
                  Pay
                  <span className="absolute inset-x-0 top-1/2 h-[6px] -translate-y-1/2 rotate-[-3deg] bg-lime" />
                </span>{" "}
                nothing.
              </h1>
              <p className="mt-8 max-w-2xl text-lg text-ink/70 sm:text-xl">
                A living catalogue of genuinely free courses from Google, HubSpot, Cisco, IBM,
                Microsoft, Meta, AWS and more — each one hands you a real certificate the
                moment you finish.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <a
                  href="#courses"
                  className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-cream shadow-[0_6px_0_0_oklch(0.72_0.19_45)] transition hover:-translate-y-0.5 hover:shadow-[0_10px_0_0_oklch(0.72_0.19_45)]"
                >
                  Explore {COURSES.length} courses
                  <span className="transition group-hover:translate-x-1">→</span>
                </a>
                <a href="#how" className="text-sm font-medium text-ink/70 underline underline-offset-4 hover:text-ink">
                  How it works
                </a>
              </div>
            </div>

            {/* Hero visual card */}
            <div className="relative lg:col-span-4">
              <div className="absolute -inset-4 -rotate-2 rounded-3xl bg-lime/60" aria-hidden />
              <div className="relative rotate-1 rounded-3xl border border-ink bg-white p-6 shadow-[8px_8px_0_0_oklch(0.16_0.02_250)]">
                <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-ink/50">
                  <span>Certificate of Completion</span>
                  <span>№ 2026</span>
                </div>
                <h3 className="mt-6 text-2xl leading-tight" style={{ fontFamily: "var(--font-display)" }}>
                  This certifies that <span className="italic text-flame">you</span> completed
                </h3>
                <p className="mt-2 text-lg font-semibold">Fundamentals of Digital Marketing</p>
                <p className="text-xs text-ink/60">issued by Google Digital Garage · 40 hours</p>
                <div className="mt-6 flex items-end justify-between">
                  <div>
                    <div className="h-8 w-24 rounded bg-gradient-to-r from-ink to-flame" />
                    <p className="mt-1 text-[10px] uppercase tracking-widest text-ink/50">Signature</p>
                  </div>
                  <div className="grid h-14 w-14 place-items-center rounded-full border-2 border-flame text-flame">
                    <span className="text-[10px] font-bold uppercase leading-tight">Free<br />2026</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Logo strip */}
          <div className="mt-16 border-y border-ink/10 py-6">
            <p className="mb-4 text-center text-[10px] font-semibold uppercase tracking-[0.3em] text-ink/50">
              Certificates from
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
              {COMPANY_LOGOS.map((n) => (
                <span
                  key={n}
                  className="text-xl font-semibold tracking-tight text-ink/60"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {n}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-16">
        <div className="grid gap-4 rounded-3xl border border-ink bg-ink p-8 text-cream sm:grid-cols-3">
          {[
            { k: COURSES.length + "+", v: "Free courses" },
            { k: CATEGORIES.length - 1 + "", v: "Skill categories" },
            { k: PROVIDERS.length - 1 + "", v: "Global providers" },
          ].map((s) => (
            <div key={s.v}>
              <div className="text-5xl sm:text-6xl" style={{ fontFamily: "var(--font-display)" }}>
                {s.k}
              </div>
              <div className="mt-1 text-sm text-cream/60">{s.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Courses */}
      <section id="courses" className="relative z-10 mx-auto max-w-7xl px-6 pb-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-flame">The catalogue</p>
            <h2 className="mt-2 text-4xl sm:text-5xl" style={{ fontFamily: "var(--font-display)" }}>
              Every course. <span className="italic">Free certificate.</span>
            </h2>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-ink/15 bg-white px-4 py-2 shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-ink/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" />
            </svg>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search Python, SEO, cloud…"
              className="w-56 bg-transparent text-sm outline-none placeholder:text-ink/40"
            />
          </div>
        </div>

        {/* Filters */}
        <div className="mt-8 space-y-4">
          <FilterRow label="Category" value={category} onChange={setCategory} options={CATEGORIES} activeColor="bg-ink text-cream" />
          <FilterRow label="Provider" value={provider} onChange={setProvider} options={PROVIDERS} activeColor="bg-ink text-cream" />
          <FilterRow label="Level" value={level} onChange={(v) => setLevel(v as typeof level)} options={[...LEVELS]} activeColor="bg-violet-glow text-white" />
          <FilterRow label="Cost" value={cost} onChange={(v) => setCost(v as typeof cost)} options={[...COSTS]} activeColor="bg-flame text-white" />
        </div>


        <p className="mt-6 text-sm text-ink/60">
          Showing <span className="font-semibold text-ink">{paged.length}</span> of{" "}
          <span className="font-semibold text-ink">{filtered.length}</span> courses
        </p>

        {/* Grid */}
        <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {paged.map((c, i) => (

            <a
              key={c.title}
              href={c.url}
              target="_blank"
              rel="noreferrer noopener"
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-ink bg-white p-6 transition hover:-translate-y-1 hover:shadow-[8px_8px_0_0_oklch(0.16_0.02_250)]"
            >
              {/* Accent tab */}
              <div
                className={`absolute right-6 top-0 h-6 w-16 rounded-b-lg ${
                  i % 4 === 0 ? "bg-flame" : i % 4 === 1 ? "bg-lime" : i % 4 === 2 ? "bg-violet-glow" : "bg-ink"
                }`}
                aria-hidden
              />
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-ink/5 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-ink/70">
                  {c.category}
                </span>
                <span
                  className={`rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider ${
                    c.cost === "Fully Free"
                      ? "bg-lime/40 text-ink"
                      : c.cost === "Free Course, Paid Cert"
                      ? "bg-flame/20 text-flame"
                      : "bg-violet-glow/20 text-violet-glow"
                  }`}
                >
                  {c.cost}
                </span>
              </div>
              <h3
                className="mt-5 text-2xl leading-tight tracking-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {c.title}
              </h3>
              <p className="mt-1 text-sm font-medium text-ink/60">by {c.provider}</p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-ink/70">{c.blurb}</p>
              <div className="mt-6 flex items-center justify-between border-t border-ink/10 pt-4 text-xs text-ink/60">
                <span className="flex items-center gap-3">
                  <span>⏱ {c.duration}</span>
                  <span>· {c.level}</span>
                </span>
                <span className="inline-flex items-center gap-1 font-semibold text-ink transition group-hover:text-flame">
                  Enroll
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17 17 7" /><path d="M8 7h9v9" />
                  </svg>
                </span>
              </div>
            </a>
          ))}
          {filtered.length === 0 && (
            <div className="col-span-full rounded-3xl border-2 border-dashed border-ink/20 p-12 text-center text-ink/60">
              No courses match those filters. Try clearing them.
            </div>
          )}
        </div>

        {page < totalPages && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => setPage((p) => p + 1)}
              className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-cream shadow-[0_6px_0_0_oklch(0.72_0.19_45)] transition hover:-translate-y-0.5"
            >
              Load {Math.min(PAGE_SIZE, filtered.length - paged.length)} more courses
            </button>
          </div>
        )}
      </section>


      {/* How it works */}
      <section id="how" className="relative z-10 border-t border-ink/10 bg-ink text-cream">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-lime">The ritual</p>
          <h2 className="mt-2 max-w-2xl text-4xl sm:text-6xl" style={{ fontFamily: "var(--font-display)" }}>
            Three steps. <span className="italic text-lime">One certificate.</span>
          </h2>
          <div className="mt-14 grid gap-8 sm:grid-cols-3">
            {[
              { n: "01", t: "Pick a course", d: "Filter by category, level or cost. Every course here awards a certificate." },
              { n: "02", t: "Complete it", d: "Watch, read, quiz. Most take between 3 and 40 hours of self-paced work." },
              { n: "03", t: "Claim your cert", d: "Download a PDF or claim a Credly/LinkedIn shareable digital badge." },
            ].map((s) => (
              <div key={s.n} className="border-t border-cream/20 pt-6">
                <div className="text-flame" style={{ fontFamily: "var(--font-display)" }}>
                  <span className="text-5xl">{s.n}</span>
                </div>
                <h3 className="mt-4 text-2xl" style={{ fontFamily: "var(--font-display)" }}>{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/70">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative z-10 mx-auto max-w-3xl px-6 py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-flame">Small print</p>
        <h2 className="mt-2 text-4xl sm:text-5xl" style={{ fontFamily: "var(--font-display)" }}>
          Frequently asked
        </h2>
        <div className="mt-8 divide-y divide-ink/10 border-y border-ink/10">
          {[
            {
              q: "Are these certificates recognized by employers?",
              a: "Google, HubSpot, Cisco, IBM, Microsoft, Meta and AWS certificates are widely recognized. Add them to LinkedIn, your CV, or your portfolio.",
            },
            {
              q: "Is everything really free?",
              a: "Courses tagged 'Fully Free' cost nothing. 'Free Course, Paid Cert' means the learning is free but the official proctored exam is paid. 'Free with Aid' means you must apply for financial aid to unlock the verified cert.",
            },
            {
              q: "Can I share these on LinkedIn?",
              a: "Yes. Most providers issue a shareable Credly badge or a public verification link — one click to add to LinkedIn.",
            },
            {
              q: "How often is the list updated?",
              a: "We review the catalogue quarterly and remove any provider that quietly moves behind a paywall.",
            },
          ].map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-medium">
                {f.q}
                <span className="ml-4 grid h-8 w-8 place-items-center rounded-full border border-ink/20 text-ink/60 transition group-open:rotate-45 group-open:border-flame group-open:text-flame">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-ink/70">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-24">
        <div className="relative overflow-hidden rounded-[2rem] border border-ink bg-lime p-12 text-ink sm:p-16">
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-flame/30 blur-3xl" aria-hidden />
          <h2 className="max-w-3xl text-4xl sm:text-6xl" style={{ fontFamily: "var(--font-display)" }}>
            Start today. Finish this week. <span className="italic">Add a line to your CV.</span>
          </h2>
          <a
            href="#courses"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-cream transition hover:-translate-y-0.5"
          >
            Browse the catalogue →
          </a>
        </div>
      </section>

      <footer className="relative z-10 border-t border-ink/10 bg-cream">
        <div className="mx-auto max-w-7xl px-6 py-10 text-center text-xs text-ink/50">
          © {new Date().getFullYear()} FreeCertHub · Course & certificate terms set by each provider.
        </div>
      </footer>
    </main>
  );
}

function FilterRow({
  label,
  value,
  onChange,
  options,
  activeColor,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
  activeColor: string;
}) {
  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-ink/10 bg-white/60 p-4 sm:flex-row sm:items-start">
      <span className="w-full shrink-0 text-xs font-bold uppercase tracking-[0.18em] text-ink/60 sm:w-24 sm:pt-2 sm:text-sm">
        {label}
      </span>
      <div className="flex flex-wrap gap-2">
        {options.map((o) => (
          <button
            key={o}
            onClick={() => onChange(o)}
            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${
              value === o
                ? `${activeColor} border-transparent shadow-sm`
                : "border-ink/15 bg-white text-ink/75 hover:border-ink hover:text-ink"
            }`}
          >
            {o}
          </button>
        ))}
      </div>
    </div>
  );
}

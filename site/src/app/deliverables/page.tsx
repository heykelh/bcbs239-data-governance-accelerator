import Link from "next/link";

const deliverables = [
  {
    title: "Governance model",
    description:
      "Cadre cible de gouvernance, principes, scope et operating model fédéré.",
  },
  {
    title: "Data Roles & RACI",
    description:
      "Clarification des responsabilités entre Data Owner, Steward et IT Custodian.",
  },
  {
    title: "BCBS239 Mapping",
    description:
      "Lecture simplifiée des attentes réglementaires et de leur traduction opérationnelle.",
  },
  {
    title: "Gap Analysis",
    description:
      "Écart entre situation initiale et cible, avec recommandations prioritaires.",
  },
  {
    title: "Data Quality Framework",
    description:
      "Dimensions qualité, règles de contrôle et logique de monitoring.",
  },
  {
    title: "Dashboard Preview",
    description:
      "Aperçu des indicateurs de pilotage destinés au suivi des anomalies.",
  },
];

export default function DeliverablesPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16 lg:px-8 text-slate-100">
      <section className="max-w-4xl">
        <span className="eyebrow">Consulting Assets</span>
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Project Deliverables
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-300">
          Le projet est construit comme un ensemble de livrables de mission :
          cadrage, gouvernance cible, mapping réglementaire, contrôles de qualité
          et éléments de pilotage.
        </p>
      </section>

      <section className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {deliverables.map((item) => (
          <div
            key={item.title}
            className="glass-card rounded-[2rem] p-6"
          >
            <h2 className="text-xl font-semibold text-white">{item.title}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              {item.description}
            </p>
          </div>
        ))}
      </section>

      <section className="mt-14 grid gap-8 lg:grid-cols-2">
        <div className="glass-card rounded-[2rem] p-8">
          <h2 className="section-title text-white">What to add next</h2>
          <ul className="mt-6 space-y-3 text-sm text-slate-300">
            <li className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
              Capture du dashboard Power BI ou mockup KPI
            </li>
            <li className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
              Schéma d’architecture exporté depuis draw.io
            </li>
            <li className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
              Lien GitHub vers les scripts Python et règles SQL
            </li>
            <li className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
              Mini deck d’entretien en PDF
            </li>
          </ul>
        </div>

        <div className="glass-card rounded-[2rem] p-8">
          <h2 className="section-title text-white">Navigation shortcuts</h2>
          <div className="mt-6 flex flex-col gap-3">
            <Link
              href="/governance"
              className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-medium text-slate-200 hover:bg-white/[0.06]"
            >
              Open Governance page
            </Link>
            <Link
              href="/data-quality"
              className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-medium text-slate-200 hover:bg-white/[0.06]"
            >
              Open Data Quality page
            </Link>
            <Link
              href="/bcbs239"
              className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-medium text-slate-200 hover:bg-white/[0.06]"
            >
              Open BCBS239 page
            </Link>
            <Link
              href="/demo"
              className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-medium text-slate-200 hover:bg-white/[0.06]"
            >
              Open Demo page
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
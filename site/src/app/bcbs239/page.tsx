const mappings = [
  {
    principle: "Governance",
    implementation:
      "Defined ownership model with Data Owner / Steward / IT Custodian.",
  },
  {
    principle: "Data architecture & IT infrastructure",
    implementation:
      "Structured flow from source systems to reporting layer with control points.",
  },
  {
    principle: "Accuracy & integrity",
    implementation:
      "Automated data quality checks on key business-critical fields.",
  },
  {
    principle: "Completeness",
    implementation:
      "Monitoring of missing values and critical field coverage.",
  },
  {
    principle: "Timeliness",
    implementation:
      "Controls on late or future-dated records affecting reporting readiness.",
  },
  {
    principle: "Adaptability",
    implementation:
      "Reusable and extensible framework for new controls and indicators.",
  },
];

const gaps = [
  {
    area: "Ownership",
    current: "Informal and fragmented",
    target: "Formal ownership by business domain",
    action: "Nominate Data Owners and validate accountability",
  },
  {
    area: "Data quality controls",
    current: "Ad hoc and heterogeneous",
    target: "Standardized control framework",
    action: "Define a reusable library of DQ rules",
  },
  {
    area: "Monitoring",
    current: "Limited visibility",
    target: "KPI-based steering",
    action: "Publish recurring DQ dashboard",
  },
  {
    area: "Metadata",
    current: "Partial and inconsistent",
    target: "Shared glossary and dictionary",
    action: "Maintain critical data elements repository",
  },
  {
    area: "Issue management",
    current: "Reactive",
    target: "Structured remediation process",
    action: "Track incidents with severity and SLA",
  },
];

export default function BCBSPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16 lg:px-8 text-slate-100">
      <section className="max-w-4xl">
        <span className="eyebrow">Regulatory Perspective</span>
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Simplified BCBS239 Mapping
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-300">
          Cette section ne prétend pas démontrer une conformité complète, mais une
          simulation crédible de la manière dont la gouvernance et la qualité des
          données soutiennent des attentes de type BCBS239.
        </p>
      </section>

      <section className="mt-14 glass-card rounded-[2rem] p-8">
        <h2 className="section-title text-white">Principles coverage</h2>
        <div className="mt-6 overflow-x-auto">
          <table className="min-w-full border-separate border-spacing-y-3">
            <thead>
              <tr className="text-left text-sm text-slate-400">
                <th className="px-4">BCBS239 Principle</th>
                <th className="px-4">Project implementation</th>
              </tr>
            </thead>
            <tbody>
              {mappings.map((item) => (
                <tr key={item.principle} className="bg-white/[0.03]">
                  <td className="rounded-xl px-4 py-4 text-sm font-medium text-white">
                    {item.principle}
                  </td>
                  <td className="rounded-xl px-4 py-4 text-sm text-slate-300">
                    {item.implementation}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-14 glass-card rounded-[2rem] p-8">
        <h2 className="section-title text-white">Gap analysis</h2>
        <div className="mt-6 overflow-x-auto">
          <table className="min-w-full border-separate border-spacing-y-3">
            <thead>
              <tr className="text-left text-sm text-slate-400">
                <th className="px-4">Area</th>
                <th className="px-4">Current state</th>
                <th className="px-4">Target state</th>
                <th className="px-4">Recommendation</th>
              </tr>
            </thead>
            <tbody>
              {gaps.map((gap) => (
                <tr key={gap.area} className="bg-white/[0.03]">
                  <td className="rounded-xl px-4 py-4 text-sm font-medium text-white">
                    {gap.area}
                  </td>
                  <td className="rounded-xl px-4 py-4 text-sm text-slate-300">
                    {gap.current}
                  </td>
                  <td className="rounded-xl px-4 py-4 text-sm text-slate-300">
                    {gap.target}
                  </td>
                  <td className="rounded-xl px-4 py-4 text-sm text-slate-300">
                    {gap.action}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-14 rounded-[2rem] border border-white/10 bg-gradient-to-r from-cyan-500/10 via-slate-900/70 to-violet-500/10 p-10">
        <h2 className="section-title text-white">Interview message</h2>
        <p className="mt-4 max-w-4xl leading-7 text-slate-300">
          En entretien, l’objectif est de montrer que tu comprends qu’un sujet
          réglementaire n’est pas seulement une question de reporting, mais de
          gouvernance, de qualité, de rôles, de contrôles et de pilotage dans la
          durée.
        </p>
      </section>
    </main>
  );
}
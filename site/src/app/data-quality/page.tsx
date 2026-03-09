const dimensions = [
  {
    title: "Complétude",
    description: "Présence des champs obligatoires sur les données critiques.",
  },
  {
    title: "Exactitude",
    description: "Fiabilité des valeurs utilisées dans les analyses et reportings.",
  },
  {
    title: "Cohérence",
    description: "Cohérence entre systèmes, référentiels et transformations.",
  },
  {
    title: "Fraîcheur",
    description: "Disponibilité des données au bon moment pour le reporting.",
  },
  {
    title: "Validité",
    description: "Respect du format et des règles de gestion attendues.",
  },
  {
    title: "Unicité",
    description: "Absence de doublons sur les identifiants critiques.",
  },
];

const rules = [
  "customer_id ne doit pas être nul",
  "transaction_amount doit être positif",
  "reporting_date ne doit pas être dans le futur",
  "transaction_id doit être unique",
  "country_code doit appartenir à la liste autorisée",
  "risk_segment ne doit pas être nul",
];

const kpis = [
  "Score global de qualité",
  "Nombre de valeurs manquantes",
  "Nombre de doublons",
  "Nombre de dates invalides",
  "Taux de réussite par règle",
  "Anomalies par dimension",
];

export default function DataQualityPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16 lg:px-8 text-slate-100">
      <section className="max-w-4xl">
        <span className="eyebrow">Qualité des données</span>
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Cadre de contrôle et de pilotage de la qualité
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-300">
          Cette page présente les dimensions de qualité suivies, les règles
          implémentées dans le projet et les principaux indicateurs utilisés pour
          le pilotage.
        </p>
      </section>

      <section className="mt-14">
        <h2 className="section-title text-white">Dimensions suivies</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {dimensions.map((dimension) => (
            <div key={dimension.title} className="glass-card rounded-[2rem] p-6">
              <h3 className="text-xl font-semibold text-white">{dimension.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                {dimension.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-14 grid gap-8 lg:grid-cols-2">
        <div className="glass-card rounded-[2rem] p-8">
          <h2 className="section-title text-white">Règles de contrôle</h2>
          <ul className="mt-6 space-y-3">
            {rules.map((rule) => (
              <li
                key={rule}
                className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-300"
              >
                {rule}
              </li>
            ))}
          </ul>
        </div>

        <div className="glass-card rounded-[2rem] p-8">
          <h2 className="section-title text-white">Indicateurs suivis</h2>
          <ul className="mt-6 space-y-3">
            {kpis.map((kpi) => (
              <li
                key={kpi}
                className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-300"
              >
                {kpi}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-14 glass-card rounded-[2rem] p-8">
        <h2 className="section-title text-white">Logique de fonctionnement</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {[
            "Dataset simulé",
            "Contrôles Python",
            "Résultats des anomalies",
            "Pilotage via dashboard",
          ].map((step) => (
            <div
              key={step}
              className="rounded-2xl border border-white/10 bg-slate-950/40 p-5 text-center font-medium text-white"
            >
              {step}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
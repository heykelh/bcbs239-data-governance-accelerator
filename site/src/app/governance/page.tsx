const principes = [
  "Ownership métier des données critiques",
  "Responsabilités explicites sur la qualité des données",
  "Gouvernance fédérée entre métiers, data et IT",
  "Contrôles standardisés sur le cycle de vie de la donnée",
  "Pilotage continu via KPI et tableaux de bord",
];

const roles = [
  {
    title: "Data Owner",
    description:
      "Responsable métier de la définition, de l’usage et du niveau d’exigence attendu sur les données critiques.",
  },
  {
    title: "Data Steward",
    description:
      "Responsable opérationnel du suivi de la qualité, de la coordination des remédiations et du maintien des métadonnées.",
  },
  {
    title: "IT Custodian",
    description:
      "Responsable des pipelines, des contrôles techniques, du stockage et de la fiabilité de la plateforme.",
  },
];

const raciRows = [
  ["Définir les règles métier", "A", "R", "C"],
  ["Suivre les KPI de qualité", "C", "R", "C"],
  ["Implémenter les contrôles techniques", "C", "C", "R"],
  ["Valider les priorités de remédiation", "A", "R", "C"],
  ["Mettre à jour le dictionnaire de données", "C", "R", "C"],
  ["Escalader les incidents critiques", "A", "R", "C"],
];

export default function GovernancePage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16 lg:px-8 text-slate-100">
      <section className="max-w-4xl">
        <span className="eyebrow">Gouvernance des données</span>
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Modèle cible de gouvernance des données
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-300">
          Cette page présente le cadre de gouvernance du projet : principes,
          rôles et responsabilités autour des données critiques de risque.
        </p>
      </section>

      <section className="mt-14 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="glass-card rounded-[2rem] p-8">
          <h2 className="section-title text-white">Principes directeurs</h2>
          <ul className="mt-6 space-y-4">
            {principes.map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-slate-300"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="glass-card rounded-[2rem] p-8">
          <h2 className="section-title text-white">Périmètre couvert</h2>
          <div className="mt-6 space-y-3 text-sm text-slate-300">
            {[
              "Données clients",
              "Données de transaction",
              "Données d’exposition",
              "Données utilisées pour le reporting risque",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 font-medium text-white"
              >
                {item}
              </div>
            ))}
          </div>

          <h3 className="mt-8 text-lg font-semibold text-white">
            Logique du modèle
          </h3>
          <p className="mt-3 text-sm leading-6 text-slate-400">
            Le modèle est fédéré : les métiers portent l’ownership, les stewards
            coordonnent la qualité, et l’IT assure la robustesse technique.
          </p>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="section-title text-white">Rôles clés</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {roles.map((role) => (
            <div key={role.title} className="glass-card rounded-[2rem] p-6">
              <h3 className="text-xl font-semibold text-white">{role.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                {role.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-14 glass-card rounded-[2rem] p-8">
        <h2 className="section-title text-white">RACI simplifié</h2>
        <div className="mt-6 overflow-x-auto">
          <table className="min-w-full border-separate border-spacing-y-3">
            <thead>
              <tr className="text-left text-sm text-slate-400">
                <th className="px-4">Activité</th>
                <th className="px-4">Data Owner</th>
                <th className="px-4">Data Steward</th>
                <th className="px-4">IT Custodian</th>
              </tr>
            </thead>
            <tbody>
              {raciRows.map((row) => (
                <tr key={row[0]} className="bg-white/[0.03]">
                  <td className="rounded-xl px-4 py-4 text-sm font-medium text-white">
                    {row[0]}
                  </td>
                  <td className="rounded-xl px-4 py-4 text-sm text-slate-300">
                    {row[1]}
                  </td>
                  <td className="rounded-xl px-4 py-4 text-sm text-slate-300">
                    {row[2]}
                  </td>
                  <td className="rounded-xl px-4 py-4 text-sm text-slate-300">
                    {row[3]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-sm text-slate-500">
          A = Accountable · R = Responsible · C = Consulted
        </p>

        <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <h3 className="text-lg font-semibold text-white">
            À quoi sert ce tableau RACI ?
          </h3>
          <p className="mt-3 text-sm leading-7 text-slate-300">
            Le tableau RACI permet de clarifier les responsabilités entre les
            différents acteurs de la gouvernance des données. Il précise, pour
            chaque activité clé, qui porte la responsabilité finale, qui réalise
            l’action au quotidien, et qui doit être consulté.
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-400">
            Dans un contexte de gouvernance data, cet outil est essentiel pour
            éviter les zones floues entre métiers, équipes data et IT. Il aide à
            structurer les processus, accélérer les remédiations et rendre plus
            lisible l’organisation autour des données critiques.
          </p>
        </div>
      </section>
    </main>
  );
}
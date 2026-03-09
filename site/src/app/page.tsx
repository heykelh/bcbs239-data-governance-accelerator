import Link from "next/link";

const problemeCards = [
  "Multiples systèmes de données",
  "Responsabilités peu claires",
  "Contrôles qualité hétérogènes",
  "Données critiques peu fiabilisées",
];

const solutionCards = [
  "Modèle de gouvernance data",
  "Rôles Data Owner / Data Steward / IT Custodian",
  "Règles de qualité automatisées",
  "Pilotage par KPI et cockpit web",
];

const resultatsCards = [
  "Dataset bancaire simulé",
  "Contrôles Python exécutés sur les données",
  "Résultats exportés en CSV",
  "Cockpit de pilotage intégré au site",
];

export default function Home() {
  return (
    <main className="text-slate-100">
      <section className="mx-auto max-w-7xl px-6 pb-12 pt-20 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <span className="eyebrow">
              Banque · BCBS239 · Gouvernance des données · Qualité des données
            </span>

            <h1 className="mt-8 max-w-5xl text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Simulation d’un dispositif de{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-400 bg-clip-text text-transparent">
                gouvernance
              </span>{" "}
              et de{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-400 bg-clip-text text-transparent">
                qualité des données
              </span>{" "}
              pour une banque.
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300">
              Ce projet simule une mission de conseil autour de la fiabilisation
              des données critiques de risque. Il relie gouvernance de la donnée,
              contrôles de qualité, pilotage par KPI et restitution via un
              cockpit web intégré au site.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/projet"
                className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/10 hover:scale-[1.01]"
              >
                Comprendre le projet
              </Link>

              <Link
                href="/dashboard"
                className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                Voir le cockpit
              </Link>
            </div>
          </div>

          <div className="glass-card-strong rounded-[2rem] p-6">
            <div className="rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-white/6 to-white/[0.02] p-6">
              <p className="text-sm font-medium text-slate-400">
                Ce que démontre le projet
              </p>

              <div className="mt-6 grid gap-4">
                <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
                  <p className="metric-label">Contexte</p>
                  <p className="metric-value mt-3">Banque</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
                  <p className="metric-label">Cadre de référence</p>
                  <p className="metric-value mt-3">BCBS239</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
                  <p className="metric-label">Livrables</p>
                  <p className="metric-value mt-3">
                    Gouvernance + Qualité + Cockpit
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
                  <p className="metric-label">Objectif</p>
                  <p className="metric-value mt-3">
                    Pilotage fiable des données
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <div className="soft-divider" />
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="mb-8 max-w-3xl">
          <h2 className="section-title text-white">La problématique traitée</h2>

          <p className="section-copy mt-4">
            Dans une banque, les données de risque proviennent souvent de
            plusieurs systèmes. Sans gouvernance claire ni contrôles homogènes,
            il devient difficile de garantir leur fiabilité pour le pilotage et
            le reporting.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {problemeCards.map((item) => (
            <div key={item} className="glass-card rounded-[1.75rem] p-6">
              <div className="mb-5 h-11 w-11 rounded-2xl border border-white/10 bg-white/5" />
              <h3 className="text-lg font-semibold text-white">{item}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
  <div className="glass-card rounded-[2rem] p-8">
    <h2 className="section-title text-white">
      Contexte réglementaire : BCBS 239
    </h2>

    <p className="mt-6 text-slate-300 leading-8">
      BCBS 239 est la norme numéro 239 du Comité de Bâle. Son titre est
      « Principes aux fins de l’agrégation des données sur les risques et de la
      notification des risques ». Elle vise à contribuer à la stabilisation du
      système financier mondial en contraignant les grandes banques à mieux
      connaître et maîtriser les risques auxquels elles sont exposées.
    </p>

    <p className="mt-4 text-slate-300 leading-8">
      La norme a été publiée en janvier 2013 et s’applique depuis le 1er janvier
      2016 aux banques systémiques d’importance mondiale identifiées en
      novembre 2012. Pour les établissements désignés après cette date, elle
      s’applique trois ans après leur désignation.
    </p>

    <p className="mt-4 text-slate-300 leading-8">
      La norme recommande également que les superviseurs nationaux l’appliquent
      aux banques systémiques d’importance nationale trois ans après leur
      désignation. Son objectif général est de renforcer, au sein des banques,
      les capacités d’agrégation des données de risque et les pratiques de
      reporting interne afin d’améliorer la gestion des risques et la prise de
      décision.
    </p>

    <p className="mt-6 text-sm text-slate-400">
      Source :
      <a
        href="https://fr.wikipedia.org/wiki/BCBS_239"
        target="_blank"
        rel="noopener noreferrer"
        className="ml-2 text-cyan-400 hover:text-cyan-300 underline"
      >
        https://fr.wikipedia.org/wiki/BCBS_239
      </a>
    </p>
  </div>
</section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="glass-card rounded-[2rem] p-8">
            <h2 className="section-title text-white">La solution proposée</h2>

            <p className="mt-4 text-slate-300 leading-8">
              Le projet propose un dispositif complet, inspiré d’une mission de
              conseil, articulé autour de la gouvernance des données, de la
              qualité des données et du pilotage par indicateurs.
            </p>

            <div className="mt-6 grid gap-3">
              {solutionCards.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card rounded-[2rem] p-8">
            <h2 className="section-title text-white">Les résultats obtenus</h2>

            <p className="mt-4 text-slate-300 leading-8">
              Le projet matérialise la démarche avec un jeu de données simulé,
              des contrôles automatisés, un export des résultats et une
              restitution visuelle intégrée directement au site.
            </p>

            <div className="mt-6 grid gap-3">
              {resultatsCards.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
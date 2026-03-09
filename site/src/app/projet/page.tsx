export default function ProjetPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16 lg:px-8 text-slate-100">
      <section className="max-w-4xl">
        <span className="eyebrow">Le projet</span>
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Comprendre le projet en un coup d’œil
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-300">
          Ce projet simule la mise en place d’un dispositif de gouvernance et de
          qualité des données pour une banque confrontée à des difficultés de
          fiabilisation de ses données critiques de risque.
        </p>
      </section>

      <section className="mt-14 grid gap-8 lg:grid-cols-3">
        <div className="glass-card rounded-[2rem] p-8">
          <h2 className="section-title text-white">Contexte</h2>
          <p className="mt-4 text-slate-300 leading-8">
            Plusieurs systèmes alimentent des données de risque utilisées pour le
            pilotage et le reporting. Les contrôles sont hétérogènes et les
            responsabilités ne sont pas toujours explicites.
          </p>
        </div>

        <div className="glass-card rounded-[2rem] p-8">
          <h2 className="section-title text-white">Objectif</h2>
          <p className="mt-4 text-slate-300 leading-8">
            Structurer un cadre simple mais crédible pour définir les rôles,
            formaliser des règles de qualité, suivre les anomalies et illustrer
            une logique inspirée de BCBS239.
          </p>
        </div>

        <div className="glass-card rounded-[2rem] p-8">
          <h2 className="section-title text-white">Résultat</h2>
          <p className="mt-4 text-slate-300 leading-8">
            Un projet complet avec documentation de gouvernance, scripts Python,
            exports CSV et cockpit de pilotage intégré au site.
          </p>
        </div>
      </section>

      <section className="mt-14 glass-card rounded-[2rem] p-8">
        <h2 className="section-title text-white">Ce que contient concrètement le projet</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            "Un modèle de gouvernance des données",
            "Une répartition claire des rôles et responsabilités",
            "Des règles de Data Quality automatisées",
            "Un cockpit de pilotage intégré au site",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-slate-300"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="mt-14 rounded-[2rem] border border-white/10 bg-gradient-to-r from-cyan-500/10 via-slate-900/70 to-violet-500/10 p-10">
        <h2 className="section-title text-white">Pourquoi ce projet est pertinent pour un cabinet</h2>
        <p className="mt-4 max-w-4xl leading-8 text-slate-300">
          Il ne se limite pas à un exercice technique. Il montre une capacité à
          structurer un sujet data comme un problème de transformation :
          gouvernance, qualité, rôles, indicateurs, restitution et logique
          réglementaire.
        </p>
      </section>
    </main>
  );
}
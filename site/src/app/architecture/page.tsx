export default function ArchitecturePage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16 lg:px-8 text-slate-100">
      <section className="max-w-4xl">
        <span className="eyebrow">Architecture</span>
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Architecture fonctionnelle du projet
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-300">
          L’architecture du projet a été pensée pour être simple, lisible et
          cohérente avec une démarche de qualité des données : simulation des
          données, exécution des contrôles, export des résultats, restitution et
          pilotage.
        </p>
      </section>

      <section className="mt-14 glass-card rounded-[2rem] p-8">
        <h2 className="section-title text-white">Chaîne de traitement</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-6">
          {[
            "Systèmes sources simulés",
            "Dataset bancaire synthétique",
            "Contrôles qualité Python",
            "Résultats exportés en CSV",
            "Cockpit de pilotage",
            "Site de restitution",
          ].map((step, index) => (
            <div
              key={step}
              className="rounded-[1.5rem] border border-white/10 bg-slate-950/40 p-5"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                0{index + 1}
              </p>
              <p className="mt-4 text-base font-semibold text-white">{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-14 grid gap-8 lg:grid-cols-3">
        <div className="glass-card rounded-[2rem] p-8">
          <h2 className="section-title text-white">1. Données</h2>
          <p className="mt-4 text-slate-300 leading-8">
            Un dataset synthétique bancaire est généré pour simuler des données
            de transaction et de risque.
          </p>
        </div>

        <div className="glass-card rounded-[2rem] p-8">
          <h2 className="section-title text-white">2. Contrôles</h2>
          <p className="mt-4 text-slate-300 leading-8">
            Des scripts Python exécutent des règles de qualité sur les champs
            critiques et produisent un export structuré des anomalies.
          </p>
        </div>

        <div className="glass-card rounded-[2rem] p-8">
          <h2 className="section-title text-white">3. Restitution</h2>
          <p className="mt-4 text-slate-300 leading-8">
            Les résultats sont ensuite valorisés dans un cockpit de pilotage
            intégré au site afin de rendre la qualité des données lisible et
            exploitable.
          </p>
        </div>
      </section>

      <section className="mt-14 rounded-[2rem] border border-white/10 bg-gradient-to-r from-cyan-500/10 via-slate-900/70 to-violet-500/10 p-10">
        <h2 className="section-title text-white">Conclusion</h2>
        <p className="mt-4 max-w-4xl leading-8 text-slate-300">
          L’architecture montre que le sujet est traité de bout en bout :
          génération des données, exécution des contrôles, restitution des
          résultats et mise en visibilité pour le pilotage.
        </p>
      </section>
    </main>
  );
}
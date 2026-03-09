"use client";

import { useEffect, useMemo, useState } from "react";

type DQRow = {
  rule_name: string;
  dimension: string;
  issue_count: number;
  pass_rate: number;
};

type RawRow = {
  transaction_id: string;
  customer_id: string;
  exposure_amount: string;
  transaction_amount: string;
  booking_date: string;
  reporting_date: string;
  risk_segment: string;
  source_system: string;
  country_code: string;
  status: string;
};

function parseCsv(text: string): string[][] {
  return text
    .trim()
    .split(/\r?\n/)
    .map((line) => line.split(",").map((cell) => cell.trim()));
}

function toNumber(value: string | undefined): number {
  if (!value) return 0;
  const cleaned = value.replace(/\r/g, "").trim();
  const parsed = Number(cleaned);
  return Number.isNaN(parsed) ? 0 : parsed;
}

export default function DashboardPage() {
  const [dqRows, setDqRows] = useState<DQRow[]>([]);
  const [rawRows, setRawRows] = useState<RawRow[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const [dqRes, rawRes] = await Promise.all([
          fetch("/data/dq_results.csv"),
          fetch("/data/risk_transactions.csv"),
        ]);

        const dqText = await dqRes.text();
        const rawText = await rawRes.text();

        const dqParsed = parseCsv(dqText);
        const rawParsed = parseCsv(rawText);

        const dqHeaders = dqParsed[0].map((h) => h.replace(/\r/g, "").trim());
        const dqData = dqParsed.slice(1).map((row) => {
          const obj: Record<string, string> = {};
          dqHeaders.forEach((header, index) => {
            obj[header] = (row[index] ?? "").replace(/\r/g, "").trim();
          });

          return {
            rule_name: obj["rule_name"] ?? "",
            dimension: obj["dimension"] ?? "",
            issue_count: toNumber(obj["issue_count"]),
            pass_rate: toNumber(obj["pass_rate"]),
          };
        });

        const rawHeaders = rawParsed[0].map((h) => h.replace(/\r/g, "").trim());
        const rawData = rawParsed.slice(1, 16).map((row) => {
          const obj: Record<string, string> = {};
          rawHeaders.forEach((header, index) => {
            obj[header] = (row[index] ?? "").replace(/\r/g, "").trim();
          });

          return {
            transaction_id: obj["transaction_id"] ?? "",
            customer_id: obj["customer_id"] ?? "",
            exposure_amount: obj["exposure_amount"] ?? "",
            transaction_amount: obj["transaction_amount"] ?? "",
            booking_date: obj["booking_date"] ?? "",
            reporting_date: obj["reporting_date"] ?? "",
            risk_segment: obj["risk_segment"] ?? "",
            source_system: obj["source_system"] ?? "",
            country_code: obj["country_code"] ?? "",
            status: obj["status"] ?? "",
          };
        });

        setDqRows(dqData);
        setRawRows(rawData);
      } catch (error) {
        console.error("Failed to load CSV files", error);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  const metrics = useMemo(() => {
    if (!dqRows.length) {
      return {
        globalScore: "—",
        totalIssues: "—",
        avgPassRate: "—",
        worstRule: "—",
      };
    }

    const totalIssues = dqRows.reduce((sum, row) => sum + row.issue_count, 0);
    const avgPassRate =
      dqRows.reduce((sum, row) => sum + row.pass_rate, 0) / dqRows.length;
    const worstRule = [...dqRows].sort((a, b) => a.pass_rate - b.pass_rate)[0];

    return {
      globalScore: `${avgPassRate.toFixed(1)}%`,
      totalIssues: String(totalIssues),
      avgPassRate: `${avgPassRate.toFixed(1)}%`,
      worstRule: worstRule?.rule_name ?? "—",
    };
  }, [dqRows]);

  const maxIssueCount = useMemo(() => {
    if (!dqRows.length) return 1;
    return Math.max(...dqRows.map((row) => row.issue_count), 1);
  }, [dqRows]);

  return (
    <main className="mx-auto max-w-7xl px-6 py-16 lg:px-8 text-slate-100">
      <section className="max-w-4xl">
        <span className="eyebrow">Dashboard</span>
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Dashboard de pilotage de la qualité des données
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-300">
          Cette page présente les résultats générés par les contrôles de qualité
          exécutés sur le dataset bancaire simulé. Elle illustre comment ces
          résultats peuvent être agrégés en indicateurs de pilotage pour suivre
          l’état des données critiques.
        </p>

        <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-slate-300">
          Ce dashboard illustre une logique simple de pilotage : exécuter des
          contrôles, mesurer les anomalies, identifier les règles les plus
          exposées et donner de la visibilité aux acteurs responsables de la
          qualité des données.
        </div>
      </section>

      <section className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <div className="glass-card rounded-[2rem] p-6">
          <p className="text-sm text-slate-400">Score global</p>
          <p className="mt-4 text-3xl font-bold text-white">{metrics.globalScore}</p>
        </div>
        <div className="glass-card rounded-[2rem] p-6">
          <p className="text-sm text-slate-400">Nombre total d’anomalies</p>
          <p className="mt-4 text-3xl font-bold text-white">{metrics.totalIssues}</p>
        </div>
        <div className="glass-card rounded-[2rem] p-6">
          <p className="text-sm text-slate-400">Taux moyen de réussite</p>
          <p className="mt-4 text-3xl font-bold text-white">{metrics.avgPassRate}</p>
        </div>
        <div className="glass-card rounded-[2rem] p-6">
          <p className="text-sm text-slate-400">Règle la plus exposée</p>
          <p className="mt-4 text-xl font-bold text-white break-words">
            {metrics.worstRule}
          </p>
        </div>
      </section>

      <section className="mt-14 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="glass-card rounded-[2rem] p-8">
          <h2 className="section-title text-white">Anomalies par règle</h2>

          {loading ? (
            <p className="mt-6 text-slate-400">Chargement des données...</p>
          ) : (
            <div className="mt-6 space-y-4">
              {dqRows.map((item) => {
                const width = `${(item.issue_count / maxIssueCount) * 100}%`;

                return (
                  <div key={item.rule_name}>
                    <div className="mb-2 flex items-center justify-between gap-4 text-sm">
                      <span className="font-medium text-slate-300">
                        {item.rule_name}
                      </span>
                      <span className="text-slate-500">
                        {item.issue_count} anomalie(s)
                      </span>
                    </div>
                    <div className="h-3 rounded-full bg-slate-900/70">
                      <div
                        className="h-3 rounded-full bg-gradient-to-r from-cyan-400 to-sky-500"
                        style={{ width }}
                      />
                    </div>
                    <div className="mt-2 text-xs text-slate-500">
                      Dimension : {item.dimension} · Taux de réussite : {item.pass_rate}%
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <div className="glass-card rounded-[2rem] p-8">
          <h2 className="section-title text-white">Lecture métier</h2>
          <p className="mt-4 text-sm leading-7 text-slate-400">
            Cette vue montre comment des contrôles de qualité peuvent être
            transformés en indicateurs lisibles pour piloter des données
            critiques dans un contexte bancaire.
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-400">
            Dans une logique de gouvernance, ces résultats permettent d’identifier
            les anomalies, de prioriser les remédiations et de clarifier les
            responsabilités entre métiers, data et IT.
          </p>

          <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-slate-300">
            Message clé : un sujet Data Quality crédible combine règles,
            responsabilités, monitoring et pilotage.
          </div>
        </div>
      </section>

      <section className="mt-14 glass-card rounded-[2rem] p-8">
        <h2 className="section-title text-white">Table des résultats</h2>

        {loading ? (
          <p className="mt-6 text-slate-400">Chargement des données...</p>
        ) : (
          <div className="mt-6 overflow-x-auto">
            <table className="min-w-full border-separate border-spacing-y-3">
              <thead>
                <tr className="text-left text-sm text-slate-400">
                  <th className="px-4">Règle</th>
                  <th className="px-4">Dimension</th>
                  <th className="px-4">Nombre d’anomalies</th>
                  <th className="px-4">Taux de réussite</th>
                </tr>
              </thead>
              <tbody>
                {dqRows.map((row) => (
                  <tr key={row.rule_name} className="bg-white/[0.03]">
                    <td className="rounded-xl px-4 py-4 text-sm font-medium text-white">
                      {row.rule_name}
                    </td>
                    <td className="rounded-xl px-4 py-4 text-sm text-slate-300">
                      {row.dimension}
                    </td>
                    <td className="rounded-xl px-4 py-4 text-sm text-slate-300">
                      {row.issue_count}
                    </td>
                    <td className="rounded-xl px-4 py-4 text-sm text-slate-300">
                      {row.pass_rate}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      <section className="mt-14 glass-card rounded-[2rem] p-8">
        <h2 className="section-title text-white">
          Aperçu des données contrôlées (15 premières lignes)
        </h2>

        {loading ? (
          <p className="mt-6 text-slate-400">Chargement des données...</p>
        ) : (
          <div className="mt-6 overflow-x-auto">
            <table className="min-w-full border-separate border-spacing-y-3">
              <thead>
                <tr className="text-left text-sm text-slate-400">
                  <th className="px-4">Transaction ID</th>
                  <th className="px-4">Customer ID</th>
                  <th className="px-4">Exposure</th>
                  <th className="px-4">Amount</th>
                  <th className="px-4">Country</th>
                  <th className="px-4">Risk Segment</th>
                </tr>
              </thead>
              <tbody>
                {rawRows.map((row, index) => (
                  <tr key={`${row.transaction_id}-${index}`} className="bg-white/[0.03]">
                    <td className="rounded-xl px-4 py-4 text-sm font-medium text-white">
                      {row.transaction_id}
                    </td>
                    <td className="rounded-xl px-4 py-4 text-sm text-slate-300">
                      {row.customer_id || "NULL"}
                    </td>
                    <td className="rounded-xl px-4 py-4 text-sm text-slate-300">
                      {row.exposure_amount}
                    </td>
                    <td className="rounded-xl px-4 py-4 text-sm text-slate-300">
                      {row.transaction_amount}
                    </td>
                    <td className="rounded-xl px-4 py-4 text-sm text-slate-300">
                      {row.country_code}
                    </td>
                    <td className="rounded-xl px-4 py-4 text-sm text-slate-300">
                      {row.risk_segment || "NULL"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      <section className="mt-14 glass-card rounded-[2rem] p-8">
        <h2 className="section-title text-white">
          Comprendre le dataset et les signaux de risque
        </h2>

        <p className="mt-4 text-slate-300 leading-8">
          Le dataset utilisé dans ce projet simule des données bancaires critiques
          pouvant être mobilisées dans des processus de reporting, de contrôle ou de
          pilotage du risque. Il contient volontairement plusieurs types d’anomalies
          afin d’illustrer comment des contrôles de qualité permettent de détecter des
          données potentiellement problématiques.
        </p>

        <div className="mt-8 overflow-x-auto">
          <table className="min-w-full border-separate border-spacing-y-3">
            <thead>
              <tr className="text-left text-sm text-slate-400">
                <th className="px-4">Colonne</th>
                <th className="px-4">Description</th>
                <th className="px-4">Pourquoi c’est important</th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  "transaction_id",
                  "Identifiant unique de la transaction",
                  "Permet d’éviter les doublons et de garantir l’unicité des enregistrements",
                ],
                [
                  "customer_id",
                  "Identifiant du client",
                  "Indispensable pour rattacher une transaction à un client et assurer la traçabilité",
                ],
                [
                  "exposure_amount",
                  "Montant d’exposition associé à la transaction",
                  "Utilisé pour apprécier le niveau de risque financier ou d’exposition",
                ],
                [
                  "transaction_amount",
                  "Montant de la transaction",
                  "Une valeur négative ou incohérente peut révéler une anomalie de qualité ou de saisie",
                ],
                [
                  "booking_date",
                  "Date d’enregistrement de la transaction",
                  "Permet de suivre la temporalité des opérations",
                ],
                [
                  "reporting_date",
                  "Date utilisée pour le reporting",
                  "Une date future ou incohérente peut compromettre la fiabilité du reporting",
                ],
                [
                  "risk_segment",
                  "Catégorie de risque ou segment métier",
                  "Permet de classifier les transactions et d’analyser les expositions par segment",
                ],
                [
                  "source_system",
                  "Système d’origine des données",
                  "Important pour la traçabilité et l’analyse de la qualité par source",
                ],
                [
                  "country_code",
                  "Code pays associé à la transaction",
                  "Une valeur invalide peut signaler un problème de conformité ou de qualité référentielle",
                ],
                [
                  "status",
                  "Statut de la transaction",
                  "Permet de distinguer les opérations actives, en attente ou clôturées",
                ],
              ].map((row) => (
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
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h3 className="text-lg font-semibold text-white">
              Comment repérer des données à risque ?
            </h3>

            <div className="mt-4 space-y-3 text-sm text-slate-300">
              <p>
                <span className="font-semibold text-white">Identifiant manquant :</span>{" "}
                si <code className="text-cyan-300">customer_id</code> est vide, la
                transaction n’est plus correctement rattachée à un client.
              </p>

              <p>
                <span className="font-semibold text-white">Doublon :</span>{" "}
                si <code className="text-cyan-300">transaction_id</code> apparaît plusieurs
                fois, on risque une double comptabilisation ou un reporting erroné.
              </p>

              <p>
                <span className="font-semibold text-white">Montant invalide :</span>{" "}
                un <code className="text-cyan-300">transaction_amount</code> négatif ou
                incohérent peut traduire une erreur de saisie ou de transformation.
              </p>

              <p>
                <span className="font-semibold text-white">Date future :</span>{" "}
                une <code className="text-cyan-300">reporting_date</code> dans le futur
                peut signaler un problème de fraîcheur ou de calendrier de reporting.
              </p>

              <p>
                <span className="font-semibold text-white">Code pays invalide :</span>{" "}
                une valeur non reconnue dans <code className="text-cyan-300">country_code</code>
                peut signaler une anomalie référentielle.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h3 className="text-lg font-semibold text-white">
              Pourquoi ces anomalies sont importantes ?
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-300">
              Dans un contexte bancaire, des données de mauvaise qualité peuvent avoir
              un impact direct sur la fiabilité du reporting, l’analyse des expositions,
              la compréhension des risques et la qualité des décisions prises à partir
              des données.
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-400">
              L’objectif du projet est précisément de montrer comment des contrôles de
              qualité simples permettent d’identifier ces signaux faibles, de les
              transformer en indicateurs de pilotage, puis de les rendre visibles aux
              acteurs responsables de la gouvernance des données.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
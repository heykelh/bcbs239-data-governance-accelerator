# BCBS239 Data Governance Accelerator

Simulation d’un dispositif de **gouvernance et de qualité des données** dans un contexte bancaire, inspiré des principes de la norme **BCBS 239**.

Ce projet illustre comment structurer un sujet de **Data Governance et Data Quality** de bout en bout :
- définition des rôles
- formalisation des règles de qualité
- exécution de contrôles
- pilotage via un cockpit de monitoring.

---

# 1. Contexte

Les banques utilisent des données provenant de nombreux systèmes (transactions, clients, risques, expositions, etc.).

Lorsque ces données sont mal gouvernées :
- les responsabilités sont floues
- les contrôles sont hétérogènes
- les anomalies ne sont pas visibles
- les décisions peuvent être prises sur des données peu fiables.

La norme **BCBS 239** a été créée pour répondre à ces problématiques.

Elle impose aux banques systémiques de renforcer leurs capacités :

- d’agrégation des données de risque
- de reporting des risques
- de gouvernance des données critiques.

Source :  
https://fr.wikipedia.org/wiki/BCBS_239

---

# 2. Objectif du projet

Ce projet simule une **mission de conseil data** visant à :

- structurer un cadre de gouvernance des données
- définir des responsabilités claires
- formaliser des règles de qualité
- mesurer les anomalies
- piloter la qualité des données via des indicateurs.

L’objectif n’est pas seulement technique : il s’agit de démontrer une **approche structurée de gouvernance data**.

---

# 3. Périmètre du projet

Le projet couvre un périmètre simplifié de **données bancaires critiques** :

- transactions
- clients
- expositions
- données utilisées dans le reporting de risque.

Ces données sont simulées dans un dataset synthétique.

---

# 4. Modèle de gouvernance

Le projet s’appuie sur un modèle classique de gouvernance des données :

### Data Owner
Responsable métier des données et de leur niveau de qualité attendu.

### Data Steward
Responsable opérationnel du suivi de la qualité des données et de la coordination des remédiations.

### IT Custodian
Responsable technique des systèmes, pipelines et contrôles techniques.

---

# 5. Tableau RACI

Un tableau RACI permet de clarifier les responsabilités pour les principales activités :

| Activité | Data Owner | Data Steward | IT Custodian |
|--------|--------|--------|--------|
| Définir les règles métier | A | R | C |
| Suivre les KPI de qualité | C | R | C |
| Implémenter les contrôles techniques | C | C | R |
| Prioriser les remédiations | A | R | C |

- **A** = Accountable  
- **R** = Responsible  
- **C** = Consulted

Le RACI est un outil central dans la gouvernance data car il évite les zones de flou entre métiers, équipes data et IT.

---

# 6. Règles de Data Quality

Le projet implémente plusieurs contrôles de qualité simples mais représentatifs :

### Complétude
Exemple : `customer_id` ne doit pas être NULL.

### Unicité
Exemple : `transaction_id` doit être unique.

### Validité
Exemple : `country_code` doit appartenir à une liste autorisée.

### Cohérence
Exemple : `transaction_amount` ne peut pas être négatif.

### Fraîcheur
Exemple : la date de reporting ne doit pas être incohérente avec la date de transaction.

Les résultats de ces contrôles sont exportés dans un fichier CSV.

---

# 7. Architecture du projet

Le projet suit une chaîne simple :

Dataset bancaire simulé
↓
Contrôles Python
↓
Résultats de qualité exportés en CSV
↓
Cockpit de pilotage intégré au site
↓
Visualisation des anomalies et des KPI


---

# 8. Cockpit de pilotage

Le site web du projet inclut un **cockpit de monitoring de la qualité des données**.

Il présente :

- score global de qualité
- nombre d’anomalies détectées
- règles les plus exposées
- tableau détaillé des contrôles
- aperçu des données.

Ce cockpit illustre comment transformer des contrôles techniques en **indicateurs de pilotage lisibles**.

---

# 9. Technologies utilisées

### Backend / Data

- Python
- Pandas

### Data processing

- génération de dataset synthétique
- contrôles de qualité

### Frontend

- Next.js
- TypeScript
- TailwindCSS

### Visualisation

- cockpit web intégré au site

---

# 10. Structure du repository

bcbs239-data-governance-accelerator
│
├── data
│ ├── risk_transactions.csv
│ └── dq_results.csv
│
├── scripts
│ └── data_quality_checks.py
│
├── site
│ └── Next.js application
│
└── README.md


---

# 11. Ce que démontre ce projet

Ce projet démontre la capacité à :

- structurer un sujet de gouvernance des données
- relier un cadre réglementaire à des contrôles opérationnels
- formaliser des rôles et responsabilités
- produire des indicateurs de qualité
- restituer les résultats dans un outil de pilotage.

---

# 12. Pourquoi ce projet est pertinent pour un cabinet de conseil

Dans un cabinet de conseil data, les missions autour de la gouvernance et de la qualité des données combinent généralement :

- cadrage métier
- organisation et gouvernance
- mise en place de règles de qualité
- pilotage via indicateurs.

Ce projet reproduit cette logique à petite échelle.

---

# 13. Auteur

Projet réalisé dans un objectif de démonstration de compétences en :

- Data Governance
- Data Quality
- Data Analytics
- Structuration de problématiques data dans un contexte bancaire.
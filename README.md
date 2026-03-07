# BCBS239 Data Governance Accelerator

A premium showcase project simulating a **Data Governance** and **Data Quality** framework for a European bank, inspired by **BCBS239** expectations around critical risk data.

## Project objective

Banks rely on accurate, complete and timely data to support risk monitoring, internal steering and regulatory reporting.  
This project simulates a lightweight but credible governance and quality framework designed to improve the reliability of critical risk datasets.

## What this project demonstrates

- A **target Data Governance model**
- Clear **roles and responsibilities** across business, data and IT
- A simple **Data Quality control framework**
- A **simplified BCBS239 mapping**
- A **gap analysis** between current and target state
- A synthetic banking dataset with quality issues
- Automated quality checks and KPI exports
- A premium web showcase built with **Next.js + Vercel**

## Business context

A bank consolidates risk-related data from multiple systems.  
Ownership is fragmented, controls are inconsistent, and anomalies are not centrally monitored.

The project addresses this by proposing:

- governance principles
- a federated operating model
- core data quality rules
- KPI-based monitoring
- a regulatory perspective aligned with BCBS239 logic

## Repository structure

```text
bcbs239-data-governance-accelerator/
├── README.md
├── docs/
├── data/
│   ├── raw/
│   └── processed/
├── src/
├── sql/
├── assets/
└── site/

Main deliverables
Governance

Target Governance Model

Data Roles & RACI

Data Lifecycle

Business Glossary

Regulatory

Simplified BCBS239 Mapping

Gap Analysis

Data Quality

Synthetic risk dataset

DQ rules

DQ check scripts

KPI export

Showcase

Dark premium web frontend

Demo preview for interview use

Tech stack

Python

SQL

CSV

Next.js

Tailwind CSS

Vercel

Quality dimensions covered

Completeness

Accuracy

Consistency

Timeliness

Validity

Uniqueness

Interview positioning

This project is designed to be presented not as a simple technical exercise, but as a consulting-style simulation combining:

governance

quality controls

monitoring

regulatory awareness

business-oriented communication

Suggested interview pitch

I designed this project as a simulation of a Data Governance and Data Quality mission in a banking context.
The objective was to show how critical risk data can be governed, monitored and improved through a combination of ownership, controls, KPIs and a simplified BCBS239 perspective.

Next steps

Connect the frontend demo page to real generated CSV outputs

Add architecture diagrams in assets/diagrams

Add dashboard screenshots in assets/screenshots

Create a short interview deck in assets/presentation


---

# 2) `docs/governance-model.md`

```md
# Target Data Governance Model

## Objective

Define a lightweight but credible governance operating model for critical risk data used in management and regulatory reporting.

## Governance principles

1. Business ownership of critical data
2. Clear accountability for data quality issues
3. Federated governance across business and IT
4. Standardized controls across the data lifecycle
5. Continuous monitoring through KPIs and dashboards

## Governance model

The target model is federated:

- business domains own the data
- data stewards coordinate quality monitoring and remediation
- IT custodians support technical reliability, lineage and infrastructure

## Scope

The model applies to the following critical domains:

- customer data
- transaction data
- exposure data
- risk reporting datasets

## Governance bodies

### Data Governance Committee
Provides direction, arbitration and prioritization for critical data topics.

### Domain Data Owners
Own business definitions, usage expectations and remediation priorities.

### Data Stewards
Coordinate operational quality monitoring and support issue management.

### IT / Data Platform teams
Ensure pipeline robustness, storage reliability and technical controls.

## Key processes

- Data issue identification
- Data issue logging and prioritization
- Root cause analysis
- Control execution and monitoring
- KPI review
- Remediation follow-up

## Expected benefits

- improved ownership of critical data
- better visibility on data issues
- stronger collaboration between business and IT
- improved reliability of risk-related reporting
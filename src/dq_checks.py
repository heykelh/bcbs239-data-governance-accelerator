import os

import pandas as pd


def load_data(path: str) -> pd.DataFrame:
    return pd.read_csv(path)


def run_checks(df: pd.DataFrame) -> pd.DataFrame:
    results = []

    total_records = len(df)

    # Rule 1: customer_id not null
    null_customer = df["customer_id"].isna().sum()
    results.append(["customer_id_not_null", "Completeness", null_customer])

    # Rule 2: transaction_amount > 0
    invalid_amount = (df["transaction_amount"] <= 0).sum()
    results.append(["transaction_amount_positive", "Validity", invalid_amount])

    # Rule 3: reporting_date should not be in the future
    df["reporting_date"] = pd.to_datetime(df["reporting_date"], errors="coerce")
    future_dates = (df["reporting_date"] > pd.Timestamp.today()).sum()
    results.append(["reporting_date_not_future", "Timeliness", future_dates])

    # Rule 4: transaction_id unique
    duplicates = df["transaction_id"].duplicated().sum()
    results.append(["transaction_id_unique", "Uniqueness", duplicates])

    # Rule 5: valid country code
    invalid_country = (~df["country_code"].isin(["FR", "DE", "IT", "ES"])).sum()
    results.append(["country_code_valid", "Validity", invalid_country])

    # Rule 6: risk_segment not null
    null_segment = df["risk_segment"].isna().sum()
    results.append(["risk_segment_not_null", "Completeness", null_segment])

    dq = pd.DataFrame(results, columns=["rule_name", "dimension", "issue_count"])
    dq["pass_rate"] = ((total_records - dq["issue_count"]) / total_records * 100).round(2)

    return dq


def main() -> None:
    input_path = "data/raw/risk_transactions.csv"
    output_path = "data/processed/dq_results.csv"

    os.makedirs("data/processed", exist_ok=True)

    df = load_data(input_path)
    dq_results = run_checks(df)
    dq_results.to_csv(output_path, index=False)

    print("DQ checks completed successfully.")
    print(dq_results)


if __name__ == "__main__":
    main()
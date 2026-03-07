import os
import random
from datetime import datetime, timedelta

import pandas as pd

random.seed(42)

N_ROWS = 500
TODAY = datetime.today()

RISK_SEGMENTS = ["Retail", "Corporate", "SME", "Investment"]
SOURCE_SYSTEMS = ["CORE_BANKING", "RISK_ENGINE", "FINANCE_APP"]
COUNTRIES = ["FR", "DE", "IT", "ES"]
STATUSES = ["BOOKED", "PENDING", "CLOSED"]


def build_dataset(n_rows: int) -> pd.DataFrame:
    rows = []

    for i in range(n_rows):
        transaction_id = f"TX-{100000 + i}"
        customer_id = f"CUST-{random.randint(1000, 1200)}"
        exposure_amount = round(random.uniform(1000, 500000), 2)
        transaction_amount = round(random.uniform(100, 100000), 2)
        booking_date = TODAY - timedelta(days=random.randint(0, 120))
        reporting_date = booking_date + timedelta(days=random.randint(0, 10))
        risk_segment = random.choice(RISK_SEGMENTS)
        source_system = random.choice(SOURCE_SYSTEMS)
        country_code = random.choice(COUNTRIES)
        status = random.choice(STATUSES)

        rows.append(
            [
                transaction_id,
                customer_id,
                exposure_amount,
                transaction_amount,
                booking_date.date(),
                reporting_date.date(),
                risk_segment,
                source_system,
                country_code,
                status,
            ]
        )

    return pd.DataFrame(
        rows,
        columns=[
            "transaction_id",
            "customer_id",
            "exposure_amount",
            "transaction_amount",
            "booking_date",
            "reporting_date",
            "risk_segment",
            "source_system",
            "country_code",
            "status",
        ],
    )


def inject_quality_issues(df: pd.DataFrame) -> pd.DataFrame:
    df = df.copy()

    # Missing values
    df.loc[5, "customer_id"] = None
    df.loc[30, "risk_segment"] = None

    # Invalid amounts
    df.loc[10, "transaction_amount"] = -9999

    # Future reporting date
    df.loc[20, "reporting_date"] = (TODAY + timedelta(days=30)).date()

    # Invalid country code
    df.loc[25, "country_code"] = "XXX"

    # Duplicate records
    df = pd.concat([df, df.iloc[[40, 41]]], ignore_index=True)

    return df


def main() -> None:
    os.makedirs("data/raw", exist_ok=True)

    dataset = build_dataset(N_ROWS)
    dataset = inject_quality_issues(dataset)

    output_path = "data/raw/risk_transactions.csv"
    dataset.to_csv(output_path, index=False)

    print(f"Dataset generated successfully: {output_path}")
    print(f"Shape: {dataset.shape}")


if __name__ == "__main__":
    main()
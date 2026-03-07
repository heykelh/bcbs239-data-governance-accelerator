-- Rule 1: customer_id must not be null
SELECT COUNT(*) AS issue_count
FROM risk_transactions
WHERE customer_id IS NULL;

-- Rule 2: transaction_amount must be positive
SELECT COUNT(*) AS issue_count
FROM risk_transactions
WHERE transaction_amount <= 0;

-- Rule 3: reporting_date must not be in the future
SELECT COUNT(*) AS issue_count
FROM risk_transactions
WHERE reporting_date > CURRENT_DATE;

-- Rule 4: transaction_id must be unique
SELECT transaction_id, COUNT(*) AS duplicate_count
FROM risk_transactions
GROUP BY transaction_id
HAVING COUNT(*) > 1;

-- Rule 5: country_code must be valid
SELECT COUNT(*) AS issue_count
FROM risk_transactions
WHERE country_code NOT IN ('FR', 'DE', 'IT', 'ES');

-- Rule 6: risk_segment must not be null
SELECT COUNT(*) AS issue_count
FROM risk_transactions
WHERE risk_segment IS NULL;
---
title: Learning SQL the Practical Way
date: 2025-01-05
---

SQL shines when you write queries that are both correct and readable. Focus on:

1. Start with the result table in mind, then work backwards.
2. Prefer explicit JOINs over implicit joins.
3. Use CTEs (WITH) to break complex problems into steps.
4. Create the right indexes for your most common filters and joins.

Example readable join:

```sql
WITH recent_orders AS (
  SELECT * FROM orders WHERE created_at >= NOW() - INTERVAL '30 days'
)
SELECT u.id, u.name, COUNT(o.id) AS orders_30d
FROM users u
LEFT JOIN recent_orders o ON o.user_id = u.id
GROUP BY u.id, u.name
ORDER BY orders_30d DESC;
```

Small habits compound into fast dashboards and happier teammates.



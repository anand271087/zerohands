const toPositive = (value) => {
  const n = Number(value);
  return Number.isFinite(n) && n > 0 ? n : 0;
};

// Estimated yearly cost of a manual task and what automating it would save.
// timeShare is the percentage (0–100) of each person's time spent on the task.
export function estimateSavings({ people, timeShare, monthlySalary, automationRate = 0.75 }) {
  const share = Math.min(toPositive(timeShare), 100) / 100;
  const currentYearly = Math.round(toPositive(people) * share * toPositive(monthlySalary) * 12);
  const savedYearly = Math.round(currentYearly * automationRate);
  return { currentYearly, savedYearly };
}

const trim = (n) => n.toFixed(1).replace(/\.0$/, '');

// ₹45,000 · ₹6.8 L · ₹1.2 Cr
export function formatINR(amount) {
  const n = toPositive(amount);
  if (n >= 1e7) return `₹${trim(n / 1e7)} Cr`;
  if (n >= 1e5) return `₹${trim(n / 1e5)} L`;
  return `₹${Math.round(n).toLocaleString('en-IN')}`;
}

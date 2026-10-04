import { estimateSavings } from './savings.js';

export const LEAD_FORM_NAME = 'calculator-lead';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function isValidEmail(value) {
  return typeof value === 'string' && EMAIL_RE.test(value.trim());
}

const toNumber = (value) => {
  const n = Number(value);
  return Number.isFinite(n) && n > 0 ? n : 0;
};

// The row we store for each calculator lead.
export function buildLeadRecord({ email, people, timeShare, monthlySalary }) {
  const record = {
    email: String(email).trim().toLowerCase(),
    people: toNumber(people),
    timeShare: Math.min(toNumber(timeShare), 100),
    monthlySalary: toNumber(monthlySalary),
  };
  return { ...record, ...estimateSavings(record) };
}

// Sends the lead to Netlify Forms (backup) and, when configured, the Google Sheet.
// Never throws: the visitor sees their result even if a destination is down.
export async function submitLead(record, sheetUrl) {
  const fields = { 'form-name': LEAD_FORM_NAME, ...record, page: window.location.href };

  const requests = [
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(fields).toString(),
    }),
  ];

  if (sheetUrl) {
    // Apps Script web apps don't return CORS headers, so send as a simple request.
    requests.push(fetch(sheetUrl, { method: 'POST', mode: 'no-cors', body: JSON.stringify(fields) }));
  }

  await Promise.allSettled(requests);
}

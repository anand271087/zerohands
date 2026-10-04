import assert from 'node:assert/strict';
import { isValidEmail, buildLeadRecord } from './leads.js';

// Email validation
assert.equal(isValidEmail('anand@zerohands.co'), true);
assert.equal(isValidEmail('  first.last+tag@company.co.in '), true);
assert.equal(isValidEmail(''), false);
assert.equal(isValidEmail('anand'), false);
assert.equal(isValidEmail('anand@'), false);
assert.equal(isValidEmail('anand@company'), false);
assert.equal(isValidEmail('an and@company.com'), false);
assert.equal(isValidEmail(undefined), false);

// Lead record: trimmed + lower-cased email, numeric inputs, computed estimate
assert.deepEqual(
  buildLeadRecord({ email: ' Anand@ZeroHands.co ', people: '5', timeShare: '50', monthlySalary: '30000' }),
  { email: 'anand@zerohands.co', people: 5, timeShare: 50, monthlySalary: 30000, currentYearly: 900000, savedYearly: 675000 }
);

// Garbage inputs become 0, never NaN
assert.deepEqual(
  buildLeadRecord({ email: 'a@b.co', people: '', timeShare: 'x', monthlySalary: -1 }),
  { email: 'a@b.co', people: 0, timeShare: 0, monthlySalary: 0, currentYearly: 0, savedYearly: 0 }
);

console.log('leads: all tests passed');

import assert from 'node:assert/strict';
import { estimateSavings, formatINR } from './savings.js';

// Normal case: 5 people × 50% × ₹30,000/mo × 12
assert.deepEqual(
  estimateSavings({ people: 5, timeShare: 50, monthlySalary: 30000 }),
  { currentYearly: 900000, savedYearly: 675000 }
);

// Zeros, negatives, empty strings and NaN all collapse to ₹0
assert.deepEqual(estimateSavings({ people: 0, timeShare: 50, monthlySalary: 30000 }), { currentYearly: 0, savedYearly: 0 });
assert.deepEqual(estimateSavings({ people: -3, timeShare: 50, monthlySalary: 30000 }), { currentYearly: 0, savedYearly: 0 });
assert.deepEqual(estimateSavings({ people: '', timeShare: '', monthlySalary: '' }), { currentYearly: 0, savedYearly: 0 });
assert.deepEqual(estimateSavings({ people: NaN, timeShare: 50, monthlySalary: 30000 }), { currentYearly: 0, savedYearly: 0 });

// Time share above 100% is clamped
assert.deepEqual(
  estimateSavings({ people: 1, timeShare: 150, monthlySalary: 10000 }),
  { currentYearly: 120000, savedYearly: 90000 }
);

// Numeric strings from inputs work
assert.deepEqual(
  estimateSavings({ people: '2', timeShare: '100', monthlySalary: '25000' }),
  { currentYearly: 600000, savedYearly: 450000 }
);

// Huge input stays finite
assert.ok(Number.isFinite(estimateSavings({ people: 1e12, timeShare: 100, monthlySalary: 1e12 }).savedYearly));

// Formatting in Indian units
assert.equal(formatINR(0), '₹0');
assert.equal(formatINR(45000), '₹45,000');
assert.equal(formatINR(675000), '₹6.8 L');
assert.equal(formatINR(6000000), '₹60 L');
assert.equal(formatINR(12000000), '₹1.2 Cr');

console.log('savings: all tests passed');

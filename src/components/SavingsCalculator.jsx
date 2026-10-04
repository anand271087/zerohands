import { useState } from 'react';
import { CALENDAR_URL, LEADS_SHEET_URL } from '../config';
import { formatINR } from '../lib/savings';
import { buildLeadRecord, isValidEmail, submitLead } from '../lib/leads';
import ArrowIcon from './ArrowIcon';

const STORAGE_KEY = 'zh_lead_email';

const readSavedEmail = () => {
    try {
        return localStorage.getItem(STORAGE_KEY) || '';
    } catch {
        return '';
    }
};

const SavingsCalculator = () => {
    const [people, setPeople] = useState(5);
    const [timeShare, setTimeShare] = useState(50);
    const [monthlySalary, setMonthlySalary] = useState(30000);

    // 'ready' → 'email' → 'result'
    const [step, setStep] = useState('ready');
    const [email, setEmail] = useState(readSavedEmail);
    const [emailError, setEmailError] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const [result, setResult] = useState(null);

    const inputs = { people, timeShare, monthlySalary };

    const reveal = (record) => {
        setResult({ currentYearly: record.currentYearly, savedYearly: record.savedYearly });
        setStep('result');
    };

    const handleCalculate = () => {
        const saved = readSavedEmail();
        if (isValidEmail(saved)) {
            const record = buildLeadRecord({ ...inputs, email: saved });
            submitLead(record, LEADS_SHEET_URL);
            reveal(record);
        } else {
            setStep('email');
        }
    };

    const handleEmailSubmit = async (e) => {
        e.preventDefault();
        if (!isValidEmail(email)) {
            setEmailError('Please enter a valid work email.');
            return;
        }
        setEmailError('');
        setSubmitting(true);
        const record = buildLeadRecord({ ...inputs, email });
        await submitLead(record, LEADS_SHEET_URL);
        try {
            localStorage.setItem(STORAGE_KEY, record.email);
        } catch {
            // Storage unavailable (private mode) — they'll just be asked again next time.
        }
        setSubmitting(false);
        reveal(record);
    };

    // Editing an input after seeing a result asks them to recalculate.
    const update = (setter) => (e) => {
        setter(e.target.value);
        if (step === 'result') setStep('ready');
    };

    return (
        <section className="calc">
            <div className="container">
                <div className="calc-card glass-card">
                    <div className="calc-intro">
                        <span className="section-eyebrow">Savings calculator</span>
                        <h2 className="section-title">What is manual work <span className="gradient-text">costing you?</span></h2>
                        <p className="section-subtitle">
                            Think of one repetitive task — data entry, invoice checks, report building.
                            Fill in three numbers.
                        </p>
                    </div>

                    <div className="calc-grid">
                        <div className="calc-inputs">
                            <label>
                                People doing this task
                                <input type="number" min="0" inputMode="numeric" value={people} onChange={update(setPeople)} />
                            </label>
                            <label>
                                Share of their time on it: <strong>{Math.min(Number(timeShare) || 0, 100)}%</strong>
                                <input type="range" min="5" max="100" step="5" value={timeShare} onChange={update(setTimeShare)} />
                            </label>
                            <label>
                                Average monthly salary (₹)
                                <input type="number" min="0" step="1000" inputMode="numeric" value={monthlySalary} onChange={update(setMonthlySalary)} />
                            </label>
                        </div>

                        <div className="calc-output" aria-live="polite">
                            {step === 'ready' && (
                                <div className="calc-locked">
                                    <span className="calc-lock-icon" aria-hidden="true">₹</span>
                                    <h3>See what this task is costing you</h3>
                                    <p>We'll work out the yearly cost and how much automation could save.</p>
                                    <button type="button" className="btn-hero-cta" onClick={handleCalculate}>
                                        Calculate my savings
                                        <ArrowIcon />
                                    </button>
                                </div>
                            )}

                            {step === 'email' && (
                                <form className="calc-email" onSubmit={handleEmailSubmit} noValidate>
                                    <h3>Your results are ready</h3>
                                    <p>Enter your email to see your savings estimate.</p>
                                    <label htmlFor="calc-email-input" className="visually-hidden">Work email</label>
                                    <input
                                        id="calc-email-input"
                                        type="email"
                                        autoComplete="email"
                                        placeholder="you@company.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        aria-invalid={Boolean(emailError)}
                                        aria-describedby={emailError ? 'calc-email-error' : undefined}
                                        autoFocus
                                    />
                                    {emailError && <span id="calc-email-error" className="calc-error">{emailError}</span>}
                                    <button type="submit" className="btn-hero-cta" disabled={submitting}>
                                        {submitting ? 'Calculating…' : 'Show my savings'}
                                        {!submitting && <ArrowIcon />}
                                    </button>
                                    <small className="calc-consent">
                                        We'll only use your email to share your results and follow up. No spam.
                                    </small>
                                </form>
                            )}

                            {step === 'result' && result && (
                                <>
                                    <div>
                                        <small>This task costs you</small>
                                        <span className="calc-cost">{formatINR(result.currentYearly)}<em>/year</em></span>
                                    </div>
                                    <div>
                                        <small>Automation could save around</small>
                                        <span className="calc-saved gradient-text">{formatINR(result.savedYearly)}<em>/year</em></span>
                                    </div>
                                    <p className="calc-note">Estimate assumes 75% of the task is automated, with people reviewing the rest.</p>
                                    {result.savedYearly > 0 && (
                                        <p className="calc-leak">
                                            That's <strong>{formatINR(result.savedYearly)}</strong> you're losing every year — every
                                            month you wait adds another <strong>{formatINR(result.savedYearly / 12)}</strong> to it.
                                            <span>Ready to stop the leak? Book your free call below.</span>
                                        </p>
                                    )}
                                    <a href={CALENDAR_URL} target="_blank" rel="noopener noreferrer" className="btn-hero-cta">
                                        Book a free 20-min call
                                        <ArrowIcon />
                                    </a>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SavingsCalculator;

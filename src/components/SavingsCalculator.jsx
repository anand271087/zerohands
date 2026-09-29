import { useState } from 'react';
import { CALENDAR_URL } from '../config';
import { estimateSavings, formatINR } from '../lib/savings';
import ArrowIcon from './ArrowIcon';

const SavingsCalculator = () => {
    const [people, setPeople] = useState(5);
    const [timeShare, setTimeShare] = useState(50);
    const [monthlySalary, setMonthlySalary] = useState(30000);

    const { currentYearly, savedYearly } = estimateSavings({ people, timeShare, monthlySalary });

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
                                <input type="number" min="0" inputMode="numeric" value={people} onChange={(e) => setPeople(e.target.value)} />
                            </label>
                            <label>
                                Share of their time on it: <strong>{Math.min(Number(timeShare) || 0, 100)}%</strong>
                                <input type="range" min="5" max="100" step="5" value={timeShare} onChange={(e) => setTimeShare(e.target.value)} />
                            </label>
                            <label>
                                Average monthly salary (₹)
                                <input type="number" min="0" step="1000" inputMode="numeric" value={monthlySalary} onChange={(e) => setMonthlySalary(e.target.value)} />
                            </label>
                        </div>

                        <div className="calc-output" aria-live="polite">
                            <div>
                                <small>This task costs you</small>
                                <span className="calc-cost">{formatINR(currentYearly)}<em>/year</em></span>
                            </div>
                            <div>
                                <small>Automation could save around</small>
                                <span className="calc-saved gradient-text">{formatINR(savedYearly)}<em>/year</em></span>
                            </div>
                            <p className="calc-note">Estimate assumes 75% of the task is automated, with people reviewing the rest.</p>
                            <a href={CALENDAR_URL} target="_blank" rel="noopener noreferrer" className="btn-hero-cta">
                                Get your exact number
                                <ArrowIcon />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SavingsCalculator;

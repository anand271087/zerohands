import { CALENDAR_URL } from '../config';
import ArrowIcon from './ArrowIcon';
import InvoiceFlow from './InvoiceFlow';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="container hero-content">
                <div className="hero-text">
                    <span className="eyebrow">
                        <span className="eyebrow-dot" /> AI Automation Agency
                    </span>
                    <h1 className="hero-title">
                        We saved Spinny <span className="gradient-text">₹80&nbsp;lakh a year.</span>
                        <br />
                        What could AI save you?
                    </h1>
                    <p className="hero-subtitle">
                        We find the manual work draining your team — invoices, data entry,
                        document search — and automate it. Live in weeks, not quarters.
                    </p>
                    <div className="hero-actions">
                        <a href={CALENDAR_URL} target="_blank" rel="noopener noreferrer" className="btn-hero-cta">
                            Book a free 20-min call
                            <ArrowIcon />
                        </a>
                        <a href="#work" className="btn-secondary">See our work ↓</a>
                    </div>
                    <a href="#spinny-invoice" className="hero-proof-chip">
                        <img src="/logos/spinny.svg" alt="Spinny" className="chip-logo" />
                        <span>₹80L/yr saved</span>
                        <span className="chip-sep" />
                        <span>paid back in 2 weeks</span>
                        <span className="chip-arrow" aria-hidden="true">→</span>
                    </a>
                </div>

                <div className="hero-visual">
                    <InvoiceFlow />
                </div>
            </div>
        </section>
    );
};

export default Hero;

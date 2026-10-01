import { CALENDAR_URL } from '../config';
import ArrowIcon from './ArrowIcon';

const FinalCTA = () => {
    return (
        <section id="contact" className="final-cta">
            <div className="container">
                <div className="final-cta-card">
                    <h2 className="final-cta-title">
                        Find out what AI could{" "}
                        <span className="gradient-text">save your business.</span>
                    </h2>
                    <p className="final-cta-subtitle">
                        A free 20-minute call. Bring one process — we'll map how to automate it
                        and what it's worth.
                    </p>
                    <p className="final-cta-urgency">
                        Your competitors are already automating this. Every month you don't is a
                        month they pull ahead.
                    </p>
                    <a href={CALENDAR_URL} target="_blank" rel="noopener noreferrer" className="btn-hero-cta">
                        Book a free 20-min call
                        <ArrowIcon />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FinalCTA;

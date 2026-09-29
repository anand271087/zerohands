import { CALENDAR_URL } from '../config';
import ArrowIcon from './ArrowIcon';

const MidCTA = () => {
    return (
        <section className="mid-cta">
            <div className="container">
                <div className="mid-cta-band">
                    <div className="mid-cta-text">
                        <h2 className="mid-cta-title">Got a task your team hates doing?</h2>
                        <p className="mid-cta-subtitle">
                            Tell us about it in 20 minutes. We'll tell you honestly whether AI can
                            take it off their plate — and roughly what it would save.
                        </p>
                    </div>
                    <a href={CALENDAR_URL} target="_blank" rel="noopener noreferrer" className="btn-hero-cta">
                        Book a free call
                        <ArrowIcon />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default MidCTA;

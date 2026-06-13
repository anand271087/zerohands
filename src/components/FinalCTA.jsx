const CALENDAR_URL = "https://calendar.app.google/hQr6ckhLWeZbR8sf8";

const FinalCTA = () => {
    return (
        <section id="contact" className="final-cta">
            <div className="container">
                <div className="final-cta-card">
                    <h2 className="final-cta-title">
                        Ready to scale your business with{" "}
                        <span className="gradient-text">automated video production?</span>
                    </h2>
                    <p className="final-cta-subtitle">
                        Tell us your goals — we&apos;ll show you exactly how video drives
                        your next stage of growth.
                    </p>
                    <a href={CALENDAR_URL} target="_blank" rel="noopener noreferrer" className="btn-hero-cta">
                        Book a Call
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                            <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FinalCTA;

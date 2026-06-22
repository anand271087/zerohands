const CALENDAR_URL = "https://calendly.com/anand_kaliappan/call";

const MidCTA = () => {
    return (
        <section className="mid-cta">
            <div className="container">
                <div className="mid-cta-band">
                    <div className="mid-cta-text">
                        <h2 className="mid-cta-title">We automate the busy work</h2>
                        <p className="mid-cta-subtitle">
                            From video production to repetitive operations — let AI handle it,
                            so your team can focus on growth.
                        </p>
                    </div>
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

export default MidCTA;

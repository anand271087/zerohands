const CALENDAR_URL = "https://calendar.app.google/hQr6ckhLWeZbR8sf8";

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="container hero-content">
                <div className="hero-text">
                    <span className="eyebrow">
                        <span className="eyebrow-dot" /> AI Video Production Studio
                    </span>
                    <h1 className="hero-title">
                        Scale Your Business with
                        <br />
                        <span className="gradient-text">Professional Video</span>
                    </h1>
                    <p className="hero-subtitle">
                        Launch professional, presenter-led content in days instead of
                        weeks — at a fraction of the cost. More content means more leads,
                        and more leads mean more revenue.
                    </p>
                    <div className="hero-actions">
                        <a href={CALENDAR_URL} target="_blank" rel="noopener noreferrer" className="btn-hero-cta">
                            Book a Call
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="hero-visual">
                    <div className="video-frame">
                        <div className="vf-glow" />
                        <div className="vf-screen">
                            <span className="vf-rec"><span className="vf-rec-dot" /> REC</span>
                            <div className="vf-presenter" />
                            <div className="vf-scanline" />
                            <button className="vf-play" aria-hidden="true" tabIndex={-1}>
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </button>
                            <div className="vf-caption">“Meet your new AI presenter.”</div>
                        </div>
                        <div className="vf-timeline">
                            <span /><span /><span /><span />
                        </div>
                    </div>
                    <div className="vf-chip vf-chip-1">Voiceover · EN</div>
                    <div className="vf-chip vf-chip-2">Auto-edited</div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

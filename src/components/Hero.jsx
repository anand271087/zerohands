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
                        Studio-Quality Video,
                        <br />
                        <span className="gradient-text">Without the Studio</span>
                    </h1>
                    <p className="hero-subtitle">
                        We produce lifelike, presenter-led videos with AI — no cameras,
                        no actors, no editing suite. Launch professional content in days,
                        not weeks, at a fraction of the cost.
                    </p>
                    <div className="hero-actions">
                        <a href="#video" className="btn-primary">See What We Create</a>
                        <a href={CALENDAR_URL} target="_blank" rel="noopener noreferrer" className="btn-secondary">Book a Call</a>
                    </div>
                    <div className="hero-trust">
                        <div className="trust-item">
                            <strong>90%</strong>
                            <span>lower production cost</span>
                        </div>
                        <div className="trust-divider" />
                        <div className="trust-item">
                            <strong>Days</strong>
                            <span>not weeks to launch</span>
                        </div>
                        <div className="trust-divider" />
                        <div className="trust-item">
                            <strong>∞</strong>
                            <span>versions &amp; languages</span>
                        </div>
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

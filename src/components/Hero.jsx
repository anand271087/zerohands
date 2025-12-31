const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="container hero-content">
                <div className="hero-text">
                    <h1 className="hero-title">
                        The Future of Automation is <br />
                        <span className="gradient-text">Zero Hands</span>
                    </h1>
                    <p className="hero-subtitle">
                        Scale your business with intelligent AI agents that work 24/7.
                        No manual intervention required.
                    </p>
                    <div className="hero-actions">
                        <button className="btn-primary">Start Automating</button>
                        <a href="https://calendar.app.google/hQr6ckhLWeZbR8sf8" target="_blank" rel="noopener noreferrer" className="btn-secondary">Book a Call</a>
                    </div>
                </div>
                <div className="hero-visual">
                    <div className="glow-orb"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

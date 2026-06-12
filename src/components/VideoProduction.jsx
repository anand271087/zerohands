const VideoProduction = () => {
    const stages = [
        {
            step: "01",
            title: "Lifelike AI Presenters",
            description:
                "A real, on-camera presenter who never needs a studio or a second take. Put a polished human face on your message and film unlimited videos from a single script.",
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.8" />
                    <path d="M4 20c0-3.314 3.582-6 8-6s8 2.686 8 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
            ),
        },
        {
            step: "02",
            title: "Natural Human Voice",
            description:
                "Warm, expressive voiceovers indistinguishable from a real narrator — in any tone or language. Localize one video into dozens of markets instantly.",
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 10v4M8 6v12M12 3v18M16 6v12M20 10v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
            ),
        },
        {
            step: "03",
            title: "Automated Studio Editing",
            description:
                "Polished, on-brand cuts, captions, and compositing assembled automatically. Turn one script into a library of finished videos without an editor touching a timeline.",
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
                    <path d="M3 9h18M8 5v14" stroke="currentColor" strokeWidth="1.8" />
                    <path d="M12.5 11.5l3.5 2-3.5 2v-4z" fill="currentColor" />
                </svg>
            ),
        },
    ];

    const outcomes = [
        { stat: "90%", label: "Lower production cost" },
        { stat: "Days", label: "Not weeks to delivery" },
        { stat: "∞", label: "Versions & languages" },
        { stat: "0", label: "Cameras, studios, or crews" },
    ];

    return (
        <section id="video" className="video-section">
            <div className="container">
                <div className="section-header">
                    <span className="section-eyebrow">The Production Pipeline</span>
                    <h2 className="section-title">
                        Video Production, <span className="gradient-text">Reinvented</span>
                    </h2>
                    <p className="section-subtitle">
                        Everything a film crew, voiceover artist, and editor deliver —
                        produced by AI, end to end.
                    </p>
                </div>

                <div className="stage-flow">
                    {stages.map((stage) => (
                        <article key={stage.step} className="stage-card glass-card">
                            <div className="stage-top">
                                <span className="step-badge">{stage.step}</span>
                                <div className="icon-wrapper">{stage.icon}</div>
                            </div>
                            <h3>{stage.title}</h3>
                            <p>{stage.description}</p>
                        </article>
                    ))}
                </div>

                <div className="outcomes-strip">
                    {outcomes.map((o) => (
                        <div key={o.label} className="outcome">
                            <span className="outcome-stat gradient-text">{o.stat}</span>
                            <span className="outcome-label">{o.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default VideoProduction;

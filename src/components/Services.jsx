import { services } from '../data/content';

const icons = [
    <path key="doc" d="M7 3h7l5 5v13H7zM14 3v5h5M10 13h6M10 17h6" />,
    <path key="chat" d="M4 5h16v11H9l-5 4zM8 10h8M8 13h5" />,
    <path key="web" d="M12 3a9 9 0 100 18 9 9 0 000-18zM3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z" />,
    <path key="flow" d="M5 6h4v4H5zM15 14h4v4h-4zM9 8h3a2 2 0 012 2v4a2 2 0 002 2" />,
    <path key="agent" d="M12 3l2 4 4 .6-3 3 .7 4.4L12 13l-3.7 2 .7-4.4-3-3L10 7zM5 21h14" />,
];

const Services = () => {
    return (
        <section id="services" className="services">
            <div className="container">
                <div className="section-header">
                    <span className="section-eyebrow">Services</span>
                    <h2 className="section-title">
                        What we <span className="gradient-text">automate</span>
                    </h2>
                    <p className="section-subtitle">
                        Five ways we take work off your team's plate. Most clients start with one.
                    </p>
                </div>
                <div className="services-grid">
                    {services.map((s, i) => (
                        <article key={s.title} className="service-card glass-card">
                            <div className="automation-icon">
                                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#00e5ff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    {icons[i]}
                                </svg>
                            </div>
                            <span className="service-outcome">{s.outcome}</span>
                            <h3>{s.title}</h3>
                            <p>{s.body}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;

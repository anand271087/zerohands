import { clients, stats } from '../data/content';

const Proof = () => {
    return (
        <section className="proof">
            <div className="container">
                <div className="proof-logos">
                    <span className="proof-label">Trusted by</span>
                    {clients.map((c) => (
                        <img key={c.name} src={c.logo} alt={c.name} className="client-logo" />
                    ))}
                </div>
                <div className="proof-stats">
                    {stats.map((s) => (
                        <div key={s.label} className="proof-stat">
                            <span className="proof-value gradient-text">{s.value}</span>
                            <span className="proof-text">{s.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Proof;

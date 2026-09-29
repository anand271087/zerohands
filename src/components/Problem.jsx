import { problems } from '../data/content';

const Problem = () => {
    return (
        <section className="problem">
            <div className="container">
                <div className="section-header">
                    <span className="section-eyebrow">Sound familiar?</span>
                    <h2 className="section-title">
                        Your best people are doing <span className="gradient-text">copy-paste work</span>
                    </h2>
                    <p className="section-subtitle">
                        Every mid-sized company has a team quietly spending its days on work a machine
                        could do. It doesn't show up on a dashboard — it shows up in your salary bill.
                    </p>
                </div>
                <div className="problem-grid">
                    {problems.map((p, i) => (
                        <article key={p.title} className="problem-card glass-card">
                            <span className="step-badge">0{i + 1}</span>
                            <h3>{p.title}</h3>
                            <p>{p.body}</p>
                        </article>
                    ))}
                </div>
                <p className="problem-kicker">If it's repetitive, it can be automated.</p>
            </div>
        </section>
    );
};

export default Problem;

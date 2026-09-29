import { steps } from '../data/content';

const Process = () => {
    return (
        <section id="process" className="process">
            <div className="container">
                <div className="section-header">
                    <span className="section-eyebrow">How it works</span>
                    <h2 className="section-title">
                        From first call to <span className="gradient-text">live in weeks</span>
                    </h2>
                </div>
                <ol className="process-track">
                    {steps.map((s) => (
                        <li key={s.title} className="process-step">
                            <span className="process-when">{s.when}</span>
                            <h3>{s.title}</h3>
                            <p>{s.body}</p>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
};

export default Process;

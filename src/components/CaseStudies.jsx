import { caseStudies, resultsTable } from '../data/content';

const CaseStudies = () => {
    return (
        <section id="work" className="cases">
            <div className="container">
                <div className="section-header">
                    <span className="section-eyebrow">Our work</span>
                    <h2 className="section-title">
                        Real automations. <span className="gradient-text">Real rupees saved.</span>
                    </h2>
                    <p className="section-subtitle">
                        Built for Spinny and Beroe — and running in production today.
                    </p>
                </div>

                <div className="table-scroll glass-card">
                    <table className="results-table">
                        <thead>
                            <tr>
                                <th>Client · use case</th>
                                <th>Before → after</th>
                                <th>Time</th>
                                <th>Man-hours saved</th>
                                <th>Value / year</th>
                                <th>Payback</th>
                            </tr>
                        </thead>
                        <tbody>
                            {resultsTable.map((r) => (
                                <tr key={r.useCase}>
                                    <td><strong>{r.client}</strong><span>{r.useCase}</span></td>
                                    <td className="rt-change">{r.change}</td>
                                    <td>{r.time}</td>
                                    <td>{r.hours}</td>
                                    <td className="rt-value">{r.value}</td>
                                    <td>{r.payback}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <p className="table-note">
                    Estimates based on team size before and after, at 176 working hours per person per month.
                </p>

                <div className="case-grid">
                    {caseStudies.map((c) => (
                        <article key={c.id} id={c.id} className={`case-card glass-card ${c.featured ? 'featured' : ''}`}>
                            <div className="case-top">
                                <img src={c.logo} alt={c.client} className="case-logo" />
                                <span className="case-tag">{c.tag}</span>
                            </div>
                            <h3>{c.title}</h3>

                            <div className="case-body">
                                <div>
                                    <h4>The problem</h4>
                                    <p>{c.problem}</p>
                                    <h4>What we built</h4>
                                    <ul>
                                        {c.built.map((b) => <li key={b}>{b}</li>)}
                                    </ul>
                                </div>
                                <div className="case-results">
                                    {c.results.map((r) => (
                                        <div key={r.label} className="case-result">
                                            <span className="gradient-text">{r.value}</span>
                                            <small>{r.label}</small>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="case-stack">
                                {c.stack.map((s) => <span key={s}>{s}</span>)}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CaseStudies;

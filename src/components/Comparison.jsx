import { comparison } from '../data/content';

const Comparison = () => {
    return (
        <section className="compare">
            <div className="container">
                <div className="section-header">
                    <span className="section-eyebrow">Why ZeroHands</span>
                    <h2 className="section-title">
                        Big-firm results <span className="gradient-text">without the six-month project</span>
                    </h2>
                </div>
                <div className="table-scroll glass-card">
                    <table className="compare-table">
                        <thead>
                            <tr>
                                <th />
                                {comparison.columns.map((c, i) => (
                                    <th key={c} className={i === 0 ? 'us' : ''}>{c}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {comparison.rows.map((r) => (
                                <tr key={r.label}>
                                    <th scope="row">{r.label}</th>
                                    {r.values.map((v, i) => (
                                        <td key={comparison.columns[i]} className={i === 0 ? 'us' : ''}>{v}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default Comparison;

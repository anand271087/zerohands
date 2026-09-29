import { faqs } from '../data/content';

const FAQ = () => {
    return (
        <section id="faq" className="faq">
            <div className="container">
                <div className="section-header">
                    <span className="section-eyebrow">FAQ</span>
                    <h2 className="section-title">Questions we <span className="gradient-text">always get</span></h2>
                </div>
                <div className="faq-list">
                    {faqs.map((f) => (
                        <details key={f.q} className="faq-item glass-card">
                            <summary>{f.q}</summary>
                            <p>{f.a}</p>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;

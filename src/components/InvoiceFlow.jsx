const lines = [
    { part: "Brake pad set · front", qty: 1, amount: "₹2,480", status: "Matched", tone: "ok" },
    { part: "Oil filter", qty: 2, amount: "₹640", status: "Matched", tone: "ok" },
    { part: "Wiper blade 22\"", qty: 2, amount: "₹1,120", status: "Exceeds", tone: "warn" },
];

// Animated illustration of the Spinny invoice pipeline: photo in, matched lines out.
const InvoiceFlow = () => {
    return (
        <div className="flow-card" role="img" aria-label="An invoice photo is read by AI, each line is matched to the order, and an overcharge is flagged">
            <div className="flow-glow" />
            <div className="flow-head">
                <span className="flow-dots"><span /><span /><span /></span>
                <span className="flow-title">invoice-pipeline</span>
                <span className="flow-live"><span className="eyebrow-dot" /> live</span>
            </div>

            <div className="flow-step flow-s1">
                <span className="flow-icon">▣</span>
                <div>
                    <strong>Invoice photo received</strong>
                    <small>INV-2291 · handwritten · from CRM</small>
                </div>
            </div>

            <div className="flow-step flow-s2">
                <span className="flow-icon">✦</span>
                <div>
                    <strong>AI reading invoice</strong>
                    <small>14 fields extracted · 96% confidence</small>
                </div>
                <span className="flow-bar"><span /></span>
            </div>

            <div className="flow-lines flow-s3">
                {lines.map((l) => (
                    <div key={l.part} className="flow-line">
                        <span className="flow-part">{l.part}</span>
                        <span className="flow-qty">×{l.qty}</span>
                        <span className="flow-amt">{l.amount}</span>
                        <span className={`flow-pill ${l.tone}`}>{l.status}</span>
                    </div>
                ))}
            </div>

            <div className="flow-foot flow-s4">
                <span>✓ Done in 40 sec</span>
                <span className="flow-flag">₹320 overcharge flagged</span>
            </div>
        </div>
    );
};

export default InvoiceFlow;

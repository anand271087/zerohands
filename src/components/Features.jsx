const Features = () => {
    const features = [
        {
            title: "Intelligent Workflows",
            description: "Automate complex business logic with adaptive AI that learns from your data.",
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#00e5ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M2 17L12 22L22 17" stroke="#00e5ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M2 12L12 17L22 12" stroke="#00e5ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        },
        {
            title: "24/7 Support Bots",
            description: "Deploy customer service agents that resolve 80% of queries instantly.",
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 11.5C21.0031 12.8125 20.5899 14.0933 19.8227 15.1584C19.0555 16.2236 17.9759 17.0152 16.7454 17.4144C15.5149 17.8136 14.1988 17.8001 12.9976 17.3761C11.7964 16.9522 10.7745 16.1406 10 15.0625L3 20V12C3.00344 9.61394 3.95325 7.32707 5.6406 5.63971C7.32795 3.95236 9.61482 3.00256 12 3C14.3869 3.00256 16.6738 3.95236 18.3611 5.63971C20.0485 7.32707 20.9983 9.61394 21 12V11.5Z" stroke="#2979ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        },
        {
            title: "Data Analysis",
            description: "Turn raw data into actionable insights with real-time processing.",
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 3V21H21" stroke="#00e5ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M18 9L11.5 15.5L8.5 12.5L3 18" stroke="#00e5ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        }
    ];

    return (
        <section id="services" className="features">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Why <span className="gradient-text">Zero Hands?</span></h2>
                    <p className="section-subtitle">We remove the manual effort from your scaling process.</p>
                </div>

                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-card glass-card">
                            <div className="icon-wrapper">
                                {feature.icon}
                            </div>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;

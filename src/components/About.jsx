
import anandImg from '../assets/anand.png';
import purnimaImg from '../assets/purnima.png';

const About = () => {
    const founders = [
        {
            name: "Anand Kaliappan",
            role: "Co-Founder & AI Engineer",
            bio: "With 14+ years of experience in Generative AI, machine learning, and NLP, Anand leads our technical vision. He specializes in unravelling data complexities and creating autonomous systems that learn and adapt.",
            image: anandImg,
            linkedin: "https://www.linkedin.com/in/anand-kaliappan-ai-engineer"
        },
        {
            name: "Purnima Jaganathan",
            role: "Co-Founder & Head of AI/Data",
            bio: "Former Head of AI at Beroe Inc with a rich background at Accenture. Purnima brings expertise in managing large-scale data products and holds multiple patents in platform architecture.",
            image: purnimaImg,
            linkedin: "https://www.linkedin.com/in/purnima-jagannathan-837328a0/"
        }
    ];

    return (
        <section id="about" className="about">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Meet the <span className="gradient-text">Founders</span></h2>
                    <p className="section-subtitle"> The minds behind the machines.</p>
                </div>

                <div className="founders-grid">
                    {founders.map((founder, index) => (
                        <div key={index} className="founder-card glass-card">
                            <div className="founder-image-wrapper">
                                <img src={founder.image} alt={founder.name} className="founder-image" />
                            </div>
                            <div className="founder-info">
                                <h3>{founder.name}</h3>
                                <div className="founder-role">{founder.role}</div>
                                <p className="founder-bio">{founder.bio}</p>
                                <a href={founder.linkedin} target="_blank" rel="noopener noreferrer" className="linkedin-link">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.447 20.452H16.892V14.899C16.892 13.546 16.355 12.634 15.157 12.634C14.242 12.634 13.694 13.259 13.454 13.866C13.367 14.079 13.344 14.378 13.344 14.675V20.452H9.78904C9.78904 20.452 9.83704 10.741 9.78904 9.729H13.344V11.247C13.816 10.518 14.662 9.479 16.551 9.479C18.892 9.479 20.447 11.009 20.447 14.297V20.452ZM5.97504 8.169C4.74004 8.169 3.93104 7.352 3.93104 6.279C3.93104 5.18 4.76404 4.385 6.02304 4.385C7.28104 4.385 8.06404 5.18 8.08804 6.279C8.08804 7.352 7.28104 8.169 5.97504 8.169ZM4.19504 20.452H7.75104V9.729H4.19504V20.452Z" />
                                    </svg>
                                    Connect on LinkedIn
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;

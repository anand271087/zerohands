import { TESTIMONIALS_APPROVED } from '../config';
import { testimonials } from '../data/content';

const Testimonials = () => {
    if (!TESTIMONIALS_APPROVED) return null;

    return (
        <section className="testimonials">
            <div className="container">
                <div className="testimonial-grid">
                    {testimonials.map((t) => (
                        <figure key={t.company} className="testimonial glass-card">
                            <blockquote>“{t.quote}”</blockquote>
                            <figcaption>
                                <strong>{t.role}</strong>
                                <span>{t.company}</span>
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

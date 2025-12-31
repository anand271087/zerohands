import { useState, useEffect } from 'react';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="container header-content">
                <div className="logo">
                    Zero<span className="gradient-text">Hands</span>
                </div>
                <nav className="nav-links">
                    <a href="#home">Home</a>
                    <a href="#services">Services</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                </nav>
                <a href="https://calendar.app.google/hQr6ckhLWeZbR8sf8" target="_blank" rel="noopener noreferrer" className="btn-primary">Book a Call</a>
            </div>

        </header>
    );
};

export default Header;

import { useState, useEffect } from 'react';
import { CALENDAR_URL } from '../config';

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
                <a href="#home" className="logo">
                    Zero<span className="gradient-text">Hands</span>
                </a>
                <nav className="nav-links">
                    <a href="#work">Work</a>
                    <a href="#services">Services</a>
                    <a href="#process">Process</a>
                    <a href="#about">About</a>
                </nav>
                <a href={CALENDAR_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">Book a free call</a>
            </div>
        </header>
    );
};

export default Header;

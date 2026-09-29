const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <h3>ZeroHands</h3>
                        <p>AI automation for growing companies — plus AI avatar video.</p>
                    </div>
                    <div className="footer-links">
                        <div className="link-group">
                            <h4>Company</h4>
                            <a href="#work">Our work</a>
                            <a href="#services">Services</a>
                            <a href="#about">About</a>
                        </div>
                        <div className="link-group">
                            <h4>Legal</h4>
                            <a href="#">Privacy</a>
                            <a href="#">Terms</a>
                        </div>
                        <div className="link-group">
                            <h4>Contact Us</h4>
                            <a href="mailto:support@zerohands.co">support@zerohands.co</a>
                            <p className="contact-text">Chennai, India</p>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} ZeroHands. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

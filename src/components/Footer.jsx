const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <h3>Zero Hands</h3>
                        <p>Automating the future, today.</p>
                    </div>
                    <div className="footer-links">
                        <div className="link-group">
                            <h4>Company</h4>
                            <a href="#">About</a>
                            <a href="#">Careers</a>
                            <a href="#">Contact</a>
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
                    <p>&copy; {new Date().getFullYear()} Zero Hands. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

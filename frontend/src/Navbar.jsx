import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">

                {/* Logo */}
                <a href="/" className="navbar-logo">
                    <img
                        src="/media/images/main-logo.png"
                        alt="Lakshya Sparsh"
                    />
                </a>

                {/* Menu */}
                <div className="navbar-menu">
                    <a href="#">About us</a>
                    <a href="#">Start Investing</a>
                    <a href="#">NRI Corner</a>
                    <Link to="/downloads">Downloads</Link>
                    <Link to="/gallery">Gallery</Link>
                    <Link to="/contact">Contact Us</Link>

                    <Link to="/login" className="login-btn">
                        Login
                    </Link>
                </div>

            </div>
        </nav>
    );
}

export default Navbar;
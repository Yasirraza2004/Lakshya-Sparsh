import './Navbar.css';

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
                    <a href="#">Downloads</a>
                    <a href="#">Gallery</a>
                    <a href="#">Contact Us</a>

                    <button className="login-btn">
                        Login
                    </button>
                </div>

            </div>
        </nav>
    );
}

export default Navbar;
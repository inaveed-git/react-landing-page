import "./NavBar.css";

function NavBar() {
    return (
        <nav className="navbar">
            <div className="logo">
                <img src="/img/brand_logo.png" alt="logo" />
            </div>

            <div className="list">
                <ul>
                    <li>MENU</li>
                    <li>LOCATION</li>
                    <li>ABOUT</li>
                    <li>CONTACT</li>
                </ul>
            </div>

            <button className="login-btn">LOGIN</button>
        </nav>
    );
}

export default NavBar;

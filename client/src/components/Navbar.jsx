import "../styles/Navbar.css";
import { Link, NavLink } from "react-router-dom";

function Navbar({ darkMode, setDarkMode }) {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    Task <span>Master</span>
                </Link>

                <ul className="nav-links">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? "nav-item active" : "nav-item"
                            }
                        >
                            Dashboard
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/login"
                            className={({ isActive }) =>
                                isActive ? "nav-item active" : "nav-item"
                            }
                        >
                            Log In
                        </NavLink>
                    </li>
                    
                    <li>
                        <button type="button" onClick={() => setDarkMode(!darkMode)} className="theme-toggle">
                            {darkMode ? 'Light' : 'Dark'}
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;

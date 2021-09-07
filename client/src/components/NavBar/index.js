import {Link} from "react-router-dom";
import React from "react";

import './style.css';


function NavBar() {
    return(
        <div className="header">
        <nav className="navbar navbar-expand-lg text-light">
            <div className="container">
                <Link className="navbar-brand nav-text" to="/"><h2>Google Books Search</h2></Link>
                <ul className="navbar-nav">
                <li className="nav-item search-link">
                    <Link to="/" className={window.location.pathname === "/" ? "nav-link-active" : "nav-link"}>
                        Search
                    </Link>
                </li>
                <li className="nav-item saved-link">
                    <Link to="/saved" className={window.location.pathname === "/saved" ? "nav-link-active" : "nav-link"}>
                        Saved Books
                    </Link>
                </li>
                </ul>
            </div>
        </nav>
    </div>
    )
}

export default NavBar;
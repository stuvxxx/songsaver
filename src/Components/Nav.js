import React from "react";
import { Link } from "react-router-dom";



function Nav() {
    const navStyle = {
        color: "white"
    }
    return(
        <nav>
            <ul className="nav-links">
                <Link style={navStyle} to="/about">
                    <li>About</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav
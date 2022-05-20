import React from "react";
import { Link } from "react-router-dom";

function About() {
    return(
        <div>
            <h1>About me</h1>
            <p>Blablablablablabalabla</p>
            <Link to="/">
                <span>Collapse</span>
            </Link>
        </div>
    )
}

export default About
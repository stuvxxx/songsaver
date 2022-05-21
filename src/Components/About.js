import React from "react";
import { Link } from "react-router-dom";

function About() {
    return(
        <div className="about-container">
            <h1>About ding!</h1>
            <p>
            Hai! Ik ben Marc. Ik heb zero aandacht aan de styling besteed. Maar volgens mij is de code op orde!
            </p>
            <Link to="/">
                <div className="collapse-btn">Collapse</div>
            </Link>
        </div>
    )
}

export default About
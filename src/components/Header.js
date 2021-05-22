import React from "react";
import Typed from "react-typed";
import {Link} from "react-scroll";

const Header = () => {
    return (
        <div id="home" class = "header-wrapper">
            <div class = "main-info">
                
                <div class ="text">
                Hello, I'm  <span class="highlight">Amine Aboufariss</span>.
                <br />
                I'm a&nbsp;
                
                
                <Typed
                    className= "typed-text"
                    strings = {["Software Engineer", "Software Developer", "Software Designer", "Web Developer", "Game Developer", "Coding Enthusiast"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                </div>
                <Link className="button view-work btn-main-offer page nav-link" smooth={true} offset={-50} to="about">View my work</Link>
            </div>

        </div>
    )
}

export default Header
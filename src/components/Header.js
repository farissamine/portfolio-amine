import React from "react";
import Typed from "react-typed";

const Header = () => {
    return (
        <div class = "header-wrapper">
            <div class = "main-info">
                <h1>Software Engineering and Development</h1>
                <Typed
                    className= "typed-text"
                    strings = {["Software Developer", "Software Designer", "Game Developer", "Coding Weirdo"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <a href="#" class="btn-main-offer">contact me</a>
            </div>

        </div>
    )
}

export default Header
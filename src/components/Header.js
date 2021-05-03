import React from "react";
import Typed from "react-typed";

const Header = () => {
    return (
        <div class = "header-wrapper">
            <div class = "main-info">
                <h1>Software Engineering and Development</h1>
                <Typed
                    className= "typed-text"
                    strings = {["Software Design", "Software Development", "Game Development", "sentence 4"]}
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
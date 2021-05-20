import React from 'react';
import author from "../me.jpg";

const AboutMe = () => {
    return(
        <div id="about" className= "container py-5">
            <div className="row">
                <div className = "col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                        <img className="profile-img" src={author} alt="author..."/>
                    </div>
                </div>
                <div className = "col-lg-6 col-xm-12 about-text">
                    <div className = "about-box container flex align-items-center justify-content-center">
                        <h1 className ="about-heading">about me</h1>
                        
                    </div>
                    <div className="about-header-bar"></div>
                    <p>
                        Hello, I am Amine. I have been developing software professionally for about 2 years. I am a Full-Stack developer and I mostly enjoy working on back end systems. I find enjoyment in immediately seeing the results of my code in robotic functions. I also aspire to develop code that can be aidful to those in the medical industry.
                        <br /><br />
                        I am an experienced Software Engineer with a demonstrated history of working in the law and industrial automation industry. Skilled in Java, Python, C++, JavaScript and a few other languages, I am a strong engineering professional with a Bachelor's degree focused in Computer Science from DePaul University.
                        <br /><br />
                        My experience as a professional programmer for the past 2 years, ability to learn languages quickly and effectively, and love for coding in my free time, make me an excellent software developer. 
                    </p>
                </div>
            </div>    
        </div>
    )
}

export default AboutMe

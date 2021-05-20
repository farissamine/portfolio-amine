import React from 'react';
import author from "../me.jpg";

const AboutMe = () => {
    return(
        <div id="about" class= "container py-5">
            <div class="row">
                <div class = "col-lg-6 col-xm-12">
                    <div class="photo-wrap mb-5">
                        <img class="profile-img" src={author} alt="author..."/>
                    </div>
                </div>
                <div class = "col-lg-6 col-xm-12">
                    <h1 class ="about-heading">about me</h1>
                    <p>
                        Hello, I am Amine. I have been developing software professionally for about 2 years. I am a Full-Stack developer and I mostly enjoy working on back end systems. I find enjoyment in immediately seeing the results of my code in robotic functions. I also aspire to develop code that can be aidful to those in the medical industry.
                        <br /><br />
                        I am an experienced Software Engineer with a demonstrated history of working in the law and industrial automation industry. Skilled in Java, Python, C++, JavaScript and a few other languages, I am a strong engineering professional with a Bachelor's degree focused in Computer Science from DePaul University during the year of 2020.
                        <br /><br />
                        My experience as a professional programmer for the past 2 years, ability to learn languages quickly and effectively, and love for coding in my free time with an eagerness to learn, make me an excellent software developer. 
                    </p>
                </div>
            </div>    
        </div>
    )
}

export default AboutMe

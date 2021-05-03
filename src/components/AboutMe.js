import React from 'react';
import author from "../me.jpg";

const AboutMe = () => {
    return(
        <div class= "container py-5">
            <div class="row">
                <div class = "col-lg-6 col-xm-12">
                    <div clas="photo-wrap">
                        <img class="profile-img" src={author} alt="author..."/>
                    </div>
                </div>
                <div class = "col-lg-6 col-xm-12">
                    <h1>about me</h1>
                    <p>
                        Hello, I am Amine. I have been developing software professionally for about 2 years. I am a Full-Stack developer and I mostly enjoy working on back end systems. I find enjoyment in immediately seeing the results of my code in robotic functions. I also aspire to develop code that can be aidful to those in the medical industry.

                        I am an experienced Software Engineer with a demonstrated history of working in the law and industrial automation industry. I am skilled in Java, Python, C++, JavaScript and a few other languages. Strong engineering professional with a Bachelor's degree focused in Computer Science from DePaul University.

                        My experience as a professional programmer for the past 2 years, ability to learn languages quickly and effectively, and love for coding in my free time with an eagerness to learn, make me an excellent software developer. 
                    </p>
                </div>
            </div>    
        </div>
    )
}

export default AboutMe

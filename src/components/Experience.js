import React from 'react';

export const Experience = () => {
    return (
        <div id="experience" className="experience">
            <div className = " d-flex justify-content-center my-5">
                <h1>experience</h1>
            </div>

            <div className= "container experience-wrapper">
                <div className = "timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2016</h3>
                        <h4>DePaul University</h4>
                        <p>Started studying Computer Science at DePaul University</p>
                        <br/>
                    </div>
                </div>
                {/* - */}
                <div className = "timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2017 - 2018</h3>
                        <h4>Law Bulletin Media</h4>
                        <h6>Software Analyst/Quality Assurance Tester</h6>
                        <p> • Manually tested Lawyerport.com, publicnoticenetwork.net, Juralaw.net, and iOS applications.<br />
                            • Prepared automated test scripts using Selenium’s JAVA API.<br />
                            • Produced HTMl/XML parsers in Python to speed up pace of data reception & verification for tens of thousands of datasets.<br />
                            • Initiated Regression and Load tests on Lawyerport.com when migrating to AWS.<br />
                            &emsp;› Tests include use of TestNG and JUnit frameworks.<br />
                            • Led team in planning and initiating Load testing solutions.
                        </p>
                    </div>
                </div>
                {/* - */}
                <div className = "timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2019 - 2020</h3>
                        <h4>Innovia3D</h4>
                        <h6>Software Developer</h6>
                        <p> • Refactored bi-directional motor service code from C to C++.<br />
                            • Optimized code resulting in 30% faster response time to user input.<br />
                            • Expedited a robust and user-friendly Graphical User Interface (GUI).<br />
                            &emsp;› Built front-end using Electron framework in NodeJS and back-end in C++.<br />
                            • Built bi-directional motor controller as a desktop application open to extension featuring Object-Oriented Programming (OOP) solutions.<br/>
                            • Communicated different hardware and software needs with management daily.
                        </p>
                    </div>
                </div>
                {/* - */}
                <div className = "timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2020</h3>
                        <h4>DePaul University</h4>
                        <p>Graduated from DePaul University with a Bachelor's Degree in Computer Science</p>
                        <br/><br/><br/><br/><br/>
                    </div>
                </div>
                {/* - */}
            </div>
        </div>
    )
}

export default Experience
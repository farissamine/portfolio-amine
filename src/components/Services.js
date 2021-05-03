import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/*import {} from "@fortawesome/free-brands-svg-icons";*/ /*This is used for brands */
import { faGraduationCap, faCogs, faFileCode, faTerminal} from "@fortawesome/free-solid-svg-icons";


const Services = () => {
    return(
        <div className = "services">
            <h1 className = "py-5">my services</h1>
                <div className= "container">
                    <div className= "row">
                        <div className="col-md-3 col--sm-6">
                            <div className= "box">
                                <div className="circle"><FontAwesomeIcon className="icon" icon={faTerminal} size='2x'/></div>

                                <h3>Software Development</h3>
                                <p>Your software requirements will be assessed and developed with efficiency.</p>
                            </div>
                        </div>
                        {/* - */}
                        <div className="col-md-3 col--sm-6">
                            <div className= "box">
                                <div className="circle"><FontAwesomeIcon className="icon" icon={faGraduationCap} size='2x'/></div>

                                <h3>Software Tutoring</h3>
                                <p>I will help you accomplish your software projects, and guide you to understand the code being written.</p>
                            </div>
                        </div>
                        {/* - */}
                        <div className="col-md-3 col--sm-6">
                            <div className= "box">
                                <div className="circle"><FontAwesomeIcon className="icon" icon={faFileCode} size='2x'/></div>

                                <h3>Web Development</h3>
                                <p>Your websites will be built with new and proven technologies.</p>
                            </div>
                        </div>
                        {/* - */}
                        <div className="col-md-3 col--sm-6">
                            <div className= "box">
                                <div className="circle"><FontAwesomeIcon className="icon" icon={faCogs} size='2x'/></div>

                                <h3>Back End Development</h3>
                                <p>accelerate the development and success of your back end technologies.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Services
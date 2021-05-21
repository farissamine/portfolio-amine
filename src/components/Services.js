import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/*import {} from "@fortawesome/free-brands-svg-icons";*/ /*This is used for brands */
import { faGraduationCap, faCogs, faFileCode, faTerminal} from "@fortawesome/free-solid-svg-icons";


const Services = () => {
    return(
        <div id="services" className = "services">
            <h1 className = "py-5">my services<div className="services-header-bar"></div></h1>
            
                <div className= "container">
                    <div className= "row">
                        <div className="col-lg-3 col-md-6 col--sm-6">
                            <div className= "box">
                                <div className="circle"><FontAwesomeIcon className="icon" icon={faGraduationCap} size='2x'/></div>

                                <h3>Software<br/> Tutoring</h3>
                                <p>Accomplish your software projects, and attain a complete understanding of your code.</p>
                            </div>
                        </div>
                        {/* -  */}
                        <div className="col-lg-3 col-md-6 col--sm-6">
                            <div className= "box">
                                <div className="circle"><FontAwesomeIcon className="icon" icon={faTerminal} size='2x'/></div>

                                <h3>Software Development</h3>
                                <p>Software requirements will be assessed and developed with efficiency and scalability.</p>
                            </div>
                        </div>
                        {/* - */}
                        {/* - */}
                        <div className="col-lg-3 col-md-6 col--sm-6">
                            <div className= "box">
                                <div className="circle"><FontAwesomeIcon className="icon" icon={faCogs} size='2x'/></div>

                                <h3>Back End Development</h3>
                                <p>Accelerate the development and success of your back end algorithms and technologies.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col--sm-6">
                            <div className= "box">
                                <div className="circle"><FontAwesomeIcon className="icon" icon={faFileCode} size='2x'/></div>

                                <h3>Web Development</h3>
                                <p>Work with responsive layouts and UIs that are mobile friendly, intuitive, dynamic.</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
    )
}

export default Services
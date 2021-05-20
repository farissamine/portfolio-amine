import React from 'react'
import flappy from "../images/flappystill.png";
import calc from "../images/calc.png";
//font awesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
//react popup box
import {PopupboxManager, PopupboxContainer} from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css"


//Flappy Bird Popup
const openPopupboxFlappy = () => {
    const content = (
    <>
    <img className = "project-image-popupbox" src={flappy} alt="Flappy Bird Project..."/>
    <p>This is a flappy bird clone I worked on</p>
    <b>Github:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/farissamine/FBirdAmine")}>https://github.com/farissamine/FBirdAmine</a>
    </>
    )

    PopupboxManager.open({ content });
    PopupboxManager.update({
        content,
        config: {
          titleBar: {
            text: "Flappy Bird clone project.",
          },
        },
      });  
}
const popupboxConfigFlappy = {
    titleBar:{
        enable: true,
        text: 'Flappy Bird clone project.'
    },
    fadeIn: true,
    fadeInSpeed: 500       
}





//iOS Calculator Popup
const openPopupboxIosCalc = () => {
    const content = (
    <>
    <img className = "project-image-popupbox" src={calc} alt="iOS Calculator Application Project..."/>
    <p>This is an ios calculator application I worked on</p>
    <b>Github:</b> <a className="hyper-link" onClick={() => window.open("")}>needs to be filled</a>
    </>
    )

    PopupboxManager.open({ content });
    PopupboxManager.update({
        content,
        config: {
          titleBar: {
            text: "iOS Calculator Application",
          },
        },
      });   
}
const popupboxConfigIosCalc = {
    titleBar:{
        enable: true,
        text: 'iOS Calculator Application.'
    },
    fadeIn: true,
    fadeInSpeed: 500       
}





//Battleship Game Popup
const openPopupboxBattleship = () => {
    const content = (
    <>
    <img className = "project-image-popupbox" src={calc} alt="Battleship Application Project..."/>
    <p>Battlehsip application I worked on</p>
    <b>Github:</b> <a className="hyper-link" onClick={() => window.open("")}>needs to be filled</a>
    </>
    )

    PopupboxManager.open({ content });
    /*PopupboxManager.update({
        content,
        config: {
          titleBar: {
            text: "Battleship Application.",
          },
        },
      }); */
}
const popupboxConfigBattleship = {
    titleBar:{
        enable: true,
        text: 'Battleship Application.'
    },
    fadeIn: true,
    fadeInSpeed: 500       
}





export const Projects = () => {
    return (
        <div id ="projects" className = "project-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">Projects<div className="project-header-bar"></div></h1>

                <div className="image-box-wrapper row justify-content-center">
                    
                    <div className="project-image-box" onClick = {openPopupboxFlappy}>
                        <img className="project-image" src={flappy} alt="Flappy Bird Clone Project..."/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="project-icon" icon={faSearchPlus} />
                        <PopupboxContainer {...popupboxConfigFlappy}/>
                    </div>
                
                {/* - */}
                
                    <div className="project-image-box"  onClick = {openPopupboxIosCalc}>
                        <img className="project-image" src={calc} alt="iOS Calculator Clone Project..."/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="project-icon" icon={faSearchPlus} />
                        <PopupboxContainer {...popupboxConfigIosCalc}/>
                    </div>
                
                {/* - */}
                
                    <div className="project-image-box">
                        <img className="project-image" src={flappy} alt="Flappy Bird Clone Project..."/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="project-icon" icon={faSearchPlus} />
                        <PopupboxContainer {...popupboxConfigBattleship}/>
                    </div>
                
                {/* - */}
                
                    <div className="project-image-box">
                        <img className="project-image" src={flappy} alt="Flappy Bird Clone Project..."/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="project-icon" icon={faSearchPlus} />
                    </div>
                </div>
            </div>
        
            
            
            
        </div>
    )
}

export default Projects;
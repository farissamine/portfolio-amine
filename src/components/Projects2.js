import React, {useEffect, useState} from 'react';
import '../project.scss';
import flappy from "../images/flappystill.png";
import ProjectsList from "../projectsList/ProjectsList";

import{
    featuredPortfolio,
    webPortfolio,
    mobilePortfolio,
    designPortfolio,
    contentPortfolio,
} from "../projectsList/data"

const Projects2 = () => {

    const[selected, setSelected] = useState("featured");
    const[data, setData] = useState([]);
    const list =[
        {
            id: "featured",
            title: "Featured",
        },
        {
            id: "web",
            title: "Web App",
        },
        {
            id: "mobile",
            title: "Mobile App",
        },
        {
            id: "design",
            title: "Design",
        },
        {
            id: "content",
            title: "Content",
        },
    ];



    useEffect(()=>{

        switch(selected){
            case "freatured":
                setData(featuredPortfolio);
                break;
            case "web":
                setData(webPortfolio);
                break;
            case "mobile":
                setData(mobilePortfolio);
                break;
            case "design":
                setData(designPortfolio);
                break;
            case "content":
                setData(contentPortfolio);
                break;
            default:
                setData(featuredPortfolio);

            

        }

    },[selected])

    return (
        
        <div id ="projects" className = "projects">
            <div className="">
                <h1 className="text-uppercase">Projects<div className="hbar"></div></h1>
            </div>

            <ul>
                {list.map(item=>(
                    <ProjectsList 
                        title={item.title} 
                        active={selected === item.id}
                        setSelected={setSelected}
                        id={item.id}
                        />
                ))}
            </ul>
            <div className="container">
                <div className="item">
                    <img src= {flappy} alt=""/>
                    <h3>Flappy Bird</h3>
                </div>
                {data.map(d=>(
                    <div className="item">
                    <img src= {d.image} alt=""/>
                        <h3>{d.title}</h3>
                    </div>
                ))}
                
            </div>


        </div>
        

        /*
        <script src="scripts/pt.min.js"></script>
        <script src="scripts/index.js"></script>
        <script src="scripts/modal.js"></script>
        
        <section className="flex" id="portfolio">
            hello
            <div className="header" data-animation="slide-in-right">PROJECTS</div> 
            <div className="header-bar " data-animation="slide-in-right" data-delay=".3s"></div>
            
            
            
            <div className="filter-wrap " data-animation="fade-in">
            <div className="flex row">
                <div className="filter" data-filter="all">ALL</div>
                <div className="filter" data-filter=".node">NODE.JS</div>
                <div className="filter" data-filter=".rails">RUBY/RAILS</div>
                <div className="filter" data-filter=".js">JAVASCRIPT</div>
            </div>
            <div className="float-bar">
                <div className="flex row">
                <div className="filter" data-filter="all">ALL</div>
                <div className="filter" data-filter=".node">NODE.JS</div>
                <div className="filter" data-filter=".rails">RUBY/RAILS</div>
                <div className="filter" data-filter=".js">JAVASCRIPT</div>
                </div>
            </div>
            </div>

            <div id="gallery" className="container flex row wrap waypoint">
            <div className="mix js" data-my-order="1">
                <div>
                <div className="card"></div>
                <div className="text">
                    <div className="bold">Roambi</div>
                    <span className="highlight">Pure JavaScript</span>
                </div>
                <div className="button" id="roambi">LEARN MORE</div>
                </div>
            </div>

            <div className="mix rails" data-my-order="1">
                <div>
                <div className="card"></div>
                <div className="text">
                    <div className="bold">Walker Tracker</div>
                    <span className="highlight">Ruby on Rails+ JS</span>
                </div>
                <div className="button" id="walker">LEARN MORE</div>
                </div>
            </div>

            <div className="mix node" data-my-order="1">
                <div>
                <div className="card"></div>
                <div className="text">
                    <div className="bold">MY STAND</div>
                    <span className="highlight">Node.js on Sails</span>
                </div>
                <div className="button" id="mystand">LEARN MORE</div>
                </div>
            </div>

            <div className="mix js" data-my-order="1">
                <div>
                <div className="card"></div>
                <div className="text">
                    <div className="bold">NEVER SURRENDER</div>
                    <span className="highlight">Pure JavaScript</span>
                </div>
                <div className="button" id="never">LEARN MORE</div>
                </div> 
            </div>
            
            <div className="mix rails" data-my-order="1">
                <div>
                <div className="card"></div>
                <div className="text">
                    <div className="bold">Powur</div>
                    <span className="highlight">Ruby on Rails + Angular</span>
                </div>
                <div className="button" id="powur">LEARN MORE</div>
                </div>
            </div>


            <div className="mix node" data-my-order="1">
                <div>
                <div className="card"></div>
                <div className="text">
                    <div className="bold">The Mall</div>
                    <span className="highlight">Node + React.js</span>
                </div>
                <div className="button" id="themall">LEARN MORE</div>
                </div>
            </div>
            </div>
            
        </section>*/
        
    )
}

export default Projects2

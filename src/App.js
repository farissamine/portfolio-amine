
import './App.css';

import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Projects2 from "./components/Projects2";
import Testimonials from "./components/Testimonials";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import {Waypoint} from 'react-waypoint';

/*
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prefixfree/1.0.7/prefixfree.min.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/mixitup/2.1.11/jquery.mixitup.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.0/jquery.waypoints.min.js"></script>
*/

document.title="Amine Aboufariss Portfolio";

function App() {
  
  return (
    <>
      
      <Particles 
        className="particles-canvas"
        params={{
          particles:{
            number:{
              value: (window.innerWidth/120) + 10,
              density:{
                enabled: true,
                value_area: 900
              }
            },
            shape:{
              type: "circle",
              stroke: {
                width: 6,
                color: '#009DF8'

              }
            }
          }
        }}
      />
      <Navbar />
      <Header />
      <AboutMe />
      <Services />
      <Experience />
      <Projects2 />
      <Testimonials/>
      <Contacts />
      <Footer />
    </>
  );
}

export default App;

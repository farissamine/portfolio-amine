
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

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
      <Projects />
      <Testimonials/>
      <Contacts />
      <Footer />
    </>
  );
}

export default App;

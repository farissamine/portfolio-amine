import React from 'react'
import whitelogo from "../logoWhiteAA.png"
import blacklogo from "../logoBlackAA.png"

import {Link} from "react-scroll";
//REAACT FONTAWESOME IMPORTS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from "@fortawesome/free-solid-svg-icons";



const MyComponent = () => {
  return (
    <nav id="my-navbar" class="navbar navbar-expand-lg navbar-light fixed-top">
    <div class="container">
      {/*<a class="navbar-brand" href="#"><img class="logo" src ={whitelogo}/></a>*/}
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <FontAwesomeIcon icon={faBars} style={ {color: "#fff"}}/>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <Link smooth={true} offset={-50} to="home" class="nav-link" href="#">Home <span class="sr-only">(current)</span></Link>
          </li>
          <li class="nav-item">
            <Link smooth={true} offset={-50} to="about" class="nav-link" href="#">about</Link>
          </li>
          <li class="nav-item">
            <Link smooth={true} offset={-50} to="services" class="nav-link" href="#">services</Link>
          </li>
          <li class="nav-item">
            <Link smooth={true} offset={-50} to="experience" class="nav-link" href="#">experience</Link>
          </li>
          <li class="nav-item">
            <Link smooth={true} offset={-50} to="projects" class="nav-link" href="#">projects</Link>
          </li>
          {/*<li class="nav-item">
            <Link class="nav-link" href="#">interests</Link>
          </li>*/}
          <li class="nav-item">
            <Link smooth={true} offset={-50} to="testimonials" class="nav-link" href="#">testimonials</Link>
          </li>
          <li class="nav-item">
            <Link smooth={true} offset={-50} to="contacts" class="nav-link" href="#">contact</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default MyComponent

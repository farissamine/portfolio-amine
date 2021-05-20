import React from 'react'
import whitelogo from "../logoWhiteAA.png"
import blacklogo from "../logoBlackAA.png"
//REAACT FONTAWESOME IMPORTS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from "@fortawesome/free-solid-svg-icons";

const MyComponent = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
    <div class="container">
      <a class="navbar-brand" href="#"><img class="logo" src ={whitelogo}/></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <FontAwesomeIcon icon={faBars} style={ {color: "#fff"}}/>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">about me</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">services</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">experience</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">projects</a>
          </li>
          {/*<li class="nav-item">
            <a class="nav-link" href="#">interests</a>
          </li>*/}
          <li class="nav-item">
            <a class="nav-link" href="#">contact me</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default MyComponent

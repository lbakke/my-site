import React, { Component } from 'react'
import '../App.css'; 
import { Link, animateScroll as scroll } from "react-scroll"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons'


export default class Contact extends Component {
  render() {
    return (
      <div>
        <div className="right-contact"> 
          <div className="up-arrow-dark">
            <Link activeClass="active" to="home" spy={true} smooth={true} duration={500}>
              <FontAwesomeIcon icon={faAngleDoubleUp}/>
            </Link>
          </div>  
          this is where contact info will go!!
        </div>         
        <div className="contact">
          <div className="section-img">
            <img src={require('../images/contactword.png')}/>
          </div>
          <div className="about-buttons-holder">
            <Link activeClass="active" className="about-button" to="about" spy={true} smooth={true} duration={500}>about</Link>
		    <Link className="about-button" activeClass="active" to="contact" spy={true} smooth={true} duration={500}>contact</Link>
		    <span className="about-button">contact</span></div>
        </div>
      </div>
    )
  }
}

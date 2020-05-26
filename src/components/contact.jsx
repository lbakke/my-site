import React, { Component } from 'react'
import '../App.css'; 
import { Link, animateScroll as scroll } from "react-scroll"; 
//import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons'
import { FaGithub } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

export default class Contact extends Component {
  render() {
    return (
      <div>
        <div className="contact">
        <div className="up-arrow">
          {/* <Link activeClass="active" to="home" spy={true} smooth={true} duration={500}>
            <FontAwesomeIcon icon={faAngleDoubleUp}/>
          </Link> */}
        </div>
          <div className="section-img">
            <img src={require('../images/contactword.png')}/>
          </div>
          <div className="about-buttons-holder">
            <Link activeClass="active" className="about-button-dark" to="about" spy={true} smooth={true} duration={500}>about</Link>
		    <Link className="about-button-dark" activeClass="active" to="contact" spy={true} smooth={true} duration={500}>contact</Link>
		    <span className="about-button-dark">contact</span></div>
        </div>
        <div className="right-contact"> 
          <div className="contact-info">
            <div className="contact-first-line">if you want to get in touch or hear more about me, you are very welcome to contact me.</div>
            <div className="contact-second-line"><h2>Lauren Bakke</h2></div>
            <div className="contact-more-info">computer science '21 at the University of Notre Dame</div>
            <div className="contact-more-info">lbakke@nd.edu</div>
            <div className="social-link">
              <a href="https://github.com/lbakke">
                <FaGithub size={40}/>
              </a>
            </div>
            <div className="social-link">
              <a href="https://twitter.com/laurenjbakke">
                <FaTwitter size={40}/>
              </a>
            </div>
            <div className="social-link">
              <a href="https://www.linkedin.com/in/lauren-b-aa4b84113/">
                <FaLinkedin size={40}/>
              </a>
            </div>
            <div className="love-footer">© Lauren Bakke 2020; made with ♥️ using github pages</div>
          </div>
        </div>         
      </div>
    )
  }
}

import React, { Component } from 'react'
import '../App.css'; 
import { Link, animateScroll as scroll } from "react-scroll"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';
import WorkPanel from './panels/workpanels.jsx';
import EducationPanel from './panels/educationalpanels.jsx';
import OtherPanel from './panels/otherpanels.jsx'

export default class About extends Component {
  render() {
    return (
      <div>
      <div name="experience" className="experience">
        <div className="up-arrow">
          <Link activeClass="active" to="home" spy={true} smooth={true} duration={500}>
            <FontAwesomeIcon icon={faAngleDoubleUp}/>
          </Link>
        </div>
        <div className="section-img">
            <img src={require('../images/experienceword.png')}/>
        </div>
        <div className="about-buttons-holder">
        <Link className="about-button" activeClass="active" to="about" spy={true} smooth={true} duration={500}>about</Link>
		<Link className="about-button" activeClass="active" to="experience" spy={true} smooth={true} duration={500}>experience</Link>
		<Link className="about-button" activeClass="active" to="contact" spy={true} smooth={true} duration={500}>contact</Link></div>
      </div>
      <div className="right-experience">
        <div className="experience-content">
            <h1>Internships</h1>
            <WorkPanel/>
            <h1>Education</h1>
            <EducationPanel/>
            <h1>Additional Projects</h1>
            <OtherPanel/>
        </div>
      </div>
      </div>
    )
  }
}

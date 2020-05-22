import React, { Component } from 'react'
import '../App.css';
import { Link, animateScroll as scroll } from "react-scroll"; 

export default class Introduction extends Component {
  render() {
    return (
	  <div className="introduction" name="home">
		<div className="student-header">student and software engineer</div>
		<div className="intro-img">
			<img src={require('../images/startinglogo.png')}/>
		</div>
		<div>
		<Link activeClass="active" className="intro-button" to="about" spy={true} smooth={true} duration={500}>about</Link>
		<Link className="intro-button" activeClass="active" to="contact" spy={true} smooth={true} duration={500}>contact</Link>
		<span className="intro-button">contact</span></div>
      </div>
    )
  }
}



import React, { Component } from 'react'
import '../App.css';
import { Link, animateScroll as scroll } from "react-scroll"; 

import { Parallax } from 'react-scroll-parallax';

export default class Introduction extends Component {
  render() {
    return (
	  <div className="introduction" name="home">
		<div className="student-header">student and software engineer</div>
		<div className="intro-img">
			{/* <img src={require('../images/startinglogo.png')}/> */}
            <Parallax className="custom-class" y={[-50, 50]} tagOuter="figure">
                <img src={require('../images/startinglogo.png')}/>
            </Parallax>
		</div>
		<div>
        <Link className="intro-button" activeClass="active" to="about" spy={true} smooth={true} duration={500}>about</Link>
		<Link className="intro-button" activeClass="active" to="experience" spy={true} smooth={true} duration={500}>experience</Link>
		<Link className="intro-button" activeClass="active" to="contact" spy={true} smooth={true} duration={500}>contact</Link></div>
      </div>
    )
  }
}



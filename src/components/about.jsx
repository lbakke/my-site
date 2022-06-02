import React, { Component } from 'react'
import '../App.css'; 
import { Link, animateScroll as scroll } from "react-scroll"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';

/* spotify credentials */ 
// import SpotifyWebApi from "spotify-web-api-js";
// const spotifyApi = new SpotifyWebApi();

import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Typing from 'react-typing-animation';

var ColorLink = {
    color: '#00ccff'
}

var BoldColorLink = {
  color: '#00ccff',
  fontWeight: 'bold'
}

export default class About extends Component {
  render() {
    return (
      <div>
      <div className="blank-space"/>
      <div name="about" className="introduction">
        <div>
          <div className="about-header">about</div>
        </div>
          <div className="about-text">
            <p>Hello! My name is Lauren and I'm glad to see you made it to my site. 
          I'm from Minneapolis, MN and now live in the San Francisco Bay Area. I graduated from the University of Notre Dame in 2021 and then began working at VMware
          as a software engineer for the vmkernel on the ESXi ARM team.</p>
          <p>ESXi is one of VMware's first products, the bare metal hypervisor providing virtualization capabilities for a computer. It's still one of the core 
            products VMware creates and serves as the foundation for most of what VMware has built on top of it.
          While working on the vmkernel I have been able to learn so much about developing for an operating system and have learned a lot about programming
          in C as well. I have also had the chance to work with a very dynamic and experienced team across the globe and learn from some of the top 
          individuals in the Arm space.
          </p>

        </div>
      </div> 
      </div>
    )
  }
}

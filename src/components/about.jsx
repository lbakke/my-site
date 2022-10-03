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
          I'm from Minneapolis, MN and now live in the San Francisco Bay Area. I graduated from the University of Notre Dame in 2021 and then 
          began working as a kernel developer for VMware on the ESXi hypervisor. Now I'm working at Amazon Alexa on the Alexa Music Skills Kit
          Service team.</p>
          <p>Working on Amazon Alexa is a very rewarding and motivating experience so far. I have learned a lot already about developing for VUI,
            learning how to read and interpret API metrics, understanding what depends on our service and what downstream dependencies our service 
            has itself, and learning about how to scale to an extremely large audience. From creating new APIs to support upcoming Alexa Music features,
            to collaborating with other teams within Alexa, this team has pushed me to learn and understand more about what makes a service reliable,
            scalable, and delightful for users and Music Service Providers alike to interact with.
          </p>

        </div>
      </div> 
      </div>
    )
  }
}

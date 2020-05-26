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

export default class About extends Component {
  render() {
    return (
      <div>
      <div name="about" className="about">
        <div className="up-arrow">
          <Link activeClass="active" to="home" spy={true} smooth={true} duration={500}>
            <FontAwesomeIcon icon={faAngleDoubleUp}/>
          </Link>
        </div>
        <div className="section-img">
            <img src={require('../images/aboutword.png')}/>
        </div>
        <div className="about-buttons-holder">
        <Link activeClass="active" className="about-button" to="about" spy={true} smooth={true} duration={500}>about</Link>
		<Link className="about-button" activeClass="active" to="contact" spy={true} smooth={true} duration={500}>contact</Link>
		<span className="about-button">contact</span></div>
      </div>
      <div className="right-about">
          this is where the content will go !!
          <iframe src="https://open.spotify.com/embed/playlist/1INpNSInMyePSCRraNdbQ4" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </div>
      </div>
    )
  }
}

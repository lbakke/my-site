import React, { Component } from 'react'
import '../App.css'; 
import { Link, animateScroll as scroll } from "react-scroll"; 
//import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons'

import { Browser, SpeechBubble } from 'react-kawaii'

import { FaGithub } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin, FaPaperPlane } from 'react-icons/fa';
import { IconContext } from "react-icons";


import { MailTwoTone, CodeTwoTone, GithubFilled, MailOutlined } from '@ant-design/icons';

import { Statistic } from 'antd';


export default class Contact extends Component {
  render() {
    return (
      <div>
        <div className="blank-space"/>
        <div className="introduction">
      <div className="about-header" name="contact" style={{"width": "50%"}}>contact</div>
      {/* <SpeechBubble size={80} mood="happy" color="#83D1FB" /></div> */}
      <div className="contact-text">
        <p>if you want to get in touch or hear more about me, you are very welcome to contact me. </p>
        <div className="react-icons-box">
        <IconContext.Provider value={{ className: "react-icons-contact" }}>
              <div className="contact-stats">
              <Statistic title="email" value={"lbakke@nd.edu"} />
              </div>
              <div className="contact-stats">
              <a href="https://github.com/lbakke">
                <Statistic title="github" value={"lbakke"} />
              </a>
              </div>
              <div className="contact-stats">
              <a href="https://www.linkedin.com/in/lauren-b-aa4b84113/">
                <Statistic title="linkedin" value={"Lauren Bakke"} />
              </a>
              </div>
              <div className="contact-stats">
              <a href="https://twitter.com/laurenjbakke" >
                <Statistic title="twitter" value={"laurenjbakke"} />
              </a>
              </div>
            </IconContext.Provider>
            </div>
      </div>
        </div>
        <div className="footer-holder">
        <div className="footer-text">
          © Lauren Bakke 2020; made with ♥️ using create angular app, gh-pages and ant-design.
        </div>
    </div>
    </div>
     //   <div>
    //     <div className="contact">
    //     <div className="up-arrow">
    //     </div>
    //       <div className="section-img">
    //         <img src={require('../images/contactword.png')}/>
    //       </div>
    //       <div className="about-buttons-holder">
    //       <Link className="contact-button" activeClass="active" to="about" spy={true} smooth={true} duration={500}>about</Link>
	// 	  <Link className="contact-button" activeClass="active" to="experience" spy={true} smooth={true} duration={500}>experience</Link>
	// 	  <Link className="contact-button" activeClass="active" to="contact" spy={true} smooth={true} duration={500}>contact</Link></div>
    //     </div>
    //     <div className="right-contact"> 
    //       <div className="contact-info">
    //         <div className="contact-first-line">if you want to get in touch or hear more about me, you are very welcome to contact me.</div>
    //         <div className="contact-second-line"><h1>Lauren Bakke</h1></div>
    //         <div className="contact-more-info">computer science '21 at the University of Notre Dame</div>
    //         <div className="contact-more-info">lbakke@nd.edu</div>
    //         <div className="social-link">
    //           <a href="https://github.com/lbakke">
    //             <FaGithub size={40}/>
    //           </a>
    //         </div>
    //         <div className="social-link">
    //           <a href="https://twitter.com/laurenjbakke">
    //             <FaTwitter size={40}/>
    //           </a>
    //         </div>
    //         <div className="social-link">
    //           <a href="https://www.linkedin.com/in/lauren-b-aa4b84113/">
    //             <FaLinkedin size={40}/>
    //           </a>
    //         </div>
    //         <div className="love-footer">© Lauren Bakke 2020; made with ♥️ using create angular app and github pages. </div>
    //       </div>
    //     </div>         
    //   </div> */}
    )
  }
}

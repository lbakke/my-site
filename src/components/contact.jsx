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
        <div className="contact-box">
          <div className="contact-header" name="contact" style={{"width": "50%", "float": "left"}}>contact</div>
          <div className="speech-bubble"><SpeechBubble size={100} mood="happy" color="#83D1FB" style={{"margin-top": "-50px", "float": "right!important"}}/></div>
      <div className="contact-text">
        <div className="react-icons-box">
        <IconContext.Provider value={{ className: "react-icons-contact" }}>
              <div className="contact-stats">
              <Statistic title="email" value={"laurenjbakke@gmail.com"} />
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
            </IconContext.Provider>
            </div>
        </div>
        </div>
      <div className="footer-holder">
        <div className="footer-text">
          © Lauren Bakke 2020; made with ♥️ using create react app, gh-pages and ant-design.
        </div>
      </div>
    </div>
    )
  }
}

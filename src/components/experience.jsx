import React, { Component } from 'react'
import '../App.css'; 
import { Link, animateScroll as scroll } from "react-scroll"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';
import WorkPanel from './panels/workpanels.jsx';
import EducationPanel from './panels/educationalpanels.jsx';
import OtherPanel from './panels/otherpanels.jsx';
import Drawer from './drawer.jsx';
import WebDevCard from './cards/webdevcard.jsx';

export default class Experience extends Component {
  render() {
    return (
      <div>
          <div className="blank-space"/>
          <div name="experience" className="introduction">
        <div className="about-header">experience</div>
        </div>
      </div>
    )
  }
}

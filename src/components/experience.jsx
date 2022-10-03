import React, { Component } from 'react'
import '../App.css'; 
import { Link, animateScroll as scroll } from "react-scroll"; 
import Drawer from './drawer.jsx';
import {Container, Row, Col} from 'react-bootstrap';
import { Timeline, Popover, Button } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';
import 'bootstrap/dist/css/bootstrap.min.css';

import ACard from './cards/attcard.jsx';
import CSICard from './cards/csicard.jsx';
import PCard from './cards/portcard.jsx';
import RCard from './cards/researchcard.jsx';
import SCard from './cards/sscard.jsx';
import TCard from './cards/tacard.jsx';
import WCard from './cards/wdcard.jsx';

export default class Experience extends Component {
  render() {
    return (
      <div>
      <div name="experience" className="about-header experience-padding">experience</div>
      <div className="timeline-holder">
      <Timeline mode="alternate" style={{"display": "inline-block"}}>
          <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }}/>}>
            <p>Fall 2017 : start at the University of Notre Dame</p>
          </Timeline.Item>
           <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }}/>}>
            <p>June 2019 : begin work at Coherent Solutions as a full stack developer intern
            </p>
           </Timeline.Item>
           <Timeline.Item color="green">
            <p>During the month of June, participated in a C# intensive training program at
              their office located in Minsk, Belarus.
            </p>
           </Timeline.Item>
           <Timeline.Item color="green">
            <p>Spent the remainder of the summer working on the SportsEngine site, completing both
              front-end and back-end work and working on a small agile scrum team.
              <Button style={{"color": "#9500ff"}} type="text" href="https://www.sportsengine.com/solutions/capabilities/communication/team-mobile-app">See the Site</Button>
            </p>
           </Timeline.Item>
            <Timeline.Item color="green">
            <p>Created a site in a group of 4 for the Modern Web Development class called "Course Planner" which allowed students to 
              plan out their eight semesters of college through scraping Notre Dame's available courses, giving them a default schedule
              and allowing them to drag and drop classes as they wish. 
            <Button style={{"color": "#9500ff"}} type="text" href="https://github.com/imarijr/Course-Planner">View the Code</Button>
            </p>
           </Timeline.Item>
           <Timeline.Item color="green">
            <p>Created a predictor for the 2020 election in the course Social Sensing and Cyberphysical Systems by performing sentiment analysis 
              on twitter data and shaping the model through primaries and caucuses. 
            </p>
            <Button style={{"color": "#9500ff", "margin-top": "-20px"}} type="text" href="https://github.com/eamonlm/sentiment-analysis-twitter">View the Code</Button>
           </Timeline.Item> 
           <Timeline.Item color="red">
            <p>Worked in a research lab that created an app to help determine how different physical activites could positively affect a 
              Parkinson's patient's symptoms. Wrote python scripts to analyze metrics collected by the app. 
              <Button style={{"color": "#9500ff", "margin-top": "0px"}} type="text" href="https://mhealth.jmir.org/2020/6/e15517/">Read about it</Button>
            </p>
           </Timeline.Item>        
           <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }}/>}>
            <p>Summer 2020 : Interned virtually with AT&T as a software engineer. 
            </p>
           </Timeline.Item>
           <Timeline.Item color="green">
            <p>For my primary project, I worked on AT&T's ATLAS, a business enterprise app for technicians in the field to schedule installations or repairs, 
              run tests, find other techs in the area, get instructions for various tasks, and more. I did primarily work on the front end side using Angular and Typescript, 
              but I also did some UI work and UX research for them as well. 
            </p>
           </Timeline.Item> 
           <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }}/>}>
            <p>Fall 2020 : I began work in the Human Computer Interaction lab on an app used to search for social services in your area. I will be helping them configure their current work into a suitable
              front-end framework, React.
            </p>
           </Timeline.Item>
           <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }}/>}>
            <p>Winter-Spring 2021 : Working part time on the startup project SAFA through the IDEA center at Notre Dame, which will be used by companies to track how updates to projects impact other pieces of these projects. 
              I have learned a lot about the end to end proceses of working on a small application, and have improved my Java and Vue-JS skills quite a bit.
            </p>
           </Timeline.Item> 
           <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }}/>}>
            <p>May 2021 : Graduated from the University of Notre Dame
            </p>
           </Timeline.Item> 
           <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }}/>}>
            <p>May 2021-July 2021 : Developed for an Android app with a startup paired with the IDEA center at Notre Dame. I implemented an algorithm which
              tracked the location of planes in private airports to help mitigate ground collision risks.
            </p>
           </Timeline.Item> 
           <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }}/>}>
            <p>July 2021: Began work at VMware
            </p>
           </Timeline.Item> 
           <Timeline.Item color="green">
            <p>At VMware, I had a wide vast of experiences developing for VMware's operating system, the vmkernel. As a member of the ESXi ARM team,
              I worked on the ARM implementation of ESXi, which has many unique use cases.
            </p>
           </Timeline.Item> 
           <Timeline.Item color="green">
             <p>
             One prominent use case is running ESXi on a smartNIC (also known as
              a DPU) which is one of VMware's most exciting projects on the edge, Project Monterey. I have developed several features for Nvidia's BlueField 2 
              as part of this initiative.
             </p>
           </Timeline.Item>
           <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }}/>}>
            <p>August 2022: Began work at Amazon Alexa
            </p>
           </Timeline.Item> 
           <Timeline.Item color="green">
            <p>Now, I'm working at Amazon on the Alexa Music Skills Kit Service team. I get to work with a variety of music service providers and 
              learn a ton about both working on a high priority product for Alexa as well as some very interesting skills like developing for VUI, 
              reading and interpretting useful metrics and data, and collaborating with a large team.
            </p>
           </Timeline.Item> 
        </Timeline>
        </div>
      </div>
    )
  }
}

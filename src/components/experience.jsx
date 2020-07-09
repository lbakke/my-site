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
      <div name="experience" className="about-header">experience</div>
      <div className="timeline-holder">
      <Timeline mode="alternate" style={{"display": "inline-block"}}>
          <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }}/>}>
            <p>Fall 2017 : start at the University of Notre Dame</p>
          </Timeline.Item>
          <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }}/>}>
            <p>Summer 2018 : intern at SAFE Shelter for victims of domestic violence through
              Notre Dame's Summer Service Program
            </p>
           </Timeline.Item>
           <Timeline.Item color="green">
            <p>Stayed with host families in Savannah, GA and helped run the youth program in the shelter.
            </p>
           </Timeline.Item>
           <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }}/>}>
            <p>Fall 2018 : begin second year at Notre Dame, taking classes like Discrete Math, Data Structures, Systems Programming, and 
              Probability and Statistics.
            </p>
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
              <Button style={{"color": "#9500ff"}} type="text">See the Site</Button>
            </p>
           </Timeline.Item>
           <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }}/>}>
            <p>Fall 2019 : begin third year at Notre Dame, with classes like Operating Systems and Computer Architecture.
            </p>
           </Timeline.Item>
           <Timeline.Item color="green">
            <p>Work as a teaching assistant for Fundamentals of Computing.
            </p>
           </Timeline.Item>
           <Timeline.Item color="gold">
            <p>Made it on the Dean's List (top 30% of engineering students) in the fall semester of 2019.
            </p>
           </Timeline.Item>
           <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }}/>}>
            <p>Spring 2019 : finish off my third year at Notre Dame, with several difficult programming classes like Theory of Computing. 
            </p>
           </Timeline.Item>
           <Timeline.Item color="gold">
            <p>Work as a teaching assistant for Principals of Computing, and again made it on the Dean's List.
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
           <Timeline.Item color="green">
            <p>The internship also included an intern coding challenge, where our team of 6 interns created a learning website where students can watch videos and give
              constant feedback about each topic, and this data is used to create helpful graphs for teachers. I helped lead the front end coding and design of this Angular app. 
            </p>
           </Timeline.Item> 
           <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }}/>}>
            <p>Fall 2020 : Begin my final year at Notre Dame.
            </p>
           </Timeline.Item>
        </Timeline>
        </div>
      </div>
    )
  }
}

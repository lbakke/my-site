import React, { Component } from 'react'
import '../App.css'; 
import { Link, animateScroll as scroll } from "react-scroll"; 
import Drawer from './drawer.jsx';
import {Container, Row, Col} from 'react-bootstrap';
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
        <div className="blank-space"/>
        <div name="experience" className="about-header">experience</div>
          <Container className="introduction">
            <Row>
              <Col lg><ACard/></Col>
              <Col lg><CSICard/></Col>
            </Row>
            <Row>
              <Col lg><RCard/></Col>
              <Col lg><SCard/></Col>   
            </Row>
            <Row>
            <Col lg><PCard/></Col>
              <Col lg><TCard/></Col>
              <Col lg><WCard/></Col>
            </Row>
          </Container>
        </div>
    )
  }
}

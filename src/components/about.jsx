import React, { Component } from 'react'
import '../App.css'; 

export default class About extends Component {
  render() {
    return (
      <div>
      <div name="about" className="about">
        <div className="section-img">
            <img src={require('../images/aboutword.png')}/>
        </div>
      </div>
      <div className="right-about">
          this is where the content will go !!
      </div>
      </div>
    )
  }
}

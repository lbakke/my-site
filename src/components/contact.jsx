import React, { Component } from 'react'
import '../App.css'; 

export default class Contact extends Component {
  render() {
    return (
      <div>
        <div className="right-contact">
            this is where contact info will go!!
        </div>         
        <div className="contact">
          <div className="section-img">
            <img src={require('../images/contactword.png')}/>
          </div>
        </div>
      </div>
    )
  }
}

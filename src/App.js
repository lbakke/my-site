import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Introduction from './components/introduction';
import About from './components/about';
import Contact from './components/contact';
import { Link, animateScroll as scroll } from "react-scroll"; 

import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  return (
	<div>
    <ParallaxProvider>
    	<div>
			<Introduction id="intro"></Introduction>
		</div>
		<div>
			<About id="about"></About>
		</div>
		<div>
			<Contact id="contact"></Contact>
		</div>
    </ParallaxProvider>
	</div>
  );
}

export default App;

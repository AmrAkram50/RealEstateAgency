import React, { Component } from 'react';
//import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Blog from './components/Blog';
import Rout from './components/Rout';
import Col from './components/Col';
import {Routes , BrowserRouter , Route } from 'react-router-dom';
import theImage from './images/iphone.jpg'

class App extends Component{

  render(){
    return (
      <div>
        <img src={theImage} className='img'/>
      </div>
    );
  }
}

export default App;

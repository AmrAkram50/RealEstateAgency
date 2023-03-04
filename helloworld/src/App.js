import React, { Component } from 'react';
//import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Blog from './components/Blog';
import {Routes , BrowserRouter , Route } from 'react-router-dom';

class App extends Component{

  render(){
    console.log("1")
    return (
      <div className='App'>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/About" element={<About />}/>
            <Route path='/Blog' element={<Blog />} />
          </Routes>
        </BrowserRouter>
      </div>

    );
  }
}

export default App;

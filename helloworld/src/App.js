import { Component } from 'react';
import './App.css';
import Nav from './components/Nav';

class App extends Component{


  render(){
    console.log("render");
    return (
      <div className="App">
        <Nav />
      </div>
    );
  }
}

export default App;

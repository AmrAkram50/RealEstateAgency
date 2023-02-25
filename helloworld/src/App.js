import { Component } from 'react';
import './App.css';
import Items from './components/Items';
class App extends Component{

  state = {
    items: [
      {id:1,name:"Amr",age:21,count:1},
      {id:2,name:"Salma",age:22,count:3},
      {id:3,name:"Omar",age:23,count:2},
      {id:4,name:"Ali",age:24,count:5},
    ]
  }

  
  constructor(){
    super();
    console.log("constructor");
  }

  componentDidMount(){
    console.log("componentDidMount");
  }

  componentDidUpdate(prevProps,prevState){
    console.log("componentDidUpdate");
    console.log(prevProps,prevState);
  }

  handleChange = (e) =>{
      this.setState({
        name: e.target.value
      })
  }

  handleSubmit = (e) =>{
    e.preventDefault();
    console.log(this.state.name);
  }

  handleAdd = (e) =>{
    let rand = Math.random();
    let items = this.state.items;
    items.push({id:rand,name:"Mohamed",age:30,count:7});
    this.setState({
      items: items
    })
  }

  handleDelete = (e) =>{
    this.setState({
      items: [{id:4,name:"Ali",age:24,count:5}]
    })
  }

  render(){
    console.log("render");
    return (
      <div className="App">
        Dealing with CSS
        <Items items={this.state.items}/>
        <button onClick={this.handleAdd}>Add</button>
        <button onClick={this.handleDelete}>Delete</button>
      </div>
    );
  }
}

export default App;

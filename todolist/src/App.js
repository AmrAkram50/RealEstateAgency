import React , {Component} from 'react'
import TodoItems from './components/todoItem/todoitems';
import AddItems from './components/addItem/additems';

class App extends Component {

  state={
    items : [
      {id:1,name:'Amr',age:21},
      {id:2,name:'Salma',age:22}
    ]
  }

  deleteItem = (id) => {
    let items = this.state.items.filter(item => {
      return(
        item.id !== id
      );
    })
    this.setState({items});
  }

  addItem = (item) => {
    item.id = Math.random();
    let items = this.state.items;
    items.push(item);
    this.setState({items});
  }

    render(){
    return (
      <div className='App container'>
        <h1 className='text-center'>Todo List</h1>
        <TodoItems items={this.state.items} deleteItem={this.deleteItem} />
        <AddItems addItem={this.addItem} />
     </div>
    );
  }
}

export default App;
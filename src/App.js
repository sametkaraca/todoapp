import React, {Component} from 'react';
import Todos from './Todos.js'
import AddTodo from './AddTodo'
class App extends Component {

  state = {
    todos: [
      {id:1, content: 'buy some milk'},
      {id:2, content: 'play mario card'}
    ]
  }

  deleteTodo = id =>{
    const todos = this.state.todos.filter(todo=>todo.id !== id)
    this.setState({
      todos
    })
  }

  addTodo = todo =>{
    todo.id = Math.random() //we attach an id here to a todo
    let todos = [...this.state.todos, todo] // todo means we add a new item at the enf of array
    this.setState({
      todos // means todos: todos
    })

    

  }

  render(){
  return (
    <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
    </div>
  );
}
}

export default App;

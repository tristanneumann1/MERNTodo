import React from 'react';
import axios from 'axios';

import Todo from './components/Todo.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: "",
      todos: [],
    }
    this.deleteTodo = this.deleteTodo.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }
  componentDidMount() {
    this.getTodo();
  }
  render() {
    return (
      <div>
        <h1>TODO React App</h1>
        <input type="text" onInput={(e) => {
          this.state.todo = e.target.value;
          e.target.value = '';
        }
      }/>
        <button onClick={this.addTodo}>+</button>
        {this.state.todos.map((todo, i) => {
          return <Todo key={todo._id} index={i} todo={todo} delete={this.deleteTodo}/>
        })}
      </div>
    )
  }
  getTodo() {
    axios.get('/api/todo').then(todos => {
      this.setState({ todos: todos.data });
    })
  }
  addTodo() {
    axios.post('/api/todo', { todo: this.state.todo }).then((todoData) => {
      console.log('posted: ', todoData)
      this.setState({todos: [...this.state.todos, todoData.data]})
    })
  }
  deleteTodo(id) {
    axios.delete('/api/todo', { data: { _id: this.state.todos[id]._id }}).then((deleted) =>{
      let newTodos = [...this.state.todos.slice(0, id), ...this.state.todos.slice(id + 1, this.state.todos.length)];
      this.setState({ todos: newTodos });
      }
    )
  }
} 

export default App;

import React, { Component } from "react";
import "./App.css";
import SingleTodo from "./SingleTodo";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      currentTodo: ""
    };
  }

  onInputChange = e => {
    this.setState({ currentTodo: e.target.value });
  };

  onClick = () => {
    //we want to create a copy of Todos, and append to it the new todo.
    //this create a copy of todos
    let todosCopy = this.state.todos.slice();
    //this appends the new todo to todosCopy
    todosCopy.push(this.state.currentTodo);

    //now we need to set the state of todos && we want to clean out the current todo
    this.setState({ todos: todosCopy, currentTodo: "" });
  };

  deleteTodo = i => {
    let todosCopy = this.state.todos.slice();
    todosCopy.splice(i, 1);
    this.setState({ todos: todosCopy });
  };

  render() {
    //map todos to display the todos
    let bulletedTodos = this.state.todos.map((e, i) => {
      return (
        <SingleTodo
          todo={e}
          delete={() => {
            this.deleteTodo(i);
          }}
        />
      );
    });
    return (
      <div className="App">
        <h1>My Todo app</h1>
        <input
          type="text"
          placeholder="Enter todos"
          value={this.state.currentTodo}
          onChange={this.onInputChange}
        />
        <button onClick={this.onClick}>add todo</button>
        {this.state.todos.length === 0 ? (
          "no todos yet"
        ) : (
          <ul>{bulletedTodos}</ul>
        )}
      </div>
    );
  }
}

export default App;

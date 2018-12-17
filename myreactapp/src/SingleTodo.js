import React, { Component } from "react";

/*
class SingleTodo extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <li>
        {this.props.todo}
        <button onClick={this.props.delete}>x</button>
      </li>
    );
  }
}
*/

//we can do the same thing with a 'Functional Component' like this
// functional component: ONLY ACCEPT PROPS, NO INTERNAL STATE, FUNCTIONS INSTEAD OF CLASSES
const SingleTodo = props => {
  return (
    <li>
      {props.todo}
      <button onClick={props.delete}>x</button>
    </li>
  );
};

export default SingleTodo;

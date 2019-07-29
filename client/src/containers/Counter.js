import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleIncrement, handleDecrement } from './../actions';
import requireAuth from './.././/hoc/requireAuth';

class Counter extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Counter</h1>
        <p>Counter: {this.props.counter}</p>
        <button onClick={this.props.incrementCounter}>Increment</button>
        <button onClick={this.props.decrementCounter}>Decrement</button>
      </div>
    );
  }
}

function mapStateToProps({ counter }) {
  return {
    counter: counter.counter
  };
}

export default requireAuth(
  connect(
    mapStateToProps,
    { handleIncrement, handleDecrement }
  )(Counter)
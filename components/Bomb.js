import React, { Component, PropTypes } from 'react';
const ReactDOM = require('react-dom');

class Bomb extends Component {

  constructor(props) {
    super();
    this.state = {
      secondsLeft: props.initialCount
    };
  }

  render() {
    var time = this.state.secondsLeft;
    var string;
    if ( time == 0 ) {
      string = 'Boom!';
    } else {
      string = `${time} seconds left before I go boom!`;
    }
    return (
      <div>
        {string}
      </div>
    );
  }
}

module.exports = Bomb;

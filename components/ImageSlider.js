import React, { Component, PropTypes } from 'react';
const ReactDOM = require('react-dom');

class ImageSlider extends Component {

  constructor() {
    super();
    this.state = {
      currentSlideIndex: 0
    };
  }

  render() {
    return (
      <div>
        I am on slide {this.state.currentSlideIndex}
      </div>
    );
  }
}

module.exports = ImageSlider;

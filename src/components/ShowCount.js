import React, { Component } from "react";

export default class ShowCount extends Component {
  render() {
    return (
      <div className="showCount">
        <span className="showCount__wordTitle">Word Count:</span> <span className="showCount__wordCount">{this.props.count}</span>
      </div>
    );
  }
}
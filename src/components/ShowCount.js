import React, { Component } from "react";

export default class ShowCount extends Component {
  render() {
    return (
      <div>
        Word Count: {this.props.count}
      </div>
    );
  }
}
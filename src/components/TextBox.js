import React, { Component } from "react";

export default class TextBox extends Component {
  render() {
    return (
      <div className="textBox">
        <textarea className="textBox__textArea" placeholder="Paste or type text here" onChange={this.props.changeText}></textarea>
      </div>
    );
  }
}
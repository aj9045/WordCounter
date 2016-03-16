import React, { Component } from "react";

export default class TextBox extends Component {
  render() {
    return (
      <div>
        <textarea placeholder="Paste text here" onChange={this.props.changeText}></textarea>
        <input type="submit" value="Count" />
      </div>
    );
  }
}
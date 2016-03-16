import React, { Component } from "react";
import ReactDOM from "react-dom";
import TextBox from "./components/TextBox";
import ShowCount from "./components/ShowCount";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      count: 0,
    };
  }

  render() {
    return (
      <div>
        <TextBox changeText={this._changeText.bind(this)} getCount={this._getCount.bind(this)} />
        <ShowCount />
      </div>
    );
  }

  _changeText(event) {
    this.setState({text: event.target.value});
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));
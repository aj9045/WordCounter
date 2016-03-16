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
      <div className="app">
        <h1 className="appTitle">Word Count Tool</h1>
        <TextBox changeText={this._changeText.bind(this)} getCount={this._getCount.bind(this)} />
        <ShowCount count={this.state.count} />
      </div>
    );
  }

  _changeText(event) {
    this._getCount(event.target.value)
    this.setState({text: event.target.value});
  }

  _getCount(text) {
    var changedText = text.replace(/[^\d\w\s]/g, "");
    var changedTextUnderscore = changedText.replace(/_/g, "");
    var finalText = changedTextUnderscore.replace(/\s\s+/g, " ");

    var splitFinalText = finalText.replace(/\n/g, " ").split(" ");

    if (splitFinalText.join("") === "") {
      splitFinalText = [];
    }
    else if (splitFinalText[0] === "") {
      splitFinalText.shift();
    }

    var count = (splitFinalText[splitFinalText.length - 1] === "") ? splitFinalText.length - 1 : splitFinalText.length;

    this.setState({count: count});
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));
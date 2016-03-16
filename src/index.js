import React, { Component } from "react";
import ReactDOM from "react-dom";
import TextBox from "./components/TextBox";
import ShowCount from "./components/ShowCount";

class App extends Component {
  render() {
    return (
      <div>
        <TextBox changeText={this._changeText} />
        <ShowCount />
      </div>
    );
  }

  _changeText(event) {
    console.log(event.target.value);
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));
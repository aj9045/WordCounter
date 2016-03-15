import React, { Component } from "react";
import ReactDOM from "react-dom";
import TextBox from "./components/TextBox";
import ShowCount from "./components/ShowCount";

class App extends Component {
  render() {
    return (
      <div>
        <TextBox />
        <ShowCount />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));
import React, { Component } from "react";
import Home from "./Components/Home";
import Banner from "./Components/Banner";
import Ribbon from "./Components/Ribbon";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Ribbon
          alt="Fork me on Github"
          src="https://s3.amazonaws.com/github/ribbons/forkme_right_red_aa0000.png"
          href="https://github.com/skyrex-mark/OSX-Bootstrap"
        />
        <Banner />
        <Home />
      </div>
    );
  }
}

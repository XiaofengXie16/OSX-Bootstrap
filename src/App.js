import React, { Component } from "react";
import Home from "./Components/Home";
import Banner from "./Components/Banner";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Banner />
        <Home />
      </div>
    );
  }
}

export default App;

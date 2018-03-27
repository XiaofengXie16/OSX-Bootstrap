import React, { Component } from "react";
import Home from "./Components/Home";
import Banner from "./Components/Banner";
import Footer from "./Components/Footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Banner />
        <Home />
        <Footer></Footer>
      </div>
    );
  }
}

export default App;

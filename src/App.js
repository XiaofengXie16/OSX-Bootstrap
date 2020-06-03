import React from "react";
import Home from "./components/Home";
import Banner from "./components/Banner";
import Ribbon from "./components/Ribbon";
import "./App.css";

const App=()=>{
    return (
      <div className="App">
        <Ribbon
          alt="Fork me on Github"
          j
          src="https://s3.amazonaws.com/github/ribbons/forkme_right_red_aa0000.png"
          href="https://github.com/skyrex-mark/OSX-Bootstrap"
        />
        <Banner />
        <Home />
      </div>
    );
}

export default App;
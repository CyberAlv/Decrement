import React, { Component } from "react";
import Decrement from "./Decrement";
import Accruement from "./Accruement"
import "./App.css";

class App extends Component {
  render() {
  return (
    <>
      <Decrement start={10} />
      <Decrement start={15} />
      <Accruement start={20} />
      <Accruement start={25} />
      
    </>
    );
  }
}

export default App;

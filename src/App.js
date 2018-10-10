import React, { Component } from "react";
import Form from "./components/Form";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-formContainer">
          <Form />
        </div>
      </div>
    );
  }
}

export default App;

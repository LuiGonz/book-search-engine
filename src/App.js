import React, {Component} from "react";
// import Header from "./Header";
import Books from "./Books";

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Books />
        </div>
      </div>
    );
  }
}

export default App;

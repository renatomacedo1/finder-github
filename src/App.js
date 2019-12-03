import React from "react";
import Navbar from "./components/layout/Navbar";
import ".github-finder/src/App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar title="Github Finder" />
      </div>
    );
  }
}

export default App;

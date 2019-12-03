import React, { Component } from "react";
import ".github-finder/src/App.css";

export class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar bg-primary">
        <h1>
          <i className="fab fa-github" /> Navbar
        </h1>
      </nav>
    );
  }
}

export default Navbar;

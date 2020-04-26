import React, { Component } from "react";
import "./App.css";
import FilterName from "./components/name-filter";
import Modall from "./components/modall";
import MoviesContainer from "./components/movie-container";

class App extends Component {
  render() {
    return (
      <div className="App">
        <FilterName />
        <Modall name="Add movie" />
        <MoviesContainer />
      </div>
    );
  }
}

export default App;

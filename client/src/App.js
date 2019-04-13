import React, { Component } from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "./App.css";
import Nav from "./components/nav";
import Jumbotron from "./components/jumbotron";
import Search from "./pages/Search";
import Saved from "./pages/Saved";

class App extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <div className="container">
          <Jumbotron />
          <Switch>
            <Route exact path="/" component={Search} />
            <Route exact path="/saved" component={Saved} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

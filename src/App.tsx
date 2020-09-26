import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

import Home from "./pages/Home";
import Cart from "./pages/Cart";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={Cart} />
      </Switch>
    </Router>
  );
}

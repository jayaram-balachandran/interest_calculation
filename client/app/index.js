import React from "react";
import { render } from "react-dom";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import App from "./components/App/App";
import NotFound from "./components/App/NotFound";

import Home from "./components/Home/Home";
import Game from "./Components/Game/Game";

import HelloWorld from "./components/HelloWorld/HelloWorld";

import First from "./Components/Pages/First";
import Second from "./Components/Pages/Second";
import Bank from "./Components/Pages/Bank";

import "./styles/styles.scss";

render(
  <Router>
    <App>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/helloworld" component={HelloWorld} />
        <Route path="/game" component={Game} />
        <Route component={NotFound} />
        {/* <Route exact path="/" component={First} />
        <Route exact path="/second" component={Second} />
        <Route exact path="/bank" component={Bank} /> */}
      </Switch>
    </App>
  </Router>,
  document.getElementById("app")
);

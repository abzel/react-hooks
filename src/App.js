import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Home } from "./components/Home";
import { Topics } from "./components/Topics";
import { NotFound } from "./components/404";

const App = () => {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
          {/* Not found 404 case */}
          <Route path="*" component={NotFound}/>
        </Switch>
      </div>
    </Router>
  );
};

export default App;

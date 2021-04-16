import "./App.css";
import { Home } from "./components/Home";
import { Contacts } from "./components/Contacts";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/contacts/:data">
            <Contacts />
          </Route>
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import Home from "./Home";
import User from "./User";
import Error from "./Error";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/:login" children={<User />}>
          <User />
        </Route>
        <Route exact path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;

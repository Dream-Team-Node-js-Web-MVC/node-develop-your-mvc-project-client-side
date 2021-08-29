import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home, LoginSignUp } from "./pages";

const App = () => {
  return (
    <Switch>
      <Route
        path="/login"
        exact
        render={(routeProps) => <LoginSignUp {...routeProps} />}
      />
      <Route path="/" render={(routeProps) => <Home {...routeProps} />} />
    </Switch>
  );
};

export default App;

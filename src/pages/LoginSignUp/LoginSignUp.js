import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Login, Products } from "../../components";

function LoginSignUp() {
  return (
    <Router>
      <div>
        <Route path="/Login" component={Login} />
        <Route path="/Products" component={Products} />
      </div>
    </Router>
  );
}

export default LoginSignUp;

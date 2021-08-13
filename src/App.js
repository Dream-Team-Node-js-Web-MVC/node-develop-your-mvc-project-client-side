import React from "react";
import { Login, Products, Navbar } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Products />
        <Route path="/Login" component={Login} />
        <Route path="/Products" component={Products} />
      </div>
    </Router>
  );
};

export default App;

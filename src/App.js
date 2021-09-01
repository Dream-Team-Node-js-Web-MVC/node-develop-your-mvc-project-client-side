import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { Home, LoginSignUp, Register, WorkerForm } from "./pages";

import AuthContext from "./context/AuthContext";
import { auth } from "./services/auth";

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  // console.log(auth.currentUser.email);
  useEffect(() => {
    let unsubscribeFromAuth = null;
    unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });

    return () => {
      if (unsubscribeFromAuth) {
        unsubscribeFromAuth();
      }
    };
  }, [currentUser]);
  return (
    <AuthContext.Provider value={currentUser}>
      <Switch>
        <Route
          path="/login"
          exact
          render={(routeProps) => <LoginSignUp {...routeProps} />}
        />
        <Route
          path="/register"
          exact
          render={(routeProps) => <Register {...routeProps} />}
        />
        <Route
          path="/newworker"
          render={(routeProps) => <WorkerForm {...routeProps} />}
        />
        <Route path="/" render={(routeProps) => <Home {...routeProps} />} />
      </Switch>
    </AuthContext.Provider>
  );
};

export default App;

import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import {
  Home,
  Dashboard,
  LoginSignUp,
  Register,
  WorkerForm,
  Shipping,
  Payment,
  OrderSummary,
} from "./pages";

import axios from "axios";

import { Cart, ProductDetail } from "./components";

import AuthContext from "./context/AuthContext";
import { auth } from "./services/auth";

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [products, setProducts] = useState([]);
  console.log(currentUser);

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

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const products = await axios.get(
        `${process.env.REACT_APP_API_BASE_URL}/products/`,
      );
      // setProducts(products.data.allProducts)

      // console.log(products.data.data)
      setProducts(products.data.data);
      //    products.data.data.map(beer => console.log(beer));
    } catch (error) {
      console.log("error = ", error);
    }
  };
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
          path="/cart"
          exact
          render={(routeProps) => <Cart {...routeProps} />}
        />
        <Route
          path="/newworker"
          exact
          render={(routeProps) => <WorkerForm {...routeProps} />}
        />
        <Route
          path="/dashboard"
          exact
          render={(routeProps) => <Dashboard {...routeProps} />}
        />
        <Route
          path="/shipping"
          exact
          render={(routeProps) => <Shipping {...routeProps} />}
        />
        <Route
          path="/payment"
          exact
          render={(routeProps) => (
            <Payment {...routeProps} products={products} />
          )}
        />
        <Route
          path="/product/:id"
          exact
          render={(routeProps) => (
            <ProductDetail {...routeProps} products={products} />
          )}
        />
        <Route
          path="/order-summary"
          exact
          render={(routeProps) => <OrderSummary {...routeProps} />}
        />
        <Route path="/" render={(routeProps) => <Home {...routeProps} />} />
      </Switch>
    </AuthContext.Provider>
  );
};

export default App;

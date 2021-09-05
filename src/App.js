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
  ProductDashboard,
  NewProduct,
  EditProduct,
} from "./pages";

//import getCart from "./utils/getCart";
import axios from "axios";

import { Cart, ProductDetail } from "./components";

import AuthContext from "./context/AuthContext";
import { auth } from "./services/auth";

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [products, setProducts] = useState([]);
  //const localCart = JSON.parse(localStorage.getItem("cart"));
  console.log(currentUser);
  /* const makeOrder = async () => {
    try {
      await getCart(localCart);
      console.log(await getCart(localCart));
      const order = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/orders`,
        {
          // userData: [currentUser.email],
          cart: await getCart(localCart),
          // total: 0,
        },
      );
      console.log("------------------>", order);
    } catch (error) {
      console.log(error, "error");
    }
  }; */

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

  /* useEffect(() => {
    makeOrder();
  }, []); */
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
          path="/editproduct/:id"
          exact
          render={(routeProps) => <EditProduct {...routeProps} />}
        />
        <Route
          path="/newproduct"
          exact
          render={(routeProps) => <NewProduct {...routeProps} />}
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
          render={(routeProps) => <Payment {...routeProps} />}
        />
        <Route
          path="/product/:id"
          exact
          render={(routeProps) => (
            <ProductDetail {...routeProps} products={products} />
          )}
        />
        <Route
          path="/productdashboard"
          exact
          render={(routeProps) => <ProductDashboard {...routeProps} />}
        />
        <Route path="/" render={(routeProps) => <Home {...routeProps} />} />
      </Switch>
    </AuthContext.Provider>
  );
};

export default App;

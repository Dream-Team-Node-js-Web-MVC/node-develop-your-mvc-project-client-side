import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import AuthContext from "../../context/AuthContext";
import { signOut } from "../../services/auth";

import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { ShoppingCart } from "@material-ui/icons";
import { classExpression } from "@babel/types";
import logo from "../../assets/logo.jpeg";
import useStyles from "./styles";

const Navbar = () => {
  const classes = useStyles();
  const currentUser = useContext(AuthContext);

  const localCart = JSON.parse(localStorage.getItem("cart"));

  async function handleSignOut() {
    await signOut();
  }
  const [cartLength, setCartLength] = useState(0);
  useEffect(() => {
    if (localCart == null) {
      setCartLength(0);
    } else {
      setCartLength(localCart.length);
    }
  }, [localCart]);
  console.log(cartLength, "cartLength");
  return (
    <>
      <AppBar
        position="fixed"
        className={classExpression.appbar}
        color="inherit"
      >
        <Toolbar>
          <NavLink exact to="/">
            <Typography variant="h6" className={classes.title} color="inherit">
              <img
                src={logo}
                alt="Beer Kingdom"
                height="25px"
                className={classes.image}
              />
            </Typography>
          </NavLink>
          <div className={classes.grow} />
          {currentUser && (
            <div>
              Hello, {currentUser.email}
              <Button color="secondary" onClick={handleSignOut}>
                Log out
              </Button>
            </div>
          )}
          <NavLink exact to="/cart">
            <div className={classes.button}>
              <IconButton aria-label="Show cart items" color="inherit" />
              <Badge badgeContent={cartLength} color="secondary">
                <ShoppingCart />
              </Badge>
            </div>
          </NavLink>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;

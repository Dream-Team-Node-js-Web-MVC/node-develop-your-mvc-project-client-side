import React, { useContext, useState, useEffect } from "react";
import CartItem from "../CartItem/CartItem";
import { Redirect, NavLink } from "react-router-dom";
import useStyles from "./styles";

import {
  TextField,
  Grid,
  //   MenuItem,
  Button,
  Typography,
} from "@material-ui/core";
import AuthContext from "../../context/AuthContext";

function ShippingForm({ cart, totalPrice }) {
  const classes = useStyles();
  const currentUser = useContext(AuthContext);
  let order = JSON.parse(localStorage.getItem("order-info")) || [];
  const [address, setAddress] = useState({
    firstName: "",
    lastName: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  });

  useEffect(() => {
    localStorage.setItem("order-info", JSON.stringify(address));
  }, [order]);

  const handleChange = (event) => {
    setAddress({ ...address, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setAddress({ ...address, [event.target.name]: event.target.value });
  };
  return (
    <>
      {currentUser !== null ? (
        <div className={classes.root}>
          <div className={classes.paper}>
            <Typography variant="h6" gutterBottom>
              Shipping address
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    onChange={handleChange}
                    id="firstName"
                    name="firstName"
                    label="First name"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    onChange={handleChange}
                    id="lastName"
                    name="lastName"
                    label="Last name"
                    fullWidth
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    onChange={handleChange}
                    id="address1"
                    name="address1"
                    label="Address line 1"
                    fullWidth
                    autoComplete="shipping address-line1"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    onChange={handleChange}
                    id="address2"
                    name="address2"
                    label="Address line 2"
                    fullWidth
                    autoComplete="shipping address-line2"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    onChange={handleChange}
                    id="city"
                    name="city"
                    label="City"
                    fullWidth
                    autoComplete="shipping address-level2"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="state"
                    onChange={handleChange}
                    name="state"
                    label="State/Province/Region"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    onChange={handleChange}
                    id="zip"
                    name="zip"
                    label="Zip / Postal code"
                    fullWidth
                    autoComplete="shipping postal-code"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    onChange={handleChange}
                    id="country"
                    name="country"
                    label="Country"
                    fullWidth
                    autoComplete="shipping country"
                  />
                </Grid>
              </Grid>
              <Grid className={classes.buttonGroup}>
                <NavLink
                  to={{ pathname: "/payment", state: { cart, totalPrice } }}
                >
                  <Button
                    type="submit"
                    className={classes.buttons}
                    variant="contained"
                    color="primary"
                  >
                    Payment
                  </Button>
                </NavLink>
                <Button
                  className={classes.buttons}
                  variant="contained"
                  color="secondary"
                >
                  Back
                </Button>
              </Grid>
            </form>
          </div>
          <CartItem totalPrice={totalPrice} cart={cart} />
        </div>
      ) : (
        <Redirect to="/login" />
      )}
    </>
  );
}

export default ShippingForm;

import React from "react";
import CartItem from "../CartItem/CartItem";

import useStyles from "./styles";
import { Button, Typography, Grid } from "@material-ui/core";
function OrderForm({ cart, totalPrice, orderInfo, payInfo }) {
  const classes = useStyles();
  console.log(orderInfo, "orderInfo from orderForm");
  const clearInfo = () => {
      localStorage.clear();
  }
  return (
  <div>
    <div className={classes.root}>
      <Typography variant="h6" gutterBottom>
        Order Number {Math.floor(Math.random() * 9000000) + 1000000}
      </Typography>

      <Grid container className={classes.container}>
        <Typography variant="h6" gutterBottom>
          Shipping Information
        </Typography>
          <Typography>
            {orderInfo.firstName} {orderInfo.lastName}
          </Typography>
          <Typography>
            {orderInfo.address1}, {orderInfo.address2}, {orderInfo.address2}
          </Typography>
          <Typography>
            {orderInfo.city}, {orderInfo.zip}
          </Typography>
          <Typography>
            {orderInfo.state}, {orderInfo.country}
          </Typography>
      </Grid>
      <Grid container  className={classes.container}>
        <Typography variant="h6" gutterBottom>
          Payment Information
        </Typography>
          <Typography>{payInfo.cardHolder}</Typography>
          <Typography>
            {payInfo.cardNumber.slice(0, 4)} **** **** ****
          </Typography>
          <Typography>
            {payInfo.month}/{payInfo.year}
          </Typography>
          <Typography>{payInfo.cvv.slice(0, 1)}**</Typography>
      </Grid>
        <Grid container  className={classes.container}>
       <Typography variant="h6" gutterBottom>
         Purchase
        </Typography>
              <CartItem totalPrice={totalPrice} cart={cart} />
</Grid>
    </div>
    <div className={classes.button}>
    <Button variant="contained" color="primary" href="/" onClick={clearInfo}>
  HOME
</Button>
</div>
</div>
  );
}

export default OrderForm;

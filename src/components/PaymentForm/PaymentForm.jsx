import React from "react";
import CartItem from "../CartItem/CartItem";
import {
  CardHolder,
  CardNumber,
  CardSecurityCode,
  ValidThruMonth,
  ValidThruYear,
} from "reactjs-credit-card/form";
import Card from "reactjs-credit-card/card";
import {
  Grid,
  Box
} from "@material-ui/core";
import useStyles from "./styles";

function PaymentForm({ totalPrice, cart }) {
  //! You can get address information from localStorage
  console.log(JSON.parse(localStorage.getItem("order-info")));
  const classes = useStyles();
  
  return (
    <Grid container display="row" className={classes.container}>
      <Grid item>
        <Card />
        <form>
          <Box display="column">
            <CardNumber placeholder="Card Number" className={classes.input}/>
          </Box>

          <Box display="column">
            <CardHolder placeholder="Card Holder" className={classes.input}/>
          </Box>

          <Box>
            <ValidThruMonth className={classes.date}/>
            <ValidThruYear className={classes.date} style={{ marginLeft: '10px' }}/>
            <CardSecurityCode placeholder="CVV" className="input-text semi" className={classes.cvv}/>
          </Box>

          <Box>
            <button className={classes.submit}>Confirm</button>
          </Box>
        </form>
      </Grid>
      <Grid item>
        <CartItem totalPrice={totalPrice} cart={cart} />
      </Grid>
    </Grid>
  );
}

export default PaymentForm;

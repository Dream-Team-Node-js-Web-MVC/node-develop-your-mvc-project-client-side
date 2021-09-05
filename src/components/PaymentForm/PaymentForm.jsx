import React from "react";
import axios from "axios";

import CartItem from "../CartItem/CartItem";
import getCart from "../../utils/getCart";

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

function PaymentForm({ totalPrice, cart, products }) {
    const classes = useStyles();

  console.log(products, "pay form")
  //! You can get address information from localStorage
  console.log(JSON.parse(localStorage.getItem("order-info")), "Order");
  const makeOrder = async () => {
    const localCart = JSON.parse(localStorage.getItem("cart"));
    const orderInfo = JSON.parse(localStorage.getItem("order-info"));

    try {
      await getCart(localCart);
      console.log(await getCart(localCart));
      const order = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/orders`,
        {
          userData: orderInfo,
          cart: await getCart(localCart),
          // total: 0,
        },
      );
      localCart.map((cartItem) =>
        handleEdit(cartItem._id, cartItem.qty, cartItem.option, "stock"),
      );
      console.log("------------------>", order);
    } catch (error) {
      console.log(error, "error");
    }
  };
  const handleEdit = async (id, quantity, option, stock) => {
    try {
      const getStock = products.filter((product) => product._id === id)[0]
        .stock;
      const ordered = quantity * 2 ** Number(option) * 6;
      console.log(ordered, "ordered");
      const updatedStock = getStock - ordered;
      console.log(updatedStock, "stock");
      await axios.patch(
        `${process.env.REACT_APP_API_BASE_URL}/products/stock/${id}`,
        { stock: updatedStock },
      );
    } catch (error) {
      console.log("error = ", error);
    }
  };

  
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
            <button className={classes.submit} onClick={makeOrder}>Confirm</button>
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

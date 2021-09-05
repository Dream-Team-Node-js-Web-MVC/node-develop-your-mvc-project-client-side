import React, {useState} from "react";
import { NavLink } from "react-router-dom"
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
  Box,
  Button,
} from "@material-ui/core";
import useStyles from "./styles";

function PaymentForm({ totalPrice, cart, products }) {
    const classes = useStyles();
    const [payInfo, setPayInfo] = useState({});

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

  const handleChange = (event) => {
    setPayInfo({ ...payInfo, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setPayInfo({ ...payInfo, [event.target.name]: event.target.value });
  };
  return (
    <Grid container display="row" className={classes.container}>
      <Grid item>
        <Card />
        <form onSubmit={handleSubmit}>
          <Box display="column">
            <CardNumber placeholder="Card Number" name="cardNumber" className={classes.input} onChange={handleChange} />
          </Box>

          <Box display="column">
            <CardHolder placeholder="Card Holder" name="cardHolder" className={classes.input} onChange={handleChange}/>
          </Box>

          <Box>
            <ValidThruMonth className={classes.date} name="month" onChange={handleChange} />
            <ValidThruYear className={classes.date} name="year" style={{ marginLeft: '10px' }} onChange={handleChange}/>
            <CardSecurityCode placeholder="CVV" className="input-text semi" name="cvv" className={classes.cvv} onChange={handleChange}/>
          </Box>

          <Box className={classes.button}>
            <NavLink to={{ pathname: "/order-summary", state: { cart, totalPrice, products, payInfo } }}>
            <Button variant="contained" color="primary" className={classes.submit} onClick={makeOrder}>Confirm</Button>
          </NavLink>
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

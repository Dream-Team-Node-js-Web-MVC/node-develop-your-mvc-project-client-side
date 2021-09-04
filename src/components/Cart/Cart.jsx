import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import Navbar from "../Navbar/Navbar";

import axios from "axios";
import getCart from "../../utils/getCart";
import { Button, Grid, Paper, Typography, ButtonBase, Card, CardContent } from "@material-ui/core";

import useStyles from "./styles";
import { BuildTwoTone } from "@material-ui/icons";

function Cart() {
  const classes = useStyles();

  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  let localCart = JSON.parse(localStorage.getItem("cart"));

  useEffect(() => {
    getCartProducts();
  }, []);
  useEffect(() => {
    getTotal();
  }, []);

  const getCartProducts = async () => {
    setCart(await getCart(localCart));
  };

  useEffect(() => {
    if (localCart !== null) {
      getCartProducts();
    } else {
      localStorage.setItem("cart", JSON.stringify([]));
    }
  }, []);

  const handleQuantity = async (action, index, _id, value) => {
    const local_idIndex = localCart.findIndex((ele) => _id === ele._id);
    if (action === "+") {
      localCart[local_idIndex].qty = localCart[local_idIndex].qty + 1;
    }
    if (action === "-") {
      if (localCart[local_idIndex].qty > 1) {
        localCart[local_idIndex].qty = localCart[local_idIndex].qty - 1;
      }
    }
    if (action === "input") {
      localCart[local_idIndex].qty = Number(value);
    }

    localStorage.setItem("cart", JSON.stringify(localCart));
    await getCartProducts();

    getTotal();
  };

  const getTotal = async () => {
    try {
      const products = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/products/cart`,
        {
          cart: localCart,
        },
      );
      var temp = 0;
      products.data.products.forEach((ele) => {
        localCart.forEach((ele2) => {
          if (ele._id === ele2._id) temp += ele2.qty * ele.price[ele2.price].packPrice;
        });
      });
      temp = temp.toFixed(2);
      setTotal(temp);
      await getCartProducts();
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleRemove = (index) => {
    localCart = localCart.filter(item => item._id !== index );
    localStorage.setItem("cart", JSON.stringify(localCart));
      
    getTotal();
  };
  console.log(cart);
  console.log(localCart);
  return (
    <div>
      <Navbar />
      <main className={classes.content}>
        <div className={classes.root}>
          <Paper className={classes.paper}>
            <Grid container spacing={4}>
              {cart.length === 0 ? (
                <div className={classes.root}>
                  <Typography className={classes.empty} variant="h4">
                    Your Cart is Empty
                  </Typography>
                </div>
              ) : (
                cart.map((cartItem, index) => {
                  console.log(cartItem, "cart item")
                  return (
                    <div key={index} className={classes.item}>
                      <Grid item>
                        <ButtonBase className={classes.image}>
                          <img
                            className={classes.img}
                            alt="product"
                            src={cartItem.images[0]}
                          />
                        </ButtonBase>
                      </Grid>
                      <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                          <Grid item xs>
                            <Typography gutterBottom variant="h5">
                              {cartItem.title}
                            </Typography>
                            <Typography variant="h6" gutterBottom>
                              {cartItem.country}
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                              pack of {cartItem.price[Number(cartItem.option)].pack}
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Button
                              variant="contained"
                              color="secondary"
                              onClick={() => handleRemove(cartItem._id)}>
                              Remove
                            </Button>
                          </Grid>
                        </Grid>
                        <Grid item>
                          <Typography variant="h6">
                            € {cartItem.price[cartItem.option].packPrice}
                          </Typography>
                          <div>
                            <Button onClick={() => handleQuantity("-", index, cartItem._id) }>
                              -
                            </Button>
                            <input onChange={(e) => handleQuantity(
                                  "input",
                                  index,
                                  cartItem._id,
                                  e.target.value,
                                )}
                              type="number"
                              value={cartItem.qty}
                              style={{ width: "10%", height: "25px" }}
                            />
                            <Button onClick={() => handleQuantity("+", index, cartItem._id)}>
                              +
                            </Button>
                          </div>
                        </Grid>
                      </Grid>
                    </div>
                  );
                })
              )}
            </Grid>
          </Paper>
        </div>
        <Card className={classes.summary} elevation={5}>
          <CardContent>
            <Typography variant="h4" gutterBottom>
               Total: {total} €
            </Typography>
            <NavLink to={{ pathname: "/shipping", state: { cart, total } }} style={{ textDecoration: 'none' }}>
              <Button variant="contained" color="primary">
                Checkout
              </Button>
            </NavLink>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}

export default Cart;

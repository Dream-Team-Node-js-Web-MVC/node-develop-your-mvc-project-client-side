import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import Navbar from "../Navbar/Navbar";

import axios from "axios";
import getCart from "../../utils/getCart";
import { Button, Grid, Paper, Typography, ButtonBase } from "@material-ui/core";

import useStyles from "./styles";

function Cart() {
  const classes = useStyles();

  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const localCart = JSON.parse(localStorage.getItem("cart"));

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
          if (ele._id === ele2._id) temp += ele2.qty * ele.price[0].packPrice;
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
    localCart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(localCart));
    getTotal();
  };
  return (
    <div>
      <Navbar />
      <main className={classes.content}>
        <div className={classes.root}>
          <Paper className={classes.paper}>
            <Grid container spacing={4}>
              {cart.length === 0 ? (
                <div className={classes.root}>
                  <h1>Your Cart is Empty</h1>
                </div>
              ) : (
                cart.map((cartItem, index) => {
                  return (
                    <div key={index}>
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
                            <Typography gutterBottom variant="subtitle1">
                              {cartItem.title}
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                              {cartItem.country}
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                              pack of {cartItem.price[0].pack}
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Typography
                              variant="body2"
                              style={{ cursor: "pointer" }}
                              onClick={() => handleRemove(index)}
                            >
                              Remove
                            </Typography>
                          </Grid>
                        </Grid>
                        <Grid item>
                          <Typography variant="subtitle1">
                            € {cartItem.price[0].packPrice}
                          </Typography>
                          <div>
                            <Button
                              onClick={() =>
                                handleQuantity("-", index, cartItem._id)
                              }
                            >
                              -
                            </Button>
                            <input
                              onChange={(e) =>
                                handleQuantity(
                                  "input",
                                  index,
                                  cartItem._id,
                                  e.target.value,
                                )
                              }
                              type="number"
                              value={cartItem.qty}
                              style={{ width: "30%" }}
                            />
                            <Button
                              onClick={() =>
                                handleQuantity("+", index, cartItem._id)
                              }
                            >
                              +
                            </Button>
                          </div>
                        </Grid>
                      </Grid>
                    </div>
                  );
                })
              )}
              <Grid item>
                <Typography variant="h4" gutterBottom>
                  Total: € {total}
                </Typography>
                <NavLink to={{ pathname: "/shipping", state: { cart, total } }}>
                  <Button variant="contained" color="secondary">
                    Checkout
                  </Button>
                </NavLink>
              </Grid>
            </Grid>
          </Paper>
        </div>
      </main>
    </div>
  );
}

export default Cart;

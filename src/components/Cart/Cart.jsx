import React, { useState, useEffect } from "react";

import Navbar from "../Navbar/Navbar";

// import axios from "axios";
import getCart from "../../utils/getCart";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";

import useStyles from "./styles";

function Cart() {
  const classes = useStyles();

  const [cart, setCart] = useState([]);
  const localCart = JSON.parse(localStorage.getItem("cart"));

  //   useEffect(() => {
  //     getCartProducts();
  //   }, []);

  const getCartProducts = async () => {
    setCart(await getCart(localCart));
  };

  useEffect(() => {
    if (localCart !== null) {
      getCartProducts();
    } else {
      localStorage.setItem("cart", JSON.stringify([]));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Navbar />
      <main className={classes.content}>
        {cart.map((cartItem, index) => {
          return (
            <div className={classes.root} key={index}>
              <Paper className={classes.paper}>
                <Grid container spacing={2}>
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
                        >
                          Remove
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle1">
                        € {cartItem.price[0].packPrice}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </div>
          );
        })}
      </main>
    </div>
  );
}

export default Cart;

import React from "react";
import useStyles from "./styles";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";

function CartItem({ totalPrice, cart }) {
  const classes = useStyles();
  return (
  <div className={classes.root}>
    {cart.map((cartItem, index) => {
      console.log(cartItem, "cartItem")
      return (
      <div key={index}>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img className={classes.img}
                alt="complex" src={cartItem.images[0]}/>
                </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography gutterBottom variant="subtitle1">{cartItem.title}</Typography>
                      <Typography variant="body2" gutterBottom>
                        Country: {cartItem.country}</Typography>
                      <Typography variant="body2" color="textSecondary">
                        pack of {cartItem.price[Number(cartItem.option)].pack} x {cartItem.qty}</Typography>
                    </Grid>
                  </Grid>
                  <Grid item>
                  <Typography variant="subtitle1">€ {cartItem.price[Number(cartItem.option)].packPrice * cartItem.qty}</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Paper></div>);})}
          <Typography variant="h5" className={classes.total}>
            Total: € {totalPrice}
          </Typography>
  </div>);

}

export default CartItem;

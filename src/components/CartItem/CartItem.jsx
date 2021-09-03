import React from "react";
import useStyles from "./styles";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";

function CartItem({ totalPrice, cart }) {
  const classes = useStyles();
  return (
    <Grid className={classes.root}>
    <div>
      {cart.map((cartItem) => {
        return (
          <div key={cartItem._id}>
            <Paper className={classes.paper}>
              <Grid container spacing={2}>
                <Grid item>
                  <ButtonBase className={classes.image}>
                    <img
                      className={classes.img}
                      alt="complex"
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
                        Country: {cartItem.country}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        pack of {cartItem.price[0].pack} x {cartItem.qty}
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
    </div>
    <div>
      <Typography variant="h5" className={classes.price}>Total: € {totalPrice}</Typography>
    </div>
    </Grid>
  );
}

export default CartItem;

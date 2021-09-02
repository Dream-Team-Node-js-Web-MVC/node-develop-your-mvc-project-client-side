import React, { useEffect, useState } from "react";
import { Redirect, NavLink } from "react-router-dom";
import ProductDetail from "../../ProductDetail/ProductDetail";
import axios from "axios";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  Button,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import useStyles from "./styles";

const Product = (product) => {
  const classes = useStyles();
  const qty = 1;
  const [cartLength, setCartLength] = useState(0);
  const addToCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let index = cart.findIndex((ele) => product.product._id === ele._id);
    console.log(index);
    if (index === -1) {
      cart.push({
        qty,
        _id: product.product._id,
      });
      setCartLength(cart.length);
    } else {
      cart[index].qty = qty + cart[index].qty;
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    setCartLength(cart.length);
  };

  //TODO add a function here to handle the quantity of selected product.
  return (
    <div>
      <Card className={classes.root}>
        <CardContent>
          <div className={classes.cardContentTop}>
            <Typography className={classes.name} variant="h6" gutterBottom>
              {product.product.title}
            </Typography>
            <CardMedia
              className={classes.media}
              image={product.product.images[0]}
              title={product.product.title}
            />
          </div>

          <div className={classes.cardContentBottom}>
            <Typography
              variant="body2"
              color="textSecondary"
              className={classes.textSize}
            >
              {product.product.description}
            </Typography>

            <CardActions disableSpacing className={classes.cardActions}>
              <Typography variant="h5">
                Price:{product.product.price[0].packPrice}€
              </Typography>
              <NavLink to={`/product/${product.product._id}`}>
                <Button>Go to Detail</Button>
              </NavLink>
              <IconButton aria-label="Add to Cart" onClick={addToCart}>
                <AddShoppingCart />
              </IconButton>
            </CardActions>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Product;

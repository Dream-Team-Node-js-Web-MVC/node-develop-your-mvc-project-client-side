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
  Box
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
          <Box className={classes.cardContentTop}>
              <Typography className={classes.name} variant="h5" gutterBottom>
                {product.product.title}
              </Typography>
              <CardMedia
                className={classes.media}
                image={product.product.images[0]}
                title={product.product.title}
              />
          </Box>

          <Box className={classes.cardContentBottom}>
            <Typography
              variant="body2"
              color="textSecondary"
              className={classes.textSize}
            >
              {product.product.description}
            </Typography>

            <Box className={classes.price}>
              <Typography variant="h6">
                  Price {product.product.price[0].packPrice}€
              </Typography>
            </Box>

            <Box className={classes.cardActions}>
              <NavLink to={`/product/${product.product._id}`} style={{ textDecoration: 'none' }}>
                <Button variant="contained" className={classes.goTo}>Go to Detail</Button>
              </NavLink>
              <IconButton className={classes.icon} aria-label="Add to Cart" onClick={addToCart}>
                <AddShoppingCart/>
              </IconButton>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
};

export default Product;
import React, { useEffect, useState } from "react";
import { Redirect, NavLink } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import useStyles from "./styles";
import { AddShoppingCart } from "@material-ui/icons";
import Box from '@material-ui/core/Box';
import { 
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  Button,
 } from "@material-ui/core";

function ProductDetail(products) {
    const classes = useStyles();
    const qty = 1;
    const [cartLength, setCartLength] = useState(0);

    const addToCart = () => {
        {products.products.map((product) => {
            let cart = JSON.parse(localStorage.getItem("cart")) || [];
            let index = cart.findIndex((ele) => products.match.params.id === ele._id);
            
            if (index === -1) {
              cart.push({
                qty,
                _id: product.product._id,
              });
              setCartLength(cart.length);
            } else if (products.match.params.id === product._id) {
              cart[index].qty = qty + cart[index].qty;
            }

            localStorage.setItem("cart", JSON.stringify(cart));
            setCartLength(cart.length);
        })}
    };

  return (
    <div>
      <Navbar />
      {products.products.map((product) => {
        if (products.match.params.id === product._id) {
          return (
                <Grid container className={classes.root}>
                    <Box display="flex" justifyContent="flex-start">
                        <CardMedia className={classes.image} image={product.images[0]} title={product.title}/>
                        <Box display="flex" flexDirection="column">
                            <Typography className={classes.title} variant="h1" gutterBottom>
                                {product.title}
                            </Typography>
                            <Typography  className={classes.description} gutterBottom>
                                <p>{product.description}</p>
                            </Typography>
                            <Typography variant="h6">
                              Price {product.price[0].packPrice}€
                            </Typography>
                            <Button className={classes.icon} onClick={addToCart}>
                              Add to cart
                            </Button>
                            <NavLink to={`/products`} style={{ textDecoration: 'none' }}>
                              <Button variant="contained" className={classes.back}>Back</Button>
                            </NavLink>
                        </Box>
                    </Box>
                </Grid>    
          );
        }
      })}
    </div>
  );
}

export default ProductDetail;

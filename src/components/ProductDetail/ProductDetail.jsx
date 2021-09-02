import React, { useEffect, useState } from "react";
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
    const [cartLength, setCartLength] = useState(0);

    console.log(products);

    const addToCart = () => {
        {products.products.map((product) => {
            let cart = JSON.parse(localStorage.getItem("cart")) || [];
            let index = cart.findIndex((ele) => product._id === ele._id);
                if (index === -1 && products.match.params.id === product._id) {
                    cart.push({
                        // qty,
                        _id: product._id,
                    });
                    setCartLength(cart.length);
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
                <Grid container>
                    <Box display="flex" justifyContent="flex-start">
                        <CardMedia className={classes.image} image={product.images[0]} title={product.title}/>
                        <Box display="flex" flexDirection="column">
                            <Typography className={classes.title} variant="h1" gutterBottom>
                                {product.title}
                            </Typography>
                            <Typography  className={classes.description} gutterBottom>
                                <p>{product.description}</p>
                            </Typography>
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

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
  MenuItem,
  TextField,
 } from "@material-ui/core";

function ProductDetail(products) {
    const classes = useStyles();
    const qty = 1;
    const [cartLength, setCartLength] = useState(0);
    const [ pack, setPack ] = useState(0);

    const addToCart = () => {
        const item = products.products.filter( product => product._id === products.match.params.id );
        console.log(item[0]._id);

        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        let index = cart.findIndex((ele) => products.match.params.id === ele._id && pack === ele.option);

        if (index === -1) {
          cart.push({
          qty,
          _id: item[0]._id,
          option: pack,
        });

        console.log("Product ID: " + item[0]._id);

        setCartLength(cart.length);
        } else if (products.match.params.id === item[0]._id) {
          cart[index].qty = qty + cart[index].qty;
        }

        localStorage.setItem("cart", JSON.stringify(cart));
        setCartLength(cart.length);
    };

    const handleChange = (e) => {
        setPack(e.target.value);
        console.log(pack);
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
                              Price {product.price[pack].packPrice}€
                            </Typography>
                                <TextField className={classes.input}
                    select
                    required
                    // value={}
                    onChange={handleChange}
                    defaultValue="0"
                    name="pack"
                    label="Pack"
                    variant="filled"
                >
                    <MenuItem value="0">6</MenuItem>
                    <MenuItem value="1">12</MenuItem>
                    <MenuItem value="2">24</MenuItem>
                
                </TextField>  
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

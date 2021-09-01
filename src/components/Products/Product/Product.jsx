import React from 'react'
import { Card, CardMedia,CardContent,CardActions,Typography,IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import useStyles from './styles' 

const Product = (product) => {
    console.log(product.product);
    const classes = useStyles();
    
    const getProduct = () => {
        //? I don't know 
    }
    //TODO addToCart function that stores selected product data to localStorage and then we pass the data to Cart
    //TODO add a function to productController in server to get Cart.
    //TODO add a function here to handle the quantity of selected product.
    return (
    <div>
        <Card className={classes.root} >
            <CardContent >
            <div className={classes.cardContentTop}>
                    <Typography className={classes.name} variant="h6" gutterBottom>
                       {product.product.title}
                    </Typography> 
                    <CardMedia className={classes.media} image={product.product.images[0]} title={product.product.title} />
                
                </div>
                
                <div className={classes.cardContentBottom}>
                    <Typography variant="body2" color="textSecondary">
                   {product.product.description}
                    </Typography> 
                    
                    <CardActions disableSpacing className={classes.cardActions}>
                        <Typography  variant="h5"  >
                            Price:{product.product.price[0].packPrice}
                        </Typography> 
                        <IconButton aria-label="Add to Cart">
                        <AddShoppingCart />
                        </IconButton>
                    </CardActions>
                </div>
            </CardContent>
         </Card>  
    </div>
    )
}

export default Product

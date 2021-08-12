import React from 'react'
import { Card, CardMedia,CardContent,CardActions,Typography,IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import useStyles from './styles' 

const Product = ({product}) => {
    const classes = useStyles();
    return (
    <div>
        <Card className={classes.root} >
            <CardContent >
            <div className={classes.cardContentTop}>
                    <Typography className={classes.name} variant="h6" gutterBottom>
                       {product.name}
                    </Typography> 
                    <CardMedia className={classes.media} image={product.image} title={product.name} />
                
                </div>
                
                <div className={classes.cardContentBottom}>
                    <Typography variant="body2" color="textSecondary">
                   {product.description}
                    </Typography> 
                    
                    <CardActions disableSpacing className={classes.cardActions}>
                        <Typography  variant="h5"  >
                            Price:{product.price}
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

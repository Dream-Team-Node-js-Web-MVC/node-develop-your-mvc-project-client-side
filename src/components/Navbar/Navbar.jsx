import React from 'react';
import { AppBar,Toolbar,IconButton,Badge,MenuItem,Menu,Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { classExpression } from '@babel/types';
import logo from '../../assets/logo.jpeg';
import useStyles from './styles'


const Navbar = () => {
    const classes = useStyles();
    return (
        <>
            <AppBar position="fixed" className={classExpression.appbar} color="inherit">
                <Toolbar>
                    <Typography variant="h6" className={classes.title} color="inherit">
                        <img src={logo} alt="Beer Kingdom" height="25px" className={classes.image}/>
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.button}>
                        <IconButton aria-label="Show cart items" color="inherit"/>
                        <Badge badgeContent={2} color="secondary">
                            <ShoppingCart/>
                        </Badge>

                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar

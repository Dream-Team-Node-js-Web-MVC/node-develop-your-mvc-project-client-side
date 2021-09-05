import React, { useState, useEffect } from 'react'
import useStyles from './styles' 
import { TextField, Grid, MenuItem,Button } from "@material-ui/core";
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function ProductForm() {

    const [product, setProduct] = useState({title: "",description:"", country:"",sixprice:"",twelveprice:"",twentyfourprice:"",images:""});
    const history = useHistory();

    const edit = history.location.pathname.toLocaleLowerCase().includes("editproduct") ? true : false;
    const productId = history.location.pathname.toLocaleLowerCase().replace("/editproduct/", "");

    useEffect(() => {
        if(edit) {
            feedProduct();
        }
    }, [])

    const feedProduct = async () => {
        try {
            const productData = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/products/${productId}`)
            console.log(productData.data.data, "data")
            setProduct({
                title: productData.data.data.title,
                description: productData.data.data.description,
                country: productData.data.data.country,
                sixprice: productData.data.data.price[0].packPrice,
                twelveprice: productData.data.data.price[0].packPrice,
                twentyfourprice: productData.data.data.price[0].packPrice,
                images:productData.data.data.images[0]
            });
        } catch (err) {
            console.log('error = ',err);
        }
    }

    const handleChange = (event) => {
        setProduct({...product, [event.target.name]: event.target.value});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        //postEmployee();
        setProduct({title: "",description:"", country:"",sixprice:"",twelveprice:"",twentyfour:"",images:""})
        console.log(product)
        
    }

    const handleClear = () => {
        setProduct({title: "",description:"", country:"",sixprice:"",twelveprice:"",twentyfour:"",images:""})
    }

    /* const postEmployee = async () => {
        try {
            await axios.post(`${process.env.REACT_APP_API_BASE_URL}/workers/`, newEmployee)
            .then(() => {
                history.push('/dashboard');
            });

        } catch (error) {
            
        }
    } */
    

    const classes = useStyles();
    return (
<>
    <form className={classes.root} onSubmit={handleSubmit}>
        <Grid container>
            <Grid item xs={12} sm={6} md={4} lg={3} >
                <TextField className={classes.input}
                    required
                    onChange={handleChange}
                    type="text"
                    value={product.title}
                    autoComplete="off"
                    id="input"
                    name="title"
                    label="Title"
                    variant="filled"
                />
                <TextField className={classes.input}
                    onChange={handleChange}
                    required
                    type="text"
                    value={product.country}
                    autoComplete="off"
                    name="country"
                    label="Country"
                    variant="filled"
                />
                <TextField className={classes.input}
                    onChange={handleChange}
                    required
                    value={product.description}
                    autoComplete="off"
                    name="description"
                    label="Description"
                    multiline
                    maxRows={8}
                    variant="filled"
                />
                <TextField className={classes.input}
                    required
                    value={product.sixprice}
                    onChange={handleChange}
                    name="sixprice"
                    label="6 Pack Price"
                    variant="filled"
                />
                <TextField className={classes.input}
                    required
                    value={product.twelveprice}
                    onChange={handleChange}
                    name="twelveprice"
                    label="12 Pack Price"
                    variant="filled"
                />
                <TextField className={classes.input}
                    required
                    value={product.twentyfourprice}
                    onChange={handleChange}
                    name="twentyfourprice"
                    label="24 Pack Price"
                    variant="filled"
                />
                <TextField className={classes.input}
                    required
                    value={product.images}
                    onChange={handleChange}
                    name="images"
                    label="Images"
                    variant="filled"
                />
                    <Button type="submit" className={classes.buttons}   variant="contained" color="primary" >Submit</Button>
                    <Button className={classes.buttons} variant="contained" color="secondary" onClick={handleClear} >Clear</Button>
            </Grid>
        </Grid>
    </form>
</>     
    )
}

export default ProductForm

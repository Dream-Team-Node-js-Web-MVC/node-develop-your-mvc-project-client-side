import React, { useState, useEffect } from 'react'
import useStyles from './styles' 
import { TextField, Grid, MenuItem,Button } from "@material-ui/core";
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function ProductForm() {

    const [product, setProduct] = useState({title: "",description:"", country:"",price:[{pack:6, packPrice:""},{pack:12, packPrice:""},{pack:24, packPrice:""}],images:"", stock:""});
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
                price: [
                    {
                        pack: 6,
                        packPrice: productData.data.data.price[0].packPrice
                    },
                    {
                        pack: 12,
                        packPrice: productData.data.data.price[1].packPrice
                    },
                    {
                        pack: 24,
                        packPrice: productData.data.data.price[2].packPrice
                    }

                ],
                stock: productData.data.data.stock,
                images:productData.data.data.images[0]
            });
        } catch (err) {
            console.log('error = ',err);
        }
    }

    const postProduct = async () => {
        try {
            console.log(product, "product when submitting");
            await axios.post(`${process.env.REACT_APP_API_BASE_URL}/products/`, product)
            .then(() => {
                history.push('/productdashboard');
            });

        } catch (error) {
            
        }
    }

    const patchProduct = async () => {
        try {
            await axios.patch(`${process.env.REACT_APP_API_BASE_URL}/products/${productId}`, product)
            .then(() => {
                history.push('/productdashboard');
            });

        } catch (error) {
            
        }
    }

    const handleChange = (event) => {
        const sixPack = product.price[0].packPrice;
        const twelvePack = product.price[1].packPrice;
        const twentyfourPack = product.price[2].packPrice;

        if(event.target.name === "sixprice") {
            setProduct({...product, price: [{pack: 6, packPrice: event.target.value},{pack: 12, packPrice: twelvePack}, {pack: 24, packPrice: twentyfourPack},]});
        } else if (event.target.name === "twelveprice"){
            setProduct({...product, price: [{pack: 6, packPrice: sixPack},{pack: 12, packPrice: event.target.value}, {pack: 24, packPrice: twentyfourPack},]});
        } else if (event.target.name === "twentyfourprice") {
            setProduct({...product, price: [{pack: 6, packPrice: sixPack},{pack: 12, packPrice: twelvePack}, {pack: 24, packPrice:event.target.value},]});
        } else {
            setProduct({...product, [event.target.name]: event.target.value});
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (edit) {
            patchProduct();
        } else {
            postProduct();
        }
        setProduct({title: "",description:"", country:"",price:[{pack:6, packPrice:""},{pack:12, packPrice:""},{pack:24, packPrice:""}],images:"", stock:""});
    }

    const handleClear = () => {
        setProduct({title: "",description:"", country:"",price:[{pack:6, packPrice:""},{pack:12, packPrice:""},{pack:24, packPrice:""}],images:"", stock:""})
    }
    

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
                    value={product.price[0].packPrice}
                    onChange={handleChange}
                    name="sixprice"
                    label="6 Pack Price"
                    variant="filled"
                />
                <TextField className={classes.input}
                    required
                    value={product.price[1].packPrice}
                    onChange={handleChange}
                    name="twelveprice"
                    label="12 Pack Price"
                    variant="filled"
                />
                <TextField className={classes.input}
                    required
                    value={product.price[2].packPrice}
                    onChange={handleChange}
                    name="twentyfourprice"
                    label="24 Pack Price"
                    variant="filled"
                />
                <TextField className={classes.input}
                    required
                    value={product.stock}
                    onChange={handleChange}
                    name="stock"
                    label="Stock"
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

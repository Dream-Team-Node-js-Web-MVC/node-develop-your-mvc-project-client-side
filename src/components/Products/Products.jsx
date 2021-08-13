import React from 'react';
import {Grid} from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles'
import Navbar from '../Navbar/Navbar';

const products = [
    {id: 1,name:'Alhambra',description:'Some information about the beer because people want to know what they drink',price:'€1,00',image:'https://www.loscervecistas.es/wp-content/uploads/2016/09/verde-detalle.png'  },
    {id: 2,name:'Moritz',description:'Some information about the beer because people want to know what they drink',price:'€1,30',image:'https://moritz.com/media/wysiwyg/MORITZ.png' },
    {id: 3,name:'Red Horse',description:'Some information about the beer because people want to know what they drink',price:'€2,50',image:'https://www.monde-selection.com/wp-content/uploads/2019/08/_DSF0521.png' },
    {id: 4,name:'Cusqueña',description:'Some information about the beer because people want to know what they drink',price:'€2,00',image:'https://jotajotafoods.com/wp-content/uploads/2020/07/CER00014.png' },
    {id: 5,name:'Feldschlösschen',description:'Some information about the beer because people want to know what they drink',price:'€3,00',image:'https://www.carlsberggroup.com/media/1436/fieldschlossen-weihnachtsbier.png' },
    {id: 6,name:'Perła ',description:'Some information about the beer because people want to know what they drink',price:'€2,60',image:'https://topdeli.co.uk/wp-content/uploads/2018/03/perla-but.png' },   
    {id: 7,name:'Närke Kaggen Stormaktsporter',description:'Some information about the beer because people want to know what they drink',price:'€3,20',image:'https://glasbanken.se/wp-content/uploads/Kaggen-Stormaktsporter-2019-Na%CC%88rke-Kulturbryggeri.png' },
    {id: 8,name:'Hite',description:'Some information about the beer because people want to know what they drink',price:'€4,00',image:'https://produits.bienmanger.com/35121-0w470h470_Hite_Lager_Beer_From_Kore.jpg' }
]

const Products = () => {
    const classes = useStyles();
    return (
        <>
        <Navbar />
        <main className={classes.content}>
        <div className={classes.toolbar}/>
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                        </Grid>
                ))}
            </Grid>
        </main>
        </>
    );
    
}

export default Products;

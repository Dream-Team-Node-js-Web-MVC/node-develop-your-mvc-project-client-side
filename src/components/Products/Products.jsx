import React from 'react';
import {Grid} from '@material-ui/core';

import Product from './Product/Product';

const products = [
    {id: 1,name:'Alhambra',description:'Spanish Beer',price:'€1,00'  },
    {id: 2,name:'Moritz',description:'Catalan Beer',price:'€1,30' },
    {id: 3,name:'Red Horse',description:'Philipine Beer',price:'€2,50' },
    {id: 4,name:'Cusqueña',description:'Peruvian Beer',price:'€2,00' },
    {id: 5,name:'Feldschlösschen',description:'Swiss Beer',price:'€3,00' },
    {id: 6,name:'Perła ',description:'Polish Beer',price:'€2,60' },
    {id: 7,name:'Närke Kaggen Stormaktsporter',description:'Swidish Beer',price:'€3,20' },
    {id: 8,name:'Hite',description:'South Korean Beer',price:'€4,00' }
]

const Products = () => {
    return (
<main>
        <Grid container justify="center" spacing={4}>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product} />
                    </Grid>
            ))}
        </Grid>
    </main>
    )
    
}

export default Products;

import React from 'react';
import {Product} from './Product';

export const Products = ({products}) => {
    return (
        <ul>
            {products.map((product) => (
                <Product key={product.id} product={product}/>
            ))}
        </ul>
    )

}
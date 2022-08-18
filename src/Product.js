import React, {useContext} from 'react';
import { RegionContext } from './RegionContext';

export const Product = ({product}) => {
    const region = useContext(RegionContext);
    return (
        <li>
            {product.name} - {region.region === 'USA' ? product.price : (product.price*0.88).toFixed(2)} {region.currency}
        </li>
    )
}
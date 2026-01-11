import type { Product } from '../../types/projectTypes';
import React from 'react';
import './productCard.css';


export default function ProductCard({ product }: { product: Product }) {
    const {
        name, 
        price, 
        images, 
    } = product;
    return (
        <div className="product-info">
            <img src={`public/assets/${images[0]}`} alt={name} />
            <p>{name}</p>
            <p className="price">${price}</p>
        </div>
    )
}
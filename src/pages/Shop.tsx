import React from 'react'   
import { useState, useEffect } from 'react';
import { getProducts } from '../data/mockShopAPI';
import type { Product } from '../types/projectTypes';
import ProductCard from '../components/ui/productCard';


export default function Shop() {
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        getProducts()
            .then((data) => {
                setProducts(data);
                console.log(data);
            })
            .catch(console.error)
            .finally(() => setIsLoading(false));
    }, []);

    return (
        <div className="all-products">
            {products.map(product => 
                <ProductCard key={product.id} product={product} />
            )}
        </div>
    )
}